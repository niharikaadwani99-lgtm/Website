import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HiddenNote, StarSticker, Tape } from '../components/Deco.jsx'
import './About.css'

function About() {
  return (
    <div className="page about-page">
      <Nav />

      <header className="about-hero wrap">
        <StarSticker style={{ top: '-6px', right: '6%' }} />
        <p className="label">about me, more or less</p>
        <h1 className="hand about-hero__title">a page from my journal</h1>
        <p className="about-hero__sub">
          Not a biography &mdash; more like flipping through the notebook I keep next to my
          sewing machine. Handwriting included.
        </p>
      </header>

      <div className="wrap about-board">
        <article className="scrap-card scrap-card--photo r1">
          <span className="scrap-card__photo photo-grain" />
          <p className="hand scrap-card__cap">fashion school, second year &mdash; up all night before a critique</p>
        </article>

        <article className="scrap-card scrap-card--note r2">
          <Tape style={{ top: -10, left: '30%' }} />
          <p className="hand scrap-card__quote">
            &ldquo;Saved this because it was the first time a professor said my construction was
            better than my concept. I&rsquo;d had it backwards for years.&rdquo;
          </p>
        </article>

        <article className="scrap-card scrap-card--sketch r3">
          <svg viewBox="0 0 200 160" className="scrap-card__sketch">
            <path
              d="M60 20 C 40 40, 40 90, 55 140 M60 20 C 90 10, 130 20, 140 40 C150 60 140 90 120 100 M60 20 L45 40"
              fill="none"
              stroke="var(--chocolate)"
              strokeWidth="2"
            />
          </svg>
          <p className="hand scrap-card__cap">an early sketch for a coat that eventually worked</p>
        </article>

        <article className="scrap-card scrap-card--index r4">
          <p className="label">currently on the shelf</p>
          <h3 className="hand">books I keep returning to</h3>
          <ul>
            <li>The Fashion System &mdash; Roland Barthes</li>
            <li>Ninety Percent of Everything &mdash; Rose George</li>
            <li>Ai Weiwei&rsquo;s studio notebooks</li>
            <li>an untitled stack of old Vogue Patterns</li>
          </ul>
        </article>

        <article className="scrap-card scrap-card--photo r5">
          <span className="scrap-card__photo photo-grain photo-grain--b" />
          <p className="hand scrap-card__cap">a workshop visit &mdash; learning how a block is actually cut</p>
        </article>

        <article className="scrap-card scrap-card--index r6">
          <p className="label">on repeat in the studio</p>
          <h3 className="hand">music, currently</h3>
          <ul>
            <li>anything with a needle-drop crackle</li>
            <li>old Hindi film scores, low volume</li>
            <li>whatever is on the cassette in the other room</li>
          </ul>
        </article>

        <article className="scrap-card scrap-card--note r7">
          <p className="hand scrap-card__quote">
            &ldquo;This changed how I think about design: a manufacturer once told me the best
            spec sheet is the one that leaves nothing to be assumed. I&rsquo;ve never over-explained
            a seam since.&rdquo;
          </p>
        </article>

        <article className="scrap-card scrap-card--sketch r8">
          <svg viewBox="0 0 200 160" className="scrap-card__sketch">
            <circle cx="100" cy="50" r="18" fill="none" stroke="var(--chocolate)" strokeWidth="2" />
            <path d="M70 70 L60 140 M130 70 L140 140 M70 70 L130 70" fill="none" stroke="var(--chocolate)" strokeWidth="2" />
          </svg>
          <p className="hand scrap-card__cap">figure studies from a class I almost didn&rsquo;t take</p>
        </article>
      </div>

      <div className="wrap about-influences">
        <p className="label">design influences, in no order</p>
        <div className="about-influences__row">
          <span>hand-block printing</span>
          <span>Japanese pattern-cutting</span>
          <span>market stalls at 6am</span>
          <span>my grandmother&rsquo;s saris</span>
          <span>brutalist architecture</span>
          <span>anything that&rsquo;s been mended once</span>
        </div>
      </div>

      <div className="wrap about-note-row">
        <HiddenNote teaser="what I studied, if you're curious" rotate={-4}>
          <span className="hand">the short version</span>
          Trained formally in fashion design, then spent years on the less glamorous side of the
          industry &mdash; sourcing, sampling, production &mdash; learning what actually gets a
          collection made, not just designed.
        </HiddenNote>
        <HiddenNote teaser="why I work the way I do" rotate={3}>
          <span className="hand">a small manifesto</span>
          Good design that never ships isn&rsquo;t useful to anyone. I like sitting in the gap
          between the sketch and the factory floor &mdash; that&rsquo;s usually where things go
          wrong, and where I can help most.
        </HiddenNote>
      </div>

      <Footer />
    </div>
  )
}

export default About
