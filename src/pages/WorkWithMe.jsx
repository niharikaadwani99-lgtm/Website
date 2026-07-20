import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { Paperclip, RingHoles, Tape } from '../components/Deco.jsx'
import './WorkWithMe.css'
import './BookCall.css'

const ENTRIES = [
  {
    stamp: 'ELIGIBLE',
    title: 'Who I work best with',
    body: 'Emerging brands who already have a point of view and need help making it manufacturable — not brands looking for someone to invent one from nothing.',
  },
  {
    stamp: 'DURATION',
    title: 'Typical project timelines',
    body: 'A single collection usually runs 8–14 weeks from concept to production handover. Ongoing consulting relationships run for as long as they’re useful to both of us.',
  },
  {
    stamp: 'REQUIRED',
    title: 'What I need from clients',
    body: 'Honesty about budget and timeline, a willingness to be told when something won’t work, and someone on your side who can make a decision when one is needed.',
  },
  {
    stamp: 'ISSUED',
    title: 'What clients receive',
    body: 'Tech packs a factory can actually use, sample reviews that catch problems before production, and a collaborator who has sat on both sides of the sourcing table.',
  },
  {
    stamp: 'ADVISORY',
    title: 'Why manufacturing knowledge matters',
    body: 'A beautiful sketch means nothing if it can’t be produced at the quality and price your customer expects. Most expensive mistakes happen in the gap between design and factory — that gap is where I work.',
  },
]

function WorkWithMe() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash !== '#book-a-call') return
    const el = document.getElementById('book-a-call')
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }, [location.hash])

  return (
    <div className="page passport-page">
      <Nav />

      <header className="passport-hero wrap">
        <p className="label">for international founders, specifically</p>
        <h1 className="hand passport-hero__title">what it&rsquo;s like to work with me</h1>
        <p className="passport-hero__sub">
          Presented, appropriately, as a passport &mdash; since most of my clients and I are
          usually a few time zones apart.
        </p>
      </header>

      <div className="wrap passport-cover">
        <span className="passport-cover__emblem">✦</span>
        <span className="label passport-cover__type">consulting passport</span>
        <h2 className="hand passport-cover__name">Niharika Adwani</h2>
        <span className="label passport-cover__sub">fashion design &amp; production consulting</span>
      </div>

      <div className="wrap passport-pages">
        {ENTRIES.map((e) => (
          <article className="passport-entry" key={e.title}>
            <span className="passport-entry__stamp">{e.stamp}</span>
            <h3 className="hand passport-entry__title">{e.title}</h3>
            <p>{e.body}</p>
          </article>
        ))}
      </div>

      <section id="book-a-call" className="bookcall-section">
        <div className="bookcall-hero wrap">
          <p className="label">a page from the planner</p>
          <h2 className="hand bookcall-hero__title">let&rsquo;s talk</h2>
          <p className="bookcall-hero__sub">
            Let&rsquo;s see if we&rsquo;re a fit. Usually thirty minutes, no pitch deck required.
          </p>
        </div>

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
      </section>

      <Footer />
    </div>
  )
}

export default WorkWithMe
