# Bahaa Eddine Elbaghazaoui — Portfolio

Multi-page academic & engineering portfolio built with **Next.js (App Router) + React 19**, exported as a static site and published on **GitHub Pages**: <https://bahaa-eddine.github.io>

Pages: Home · About · Teaching (interactive map) · Books · Publications · Experience · Skills · Contact

## Run locally

```bash
npm install
npm run dev        # development server: http://localhost:3000
npm run build      # static export into ./out
npm start          # preview ./out exactly as GitHub Pages serves it: http://localhost:3000
```

## Deployment (automatic)

Every push to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes `./out` to GitHub Pages. No manual step is needed.

- Repository **Settings → Pages → Source** must be **GitHub Actions**.
- Follow a deploy in the repository's **Actions** tab; re-run one manually with **Run workflow**.

Optional repository variables (**Settings → Secrets and variables → Actions → Variables**):

| Variable | Purpose |
| ---- | ---- |
| `SITE_URL` | Custom domain, e.g. `https://elbaghazaoui.com` (default `https://bahaa-eddine.github.io`) |
| `GA_ID` | Google Analytics ID (default `G-69RX31DGZW`; set to `off` to disable) |
| `GOOGLE_SITE_VERIFICATION` | Code from Google Search Console (HTML-tag method) |
| `BING_SITE_VERIFICATION` | Code from Bing Webmaster Tools |

After the first deploy, add the site in **Google Search Console** and submit `https://bahaa-eddine.github.io/sitemap.xml`.

## Editing content

All content lives in `src/data/` — no need to touch the components:

| File | What |
| ---- | ---- |
| `profile.ts` | name, bio, emails (academic & professional), links, education, certifications |
| `books.ts` | edited books (covers in `public/books/`) |
| `publications.ts` | articles, chapters, conferences (DOI links), reviewing |
| `teaching.ts` | courses, **map pins (coordinates)**, supervised students |
| `experience.ts` | industry timeline |
| `skills.ts` | skill groups; icons are Devicon SVGs in `public/icons/` |

## Notes on static hosting

- Images are pre-optimised in `public/` (WebP for the large photos).
- Old routes `/research` and `/resume` are small redirect pages.
- `scripts/fix-export.mjs` runs after `next build` to make Next.js prefetch files work on a plain static host.

## Stack

Next.js 16 (static export) · React 19 · CSS animations · next-themes (dark/light) · React-Leaflet + OpenStreetMap (lazy-loaded) · lucide-react · Devicon (MIT) · Google Analytics 4 (loaded after page load).
