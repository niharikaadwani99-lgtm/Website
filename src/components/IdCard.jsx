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
          <div className="scatter scatter--receipt" aria-hidden="true" />
          <div className="scatter scatter--stub" aria-hidden="true" />
          <div className="idcard">
            <div className="idcard__top">
              <span className="idcard__org">GABBTOPIA CREATIVE CLUB™</span>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default IdCard
