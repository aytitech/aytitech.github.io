# Handoff

## Status

- Repository: `aytitech/aytitech.github.io`
- Hosting target: GitHub Pages organization site
- Stack: Astro, TypeScript, static output
- Languages: English at `/`, Turkish at `/tr/`; legacy `/en/` pages remain for compatibility and are excluded from the sitemap
- Deployment: GitHub Actions workflow on `main`
- Custom domain: intentionally not configured; `ayti.tech` remains on WordPress

## Implemented

- Bilingual home, services, training, media, about, and insights pages
- Detail routes for all 12 services and 10 enterprise training programmes
- Featured Sovereign Cloud Native Platform service for on-prem, European provider, public-cloud, and hybrid deployments
- Sovereign service covers assessment, open-source platform foundations, managed operations, and team enablement
- Seven migrated insight topics with Turkish and English detail routes
- Original Ayti.Tech and Ottoo logos, legacy brand palette, and client logo strip
- Official Ayti.Tech logo used as the site favicon
- Expertise strip: AWS, Azure, Kubernetes, Cloud Native, and Open Source
- Istanbul-based organization with a Berlin presence
- Cafe Ayti removed from the media offering
- Shared responsive layout, self-hosted variable font, canonical URLs, and hreflang metadata
- Microsoft Bookings, WhatsApp, and `iletisim@ayti.tech` contact paths
- Filtered sitemap, robots, favicon, and GitHub Pages deployment workflow

## Verified

- `npm run build`: 84 static pages
- Mobile viewport at 390 px: no horizontal overflow
- Desktop viewport at 1440 px: hero fits the first viewport
- Internal crawl: no 404 responses, broken brand images, or incorrect email links
- Workspace and Astro configuration: no editor diagnostics

## Pending approval

- Commit and push the expanded bilingual content and branding update
- Review the public preview before any `ayti.tech` DNS or custom-domain change
