import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ARTWORKS } from './artworkMap.js'
import { WINGS, HIDDEN_WING } from './wings.js'
import './EntranceHall.css'

const MOTES = [
  [12, 18, 11], [26, 34, 14], [38, 12, 9], [52, 28, 12], [64, 8, 15],
  [72, 30, 10], [84, 16, 13], [93, 36, 16], [20, 52, 12], [58, 48, 9],
  [78, 56, 14], [44, 60, 11],
]

function Plant({ flip = false }) {
  return (
    <svg viewBox="0 0 120 190" className={`hall-plant ${flip ? 'hall-plant--flip' : ''}`} aria-hidden="true">
      <g fill="none" stroke="#5e6e4f" strokeWidth="2.4" strokeLinecap="round">
        <path d="M60 132 C 58 96, 44 76, 26 62" />
        <path d="M60 132 C 62 92, 74 68, 92 54" />
        <path d="M60 132 C 60 88, 58 60, 60 34" />
        <path d="M60 132 C 56 108, 40 100, 24 98" />
        <path d="M60 132 C 66 106, 84 98, 98 96" />
      </g>
      <g fill="#6d7f5c">
        <ellipse cx="24" cy="58" rx="14" ry="7" transform="rotate(-38 24 58)" />
        <ellipse cx="94" cy="50" rx="15" ry="7" transform="rotate(32 94 50)" />
        <ellipse cx="60" cy="28" rx="8" ry="16" />
        <ellipse cx="21" cy="96" rx="12" ry="6" transform="rotate(-12 21 96)" />
        <ellipse cx="101" cy="94" rx="12" ry="6" transform="rotate(10 101 94)" />
      </g>
      <path d="M38 132 h44 l-5 46 h-34 z" fill="#b3a68d" />
      <path d="M38 132 h44 l-1.5 10 h-41 z" fill="#8a7e68" />
    </svg>
  )
}

function FramedWork({ wing, size }) {
  const Art = ARTWORKS[wing.art]
  return (
    <Link to={`/${wing.slug}`} className={`framed framed--${size}`}>
      <span className="framed__frame">
        <span className="framed__mat">
          <Art />
        </span>
      </span>
      <span className="framed__plate">
        <span className="framed__title">{wing.artTitle}</span>
        <span className="framed__wing smallcaps">{`${wing.numeral} · ${wing.title}`}</span>
        <span className="framed__medium">{wing.artMedium}</span>
      </span>
    </Link>
  )
}

const HANG_SIZES = ['tall', 'wide', 'tall', 'wide', 'tall', 'tall', 'wide']

export default function EntranceHall() {
  useEffect(() => {
    document.title = 'The Glyptotek of Samveg'
  }, [])

  const HiddenArt = ARTWORKS[HIDDEN_WING.art]

  return (
    <main className="hall">
      {/* the dome, the daylight, the dust */}
      <div className="hall-dome" aria-hidden="true">
        <div className="hall-dome__glass" />
        <div className="hall-dome__shaft hall-dome__shaft--a" />
        <div className="hall-dome__shaft hall-dome__shaft--b" />
        <div className="hall-dome__shaft hall-dome__shaft--c" />
        {MOTES.map(([x, y, dur]) => (
          <span
            key={`${x}-${y}`}
            className="hall-mote"
            style={{ left: `${x}%`, top: `${y}%`, animationDuration: `${dur}s` }}
          />
        ))}
      </div>

      <header className="hall-header">
        <p className="smallcaps hall-header__eyebrow">A cultural institution of one</p>
        <p className="hall-header__wordmark">The Glyptotek of Samveg</p>
        <p className="smallcaps hall-header__hours">Open always · Admission free · Please linger</p>
      </header>

      {/* the plaque */}
      <section className="hall-plaque-scene">
        <Plant />
        <div className="hall-plaque">
          <span className="hall-plaque__finial" aria-hidden="true">❦</span>
          <h1 className="hall-plaque__title">The Glyptotek of Samveg</h1>
          <p className="hall-plaque__line">A collection of music, ideas, dreams, objects, and stories.</p>
          <p className="hall-plaque__line hall-plaque__line--last">Curated over a lifetime.</p>
          <p className="smallcaps hall-plaque__hint">Begin wherever you feel drawn</p>
        </div>
        <Plant flip />
      </section>

      {/* the walls */}
      <section className="hall-walls" aria-label="The wings of the museum">
        {WINGS.map((wing, i) => (
          <FramedWork key={wing.slug} wing={wing} size={HANG_SIZES[i]} />
        ))}
      </section>

      {/* the corridor one walks past on the way out */}
      <section className="hall-corridor">
        <svg viewBox="0 0 220 90" className="hall-bench" aria-hidden="true">
          <rect x="14" y="34" width="192" height="12" rx="3" fill="#4a3526" />
          <rect x="30" y="46" width="10" height="38" fill="#3a2a1d" />
          <rect x="180" y="46" width="10" height="38" fill="#3a2a1d" />
          <rect x="14" y="30" width="192" height="5" rx="2" fill="#63492e" />
        </svg>

        <Link
          to="/special-exhibition"
          className="hidden-frame"
          aria-label="An unremarkable picture. Or is it?"
        >
          <span className="hidden-frame__frame">
            <HiddenArt />
          </span>
          <span className="hidden-frame__plate smallcaps">Untitled · Artist unknown</span>
          <span className="hidden-frame__whisper">the frame is warm to the touch…</span>
        </Link>

        <svg viewBox="0 0 120 190" className="hall-plant hall-plant--corridor" aria-hidden="true">
          <g fill="none" stroke="#5e6e4f" strokeWidth="2.2" strokeLinecap="round">
            <path d="M60 130 C 54 92, 36 74, 22 66" />
            <path d="M60 130 C 66 90, 82 70, 96 60" />
            <path d="M60 130 C 60 86, 60 58, 58 36" />
          </g>
          <g fill="#6d7f5c">
            <ellipse cx="20" cy="62" rx="13" ry="6" transform="rotate(-32 20 62)" />
            <ellipse cx="98" cy="56" rx="13" ry="6" transform="rotate(28 98 56)" />
            <ellipse cx="58" cy="30" rx="7" ry="14" />
          </g>
          <path d="M40 130 h40 l-4 44 h-32 z" fill="#b3a68d" />
        </svg>
      </section>

      {/* marble floor */}
      <div className="hall-floor" aria-hidden="true" />

      <footer className="hall-footer">
        <p className="smallcaps">Visitor information</p>
        <p className="hall-footer__note">
          No flash photography. Conversation encouraged. The café serves yellow dal on Sundays.
        </p>
        <p className="smallcaps hall-footer__colophon">The Glyptotek of Samveg · Wing by wing, forever</p>
      </footer>
    </main>
  )
}
