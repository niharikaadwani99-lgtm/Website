import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ARTWORKS } from './artworkMap.js'
import { WINGS } from './wings.js'
import './Wing.css'

export default function Wing({ wing }) {
  useEffect(() => {
    document.title = `${wing.title} — The Glyptotek of Samveg`
  }, [wing])

  const Art = ARTWORKS[wing.art]
  const index = WINGS.findIndex((w) => w.slug === wing.slug)
  const next = WINGS[(index + 1) % WINGS.length]

  return (
    <main className={`wing wing--${wing.theme}`}>
      <nav className="wing-nav">
        <Link to="/" className="smallcaps wing-nav__back">← Entrance Hall</Link>
        <span className="smallcaps wing-nav__wordmark">The Glyptotek of Samveg</span>
        <span className="smallcaps wing-nav__numeral">Wing {wing.numeral}</span>
      </nav>

      <header className="wing-header">
        <div className="wing-header__art" aria-hidden="true">
          <span className="wing-header__frame">
            <Art />
          </span>
          <span className="wing-header__caption smallcaps">
            {wing.artTitle} · {wing.artMedium}
          </span>
        </div>
        <div className="wing-header__text">
          <p className="smallcaps wing-header__eyebrow">Wing {wing.numeral} of VII</p>
          <h1 className="wing-header__title">{wing.title}</h1>
          <p className="wing-header__tagline">{wing.tagline}</p>
          <hr className="wing-rule" aria-hidden="true" />
          <p className="wing-header__intro">{wing.intro}</p>
        </div>
      </header>

      <section className="wing-exhibits" aria-label={`Exhibits in the ${wing.title}`}>
        {wing.exhibits.map((exhibit, i) => (
          <article className="exhibit" key={exhibit.title}>
            <p className="smallcaps exhibit__number">{`№ ${String(i + 1).padStart(2, '0')}`}</p>
            <h2 className="exhibit__title">{exhibit.title}</h2>
            <p className="exhibit__label">{exhibit.label}</p>
            <p className="exhibit__text">{exhibit.text}</p>
          </article>
        ))}
      </section>

      {wing.quote && (
        <section className="wing-quote">
          <span className="wing-quote__mark" aria-hidden="true">❝</span>
          <blockquote className="wing-quote__text">{wing.quote}</blockquote>
          <p className="smallcaps wing-quote__attribution">Inscribed at the centre of the room</p>
        </section>
      )}

      <footer className="wing-footer">
        <p className="smallcaps wing-footer__label">Continue your visit</p>
        <div className="wing-footer__links">
          <Link to={`/${next.slug}`} className="wing-footer__next">
            <span className="smallcaps">Next wing</span>
            <span className="wing-footer__next-title">{next.title} →</span>
          </Link>
          <Link to="/" className="smallcaps wing-footer__home">Return to the entrance hall</Link>
        </div>
      </footer>
    </main>
  )
}
