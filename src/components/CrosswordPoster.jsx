import './CrosswordPoster.css'

function CrosswordPoster({ kicker, credit, rows, caption, tone, tag, year }) {
  return (
    <article className={`poster poster--${tone}`}>
      <div className="poster__frame">
        <div className="poster__top">
          <span>{kicker}</span>
          <span>{credit}</span>
        </div>
        <div className="poster__photo" aria-hidden="true" />
        <div className="poster__grid">
          {rows.map((row, i) => (
            <div className="poster__row" key={i} style={{ marginLeft: row.indent || 0 }}>
              {row.words.map((word, wi) => (
                <span className="poster__word" key={wi}>
                  {word.split('').map((ch, ci) => (
                    <span className="poster__cell" key={ci}>
                      {ch}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="poster__caption">{caption}</p>
      </div>
      <div className="poster__meta">
        <span className="poster__tag">{tag}</span>
        <span>{year}</span>
      </div>
    </article>
  )
}

export default CrosswordPoster
