import { useEffect, useRef } from 'react'

/*
 * The label card that opens when a work on the wall is clicked.
 * `exhibit` needs { title, label?, text?, list? }; `art` is the framed image.
 */
export default function ExhibitModal({ exhibit, number, art, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [onClose])

  return (
    <div className="exhibit-modal" onClick={onClose} role="presentation">
      <article
        className="exhibit-modal__card"
        role="dialog"
        aria-modal="true"
        aria-label={exhibit.title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="exhibit-modal__art" aria-hidden="true">
          <span>{art}</span>
        </div>
        <div>
          {number && <p className="smallcaps exhibit-modal__number">{number}</p>}
          <h2 className="exhibit-modal__title">{exhibit.title}</h2>
          {exhibit.label && <p className="exhibit-modal__label">{exhibit.label}</p>}
          {(exhibit.text ?? exhibit.caption) && (
            <p className="exhibit-modal__text">{exhibit.text ?? exhibit.caption}</p>
          )}
          {exhibit.list && (
            <ul className="exhibit-modal__list">
              {exhibit.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <button type="button" ref={closeRef} className="exhibit-modal__close" onClick={onClose}>
          Close ✕
        </button>
      </article>
    </div>
  )
}
