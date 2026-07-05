import CrosswordPoster from './CrosswordPoster.jsx'
import './Work.css'

const PROJECTS = [
  {
    tone: 'a',
    kicker: '"A Brand That Moves"',
    credit: 'Nordwell Studio',
    tag: 'Brand identity',
    year: '2025',
    caption: '“slow logo, fast recognition”',
    words: [
      { text: 'A', row: 2, col: 2 },
      { text: 'BRAND', row: 2, col: 4 },
      { text: 'THAT', row: 4, col: 3 },
      { text: 'MOVES', row: 6, col: 1 },
      { text: 'WITH', row: 6, col: 7 },
      { text: 'YOU', row: 9, col: 4 },
    ],
  },
  {
    tone: 'b',
    kicker: '"Slow Mornings"',
    credit: 'Field & Fern',
    tag: 'Web + packaging',
    year: '2025',
    caption: '“the more you taste, the more you crave”',
    words: [
      { text: 'THE', row: 2, col: 1 },
      { text: 'MORE', row: 2, col: 5 },
      { text: 'YOU', row: 4, col: 2 },
      { text: 'TASTE', row: 4, col: 6 },
      { text: 'THE', row: 7, col: 2 },
      { text: 'MORE', row: 7, col: 6 },
      { text: 'YOU', row: 9, col: 1 },
      { text: 'CRAVE', row: 9, col: 5 },
    ],
  },
  {
    tone: 'c',
    kicker: '"No Idea, On Purpose"',
    credit: 'Personal project',
    tag: 'Art direction',
    year: '2026',
    caption: '“made on purpose, not by accident”',
    words: [
      { text: 'MADE', row: 2, col: 2 },
      { text: 'ON', row: 4, col: 6 },
      { text: 'PURPOSE', row: 6, col: 1 },
      { text: 'NOT', row: 9, col: 2 },
      { text: 'CHANCE', row: 11, col: 2 },
    ],
  },
]

function Work() {
  return (
    <section id="work" className="worksec">
      <div className="wrap">
        <p className="eyebrow">selected work</p>
        <h2 className="worksec__heading">Look closer. It&rsquo;s all in the details.</h2>
        <div className="worksec__grid">
          {PROJECTS.map((p) => (
            <CrosswordPoster key={p.credit} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
