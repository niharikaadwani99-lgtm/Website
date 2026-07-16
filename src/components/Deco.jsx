import { useState } from 'react'
import tapeImg from '../assets/tape.png'
import paperclipImg from '../assets/paperclip.png'
import './Deco.css'

export function Tape({ className = '', style }) {
  return (
    <img
      src={tapeImg}
      alt=""
      className={`deco-tape ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
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
    <img
      src={paperclipImg}
      alt=""
      className={`deco-clip ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

export function Stamp({ className = '', style, children = 'POST' }) {
  return (
    <span className={`deco-stamp ${className}`} style={style} aria-hidden="true">
      <span className="deco-stamp__inner">{children}</span>
    </span>
  )
}

export function RingHoles({ count = 6, className = '' }) {
  return (
    <div className={`deco-rings ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  )
}

export function FoldedCorner({ className = '', style }) {
  return <span className={`deco-fold ${className}`} style={style} aria-hidden="true" />
}

export function HandArrow({ className = '', style, d = 'M4 6 C 40 2, 70 40, 100 70', flip = false }) {
  return (
    <svg
      className={`deco-arrow ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : undefined, ...style }}
      viewBox="0 0 110 80"
      aria-hidden="true"
    >
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M88 58 L100 70 L84 74"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FolderTab({ label, color = '#c9b98a', style, className = '' }) {
  return (
    <span className={`deco-folder-tab ${className}`} style={{ background: color, ...style }}>
      {label}
    </span>
  )
}

let noteId = 0

export function HiddenNote({ teaser, children, className = '', style, rotate = -3 }) {
  const [open, setOpen] = useState(false)
  const [id] = useState(() => `note-${noteId++}`)

  return (
    <>
      <button
        type="button"
        className={`hidden-note ${className}`}
        style={{ '--r': `${rotate}deg`, ...style }}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-controls={id}
      >
        <span className="hidden-note__pin" aria-hidden="true" />
        {teaser}
      </button>

      {open && (
        <div className="hidden-note-veil" role="dialog" aria-modal="true" id={id} onClick={() => setOpen(false)}>
          <div className="hidden-note-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="hidden-note-card__close" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
            <div className="hidden-note-card__body">{children}</div>
          </div>
        </div>
      )}
    </>
  )
}
