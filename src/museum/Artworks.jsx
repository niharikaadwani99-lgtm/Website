/*
 * The permanent collection — eight works, drawn by hand in SVG.
 * Each hangs in the entrance hall and again at the door of its wing.
 */

const STARS = [
  [24, 30], [58, 18], [96, 44], [140, 22], [188, 36], [232, 16], [268, 48],
  [40, 84], [120, 70], [206, 92], [256, 110], [30, 150], [274, 180],
  [70, 118], [160, 60], [246, 66], [104, 108], [216, 140], [48, 210], [262, 240],
]

/* I — vinyl records dissolving into waves and light */
export function ArtSound() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="Resonance, Dissolving — abstract vinyl records dissolving into waves of light">
      <defs>
        <linearGradient id="snd-bg" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#221a12" />
          <stop offset="1" stopColor="#120d09" />
        </linearGradient>
        <linearGradient id="snd-gold" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#8a6f42" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#d4af6a" />
          <stop offset="1" stopColor="#f4e3b2" />
        </linearGradient>
        <radialGradient id="snd-glow" cx="0.72" cy="0.22" r="0.7">
          <stop offset="0" stopColor="#f4e3b2" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f4e3b2" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="380" fill="url(#snd-bg)" />
      <rect width="300" height="380" fill="url(#snd-glow)" />
      {/* the record, half intact */}
      <g transform="translate(96 268)">
        <circle r="86" fill="#0b0805" stroke="#3a2e1e" strokeWidth="1" />
        {[70, 58, 46, 34].map((r) => (
          <circle key={r} r={r} fill="none" stroke="#4a3b26" strokeWidth="0.8" opacity="0.9" />
        ))}
        <circle r="20" fill="#8a6f42" opacity="0.85" />
        <circle r="3.5" fill="#120d09" />
      </g>
      {/* grooves loosening into waves */}
      <path d="M150 216 C 190 200, 196 168, 236 156 C 262 148, 276 132, 284 114" fill="none" stroke="url(#snd-gold)" strokeWidth="2.4" opacity="0.95" />
      <path d="M138 196 C 176 184, 178 150, 216 134 C 248 121, 258 100, 262 78" fill="none" stroke="url(#snd-gold)" strokeWidth="1.8" opacity="0.8" />
      <path d="M124 178 C 158 166, 158 132, 194 112 C 228 93, 232 72, 230 50" fill="none" stroke="url(#snd-gold)" strokeWidth="1.4" opacity="0.65" />
      <path d="M108 162 C 138 148, 134 116, 166 92 C 198 68, 198 48, 192 30" fill="none" stroke="url(#snd-gold)" strokeWidth="1" opacity="0.5" />
      <path d="M94 150 C 118 134, 110 104, 138 78 C 164 54, 162 38, 154 24" fill="none" stroke="url(#snd-gold)" strokeWidth="0.7" opacity="0.35" />
      {/* light leaving the music */}
      {[[246, 96, 2], [262, 62, 1.4], [222, 44, 1.8], [200, 22, 1.2], [274, 140, 1.6], [252, 26, 1], [178, 44, 0.9], [286, 88, 1.1]].map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="#f4e3b2" opacity="0.8" />
      ))}
    </svg>
  )
}

/* II — a surreal dreamscape of floating architecture and stars */
export function ArtDream() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="The Architecture of Sleep — floating arches and stairways under stars">
      <defs>
        <linearGradient id="drm-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#100f22" />
          <stop offset="0.6" stopColor="#1c1a38" />
          <stop offset="1" stopColor="#2a2148" />
        </linearGradient>
        <radialGradient id="drm-nebula" cx="0.3" cy="0.35" r="0.6">
          <stop offset="0" stopColor="#6d5aa8" stopOpacity="0.4" />
          <stop offset="1" stopColor="#6d5aa8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="drm-door" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2e2b8" />
          <stop offset="1" stopColor="#c9a34e" />
        </linearGradient>
      </defs>
      <rect width="300" height="380" fill="url(#drm-bg)" />
      <rect width="300" height="380" fill="url(#drm-nebula)" />
      {STARS.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={i % 3 === 0 ? 1.4 : 0.8} fill="#e8e2f5" opacity={i % 2 ? 0.9 : 0.55} />
      ))}
      {/* crescent */}
      <path d="M236 74 a26 26 0 1 0 12 44 a20 20 0 1 1 -12 -44" fill="#efe6c8" opacity="0.9" />
      {/* floating arch fragment */}
      <g stroke="#bfb4e2" strokeWidth="1.6" fill="none" opacity="0.9">
        <path d="M60 190 v-36 a34 34 0 0 1 68 0 v36" />
        <path d="M72 190 v-34 a22 22 0 0 1 44 0 v34" />
        <line x1="52" y1="192" x2="136" y2="192" />
      </g>
      {/* stairway rising to nowhere */}
      <g stroke="#a89bd8" strokeWidth="1.4" fill="none" opacity="0.8">
        <path d="M170 300 h26 v-12 h26 v-12 h26 v-12 h26 v-12" />
        <path d="M170 312 h30 v-12" opacity="0.4" />
      </g>
      {/* the glowing door */}
      <rect x="128" y="238" width="34" height="62" rx="17" fill="url(#drm-door)" opacity="0.95" />
      <rect x="128" y="238" width="34" height="62" rx="17" fill="none" stroke="#f6ecd0" strokeWidth="1" opacity="0.6" />
      <ellipse cx="145" cy="312" rx="34" ry="5" fill="#c9a34e" opacity="0.25" />
      {/* inverted colonnade drifting above */}
      <g stroke="#8d82bd" strokeWidth="1.2" fill="none" opacity="0.6" transform="rotate(8 220 330)">
        <line x1="196" y1="330" x2="196" y2="356" />
        <line x1="210" y1="330" x2="210" y2="356" />
        <line x1="224" y1="330" x2="224" y2="356" />
        <line x1="238" y1="330" x2="238" y2="356" />
        <line x1="188" y1="328" x2="246" y2="328" />
      </g>
    </svg>
  )
}

/* III — architectural sketches transforming into thriving cities */
export function ArtFounder() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="Sketch for a Possible City — pencil lines becoming towers">
      <defs>
        <linearGradient id="fnd-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f1ece0" />
          <stop offset="1" stopColor="#e2dac8" />
        </linearGradient>
        <linearGradient id="fnd-tower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#41586e" />
          <stop offset="1" stopColor="#22303f" />
        </linearGradient>
        <linearGradient id="fnd-tower2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5a7288" />
          <stop offset="1" stopColor="#31445a" />
        </linearGradient>
      </defs>
      <rect width="300" height="380" fill="url(#fnd-bg)" />
      {/* drafting grid */}
      <g stroke="#b8ab8e" strokeWidth="0.5" opacity="0.5">
        <line x1="0" y1="300" x2="300" y2="300" />
        <line x1="0" y1="330" x2="300" y2="330" />
        <line x1="30" y1="380" x2="150" y2="240" />
        <line x1="270" y1="380" x2="150" y2="240" />
      </g>
      <circle cx="236" cy="64" r="26" fill="#d4af6a" opacity="0.55" />
      {/* sketched buildings, left — unfinished lines */}
      <g stroke="#6b5d45" strokeWidth="1.1" fill="none" strokeDasharray="5 3" opacity="0.85">
        <path d="M28 300 v-96 h34 v96" />
        <path d="M36 224 h18 M36 244 h18 M36 264 h18" strokeDasharray="none" strokeWidth="0.7" />
        <path d="M74 300 v-140 h30 v140" />
        <path d="M80 176 h18 M80 200 h18 M80 224 h18 M80 248 h18" strokeDasharray="none" strokeWidth="0.7" />
        <path d="M74 160 l15 -18 l15 18" />
      </g>
      {/* half-rendered */}
      <g>
        <rect x="118" y="128" width="34" height="172" fill="none" stroke="#4a5b6e" strokeWidth="1.2" />
        <rect x="135" y="128" width="17" height="172" fill="#41586e" opacity="0.85" />
      </g>
      {/* built city, right */}
      <rect x="164" y="96" width="38" height="204" fill="url(#fnd-tower)" />
      <rect x="212" y="148" width="30" height="152" fill="url(#fnd-tower2)" />
      <rect x="250" y="112" width="34" height="188" fill="url(#fnd-tower)" />
      {/* lit windows */}
      <g fill="#e8c785">
        {[0, 1, 2, 3, 4, 5, 6].map((row) =>
          [0, 1].map((col) => (
            <rect key={`a${row}${col}`} x={172 + col * 14} y={112 + row * 26} width="6" height="9" opacity={(row + col) % 3 ? 0.9 : 0.3} />
          ))
        )}
        {[0, 1, 2, 3, 4].map((row) => (
          <rect key={`b${row}`} x={222} y={162 + row * 26} width="6" height="9" opacity={row % 2 ? 0.85 : 0.35} />
        ))}
        {[0, 1, 2, 3, 4, 5].map((row) =>
          [0, 1].map((col) => (
            <rect key={`c${row}${col}`} x={257 + col * 14} y={126 + row * 28} width="6" height="9" opacity={(row + col) % 2 ? 0.9 : 0.4} />
          ))
        )}
      </g>
      {/* annotation */}
      <g stroke="#6b5d45" strokeWidth="0.7" fill="none" opacity="0.7">
        <circle cx="89" cy="152" r="12" strokeDasharray="3 2" />
        <line x1="99" y1="144" x2="128" y2="120" />
      </g>
    </svg>
  )
}

/* IV — a curated still life: fragrance, watch, books, collectibles */
export function ArtObjects() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="Still Life with Time — fragrance bottle, record-player watch, and books">
      <defs>
        <linearGradient id="obj-wall" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor="#ded5c2" />
          <stop offset="1" stopColor="#b3a68d" />
        </linearGradient>
        <linearGradient id="obj-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d8a648" stopOpacity="0.55" />
          <stop offset="1" stopColor="#9a6c1f" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="obj-light" cx="0.28" cy="0.18" r="0.8">
          <stop offset="0" stopColor="#f6efdd" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f6efdd" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="380" fill="url(#obj-wall)" />
      <rect width="300" height="380" fill="url(#obj-light)" />
      {/* table */}
      <rect x="0" y="286" width="300" height="94" fill="#3d2c1c" />
      <rect x="0" y="286" width="300" height="4" fill="#63492e" />
      {/* shadows */}
      <ellipse cx="86" cy="290" rx="46" ry="5" fill="#2a1d10" opacity="0.5" />
      <ellipse cx="182" cy="290" rx="40" ry="4.5" fill="#2a1d10" opacity="0.45" />
      <ellipse cx="252" cy="290" rx="28" ry="4" fill="#2a1d10" opacity="0.4" />
      {/* fragrance bottle */}
      <g>
        <rect x="62" y="196" width="48" height="90" rx="8" fill="url(#obj-glass)" stroke="#7a5518" strokeWidth="1" />
        <rect x="70" y="206" width="12" height="70" rx="6" fill="#f6efdd" opacity="0.35" />
        <rect x="78" y="182" width="16" height="16" fill="#8a6f42" />
        <rect x="72" y="168" width="28" height="16" rx="3" fill="#d9cfae" stroke="#8a6f42" strokeWidth="1" />
        <rect x="70" y="228" width="32" height="26" rx="2" fill="#efe6cf" opacity="0.9" />
      </g>
      {/* stack of books */}
      <g>
        <rect x="138" y="266" width="88" height="20" rx="2" fill="#5c3a2e" />
        <rect x="144" y="248" width="76" height="18" rx="2" fill="#7d6b4a" />
        <rect x="150" y="232" width="64" height="16" rx="2" fill="#3f4a42" />
        <line x1="138" y1="276" x2="226" y2="276" stroke="#d9cfae" strokeWidth="0.8" opacity="0.5" />
        <line x1="144" y1="257" x2="220" y2="257" stroke="#efe6cf" strokeWidth="0.8" opacity="0.4" />
      </g>
      {/* record-player watch on a stand */}
      <g>
        <path d="M244 286 l8 -34 h8 l8 34" fill="#2d2016" />
        <circle cx="256" cy="230" r="26" fill="#1c1712" stroke="#d4af6a" strokeWidth="2.5" />
        <circle cx="256" cy="230" r="17" fill="none" stroke="#6b5b3a" strokeWidth="0.8" />
        <circle cx="256" cy="230" r="11" fill="none" stroke="#6b5b3a" strokeWidth="0.8" />
        <circle cx="256" cy="230" r="3" fill="#d4af6a" />
        <line x1="269" y1="213" x2="259" y2="227" stroke="#d4af6a" strokeWidth="1.6" />
        <circle cx="269" cy="213" r="2.4" fill="#d4af6a" />
      </g>
      {/* small sculpture */}
      <g>
        <rect x="30" y="272" width="18" height="14" fill="#8a7e68" />
        <path d="M39 272 c -10 -8 -8 -22 0 -28 c 8 6 10 20 0 28" fill="#cfc4a8" />
      </g>
    </svg>
  )
}

/* V — a figure balancing in motion, surrounded by geometry */
export function ArtMotion() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="Balance Study No. 9 — a figure in equilibrium amid geometric lines">
      <defs>
        <linearGradient id="mtn-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ece4d2" />
          <stop offset="1" stopColor="#d9cfb6" />
        </linearGradient>
      </defs>
      <rect width="300" height="380" fill="url(#mtn-bg)" />
      {/* geometry of effort */}
      <circle cx="150" cy="186" r="112" fill="none" stroke="#2b241b" strokeWidth="1" opacity="0.55" />
      <circle cx="150" cy="186" r="86" fill="none" stroke="#2b241b" strokeWidth="0.6" opacity="0.3" strokeDasharray="2 5" />
      <line x1="20" y1="330" x2="280" y2="60" stroke="#2b241b" strokeWidth="0.7" opacity="0.35" />
      <line x1="20" y1="60" x2="280" y2="330" stroke="#2b241b" strokeWidth="0.7" opacity="0.35" />
      <path d="M62 122 A 112 112 0 0 1 238 122" fill="none" stroke="#b3382e" strokeWidth="2.6" opacity="0.9" />
      <line x1="150" y1="298" x2="150" y2="330" stroke="#2b241b" strokeWidth="1" opacity="0.5" />
      <line x1="118" y1="330" x2="182" y2="330" stroke="#2b241b" strokeWidth="1.4" opacity="0.7" />
      {/* the figure — one-arm balance, legs scissored skyward */}
      <g fill="none" stroke="#221c14" strokeLinecap="round">
        {/* supporting arm */}
        <path d="M150 298 L146 258" strokeWidth="7" />
        {/* torso, arched */}
        <path d="M146 258 C 142 226, 152 204, 168 188" strokeWidth="12" />
        {/* head */}
        <circle cx="180" cy="178" r="11" fill="#221c14" stroke="none" />
        {/* free arm, extended */}
        <path d="M150 244 C 168 240, 186 232, 202 216" strokeWidth="6" />
        {/* legs, split */}
        <path d="M168 188 C 156 160, 138 138, 116 122" strokeWidth="9" />
        <path d="M168 188 C 184 158, 204 140, 230 130" strokeWidth="9" />
      </g>
      {/* motion echoes */}
      <path d="M112 116 C 136 132, 152 152, 162 178" fill="none" stroke="#221c14" strokeWidth="1" opacity="0.25" />
      <path d="M236 124 C 210 136, 192 154, 176 182" fill="none" stroke="#221c14" strokeWidth="1" opacity="0.25" />
      <circle cx="150" cy="298" r="4" fill="#b3382e" />
    </svg>
  )
}

/* VI — an orange wrapper opening into a childhood landscape */
export function ArtMemory() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="The Orange Wrapper — a chocolate wrapper opening into a childhood landscape">
      <defs>
        <linearGradient id="mem-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1e0e06" />
          <stop offset="1" stopColor="#3a1c0a" />
        </linearGradient>
        <linearGradient id="mem-wrap" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffb347" />
          <stop offset="0.5" stopColor="#f28c28" />
          <stop offset="1" stopColor="#c05e10" />
        </linearGradient>
        <linearGradient id="mem-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe9b8" />
          <stop offset="1" stopColor="#ffc98a" />
        </linearGradient>
        <radialGradient id="mem-halo" cx="0.5" cy="0.42" r="0.55">
          <stop offset="0" stopColor="#ff9c3f" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ff9c3f" stopOpacity="0" />
        </radialGradient>
        <clipPath id="mem-window">
          <ellipse cx="150" cy="128" rx="86" ry="74" />
        </clipPath>
      </defs>
      <rect width="300" height="380" fill="url(#mem-bg)" />
      <rect width="300" height="380" fill="url(#mem-halo)" />
      {/* the remembered landscape, rising out of the foil */}
      <g clipPath="url(#mem-window)">
        <rect x="64" y="54" width="172" height="106" fill="url(#mem-sky)" />
        <circle cx="150" cy="112" r="20" fill="#ffdf8a" />
        <circle cx="150" cy="112" r="28" fill="#ffdf8a" opacity="0.35" />
        <path d="M64 152 Q 110 122 150 148 T 236 144 V 202 H 64 Z" fill="#c98d3f" />
        <path d="M64 166 Q 118 142 168 162 T 236 160 V 202 H 64 Z" fill="#a86e2a" />
        {/* a kite */}
        <path d="M196 84 l10 -12 l10 12 l-10 12 z" fill="#b3382e" />
        <path d="M206 96 q -4 14 6 24" fill="none" stroke="#7a2a22" strokeWidth="0.9" />
        {/* two small figures */}
        <g fill="#5c3212">
          <circle cx="118" cy="150" r="3.4" />
          <rect x="115.5" y="153" width="5" height="11" rx="2" />
          <circle cx="132" cy="154" r="2.6" />
          <rect x="130" y="156" width="4.4" height="9" rx="2" />
        </g>
      </g>
      <ellipse cx="150" cy="128" rx="86" ry="74" fill="none" stroke="#ffcf8f" strokeWidth="1" opacity="0.5" />
      {/* the wrapper, folded open */}
      <g>
        <polygon points="88,218 212,218 232,354 68,354" fill="url(#mem-wrap)" />
        <polygon points="88,218 150,236 212,218 202,196 150,214 98,196" fill="#ffb347" />
        <polygon points="98,196 150,214 150,236 88,218" fill="#ffc670" opacity="0.9" />
        <polygon points="202,196 150,214 150,236 212,218" fill="#e07716" opacity="0.9" />
        {/* foil creases */}
        <g stroke="#8a3f08" strokeWidth="0.8" opacity="0.5">
          <line x1="110" y1="232" x2="96" y2="348" />
          <line x1="150" y1="238" x2="150" y2="352" />
          <line x1="190" y1="232" x2="204" y2="348" />
        </g>
        <g stroke="#ffd9a0" strokeWidth="0.7" opacity="0.6">
          <line x1="128" y1="234" x2="120" y2="350" />
          <line x1="172" y1="234" x2="180" y2="350" />
        </g>
        {/* torn edge glow */}
        <path d="M88 218 L150 236 L212 218" fill="none" stroke="#ffe9b8" strokeWidth="1.6" opacity="0.9" />
      </g>
    </svg>
  )
}

/* VII — a monumental museum emerging from mist */
export function ArtFuture() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="The Museum in the Mist — a monumental facade emerging from fog">
      <defs>
        <linearGradient id="fut-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfd6d2" />
          <stop offset="0.55" stopColor="#e4e4da" />
          <stop offset="1" stopColor="#f2eee0" />
        </linearGradient>
        <linearGradient id="fut-stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b7b3a2" />
          <stop offset="1" stopColor="#8f8a77" />
        </linearGradient>
        <linearGradient id="fut-mist" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#eceadf" stopOpacity="0" />
          <stop offset="0.5" stopColor="#eceadf" stopOpacity="0.9" />
          <stop offset="1" stopColor="#eceadf" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fut-door" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0d9a2" />
          <stop offset="1" stopColor="#c9a34e" />
        </linearGradient>
      </defs>
      <rect width="300" height="380" fill="url(#fut-bg)" />
      {/* dome */}
      <path d="M96 148 A 54 54 0 0 1 204 148 Z" fill="url(#fut-stone)" opacity="0.9" />
      <rect x="142" y="82" width="16" height="14" fill="#8f8a77" />
      <circle cx="150" cy="78" r="5" fill="#a98a52" />
      {/* pediment */}
      <polygon points="150,132 246,168 54,168" fill="#a49f8c" />
      <polygon points="150,142 226,168 74,168" fill="#8f8a77" opacity="0.6" />
      {/* entablature + columns */}
      <rect x="54" y="168" width="192" height="12" fill="#9b9682" />
      <g fill="url(#fut-stone)">
        {[66, 96, 126, 162, 192, 222].map((x) => (
          <rect key={x} x={x} y="180" width="14" height="118" rx="2" />
        ))}
      </g>
      <g fill="#7c775f" opacity="0.5">
        {[66, 96, 126, 162, 192, 222].map((x) => (
          <rect key={x} x={x + 10} y="180" width="4" height="118" />
        ))}
      </g>
      {/* glowing entrance */}
      <rect x="138" y="216" width="24" height="82" rx="12" fill="url(#fut-door)" />
      {/* steps */}
      <rect x="46" y="298" width="208" height="8" fill="#a49f8c" />
      <rect x="38" y="306" width="224" height="8" fill="#b0ab97" opacity="0.85" />
      <rect x="30" y="314" width="240" height="8" fill="#bcb7a2" opacity="0.7" />
      {/* mist bands */}
      <rect x="0" y="150" width="300" height="34" fill="url(#fut-mist)" opacity="0.9" />
      <rect x="0" y="216" width="300" height="42" fill="url(#fut-mist)" opacity="0.75" />
      <rect x="0" y="288" width="300" height="60" fill="url(#fut-mist)" />
      <rect x="0" y="322" width="300" height="58" fill="#f2eee0" opacity="0.75" />
      {/* faint birds */}
      <g stroke="#6f6a58" strokeWidth="1" fill="none" opacity="0.6">
        <path d="M62 84 q 5 -5 10 0 q 5 -5 10 0" />
        <path d="M226 60 q 4 -4 8 0 q 4 -4 8 0" />
      </g>
    </svg>
  )
}

/* ∅ — an ordinary picture, easily walked past */
export function ArtHidden() {
  return (
    <svg viewBox="0 0 300 240" role="img" aria-label="Study of Light on a Windowsill — a quiet, ordinary picture">
      <defs>
        <linearGradient id="hdn-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9d2c2" />
          <stop offset="1" stopColor="#c4bba6" />
        </linearGradient>
        <linearGradient id="hdn-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3ead2" stopOpacity="0.85" />
          <stop offset="1" stopColor="#f3ead2" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="300" height="240" fill="url(#hdn-bg)" />
      {/* window */}
      <rect x="86" y="26" width="128" height="118" fill="#b8c2bd" stroke="#8a8471" strokeWidth="3" />
      <line x1="150" y1="26" x2="150" y2="144" stroke="#8a8471" strokeWidth="3" />
      <line x1="86" y1="85" x2="214" y2="85" stroke="#8a8471" strokeWidth="3" />
      {/* light falling */}
      <polygon points="86,144 214,144 258,224 42,224" fill="url(#hdn-light)" />
      {/* sill */}
      <rect x="76" y="144" width="148" height="8" fill="#a89f87" />
      {/* a cup, nothing more */}
      <g>
        <ellipse cx="122" cy="144" rx="14" ry="2.6" fill="#7c7460" opacity="0.4" />
        <path d="M112 122 h20 v16 a10 10 0 0 1 -20 0 z" fill="#e8e0cc" stroke="#9a917b" strokeWidth="1" />
        <path d="M132 126 q 8 2 0 9" fill="none" stroke="#9a917b" strokeWidth="1.4" />
        <path d="M118 114 q 2 -5 0 -8 M126 114 q -2 -5 0 -8" stroke="#9a917b" strokeWidth="0.8" fill="none" opacity="0.7" />
      </g>
    </svg>
  )
}

