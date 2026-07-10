import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HIDDEN_WING } from './wings.js'
import Room3D, { WallFrame, RoomProp } from './Room3D.jsx'
import { BenchSvg, PlanterSvg } from './Props.jsx'
import ExhibitArt from './ExhibitArt.jsx'
import ExhibitModal from './ExhibitModal.jsx'
import './SpecialExhibition.css'

function WithheldPhotograph() {
  return (
    <svg viewBox="0 0 240 300" aria-label="A photograph, withheld" role="img">
      <rect width="240" height="300" fill="#2a211c" />
      <rect x="16" y="16" width="208" height="268" fill="none" stroke="#8a7261" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="120" cy="126" r="34" fill="none" stroke="#8a7261" strokeWidth="1" opacity="0.7" />
      <path d="M106 126 a14 14 0 0 1 28 0" fill="none" stroke="#c8a888" strokeWidth="1.2" />
      <circle cx="112" cy="119" r="2.2" fill="#c8a888" />
      <circle cx="128" cy="119" r="2.2" fill="#c8a888" />
      <text x="120" y="206" textAnchor="middle" fill="#a08a76" fontSize="12" fontStyle="italic" fontFamily="Cormorant Garamond, serif">
        withheld at the lender’s request
      </text>
      <text x="120" y="228" textAnchor="middle" fill="#6f5d4e" fontSize="9" fontFamily="Jost, sans-serif" letterSpacing="2">
        (IT WAS A GOOD DAY)
      </text>
    </svg>
  )
}

/* which little study hangs beside each kind of piece */
const KIND_VARIANT = { note: 6, vitrine: 1, text: 2 }

function pieceArt(piece, i) {
  if (piece.kind === 'photo') return <WithheldPhotograph />
  return <ExhibitArt seed={i} variant={KIND_VARIANT[piece.kind] ?? i} accent="#d4938a" />
}

const SPOTS = [
  { wall: 'left', style: { left: '56%', top: '27%', width: '12%' } },
  { wall: 'left', style: { left: '77%', top: '29%', width: '9.5%' } },
  { wall: 'back', style: { left: '17%', top: '42%', width: '13%' } },
  { wall: 'back', style: { left: '70%', top: '42%', width: '13%' } },
  { wall: 'right', style: { left: '32%', top: '27%', width: '12%' } },
  { wall: 'right', style: { left: '13.5%', top: '29%', width: '9.5%' } },
]

export default function SpecialExhibition() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    document.title = 'Special Exhibition — The Glyptotek of Samveg'
  }, [])

  const hung = HIDDEN_WING.pieces.filter((p) => p.kind !== 'guestbook')
  const guestbook = HIDDEN_WING.pieces.find((p) => p.kind === 'guestbook')

  const frameFor = (piece, i) => (
    <WallFrame
      key={piece.title}
      style={SPOTS[i].style}
      onClick={() => setOpen(i)}
      art={pieceArt(piece, i)}
      title={piece.title}
      sub={`№ ${String(i + 1).padStart(2, '0')}`}
      ariaLabel={`${piece.title} — read the label`}
    />
  )

  const onWall = (wall) => hung.map((p, i) => (SPOTS[i]?.wall === wall ? frameFor(p, i) : null))

  const overlay = (
    <>
      <nav className="room3d-topbar">
        <Link to="/" className="smallcaps">← Slip back out quietly</Link>
        <span className="smallcaps">Not on the museum map</span>
      </nav>
      <p className="room3d-hint smallcaps">Move to look around · Select a work to read its label</p>
    </>
  )

  return (
    <main className="sx">
      <div className="sx-3d">
        <Room3D
          overlay={overlay}
          back={
            <>
              <div className="room3d-title" style={{ top: '12%' }}>
                <p className="smallcaps room3d-title__eyebrow">✳ Special Exhibition</p>
                <h1 className="room3d-title__name">{HIDDEN_WING.title}</h1>
                <p className="room3d-title__tagline">{HIDDEN_WING.subtitle}</p>
              </div>
              {onWall('back')}
            </>
          }
          left={onWall('left')}
          right={onWall('right')}
          floor={<div className="room-rug" aria-hidden="true" />}
          props={
            <>
              <RoomProp x={0} z={-560} width={300}><BenchSvg /></RoomProp>
              <RoomProp x={-660} z={-1000} width={170}><PlanterSvg /></RoomProp>
              <RoomProp x={660} z={-1000} width={170}><PlanterSvg /></RoomProp>
            </>
          }
        />
      </div>

      {/* flat, for narrow doorways */}
      <div className="sx-flat">
        <nav className="room3d-topbar room3d-topbar--flat">
          <Link to="/" className="smallcaps">← Slip back out quietly</Link>
          <span className="smallcaps">Not on the map</span>
        </nav>
        <header className="sx-flat__header">
          <p className="smallcaps room3d-title__eyebrow">✳ Special Exhibition</p>
          <h1 className="room3d-title__name">{HIDDEN_WING.title}</h1>
          <p className="room3d-title__tagline">{HIDDEN_WING.subtitle}</p>
        </header>
        <div className="sx-flat__frames">
          {hung.map((piece, i) => (
            <WallFrame
              key={piece.title}
              onClick={() => setOpen(i)}
              art={pieceArt(piece, i)}
              title={piece.title}
              sub={`№ ${String(i + 1).padStart(2, '0')}`}
              ariaLabel={`${piece.title} — read the label`}
            />
          ))}
        </div>
      </div>

      {/* lender's note and guest book, below the room */}
      <section className="sx-below">
        <p className="smallcaps sx-below__eyebrow">From the lender</p>
        <p className="sx-below__intro">{HIDDEN_WING.intro}</p>
        {guestbook && (
          <div className="sx-guestbook">
            <p className="smallcaps sx-guestbook__label">Guest book · one entry</p>
            <p className="sx-guestbook__entry">{guestbook.text}</p>
          </div>
        )}
        <footer className="sx-footer">
          <p className="smallcaps">This room does not appear in the catalogue</p>
          <Link to="/" className="sx-footer__link">Return to the entrance hall, and tell no one →</Link>
        </footer>
      </section>

      {open !== null && (
        <ExhibitModal
          exhibit={hung[open]}
          number={`Private collection · № ${String(open + 1).padStart(2, '0')}`}
          art={pieceArt(hung[open], open)}
          onClose={() => setOpen(null)}
        />
      )}
    </main>
  )
}
