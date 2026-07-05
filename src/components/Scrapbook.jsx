import { Paperclip, Stamp, StarSticker, Tape } from './Deco.jsx'
import './Scrapbook.css'

function Scrapbook() {
  return (
    <section id="contact" className="scrap">
      <div className="scrap__rings" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="wrap scrap__inner">
        <div className="planner">
          <Tape className="deco-tape--pink" style={{ top: -12, left: 40, transform: 'rotate(-4deg)' }} />
          <p className="eyebrow">let&rsquo;s work together</p>
          <h2 className="planner__title">This project belongs to:</h2>

          <form
            className="planner__form"
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = 'mailto:hello@gabbtopia.com'
            }}
          >
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@studio.com" required />
            </label>
            <label>
              <span>A note to myself</span>
              <textarea name="message" rows="3" placeholder="tell me about the project…" required />
            </label>
            <button type="submit" className="btn btn--solid">
              Send it over →
            </button>
          </form>
        </div>

        <div className="collage">
          <StarSticker style={{ top: '2%', right: '10%', fontSize: '1.4rem' }} />
          <StarSticker style={{ bottom: '4%', left: '4%', fontSize: '1rem' }} char="✸" />

          <div className="strip">
            <Tape style={{ top: -10, left: '50%', transform: 'translateX(-50%) rotate(-3deg)' }} />
            <div className="strip__frame strip__frame--1 photo-grain" />
            <div className="strip__frame strip__frame--2 photo-grain" />
            <div className="strip__frame strip__frame--3 photo-grain" />
            <span className="strip__caption">gabbtopia</span>
          </div>

          <a href="mailto:hello@gabbtopia.com" className="postcard">
            <Stamp style={{ top: 10, right: 10, transform: 'rotate(4deg)' }} />
            <span className="postcard__title">POSTCARD</span>
            <span className="postcard__lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="postcard__label">say hello — hello@gabbtopia.com</span>
          </a>

          <a href="#" className="idtag">
            <Paperclip style={{ top: -20, left: 16, transform: 'rotate(-10deg)' }} />
            <span className="idtag__label">Follow along</span>
            <span className="idtag__value">@gabbtopia</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Scrapbook
