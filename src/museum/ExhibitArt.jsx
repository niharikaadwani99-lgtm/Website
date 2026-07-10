/*
 * Small abstract studies that hang beside each exhibit — generated
 * deterministically from the exhibit's position, tinted by the room.
 * Colors resolve from the room theme's CSS custom properties.
 */

const PAPER = '#f1ead8'
const INK = '#2b241b'

function Rings({ accent }) {
  return (
    <>
      <circle cx="120" cy="140" r="78" fill="none" stroke={INK} strokeWidth="2" opacity="0.8" />
      <circle cx="128" cy="132" r="56" fill="none" stroke={accent} strokeWidth="3" />
      <circle cx="112" cy="150" r="32" fill="none" stroke={INK} strokeWidth="1.4" opacity="0.6" />
      <circle cx="150" cy="112" r="7" fill={accent} />
    </>
  )
}

function Bars({ accent }) {
  return (
    <>
      <rect x="52" y="90" width="26" height="150" fill={INK} opacity="0.85" />
      <rect x="98" y="60" width="26" height="180" fill={accent} />
      <rect x="144" y="120" width="26" height="120" fill={INK} opacity="0.55" />
      <circle cx="186" cy="72" r="12" fill="none" stroke={accent} strokeWidth="2.4" />
      <line x1="40" y1="248" x2="200" y2="248" stroke={INK} strokeWidth="2" opacity="0.7" />
    </>
  )
}

function Horizon({ accent }) {
  return (
    <>
      <rect x="36" y="150" width="168" height="90" fill={INK} opacity="0.14" />
      <line x1="36" y1="150" x2="204" y2="150" stroke={INK} strokeWidth="2.2" opacity="0.8" />
      <circle cx="120" cy="112" r="30" fill={accent} />
      <circle cx="120" cy="112" r="42" fill="none" stroke={accent} strokeWidth="1.2" opacity="0.5" />
      <path d="M48 196 q 36 -18 72 0 t 72 0" fill="none" stroke={INK} strokeWidth="1.6" opacity="0.55" />
    </>
  )
}

function Diagonals({ accent }) {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={36 + i * 22} y1="240" x2={110 + i * 22} y2="60" stroke={INK} strokeWidth="2" opacity={0.75 - i * 0.11} />
      ))}
      <path d="M76 214 L128 118 L168 214 Z" fill="none" stroke={accent} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="128" cy="118" r="6" fill={accent} />
    </>
  )
}

function Field({ accent }) {
  const dots = [
    [66, 84, 4], [110, 66, 3], [158, 92, 5], [184, 140, 3], [150, 170, 4],
    [96, 152, 6], [58, 186, 3], [122, 212, 4], [172, 224, 3], [78, 236, 4],
  ]
  return (
    <>
      <rect x="34" y="48" width="172" height="204" fill={INK} opacity="0.88" />
      {dots.map(([x, y, r], i) => (
        <circle key={x} cx={x} cy={y} r={r} fill={i % 3 === 0 ? accent : PAPER} opacity={i % 3 === 0 ? 1 : 0.8} />
      ))}
      <path d="M58 200 C 96 168, 148 150, 186 108" fill="none" stroke={accent} strokeWidth="1.6" opacity="0.8" />
    </>
  )
}

function Arch({ accent }) {
  return (
    <>
      <path d="M70 240 v-100 a50 50 0 0 1 100 0 v100" fill="none" stroke={INK} strokeWidth="3" opacity="0.85" />
      <path d="M84 240 v-94 a36 36 0 0 1 72 0 v94" fill="none" stroke={accent} strokeWidth="2.2" />
      <line x1="52" y1="242" x2="188" y2="242" stroke={INK} strokeWidth="2.4" opacity="0.8" />
      <circle cx="120" cy="86" r="5" fill={accent} />
    </>
  )
}

function Manuscript({ accent }) {
  return (
    <>
      <rect x="48" y="56" width="144" height="188" fill="#faf5e6" stroke={INK} strokeWidth="1" opacity="0.95" />
      {[86, 106, 126, 146, 166, 186, 206].map((y, i) => (
        <line key={y} x1="64" y1={y} x2={i % 3 === 2 ? 140 : 176} y2={y} stroke={INK} strokeWidth="1.6" opacity="0.5" />
      ))}
      <line x1="64" y1="222" x2="118" y2="222" stroke={accent} strokeWidth="2.4" />
      <circle cx="168" cy="80" r="9" fill="none" stroke={accent} strokeWidth="2" />
    </>
  )
}

const VARIANTS = [Rings, Bars, Horizon, Diagonals, Field, Arch, Manuscript]

export default function ExhibitArt({ seed = 0, variant, accent = 'var(--room-accent, #a98a52)' }) {
  const Piece = VARIANTS[(variant ?? seed) % VARIANTS.length]
  return (
    <svg viewBox="0 0 240 300" aria-hidden="true">
      <rect width="240" height="300" fill={PAPER} />
      <Piece accent={accent} />
    </svg>
  )
}
