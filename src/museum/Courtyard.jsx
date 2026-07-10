/*
 * The Winter Garden of the Glyptotek — painted panorama.
 * Glass dome, terracotta arches, palms, and the marble fountain.
 * Swap for a real photograph by replacing the back-wall content
 * in EntranceHall.jsx with an <img>.
 */
export default function Courtyard() {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMax slice"
      className="courtyard"
      role="img"
      aria-label="The winter garden courtyard — a glass dome over palms, arches, and a marble fountain"
    >
      <defs>
        <linearGradient id="cy-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdf4dd" />
          <stop offset="0.55" stopColor="#f6e6c4" />
          <stop offset="1" stopColor="#eeddc0" />
        </linearGradient>
        <radialGradient id="cy-glow" cx="0.5" cy="0.18" r="0.75">
          <stop offset="0" stopColor="#fff8e2" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#fff3d2" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff3d2" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cy-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cf9d7c" />
          <stop offset="1" stopColor="#b97f60" />
        </linearGradient>
        <linearGradient id="cy-arch" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a5a42" />
          <stop offset="1" stopColor="#6e4634" />
        </linearGradient>
        <linearGradient id="cy-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9c8a8" />
          <stop offset="1" stopColor="#efe4c8" />
        </linearGradient>
        <linearGradient id="cy-marble" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2ecdc" />
          <stop offset="1" stopColor="#cfc3a6" />
        </linearGradient>
      </defs>

      {/* light through the dome */}
      <rect width="1600" height="1000" fill="url(#cy-sky)" />
      <rect width="1600" height="1000" fill="url(#cy-glow)" />

      {/* the glass dome */}
      <g>
        <path d="M170 330 A 630 630 0 0 1 1430 330" fill="none" stroke="#9a8a6a" strokeWidth="10" opacity="0.85" />
        <path d="M240 330 A 560 560 0 0 1 1360 330" fill="none" stroke="#9a8a6a" strokeWidth="5" opacity="0.6" />
        <path d="M330 330 A 470 470 0 0 1 1270 330" fill="none" stroke="#9a8a6a" strokeWidth="4" opacity="0.5" />
        <path d="M430 330 A 370 370 0 0 1 1170 330" fill="none" stroke="#9a8a6a" strokeWidth="3" opacity="0.4" />
        {/* radial ribs */}
        {[-72, -54, -36, -18, 0, 18, 36, 54, 72].map((deg) => {
          const rad = (deg * Math.PI) / 180
          return (
            <line
              key={deg}
              x1="800"
              y1="330"
              x2={800 + Math.sin(rad) * 630}
              y2={330 - Math.cos(rad) * 630}
              stroke="#9a8a6a"
              strokeWidth="4"
              opacity="0.45"
            />
          )
        })}
        <ellipse cx="800" cy="330" rx="46" ry="14" fill="#9a8a6a" opacity="0.5" />
      </g>

      {/* upper gallery band */}
      <rect x="0" y="330" width="1600" height="60" fill="#c4906e" />
      <g fill="#a06e50">
        {Array.from({ length: 26 }, (_, i) => (
          <rect key={i} x={20 + i * 62} y="342" width="8" height="36" rx="3" />
        ))}
      </g>
      <rect x="0" y="384" width="1600" height="10" fill="#8a5a42" />

      {/* terracotta wall with arches */}
      <rect x="0" y="394" width="1600" height="330" fill="url(#cy-wall)" />
      {[105, 385, 665, 945, 1225].map((x, i) => (
        <g key={x}>
          {/* pilasters */}
          <rect x={x - 45} y="404" width="26" height="310" fill="#a97354" />
          <rect x={x - 45} y="404" width="26" height="14" fill="#8a5a42" />
          {/* arch opening */}
          <path
            d={`M${x} 714 v-190 a 105 105 0 0 1 210 0 v190 z`}
            fill="url(#cy-arch)"
          />
          <path
            d={`M${x + 18} 714 v-176 a 87 87 0 0 1 174 0 v176`}
            fill="none"
            stroke="#d9ab88"
            strokeWidth="6"
            opacity="0.7"
          />
          {/* a pale statue rests in every other niche */}
          {i % 2 === 0 && (
            <g fill="#e4d7bd">
              <ellipse cx={x + 105} cy="700" rx="42" ry="10" opacity="0.7" />
              <rect x={x + 87} y="640" width="36" height="56" rx="10" />
              <circle cx={x + 105} cy="622" r="16" />
            </g>
          )}
        </g>
      ))}
      <rect x="1510" y="404" width="26" height="310" fill="#a97354" />

      {/* floor */}
      <rect x="0" y="714" width="1600" height="286" fill="url(#cy-floor)" />
      <g stroke="#b9a683" strokeWidth="2" opacity="0.55" fill="none">
        <path d="M0 760 H1600 M0 826 H1600 M0 912 H1600" />
        <path d="M240 714 L60 1000 M560 714 L470 1000 M800 714 L800 1000 M1040 714 L1130 1000 M1360 714 L1540 1000" />
      </g>

      {/* the fountain */}
      <g>
        <ellipse cx="800" cy="905" rx="215" ry="46" fill="#c9bb9c" />
        <ellipse cx="800" cy="895" rx="196" ry="40" fill="#9db3ab" />
        <ellipse cx="800" cy="890" rx="196" ry="38" fill="#b7cdc4" opacity="0.8" />
        <path d="M740 890 a60 14 0 0 0 120 0" fill="none" stroke="#e8f0ea" strokeWidth="3" opacity="0.7" />
        {/* pedestal and basin */}
        <rect x="770" y="800" width="60" height="88" fill="url(#cy-marble)" />
        <ellipse cx="800" cy="800" rx="86" ry="18" fill="url(#cy-marble)" />
        <ellipse cx="800" cy="794" rx="70" ry="13" fill="#aebfb6" />
        <rect x="786" y="726" width="28" height="66" fill="url(#cy-marble)" />
        {/* the little bronze figure */}
        <g fill="#6e6248">
          <circle cx="800" cy="676" r="13" />
          <path d="M800 689 c-14 4 -18 24 -14 40 h28 c4 -16 0 -36 -14 -40" />
          <path d="M788 700 l-22 -16 M812 700 l24 -12" stroke="#6e6248" strokeWidth="6" strokeLinecap="round" fill="none" />
        </g>
        {/* water threads */}
        <g stroke="#dcebe2" strokeWidth="2.4" opacity="0.85" fill="none">
          <path d="M796 740 C 780 760, 764 780, 756 792" />
          <path d="M804 740 C 820 760, 838 780, 846 792" />
          <path d="M800 742 v48" />
        </g>
      </g>

      {/* palms — the winter garden's crowns */}
      {[
        [180, 980, 1.25, 0],
        [420, 950, 1.0, 1],
        [1180, 950, 1.05, 1],
        [1430, 985, 1.3, 0],
      ].map(([px, py, s, alt]) => (
        <g key={px} transform={`translate(${px} ${py}) scale(${s})`}>
          {/* trunk */}
          <path
            d={alt ? 'M0 0 C 8 -80, -6 -160, 6 -238' : 'M0 0 C -10 -90, 8 -170, -4 -250'}
            fill="none"
            stroke="#7a5b3d"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path
            d={alt ? 'M0 0 C 8 -80, -6 -160, 6 -238' : 'M0 0 C -10 -90, 8 -170, -4 -250'}
            fill="none"
            stroke="#5f4530"
            strokeWidth="22"
            strokeLinecap="round"
            strokeDasharray="4 18"
            opacity="0.6"
          />
          {/* fronds */}
          <g transform={`translate(${alt ? 6 : -4} ${alt ? -238 : -250})`} fill="none" strokeLinecap="round">
            {[-80, -52, -26, 0, 26, 52, 80].map((deg) => (
              <path
                key={deg}
                d="M0 0 Q 60 -46 150 -34"
                stroke="#4f6b3f"
                strokeWidth="12"
                transform={`rotate(${deg})`}
              />
            ))}
            {[-66, -12, 40, 92].map((deg) => (
              <path
                key={deg}
                d="M0 0 Q 50 -40 128 -30"
                stroke="#647f4c"
                strokeWidth="9"
                transform={`rotate(${deg})`}
              />
            ))}
          </g>
        </g>
      ))}

      {/* low greenery beds */}
      {[
        [80, 960], [300, 940], [620, 930], [980, 930], [1300, 940], [1520, 960],
      ].map(([gx, gy]) => (
        <g key={gx} transform={`translate(${gx} ${gy})`}>
          <ellipse cx="0" cy="12" rx="86" ry="18" fill="#57683f" />
          <ellipse cx="-34" cy="-6" rx="40" ry="22" fill="#66794a" />
          <ellipse cx="30" cy="-10" rx="46" ry="26" fill="#4f6b3f" />
          <ellipse cx="0" cy="-24" rx="30" ry="18" fill="#748757" />
        </g>
      ))}

      {/* haze of the garden air */}
      <rect x="0" y="620" width="1600" height="380" fill="#fff3d2" opacity="0.12" />
    </svg>
  )
}
