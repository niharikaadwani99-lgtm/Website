/*
 * Bespoke studies for the Gallery of Objects — the four exhibits that
 * asked for portraits instead of abstractions: the fragrance, the
 * spinning record watch, the LEGO shelf, and the astronaut puzzle.
 * Same 240×300 sheet as the generative studies, so frames fit.
 */

const PAPER = '#f1ead8'
const INK = '#2b241b'

export function BottleArt() {
  return (
    <svg viewBox="0 0 240 300" aria-hidden="true">
      <rect width="240" height="300" fill={PAPER} />
      {/* a horizon of sea air */}
      <line x1="36" y1="238" x2="204" y2="238" stroke={INK} strokeWidth="1.4" opacity="0.5" />
      <path d="M46 250 q 10 -6 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke="#6f9db4" strokeWidth="1.6" opacity="0.7" />
      <path d="M60 262 q 10 -5 20 0 t 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke="#6f9db4" strokeWidth="1.2" opacity="0.45" />
      {/* the bottle */}
      <g>
        <rect x="82" y="96" width="76" height="142" rx="8" fill="#cfe0e8" stroke="#8aa4b0" strokeWidth="1.4" />
        <rect x="82" y="150" width="76" height="88" rx="8" fill="#a8c8d8" opacity="0.8" />
        <rect x="90" y="104" width="14" height="120" rx="7" fill="#ffffff" opacity="0.5" />
        {/* replica label */}
        <rect x="94" y="160" width="52" height="52" fill="#fdfbf4" stroke="#c9c2ae" strokeWidth="0.8" />
        {[170, 177, 184, 191, 198].map((y, i) => (
          <line key={y} x1="100" y1={y} x2={i === 0 ? 140 : i % 2 ? 132 : 138} y2={y} stroke={INK} strokeWidth={i === 0 ? 1.6 : 0.9} opacity={i === 0 ? 0.8 : 0.45} />
        ))}
        {/* neck and cap */}
        <rect x="108" y="80" width="24" height="18" fill="#b8ccd6" stroke="#8aa4b0" strokeWidth="1" />
        <rect x="102" y="58" width="36" height="24" rx="4" fill="#e8e4d8" stroke="#9a917b" strokeWidth="1.2" />
      </g>
      {/* a paper boat, for the day itself */}
      <g transform="translate(174 44) rotate(6)">
        <path d="M0 14 L14 14 L7 0 Z" fill="#ffffff" stroke={INK} strokeWidth="1" />
        <path d="M-8 14 L22 14 L16 22 L-2 22 Z" fill="#e8e4d8" stroke={INK} strokeWidth="1" />
      </g>
      <text x="120" y="282" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="8" letterSpacing="3" fill="#8a7e68">SAILING DAY</text>
    </svg>
  )
}

export function SpinningRecordArt() {
  return (
    <svg viewBox="0 0 240 300" aria-hidden="true">
      <rect width="240" height="300" fill={PAPER} />
      {/* the record, in motion */}
      <g className="art-spin">
        <circle cx="120" cy="140" r="82" fill="#1c1712" />
        {[68, 56, 44].map((r) => (
          <circle key={r} cx="120" cy="140" r={r} fill="none" stroke="#4a3b26" strokeWidth="0.9" opacity="0.9" />
        ))}
        <circle cx="120" cy="140" r="26" fill="#a98a52" />
        <circle cx="120" cy="140" r="25" fill="none" stroke="#8a6f42" strokeWidth="1" />
        <circle cx="120" cy="140" r="3.4" fill="#1c1712" />
        {/* label marks so the spin reads */}
        <line x1="120" y1="118" x2="120" y2="126" stroke="#6f5731" strokeWidth="2" />
        <circle cx="134" cy="150" r="2.2" fill="#6f5731" />
        {/* a glint on the vinyl */}
        <path d="M62 108 A 68 68 0 0 1 96 74" fill="none" stroke="#f4e3b2" strokeWidth="3" opacity="0.35" strokeLinecap="round" />
      </g>
      {/* tonearm, steady while the world turns */}
      <g>
        <circle cx="206" cy="60" r="9" fill="#8a6f42" />
        <line x1="206" y1="60" x2="158" y2="118" stroke="#6f5731" strokeWidth="3.4" strokeLinecap="round" />
        <rect x="148" y="114" width="18" height="9" rx="3" transform="rotate(-50 157 118)" fill="#6f5731" />
      </g>
      {/* lugs — it is, after all, a watch */}
      <g stroke="#8a7e68" strokeWidth="3" strokeLinecap="round" opacity="0.8">
        <line x1="86" y1="52" x2="76" y2="36" /><line x1="154" y1="52" x2="164" y2="36" />
        <line x1="86" y1="228" x2="76" y2="244" /><line x1="154" y1="228" x2="164" y2="244" />
      </g>
      <text x="120" y="282" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="8" letterSpacing="3" fill="#8a7e68">WORN DAILY · 33⅓ RPM</text>
    </svg>
  )
}

export function LegoArt() {
  const stud = (x, y, w = 7) => <rect key={`${x}-${y}`} x={x} y={y} width={w} height="3.4" rx="1.4" fill="rgba(255,255,255,0.45)" />
  return (
    <svg viewBox="0 0 240 300" aria-hidden="true">
      <rect width="240" height="300" fill={PAPER} />
      <line x1="24" y1="252" x2="216" y2="252" stroke={INK} strokeWidth="1.6" opacity="0.6" />
      {/* the bunch of flowers */}
      <g>
        {/* stems */}
        <g stroke="#4f7a46" strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M64 250 C 60 216, 52 196, 44 180" />
          <path d="M70 250 C 72 210, 74 190, 76 172" />
          <path d="M78 250 C 86 214, 94 198, 100 186" />
        </g>
        {/* brick-built blooms */}
        <g>
          <rect x="32" y="160" width="24" height="12" rx="2" fill="#c8443a" />
          <rect x="36" y="148" width="16" height="12" rx="2" fill="#e0605a" />
          {stud(38, 145)}{stud(47, 145)}
          <rect x="66" y="150" width="22" height="12" rx="2" fill="#e8a63c" />
          <rect x="70" y="138" width="14" height="12" rx="2" fill="#f2c84b" />
          {stud(72, 135)}
          <rect x="92" y="166" width="20" height="12" rx="2" fill="#b06ab4" />
          <rect x="95" y="155" width="14" height="11" rx="2" fill="#cd8ed0" />
          {stud(97, 152)}
        </g>
        {/* leaf bricks */}
        <rect x="52" y="206" width="16" height="8" rx="2" fill="#6d9c5c" transform="rotate(-18 60 210)" />
        <rect x="76" y="212" width="16" height="8" rx="2" fill="#6d9c5c" transform="rotate(14 84 216)" />
        {/* studded vase */}
        <path d="M50 250 h44 l-5 -34 h-34 z" fill="#3a6ea5" />
        {stud(58, 213, 8)}{stud(72, 213, 8)}
      </g>
      {/* the Artemis rocket */}
      <g>
        {/* launch plate */}
        <rect x="138" y="246" width="72" height="6" rx="2" fill="#8a7e68" />
        {/* boosters */}
        <rect x="146" y="146" width="14" height="100" rx="5" fill="#f4f0e4" stroke="#b9b4a4" strokeWidth="1" />
        <rect x="188" y="146" width="14" height="100" rx="5" fill="#f4f0e4" stroke="#b9b4a4" strokeWidth="1" />
        <path d="M146 150 l7 -12 l7 12 z" fill="#e8e4d8" stroke="#b9b4a4" strokeWidth="0.8" />
        <path d="M188 150 l7 -12 l7 12 z" fill="#e8e4d8" stroke="#b9b4a4" strokeWidth="0.8" />
        {/* core stage */}
        <rect x="160" y="120" width="28" height="126" rx="6" fill="#e8963c" stroke="#b06a1e" strokeWidth="1" />
        {stud(164, 128, 8)}{stud(176, 128, 8)}
        <rect x="160" y="176" width="28" height="4" fill="#b06a1e" opacity="0.5" />
        {/* capsule */}
        <rect x="162" y="96" width="24" height="26" rx="4" fill="#f4f0e4" stroke="#b9b4a4" strokeWidth="1" />
        <path d="M162 98 l12 -22 l12 22 z" fill="#d9d2c0" stroke="#b9b4a4" strokeWidth="1" />
        <circle cx="174" cy="108" r="3.4" fill="#3a6ea5" />
        {/* the worm, in spirit */}
        <rect x="165" y="196" width="18" height="5" rx="2.5" fill="#c8443a" />
      </g>
      <text x="120" y="282" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="8" letterSpacing="3" fill="#8a7e68">BUILT TOGETHER · NO STEPS SKIPPED</text>
    </svg>
  )
}

export function PuzzleArt() {
  const knob = (cx, cy) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.2" fill="none" stroke={INK} strokeWidth="0.9" opacity="0.4" />
  return (
    <svg viewBox="0 0 240 300" aria-hidden="true">
      <rect width="240" height="300" fill={PAPER} />
      {/* the puzzle, at last complete but one */}
      <g>
        <rect x="40" y="56" width="160" height="188" fill="#141a2e" stroke={INK} strokeWidth="1.4" />
        {/* stars */}
        {[[58, 76], [96, 66], [148, 80], [180, 70], [66, 130], [182, 126], [56, 200], [186, 210], [108, 226]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#e8e2f5" opacity="0.9" />
        ))}
        {/* the astronaut */}
        <g>
          <circle cx="120" cy="128" r="30" fill="#e8e4d8" stroke="#b9b4a4" strokeWidth="1.4" />
          <ellipse cx="120" cy="128" rx="20" ry="17" fill="#2a2148" />
          <path d="M108 120 a16 12 0 0 1 18 -3" stroke="#8d82bd" strokeWidth="2" fill="none" opacity="0.8" />
          <rect x="96" y="158" width="48" height="52" rx="16" fill="#e8e4d8" stroke="#b9b4a4" strokeWidth="1.4" />
          <rect x="112" y="166" width="16" height="10" rx="2" fill="#c8443a" />
          <rect x="84" y="162" width="14" height="34" rx="7" fill="#e8e4d8" stroke="#b9b4a4" strokeWidth="1.2" />
          <rect x="142" y="162" width="14" height="34" rx="7" fill="#e8e4d8" stroke="#b9b4a4" strokeWidth="1.2" />
        </g>
        {/* jigsaw cuts */}
        <g stroke={INK} strokeWidth="0.9" opacity="0.4" fill="none">
          <line x1="40" y1="103" x2="200" y2="103" />
          <line x1="40" y1="150" x2="200" y2="150" />
          <line x1="40" y1="197" x2="200" y2="197" />
          <line x1="80" y1="56" x2="80" y2="244" />
          <line x1="120" y1="56" x2="120" y2="244" />
          <line x1="160" y1="56" x2="160" y2="244" />
        </g>
        {knob(80, 79)}{knob(120, 126)}{knob(160, 173)}{knob(100, 150)}{knob(140, 197)}{knob(60, 103)}{knob(180, 150)}
        {/* the missing piece's socket */}
        <rect x="160" y="197" width="40" height="47" fill={PAPER} stroke={INK} strokeWidth="0.9" opacity="0.95" />
      </g>
      {/* the last piece, arriving in a second pair of hands */}
      <g transform="translate(178 252) rotate(-10)">
        <path d="M0 0 h30 v12 a5 5 0 0 1 0 10 v13 h-30 v-12 a5 5 0 0 0 0 -10 z" fill="#141a2e" stroke="#e8e2f5" strokeWidth="1" />
        <circle cx="15" cy="17" r="1.5" fill="#e8e2f5" />
      </g>
      <text x="120" y="286" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="8" letterSpacing="3" fill="#8a7e68">FINISHED TOGETHER, FINALLY</text>
    </svg>
  )
}
