import './Wrapped.css'

const STATS = [
  { n: '14', label: 'projects shipped' },
  { n: '6', label: 'countries worked with' },
  { n: '312', label: 'cups of coffee (est.)' },
  { n: '1', label: 'existential crisis re: kerning' },
]

function Wrapped() {
  return (
    <section id="wrapped" className="wrapped">
      <div className="wrap wrapped__inner">
        <div className="envelope">
          <div className="envelope__flap" aria-hidden="true" />
          <div className="envelope__body">
            <span className="envelope__brand">
              <span className="star">★</span> gabbtopia <span className="star">★</span>
            </span>
            <h2 className="envelope__title">2025, Wrapped</h2>
            <p className="envelope__sub">(some of my fave projects I worked on this year.)</p>
          </div>
        </div>

        <div className="wrapped__stats">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat__n">{s.n}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Wrapped
