# The Glyptotek of Samveg

An immersive digital museum — a collection of music, ideas, dreams, objects,
and stories, curated over a lifetime. The homepage is a grand entrance hall
(limestone walls, a glass dome, drifting dust, indoor greenery, a marble
floor) where seven framed artworks hang as portals into the wings of the
museum. An eighth picture hangs near the exit, looking perfectly ordinary —
until you stand in front of it.

## The wings

| Wing | Route |
| --- | --- |
| I · Hall of Sound | `/hall-of-sound` |
| II · Hall of Curiosities | `/hall-of-curiosities` |
| III · Founder Wing | `/founder-wing` |
| IV · Gallery of Objects | `/gallery-of-objects` |
| V · Hall of Motion | `/hall-of-motion` |
| VI · Memory Archive | `/memory-archive` |
| VII · The Future Wing | `/future-wing` |
| ∅ · Special Exhibition (hidden) | `/special-exhibition` |

## Stack

Plain React + Vite, no UI framework. Every artwork is hand-drawn inline SVG;
every room's atmosphere is CSS custom properties themed per wing. Typography
is Cormorant Garamond / Italiana / Jost from Google Fonts (loaded via
`<link>` in `index.html`). The "ambience" toggle synthesizes the sound of a
large stone hall live with the Web Audio API — no audio files.

```
src/
  museum/
    wings.js              the catalogue — every wing, exhibit, and label
    Artworks.jsx          the eight SVG artworks
    artworkMap.js         which work hangs at which wing's door
    EntranceHall.jsx/.css the homepage: dome, plaque, walls, hidden frame
    Wing.jsx/.css         generic wing renderer + per-room atmospheres
    SpecialExhibition.jsx/.css  the room that isn't on the map
    Ambience.jsx/.css     Web Audio hall-tone toggle
  App.jsx                 routes + slow room-to-room transition
  index.css               design tokens (limestone, marble, walnut, brass)
```

Routing is client-side (`react-router-dom`, `BrowserRouter`). Deploying to a
static host needs a catch-all rewrite to `index.html` so a hard refresh on
`/hall-of-sound` doesn't 404 (e.g. Netlify's `_redirects` with
`/* /index.html 200`).

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Customize

- All exhibit copy lives in `src/museum/wings.js` — one file, every label.
- Room atmospheres are the `--room-*` custom properties in
  `src/museum/Wing.css`.
- The hidden room's contents live in `HIDDEN_WING` in `wings.js`.
