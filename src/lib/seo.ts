import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";

/** Shared social preview image (src/app/opengraph-image.jpg, 1200×630). */
export const OG_IMAGE = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} · Professor of Computer Science & AI`,
  type: "image/jpeg",
};

/**
 * Per-page metadata. Next.js replaces (does not merge) nested `openGraph` /
 * `twitter` objects, so every shared field is repeated here on purpose.
 */
export function pageMeta(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} · ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** schema.org BreadcrumbList for a sub-page. */
export function breadcrumbLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
