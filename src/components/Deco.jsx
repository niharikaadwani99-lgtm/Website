import { useState } from 'react'
import tapeImg from '../assets/tape.png'
import paperclipImg from '../assets/paperclip.png'
import paperclipRedImg from '../assets/paperclip-red.png'
import starImg from '../assets/star.png'
import ribbonBowImg from '../assets/ribbon-bow.png'
import tapeBowImg from '../assets/tape-bow.png'
import clothespinImg from '../assets/clothespin.png'
import starsPinkImg from '../assets/stars-pink.png'
import charmButterflyImg from '../assets/charm-butterfly.png'
import priceTagImg from '../assets/price-tag.png'
import pushpinPinkImg from '../assets/pushpin-pink.png'
import pushpinTealImg from '../assets/pushpin-teal.png'
import notePinkImg from '../assets/note-pink.png'
import noteSpeckledImg from '../assets/note-speckled.png'
import noteKraftImg from '../assets/note-kraft.png'
import noteRedImg from '../assets/note-red.png'
import envelopeRedImg from '../assets/envelope-red.png'
import paperStarburstImg from '../assets/paper-starburst.png'
import './Deco.css'

const PUSHPINS = { pink: pushpinPinkImg, teal: pushpinTealImg }
const NOTE_PAPERS = { pink: notePinkImg, speckled: noteSpeckledImg, kraft: noteKraftImg }

export function Envelope({ className = '', style }) {
  return (
    <img src={envelopeRedImg} alt="" className={`deco-envelope ${className}`} style={style} aria-hidden="true" />
  )
}

export function PaperStar({ className = '', style }) {
  return (
    <img src={paperStarburstImg} alt="" className={`deco-paperstar ${className}`} style={style} aria-hidden="true" />
  )
}

export function PaperScrap({ className = '', style }) {
  return (
    <img src={noteRedImg} alt="" className={`deco-scrap ${className}`} style={style} aria-hidden="true" />
  )
}

export function Pushpin({ variant = 'pink', className = '', style }) {
  return (
    <img
      src={PUSHPINS[variant] || pushpinPinkImg}
      alt=""
      className={`deco-pin ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

export function TapeBow({ className = '', style }) {
  return (
    <img src={tapeBowImg} alt="" className={`deco-tapebow ${className}`} style={style} aria-hidden="true" />
  )
}

export function Clothespin({ className = '', style }) {
  return (
    <img src={clothespinImg} alt="" className={`deco-clothespin ${className}`} style={style} aria-hidden="true" />
  )
}

export function StarConfetti({ className = '', style }) {
  return (
    <img src={starsPinkImg} alt="" className={`deco-confetti ${className}`} style={style} aria-hidden="true" />
  )
}

export function Charm({ className = '', style }) {
  return (
    <img src={charmButterflyImg} alt="" className={`deco-charm ${className}`} style={style} aria-hidden="true" />
  )
}

export function PriceTag({ className = '', style }) {
  return (
    <img src={priceTagImg} alt="" className={`deco-tag ${className}`} style={style} aria-hidden="true" />
  )
}

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

export function StarSticker({ className = '', style }) {
  return (
    <img
      src={starImg}
      alt=""
      className={`deco-star ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

const PAPERCLIPS = { gold: paperclipImg, red: paperclipRedImg }

export function Paperclip({ className = '', style, variant = 'gold' }) {
  return (
    <img
      src={PAPERCLIPS[variant] || paperclipImg}
      alt=""
      className={`deco-clip ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

export function LaceDoily({ className = '', style }) {
  const cx = 320, cy = 230, rx = 300, ry = 210
  const cream = '#f2f6ea'
  const scallops = 46
  const eyelets = 34
  return (
    <svg className={`deco-doily ${className}`} style={style} viewBox="0 0 640 460" aria-hidden="true">
      {Array.from({ length: scallops }).map((_, i) => {
        const a = (i / scallops) * Math.PI * 2
        return <circle key={`s${i}`} cx={cx + Math.cos(a) * rx} cy={cy + Math.sin(a) * ry} r="22" fill={cream} />
      })}
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={cream} />
      <ellipse cx={cx} cy={cy} rx={rx - 6} ry={ry - 6} fill="none" stroke="rgba(20,40,10,0.10)" strokeWidth="2" />
      {Array.from({ length: eyelets }).map((_, i) => {
        const a = (i / eyelets) * Math.PI * 2
        return (
          <circle
            key={`e${i}`}
            cx={cx + Math.cos(a) * (rx - 30)}
            cy={cy + Math.sin(a) * (ry - 30)}
            r="6"
            fill="none"
            stroke="rgba(20,40,10,0.16)"
            strokeWidth="2"
          />
        )
      })}
      <ellipse cx={cx} cy={cy} rx={rx - 60} ry={ry - 60} fill="none" stroke="rgba(20,40,10,0.09)" strokeWidth="1.5" strokeDasharray="2 8" />
    </svg>
  )
}

export function ScallopEnvelope({ className = '', style, color = '#e1b1c1' }) {
  const bumps = 9
  const bw = 230 / bumps
  const r = bw / 2
  return (
    <svg className={`deco-scallop-env ${className}`} style={style} viewBox="0 0 230 178" aria-hidden="true">
      <rect x="2" y="6" width="226" height="150" rx="6" fill={color} stroke="rgba(33,81,10,0.16)" strokeWidth="1.5" />
      {Array.from({ length: bumps }).map((_, i) => (
        <circle key={i} cx={r + i * bw} cy="156" r={r} fill={color} stroke="rgba(33,81,10,0.14)" strokeWidth="1.2" />
      ))}
      <polygon points="4,8 226,8 115,96" fill="rgba(255,255,255,0.28)" stroke="rgba(33,81,10,0.14)" strokeWidth="1.5" />
    </svg>
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

export function RibbonBow({ className = '', style }) {
  return (
    <img
      src={ribbonBowImg}
      alt=""
      className={`deco-bow ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
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

export function FolderTab({ label, color = '#b4c07a', style, className = '' }) {
  return (
    <span className={`deco-folder-tab ${className}`} style={{ background: color, ...style }}>
      {label}
    </span>
  )
}

let noteId = 0

export function HiddenNote({ teaser, children, className = '', style, rotate = -3, pin = 'pink', paper = 'pink' }) {
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
        <img
          src={NOTE_PAPERS[paper] || notePinkImg}
          alt=""
          className="hidden-note__paper"
          aria-hidden="true"
        />
        <img
          src={PUSHPINS[pin] || pushpinPinkImg}
          alt=""
          className="hidden-note__pin"
          aria-hidden="true"
        />
        <span className="hidden-note__text">{teaser}</span>
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
