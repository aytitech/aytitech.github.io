# Handoff

## Status

- Repository: `aytitech/aytitech.github.io`
- Hosting target: GitHub Pages organization site
- Stack: Astro, TypeScript, static output
- Languages: Turkish at `/`, English at `/en/`
- Deployment: GitHub Actions workflow on `main`
- Custom domain: intentionally not configured; `ayti.tech` remains on WordPress

## Implemented

- Bilingual home, services, training, about, and insights pages
- Seven migrated insight topics with Turkish and English detail routes
- Shared responsive layout and self-hosted variable font
- Microsoft Bookings, WhatsApp, and email contact paths
- Sitemap, robots, favicon, and GitHub Pages deployment workflow

## Verified

- `npm run build`: 24 static pages
- Mobile viewport at 390 px: no horizontal overflow
- Desktop viewport at 1440 px: hero fits the first viewport
- Workflow and Astro configuration: no editor diagnostics

## Pending approval

- Rename the local branch from `master` to `main`
- Commit and push the initial implementation
- Enable GitHub Pages with GitHub Actions if the repository setting does not activate automatically
- Review the public preview before any `ayti.tech` DNS or custom-domain change
