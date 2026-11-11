"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { NAV } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {mounted ? (
        <span key={dark ? "moon" : "sun"} className="theme-icon">
          {dark ? <Moon aria-hidden /> : <Sun aria-hidden />}
        </span>
      ) : (
        <Sun aria-hidden style={{ opacity: 0.4 }} />
      )}
    </button>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div ref={bar} className="progress" aria-hidden />
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container">
          <Link href="/" className="brand" aria-label="Bahaa Eddine Elbaghazaoui — home">
            <span className="brand-logo">
              <Image src="/logo.png" alt="" width={40} height={40} priority />
            </span>
            <span className="brand-text">
              <span className="brand-name">B. E. Elbaghazaoui</span>
              <span className="brand-sub">Prof. · PhD · Engineer</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Main">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <button
              type="button"
              className="icon-btn menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X aria-hidden /> : <Menu aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      <nav id="mobile-nav" className={`mobile-nav${open ? " open" : ""}`} aria-label="Mobile" hidden={!open}>
        {NAV.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            {item.label}
            <ArrowRight size={20} aria-hidden />
          </Link>
        ))}
      </nav>
    </>
  );
}
