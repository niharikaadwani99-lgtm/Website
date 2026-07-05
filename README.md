# gabbtopia — creative dossier

A scrappy React + Vite landing page inspired by a "personal dossier / ID card"
zine aesthetic: kraft paper textures, a crossword-poster project showcase, an
"official" ID card bio, a year-in-review "wrapped" stats section, and a
scrapbook-style contact form.

## Stack

Plain React + Vite, no UI framework — hand-rolled CSS per component using a
shared kraft/cream/pink palette and DM Serif Display / Space Mono / Caveat /
Space Grotesk from Google Fonts (loaded via `<link>` in `index.html`).

## Structure

```
src/
  components/
    Nav.jsx              sticky top nav
    Hero.jsx             intro + envelope-flap divider
    IdCard.jsx           "creative club" ID card bio section
    CrosswordPoster.jsx  reusable project poster tile
    Work.jsx             project grid using CrosswordPoster
    Wrapped.jsx          "year wrapped" stats + envelope card
    Scrapbook.jsx        contact form + polaroid social links
    Footer.jsx
    Deco.jsx             shared tape / stickers / paperclip / stamp bits
  pages/
    Home.jsx              the one-page site (everything above)
    Planner.jsx           /planner — interactive "digital planner" cover
                          that flips open into a spread with editable
                          "belongs to" fields, a clickable photo strip
                          (lightbox), a postcard, and charm nav shortcuts
  index.css               design tokens, grain overlay, globals
```

Routing is client-side (`react-router-dom`, `BrowserRouter`). Deploying to a
static host (Netlify, Vercel, GitHub Pages, etc.) needs a catch-all rewrite to
`index.html` so a hard refresh on `/planner` doesn't 404 — `vite preview`
handles this automatically, but production static hosts need their own
rewrite rule (e.g. Netlify's `_redirects` with `/* /index.html 200`).

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

- Swap the copy in each component (name, projects, stats, socials).
- Colors/fonts are CSS custom properties in `src/index.css` — change once,
  applies everywhere.
- Replace the CSS-gradient "photo" placeholders in `CrosswordPoster.css`
  (`.poster--a/b/c .poster__photo`) with real project imagery when ready.
