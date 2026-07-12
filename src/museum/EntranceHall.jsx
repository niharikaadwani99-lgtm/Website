import { useEffect } from 'react'
import { ARTWORKS } from './artworkMap.js'
import { WINGS, HIDDEN_WING } from './wings.js'
import Room3D, { WallFrame, RoomProp } from './Room3D.jsx'
import { PlanterSvg } from './Props.jsx'
import gardenPhoto from './assets/winter-garden.jpg'
import balconyPhoto from './assets/winter-garden-balcony.jpg'
import './EntranceHall.css'

const MOTES = [
  [14, 22, 11], [28, 38, 14], [40, 14, 9], [55, 30, 12], [66, 10, 15],
  [74, 34, 10], [86, 18, 13], [92, 40, 16], [22, 55, 12], [60, 50, 9],
  [80, 58, 14], [46, 62, 11],
]

/* the hanging plan — which wall each portal hangs on, receding into the room */
const LEFT_WALL = [0, 1, 2]   // Sound, Founder, Objects
const RIGHT_WALL = [3, 4]     // Motion, Nostalgia (the hidden frame keeps them company)
const LEFT_POS = [
  { left: '51.5%', top: '25%', width: '13%' },
  { left: '68%', top: '27%', width: '10.5%' },
  { left: '84%', top: '29%', width: '8%' },
]
const RIGHT_POS = [
  { left: '35.5%', top: '25%', width: '13%' },
  { left: '21.5%', top: '27%', width: '10.5%' },
  { left: '8%', top: '29%', width: '8%' },
]

function PortalFrame({ wing, style }) {
  const Art = ARTWORKS[wing.art]
  return (
    <WallFrame
      to={`/${wing.slug}`}
      style={style}
      art={<Art />}
      title={wing.artTitle}
      sub={`${wing.numeral} · ${wing.title}`}
      ariaLabel={`${wing.artTitle} — enter the ${wing.title}`}
    />
  )
}

export default function EntranceHall() {
  useEffect(() => {
    document.title = 'The Glyptotek of Samveg'
  }, [])

  const HiddenArt = ARTWORKS[HIDDEN_WING.art]
  const future = WINGS[WINGS.length - 1]
  const FutureArt = ARTWORKS[future.art]

  const overlay = (
    <>
      {/* daylight and dust, in screen space */}
      <div className="hall-light" aria-hidden="true">
        <div className="hall-light__shaft hall-light__shaft--a" />
        <div className="hall-light__shaft hall-light__shaft--b" />
        <div className="hall-light__shaft hall-light__shaft--c" />
        {MOTES.map(([x, y, dur]) => (
          <span
            key={`${x}-${y}`}
            className="hall-mote"
            style={{ left: `${x}%`, top: `${y}%`, animationDuration: `${dur}s` }}
          />
        ))}
      </div>

      <header className="hall-masthead">
        <p className="smallcaps hall-masthead__eyebrow">A cultural institution of one</p>
        <p className="hall-masthead__wordmark">The Glyptotek of Samveg</p>
      </header>

      <div className="hall-plaque">
        <span className="hall-plaque__finial" aria-hidden="true">❦</span>
        <h1 className="hall-plaque__title">The Glyptotek of Samveg</h1>
        <p className="hall-plaque__line">A collection of music, ideas, dreams, objects, and stories.</p>
        <p className="hall-plaque__line hall-plaque__line--last">Curated over a lifetime.</p>
        <p className="smallcaps hall-plaque__hint">Look around · Begin wherever you feel drawn</p>
      </div>

      <p className="smallcaps hall-visitor">
        Open always · Admission free · No flash photography
      </p>
    </>
  )

  return (
    <main className="hall">
      {/* the courtyard, in three dimensions */}
      <div className="hall-3d">
        <Room3D
          className="hall-room"
          overlay={overlay}
          back={
            <>
              {/* the Winter Garden itself, seen from the entrance */}
              <img src={gardenPhoto} alt="" className="courtyard" />
              <div className="courtyard-veil" aria-hidden="true" />
              <WallFrame
                to={`/${future.slug}`}
                className="hall-back-frame"
                style={{ left: '41.5%', top: '10%', width: '15%' }}
                art={<FutureArt />}
                title={future.artTitle}
                sub={`${future.numeral} · ${future.title}`}
                ariaLabel={`${future.artTitle} — enter ${future.title}`}
              />
            </>
          }
          left={
            <>
              {LEFT_WALL.map((wi, i) => (
                <PortalFrame key={WINGS[wi].slug} wing={WINGS[wi]} style={LEFT_POS[i]} />
              ))}
            </>
          }
          right={
            <>
              {RIGHT_WALL.map((wi, i) => (
                <PortalFrame key={WINGS[wi].slug} wing={WINGS[wi]} style={RIGHT_POS[i]} />
              ))}
              {/* an ordinary little picture, hung low, easy to miss */}
              <WallFrame
                to={`/${HIDDEN_WING.slug}`}
                className="hidden-frame"
                style={{ left: '27%', top: '60%', width: '5.5%' }}
                art={<HiddenArt />}
                ariaLabel="An unremarkable picture. Or is it?"
              />
            </>
          }
          props={
            <>
              <RoomProp x={-700} z={-420} width={180}><PlanterSvg /></RoomProp>
              <RoomProp x={700} z={-420} width={180}><PlanterSvg /></RoomProp>
            </>
          }
        />
      </div>

      {/* the same hall, laid flat for narrow doorways (small screens) */}
      <div className="hall-flat">
        <header className="hall-masthead hall-masthead--flat">
          <p className="smallcaps hall-masthead__eyebrow">A cultural institution of one</p>
          <p className="hall-masthead__wordmark">The Glyptotek of Samveg</p>
        </header>
        <div className="hall-flat__courtyard">
          <img src={balconyPhoto} alt="The winter garden of the Glyptotek, seen from the balcony" />
        </div>
        <div className="hall-plaque hall-plaque--flat">
          <span className="hall-plaque__finial" aria-hidden="true">❦</span>
          <h2 className="hall-plaque__title">The Glyptotek of Samveg</h2>
          <p className="hall-plaque__line">A collection of music, ideas, dreams, objects, and stories.</p>
          <p className="hall-plaque__line hall-plaque__line--last">Curated over a lifetime.</p>
        </div>
        <div className="hall-flat__frames">
          {WINGS.map((wing) => (
            <PortalFrame key={wing.slug} wing={wing} />
          ))}
          <WallFrame
            to={`/${HIDDEN_WING.slug}`}
            className="hidden-frame hidden-frame--flat"
            art={<HiddenArt />}
            sub="Untitled · Artist unknown"
            ariaLabel="An unremarkable picture. Or is it?"
          />
        </div>
        <p className="smallcaps hall-visitor hall-visitor--flat">
          Open always · Admission free · No flash photography
        </p>
      </div>
    </main>
  )
}
