/*
 * The catalogue raisonné of the Glyptotek — every wing, every label.
 */

export const WINGS = [
  {
    slug: 'hall-of-sound',
    theme: 'sound',
    numeral: 'I',
    title: 'Hall of Sound',
    art: 'sound',
    artTitle: 'Resonance, Dissolving',
    artMedium: 'Oil and gold leaf on panel',
    artYear: 'Undated — the artist kept losing track of time in it',
    tagline: 'Music was the first thing he ever collected. I like to think I’m the best thing.',
    intro:
      'Enter slowly. The walls are dark walnut, the light is low, and somewhere a needle is always finding its groove. This is the room where I fell for his taste in music and then — inconveniently, wonderfully — for the rest of him. Four listening stations. Headphones on. If a song suddenly reminds you of someone, that is the exhibit working as intended.',
    exhibits: [
      {
        title: 'Our Songs',
        label: 'Combined collection · Listening Station 01 · Two curators of record',
        artVariant: 0,
        text:
          'The only work in this museum with two curators, and the only acquisition we made together. Songs that remind him of me, songs that remind me of him, filed jointly under “us.” Most of them attached themselves to a moment and refused to leave — we’ve checked, they’re load-bearing now. Conservation note: still growing. Neither curator has any intention of finishing it. Ever.',
        links: [
          { label: 'Listen · Our Songs', url: 'https://open.spotify.com/playlist/39myOtaec9u73Q9oQGpQnP' },
        ],
      },
      {
        title: 'The Intimate Collection',
        label: 'Vols. I & II · Restricted access · Listening Station 02',
        artVariant: 4,
        text:
          'Two volumes, kept behind the curtain of this hall and catalogued with deliberate vagueness. The museum can confirm the following, and only the following: they exist, they are played with the lights low, and the curator was blushing while writing this label. Headphones mandatory. Discretion assumed. Volume II is somehow shyer than Volume I.',
        links: [
          { label: 'Vol. I', url: 'https://open.spotify.com/playlist/6XvkWL2E8LnplbtWr2yuhW' },
          { label: 'Vol. II', url: 'https://open.spotify.com/playlist/43oVDMtacQa6fj1A7UcbCO' },
        ],
      },
      {
        title: 'The Record Bar',
        label: 'Architectural exhibit · Dark wood, one turntable, no talking during side A',
        artVariant: 5,
        text:
          'The world’s most civilized invention: a small dark room where the bartender is also the selector and nobody speaks during side A. He wants to build one someday, and I believe him completely, because he already describes the lighting like the place exists. So I went ahead and curated opening night — jazz in exactly the right order, made for the proprietor by his only regular. My seat at the bar is reserved. Permanently. I’ve checked.',
        links: [
          { label: 'Listen · The Record Bar Set', url: 'https://open.spotify.com/playlist/495QuOl19C8xfXxPHoMmAK' },
        ],
      },
      {
        title: 'The Top Three, of All Time',
        label: 'The summit of the collection · Listening Station 04',
        artVariant: 1,
        text:
          'Every collection has its summit; his has three. Innerbloom — nine minutes and thirty-eight seconds of going home without moving (yes, he cites the length from memory; yes, I have timed him citing it). Nightwhisper — the sound of driving at 2 a.m. with nowhere urgent to be. And Come Together, whose bassline walks in like it pays rent. Ranked in no particular order, because he refuses to choose. I’ve stopped asking. It’s adorable.',
        links: [
          { label: 'Listen · The Top Three', url: 'https://open.spotify.com/playlist/6jKy7ZPdUtkYXNcLhH6sUk' },
        ],
      },
    ],
  },
  {
    slug: 'hall-of-curiosities',
    theme: 'curiosities',
    numeral: 'II',
    title: 'Hall of Curiosities',
    art: 'curiosities',
    artTitle: 'The Architecture of Sleep',
    artMedium: 'Pigment and starlight on linen',
    artYear: 'Painted while dreaming, allegedly',
    tagline: 'A room for the questions that keep him up, and the dreams that follow.',
    intro:
      'The lights are dim here on purpose. This wing is devoted to the pursuits that live at the edge of waking — dreams studied and dreams engineered, puzzles that resist, bricks that click. Nothing in this room is finished. That is the point of it.',
    exhibits: [
      {
        title: 'Lucid Dreaming',
        label: 'Interactive exhibit · Am I dreaming right now? Check twice.',
        text:
          'The practice of waking up inside a dream without leaving it. Reality checks, dream signs, the strange discipline of doubting one’s own daylight. The collection includes several confirmed flights, a few conjured rooms, and one recurring staircase the subject refuses to discuss.',
      },
      {
        title: 'Dream Research',
        label: 'The journals · Ink on nightstand paper',
        text:
          'Dreams evaporate at roughly the speed of waking, so they must be written down fast and badly. Exhibited here: the practice of dream journaling, the science of REM and memory, and a standing fascination with why the sleeping mind builds such elaborate architecture and then burns the blueprints every morning.',
      },
      {
        title: 'Puzzles',
        label: 'Vitrine of resistant objects',
        text:
          'A good puzzle is a locked room that wants to be opened. This case holds the affection for problems that push back — logic puzzles, riddles, twisted cubes, anything that produces that particular silence of a mind fully spent on one thing. The click of a solution remains among the finest sounds known.',
      },
      {
        title: 'LEGO',
        label: 'Architecture in plastic · Do touch, actually',
        text:
          'Officially a toy; functionally a philosophy. Instructions as meditation, sorting as prelude, the finished set as proof that large things are only small things joined patiently. The museum notes the throughline: a person who builds cities out of bricks will eventually try to build them out of people and rooms. See: Founder Wing.',
      },
      {
        title: 'On Curiosity',
        label: 'Wall text · The permanent condition',
        text:
          'The organizing principle of this entire museum, displayed here in its raw form: the refusal to leave an interesting thing alone. Rabbit holes entered at midnight. Wikipedia tabs like open windows. Learning not as a means to anything, but as the native state.',
      },
    ],
  },
  {
    slug: 'founder-wing',
    theme: 'founder',
    numeral: 'III',
    title: 'Founder Wing',
    art: 'founder',
    artTitle: 'Sketch for a Possible City',
    artMedium: 'Ink, graphite, and conviction on drafting paper',
    artYear: 'Drafted overnight, revised forever',
    tagline: 'Sketches that intend to become skylines.',
    intro:
      'The light in this wing is clean and even, like a studio at 9 a.m. It holds the builder’s side of the collection: the incubators, the shared houses, the communities, the systems. Every exhibit here began the same way — as a drawing of something that did not exist yet.',
    exhibits: [
      {
        title: 'The Incubator',
        label: 'Exhibit III-01 · Rooms where companies are born',
        text:
          'An incubator is a bet that ambition is contagious. Put enough determined people in one place, add mentors, deadlines, and bad coffee, and watch ideas turn load-bearing. This exhibit documents a sustained fascination with the machinery of early-stage creation — and the intent to build such a room, not just occupy one.',
      },
      {
        title: 'Hacker Houses',
        label: 'Exhibit III-02 · Whiteboards in the kitchen',
        text:
          'The domestic form of the same bet. A hacker house is what happens when a home decides to have a mission: mattresses and monitors, demo nights in the living room, strangers becoming co-founders over shared groceries. The museum holds these houses to be the cathedrals of our era — built fast, lit late, holy in their own way.',
      },
      {
        title: 'Building Communities',
        label: 'Exhibit III-03 · Infrastructure for belonging',
        text:
          'The rarest founder skill is not raising money; it is making people feel that they have arrived somewhere. This exhibit covers the craft of gathering — the dinners, the group chats that outlive their purpose, the spaces designed so that the right strangers collide. Community, properly built, is compound interest on trust.',
      },
      {
        title: 'Markets & Investing',
        label: 'Exhibit III-04 · Price as information',
        text:
          'A market is the world’s largest ongoing argument, updated by the second. Exhibited: the study of that argument — long-term compounding over short-term noise, the discipline of sitting still, and the understanding that the best position is often the one you do not touch for a decade.',
      },
      {
        title: 'Optimization & Systems Thinking',
        label: 'Exhibit III-05 · Find the loop, then the lever',
        text:
          'The habit of seeing everything — mornings, portfolios, friendships, cities — as systems with inputs, feedback, and leverage points. Occasionally exhausting for bystanders; consistently useful. The curators observe that the subject cannot encounter a process without quietly redesigning it.',
      },
    ],
  },
  {
    slug: 'gallery-of-objects',
    theme: 'objects',
    numeral: 'IV',
    title: 'Gallery of Objects',
    art: 'objects',
    artTitle: 'Still Life with Time',
    artMedium: 'Oil on canvas',
    artYear: 'Composed slowly, like everything in it',
    tagline: 'Things kept not because they are useful, but because they are right.',
    intro:
      'A quiet room, mostly empty on purpose. What is here has earned its place. This gallery holds the material taste of the collector: scents, timepieces, clothing, and objects whose only function is to be exactly what they are.',
    exhibits: [
      {
        title: 'Fragrances',
        label: 'Exhibit IV-01 · Memory, in a bottle',
        text:
          'Scent is the only sense wired straight to memory, which makes a fragrance collection a private archive of moments. Held here: the favourites — worn sparingly, chosen carefully, each one a season or a city or a version of the self. The museum declines to name them; some things should be encountered in person.',
      },
      {
        title: 'The Record-Player Watch',
        label: 'Exhibit IV-02 · The collection’s hinge',
        text:
          'A watch whose face is a tiny turntable — time told by a record that never stops spinning. The single object where two wings of this museum meet: the Hall of Sound and this gallery shake hands on his wrist. The curators consider it the most Samveg object in existence.',
      },
      {
        title: 'On Design',
        label: 'Exhibit IV-03 · Wall text',
        text:
          'The belief, held firmly, that how a thing is made is part of what it is. Good design here means restraint: the object that does one thing beautifully, the interface that disappears, the room with nothing extra in it. This museum was built to that standard, or tried to be.',
      },
      {
        title: 'Indie Fashion',
        label: 'Exhibit IV-04 · Small labels, quiet clothes',
        text:
          'A wardrobe assembled from makers rather than logos. Independent labels, honest fabrics, cuts that will look right in twenty years. The style equivalent of listening to the B-side first — not to be different, but because that is where the good material tends to hide.',
      },
      {
        title: 'The Collector’s Instinct',
        label: 'Exhibit IV-05 · On keeping beautiful things',
        text:
          'Collecting, done properly, is not accumulation — it is editing. One in, and it must matter. This closing exhibit documents the instinct behind the whole gallery: the slow assembling of a life’s objects, each chosen as if it might someday hang in a museum. As it happens, they now do.',
      },
    ],
  },
  {
    slug: 'hall-of-motion',
    theme: 'motion',
    numeral: 'V',
    title: 'Hall of Motion',
    art: 'motion',
    artTitle: 'Balance Study No. 9',
    artMedium: 'Charcoal and vermilion on paper',
    artYear: 'After many failed attempts, which is the subject of the work',
    tagline: 'Strength, speed, and the discipline underneath both.',
    intro:
      'The ceiling is higher in this hall. It holds the moving parts of the collection: the gymnastics, the training, the racing, the football — and beneath all of it, the same quiet thesis: that mastery is just devotion with a schedule.',
    exhibits: [
      {
        title: 'Gymnastics',
        label: 'Exhibit V-01 · Strength as poetry',
        text:
          'The purest exhibit in this hall: a discipline where the apparatus is the body itself. Stillness held under enormous load; movement that looks effortless precisely because it was not. The collection includes an enduring respect for the iron cross, the planche, and every skill that takes years to hold for seconds.',
      },
      {
        title: 'Fitness Goals',
        label: 'Exhibit V-02 · The ledger of small days',
        text:
          'Displayed here: not the goals themselves, but the accounting method. Progress in this discipline is invisible daily and undeniable yearly. The museum exhibits the training log as a literary form — terse, honest, occasionally aspirational — and notes that the subject’s relationship with it is ongoing.',
      },
      {
        title: 'Formula 1',
        label: 'Exhibit V-03 · Decisions at 300 km/h',
        text:
          'The fastest systems-thinking on Earth. A sport where a tenth of a second is an empire, strategy is played in real time by a hundred engineers, and braking later than the other man is both physics and character. Watched religiously; analysed afterwards like scripture.',
      },
      {
        title: 'Liverpool',
        label: 'Exhibit V-04 · You’ll Never Walk Alone',
        text:
          'Every collection needs one allegiance that defies the collector’s own systems thinking, and this is his. Anfield on a European night; an anthem sung by forty thousand people who mean it. Loyalty here is exhibited in its pure form: unhedged, undiversified, and permanent.',
      },
      {
        title: 'Discipline & Mastery',
        label: 'Exhibit V-05 · Wall text, load-bearing',
        text:
          'The structural column of this hall. Talent is exhibited elsewhere, in other museums; this room honours repetition — the session logged when unmotivated, the skill drilled past boredom into instinct. Mastery, the label reads, is what devotion looks like from the outside.',
      },
    ],
  },
  {
    slug: 'memory-archive',
    theme: 'memory',
    numeral: 'VI',
    title: 'The Nostalgia Wing',
    art: 'memory',
    artTitle: 'The Orange Wrapper',
    artMedium: 'Glow and recollection on board',
    artYear: 'Childhood, exact date unrecorded',
    tagline: 'Some things are valuable not because of what they are, but because of who was there when they happened.',
    intro:
      'The warmest room in the museum, kept a few degrees softer than the rest. Wood floors, golden light, photographs that were never meant for galleries. This wing is not a timeline and it is not a biography — it is a collection of moments, objects, and feelings that made him who he is. Five artifacts stand in the room. Step up to any of them. It should feel like walking into a memory that is glad to see you.',
    exhibits: [],
  },
  {
    slug: 'future-wing',
    theme: 'future',
    numeral: 'VII',
    title: 'The Future Wing',
    art: 'future',
    artTitle: 'The Museum in the Mist',
    artMedium: 'Oil and morning fog',
    artYear: 'Forthcoming',
    tagline: 'A collection of things not yet built.',
    intro:
      'The last wing is not an exhibition; it is a workshop. Four installations stand here — a house, a factory, an archive of dreams, and a museum in miniature — each one a thing that does not exist yet, displayed as though it already does. The sketches on the walls are working drawings, not relics. Nothing in this room is finished, and nothing in this room is nostalgia. Step close to any model and it will let you in.',
    exhibits: [],
  },
]

export const HIDDEN_WING = {
  slug: 'special-exhibition',
  theme: 'special',
  numeral: '∅',
  title: 'Special Exhibition',
  subtitle: 'On Loan from a Private Collection',
  art: 'hidden',
  artTitle: 'Study of Light on a Windowsill',
  artMedium: 'Artist unknown',
  artYear: 'Unlabelled',
  plaque: 'A collection of moments observed by one person.',
}

export const ALL_ROOMS = [...WINGS, HIDDEN_WING]
