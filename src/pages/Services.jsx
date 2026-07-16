import { useState } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { RingHoles } from '../components/Deco.jsx'
import './Services.css'

const SERVICES = [
  {
    label: 'Concept Development',
    color: '#c9b06a',
    sketch: (
      <path d="M50 90 C 20 90, 10 60, 30 40 C 45 25, 70 30, 75 50 C 78 62, 68 70, 58 65" />
    ),
    body:
      'Turning a loose idea — a feeling, a reference, a market gap — into a point of view a collection can actually be built around.',
  },
  {
    label: 'Collection Design',
    color: '#d9b8ae',
    sketch: <path d="M50 15 L35 35 L38 95 L62 95 L65 35 Z M35 35 L20 55 M65 35 L80 55" />,
    body:
      'Full range planning — silhouettes, fabric stories, colour palettes — built to hang together as a collection, not a pile of separate pieces.',
  },
  {
    label: 'Tech Packs',
    color: '#8a9679',
    sketch: (
      <>
        <rect x="20" y="18" width="70" height="84" rx="2" />
        <line x1="30" y1="35" x2="80" y2="35" />
        <line x1="30" y1="48" x2="80" y2="48" />
        <line x1="30" y1="61" x2="60" y2="61" />
      </>
    ),
    body:
      'The unglamorous document that saves a collection: measurements, construction notes, materials, grading — specific enough that nothing gets guessed.',
  },
  {
    label: 'Sampling Support',
    color: '#b9c8cf',
    sketch: (
      <>
        <circle cx="55" cy="40" r="14" />
        <path d="M55 54 L55 95 M40 70 L70 70" />
      </>
    ),
    body:
      'Reviewing first samples like they owe you money. Fit notes, construction fixes, and the back-and-forth that gets a sample from "close" to "correct."',
  },
  {
    label: 'Production Guidance',
    color: '#7a2e2c',
    sketch: <path d="M15 60 L40 60 L40 40 L65 40 L65 75 L95 75 M85 65 L95 75 L85 85" />,
    body:
      'Guiding a collection from approved sample to a finished production run — timelines, quality checkpoints, and the logistics no one designs for fun.',
  },
  {
    label: 'Manufacturer Communication',
    color: '#4d4a35',
    sketch: (
      <>
        <path d="M20 30 Q20 20 30 20 L70 20 Q80 20 80 30 L80 55 Q80 65 70 65 L40 65 L25 80 L28 65 L30 65 Q20 65 20 55 Z" />
      </>
    ),
    body:
      'Translating between a brand’s vision and a factory floor’s reality — in both directions — so nothing is lost in the handoff.',
  },
]

function Services() {
  const [active, setActive] = useState(0)

  return (
    <div className="page services-page">
      <Nav />

      <header className="services-hero wrap">
        <p className="label">the binder on the shelf</p>
        <h1 className="hand services-hero__title">what I can do for you</h1>
        <p className="services-hero__sub">
          Pull a tab. Each one opens like an actual divider — because that’s closer to
          how the work really happens: one section at a time, referenced constantly.
        </p>
      </header>

      <div className="wrap binder">
        <RingHoles count={8} className="binder__rings" />

        <div className="binder__tabs">
          {SERVICES.map((s, i) => (
            <button
              key={s.label}
              className={`binder__tab ${i === active ? 'is-active' : ''}`}
              style={{ background: s.color }}
              onClick={() => setActive(i)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="binder__page">
          <svg viewBox="0 0 110 110" className="binder__sketch" style={{ color: SERVICES[active].color }}>
            <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {SERVICES[active].sketch}
            </g>
          </svg>
          <h2 className="hand binder__page-title">{SERVICES[active].label}</h2>
          <p className="binder__page-body">{SERVICES[active].body}</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Services
