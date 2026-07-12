import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { WINGS } from './wings.js'
import { ARTWORKS } from './artworkMap.js'
import Room3D, { RoomProp } from './Room3D.jsx'
import { BenchSvg } from './Props.jsx'
import './FutureWing.css'

/*
 * Wing VI — the vision lab. Three installations of things not yet built:
 * a house, a factory, and this museum in miniature.
 * Visit all three and the museum model grows a door.
 */

const VISITED_KEY = 'glyptotek-future-visited'

function readVisited() {
  try {
    const raw = JSON.parse(localStorage.getItem(VISITED_KEY))
    return Array.isArray(raw) ? raw : []
  } catch {
    return []
  }
}

function writeVisited(list) {
  try {
    localStorage.setItem(VISITED_KEY, JSON.stringify(list))
  } catch {
    // storage unavailable — the door will simply appear per visit
  }
}

/* ————— the four spaces of the hacker house ————— */

const SPACES = [
  {
    id: 'table',
    name: 'The Long Table',
    note: 'The load-bearing furniture of the whole house.',
    points: ['Shared meals, cooked badly and eaten well', 'Late-night conversations that outlast the candles', 'Founders meeting each other before they know they needed to'],
  },
  {
    id: 'workshop',
    name: 'The Workshop',
    note: 'Sawdust, solder, and whiteboard ink.',
    points: ['Products being built in the open', 'Whiteboards that are never fully erased', 'Sketches taped over sketches', 'Prototypes in every state of undress'],
  },
  {
    id: 'record',
    name: 'The Record Room',
    note: 'An embassy of the Hall of Sound.',
    points: ['Music discovery as a house sport', 'Listening sessions, lights low, side A uninterrupted'],
  },
  {
    id: 'library',
    name: 'The Library',
    note: 'Quiet is also infrastructure.',
    points: ['Books left open, face down, mid-argument', 'Research papers with coffee rings', 'Notes in every margin'],
  },
  {
    id: 'courtyard',
    name: 'The Courtyard',
    note: 'Where ideas become companies.',
    points: ['Open sky in the middle of the house', 'The walk-and-talk track', 'Where the long table moves in summer'],
  },
]

/* ————— the product factory ————— */

const PRODUCTS = [
  {
    num: '001',
    name: 'Nightshift',
    tag: 'For dreams that vanish on waking',
    problem: 'Dreams evaporate faster than they can be written down.',
    why: 'The subconscious does its best work unsupervised — losing it to the snooze button is a rounding error against the soul.',
    inspired: 'A dream journal with seventeen half-finished entries, kept on the nightstand.',
  },
  {
    num: '002',
    name: 'Commonplace',
    tag: 'For ideas with no address',
    problem: 'Notes scatter across six apps, three notebooks, and one unfortunate napkin.',
    why: 'An idea you cannot find again is an idea you never had.',
    inspired: 'The napkin. It did not survive the laundry.',
  },
  {
    num: '003',
    name: 'Liner Notes',
    tag: 'For music that deserves margins',
    problem: 'Songs are shared as bare links, stripped of the “wait for 2:41” that made them matter.',
    why: 'A recommendation is an act of love, and love deserves annotation.',
    inspired: 'Playlists made for an audience of one or two. See the Hall of Sound.',
  },
  {
    num: '004',
    name: 'Doorbell',
    tag: 'For houses with a mission',
    problem: 'Communal living runs on chore charts, group-chat archaeology, and hope.',
    why: 'Hacker houses deserve infrastructure as intentional as their ambitions.',
    inspired: 'Installation I, standing one plinth away.',
  },
  {
    num: '005',
    name: 'Provenance',
    tag: 'For collections that outgrow memory',
    problem: 'Collectors forget where, when, and above all why each object was acquired.',
    why: 'An object without its story is just inventory.',
    inspired: 'The Gallery of Objects, three wings back.',
  },
  {
    num: '006',
    name: 'Sparring',
    tag: 'For thoughts that need a partner',
    problem: 'Thinking alone plateaus; the best ideas surface in collision.',
    why: 'Everyone deserves one person who asks “but why?” at exactly the wrong moment, which is the right one.',
    inspired: 'Late-night conversations at long tables.',
  },
  {
    num: '007',
    name: 'Compound',
    tag: 'For systems, not resolutions',
    problem: 'Goals are set annually and abandoned quarterly.',
    why: 'Progress is a feedback loop, not a wish. Instrument the loop.',
    inspired: 'The subject’s clinical inability to leave a process unoptimized.',
  },
]

/* ————— svg: the objects in the room ————— */

function HouseModelSvg() {
  return (
    <svg viewBox="0 0 280 250" aria-hidden="true">
      <defs>
        <filter id="fw-glow-h" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>
      <ellipse cx="140" cy="238" rx="110" ry="8" fill="rgba(20, 16, 8, 0.3)" />
      <ellipse cx="140" cy="170" rx="96" ry="40" fill="#ffd98a" opacity="0.28" filter="url(#fw-glow-h)" />
      {/* plinth */}
      <rect x="52" y="196" width="176" height="40" fill="#cfc9ba" />
      <rect x="52" y="196" width="176" height="5" fill="#eae5d8" />
      {/* the model */}
      <rect x="74" y="128" width="88" height="68" fill="#e8e2d2" stroke="#8f8a77" strokeWidth="1.4" />
      <rect x="150" y="104" width="66" height="92" fill="#dcd5c2" stroke="#8f8a77" strokeWidth="1.4" />
      <rect x="66" y="122" width="104" height="7" fill="#8f8a77" />
      <rect x="144" y="98" width="78" height="7" fill="#8f8a77" />
      {/* lit windows */}
      <g fill="#ffc95e">
        <rect x="82" y="140" width="18" height="24" />
        <rect x="106" y="140" width="18" height="24" />
        <rect x="130" y="140" width="18" height="42" />
        <rect x="158" y="114" width="14" height="18" />
        <rect x="178" y="114" width="14" height="18" />
        <rect x="158" y="140" width="34" height="26" opacity="0.85" />
      </g>
      <rect x="82" y="172" width="18" height="24" fill="#4a4335" />
      {/* roof deck rail + tiny trees */}
      <g stroke="#8f8a77" strokeWidth="1.2">
        <line x1="150" y1="98" x2="150" y2="90" /><line x1="170" y1="98" x2="170" y2="90" />
        <line x1="190" y1="98" x2="190" y2="90" /><line x1="210" y1="98" x2="210" y2="90" />
        <line x1="146" y1="90" x2="214" y2="90" />
      </g>
      <g>
        <circle cx="62" cy="184" r="10" fill="#6d8457" /><rect x="60" y="188" width="4" height="10" fill="#5f4530" />
        <circle cx="232" cy="180" r="12" fill="#5e7549" /><rect x="230" y="186" width="4" height="12" fill="#5f4530" />
      </g>
      <text x="140" y="226" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="10" letterSpacing="3" fill="#6f6a58">HOUSE 01</text>
    </svg>
  )
}

function ProductWallSvg() {
  const cards = [
    [18, 26, -6, 0.55], [104, 12, 4, 0.75], [196, 30, -3, 0.6],
    [46, 104, 3, 0.85], [150, 96, -5, 1], [232, 112, 5, 0.7],
    [96, 182, -4, 0.8],
  ]
  return (
    <svg viewBox="0 0 310 260" aria-hidden="true">
      <g stroke="#a98a52" strokeWidth="0.8" opacity="0.4">
        <line x1="60" y1="60" x2="150" y2="120" /><line x1="150" y1="120" x2="240" y2="64" />
        <line x1="90" y1="140" x2="150" y2="120" /><line x1="150" y1="120" x2="140" y2="200" />
      </g>
      {cards.map(([x, y, rot, op], i) => (
        <g key={x} transform={`translate(${x} ${y}) rotate(${rot})`} opacity={op}>
          <rect x="3" y="4" width="76" height="54" rx="6" fill="rgba(20, 16, 8, 0.25)" />
          <rect width="76" height="54" rx="6" fill={i === 4 ? '#f3e3bd' : '#f7f5ee'} stroke={i === 4 ? '#a98a52' : '#b9b4a4'} strokeWidth="1.2" />
          <rect x="8" y="9" width="26" height="5" rx="2.5" fill={i === 4 ? '#a98a52' : '#8f8a77'} />
          <rect x="8" y="21" width="60" height="3" rx="1.5" fill="#c6c1b1" />
          <rect x="8" y="29" width="48" height="3" rx="1.5" fill="#c6c1b1" />
          <rect x="8" y="40" width="16" height="6" rx="3" fill={i === 4 ? '#d4af6a' : '#dedacb'} />
        </g>
      ))}
    </svg>
  )
}

function MuseumModelSvg({ showDoor = false }) {
  return (
    <svg viewBox="0 0 440 300" aria-hidden="true">
      <ellipse cx="220" cy="288" rx="180" ry="9" fill="rgba(20, 16, 8, 0.3)" />
      {/* table */}
      <rect x="60" y="238" width="320" height="16" fill="#4a3526" />
      <rect x="82" y="254" width="14" height="32" fill="#33241a" />
      <rect x="344" y="254" width="14" height="32" fill="#33241a" />
      {/* model inside */}
      <g>
        <rect x="120" y="196" width="200" height="42" fill="#ddd6c4" stroke="#9b9682" strokeWidth="1" />
        <rect x="96" y="206" width="52" height="32" fill="#cfc8b4" stroke="#9b9682" strokeWidth="1" />
        <rect x="292" y="206" width="52" height="32" fill="#cfc8b4" stroke="#9b9682" strokeWidth="1" />
        <polygon points="220,164 262,196 178,196" fill="#b0ab97" />
        <path d="M196 196 a24 24 0 0 1 48 0 z" fill="#a49f8c" />
        <circle cx="220" cy="170" r="4" fill="#a98a52" />
        <g fill="#ffc95e">
          <rect x="134" y="208" width="8" height="12" /><rect x="152" y="208" width="8" height="12" />
          <rect x="280" y="208" width="8" height="12" /><rect x="298" y="208" width="8" height="12" />
          <rect x="214" y="214" width="12" height="24" opacity="0.9" />
        </g>
        {/* the door that appears */}
        {showDoor && (
          <g>
            <rect x="106" y="222" width="10" height="16" rx="5" fill="#ffdf8a" stroke="#a98a52" strokeWidth="0.8" />
            <circle cx="111" cy="218" r="7" fill="#ffdf8a" opacity="0.35" />
          </g>
        )}
      </g>
      {/* glass case */}
      <g>
        <rect x="84" y="120" width="272" height="118" fill="rgba(230, 240, 244, 0.14)" stroke="#b9c2c4" strokeWidth="1.6" />
        <line x1="84" y1="120" x2="120" y2="150" stroke="#dfe8ea" strokeWidth="1" opacity="0.7" />
        <line x1="356" y1="120" x2="320" y2="150" stroke="#dfe8ea" strokeWidth="1" opacity="0.7" />
        <line x1="110" y1="132" x2="180" y2="226" stroke="#ffffff" strokeWidth="2" opacity="0.25" />
        <line x1="132" y1="126" x2="196" y2="212" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
      </g>
      <text x="220" y="272" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="10" letterSpacing="3" fill="#6f6a58">THE FUTURE GLYPTOTEK · 1:200</text>
    </svg>
  )
}

function PinSketch({ variant = 0 }) {
  return (
    <svg viewBox="0 0 90 110" aria-hidden="true">
      <rect x="2" y="4" width="86" height="102" fill="#f6f3e8" stroke="#c3bda9" strokeWidth="1" transform="rotate(0.001)" />
      <circle cx="45" cy="10" r="3" fill="#b3382e" />
      <g stroke="#6b7a88" strokeWidth="1" fill="none" opacity="0.8">
        {variant === 0 && (
          <>
            <rect x="16" y="34" width="58" height="42" />
            <line x1="16" y1="54" x2="74" y2="54" /><line x1="44" y1="34" x2="44" y2="76" />
            <circle cx="60" cy="64" r="6" strokeDasharray="2 2" />
          </>
        )}
        {variant === 1 && (
          <>
            <path d="M18 80 L45 30 L72 80 Z" />
            <path d="M32 80 a13 13 0 0 1 26 0" />
            <line x1="12" y1="86" x2="78" y2="86" />
          </>
        )}
        {variant === 2 && (
          <>
            <path d="M20 76 h50 M24 76 v-30 h42 v30" />
            <path d="M30 46 a15 15 0 0 1 30 0" strokeDasharray="3 2" />
            <line x1="45" y1="30" x2="45" y2="20" />
          </>
        )}
      </g>
      <line x1="16" y1="92" x2="60" y2="92" stroke="#a09a86" strokeWidth="1" />
    </svg>
  )
}

/* ————— svg: the empty wings of the future museum ————— */

function EmptyFramesSvg() {
  return (
    <svg viewBox="0 0 220 150" aria-hidden="true">
      <rect width="220" height="150" fill="#efe9db" />
      {[[18, 30, 52, 68], [86, 22, 62, 84], [164, 34, 40, 56]].map(([x, y, w, h]) => (
        <g key={x}>
          <rect x={x} y={y} width={w} height={h} fill="none" stroke="#8a6f42" strokeWidth="5" />
          <rect x={x + 7} y={y + 7} width={w - 14} height={h - 14} fill="#f7f3e8" />
        </g>
      ))}
      <line x1="0" y1="132" x2="220" y2="132" stroke="#c9c2ae" strokeWidth="2" />
    </svg>
  )
}

function EmptyCasesSvg() {
  return (
    <svg viewBox="0 0 220 150" aria-hidden="true">
      <rect width="220" height="150" fill="#ece7d9" />
      {[[30, 0], [124, 1]].map(([x], i) => (
        <g key={x}>
          <rect x={x} y="96" width="66" height="34" fill="#cfc9ba" />
          <rect x={x + 4} y="52" width="58" height="44" fill="rgba(230, 240, 244, 0.35)" stroke="#aab3b5" strokeWidth="1.4" />
          <line x1={x + 8} y1="58" x2={x + 30} y2="88" stroke="#ffffff" strokeWidth="1.4" opacity="0.5" />
          <rect x={x + 22} y="80" width="22" height="9" fill="#f6f2e6" stroke="#c3bda9" strokeWidth="0.6" />
          {i === 0 && <text x={x + 33} y="87" textAnchor="middle" fontSize="5.5" fontFamily="Jost, sans-serif" fill="#8a8471">RESERVED</text>}
        </g>
      ))}
    </svg>
  )
}

function ReservedPlinthSvg() {
  return (
    <svg viewBox="0 0 220 150" aria-hidden="true">
      <rect width="220" height="150" fill="#e9e4d5" />
      <ellipse cx="110" cy="60" rx="52" ry="40" fill="#fff8e0" opacity="0.55" />
      <rect x="86" y="74" width="48" height="56" fill="#cfc9ba" />
      <rect x="80" y="126" width="60" height="8" fill="#b7b1a0" />
      <rect x="86" y="74" width="48" height="5" fill="#e5e0d1" />
      <rect x="88" y="96" width="44" height="14" fill="#f6f2e6" stroke="#c3bda9" strokeWidth="0.8" />
      <text x="110" y="105.5" textAnchor="middle" fontSize="6" fontFamily="Jost, sans-serif" letterSpacing="1" fill="#8a8471">FOR THE BUILDERS</text>
    </svg>
  )
}

function EmptyShelvesSvg() {
  return (
    <svg viewBox="0 0 220 150" aria-hidden="true">
      <rect width="220" height="150" fill="#e6e0d0" />
      <g stroke="#8a7358" strokeWidth="3">
        <line x1="24" y1="42" x2="196" y2="42" /><line x1="24" y1="82" x2="196" y2="82" /><line x1="24" y1="122" x2="196" y2="122" />
        <line x1="24" y1="30" x2="24" y2="126" /><line x1="196" y1="30" x2="196" y2="126" />
      </g>
      {/* one record, leaning, waiting for company */}
      <g transform="translate(52 52) rotate(-8)">
        <rect width="26" height="27" fill="#33241a" />
        <circle cx="13" cy="13.5" r="8" fill="none" stroke="#8a6f42" strokeWidth="1" />
        <circle cx="13" cy="13.5" r="2.4" fill="#d4af6a" />
      </g>
      <g fill="#d8d2c0">
        <rect x="96" y="50" width="3" height="29" /><rect x="118" y="50" width="3" height="29" />
        <rect x="150" y="50" width="3" height="29" /><rect x="60" y="90" width="3" height="29" />
        <rect x="104" y="90" width="3" height="29" /><rect x="164" y="90" width="3" height="29" />
      </g>
    </svg>
  )
}

const EMPTY_WINGS = [
  { name: 'Art Collection', Svg: EmptyFramesSvg, caption: 'Empty frames, hung and waiting. The acquisition criterion is unchanged: impossible to walk past.' },
  { name: 'Design Collection', Svg: EmptyCasesSvg, caption: 'Display cases, dusted weekly. Contents forthcoming.' },
  { name: 'Founder Archive', Svg: ReservedPlinthSvg, caption: 'Reserved: the stories of builders not yet met.' },
  { name: 'Music Archive', Svg: EmptyShelvesSvg, caption: 'Shelving for records not yet pressed. The Hall of Sound has agreed to lend the first one.' },
]

/* ————— the hacker house floor plan ————— */

function FloorPlan({ selected, onSelect }) {
  const roomProps = (id) => ({
    role: 'button',
    tabIndex: 0,
    className: `fw-plan__room ${selected === id ? 'fw-plan__room--on' : ''}`,
    onClick: () => onSelect(id),
    onKeyDown: (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onSelect(id)),
    'aria-label': SPACES.find((s) => s.id === id).name,
  })
  return (
    <svg viewBox="0 0 460 330" className="fw-plan" role="group" aria-label="Floor plan of House 01">
      <rect x="8" y="8" width="444" height="314" fill="none" stroke="currentColor" strokeWidth="2.5" />
      {/* courtyard, open to the sky */}
      <g {...roomProps('courtyard')}>
        <rect x="168" y="96" width="124" height="120" strokeDasharray="6 4" />
        <circle cx="230" cy="156" r="26" strokeDasharray="3 3" opacity="0.7" fill="none" stroke="currentColor" strokeWidth="1" />
        <text x="230" y="160" textAnchor="middle">COURTYARD</text>
      </g>
      {/* workshop, west */}
      <g {...roomProps('workshop')}>
        <rect x="8" y="8" width="160" height="208" />
        <text x="88" y="116" textAnchor="middle">WORKSHOP</text>
      </g>
      {/* record room, north-east */}
      <g {...roomProps('record')}>
        <rect x="292" y="8" width="160" height="130" />
        <circle cx="372" cy="60" r="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <text x="372" y="106" textAnchor="middle">RECORD ROOM</text>
      </g>
      {/* library, south-east */}
      <g {...roomProps('library')}>
        <rect x="292" y="138" width="160" height="78" />
        <text x="372" y="182" textAnchor="middle">LIBRARY</text>
      </g>
      {/* long table, south, full width */}
      <g {...roomProps('table')}>
        <rect x="8" y="216" width="444" height="106" />
        <rect x="120" y="256" width="220" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
        <text x="230" y="302" textAnchor="middle">THE LONG TABLE</text>
      </g>
    </svg>
  )
}

/* ————— the installation object standing in the room ————— */

function Install({ x, y, z, width, floating = false, label, visited, onOpen, children }) {
  const transform = floating
    ? `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`
    : `translate(-50%, -100%) translate3d(${x}px, 500px, ${z}px)`
  return (
    <button
      type="button"
      className={`fw-install ${floating ? 'fw-install--floating' : ''}`}
      style={{ width: `${width}px`, transform }}
      onClick={onOpen}
      aria-label={`${label} — enter the installation`}
    >
      <span className="fw-install__art">{children}</span>
      <span className="fw-install__label smallcaps">
        {label}
        {visited && <span className="fw-install__seen"> · seen</span>}
      </span>
    </button>
  )
}

/* ————— the overlays (inside each installation) ————— */

function Overlay({ id, eyebrow, title, subtitle, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [onClose])

  return (
    <div className={`fw-ov fw-ov--${id}`} role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className="fw-ov__x smallcaps" onClick={onClose}>Close ✕</button>
      <div className="fw-ov__inner">
        <header className="fw-ov__head">
          <p className="smallcaps fw-ov__eyebrow">{eyebrow}</p>
          <h2 className="fw-ov__title">{title}</h2>
          {subtitle && <p className="fw-ov__subtitle">{subtitle}</p>}
        </header>
        {children}
        <button type="button" className="fw-ov__back smallcaps" onClick={onClose}>← Back to the wing</button>
      </div>
    </div>
  )
}

function HackerHouseView({ onClose }) {
  const [space, setSpace] = useState('table')
  const current = SPACES.find((s) => s.id === space)
  return (
    <Overlay id="house" eyebrow="Installation I" title="The Hacker House" subtitle="House 01 · Occupancy: forthcoming" onClose={onClose}>
      <section className="fw-ov__section">
        <h3 className="smallcaps fw-ov__label">The Philosophy</h3>
        <ol className="fw-manifesto">
          <li>Smart people should live near each other.</li>
          <li>Great things happen through collisions.</li>
          <li>Community accelerates creativity.</li>
          <li>Builders need spaces designed for building.</li>
        </ol>
      </section>
      <section className="fw-ov__section">
        <h3 className="smallcaps fw-ov__label">The Spaces · select a room on the plan</h3>
        <div className="fw-house">
          <FloorPlan selected={space} onSelect={setSpace} />
          <aside className="fw-house__panel" aria-live="polite">
            <h4 className="fw-house__room">{current.name}</h4>
            <p className="fw-house__note">{current.note}</p>
            <ul className="fw-house__points">
              {current.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </aside>
        </div>
        <p className="fw-ov__aside">The house is drawn in pencil on purpose. It should feel alive rather than finished.</p>
      </section>
    </Overlay>
  )
}

function FactoryView({ onClose }) {
  return (
    <Overlay id="factory" eyebrow="Installation II" title="The Product Factory" subtitle="Software that does not exist yet · Themes, not pitches" onClose={onClose}>
      <p className="fw-ov__lede">
        Seven cards, none of them real. The point is not the software; the point is the itch to make it.
        Turn any card over.
      </p>
      <div className="fw-cards">
        {PRODUCTS.map((p) => <ProductCard key={p.num} p={p} />)}
      </div>
      <blockquote className="fw-motto">
        <span aria-hidden="true">❝</span> Ideas deserve prototypes.
      </blockquote>
    </Overlay>
  )
}

function ProductCard({ p }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <button
      type="button"
      className={`fw-card ${flipped ? 'fw-card--flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      aria-label={`Product ${p.num} — ${p.name}. ${flipped ? 'Hide' : 'Show'} details`}
    >
      <span className="fw-card__inner">
        <span className="fw-card__face fw-card__front">
          <span className="smallcaps fw-card__num">Product № {p.num}</span>
          <span className="fw-card__name">{p.name}</span>
          <span className="fw-card__tag">{p.tag}</span>
          <span className="smallcaps fw-card__hint">turn over</span>
        </span>
        <span className="fw-card__face fw-card__back">
          <span className="fw-card__field"><strong>Problem.</strong> {p.problem}</span>
          <span className="fw-card__field"><strong>Why it matters.</strong> {p.why}</span>
          <span className="fw-card__field"><strong>Inspired by.</strong> {p.inspired}</span>
        </span>
      </span>
    </button>
  )
}

function MuseumView({ onClose, allVisited, visitedCount }) {
  const [doorOpen, setDoorOpen] = useState(false)
  return (
    <Overlay id="museum" eyebrow="Installation III · The centerpiece" title="The Future Glyptotek" subtitle="Four wings, currently empty on purpose" onClose={onClose}>
      <p className="fw-ov__lede">
        The model shows the museum as it will open: not finished, but ready to receive.
        Every wing below is empty, and every wing below is spoken for.
      </p>
      <div className="fw-wings">
        {EMPTY_WINGS.map(({ name, Svg, caption }) => (
          <figure className="fw-wing-card" key={name}>
            <span className="fw-wing-card__art"><Svg /></span>
            <figcaption>
              <span className="smallcaps fw-wing-card__name">{name}</span>
              <span className="fw-wing-card__caption">{caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="fw-plaque">
        <p className="fw-plaque__text">
          “This museum was built one object, one idea, and one relationship at a time.”
        </p>
      </div>
      <section className="fw-ov__section">
        <h3 className="smallcaps fw-ov__label">Legacy · the endowment</h3>
        <p className="fw-legacy__intro">Not achievements. Not money. Not exits. The museum will measure its legacy in:</p>
        <ul className="fw-legacy">
          <li>Communities created</li>
          <li>People helped</li>
          <li>Ideas shared</li>
          <li>Beauty preserved</li>
        </ul>
      </section>

      {allVisited ? (
        <section className="fw-doorway">
          {!doorOpen ? (
            <button type="button" className="fw-door" onClick={() => setDoorOpen(true)}>
              <svg viewBox="0 0 60 80" aria-hidden="true">
                <rect x="14" y="16" width="32" height="58" rx="16" fill="#f0d9a2" stroke="#a98a52" strokeWidth="2" />
                <circle cx="38" cy="48" r="2.4" fill="#8a6f42" />
                <circle cx="30" cy="12" r="9" fill="#ffdf8a" opacity="0.4" />
              </svg>
              <span className="smallcaps">A small door has appeared in the model · open it</span>
            </button>
          ) : (
            <div className="fw-foundation">
              <p className="smallcaps fw-foundation__eyebrow">Foundation Stone · laid first, found last</p>
              <p className="fw-foundation__plaque">“Every institution begins as a conversation.”</p>
              <div className="fw-foundation__note">
                <p>
                  You have already started building all three of these, whether you noticed or not — the house you
                  sketch over dinner, the products you pitch me at midnight as though I were an investor, and this
                  museum, which exists in the way you slow down in every room you enter.
                </p>
                <p>
                  They are one dream wearing three costumes: <strong>creating places where ideas can live longer than
                  the people who first imagined them.</strong>
                </p>
                <p>
                  So I built this one first — a museum out of a conversation — so the dream would have somewhere to
                  wait for you. Consider the ground broken.
                </p>
                <p className="fw-foundation__sign">
                  — the lender, who expects a private tour of each of them when they are real
                </p>
              </div>
            </div>
          )}
        </section>
      ) : (
        <p className="fw-doorway__hint">
          The model feels incomplete — as though it were missing a door.
          <span className="smallcaps"> {visitedCount} of 3 installations visited</span>
        </p>
      )}
    </Overlay>
  )
}

/* ————— the wing ————— */

const INSTALLS = [
  { id: 'house', roman: 'I', label: 'House 01' },
  { id: 'factory', roman: 'II', label: 'The Product Factory' },
  { id: 'museum', roman: 'III', label: 'The Future Glyptotek' },
]

export default function FutureWing() {
  const wing = WINGS.find((w) => w.slug === 'future-wing')
  const next = WINGS[(WINGS.indexOf(wing) + 1) % WINGS.length]
  const [open, setOpen] = useState(null)
  const [visited, setVisited] = useState(readVisited)
  const allVisited = INSTALLS.every((i) => visited.includes(i.id))
  const Art = ARTWORKS[wing.art]

  useEffect(() => {
    document.title = 'The Future Wing — The Glyptotek of Samveg'
  }, [])

  const openInstall = (id) => {
    setOpen(id)
    setVisited((prev) => {
      if (prev.includes(id)) return prev
      const nextList = [...prev, id]
      writeVisited(nextList)
      return nextList
    })
  }

  const installButton = (id, extra, art) => {
    const meta = INSTALLS.find((i) => i.id === id)
    return (
      <Install
        key={id}
        label={`Installation ${meta.roman} · ${meta.label}`}
        visited={visited.includes(id)}
        onOpen={() => openInstall(id)}
        {...extra}
      >
        {art}
      </Install>
    )
  }

  const overlay = (
    <>
      <nav className="room3d-topbar">
        <Link to="/" className="smallcaps">← Entrance Hall</Link>
        <span className="smallcaps room3d-topbar__wordmark">The Glyptotek of Samveg</span>
        <span className="smallcaps">Wing V</span>
      </nav>
      <p className="room3d-hint smallcaps">
        {allVisited ? 'A door has appeared in the museum model' : 'Three installations · Step up to any model'}
      </p>
    </>
  )

  return (
    <main className="wing wing--future fw">
      <div className="wing-3d">
        <Room3D
          overlay={overlay}
          back={
            <>
              <div className="room3d-title" style={{ top: '11%' }}>
                <p className="smallcaps room3d-title__eyebrow">Wing V of V · The vision lab</p>
                <h1 className="room3d-title__name">The Future Wing</h1>
                <p className="room3d-title__tagline">“A collection of things not yet built.”</p>
              </div>
              <div className="fw-pin" style={{ left: '8%', top: '44%', width: '86px', '--tilt': '-3deg' }}><PinSketch variant={0} /></div>
              <div className="fw-pin" style={{ left: '86%', top: '42%', width: '86px', '--tilt': '2.5deg' }}><PinSketch variant={1} /></div>
            </>
          }
          left={
            <>
              <div className="fw-pin" style={{ left: '66%', top: '30%', width: '96px', '--tilt': '2deg' }}><PinSketch variant={2} /></div>
              <div className="fw-pin" style={{ left: '80%', top: '52%', width: '84px', '--tilt': '-2deg' }}><PinSketch variant={1} /></div>
            </>
          }
          right={
            <>
              <div className="fw-pin" style={{ left: '24%', top: '30%', width: '96px', '--tilt': '-2.5deg' }}><PinSketch variant={0} /></div>
              <div className="fw-pin" style={{ left: '10%', top: '52%', width: '84px', '--tilt': '2deg' }}><PinSketch variant={2} /></div>
            </>
          }
          floor={<div className="fw-projection" aria-hidden="true" />}
          props={
            /* painter's order: deepest first — sibling 3D billboards with
               filters paint in DOM order, not depth order */
            <>
              {installButton('museum', { x: 90, z: -900, width: 430 }, <MuseumModelSvg showDoor={allVisited} />)}
              {installButton('factory', { x: 560, z: -640, width: 290, floating: true, y: -60 }, <ProductWallSvg />)}
              {installButton('house', { x: -560, z: -620, width: 270 }, <HouseModelSvg />)}
              <RoomProp x={-40} z={-430} width={280}><BenchSvg /></RoomProp>
            </>
          }
        />
      </div>

      {/* flat, for narrow doorways */}
      <div className="wing-flat fw-flat">
        <nav className="room3d-topbar room3d-topbar--flat">
          <Link to="/" className="smallcaps">← Entrance Hall</Link>
          <span className="smallcaps">Wing V</span>
        </nav>
        <header className="wing-flat__header">
          <p className="smallcaps room3d-title__eyebrow">Wing V of V · The vision lab</p>
          <h1 className="room3d-title__name">The Future Wing</h1>
          <p className="room3d-title__tagline">“A collection of things not yet built.”</p>
        </header>
        <div className="fw-flat__installs">
          {INSTALLS.map(({ id, roman, label }) => (
            <button key={id} type="button" className="fw-flat__install" onClick={() => openInstall(id)}>
              <span className="fw-flat__art">
                {id === 'house' && <HouseModelSvg />}
                {id === 'factory' && <ProductWallSvg />}
                {id === 'museum' && <MuseumModelSvg showDoor={allVisited} />}
              </span>
              <span className="smallcaps fw-install__label">
                Installation {roman} · {label}
                {visited.includes(id) && <span className="fw-install__seen"> · seen</span>}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* curator's text below the room */}
      <section className="wing-below">
        <div className="wing-below__art" aria-hidden="true">
          <span className="wing-below__frame"><Art /></span>
          <span className="smallcaps wing-below__caption">{wing.artTitle} · {wing.artMedium}</span>
        </div>
        <div>
          <p className="smallcaps wing-below__eyebrow">From the curator</p>
          <p className="wing-below__intro">{wing.intro}</p>
        </div>
      </section>

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

      {open === 'house' && <HackerHouseView onClose={() => setOpen(null)} />}
      {open === 'factory' && <FactoryView onClose={() => setOpen(null)} />}
      {open === 'museum' && (
        <MuseumView onClose={() => setOpen(null)} allVisited={allVisited} visitedCount={INSTALLS.filter((i) => visited.includes(i.id)).length} />
      )}
    </main>
  )
}
