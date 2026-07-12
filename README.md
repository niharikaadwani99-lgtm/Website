# The Glyptotek of Samveg

An immersive digital museum — a collection of music, ideas, dreams, objects,
and stories, curated over a lifetime. The homepage is a walkable 3D entrance
hall built from CSS perspective planes: a real photograph of the Ny Carlsberg
Glyptotek's Winter Garden fills the far wall, limestone side walls carry
seven framed artworks hanging in real perspective as portals into the wings
(their brass plates reveal themselves only when you approach), and moving
the pointer looks around the room. An eighth picture hangs low on the right
wall, looking perfectly ordinary — until you stand in front of it.

Every wing is itself a furnished 3D room in its own atmosphere — panelled
walls with picture rails and skirting, a rug, a walnut bench, planters,
gallery light pooling over each work. The works on the walls are clickable
and open museum label cards with the exhibit's story.

## The wings

| Wing | Route |
| --- | --- |
| I · Hall of Sound | `/hall-of-sound` |
| II · Founder Wing | `/founder-wing` |
| III · Gallery of Objects | `/gallery-of-objects` |
| IV · The Nostalgia Wing | `/memory-archive` |
| V · The Future Wing | `/future-wing` |
| ∅ · Special Exhibition (hidden) | `/special-exhibition` |

## Stack

Plain React + Vite, no UI framework. The rooms are true CSS 3D — five
perspective planes (back wall, side walls, floor, ceiling) with pointer
"look around" parallax; note the planes stop short of the camera plane, as
quads that graze it project to near-infinite sizes that Chromium
mis-rasterizes. Every artwork is hand-drawn inline SVG; every room's
atmosphere is CSS custom properties themed per wing. Typography is Cormorant
Garamond / Italiana / Jost from Google Fonts. The "ambience" toggle
synthesizes the sound of a large stone hall live with the Web Audio API.
Small screens fall back to a flat, scrollable version of each room.

```
src/
  museum/
    assets/               photographs of the Winter Garden (entrance walls)
    wings.js              the catalogue — every wing, exhibit, and label
    Artworks.jsx          the eight portal SVG artworks
    artworkMap.js         which work hangs at which wing's door
    ExhibitArt.jsx        generative studies hung beside each exhibit
    Props.jsx             bench, planter, pedestal — the room furniture
    Room3D.jsx/.css       the 3D room shell + WallFrame/RoomProp + labels
    ExhibitModal.jsx      the label card opened by clicking a work
    EntranceHall.jsx/.css the homepage courtyard room + flat fallback
    Wing.jsx/.css         wing rooms + per-room atmospheres + fallback
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
