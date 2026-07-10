import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Room3D.css'

/*
 * A walkable museum room built from CSS 3D planes: back wall, two side
 * walls, floor, and ceiling. Moving the pointer looks around the room.
 */
export default function Room3D({ back, left, right, overlay, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.setProperty('--look-y', `${(-x * 7).toFixed(2)}deg`)
      el.style.setProperty('--look-x', `${(y * 3).toFixed(2)}deg`)
    }
    const onLeave = () => {
      el.style.setProperty('--look-y', '0deg')
      el.style.setProperty('--look-x', '0deg')
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div className={`room3d ${className}`} ref={ref}>
      <div className="room3d__space">
        <div className="room3d__plane room3d__wall-back">{back}</div>
        <div className="room3d__plane room3d__wall-left">{left}</div>
        <div className="room3d__plane room3d__wall-right">{right}</div>
        <div className="room3d__plane room3d__floor" />
        <div className="room3d__plane room3d__ceiling" />
      </div>
      <div className="room3d__vignette" aria-hidden="true" />
      {overlay}
    </div>
  )
}

/*
 * A framed work hanging on one of the walls. Renders as a <Link> when
 * `to` is given (a portal), otherwise as a <button> (opens its label).
 */
export function WallFrame({ to, onClick, style, className = '', art, title, sub, ariaLabel }) {
  const inner = (
    <>
      <span className="wall-frame__frame">
        <span className="wall-frame__mat">{art}</span>
      </span>
      {(title || sub) && (
        <span className="wall-frame__plate">
          {title && <span className="wall-frame__title">{title}</span>}
          {sub && <span className="wall-frame__sub smallcaps">{sub}</span>}
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`wall-frame ${className}`} style={style} aria-label={ariaLabel}>
        {inner}
      </Link>
    )
  }
  return (
    <button type="button" className={`wall-frame ${className}`} style={style} onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  )
}
