/*
 * Furniture and greenery that dress the rooms — flat billboards
 * placed in the 3D space, standing on the floor.
 */

export function BenchSvg() {
  return (
    <svg viewBox="0 0 300 130" aria-hidden="true">
      <ellipse cx="150" cy="122" rx="128" ry="8" fill="rgba(10, 6, 2, 0.35)" />
      {/* leather cushion */}
      <rect x="26" y="44" width="248" height="18" rx="8" fill="#3d2c20" />
      <rect x="26" y="44" width="248" height="7" rx="3.5" fill="#57402e" />
      {/* seat slab */}
      <rect x="18" y="60" width="264" height="10" rx="3" fill="#4a3526" />
      <rect x="18" y="60" width="264" height="3" fill="#6b4e33" />
      {/* legs */}
      <rect x="42" y="70" width="12" height="48" fill="#33241a" />
      <rect x="246" y="70" width="12" height="48" fill="#33241a" />
      <rect x="38" y="114" width="20" height="6" rx="2" fill="#241a11" />
      <rect x="242" y="114" width="20" height="6" rx="2" fill="#241a11" />
      {/* brass feet caps */}
      <rect x="42" y="108" width="12" height="4" fill="#a98a52" />
      <rect x="246" y="108" width="12" height="4" fill="#a98a52" />
    </svg>
  )
}

export function PlanterSvg() {
  return (
    <svg viewBox="0 0 150 230" aria-hidden="true">
      <ellipse cx="75" cy="222" rx="52" ry="7" fill="rgba(10, 6, 2, 0.35)" />
      <g fill="none" stroke="#4f6b3f" strokeWidth="3" strokeLinecap="round">
        <path d="M75 162 C 70 118, 48 94, 30 82" />
        <path d="M75 162 C 80 112, 100 88, 118 76" />
        <path d="M75 162 C 75 108, 73 74, 75 46" />
        <path d="M75 162 C 68 132, 48 122, 32 120" />
        <path d="M75 162 C 84 130, 104 120, 120 118" />
      </g>
      <g fill="#5e7549">
        <ellipse cx="28" cy="76" rx="18" ry="9" transform="rotate(-38 28 76)" />
        <ellipse cx="120" cy="70" rx="19" ry="9" transform="rotate(34 120 70)" />
        <ellipse cx="75" cy="38" rx="10" ry="20" />
        <ellipse cx="27" cy="118" rx="15" ry="7" transform="rotate(-12 27 118)" />
        <ellipse cx="124" cy="116" rx="15" ry="7" transform="rotate(10 124 116)" />
      </g>
      <g fill="#6d8457">
        <ellipse cx="52" cy="92" rx="14" ry="7" transform="rotate(-30 52 92)" />
        <ellipse cx="98" cy="88" rx="14" ry="7" transform="rotate(26 98 88)" />
      </g>
      {/* the pot */}
      <path d="M40 162 h70 l-7 58 h-56 z" fill="#8a7358" />
      <path d="M40 162 h70 l-2 12 h-66 z" fill="#6f5a42" />
      <rect x="36" y="156" width="78" height="8" rx="3" fill="#a08a6c" />
    </svg>
  )
}

export function PedestalSvg() {
  return (
    <svg viewBox="0 0 120 210" aria-hidden="true">
      <ellipse cx="60" cy="204" rx="44" ry="6" fill="rgba(10, 6, 2, 0.3)" />
      {/* the small sculpture */}
      <path d="M60 22 c -12 10 -14 30 0 42 c 14 -12 12 -32 0 -42" fill="#cfc4a8" />
      <ellipse cx="60" cy="68" rx="16" ry="4" fill="#b3a68d" />
      {/* column */}
      <rect x="40" y="72" width="40" height="10" rx="2" fill="#c9bda2" />
      <rect x="46" y="82" width="28" height="104" fill="#bdb096" />
      <rect x="46" y="82" width="8" height="104" fill="#cfc4a8" />
      <rect x="38" y="186" width="44" height="14" rx="2" fill="#a89a7e" />
    </svg>
  )
}
