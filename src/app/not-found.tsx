import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <div className="code">404</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", margin: "12px 0 14px" }}>This page took a different path</h1>
        <p style={{ color: "var(--muted)", marginBottom: 26 }}>The page you’re looking for doesn’t exist or has moved.</p>
        <Link href="/" className="btn btn-primary">
          <ArrowLeft aria-hidden /> Back home
        </Link>
      </div>
    </section>
  );
}
