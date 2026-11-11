"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Counts up from 0 to `value` when visible. Server-rendered with the final value (SEO / no-JS). */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    let raf = 0;
    let done: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setDisplay(Math.round(value * (1 - Math.pow(1 - t, 4))));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      setDisplay(0);
      raf = requestAnimationFrame(tick);
      // Guarantee the final value even if frames are throttled (background tabs, crawlers).
      done = setTimeout(() => setDisplay(value), duration + 200);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(done);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-US")}
      {suffix && <sup>{suffix}</sup>}
    </span>
  );
}

/** Types and deletes a rotating list of phrases. The first phrase is server-rendered. */
export function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState(words[0]);
  const [phase, setPhase] = useState<"hold" | "delete" | "type">("hold");

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let t: ReturnType<typeof setTimeout> | undefined;
    if (phase === "hold") t = setTimeout(() => setPhase("delete"), 2200);
    else if (phase === "delete") {
      if (text.length === 0) {
        setI((n) => (n + 1) % words.length);
        setPhase("type");
      } else t = setTimeout(() => setText(text.slice(0, -1)), 28);
    } else {
      const next = words[i];
      if (text === next) setPhase("hold");
      else t = setTimeout(() => setText(next.slice(0, text.length + 1)), 55);
    }
    return () => clearTimeout(t);
  }, [phase, text, i, words]);

  return (
    <span>
      <span className="sr-only">{words.join(" · ")}</span>
      <span aria-hidden>
        <span style={{ color: "var(--accent)" }}>&gt;</span> {text}
        <span className="caret" />
      </span>
    </span>
  );
}

/** Horizontal bar that grows to `pct` when scrolled into view (CSS-driven). */
export function Bar({ pct, delay = 0 }: { pct: number; delay?: number }) {
  return (
    <div className="bar-track">
      <div className="bar-fill" data-reveal="" style={{ width: `${pct}%`, "--rd": `${delay}s` } as CSSProperties} />
    </div>
  );
}

/** Gently floating badge (CSS keyframes). */
export function Float({ children, className, delay = 0, style }: { children: ReactNode; className?: string; delay?: number; style?: CSSProperties }) {
  return (
    <div className={`float ${className ?? ""}`} style={{ ...style, "--fd": `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
