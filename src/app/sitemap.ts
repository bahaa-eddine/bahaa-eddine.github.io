import type { MetadataRoute } from "next";
import { NAV, SITE_URL } from "@/lib/site";
import { books } from "@/data/books";

// Required for `output: "export"` (GitHub Pages)
export const dynamic = "force-static";

/** Images listed per page help Google Images index photos and book covers. */
const IMAGES: Record<string, string[]> = {
  "/": ["/hero-lectern.jpg", ...books.flatMap((b) => (b.cover ? [b.cover] : []))],
  "/about": ["/about-seminar.jpg", "/photo.jpg"],
  "/books": books.flatMap((b) => (b.cover ? [b.cover] : [])),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return NAV.map((n) => ({
    url: `${SITE_URL}${n.href === "/" ? "" : n.href}`,
    lastModified: now,
    changeFrequency: n.href === "/publications" || n.href === "/books" ? "monthly" : "yearly",
    priority: n.href === "/" ? 1 : n.href === "/contact" ? 0.5 : 0.8,
    images: IMAGES[n.href]?.map((p) => `${SITE_URL}${p}`),
  }));
}
