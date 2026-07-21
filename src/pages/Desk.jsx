import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { FoldedCorner, HandArrow, HiddenNote, Paperclip, RibbonBow, RingHoles, StarSticker, Stamp, Tape } from '../components/Deco.jsx'
import { CassetteButton, CassettePlayer } from '../components/Cassette.jsx'
import photoboothStrip from '../assets/photobooth-strip.jpg'
import heartCharm1 from '../assets/heart-charm-1.png'
import heartCharm2 from '../assets/heart-charm-2.png'
import './Desk.css'

const THINGS_I_LOVE = [
  'hand-embroidered trims found in flea markets',
  'the smell of a fresh bolt of raw silk',
  'block-printed cottons from small workshops',
  'a good sample that fits right the first time',
  'crossword pages in Sunday newspapers',
  'liner notes on vinyl I can’t actually play',
]

function Desk() {
  const [cassetteOpen, setCassetteOpen] = useState(false)
  const [loveOpen, setLoveOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="page desk-page">
      <Nav />

      <header className="desk-intro wrap">
        <p className="label">independent fashion designer &amp; consultant</p>
        <h1 className="desk-intro__title hand">Hi, I&rsquo;m Niharika.</h1>
        <p className="desk-intro__sub">
          This is my desk, more or less as it actually looks. Everything on it opens into
          something &mdash; click around.
        </p>
      </header>

      <div className="desk-surface">
        <StarSticker style={{ bottom: '3%', right: '6%', width: '46px' }} />
        <StarSticker style={{ bottom: '4.5%', right: '13%', width: '28px' }} />

        <div className="desk-bands" aria-hidden="true">
          <span className="desk-bands__line" />
          <span className="desk-bands__line" />
          <span className="desk-bands__charm desk-bands__charm--key">
            <svg viewBox="0 0 40 20">
              <circle cx="8" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
              <line x1="14" y1="10" x2="35" y2="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <line x1="26" y1="10" x2="26" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <line x1="32" y1="10" x2="32" y2="17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <span className="desk-bands__charm desk-bands__charm--heart">
            <img src={heartCharm1} alt="" />
          </span>
          <span className="desk-bands__charm desk-bands__charm--heart2">
            <img src={heartCharm2} alt="" />
          </span>
          <span className="desk-bands__slider" />
        </div>

        <Link to="/about" className="desk-item desk-item--sketchbook" aria-label="Open About Me">
          <RibbonBow className="sketchbook-bow" />
          <span className="sketchbook-strip" aria-hidden="true">
            <img src={photoboothStrip} alt="" />
          </span>
          <RingHoles count={5} className="desk-item__rings" />
          <span className="desk-item__label hand">About Me</span>
          <span className="label desk-item__tag">sketchbook, well-worn</span>
        </Link>

        <Link to="/services" className="desk-item desk-item--folder" aria-label="Open Services">
          <span className="desk-item__tab label">services</span>
          <span className="desk-item__label hand">what I can do for you</span>
        </Link>

        <Link to="/portfolio" className="desk-item desk-item--postcard" aria-label="Open Selected Work">
          <Stamp style={{ top: 8, right: 8 }} />
          <span className="desk-item__postmark label">selected work</span>
          <span className="desk-item__postlines" aria-hidden="true"><span /><span /><span /></span>
          <span className="desk-item__label hand">wish you were here &mdash; see the work →</span>
        </Link>

        <CassetteButton className="desk-item--cassette" onClick={() => setCassetteOpen(true)} />

        <button type="button" className="desk-item desk-item--crossword" onClick={() => setLoveOpen(true)} aria-haspopup="dialog">
          <FoldedCorner style={{ top: 0, right: 0 }} />
          <span className="desk-item__grid" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className={[2, 5, 9, 13, 16, 20].includes(i) ? 'is-filled' : ''} />
            ))}
          </span>
          <span className="label desk-item__tag">clipping, slightly yellowed</span>
          <span className="desk-item__label hand">things I love</span>
        </button>

        <Link to="/services#how-i-help-brands" className="desk-item desk-item--blueprint" aria-label="Open How I Help Brands">
          <span className="desk-item__scroll-end" aria-hidden="true" />
          <span className="desk-item__label hand">how I help brands</span>
          <span className="label desk-item__tag">pinned to the wall</span>
        </Link>

        <Link to="/work-with-me#book-a-call" className="desk-item desk-item--planner" aria-label="Open Book a Call">
          <RingHoles count={6} className="desk-item__rings desk-item__rings--top" />
          <span className="desk-item__label hand">book a call</span>
          <span className="desk-item__mini-cal" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => <span key={i} />)}
          </span>
        </Link>

        <Link to="/work-with-me" className="desk-item desk-item--passport" aria-label="Open What it's like to work with me">
          <span className="desk-item__emblem" aria-hidden="true">✦</span>
          <span className="label desk-item__tag">passport</span>
          <span className="desk-item__label hand">what it&rsquo;s like to work with me</span>
        </Link>

        <Tape style={{ top: '60%', left: '56%', transform: 'rotate(-8deg)' }} />
        <Paperclip style={{ top: '66%', left: '60%', transform: 'rotate(18deg)' }} />

        <HiddenNote
          teaser="ask me about my worst sample"
          className="desk-note desk-note--1"
          rotate={-6}
        >
          <span className="hand">the muslin disaster of 2019</span>
          A first sample that arrived with the sleeves sewn shut and the lining inside out.
          The factory apologised with a box of mangoes. I still have the sketch that started it
          taped inside a notebook somewhere &mdash; a good reminder that a tech pack can never
          over-explain.
        </HiddenNote>

        <HiddenNote
          teaser="the first collection I ever designed"
          className="desk-note desk-note--2"
          rotate={4}
        >
          <span className="hand">six looks, one very small budget</span>
          Made from deadstock fabric bought by the kilo and finished on a borrowed machine at
          school. None of it was technically correct. All of it taught me more than the
          textbook did.
        </HiddenNote>

        <HiddenNote
          teaser="a sketch that never became a garment"
          className="desk-note desk-note--3"
          rotate={-3}
        >
          <span className="hand">the coat that stayed a drawing</span>
          Some ideas are better left as a page in a sketchbook. This one had eleven pattern
          pieces and a budget for three. One day, maybe.
        </HiddenNote>

        <HandArrow className="desk-arrow desk-arrow--1" d="M4 10 C 30 0, 60 30, 88 58" />
        <HandArrow className="desk-arrow desk-arrow--2" flip d="M4 50 C 30 90, 65 20, 88 58" />

        <button
          type="button"
          className="desk-drawer"
          onClick={() => setDrawerOpen(true)}
          aria-label="A drawer. It looks decorative. It is not."
        >
          <span className="desk-drawer__handle" aria-hidden="true" />
        </button>
      </div>

      {cassetteOpen && <CassettePlayer onClose={() => setCassetteOpen(false)} />}

      {loveOpen && (
        <div className="cassette-veil" role="dialog" aria-modal="true" onClick={() => setLoveOpen(false)}>
          <div className="clipping-panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="cassette-panel__close" onClick={() => setLoveOpen(false)} aria-label="Close">
              ×
            </button>
            <p className="label">things I love, an incomplete list</p>
            <h3 className="hand clipping-panel__title">Currently obsessed with...</h3>
            <ul className="clipping-panel__list">
              {THINGS_I_LOVE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="clipping-panel__note hand">
              a full crossword hides here eventually &mdash; six answers, one secret page. coming soon.
            </p>
          </div>
        </div>
      )}

      {drawerOpen && (
        <div className="cassette-veil" role="dialog" aria-modal="true" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="cassette-panel__close" onClick={() => setDrawerOpen(false)} aria-label="Close">
              ×
            </button>
            <p className="label">you found the drawer</p>
            <h3 className="hand drawer-panel__title">Everything that doesn&rsquo;t have a home yet</h3>
            <div className="drawer-panel__grid">
              <div className="drawer-panel__card">
                <span className="hand">unfinished sketch</span>
                <p>A dress with no back yet. Been stuck on the closure for a month.</p>
              </div>
              <div className="drawer-panel__card">
                <span className="hand">a thought</span>
                <p>Good manufacturing knowledge is invisible when it works and expensive when it&rsquo;s missing.</p>
              </div>
              <div className="drawer-panel__card">
                <span className="hand">a quote, pinned above the desk</span>
                <p>&ldquo;Fashion fades, only style remains the same.&rdquo; &mdash; Coco Chanel</p>
              </div>
              <div className="drawer-panel__card">
                <span className="hand">inspiration, unsorted</span>
                <p>A photo of hand-loomed cotton drying on a rooftop. Saved it three years ago. Still looking at it.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Desk
