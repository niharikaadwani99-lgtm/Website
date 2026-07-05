import './Deco.css'

export function Tape({ className = '', style }) {
  return <span className={`deco-tape ${className}`} style={style} aria-hidden="true" />
}

export function StarSticker({ className = '', style, char = '★' }) {
  return (
    <span className={`deco-star ${className}`} style={style} aria-hidden="true">
      {char}
    </span>
  )
}

export function Paperclip({ className = '', style }) {
  return (
    <svg
      className={`deco-clip ${className}`}
      style={style}
      viewBox="0 0 40 90"
      aria-hidden="true"
    >
      <path
        d="M20 8 C31 8 36 16 36 26 L36 62 C36 74 28 82 18 82 C8 82 3 74 3 65 L3 24 C3 17 8 12 14 12 C20 12 24 17 24 24 L24 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Stamp({ className = '', style }) {
  return (
    <span className={`deco-stamp ${className}`} style={style} aria-hidden="true">
      <span className="deco-stamp__inner">POST</span>
    </span>
  )
}
