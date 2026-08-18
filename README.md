# Ayti.Tech website

The bilingual corporate website for [Ayti.Tech](https://ayti.tech), built as a fully static Astro site and deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

The local site is available at `http://localhost:4321`.

## Validation

```bash
npm run build
```

The production output is written to `dist/`. Every push to `main` deploys the output to GitHub Pages.

## Structure

- `src/pages/`: Turkish and English routes
- `src/data/insights.ts`: bilingual engineering insight content
- `src/layouts/`: shared site shell and metadata
- `src/styles/`: global design tokens and typography
- `public/`: static assets and crawler directives

## Hosting

The preview environment is `https://aytitech.github.io`. The `ayti.tech` custom domain remains on WordPress until migration is explicitly approved.
