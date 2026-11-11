# Bahaa Eddine Elbaghazaoui — Portfolio

Multi-page academic & engineering portfolio built with **Next.js (App Router) + React 19**, statically pre-rendered for SEO and deployed on **Vercel**.

Pages: Home · About · Teaching (interactive map) · Books · Publications · Experience · Skills · Contact

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are static)
```

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com → **Add New Project** → import the repo. Framework is auto-detected (Next.js), no settings needed.
3. Optional environment variables (Vercel → Project → Settings → Environment Variables):

   | Variable | Purpose |
   | ---- | ---- |
   | `NEXT_PUBLIC_SITE_URL` | Your custom domain, e.g. `https://elbaghazaoui.com` (default: the `*.vercel.app` URL). Used for canonical links, sitemap, Open Graph |
   | `NEXT_PUBLIC_GA_ID` | Google Analytics ID (default `G-69RX31DGZW`; set to `off` to disable) |
   | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Code from Google Search Console (HTML-tag method) |
   | `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Code from Bing Webmaster Tools |

4. After the first deploy: add the site in **Google Search Console**, then submit `https://<your-domain>/sitemap.xml`.

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

## Stack

Next.js 16 · React 19 · CSS animations (no animation library) · next-themes (dark/light) · React-Leaflet + OpenStreetMap (lazy-loaded) · lucide-react · Devicon (MIT) · Google Analytics 4 (loaded after page load).
