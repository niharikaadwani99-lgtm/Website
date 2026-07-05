import './Scrapbook.css'

const SOCIALS = [
  { label: 'Email', href: 'mailto:hello@gabbtopia.com', rotate: -6 },
  { label: 'Instagram', href: '#', rotate: 4 },
  { label: 'LinkedIn', href: '#', rotate: -3 },
]

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

        <div className="polaroids">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="polaroid"
              style={{ '--r': `${s.rotate}deg` }}
            >
              <span className="polaroid__tape" />
              <span className="polaroid__img" />
              <span className="polaroid__label">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Scrapbook
