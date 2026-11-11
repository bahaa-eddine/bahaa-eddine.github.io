/**
 * Canonical site URL used for SEO (canonical links, sitemap, Open Graph).
 * Override with NEXT_PUBLIC_SITE_URL if you later attach a custom domain.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://bahaa-eddine.github.io").replace(/\/$/, "");

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
