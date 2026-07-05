import CrosswordPoster from './CrosswordPoster.jsx'
import './Work.css'

const PROJECTS = [
  {
    tone: 'a',
    kicker: '"Reframed"',
    credit: 'Nordwell Studio',
    tag: 'Brand identity',
    year: '2025',
    caption: '"a system built to be noticed, not just seen"',
    rows: [
      { indent: 0, words: ['A', 'BRAND'] },
      { indent: 30, words: ['THAT'] },
      { indent: 0, words: ['MOVES', 'WITH'] },
      { indent: 46, words: ['YOU'] },
    ],
  },
  {
    tone: 'b',
    kicker: '"Slow Mornings"',
    credit: 'Field &amp; Fern'.replace('&amp;', '&'),
    tag: 'Web + packaging',
    year: '2025',
    caption: '"the fairy tale, the search goes on and on"',
    rows: [
      { indent: 0, words: ['THE'] },
      { indent: 24, words: ['MORE'] },
      { indent: 0, words: ['YOU', 'LOOK'] },
      { indent: 50, words: ['THE'] },
      { indent: 0, words: ['MORE', 'YOU'] },
    ],
  },
  {
    tone: 'c',
    kicker: '"No Idea, On Purpose"',
    credit: 'Personal project',
    tag: 'Art direction',
    year: '2026',
    caption: '"made by gabbtopia, 2026"',
    rows: [
      { indent: 0, words: ['MADE'] },
      { indent: 36, words: ['ON'] },
      { indent: 0, words: ['PURPOSE'] },
      { indent: 20, words: ['NOT'] },
      { indent: 0, words: ['ACCIDENT'] },
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
