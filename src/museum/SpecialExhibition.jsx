import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HIDDEN_WING } from './wings.js'
import photograph01 from './assets/photograph-01.jpg'
import photograph02 from './assets/photograph-02.jpg'
import './SpecialExhibition.css'

/*
 * The smallest wing in the museum. Every other wing is about him;
 * this one is about the space between two people. Five exhibits,
 * one acquisition record, and nothing more — scarcity on purpose.
 */

const LETTER = {
  date: '27th June 2026',
  greeting: 'Dear Sam,',
  paragraphs: [
    'I know this letter has been a long time coming but I needed some time to collect my thoughts and feelings. Articulating how wonderful the last couple of weeks have been hasn’t been the easiest because the feelings have been so intense.',
    'While articulating it may not be easy, being in love with you has been a breeze. Falling in love with you has been one of the best choices I’ve made in a long time and it’s one I continue to make everyday. You’ve made it such a safe space to be vulnerable, share my needs and grow together as people. I see the way you live your life, with so much love to give and so much passion for your goals and you really do inspire me. You inspire me to be a better version of myself and force myself to get out of my bubble and do more. You’re so passionate, you have so much potential and you make me proud everyday with the way you work towards what you want. You’re so on top of things (I’ve been saying that since before I even met you and it still stands true) and I love the way you take initiative as well. The way you anticipate my needs before I know I have them, the way you make sure I’m never in my head and help ground me to the present, the way reassurances flow so freely with you has been some of the best parts of this relationship. How you just know how to make me feel so so loved and cared for.',
    'Sometimes I still look at us and I find it so unbelievable that we’re together and you’re such an important part of my life. With you I never have to wonder if I’m an important part of your life, the way you treat me everyday says more than enough. I just feel so much lighter in your presence, just so much happier and always giggling. While I have my spirals and bad days too, you’ve never made me feel like I’m dealing with it alone. You’re always there to hear me out and offer support in whatever way I need. Every time I see you, I leave feeling like a better, happier, lighter version of myself and that matters so so much. You’ve shown me that I don’t have to earn love by being perfect. I can just be myself and still feel deeply loved and how amazing it is to see the love I give actually reciprocated.',
    'I know the last few months haven’t been the easiest on you but I see you growing through it, even if it’s hard. You see rough edges but I see you being human. Your over optimizing, your rumination and your stubbornness are what makes you you. Growth isn’t linear and it never will be. While you go through this, give yourself some grace. You’re allowed to have rough days and I’m right there with you. You’re not dealing with anything alone.',
    'Over the last few months, we’ve built something so so special and valuable and I’m so excited for everything that is to come. While circumstances may be uncertain, the only thing I’m certain about',
  ],
  signoff: 'Much love,',
  signature: 'Nix',
}

const OBSERVATIONS = [
  'You make me feel chosen, even on the most ordinary days.',
  'I’ve never met someone who pays attention to the little things the way you do.',
  'You make me feel safe enough to be completely myself.',
  'Your thoughtfulness isn’t something you do, it’s who you are.',
  'You make difficult conversations feel like we’re on the same team.',
  'I admire how deeply you care about becoming a better person.',
  'You have a way of making me feel important without ever having to say it.',
  'You make life feel lighter, funnier, and much less lonely.',
  'I love how much intention you bring to the people and things you care about.',
  'Being loved by you has shown me how good love can actually feel.',
]

const SMALL_THINGS = [
  {
    kind: 'screenshot',
    title: 'Song recommendation, item 01',
    body: '“trust me on this one.” — 11:52 p.m.',
    caption: 'He was right. He is aware that he was right.',
  },
  {
    kind: 'phrase',
    title: 'A phrase, said often',
    body: '“Okay — hear me out.”',
    caption: 'Catalogued because what follows is, invariably, worth hearing out.',
  },
  {
    kind: 'film',
    title: 'One film recommendation',
    body: 'Status: on hold',
    caption: 'To be watched properly, together, as intended. The museum respects the hold.',
  },
  {
    kind: 'clue',
    title: 'A puzzle clue',
    body: '14-Across: What this collection is. (6)',
    caption: 'Answer withheld. He solved it on sight.',
  },
  {
    kind: 'joke',
    title: 'A joke',
    body: '№ ∞',
    caption: 'Not funny to anyone else. Funnier every time.',
  },
]

/* the sealed second letter */
function SealedLetterSvg() {
  return (
    <svg viewBox="0 0 260 170" role="img" aria-label="A sealed envelope">
      <rect x="10" y="18" width="240" height="140" rx="4" fill="#f3e9d2" stroke="#c9b68c" strokeWidth="1.2" />
      <path d="M10 22 L130 96 L250 22" fill="none" stroke="#c9b68c" strokeWidth="1.2" />
      <path d="M10 158 L96 88 M250 158 L164 88" stroke="#c9b68c" strokeWidth="1" opacity="0.6" />
      <circle cx="130" cy="92" r="16" fill="#a8442e" />
      <circle cx="130" cy="92" r="12" fill="none" stroke="#7a2a1c" strokeWidth="1.2" />
      <text x="130" y="97" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="13" fill="#f3e0c8">N</text>
    </svg>
  )
}

/* installation view of Nix Arcade — drawn, since the room can't photograph a website */
function NixArcadeSvg() {
  return (
    <svg viewBox="0 0 420 260" role="img" aria-label="Installation view of Nix Arcade — a crossword and an arcade marquee">
      <rect width="420" height="260" rx="6" fill="#16121e" />
      {/* marquee */}
      <rect x="24" y="22" width="372" height="52" rx="8" fill="#241c33" stroke="#d4938a" strokeWidth="1.2" />
      <text x="210" y="55" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="24" letterSpacing="10" fill="#f0b9ae">NIX ARCADE</text>
      {[52, 100, 148, 196, 244, 292, 340].map((x) => (
        <circle key={x} cx={x + 14} cy="30" r="2.4" fill="#ffdf8a" opacity="0.85" />
      ))}
      {/* crossword */}
      <g transform="translate(46 96)">
        {[0, 1, 2, 3, 4, 5].map((r) =>
          [0, 1, 2, 3, 4, 5].map((c) => {
            const dark = (r === 0 && c > 3) || (r === 3 && c === 0) || (r === 5 && c < 2) || (r === 2 && c === 5)
            return (
              <rect key={`${r}${c}`} x={c * 22} y={r * 22} width="20" height="20" rx="2"
                fill={dark ? '#0d0a13' : '#f3e9d2'} stroke="#3a3050" strokeWidth="0.8" />
            )
          })
        )}
        {[['N', 0, 0], ['I', 1, 0], ['X', 2, 0], ['♥', 1, 2]].map(([ch, c, r]) => (
          <text key={`${ch}${c}${r}`} x={c * 22 + 10} y={r * 22 + 15} textAnchor="middle"
            fontFamily="Jost, sans-serif" fontSize="12" fill="#241c33">{ch}</text>
        ))}
      </g>
      {/* game cards */}
      {[[220, 96], [312, 96], [220, 168]].map(([x, y], i) => (
        <g key={`${x}${y}`}>
          <rect x={x} y={y} width="84" height="60" rx="6" fill="#241c33" stroke={i === 0 ? '#d4938a' : '#3a3050'} strokeWidth="1.2" />
          <rect x={x + 12} y={y + 12} width="36" height="6" rx="3" fill="#8d82bd" />
          <rect x={x + 12} y={y + 26} width="60" height="4" rx="2" fill="#4a4270" />
          <rect x={x + 12} y={y + 36} width="48" height="4" rx="2" fill="#4a4270" />
          <circle cx={x + 68} cy={y + 46} r="6" fill={i === 0 ? '#f0b9ae' : '#4a4270'} />
        </g>
      ))}
      <text x="312" y="196" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="13" fill="#8d82bd">player count: 1</text>
      <text x="210" y="246" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="8" letterSpacing="3" fill="#6f6490">INSTALLATION VIEW · RECONSTRUCTED BY THE MUSEUM</text>
    </svg>
  )
}

function Exhibit({ numeral, name, children }) {
  return (
    <section className="sx-exhibit">
      <p className="smallcaps sx-exhibit__eyebrow">Exhibit {numeral} · {name}</p>
      {children}
    </section>
  )
}

export default function SpecialExhibition() {
  const [unfolded, setUnfolded] = useState(false)

  useEffect(() => {
    document.title = 'Special Exhibition — The Glyptotek of Samveg'
  }, [])

  return (
    <main className="sx">
      <nav className="sx-nav">
        <Link to="/" className="smallcaps sx-nav__back">← Slip back out quietly</Link>
        <span className="smallcaps">Not on the museum map</span>
      </nav>

      <header className="sx-header">
        <p className="smallcaps sx-header__eyebrow">✳ Special Exhibition · The smallest wing</p>
        <h1 className="sx-header__title">{HIDDEN_WING.title}</h1>
        <p className="sx-header__subtitle">{HIDDEN_WING.subtitle}</p>
        <div className="sx-entry-plaque">
          <p>“{HIDDEN_WING.plaque}”</p>
        </div>
        <p className="sx-header__note">
          Every other wing is about him. This one is about the space between two people.
          It is the smallest room in the museum, and it holds the most.
        </p>
      </header>

      <div className="sx-exhibits">
        {/* I — Correspondence */}
        <Exhibit numeral="I" name="Correspondence">
          <div className={`sx-letter ${unfolded ? 'sx-letter--unfolded' : ''}`}>
            <div className="sx-letter__glass">
              <article className="sx-letter__paper">
                <p className="smallcaps sx-letter__date">{LETTER.date}</p>
                <p className="sx-letter__greeting">{LETTER.greeting}</p>
                {LETTER.paragraphs.map((para) => (
                  <p className="sx-letter__para" key={para.slice(0, 32)}>{para}</p>
                ))}
                <p className="sx-letter__signoff">{LETTER.signoff}</p>
                <p className="sx-letter__signature">{LETTER.signature}</p>
              </article>
              {!unfolded && <div className="sx-letter__fold" aria-hidden="true" />}
            </div>
            <button type="button" className="sx-letter__toggle smallcaps" onClick={() => setUnfolded((u) => !u)}>
              {unfolded ? 'Fold the letter away' : 'Unfold the letter'}
            </button>
            <p className="smallcaps sx-doc-label">Correspondence, item 01 · Ink on paper · Under glass</p>
          </div>

          <div className="sx-sealed">
            <span className="sx-sealed__env"><SealedLetterSvg /></span>
            <p className="smallcaps sx-doc-label">
              Correspondence, item 02 · Sealed at the lender’s request · To be opened in person
            </p>
          </div>

          <p className="sx-hand">“Some thoughts were too important to keep only in memory.”</p>
        </Exhibit>

        {/* II — Photographic Evidence */}
        <Exhibit numeral="II" name="Photographic Evidence">
          <p className="sx-lede">
            The complete photographic holdings of this collection. Two. The scarcity is deliberate —
            most of it was too good to interrupt with a camera.
          </p>
          <div className="sx-photos">
            <figure className="sx-photo">
              <span className="sx-photo__frame">
                <img src={photograph01} alt="The two of them in a car, sunlit, her head against his shoulder" />
              </span>
              <figcaption className="smallcaps">Photograph 01 · Acquired 2nd June 2026</figcaption>
            </figure>
            <figure className="sx-photo">
              <span className="sx-photo__frame">
                <img src={photograph02} alt="The two of them at night, city behind them, both smiling" />
              </span>
              <figcaption className="smallcaps">Photograph 02 · Acquired 4th July 2026</figcaption>
            </figure>
          </div>
        </Exhibit>

        {/* III — The Observation Wall */}
        <Exhibit numeral="III" name="The Observation Wall">
          <p className="sx-lede">
            Ten labels, written from close range. Collected the way this museum collects everything —
            slowly, honestly, and in her hand.
          </p>
          <div className="sx-observations">
            {OBSERVATIONS.map((text, i) => (
              <div className="sx-observation" key={text}>
                <span className="smallcaps sx-observation__num">Observation #{String(i + 1).padStart(2, '0')}</span>
                <span className="sx-observation__text">“{text}”</span>
              </div>
            ))}
          </div>
          <p className="sx-aside">The wall is incomplete on purpose. Acquisitions continue.</p>
        </Exhibit>

        {/* IV — The Collection of Small Things */}
        <Exhibit numeral="IV" name="The Collection of Small Things">
          <div className="sx-vitrine">
            {SMALL_THINGS.map((thing) => (
              <div className={`sx-thing sx-thing--${thing.kind}`} key={thing.title}>
                <p className="smallcaps sx-thing__title">{thing.title}</p>
                <p className="sx-thing__body">{thing.body}</p>
                <p className="sx-thing__caption">{thing.caption}</p>
              </div>
            ))}
          </div>
          <div className="sx-plaque">
            <p>“Objects of little value to everyone except the collector.”</p>
          </div>
        </Exhibit>

        {/* V — The Artifact He Created */}
        <Exhibit numeral="V" name="The Artifact He Created">
          <div className="sx-arcade">
            <a
              href="https://nix-games.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="sx-arcade__view"
              aria-label="Nix Arcade — visit the installation"
            >
              <NixArcadeSvg />
            </a>
            <div className="sx-arcade__text">
              <h3 className="sx-arcade__name">Nix Arcade</h3>
              <p>
                While the lender was building this museum, the subject — unprompted, and characteristically
                ahead of schedule — built an arcade. He had noticed a crossword habit the way this museum
                notices things, and turned it into a place: a collection of games with an intended audience
                of exactly one.
              </p>
              <p>
                Why it matters, for the record: it is one thing to be loved. It is another to be observed
                closely enough that someone builds you a room. He did it first. This entire building is,
                in part, a reply.
              </p>
              <a
                href="https://nix-games.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="sx-arcade__link smallcaps"
              >
                ▶ Visit the installation
              </a>
            </div>
          </div>
          <div className="sx-plaque">
            <p>“An interactive installation created for a single visitor.”</p>
          </div>
        </Exhibit>
      </div>

      {/* the final room: one placard */}
      <section className="sx-record">
        <p className="smallcaps sx-record__eyebrow">Final room · One placard</p>
        <div className="sx-record__card">
          <p className="smallcaps sx-record__heading">Acquisition Record</p>
          <dl className="sx-record__rows">
            <div><dt>Accession Number</dt><dd>PVT-001</dd></div>
            <div><dt>Title</dt><dd>Samveg</dd></div>
            <div><dt>Date Acquired</dt><dd>1st February 2026</dd></div>
            <div><dt>Condition Report</dt><dd>Still evolving.</dd></div>
            <div>
              <dt>Description</dt>
              <dd>
                A collector of music, ideas, dreams, objects, stories, and people.
                Currently on display in multiple galleries.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="sx-footer">
        <p className="smallcaps">This room does not appear in the catalogue</p>
        <Link to="/" className="sx-footer__link">Return to the entrance hall, and tell no one →</Link>
      </footer>
    </main>
  )
}
