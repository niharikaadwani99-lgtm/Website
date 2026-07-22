import { useState } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { Clothespin, Paperclip, PriceTag, Pushpin, Tape } from '../components/Deco.jsx'

// real-object pins rotated across the board so it reads like a physical wall
function BoardPin({ i }) {
  switch (i % 5) {
    case 0:
      return <Tape style={{ top: -10, left: '50%', transform: 'translateX(-50%) rotate(-2deg)' }} />
    case 1:
      return <Pushpin variant="pink" style={{ top: -18, left: '50%', transform: 'translateX(-50%)' }} />
    case 2:
      return <Clothespin style={{ top: -22, left: '46%', transform: 'translateX(-50%) rotate(-6deg)' }} />
    case 3:
      return <Pushpin variant="teal" style={{ top: -18, left: '50%', transform: 'translateX(-50%)' }} />
    default:
      return <Paperclip style={{ top: -20, left: '58%', width: 44, transform: 'rotate(12deg)' }} />
  }
}
import './Portfolio.css'

const ITEMS = [
  { type: 'photo', tone: 'a', caption: 'Fitting session, Delhi — third round of corrections on the bodice.', r: -3 },
  { type: 'swatch', chips: ['#88a82a', '#a8ad4a', '#21510a'], caption: 'Palette for a monsoon capsule — sage, brass, olive.', r: 2 },
  { type: 'sketch', caption: 'Original sketch, before it lost the sleeves.', r: -1.5 },
  { type: 'photo', tone: 'b', caption: 'Factory floor, Jaipur — hand block printing in progress.', r: 3 },
  { type: 'note', caption: 'The client wanted "effortless." It took four fittings to look effortless.', r: -2 },
  { type: 'photo', tone: 'c', caption: 'Production run, final QC before shipping.', r: 1.5 },
  { type: 'swatch', chips: ['#894d5b', '#e1b1c1', '#241a1d'], caption: 'A burgundy story that almost got cut from the line.', r: -3 },
  { type: 'photo', tone: 'd', caption: 'Reference wall — always half fashion, half unrelated.', r: 2.5 },
  { type: 'sketch', caption: 'Flat sketch for tech pack reference, annotated by hand.', r: -1 },
  { type: 'note', caption: 'A factory detail worth remembering: ask about minimums before you fall in love with a fabric.', r: 3 },
  { type: 'photo', tone: 'e', caption: 'Sampling table, mid-review.', r: -2.5 },
  { type: 'swatch', chips: ['#c4e9f8', '#88a82a', '#f2e9d6'], caption: 'Cool tones for a resort line that never launched. Yet.', r: 1 },
]

function Portfolio() {
  const [open, setOpen] = useState(null)

  return (
    <div className="page portfolio-page">
      <Nav />

      <header className="portfolio-hero wrap">
        <p className="label">the wall by the cutting table</p>
        <h1 className="hand portfolio-hero__title">selected work, pinned up</h1>
        <p className="portfolio-hero__sub">
          Not a grid &mdash; this is closer to how it actually looks in the studio. Click
          anything for a closer look.
        </p>
      </header>

      <div className="wrap board-wall">
        {ITEMS.map((item, i) => (
          <button
            key={i}
            type="button"
            className={`board-item board-item--${item.type}`}
            style={{ '--r': `${item.r}deg` }}
            onClick={() => setOpen(item)}
          >
            <BoardPin i={i} />
            {item.type === 'swatch' && <PriceTag style={{ top: 34, right: -18, transform: 'rotate(7deg)' }} />}
            {item.type === 'photo' && <span className={`board-item__photo photo-grain tone-${item.tone}`} />}
            {item.type === 'swatch' && (
              <span className="board-item__chips">
                {item.chips.map((c) => (
                  <span key={c} style={{ background: c }} />
                ))}
              </span>
            )}
            {item.type === 'sketch' && (
              <svg viewBox="0 0 120 100" className="board-item__sketch">
                <path
                  d="M60 10 C 30 20, 20 60, 35 90 M60 10 C 90 15, 100 45, 85 65 C 78 74, 65 72, 62 62"
                  fill="none"
                  stroke="var(--chocolate)"
                  strokeWidth="2"
                />
              </svg>
            )}
            {item.type === 'note' && <p className="board-item__note hand">{item.caption}</p>}
            {item.type !== 'note' && <p className="board-item__caption">{item.caption}</p>}
          </button>
        ))}
      </div>

      {open && (
        <div className="board-veil" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <div className="board-lightbox" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="board-lightbox__close" onClick={() => setOpen(null)} aria-label="Close">
              ×
            </button>
            {open.type === 'photo' && <span className={`board-lightbox__photo photo-grain tone-${open.tone}`} />}
            {open.type === 'swatch' && (
              <span className="board-lightbox__chips">
                {open.chips.map((c) => (
                  <span key={c} style={{ background: c }} />
                ))}
              </span>
            )}
            {open.type === 'sketch' && (
              <svg viewBox="0 0 120 100" className="board-lightbox__sketch">
                <path
                  d="M60 10 C 30 20, 20 60, 35 90 M60 10 C 90 15, 100 45, 85 65 C 78 74, 65 72, 62 62"
                  fill="none"
                  stroke="var(--chocolate)"
                  strokeWidth="2"
                />
              </svg>
            )}
            <p className="board-lightbox__caption hand">{open.caption}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Portfolio
