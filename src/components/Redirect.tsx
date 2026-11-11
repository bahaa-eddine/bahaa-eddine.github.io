import Link from "next/link";
import type { Metadata } from "next";

/**
 * Static redirect page for old URLs (GitHub Pages has no server redirects).
 * Uses an instant meta refresh plus a canonical link so search engines
 * transfer the old URL to the new page.
 */
export function redirectMeta(to: string): Metadata {
  return {
    title: "Moved",
    robots: { index: false, follow: true },
    alternates: { canonical: to },
  };
}

export function RedirectPage({ to, label }: { to: string; label: string }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${to}`} />
      <section className="notfound">
        <div className="container">
          <h1 style={{ fontSize: "clamp(26px, 4vw, 36px)", marginBottom: 14 }}>This page has moved</h1>
          <p style={{ color: "var(--muted)" }}>
            Continue to <Link href={to} style={{ color: "var(--accent)", fontWeight: 600 }}>{label}</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
