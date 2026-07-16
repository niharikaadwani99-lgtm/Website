import { useState } from 'react'
import './Cassette.css'

const TRACKS = [
  { title: 'Little Bird', artist: 'Aoife Ren', length: '3:14' },
  { title: 'Sable & Rust', artist: 'The Loom House', length: '4:02' },
  { title: 'Cutting Table', artist: 'Marion Says', length: '2:48' },
  { title: 'Bombay Rain', artist: 'Delta Chai', length: '3:36' },
  { title: 'Needle & Thread', artist: 'Petra Vale', length: '3:51' },
  { title: 'Slow Fabric', artist: 'Halide', length: '4:20' },
]

export function CassetteButton({ onClick, style, className = '' }) {
  return (
    <button
      type="button"
      className={`cassette-btn ${className}`}
      onClick={onClick}
      style={style}
      aria-haspopup="dialog"
      aria-label="Open studio playlist"
    >
      <span className="cassette-btn__reels" aria-hidden="true">
        <span />
        <span />
      </span>
      <span className="cassette-btn__label">current playlist</span>
    </button>
  )
}

export function CassettePlayer({ onClose }) {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(false)

  return (
    <div className="cassette-veil" role="dialog" aria-modal="true" aria-label="Studio playlist" onClick={onClose}>
      <div className="cassette-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="cassette-panel__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <p className="label">side a</p>
        <h3 className="cassette-panel__title hand">Niharika&rsquo;s Studio Playlist</h3>

        <div className={`cassette-tape ${playing ? 'is-playing' : ''}`}>
          <span className="cassette-tape__reel cassette-tape__reel--l" />
          <span className="cassette-tape__reel cassette-tape__reel--r" />
          <span className="cassette-tape__window" />
          <span className="cassette-tape__label">what&rsquo;s playing while I sketch</span>
        </div>

        <button type="button" className="cassette-play" onClick={() => setPlaying((p) => !p)}>
          {playing ? '❚❚ pause' : '▶ play'}
        </button>

        <ol className="cassette-tracklist">
          {TRACKS.map((t, i) => (
            <li
              key={t.title}
              className={i === current ? 'is-current' : ''}
              onClick={() => {
                setCurrent(i)
                setPlaying(true)
              }}
            >
              <span className="cassette-tracklist__n">{String(i + 1).padStart(2, '0')}</span>
              <span className="cassette-tracklist__meta">
                <span className="cassette-tracklist__title">{t.title}</span>
                <span className="cassette-tracklist__artist">{t.artist}</span>
              </span>
              <span className="cassette-tracklist__len">{t.length}</span>
            </li>
          ))}
        </ol>

        <p className="cassette-panel__note hand">
          (no sound just yet — this deck is waiting on the real tape. imagine your favourite songs here.)
        </p>
      </div>
    </div>
  )
}
