# Handoff

## Status

- Repository: `aytitech/aytitech.github.io`
- Hosting target: GitHub Pages organization site
- Stack: Astro, TypeScript, static output
- Languages: English at `/`, Turkish at `/tr/`; legacy `/en/` pages remain for compatibility and are excluded from the sitemap
- Deployment: GitHub Actions workflow on `main`
- Custom domain: `ayti.tech` is live on GitHub Pages with HTTPS enforced

## Implemented

- Bilingual home, services, training, media, about, and insights pages
- Detail routes for all 13 services and 10 enterprise training programmes
- Featured Sovereign Cloud Native Platform service for on-prem, European provider, public-cloud, and hybrid deployments
- Sovereign service covers assessment, open-source platform foundations, managed operations, and team enablement
- Seven migrated insight topics with Turkish and English detail routes
- Original Ayti.Tech and Ottoo logos, legacy brand palette, and client logo strip
- Official Ayti.Tech logo used as the site favicon
- Expertise strip: AWS, Azure, Kubernetes, Cloud Native, and Open Source
- Istanbul-based organization with a Berlin presence
- Cafe Ayti removed from the media offering
- Shared responsive layout, self-hosted variable font, canonical URLs, and hreflang metadata
- Open Graph/Twitter metadata with a 1200x630 branded social preview
- Organization, WebSite, Service, Course, and Article Schema.org structured data
- Google Search Console meta verification retained from the previous site
- Legacy `/en/` compatibility pages are `noindex, follow`; canonical English and Turkish routes remain indexable
- Responsive, JavaScript-free mobile navigation with language and contact access
- Microsoft Bookings, WhatsApp, and `iletisim@ayti.tech` contact paths
- Filtered sitemap, robots, favicon, and GitHub Pages deployment workflow

## Verified

- `npm run build`: 84 static pages
- Mobile viewport at 390 px: no horizontal overflow
- Mobile menu at 390 px: all six navigation targets visible and keyboard-accessible
- Desktop viewport at 1440 px: hero fits the first viewport
- Internal crawl: no 404 responses, broken brand images, or incorrect email links
- Workspace and Astro configuration: no editor diagnostics
- Automated SEO audit: 84 pages, no missing critical metadata, no invalid JSON-LD, and no overlong indexable titles

## Pending action

- In Google Search Console, confirm the existing `https://ayti.tech/` property or add it, then submit `https://ayti.tech/sitemap-index.xml`
