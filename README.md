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

- `src/pages/`: English routes at `/` and Turkish routes at `/tr/`
- `src/data/`: bilingual services, training, and engineering insight content
- `src/layouts/`: shared site shell and metadata
- `src/styles/`: global design tokens and typography
- `public/`: Ayti.Tech/Ottoo branding, client logos, and crawler directives

## Hosting

The preview environment is `https://aytitech.github.io`. The `ayti.tech` custom domain remains on WordPress until migration is explicitly approved.
