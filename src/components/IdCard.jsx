import { Paperclip, StarSticker, Tape } from './Deco.jsx'
import './IdCard.css'

function IdCard() {
  return (
    <section id="id" className="idsec">
      <div className="wrap idsec__inner">
        <div className="idsec__copy">
          <p className="eyebrow">the paperwork</p>
          <h2 className="idsec__heading">Official business.</h2>
          <p className="idsec__text">
            Ten-plus years making brands, products, and passion projects look like they
            mean it. This card grants full permission to explore ideas, create with
            purpose, and occasionally overthink a kerning value.
          </p>
          <ul className="idsec__list">
            <li><span>01</span> Brand identity &amp; art direction</li>
            <li><span>02</span> Web design &amp; front-end build</li>
            <li><span>03</span> Editorial &amp; print collateral</li>
          </ul>
        </div>

        <div className="idcard-wrap">
          <StarSticker style={{ top: '-6%', left: '2%', fontSize: '1.6rem' }} />
          <div className="scatter scatter--receipt" aria-hidden="true">
            <span>NATIONAL DESK</span>
            <span>IT&rsquo;S QUICK AND EASY</span>
            <span>TO FILE FOR A REFUND</span>
          </div>
          <div className="scatter scatter--stub" aria-hidden="true">
            <span className="scatter__code">241 · 80 · 96</span>
            <span className="scatter__bars" />
          </div>

          <div className="idcard">
            <Tape className="deco-tape--kraft" style={{ top: -10, right: 30, transform: 'rotate(-8deg)' }} />
            <div className="idcard__top">
              <span className="idcard__logo">
                <svg viewBox="0 0 40 40" className="idcard__logomark" aria-hidden="true">
                  <path
                    d="M6 20c2-8 8-13 14-13s10 5 8 10-9 6-11 1 3-9 8-8 8 6 6 10-7 8-13 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                GABBTOPIA CREATIVE CLUB™
              </span>
              <span className="idcard__id">Nº GC-2026-014</span>
            </div>
            <div className="idcard__body">
              <div className="idcard__photo">GB</div>
              <div className="idcard__fields">
                <div>
                  <span className="idcard__label">Name</span>
                  <span className="idcard__value">Gabb</span>
                </div>
                <div>
                  <span className="idcard__label">Title</span>
                  <span className="idcard__value">Creative Generalist, Designer</span>
                </div>
                <div>
                  <span className="idcard__label">Place of issue</span>
                  <span className="idcard__value">London, UK</span>
                </div>
                <div>
                  <span className="idcard__label">Issue date</span>
                  <span className="idcard__value">05 / 07 / 2026</span>
                </div>
              </div>
            </div>
            <p className="idcard__grant">
              This document grants full permission to explore ideas, create with
              purpose, express your vision, and enjoy the process.
            </p>
            <div className="idcard__sig">
              <span className="idcard__label">Signature</span>
              <span className="idcard__scrawl">Gabb</span>
            </div>
            <div className="idcard__barcode" aria-hidden="true" />
          </div>

          <div className="ticket">
            <Paperclip style={{ top: -18, right: 24, transform: 'rotate(12deg)' }} />
            <div className="ticket__row">
              <span className="ticket__label">From</span>
              <span className="ticket__label">To</span>
            </div>
            <div className="ticket__row ticket__row--big">
              <span>IDEA</span>
              <span className="ticket__arrow">✈</span>
              <span>SHIPPED</span>
            </div>
            <div className="ticket__stub">
              <span>GATE 2026</span>
              <span>SEAT: CREATIVE DIRECTOR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IdCard
