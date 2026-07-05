import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Paperclip, Stamp, StarSticker, Tape } from '../components/Deco.jsx'
import './Planner.css'

const FIELD_DEFAULTS = {
  belongsTo: '',
  theme: '',
  keywords: '',
  note: '',
}

function useStoredFields() {
  const [fields, setFields] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('gabbtopia-planner') || '{}')
      return { ...FIELD_DEFAULTS, ...saved }
    } catch {
      return FIELD_DEFAULTS
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('gabbtopia-planner', JSON.stringify(fields))
    } catch {
      // storage can be unavailable (private browsing, sandboxed embeds, etc.) — fields just won't persist
    }
  }, [fields])

  const update = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }))

  return [fields, update]
}

function KeyIcon(props) {
  return (
    <svg viewBox="0 0 40 20" {...props}>
      <circle cx="8" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="14" y1="10" x2="35" y2="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="26" y1="10" x2="26" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="10" x2="32" y2="17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function HeartIcon(props) {
  return (
    <svg viewBox="0 0 40 36" {...props}>
      <path
        d="M20 33 C4 22 2 11 10 6 C15 3 19 6 20 11 C21 6 25 3 30 6 C38 11 36 22 20 33Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Charm({ to, label, className, children }) {
  return (
    <a
      href={to}
      className={`charm ${className || ''}`}
      aria-label={label}
      title={label}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </a>
  )
}

function Planner() {
  const [open, setOpen] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const [fields, update] = useStoredFields()
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (open) closeBtnRef.current?.focus()
  }, [open])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => e.key === 'Escape' && setLightbox(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <div className="planner-page">
      <div className="planner-page__topbar wrap">
        <Link to="/" className="planner-page__back">
          ← back to site
        </Link>
        <span className="eyebrow">2026 digital planner</span>
      </div>

      <div className="book-stage">
        <div className={`book ${open ? 'book--open' : ''}`}>
          {/* ---------------- COVER ---------------- */}
          <div
            className="book__cover"
            onClick={() => setOpen(true)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setOpen(true))}
            role="button"
            aria-label="Open the planner"
            tabIndex={open ? -1 : 0}
          >
            <Paperclip className="book__paperclip" style={{ top: -14, right: '18%' }} />

            <div className="cover-card">
              <span className="cover-card__title">Digital Planner</span>
              <span className="cover-card__year">2026</span>
            </div>
            <div className="cover-strip photo-grain" aria-hidden="true" />

            <div className="cover-bands" aria-hidden="true">
              <span className="cover-bands__line" />
              <span className="cover-bands__line" />
            </div>

            <div className="cover-charms">
              <Charm to="/#id" label="Go to about / the paperwork" className="charm--key">
                <KeyIcon />
              </Charm>
              <Charm to="/#work" label="Go to selected work" className="charm--heart">
                <HeartIcon />
              </Charm>
              <Charm to="/#contact" label="Say hello" className="charm--heart charm--heart2">
                <HeartIcon />
              </Charm>
            </div>

            <StarSticker
              className="cover-star cover-star--big"
              char="★"
              style={{ bottom: '9%', right: '7%', fontSize: '2.4rem' }}
            />
            <a
              href="/#wrapped"
              className="cover-star cover-star--link"
              aria-label="Go to 2025 wrapped"
              title="Go to 2025 wrapped"
              style={{ bottom: '6%', right: '15%', fontSize: '1.3rem' }}
              onClick={(e) => e.stopPropagation()}
            >
              ★
            </a>

            <span className="book__hint">tap anywhere to open →</span>
          </div>

          {/* ---------------- SPREAD ---------------- */}
          <div className="book__spread">
            <button
              type="button"
              className="book__close"
              onClick={() => setOpen(false)}
              ref={closeBtnRef}
            >
              ↺ close cover
            </button>

            <div className="page page--left">
              <div className="ticket-stub">
                <Tape style={{ top: -8, left: 14, transform: 'rotate(-6deg)' }} />
                <span>NO. 118</span>
                <span>ADMIT ONE CREATIVE</span>
              </div>

              <button
                type="button"
                className="photostrip"
                onClick={() => setLightbox(true)}
                aria-label="View photo strip"
              >
                <Tape style={{ top: -10, left: '50%', transform: 'translateX(-50%) rotate(-3deg)' }} />
                <span className="photostrip__frame photostrip__frame--1 photo-grain" />
                <span className="photostrip__frame photostrip__frame--2 photo-grain" />
                <span className="photostrip__frame photostrip__frame--3 photo-grain" />
                <span className="photostrip__frame photostrip__frame--4 photo-grain" />
                <span className="photostrip__caption">click to enlarge</span>
              </button>

              <a href="mailto:hello@gabbtopia.com" className="postcard-mini">
                <Stamp style={{ top: 8, right: 8, transform: 'rotate(4deg)' }} />
                <span className="postcard-mini__title">POSTCARD</span>
                <span className="postcard-mini__lines">
                  <span />
                  <span />
                </span>
                <span className="postcard-mini__label">say hello →</span>
              </a>

              <StarSticker style={{ bottom: '4%', left: '6%', fontSize: '1.3rem' }} />
            </div>

            <div className="page page--right">
              <div className="clipboard" aria-hidden="true">
                <span className="clipboard__clip" />
                <span className="clipboard__photo photo-grain" />
              </div>

              <div className="belongs-form">
                <label>
                  <span>This planner belongs to</span>
                  <input
                    type="text"
                    value={fields.belongsTo}
                    onChange={update('belongsTo')}
                    placeholder="your name"
                  />
                </label>
                <label>
                  <span>My theme for this year</span>
                  <input
                    type="text"
                    value={fields.theme}
                    onChange={update('theme')}
                    placeholder="e.g. say yes more"
                  />
                </label>
                <label>
                  <span>2026 moodboard keywords</span>
                  <input
                    type="text"
                    value={fields.keywords}
                    onChange={update('keywords')}
                    placeholder="kraft paper, stars, film grain…"
                  />
                </label>
                <label>
                  <span>A note to myself</span>
                  <textarea
                    rows="3"
                    value={fields.note}
                    onChange={update('note')}
                    placeholder="write something you'd want to read in december…"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo strip enlarged"
          onClick={() => setLightbox(false)}
        >
          <div className="lightbox__card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lightbox__close" onClick={() => setLightbox(false)} aria-label="Close">
              ×
            </button>
            <span className="lightbox__frame lightbox__frame--1 photo-grain" />
            <span className="lightbox__frame lightbox__frame--2 photo-grain" />
            <span className="lightbox__frame lightbox__frame--3 photo-grain" />
            <span className="lightbox__frame lightbox__frame--4 photo-grain" />
            <p className="lightbox__caption">gabbtopia, on film · 2026</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Planner
