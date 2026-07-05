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
  index.css              design tokens, grain overlay, globals
```

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
