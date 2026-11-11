import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { EmailList } from "./EmailList";
import { NAV } from "@/lib/site";
import { profile } from "@/data/profile";
import { BRAND_KEYS, BrandMark, brandInfo } from "./Brand";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="brand">
              <span className="brand-logo">
                <Image src="/logo.png" alt="" width={40} height={40} />
              </span>
              <span className="brand-text">
                <span className="brand-name">{profile.name}</span>
                <span className="brand-sub">{profile.title}</span>
              </span>
            </Link>
            <p>{profile.tagline}</p>
            <div className="socials">
              {BRAND_KEYS.map((k) => {
                const b = brandInfo(k);
                return (
                  <a key={k} href={b.href} className="icon-btn" target="_blank" rel="noopener noreferrer me" aria-label={b.label} title={b.label}>
                    <BrandMark k={k} size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2>Explore</h2>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2>Contact</h2>
            <EmailList compact />
            <p style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--muted)", fontSize: 14, marginTop: 14 }}>
              <MapPin size={17} aria-hidden style={{ color: "var(--accent)" }} /> {profile.affiliationShort}, Morocco
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span>Tech icons: Devicon (MIT) · Map data © OpenStreetMap contributors</span>
        </div>
      </div>
    </footer>
  );
}
