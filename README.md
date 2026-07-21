# Niharika Adwani — studio desk

A portfolio site for an independent fashion designer & consultant, built to
feel like a scrapbook / design journal / memory box rather than a standard
portfolio: a cluttered "desk" homepage where clickable objects (a sketchbook,
a folder, a cassette tape, a crossword clipping, a planner page, a passport,
a secret drawer) open into the rest of the site.

## Stack

Plain React + Vite + `react-router-dom`, no UI framework — hand-rolled CSS
per page using a shared ivory/sage/chocolate/burgundy palette and
Caveat + Kalam (handwriting) / Source Serif 4 (editorial body) / Special
Elite (typewriter) from Google Fonts.

## Structure

```
src/
  components/
    Nav.jsx / Footer.jsx
    Deco.jsx        shared paper physics: Tape, StarSticker, Paperclip,
                     Stamp, RingHoles, FoldedCorner, HandArrow, FolderTab,
                     HiddenNote (click-to-reveal sticky note)
    Cassette.jsx     the "current playlist" easter egg (tape deck UI +
                     tracklist, no real audio wired up yet)
  pages/
    Desk.jsx         "/" — the homepage: scattered clickable objects,
                     3 hidden notes, the "things I love" clipping teaser,
                     and the secret drawer
    About.jsx        "/about" — scrapbook spread
    Services.jsx     "/services" — binder with pull-tab dividers, flowing
                     into a pinboard roadmap ("how I help brands"). The
                     Desk's blueprint object deep-links to
                     #how-i-help-brands on this page.
    Portfolio.jsx    "/portfolio" — pinned moodboard wall with a lightbox
    WorkWithMe.jsx   "/work-with-me" — passport-styled "what it's like to
                     work with me" (aimed at international founders),
                     flowing into a "let's talk" booking section (planner
                     page with a scheduling-embed slot — placeholder, drop
                     in a real Calendly embed). The Desk's "book a call"
                     planner object deep-links to #book-a-call on this
                     page.
  index.css          design tokens, paper/photo grain overlays, globals
```

Routing is client-side (`BrowserRouter`). Deploying to a static host needs a
catch-all rewrite to `index.html` so a hard refresh on e.g. `/about` doesn't
404 (Netlify: `_redirects` with `/* /index.html 200`).

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

## What's deliberately placeholder / next steps

- **Book a call**: the scheduling area is a styled placeholder. Swap in a
  real Calendly (or similar) embed — see the comment in `WorkWithMe.jsx`.
- **Cassette player**: UI-only nostalgia, no real audio. Point it at a
  Spotify/Apple Music embed, or wire up actual audio files, when ready.
- **Contact/email links**: currently `mailto:hello@niharikaadwani.com` —
  update to the real address.
- **Not built yet** (flagged in the brief as its own follow-up): the mini
  crossword game (answers: DESIGN, PRINT, BLOCK, PARSONS, JAIPUR, NAAV) and
  the Connections-style category game. The "things I love" crossword
  clipping on the desk currently opens a static list with a "coming soon"
  note instead of the real puzzle, so the answers stay unspoiled until the
  actual game exists.
- Photos, sketches, and swatches throughout (About, Portfolio) are CSS
  gradient placeholders — swap in real images when available.

## Customize

- Copy, playlist tracks, portfolio items, and service descriptions are all
  plain data at the top of their respective page files.
- Colors/fonts are CSS custom properties in `src/index.css`.
