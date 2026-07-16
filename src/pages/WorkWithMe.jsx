import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import './WorkWithMe.css'

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

      <Footer />
    </div>
  )
}

export default WorkWithMe
