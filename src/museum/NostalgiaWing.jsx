import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { WINGS } from './wings.js'
import { ARTWORKS } from './artworkMap.js'
import Room3D, { RoomProp } from './Room3D.jsx'
import { BenchSvg } from './Props.jsx'
import evidencePhoto from './assets/evidence.jpg'
import './NostalgiaWing.css'

/*
 * Wing VI — the heart of the museum. Five artifacts stand in a warm
 * room: a kitchen table, a relic in a glass dome, a snack shelf, a
 * comfort cabinet, and a desk full of drawers. Visit all five and a
 * small light appears behind the dining table.
 */

const VISITED_KEY = 'glyptotek-nostalgia-visited'

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
    // storage unavailable — the light will appear per visit instead
  }
}

/* ————— the copy ————— */

const DISHES = [
  {
    name: 'Yellow Dal',
    line: 'The colour of home',
    text:
      'Turmeric-gold, tempered with ghee and cumin, served over rice by someone who never once measured anything. It matters because it cannot be reproduced — restaurants have tried; the archive rules them all inauthentic. It feels like home because for a long time it simply was home, arriving at the table before anyone asked.',
  },
  {
    name: 'Dry Aloo Sabji',
    line: 'Recipe without measurements',
    text:
      'Potatoes that somehow taste like a specific house at a specific hour of the evening. Comfort food in its purest form: familiar, unphotogenic, perfect. The recipe exists nowhere on paper. Asking for quantities receives the same answer it always has — “andaaz se.” By feel. Which is also how it loves you back.',
  },
  {
    name: 'Poha',
    line: 'The staple',
    text:
      'Flattened rice, mustard seeds, curry leaves, lemon — and sev over the top, without which the dish is legally incomplete. The taste of unhurried mornings and of being looked after before the day begins. No breakfast anywhere, however elaborate, has ever displaced it. None is expected to.',
  },
]

const DISCONTINUED = [
  {
    name: 'Cadbury Tiffins',
    status: 'Discontinued \u00b7 remembered vividly \u00b7 the shelf\u2019s sole survivor',
    text:
      'Chocolate, biscuit, raisins \u2014 engineering, frankly. Retired by people who clearly never sat with one on a school afternoon. The orange wrapper, the crinkle of the foil, the ceremony of opening it slowly: all preserved intact in this archive, where no committee can touch them. The rest of the shelf stands empty on purpose. Nothing else earned the space.',
  },
]

const COMFORTS = [
  { name: 'Hot Chocolate', rx: 'Prescribed for rainy days, long faces, and evenings that need rescuing.' },
  { name: 'Iced Chocolate', rx: 'Prescribed for victories, minor and imagined. Best consumed while narrating the victory.' },
  { name: 'Milkshakes', rx: 'Prescribed for conversations that need extending. One glass, two straws, no hurry.' },
  { name: 'Dark Chocolate & Sea Salt', rx: 'Prescribed for slowing down on purpose. To be eaten in small squares, eyes closed, opinions ready.' },
  { name: 'Tiramisu', rx: 'Prescribed for occasions — and for the act of deciding that this, right now, is one.' },
]

const DRAWERS = [
  {
    label: 'Bhoot Bangla',
    text:
      'One movie: Bhoot Bangla, watched together. Somewhere in the second act I stopped watching the film and started watching him laugh, and a private realization quietly filed itself under \u201coh. oh no. oh good.\u201d The movie was fine. The evening was cinema.',
  },
  {
    label: 'Dog Chase',
    text:
      'Eyewitness account: one (1) boyfriend, pursued at genuine speed down my street by one (1) extremely committed dog. Most men would be embarrassed. He finished the sprint, straightened his shirt, and carried on as though it were a scheduled part of the workout. Refused \u2014 flatly \u2014 to be embarrassed. I have never respected anyone more while laughing that hard.',
  },
  {
    label: 'Note',
    text:
      'A note in my handwriting: \u201cI love you more.\u201d Filed as fact, not opinion. The museum has reviewed his counter-claims and dismissed them all. Appeals may be submitted in person, at the kitchen table, indefinitely.',
  },
  {
    label: 'Sauvage',
    text:
      'One bottle of Dior Sauvage. Nobody will admit to knowing how it got in here. Our shared hatred of it was one of the earliest and strongest compatibility signals on record \u2014 some couples have a song; we have an enemy. Displayed as a warning, not a fragrance. Drawer kept closed for everyone\u2019s safety.',
  },
  {
    label: 'Evidence',
    image: 'evidence',
    text:
      'Exhibit E: one (1) meme, sent by me during the \u201cjust friends\u201d era. A clear, dignified, unmistakable attempt at flirting. He responded with something so devastatingly neutral that the museum declines to reprint it. The defence rests. He came around. Spectacularly. The museum keeps this to remind him who flirted first, and me of how far we\u2019ve come.',
  },
  {
    label: 'Stuck',
    text: 'This drawer is stuck. The museum suspects it is holding something embarrassing, and respects its decision.',
  },
  {
    label: 'Empty',
    text: 'Empty. Reserved for the next memory. There is always a next one.',
  },
]

const KEEPING = [
  'Time spent with family.',
  'Meals shared.',
  'Music discovered.',
  'Places returned to.',
  'People who stayed.',
]

/* ————— svg: the artifacts standing in the room ————— */

function KitchenTableSvg() {
  return (
    <svg viewBox="0 0 340 240" aria-hidden="true">
      <defs>
        <filter id="nw-glow-t" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      <ellipse cx="170" cy="230" rx="140" ry="8" fill="rgba(20, 8, 2, 0.4)" />
      <ellipse cx="170" cy="120" rx="120" ry="56" fill="#ffb45e" opacity="0.22" filter="url(#nw-glow-t)" />
      {/* hanging lamp */}
      <line x1="170" y1="0" x2="170" y2="46" stroke="#5c3212" strokeWidth="2" />
      <path d="M150 46 h40 l-8 18 h-24 z" fill="#8a5a2a" />
      <circle cx="170" cy="70" r="7" fill="#ffdf8a" opacity="0.95" />
      <circle cx="170" cy="72" r="14" fill="#ffdf8a" opacity="0.3" />
      {/* table */}
      <rect x="42" y="128" width="256" height="14" rx="4" fill="#7a4a22" />
      <rect x="42" y="128" width="256" height="5" rx="2" fill="#a06a36" />
      <rect x="58" y="142" width="12" height="82" fill="#5c3212" />
      <rect x="270" y="142" width="12" height="82" fill="#5c3212" />
      {/* chairs */}
      <g fill="#6b3d18">
        <rect x="10" y="118" width="8" height="106" /><rect x="18" y="160" width="26" height="8" />
        <rect x="26" y="168" width="8" height="56" />
        <rect x="322" y="118" width="8" height="106" /><rect x="296" y="160" width="26" height="8" />
        <rect x="306" y="168" width="8" height="56" />
      </g>
      {/* the meal, set and waiting */}
      <ellipse cx="120" cy="126" rx="26" ry="8" fill="#f4e6c8" />
      <ellipse cx="120" cy="123" rx="18" ry="5.5" fill="#e8b430" />
      <path d="M114 112 q 2 -8 -2 -12 M122 112 q 2 -8 -2 -12" stroke="#fff3d2" strokeWidth="1.6" fill="none" opacity="0.85" />
      <ellipse cx="188" cy="126" rx="24" ry="7.5" fill="#f4e6c8" />
      <ellipse cx="188" cy="123.5" rx="16" ry="4.8" fill="#d99a3e" />
      <ellipse cx="248" cy="126" rx="20" ry="6.5" fill="#f4e6c8" />
      <circle cx="248" cy="122" r="8" fill="#f0d9a2" />
      <rect x="150" y="112" width="5" height="14" rx="2" fill="#cfe0e6" opacity="0.9" />
      <rect x="222" y="112" width="5" height="14" rx="2" fill="#cfe0e6" opacity="0.9" />
    </svg>
  )
}

function WrapperRelicSvg() {
  return (
    <svg viewBox="0 0 180 240" aria-hidden="true">
      <defs>
        <filter id="nw-glow-w" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>
      <ellipse cx="90" cy="232" rx="66" ry="7" fill="rgba(20, 8, 2, 0.4)" />
      {/* pedestal */}
      <rect x="52" y="160" width="76" height="66" fill="#5c4630" />
      <rect x="46" y="154" width="88" height="10" rx="3" fill="#7a5f42" />
      <rect x="46" y="222" width="88" height="8" rx="2" fill="#4a3826" />
      {/* glass dome */}
      <path d="M50 154 v-70 a40 40 0 0 1 80 0 v70" fill="rgba(235, 244, 246, 0.14)" stroke="#d8c9a6" strokeWidth="1.6" />
      <path d="M58 140 q -4 -50 20 -62" stroke="#ffffff" strokeWidth="1.6" fill="none" opacity="0.4" />
      {/* the wrapper, glowing like a relic */}
      <g>
        <circle cx="90" cy="112" r="34" fill="#ff9c3f" opacity="0.4" filter="url(#nw-glow-w)" />
        <g transform="rotate(-10 90 112)">
          <rect x="66" y="98" width="48" height="28" rx="3" fill="#f28c28" />
          <rect x="66" y="98" width="48" height="10" rx="3" fill="#ffb347" />
          <path d="M66 98 l-7 -6 v40 l7 -6" fill="#e07716" />
          <path d="M114 98 l7 -6 v40 l-7 -6" fill="#e07716" />
          <rect x="76" y="106" width="28" height="8" rx="4" fill="#fff3d2" opacity="0.9" />
        </g>
      </g>
      <rect x="62" y="176" width="56" height="16" rx="2" fill="#f0e2c2" stroke="#a98a52" strokeWidth="0.8" />
      <text x="90" y="187" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="6.5" letterSpacing="1" fill="#5c4630">DO NOT RUSH</text>
    </svg>
  )
}

function LostShelfSvg() {
  return (
    <svg viewBox="0 0 240 250" aria-hidden="true">
      <ellipse cx="120" cy="242" rx="96" ry="7" fill="rgba(20, 8, 2, 0.4)" />
      <rect x="24" y="20" width="192" height="216" fill="#6b4423" />
      <rect x="32" y="28" width="176" height="200" fill="#8a5a2a" />
      <g fill="#6b4423">
        <rect x="32" y="88" width="176" height="10" /><rect x="32" y="156" width="176" height="10" />
      </g>
      {/* snacks that remain */}
      <rect x="42" y="52" width="30" height="36" rx="2" fill="#f28c28" />
      <rect x="46" y="58" width="22" height="8" rx="4" fill="#fff3d2" opacity="0.9" />
      <rect x="82" y="46" width="26" height="42" rx="2" fill="#b3382e" />
      <rect x="86" y="54" width="18" height="6" rx="3" fill="#f4e0c0" />
      <rect x="150" y="120" width="34" height="36" rx="2" fill="#3f6b3f" />
      <circle cx="167" cy="134" r="7" fill="#f4e0c0" />
      <rect x="46" y="190" width="28" height="38" rx="2" fill="#7a4a92" />
      <rect x="50" y="198" width="20" height="7" rx="3" fill="#f4e0c0" />
      {/* ghosts of the discontinued */}
      <g fill="none" stroke="#f4d8a8" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.75">
        <rect x="120" y="48" width="30" height="40" rx="2" />
        <rect x="164" y="54" width="26" height="34" rx="2" />
        <rect x="48" y="116" width="34" height="40" rx="2" />
        <rect x="98" y="122" width="28" height="34" rx="2" />
        <rect x="96" y="192" width="34" height="36" rx="2" />
        <rect x="150" y="188" width="30" height="40" rx="2" />
      </g>
      <text x="120" y="14" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="9" letterSpacing="2.5" fill="#8a5a2a">THE LOST SHELF</text>
    </svg>
  )
}

function ComfortCabinetSvg() {
  return (
    <svg viewBox="0 0 220 260" aria-hidden="true">
      <ellipse cx="110" cy="252" rx="88" ry="7" fill="rgba(20, 8, 2, 0.4)" />
      <rect x="26" y="16" width="168" height="230" rx="4" fill="#5c4630" />
      <rect x="36" y="26" width="148" height="188" fill="#2e1a0c" />
      {/* glass */}
      <rect x="36" y="26" width="148" height="188" fill="rgba(235, 244, 246, 0.1)" stroke="#d8c9a6" strokeWidth="1.2" />
      <line x1="44" y1="34" x2="86" y2="96" stroke="#ffffff" strokeWidth="1.6" opacity="0.25" />
      {/* shelves of comfort */}
      <g fill="#5c4630"><rect x="36" y="86" width="148" height="7" /><rect x="36" y="150" width="148" height="7" /></g>
      {/* hot chocolate */}
      <g>
        <path d="M54 66 h26 v14 a13 13 0 0 1 -26 0 z" fill="#f4e6c8" />
        <path d="M80 70 q 8 2 0 8" fill="none" stroke="#f4e6c8" strokeWidth="2" />
        <path d="M60 58 q 2 -6 0 -9 M68 58 q -2 -6 0 -9" stroke="#d8c9a6" strokeWidth="1.4" fill="none" />
      </g>
      {/* milkshake */}
      <g>
        <path d="M112 54 l16 0 -5 30 h-6 z" fill="#f7d9e0" />
        <ellipse cx="120" cy="54" rx="9" ry="3.5" fill="#fce9ee" />
        <line x1="124" y1="40" x2="118" y2="58" stroke="#b3382e" strokeWidth="2" />
      </g>
      {/* iced chocolate */}
      <g>
        <rect x="148" y="56" width="18" height="28" rx="3" fill="#8a5a2a" opacity="0.9" />
        <rect x="150" y="60" width="6" height="6" fill="#fff" opacity="0.5" />
        <rect x="158" y="68" width="6" height="6" fill="#fff" opacity="0.4" />
      </g>
      {/* dark chocolate squares */}
      <g fill="#33241a">
        <rect x="52" y="126" width="16" height="16" rx="2" /><rect x="72" y="126" width="16" height="16" rx="2" />
        <circle cx="60" cy="130" r="1.2" fill="#f4e6c8" /><circle cx="80" cy="134" r="1.2" fill="#f4e6c8" />
      </g>
      {/* tiramisu */}
      <g>
        <rect x="120" y="122" width="42" height="8" fill="#f4e6c8" />
        <rect x="120" y="130" width="42" height="6" fill="#8a5a2a" />
        <rect x="120" y="136" width="42" height="8" fill="#f4e6c8" />
        <rect x="120" y="118" width="42" height="4" fill="#4a3826" />
      </g>
      {/* teapot below */}
      <g>
        <ellipse cx="80" cy="196" rx="20" ry="13" fill="#c9a34e" />
        <path d="M98 190 q 12 2 8 12" fill="none" stroke="#c9a34e" strokeWidth="4" />
        <rect x="74" y="178" width="12" height="6" rx="3" fill="#c9a34e" />
      </g>
      <rect x="26" y="214" width="168" height="32" rx="4" fill="#4a3826" />
      <circle cx="110" cy="230" r="4" fill="#a98a52" />
    </svg>
  )
}

function MemoryDeskSvg() {
  return (
    <svg viewBox="0 0 280 240" aria-hidden="true">
      <ellipse cx="140" cy="232" rx="112" ry="8" fill="rgba(20, 8, 2, 0.4)" />
      <rect x="30" y="88" width="220" height="118" fill="#6b4423" />
      <rect x="24" y="80" width="232" height="12" rx="3" fill="#8a5a2a" />
      <rect x="36" y="206" width="14" height="26" fill="#4a3826" />
      <rect x="230" y="206" width="14" height="26" fill="#4a3826" />
      {/* many small drawers */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <g key={`${row}${col}`}>
            <rect x={42 + col * 51} y={98 + row * 34} width="44" height="27" rx="2" fill="#7a4a22" stroke="#4a3826" strokeWidth="1" />
            <circle cx={64 + col * 51} cy={111.5 + row * 34} r="2.6" fill="#d4af6a" />
          </g>
        ))
      )}
      {/* one drawer ajar, paper peeking */}
      <rect x="93" y="132" width="44" height="27" rx="2" fill="#8a5a2a" stroke="#4a3826" strokeWidth="1" transform="translate(0 5)" />
      <rect x="99" y="129" width="30" height="9" fill="#f4e6c8" transform="rotate(-4 114 133)" />
      {/* desk lamp */}
      <g>
        <rect x="196" y="52" width="5" height="30" fill="#4a3826" />
        <path d="M198 52 q -18 -14 -34 -6" stroke="#4a3826" strokeWidth="4" fill="none" />
        <path d="M162 40 a10 10 0 0 0 6 14 l8 -12 z" fill="#a98a52" />
        <circle cx="166" cy="52" r="8" fill="#ffdf8a" opacity="0.35" />
      </g>
    </svg>
  )
}

function LittleLightSvg() {
  return (
    <svg viewBox="0 0 120 140" aria-hidden="true">
      <defs>
        <filter id="nw-glow-l" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>
      <circle cx="60" cy="60" r="34" fill="#ffdf8a" opacity="0.35" filter="url(#nw-glow-l)" />
      <circle cx="60" cy="60" r="12" fill="#ffe9b8" />
      <circle cx="60" cy="60" r="5" fill="#fff8e0" />
      <path d="M60 92 q -3 14 0 24 q 3 -10 0 -24" fill="#ffdf8a" opacity="0.5" />
    </svg>
  )
}

/* ————— svg: small dishes for Mom's Kitchen ————— */

function DishSvg({ kind }) {
  return (
    <svg viewBox="0 0 160 110" aria-hidden="true">
      <ellipse cx="80" cy="96" rx="58" ry="7" fill="rgba(60, 24, 4, 0.25)" />
      {kind === 'dal' && (
        <g>
          <path d="M32 62 a48 26 0 0 0 96 0 z" fill="#f4e6c8" />
          <ellipse cx="80" cy="62" rx="48" ry="13" fill="#e8b430" />
          <ellipse cx="80" cy="60" rx="38" ry="9" fill="#f2c84b" />
          <path d="M70 44 q 3 -12 -3 -18 M88 44 q 3 -12 -3 -18" stroke="#fff3d2" strokeWidth="2" fill="none" opacity="0.9" />
        </g>
      )}
      {kind === 'sabji' && (
        <g>
          <ellipse cx="80" cy="70" rx="54" ry="16" fill="#f4e6c8" />
          <ellipse cx="80" cy="66" rx="42" ry="11" fill="#e0c9a2" />
          {[[62, 62], [78, 58], [94, 63], [70, 68], [88, 68]].map(([x, y]) => (
            <rect key={`${x}${y}`} x={x} y={y} width="12" height="9" rx="2" fill="#d99a3e" stroke="#a86e2a" strokeWidth="0.8" />
          ))}
          <path d="M56 60 q 4 -3 8 0 M96 58 q 4 -3 8 0" stroke="#3f6b3f" strokeWidth="2" fill="none" />
        </g>
      )}
      {kind === 'poha' && (
        <g>
          <ellipse cx="80" cy="70" rx="54" ry="16" fill="#f4e6c8" />
          <ellipse cx="80" cy="64" rx="38" ry="13" fill="#f2d15e" />
          <ellipse cx="80" cy="60" rx="28" ry="9" fill="#f7dc7a" />
          {[[64, 58], [76, 54], [90, 57], [82, 63], [70, 63]].map(([x, y]) => (
            <circle key={`${x}${y}`} cx={x} cy={y} r="1.6" fill="#a86e2a" />
          ))}
          <path d="M104 52 a8 8 0 0 1 8 8 l-10 1 z" fill="#cddc5a" stroke="#9ab23c" strokeWidth="1" />
        </g>
      )}
    </svg>
  )
}

/* ————— wall decor: photographs and notes ————— */

function PhotoPin({ variant = 0 }) {
  return (
    <svg viewBox="0 0 84 100" aria-hidden="true">
      <rect x="2" y="2" width="80" height="96" fill="#f2e6cc" />
      <rect x="9" y="9" width="66" height="66" fill="#c9a36a" />
      <g opacity="0.85">
        {variant === 0 && (
          <g fill="#7a5228">
            <circle cx="34" cy="38" r="6" /><rect x="29" y="44" width="10" height="18" rx="4" />
            <circle cx="52" cy="42" r="4.6" /><rect x="48" y="46" width="8" height="14" rx="3.5" />
            <circle cx="62" cy="20" r="6" fill="#e8cf9a" />
          </g>
        )}
        {variant === 1 && (
          <g fill="#7a5228">
            <rect x="22" y="42" width="28" height="22" />
            <polygon points="36,28 56,42 16,42" />
            <circle cx="60" cy="52" r="8" fill="#5c6e3f" />
            <rect x="58" y="58" width="4" height="12" />
          </g>
        )}
        {variant === 2 && (
          <g>
            <path d="M30 48 l10 -12 l10 12 l-10 12 z" fill="#a8442e" />
            <path d="M40 60 q -4 10 4 16" stroke="#7a5228" strokeWidth="1.4" fill="none" />
            <circle cx="20" cy="22" r="5" fill="#e8cf9a" />
          </g>
        )}
      </g>
      <text x="42" y="90" textAnchor="middle" fontFamily="Caveat, Cormorant Garamond, serif" fontStyle="italic" fontSize="9" fill="#8a6f42">a good day</text>
    </svg>
  )
}

function NotePin() {
  return (
    <svg viewBox="0 0 80 90" aria-hidden="true">
      <rect x="3" y="4" width="74" height="82" fill="#f7efd8" transform="rotate(-1 40 45)" />
      <circle cx="40" cy="9" r="2.6" fill="#b3382e" />
      {[24, 34, 44, 54, 64].map((y, i) => (
        <path key={y} d={`M14 ${y} q 14 ${i % 2 ? 3 : -3} ${i === 4 ? 30 : 52} 0`} stroke="#8a6f42" strokeWidth="1.4" fill="none" opacity="0.8" />
      ))}
    </svg>
  )
}

/* ————— the artifact standing in the room ————— */

function Artifact({ x, z, width, y, floating = false, label, visited, onOpen, children }) {
  const transform = floating
    ? `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`
    : `translate(-50%, -100%) translate3d(${x}px, 500px, ${z}px)`
  return (
    <button
      type="button"
      className="nw-artifact"
      style={{ width: `${width}px`, transform }}
      onClick={onOpen}
      aria-label={`${label} — step closer`}
    >
      <span className="nw-artifact__body">{children}</span>
      <span className="nw-artifact__label smallcaps">
        {label}
        {visited && <span className="nw-artifact__seen"> · visited</span>}
      </span>
    </button>
  )
}

/* ————— overlays ————— */

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
    <div className={`nw-ov nw-ov--${id}`} role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className="nw-ov__x smallcaps" onClick={onClose}>Close ✕</button>
      <div className="nw-ov__inner">
        <header className="nw-ov__head">
          <p className="smallcaps nw-ov__eyebrow">{eyebrow}</p>
          <h2 className="nw-ov__title">{title}</h2>
          {subtitle && <p className="nw-ov__subtitle">{subtitle}</p>}
        </header>
        {children}
        <button type="button" className="nw-ov__back smallcaps" onClick={onClose}>← Back to the wing</button>
      </div>
    </div>
  )
}

function KitchenView({ onClose }) {
  return (
    <Overlay id="kitchen" eyebrow="Exhibit I · The Kitchen Table" title="Mom’s Kitchen" subtitle="Serving hours: whenever you arrive" onClose={onClose}>
      <p className="nw-ov__lede">
        This room is catalogued under food and filed under belonging. Nothing here is plated for photographs.
        Everything here arrived at the table before anyone asked.
      </p>
      <div className="nw-dishes">
        {DISHES.map((d, i) => (
          <article className="nw-dish" key={d.name}>
            <span className="nw-dish__art">
              <DishSvg kind={['dal', 'sabji', 'poha'][i]} />
            </span>
            <h3 className="nw-dish__name">{d.name}</h3>
            <p className="nw-dish__line">{d.line}</p>
            <p className="nw-dish__text">{d.text}</p>
          </article>
        ))}
      </div>
      <div className="nw-plaque">
        <p>“Some recipes become part of a person’s identity.”</p>
      </div>
    </Overlay>
  )
}

function WrapperView({ onClose }) {
  return (
    <Overlay id="wrapper" eyebrow="Exhibit II · The Orange Wrapper" title="Grandfather Archive" subtitle="A small room, on purpose" onClose={onClose}>
      <div className="nw-relic">
        <WrapperRelicSvg />
      </div>
      <div className="nw-sparse">
        <div className="nw-sparse__item">
          <h3>Milkybar</h3>
          <p>
            White chocolate, held like treasure, eaten in a strategy of small bites to make it last.
            The chocolate itself vanished decades ago in under four minutes. That is not what is preserved here.
          </p>
        </div>
        <div className="nw-sparse__item">
          <h3>Memories</h3>
          <p>
            The hand it arrived from. The unhurried afternoons around it. Being handed something small and
            understanding, without being told, that it meant something large.
          </p>
        </div>
        <div className="nw-sparse__item">
          <h3>Time spent together</h3>
          <p>
            The archive’s true holding. Unphotographed, undocumented, and more vivid than anything hanging in
            the other six wings. Visitors are asked to walk slowly here.
          </p>
        </div>
      </div>
      <div className="nw-plaque nw-plaque--dark">
        <p>“The value of an object is often measured by the person who handed it to us.”</p>
      </div>
    </Overlay>
  )
}

function ShelfView({ onClose }) {
  return (
    <Overlay id="shelf" eyebrow="Exhibit III · The Lost Shelf" title="Discontinued Things" subtitle="Things that disappeared, and refused to leave" onClose={onClose}>
      <p className="nw-ov__lede">
        The dashed outlines on the shelf are not missing exhibits. They are exhibits.
      </p>
      <div className="nw-lost">
        {DISCONTINUED.map((item) => (
          <article className="nw-lost__card" key={item.name}>
            <h3>{item.name}</h3>
            <p className="smallcaps nw-lost__status">{item.status}</p>
            <p className="nw-lost__text">{item.text}</p>
          </article>
        ))}
      </div>
      <div className="nw-plaque">
        <p>“Some things survive only because someone remembers them.”</p>
      </div>
    </Overlay>
  )
}

function CabinetView({ onClose }) {
  return (
    <Overlay id="cabinet" eyebrow="Exhibit IV · The Comfort Cabinet" title="The Dispensary of Comforts" subtitle="Prescribed by feeling, never by menu" onClose={onClose}>
      <p className="nw-ov__lede">
        The cabinet does not describe its contents by taste. Taste is not what any of these are for.
      </p>
      <ul className="nw-comforts">
        {COMFORTS.map((c) => (
          <li className="nw-comfort" key={c.name}>
            <span className="nw-comfort__name">{c.name}</span>
            <span className="nw-comfort__rx">{c.rx}</span>
          </li>
        ))}
      </ul>
      <p className="nw-ov__aside">
        Side effects may include: rainy days improving, afternoons lengthening, and the strong urge to stay a little longer.
      </p>
    </Overlay>
  )
}

function DrawerView({ onClose }) {
  const [openDrawers, setOpenDrawers] = useState([])
  const toggle = (i) =>
    setOpenDrawers((prev) => (prev.includes(i) ? prev.filter((d) => d !== i) : [...prev, i]))
  return (
    <Overlay id="drawer" eyebrow="Exhibit V · The Memory Drawer" title="The Memory Drawer" subtitle="Seven drawers · no filing system · none planned" onClose={onClose}>
      <p className="nw-ov__lede">
        Memory is not organized. It is a desk full of drawers, each holding something that refused to be thrown
        away. Open them in any order. That is how they went in.
      </p>
      <div className="nw-drawers">
        {DRAWERS.map((d, i) => {
          const isOpen = openDrawers.includes(i)
          return (
            <div className={`nw-drawer ${isOpen ? 'nw-drawer--open' : ''}`} key={d.label}>
              <button
                type="button"
                className="nw-drawer__front"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-label={`Drawer: ${d.label}`}
              >
                <span className="nw-drawer__knob" aria-hidden="true" />
                <span className="smallcaps nw-drawer__tag">{d.label}</span>
              </button>
              {isOpen && (
                <div className="nw-drawer__slip">
                  {d.image === 'evidence' && (
                    <img
                      src={evidencePhoto}
                      alt="The meme in question: four stills of a man in a bathrobe posing invitingly on a bed"
                      className="nw-drawer__photo"
                    />
                  )}
                  <p className="nw-drawer__sliptext">{d.text}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Overlay>
  )
}

function KeepingView({ onClose }) {
  return (
    <Overlay id="keeping" eyebrow="Found behind the kitchen table" title="The Things Worth Keeping" subtitle="No objects. No photographs. Only this." onClose={onClose}>
      <div className="nw-keeping">
        {KEEPING.map((line, i) => (
          <p className="nw-keeping__line" style={{ '--i': i }} key={line}>{line}</p>
        ))}
      </div>
      <p className="nw-keeping__close">“The collection began long before the museum did.”</p>
    </Overlay>
  )
}

/* ————— the wing ————— */

const EXHIBITS = [
  { id: 'kitchen', roman: 'I', label: 'The Kitchen Table' },
  { id: 'wrapper', roman: 'II', label: 'The Orange Wrapper' },
  { id: 'shelf', roman: 'III', label: 'The Lost Shelf' },
  { id: 'cabinet', roman: 'IV', label: 'The Comfort Cabinet' },
  { id: 'drawer', roman: 'V', label: 'The Memory Drawer' },
]

export default function NostalgiaWing() {
  const wing = WINGS.find((w) => w.slug === 'memory-archive')
  const next = WINGS[(WINGS.indexOf(wing) + 1) % WINGS.length]
  const [open, setOpen] = useState(null)
  const [visited, setVisited] = useState(readVisited)
  const allVisited = EXHIBITS.every((e) => visited.includes(e.id))
  const Art = ARTWORKS[wing.art]

  useEffect(() => {
    document.title = 'The Nostalgia Wing — The Glyptotek of Samveg'
  }, [])

  const openExhibit = (id) => {
    setOpen(id)
    if (id === 'keeping') return
    setVisited((prev) => {
      if (prev.includes(id)) return prev
      const nextList = [...prev, id]
      writeVisited(nextList)
      return nextList
    })
  }

  const artifact = (id, extra, body) => {
    const meta = EXHIBITS.find((e) => e.id === id)
    return (
      <Artifact
        key={id}
        label={`${meta.roman} · ${meta.label}`}
        visited={visited.includes(id)}
        onOpen={() => openExhibit(id)}
        {...extra}
      >
        {body}
      </Artifact>
    )
  }

  const overlay = (
    <>
      <nav className="room3d-topbar">
        <Link to="/" className="smallcaps">← Entrance Hall</Link>
        <span className="smallcaps room3d-topbar__wordmark">The Glyptotek of Samveg</span>
        <span className="smallcaps">Wing V</span>
      </nav>
      <div className="nw-warmth" aria-hidden="true" />
      <p className="room3d-hint smallcaps">
        {allVisited ? 'A small light has appeared behind the kitchen table' : 'Five artifacts · Step up to any of them'}
      </p>
    </>
  )

  return (
    <main className="wing wing--memory nw">
      <div className="wing-3d">
        <Room3D
          overlay={overlay}
          back={
            <>
              <div className="room3d-title" style={{ top: '10%' }}>
                <p className="smallcaps room3d-title__eyebrow">Wing V of VI · The heart of the museum</p>
                <h1 className="room3d-title__name">The Nostalgia Wing</h1>
                <p className="room3d-title__tagline nw-tagline">“{wing.tagline}”</p>
              </div>
              <div className="nw-pin" style={{ left: '9%', top: '46%', width: '78px', '--tilt': '-3deg' }}><PhotoPin variant={0} /></div>
              <div className="nw-pin" style={{ left: '87%', top: '44%', width: '78px', '--tilt': '2deg' }}><PhotoPin variant={2} /></div>
            </>
          }
          left={
            <>
              <div className="nw-pin" style={{ left: '64%', top: '28%', width: '86px', '--tilt': '2.5deg' }}><PhotoPin variant={1} /></div>
              <div className="nw-pin" style={{ left: '80%', top: '30%', width: '70px', '--tilt': '-2deg' }}><NotePin /></div>
              <div className="nw-pin" style={{ left: '72%', top: '56%', width: '76px', '--tilt': '1.5deg' }}><PhotoPin variant={2} /></div>
            </>
          }
          right={
            <>
              <div className="nw-pin" style={{ left: '22%', top: '28%', width: '86px', '--tilt': '-2.5deg' }}><PhotoPin variant={0} /></div>
              <div className="nw-pin" style={{ left: '10%', top: '32%', width: '70px', '--tilt': '2deg' }}><NotePin /></div>
              <div className="nw-pin" style={{ left: '18%', top: '56%', width: '76px', '--tilt': '-1.5deg' }}><PhotoPin variant={1} /></div>
            </>
          }
          floor={<div className="nw-hearthlight" aria-hidden="true" />}
          props={
            /* painter's order: deepest first — sibling 3D billboards with
               filters paint in DOM order, not depth order */
            <>
              {artifact('cabinet', { x: -400, z: -1050, width: 210 }, <ComfortCabinetSvg />)}
              {artifact('drawer', { x: 380, z: -1050, width: 250 }, <MemoryDeskSvg />)}
              {allVisited && (
                <button
                  type="button"
                  className="nw-light"
                  style={{ transform: 'translate(-50%, -50%) translate3d(60px, 170px, -1040px)' }}
                  onClick={() => openExhibit('keeping')}
                  aria-label="A small light behind the kitchen table — follow it"
                >
                  <LittleLightSvg />
                </button>
              )}
              {artifact('kitchen', { x: 0, z: -780, width: 380 }, <KitchenTableSvg />)}
              {artifact('shelf', { x: 580, z: -640, width: 240 }, <LostShelfSvg />)}
              {artifact('wrapper', { x: -560, z: -600, width: 170 }, <WrapperRelicSvg />)}
              <RoomProp x={-60} z={-430} width={270}><BenchSvg /></RoomProp>
            </>
          }
        />
      </div>

      {/* flat, for narrow doorways */}
      <div className="wing-flat nw-flat">
        <nav className="room3d-topbar room3d-topbar--flat">
          <Link to="/" className="smallcaps">← Entrance Hall</Link>
          <span className="smallcaps">Wing V</span>
        </nav>
        <header className="wing-flat__header">
          <p className="smallcaps room3d-title__eyebrow">Wing V of VI · The heart of the museum</p>
          <h1 className="room3d-title__name">The Nostalgia Wing</h1>
          <p className="room3d-title__tagline nw-tagline">“{wing.tagline}”</p>
        </header>
        <div className="nw-flat__artifacts">
          {EXHIBITS.map(({ id, roman, label }) => (
            <button key={id} type="button" className="nw-flat__artifact" onClick={() => openExhibit(id)}>
              <span className="nw-flat__art">
                {id === 'kitchen' && <KitchenTableSvg />}
                {id === 'wrapper' && <WrapperRelicSvg />}
                {id === 'shelf' && <LostShelfSvg />}
                {id === 'cabinet' && <ComfortCabinetSvg />}
                {id === 'drawer' && <MemoryDeskSvg />}
              </span>
              <span className="smallcaps nw-artifact__label">
                {roman} · {label}
                {visited.includes(id) && <span className="nw-artifact__seen"> · visited</span>}
              </span>
            </button>
          ))}
          {allVisited && (
            <button type="button" className="nw-flat__artifact nw-flat__light" onClick={() => openExhibit('keeping')}>
              <span className="nw-flat__art"><LittleLightSvg /></span>
              <span className="smallcaps nw-artifact__label">A small light, behind the table</span>
            </button>
          )}
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

      {open === 'kitchen' && <KitchenView onClose={() => setOpen(null)} />}
      {open === 'wrapper' && <WrapperView onClose={() => setOpen(null)} />}
      {open === 'shelf' && <ShelfView onClose={() => setOpen(null)} />}
      {open === 'cabinet' && <CabinetView onClose={() => setOpen(null)} />}
      {open === 'drawer' && <DrawerView onClose={() => setOpen(null)} />}
      {open === 'keeping' && <KeepingView onClose={() => setOpen(null)} />}
    </main>
  )
}
