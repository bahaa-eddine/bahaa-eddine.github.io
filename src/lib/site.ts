/**
 * Canonical site URL used for SEO (canonical links, sitemap, Open Graph).
 * On Vercel, set NEXT_PUBLIC_SITE_URL to your custom domain once you have one.
 * Otherwise the production *.vercel.app domain is detected automatically.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const SITE_NAME = "Bahaa Eddine Elbaghazaoui";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/teaching", label: "Teaching" },
  { href: "/books", label: "Books" },
  { href: "/publications", label: "Publications" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
] as const;
