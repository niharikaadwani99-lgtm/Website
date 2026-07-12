import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ARTWORKS } from './artworkMap.js'
import { WINGS } from './wings.js'
import Room3D, { WallFrame, RoomProp } from './Room3D.jsx'
import { BenchSvg, PlanterSvg, PedestalSvg } from './Props.jsx'
import ExhibitArt from './ExhibitArt.jsx'
import { BottleArt, SpinningRecordArt, LegoArt, PuzzleArt } from './ObjectsArt.jsx'
import ExhibitModal from './ExhibitModal.jsx'
import './Wing.css'

const CUSTOM_ARTS = { bottle: BottleArt, record: SpinningRecordArt, lego: LegoArt, puzzle: PuzzleArt }

/* hanging plans — where works sit on each wall, receding with the room */
const LEFT_POS = [
  { left: '56%', top: '27%', width: '12%' },
  { left: '77%', top: '29%', width: '9.5%' },
]
const RIGHT_POS = [
  { left: '32%', top: '27%', width: '12%' },
  { left: '13.5%', top: '29%', width: '9.5%' },
]
const BACK_TWO = [
  { left: '17%', top: '42%', width: '13%' },
  { left: '70%', top: '42%', width: '13%' },
]
const BACK_ONE = [{ left: '43.5%', top: '44%', width: '13%' }]

function hangExhibits(count) {
  // -> array of { wall, style } aligned with exhibit index
  if (count === 4) {
    // one on each side wall, two large on the back wall
    return [
      { wall: 'left', style: LEFT_POS[0] },
      { wall: 'back', style: BACK_TWO[0] },
      { wall: 'back', style: BACK_TWO[1] },
      { wall: 'right', style: RIGHT_POS[0] },
    ]
  }
  const back = count >= 6 ? BACK_TWO : BACK_ONE
  const spots = [
    ...LEFT_POS.map((style) => ({ wall: 'left', style })),
    ...back.map((style) => ({ wall: 'back', style })),
    ...RIGHT_POS.map((style) => ({ wall: 'right', style })),
  ]
  return spots.slice(0, count)
}

export default function Wing({ wing }) {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    document.title = `${wing.title} — The Glyptotek of Samveg`
  }, [wing])

  useEffect(() => setOpen(null), [wing])

  const Art = ARTWORKS[wing.art]
  const index = WINGS.findIndex((w) => w.slug === wing.slug)
  const next = WINGS[(index + 1) % WINGS.length]
  const spots = hangExhibits(wing.exhibits.length)
  const seedBase = wing.slug.length

  const subFor = (exhibit, i) =>
    `№ ${String(i + 1).padStart(2, '0')}${exhibit.links ? ' · ♪' : ''}`

  const artFor = (exhibit, i) => {
    const Custom = exhibit.customArt && CUSTOM_ARTS[exhibit.customArt]
    return Custom ? <Custom /> : <ExhibitArt seed={seedBase + i} variant={exhibit.artVariant} />
  }

  const frameFor = (exhibit, i) => (
    <WallFrame
      key={exhibit.title}
      style={spots[i].style}
      onClick={() => setOpen(i)}
      art={artFor(exhibit, i)}
      title={exhibit.title}
      sub={subFor(exhibit, i)}
      ariaLabel={`${exhibit.title} — read the label`}
    />
  )

  const wallExhibits = (wall) =>
    wing.exhibits.map((e, i) => (spots[i].wall === wall ? frameFor(e, i) : null))

  const overlay = (
    <>
      <nav className="room3d-topbar">
        <Link to="/" className="smallcaps">← Entrance Hall</Link>
        <span className="smallcaps room3d-topbar__wordmark">The Glyptotek of Samveg</span>
        <span className="smallcaps">Wing {wing.numeral}</span>
      </nav>
      <p className="room3d-hint smallcaps">Move to look around · Select a work to read its label</p>
    </>
  )

  return (
    <main className={`wing wing--${wing.theme}`}>
      {/* the room itself */}
      <div className="wing-3d">
        <Room3D
          overlay={overlay}
          back={
            <>
              <div className="room3d-title" style={{ top: '13%' }}>
                <p className="smallcaps room3d-title__eyebrow">Wing {wing.numeral} of VI</p>
                <h1 className="room3d-title__name">{wing.title}</h1>
                <p className="room3d-title__tagline">{wing.tagline}</p>
              </div>
              {wallExhibits('back')}
            </>
          }
          left={wallExhibits('left')}
          right={wallExhibits('right')}
          floor={<div className="room-rug" aria-hidden="true" />}
          props={
            <>
              <RoomProp x={0} z={-560} width={300}><BenchSvg /></RoomProp>
              <RoomProp x={-660} z={-1000} width={170}><PlanterSvg /></RoomProp>
              <RoomProp x={660} z={-1000} width={170}><PlanterSvg /></RoomProp>
              {wing.exhibits.length < 6 && (
                <RoomProp x={620} z={-520} width={120}><PedestalSvg /></RoomProp>
              )}
            </>
          }
        />
      </div>

      {/* the same works, laid flat for narrow doorways */}
      <div className="wing-flat">
        <nav className="room3d-topbar room3d-topbar--flat">
          <Link to="/" className="smallcaps">← Entrance Hall</Link>
          <span className="smallcaps">Wing {wing.numeral}</span>
        </nav>
        <header className="wing-flat__header">
          <p className="smallcaps room3d-title__eyebrow">Wing {wing.numeral} of VI</p>
          <h1 className="room3d-title__name">{wing.title}</h1>
          <p className="room3d-title__tagline">{wing.tagline}</p>
        </header>
        <div className="wing-flat__frames">
          {wing.exhibits.map((exhibit, i) => (
            <WallFrame
              key={exhibit.title}
              onClick={() => setOpen(i)}
              art={artFor(exhibit, i)}
              title={exhibit.title}
              sub={subFor(exhibit, i)}
              ariaLabel={`${exhibit.title} — read the label`}
            />
          ))}
        </div>
      </div>

      {/* curator's text, below the room */}
      <section className="wing-below">
        <div className="wing-below__art" aria-hidden="true">
          <span className="wing-below__frame"><Art /></span>
          <span className="smallcaps wing-below__caption">
            {wing.artTitle} · {wing.artMedium}
          </span>
        </div>
        <div>
          <p className="smallcaps wing-below__eyebrow">From the curator</p>
          <p className="wing-below__intro">{wing.intro}</p>
        </div>
      </section>

      {wing.quote && (
        <section className="wing-quote">
          <span className="wing-quote__mark" aria-hidden="true">❝</span>
          <blockquote className="wing-quote__text">{wing.quote}</blockquote>
          <p className="smallcaps wing-quote__attribution">Inscribed at the centre of the room</p>
        </section>
      )}

      <footer className="wing-footer">
        <p className="smallcaps wing-footer__label">Continue your visit</p>
        <div className="wing-footer__links">
          <Link to={`/${next.slug}`} className="wing-footer__next">
            <span className="smallcaps">Next wing</span>
            <span className="wing-footer__next-title">{next.title} →</span>
          </Link>
          <Link to="/" className="smallcaps wing-footer__home">Return to the entrance hall</Link>
        </div>
      </footer>

      {open !== null && (
        <ExhibitModal
          exhibit={wing.exhibits[open]}
          number={`${wing.title} · № ${String(open + 1).padStart(2, '0')}`}
          art={artFor(wing.exhibits[open], open)}
          onClose={() => setOpen(null)}
        />
      )}
    </main>
  )
}
