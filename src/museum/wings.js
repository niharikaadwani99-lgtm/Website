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
    tagline: 'Music was the first thing he ever collected.',
    intro:
      'Enter slowly. The walls here are dark walnut, the light is low and amber, and somewhere a needle is always finding its groove. This wing holds the sounds Samveg returns to — not merely songs, but rooms he has lived inside. Visitors are encouraged to sit at the listening stations and stay longer than planned.',
    exhibits: [
      {
        title: 'Our Songs',
        label: 'Combined collection · Listening Station 01 · Two curators of record',
        artVariant: 0,
        text:
          'The only work in this museum with two curators. A collection assembled from both sides — songs that remind him of her, songs that remind her of him, filed jointly under “us.” Some were chosen deliberately; most simply attached themselves to a moment and refused to leave. Conservation note: still growing. Neither curator has any intention of completing it.',
        links: [
          { label: 'Listen · Our Songs', url: 'https://open.spotify.com/playlist/39myOtaec9u73Q9oQGpQnP' },
        ],
      },
      {
        title: 'The Intimate Collection',
        label: 'Vols. I & II · Restricted access · Listening Station 02',
        artVariant: 4,
        text:
          'Two volumes, kept behind the curtain of this hall and catalogued with deliberate vagueness. The museum can confirm only that they exist, that they are played with the lights low, and that no further questions will be taken at this time. Headphones are mandatory. Discretion is assumed.',
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
          'A study of the world’s most civilized invention: the listening bar. Tokyo perfected them — small rooms of walnut and vinyl where the bartender is also the selector and the volume is set exactly right. Samveg’s ambition to build one someday is on record; this museum considers the ambition legally binding. Exhibited alongside: the opening night’s programme — a listening-bar set curated for the proprietor by the lender, jazz in exactly the right order.',
        links: [
          { label: 'Listen · The Record Bar Set', url: 'https://open.spotify.com/playlist/495QuOl19C8xfXxPHoMmAK' },
        ],
      },
      {
        title: 'The Top Three, of All Time',
        label: 'The summit of the collection · Listening Station 04',
        artVariant: 1,
        text:
          'Every collection has its summit; this one has three. Innerbloom — nine minutes and thirty-eight seconds of going home without moving, worn structurally thin from repeat listening. Nightwhisper — the sound of driving at 2 a.m. with nowhere urgent to be. And Come Together, whose bassline enters like someone who knows they are welcome. Ranked in no particular order, because the subject refuses to choose. The museum has stopped asking.',
        links: [
          { label: 'Listen · The Top Three', url: 'https://open.spotify.com/playlist/6jKy7ZPdUtkYXNcLhH6sUk' },
        ],
      },
      {
        title: 'Jazz',
        label: 'Standing exhibit · Blue light, brushed drums',
        text:
          'The art of the unrepeatable. Jazz enters this collection as a discipline of listening: improvisation as trust, the band as a conversation, the wrong note played with conviction becoming the right one. The curators note that appreciation deepened with age, as it tends to.',
      },
      {
        title: 'Albums & Playlists',
        label: 'The open stacks · Catalogue in progress',
        text:
          'A playlist is an autobiography written in other people’s words. This shelf holds the favourite albums, the seasonal rotations, the playlists made for drives and for people. Some are public. The best ones were made for an audience of one or two.',
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
    title: 'Memory Archive',
    art: 'memory',
    artTitle: 'The Orange Wrapper',
    artMedium: 'Glow and recollection on board',
    artYear: 'Childhood, exact date unrecorded',
    tagline: 'The permanent collection. Everything else was built on this.',
    intro:
      'Mind the low light — some of these works are delicate. This archive holds the earliest acquisitions: tastes, kitchens, afternoons. Most museums keep their oldest works in the basement. This one keeps them at its heart.',
    exhibits: [
      {
        title: 'Milkybar',
        label: 'Acquisition VI-01 · White chocolate, small hands',
        text:
          'The first great luxury. A bar of white chocolate held like treasure, eaten in a strategy of small bites to make it last. The archive preserves not the chocolate — that vanished decades ago in under four minutes — but the exact feeling of being handed one.',
      },
      {
        title: 'Cadbury Tiffins',
        label: 'Acquisition VI-02 · The orange wrapper itself',
        text:
          'The work that inspired the painting at this archive’s door. Chocolate, biscuit, raisins — engineering, frankly. But the wrapper is the artifact: that particular orange, the crinkle of the foil, the ceremony of opening it slowly. Some colours stay filed under happiness forever. This is one.',
      },
      {
        title: 'Mom’s Yellow Dal',
        label: 'Acquisition VI-03 · The colour of home',
        text:
          'The masterpiece of the archive. Turmeric-gold, tempered with ghee and cumin, served over rice by someone who never once measured anything. Restaurants have attempted reproductions; the archive rules them all inauthentic. The original hangs in memory, permanently on loan from her kitchen.',
      },
      {
        title: 'Mom’s Aloo Sabji',
        label: 'Acquisition VI-04 · Recipe without measurements',
        text:
          'Companion piece to the dal, and equally impossible to forge. Potatoes that somehow taste like a specific house at a specific hour of the evening. The recipe exists nowhere on paper. The archive has confirmed that this is deliberate, and that asking for exact quantities receives the answer “andaaz se” — by feel.',
      },
      {
        title: 'Poha',
        label: 'Acquisition VI-05 · Breakfast, definitive edition',
        text:
          'Flattened rice, mustard seeds, curry leaves, lemon — and over the top, sev, without which the dish is legally incomplete. Exhibited as the taste of unhurried mornings. The archive notes that no hotel breakfast buffet, however elaborate, has ever displaced it.',
      },
      {
        title: 'Family Memories',
        label: 'Acquisition VI-06 · The founding collection',
        text:
          'The rest of the archive, uncatalogued and priceless: festival mornings, power-cut evenings, everyone in one room and the television arguing with itself. Every other wing of this museum — the music, the ambition, the taste — traces its provenance here. The founding donors are thanked on every wall, whether named or not.',
      },
    ],
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
    tagline: 'The only wing still under construction. It always will be.',
    intro:
      'The mist in this room is intentional. These exhibits describe what does not exist yet — collections unassembled, buildings undrawn, communities ungathered. Visitors should treat every label here as a promissory note. The museum intends to honour all of them.',
    quote: 'Build places where ideas, people, and beauty can live together.',
    exhibits: [
      {
        title: 'The Future Collection',
        label: 'Forthcoming VII-01 · Art not yet found',
        text:
          'Somewhere there are paintings, records, and objects that belong in this museum and have not been met yet. This exhibit reserves the wall space. The collector’s only acquisition criterion is unchanged: it must be impossible to walk past.',
      },
      {
        title: 'The Dream Museum',
        label: 'Forthcoming VII-02 · This building, made of stone',
        text:
          'What you are walking through is the maquette. The full-scale version — real limestone, real daylight, a real dome with real dust in the light — is filed under someday. A place where the Hall of Sound has actual turntables and the greenery needs actual watering. The plans are early. The intent is not.',
      },
      {
        title: 'Hacker Houses',
        label: 'Forthcoming VII-03 · The next chapter',
        text:
          'The Founder Wing documents the fascination; this exhibit documents the plan. Houses that make builders out of tenants. Rooms where the rent is paid in ambition. To be constructed in whatever city holds still long enough.',
      },
      {
        title: 'Founder Communities',
        label: 'Forthcoming VII-04 · Institutions that outlive their founders',
        text:
          'The long game: not a company but a commons. Networks of people who build things, held together by something sturdier than a group chat. The blueprint calls for the warmth of a family kitchen and the throughput of an incubator. Both, or it does not count.',
      },
      {
        title: 'Legacy Projects',
        label: 'Forthcoming VII-05 · What remains',
        text:
          'The final exhibit in the museum, left mostly empty on purpose. Legacy, the label suggests, is just curation at the scale of a lifetime — choosing what to build, whom to build it with, and what to leave behind on the walls. This wing will be the last one finished. That is the correct order.',
      },
    ],
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
  intro:
    'You found the door. This room is not on the museum map, and the works in it are not for sale, not for tour, and not entirely for explaining. They are on loan from someone who has spent years observing the subject at close range — and who submitted this collection with the note: “handle with care, he pretends not to be sentimental.”',
  pieces: [
    {
      kind: 'note',
      title: 'Observation No. 1',
      text: 'He listens to Innerbloom the way other people go home. The lender has confirmed the song’s length is nine minutes and thirty-eight seconds — he cited it from memory, unprompted, twice.',
    },
    {
      kind: 'photo',
      title: 'Untitled (A Good Day)',
      caption: 'Photograph, withheld at the lender’s request. The lender remembers this day perfectly; the subject also claims to, but gets the weather wrong every time he tells it. The dispute is ongoing and neither party wants it resolved.',
    },
    {
      kind: 'note',
      title: 'Field Notes, Assorted',
      list: [
        'Reads the entire plaque in museums. All of it. Every museum.',
        'Counts stairs without noticing he is doing it.',
        'Redesigns the queue while standing in the queue.',
        'Still compares every yellow dal to his mother’s. It never quite matches. He finishes it anyway.',
        'Says "one more song" in the exact tone of a man who means four.',
      ],
    },
    {
      kind: 'vitrine',
      title: 'Vitrine of Small Evidence',
      list: [
        'One ticket stub, kept for reasons unstated',
        'A playlist made for an audience of one — see Hall of Sound, open stacks',
        'The good pen, which is never lent out, which was lent out once',
        'An inside joke, catalogued as No. ∞ — label reads only: “you had to be there.” The lender was there.',
      ],
    },
    {
      kind: 'note',
      title: 'Observation No. 2',
      text: 'For a systems thinker, he is remarkably unoptimized about the people he loves. He will reroute an entire day for them and call it "on the way." The lender has checked the map. It is never on the way.',
    },
    {
      kind: 'text',
      title: 'Closing Wall Text',
      text: 'Every museum is an argument that something mattered. Most take committees, centuries, marble. This one took only paying attention to one person for a long time — the music he replays, the food he misses, the cities he sketches, the futures he is quietly building. The lender wishes to state, for the permanent record: it was the easiest argument ever made.',
    },
    {
      kind: 'guestbook',
      text: '— with love, the lender. (The collection remains on loan indefinitely. The interest is compounding.)',
    },
  ],
}

export const ALL_ROOMS = [...WINGS, HIDDEN_WING]
