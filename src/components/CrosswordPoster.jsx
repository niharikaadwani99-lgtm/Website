import './CrosswordPoster.css'

const COLS = 10
const ROWS = 12

function buildCells(words) {
  const filled = new Map()
  words.forEach((w) => {
    for (let i = 0; i < w.text.length; i++) {
      filled.set(`${w.row}-${w.col + i}`, w.text[i])
    }
  })
  const cells = []
  for (let r = 1; r <= ROWS; r++) {
    for (let c = 1; c <= COLS; c++) {
      const letter = filled.get(`${r}-${c}`)
      cells.push({ r, c, letter })
    }
  }
  return cells
}

function CrosswordPoster({ kicker, credit, words, caption, tone, tag, year }) {
  const cells = buildCells(words)

  return (
    <article className={`poster poster--${tone}`}>
      <div className="poster__top">
        <span>{kicker}</span>
        <span>{credit}</span>
      </div>
      <div className="poster__frame">
        <div className="poster__photo" aria-hidden="true" />
        <div
          className="poster__grid"
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)` }}
        >
          {cells.map(({ r, c, letter }) => (
            <span
              key={`${r}-${c}`}
              className={letter ? 'poster__cell poster__cell--fill' : 'poster__cell'}
              style={{ gridRow: r, gridColumn: c }}
            >
              {letter || ''}
            </span>
          ))}
        </div>
      </div>
      <p className="poster__caption">{caption}</p>
      <div className="poster__meta">
        <span className="poster__tag">{tag}</span>
        <span>{year}</span>
      </div>
    </article>
  )
}

export default CrosswordPoster
