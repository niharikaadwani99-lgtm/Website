import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HIDDEN_WING } from './wings.js'
import './SpecialExhibition.css'

function WithheldPhotograph() {
  return (
    <svg viewBox="0 0 260 200" aria-label="A photograph, withheld" role="img">
      <rect width="260" height="200" fill="#2a211c" />
      <rect x="14" y="14" width="232" height="172" fill="none" stroke="#8a7261" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="130" cy="86" r="30" fill="none" stroke="#8a7261" strokeWidth="1" opacity="0.7" />
      <path d="M118 86 a12 12 0 0 1 24 0" fill="none" stroke="#c8a888" strokeWidth="1.2" />
      <circle cx="123" cy="80" r="2" fill="#c8a888" />
      <circle cx="137" cy="80" r="2" fill="#c8a888" />
      <text x="130" y="146" textAnchor="middle" fill="#a08a76" fontSize="11" fontStyle="italic" fontFamily="Cormorant Garamond, serif">
        withheld at the lender’s request
      </text>
      <text x="130" y="164" textAnchor="middle" fill="#6f5d4e" fontSize="9" fontFamily="Jost, sans-serif" letterSpacing="2">
        (IT WAS A GOOD DAY)
      </text>
    </svg>
  )
}

function Piece({ piece, index }) {
  const number = `№ ${String(index + 1).padStart(2, '0')}`

  if (piece.kind === 'guestbook') {
    return (
      <div className="sx-guestbook">
        <p className="smallcaps sx-guestbook__label">Guest book · one entry</p>
        <p className="sx-guestbook__entry">{piece.text}</p>
      </div>
    )
  }

  return (
    <article className={`sx-piece sx-piece--${piece.kind}`}>
      <p className="smallcaps sx-piece__number">{number}</p>
      <h2 className="sx-piece__title">{piece.title}</h2>
      {piece.kind === 'photo' && (
        <figure className="sx-photo">
          <span className="sx-photo__frame">
            <WithheldPhotograph />
          </span>
          <figcaption className="sx-piece__text">{piece.caption}</figcaption>
        </figure>
      )}
      {piece.text && piece.kind !== 'photo' && <p className="sx-piece__text">{piece.text}</p>}
      {piece.list && (
        <ul className="sx-piece__list">
          {piece.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default function SpecialExhibition() {
  useEffect(() => {
    document.title = 'Special Exhibition — The Glyptotek of Samveg'
  }, [])

  return (
    <main className="sx">
      <nav className="wing-nav sx-nav">
        <Link to="/" className="smallcaps sx-nav__back">← Slip back out quietly</Link>
        <span className="smallcaps sx-nav__mark">Not on the museum map</span>
      </nav>

      <header className="sx-header">
        <p className="smallcaps sx-header__eyebrow">✳ Special Exhibition</p>
        <h1 className="sx-header__title">{HIDDEN_WING.title}</h1>
        <p className="sx-header__subtitle">{HIDDEN_WING.subtitle}</p>
        <p className="sx-header__intro">{HIDDEN_WING.intro}</p>
      </header>

      <section className="sx-pieces" aria-label="Works on loan from a private collection">
        {HIDDEN_WING.pieces.map((piece, i) => (
          <Piece key={piece.title ?? 'guestbook'} piece={piece} index={i} />
        ))}
      </section>

      <footer className="sx-footer">
        <p className="smallcaps">This room does not appear in the catalogue</p>
        <Link to="/" className="sx-footer__link">Return to the entrance hall, and tell no one →</Link>
      </footer>
    </main>
  )
}
