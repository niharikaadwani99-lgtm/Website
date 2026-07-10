import { useEffect, useRef, useState } from 'react'
import './Ambience.css'

/*
 * The sound of a large stone room: filtered air, a faint low hum,
 * a slow swell like distant footsteps and climate control.
 * Synthesized live — no recordings, nothing to download.
 */
function buildHallTone() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)()

  const master = ctx.createGain()
  master.gain.value = 0
  master.connect(ctx.destination)

  // air — looped noise through a gentle lowpass
  const seconds = 4
  const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  let last = 0
  for (let i = 0; i < data.length; i++) {
    const white = Math.random() * 2 - 1
    last = (last + 0.02 * white) / 1.02 // brownish noise, softer than white
    data[i] = last * 3.5
  }
  const noise = ctx.createBufferSource()
  noise.buffer = buffer
  noise.loop = true
  const lowpass = ctx.createBiquadFilter()
  lowpass.type = 'lowpass'
  lowpass.frequency.value = 420
  lowpass.Q.value = 0.4
  const noiseGain = ctx.createGain()
  noiseGain.gain.value = 0.5
  noise.connect(lowpass).connect(noiseGain).connect(master)

  // the building's low voice
  const hum = ctx.createOscillator()
  hum.type = 'sine'
  hum.frequency.value = 55
  const humGain = ctx.createGain()
  humGain.gain.value = 0.05
  hum.connect(humGain).connect(master)

  // a very slow breathing swell on the whole bed
  const lfo = ctx.createOscillator()
  lfo.type = 'sine'
  lfo.frequency.value = 0.05
  const lfoGain = ctx.createGain()
  lfoGain.gain.value = 0.012
  lfo.connect(lfoGain).connect(master.gain)

  noise.start()
  hum.start()
  lfo.start()
  master.gain.linearRampToValueAtTime(0.055, ctx.currentTime + 3)

  return {
    stop() {
      const now = ctx.currentTime
      master.gain.cancelScheduledValues(now)
      master.gain.setValueAtTime(master.gain.value, now)
      master.gain.linearRampToValueAtTime(0, now + 1.2)
      setTimeout(() => ctx.close(), 1500)
    },
  }
}

export default function Ambience() {
  const [on, setOn] = useState(false)
  const toneRef = useRef(null)

  useEffect(() => {
    return () => toneRef.current?.stop()
  }, [])

  const toggle = () => {
    if (on) {
      toneRef.current?.stop()
      toneRef.current = null
      setOn(false)
    } else {
      try {
        toneRef.current = buildHallTone()
        setOn(true)
      } catch {
        // no audio available in this browser; the museum stays silent
      }
    }
  }

  return (
    <button
      type="button"
      className={`ambience ${on ? 'ambience--on' : ''}`}
      onClick={toggle}
      aria-pressed={on}
      title={on ? 'Silence the hall' : 'Hear the hall'}
    >
      <span className="ambience__dot" aria-hidden="true" />
      <span className="ambience__label">{on ? 'ambience on' : 'ambience'}</span>
    </button>
  )
}
