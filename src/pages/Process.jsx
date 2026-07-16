import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import './Process.css'

const STEPS = [
  { n: '01', label: 'Idea', body: 'A conversation. What the brand wants to say, and to whom.' },
  { n: '02', label: 'Collection Direction', body: 'Turning that conversation into a point of view — silhouettes, story, market.' },
  { n: '03', label: 'Sketches', body: 'Pen to paper. Fast, rough, a lot of them get thrown out.' },
  { n: '04', label: 'Tech Packs', body: 'The sketches become instructions a factory can actually follow.' },
  { n: '05', label: 'Sampling', body: 'First samples arrive. Almost never right the first time. That’s expected.' },
  { n: '06', label: 'Fit Development', body: 'Rounds of fitting and correction until the garment behaves the way it was drawn to.' },
  { n: '07', label: 'Production Handover', body: 'Approved sample, full spec, clear timeline — handed to the line.' },
  { n: '08', label: 'Launch', body: 'It exists in the world now. The best part, and the most nerve-wracking.' },
]

function Process() {
  return (
    <div className="page process-page">
      <Nav />

      <header className="process-hero wrap">
        <p className="label">pinned to the wall above my desk</p>
        <h1 className="hand process-hero__title">how I help brands</h1>
        <p className="process-hero__sub">
          Every collection I’ve worked on has moved through some version of this. Pins,
          string, and all — it’s an actual board in my studio, not a metaphor.
        </p>
      </header>

      <div className="wrap process-board">
        <div className="process-line" aria-hidden="true" />
        {STEPS.map((s, i) => (
          <div className={`process-step ${i % 2 === 0 ? 'is-left' : 'is-right'}`} key={s.n}>
            <span className="process-step__pin" aria-hidden="true" />
            <div className="process-step__card">
              <span className="label process-step__n">{s.n}</span>
              <h3 className="hand process-step__label">{s.label}</h3>
              <p>{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Process
