import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__stars" aria-hidden="true">
        <span style={{ top: '18%', left: '8%' }}>✸</span>
        <span style={{ top: '65%', left: '4%' }}>★</span>
        <span style={{ top: '30%', left: '92%' }}>★</span>
        <span style={{ top: '75%', left: '90%' }}>✸</span>
      </div>

      <div className="wrap hero__inner">
        <p className="eyebrow">creative generalist · designer · london, uk</p>
        <h1 className="hero__title">
          Hi, I&rsquo;m Gabb —
          <br />I make things worth <em>looking twice</em> at.
        </h1>
        <p className="hero__script">the more you look, the more you find.</p>
        <div className="hero__ctas">
          <a href="#work" className="btn btn--solid">
            See the work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero__flap" aria-hidden="true">
        <svg viewBox="0 0 1200 140" preserveAspectRatio="none">
          <polygon className="hero__flap-shape" points="0,0 1200,0 1200,140 600,10 0,140" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
