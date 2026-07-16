import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { Paperclip, RingHoles, Tape } from '../components/Deco.jsx'
import './BookCall.css'

function BookCall() {
  return (
    <div className="page bookcall-page">
      <Nav />

      <header className="bookcall-hero wrap">
        <p className="label">a page from the planner</p>
        <h1 className="hand bookcall-hero__title">book a call</h1>
        <p className="bookcall-hero__sub">Let&rsquo;s see if we&rsquo;re a fit. Usually thirty minutes, no pitch deck required.</p>
      </header>

      <div className="wrap planner-spread">
        <RingHoles count={9} className="planner-spread__rings" />

        <div className="planner-page-inner">
          <span className="hand sticky sticky--1" style={{ transform: 'rotate(-4deg)' }}>
            let&rsquo;s see if we&rsquo;re a fit.
          </span>
          <span className="hand sticky sticky--2" style={{ transform: 'rotate(3deg)' }}>
            usually 30 minutes.
          </span>
          <span className="hand sticky sticky--3" style={{ transform: 'rotate(-2deg)' }}>
            bring your ideas, half-formed is fine.
          </span>

          <div className="embed-clip">
            <Tape style={{ top: -12, left: '20%' }} />
            <Tape style={{ top: -12, right: '20%' }} />
            <Paperclip style={{ top: -18, right: 12, transform: 'rotate(8deg)' }} />

            {/*
              Drop a real Calendly (or similar) embed here, e.g.:
              <div className="calendly-inline-widget" data-url="https://calendly.com/your-handle/intro-call" style={{ minWidth: 280, height: 620 }} />
              and load the Calendly widget script in index.html.
            */}
            <div className="embed-placeholder">
              <svg viewBox="0 0 100 100" className="embed-placeholder__icon">
                <rect x="15" y="20" width="70" height="65" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
                <line x1="15" y1="36" x2="85" y2="36" stroke="currentColor" strokeWidth="3" />
                <line x1="30" y1="12" x2="30" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="70" y1="12" x2="70" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <p className="label">scheduling embed goes here</p>
              <p className="embed-placeholder__body">
                This is where a live booking calendar (Calendly or similar) gets clipped in. In the
                meantime &mdash; email works just as well.
              </p>
              <a className="btn-scribble btn-scribble--solid" href="mailto:hello@niharikaadwani.com">
                email me instead →
              </a>
            </div>
          </div>

          <div className="planner-notes">
            <p className="label">what to expect</p>
            <ul>
              <li>a short chat about where your collection or brand currently stands</li>
              <li>honest thoughts on what it would take to get it made well</li>
              <li>no obligation, no pitch &mdash; just a conversation between two people who like clothes</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BookCall
