import Image from "next/image";
import { skill } from "@/data/skills";
import type { Book } from "@/data/books";
import { Reveal } from "./Reveal";

export function SkillIcon({ name, size = 28 }: { name: string; size?: number }) {
  const s = skill(name);
  if (s.icon) {
    return (
      // SVGs are tiny static files; next/image adds no value for them.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/icons/${s.icon}.svg`}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        className={s.invert ? "invert" : undefined}
      />
    );
  }
  const letters = name.replace(/[^A-Za-z0-9 ]/g, "").split(" ").map((w) => w[0]).join("").slice(0, 2) || name.slice(0, 2);
  return <span className="mono">{letters.length === 1 ? name.slice(0, 2) : letters}</span>;
}

export function SkillTile({ name }: { name: string }) {
  return (
    <span className="tile">
      <span className="tile-ic">
        <SkillIcon name={name} />
      </span>
      {name}
    </span>
  );
}

export function StackChip({ name }: { name: string }) {
  const s = skill(name);
  return (
    <span className="chip">
      {s.icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/icons/${s.icon}.svg`} alt="" width={15} height={15} loading="lazy" className={s.invert ? "invert" : undefined} />
      )}
      {name}
    </span>
  );
}

export function BookCover({ book, priority = false, sizes = "(max-width: 620px) 45vw, 220px" }: { book: Book; priority?: boolean; sizes?: string }) {
  return (
    <div className="cover-wrap">
      <div className="cover">
        {book.cover ? (
          <Image
            src={book.cover}
            alt={`Cover of “${book.title}${book.subtitle ? `: ${book.subtitle}` : ""}”`}
            fill
            sizes={sizes}
            priority={priority}
          />
        ) : (
          <GeneratedCover book={book} />
        )}
      </div>
    </div>
  );
}

function GeneratedCover({ book }: { book: Book }) {
  const [a, b] = book.palette ?? ["#1b2a5c", "#3b4bd8"];
  return (
    <div
      className="cover-gen"
      role="img"
      aria-label={`Cover of “${book.title}” (forthcoming)`}
      style={{ background: `radial-gradient(120% 80% at 80% 10%, ${b} 0%, transparent 55%), linear-gradient(160deg, ${a}, #05070d)`, isolation: "isolate" }}
    >
      <svg className="cg-net" viewBox="0 0 200 300" preserveAspectRatio="none" aria-hidden>
        {Array.from({ length: 14 }).map((_, i) => {
          const x1 = (i * 37) % 200, y1 = (i * 71) % 300, x2 = (i * 53 + 60) % 200, y2 = (i * 29 + 120) % 300;
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeWidth="0.5" />
              <circle cx={x1} cy={y1} r="1.8" fill="#fff" />
            </g>
          );
        })}
      </svg>
      <div className="cg-top">Premier Reference Source</div>
      <div>
        <div className="cg-title">{book.title}</div>
        <div className="cg-ed">{book.editors.filter((e) => e !== "et al.").join(", ")} et al.</div>
      </div>
      <div className="cg-pub">IGI GLOBAL · {book.year}</div>
    </div>
  );
}

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: React.ReactNode; lead?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div className="bg-grid" />
      <div className="bg-glow" style={{ width: 420, height: 420, right: -120, top: -160, background: "var(--accent-soft)" }} />
      <div className="container">
        {/* Above the fold: CSS entrance (no JS wait). The h1 is never hidden, which keeps LCP fast. */}
        <span className="eyebrow enter" style={{ "--d": "0s" } as React.CSSProperties}>{eyebrow}</span>
        <h1 className="enter-t" style={{ "--d": "0.04s" } as React.CSSProperties}>{title}</h1>
        {lead && (
          <p className="lead enter" style={{ "--d": "0.12s" } as React.CSSProperties}>{lead}</p>
        )}
        {children && <div className="enter" style={{ "--d": "0.18s" } as React.CSSProperties}>{children}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, action }: { eyebrow: string; title: React.ReactNode; text?: React.ReactNode; action?: React.ReactNode }) {
  return (
    <Reveal className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {action}
    </Reveal>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; escape "<" to avoid closing the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
