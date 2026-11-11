import { profile } from "@/data/profile";

/** Small branded monograms for academic / social profiles (no trademark artwork needed). */
// Colours checked for WCAG AA contrast (≥ 4.5:1) at small sizes.
const MARKS = {
  scholar: { label: "Google Scholar", short: "G", bg: "#1A73E8", fg: "#ffffff", sub: "Citations" },
  orcid: { label: "ORCID", short: "iD", bg: "#A6CE39", fg: "#1f2d00", sub: "0000-0002-3206-5162" },
  scopus: { label: "Scopus", short: "Sc", bg: "#B8520D", fg: "#ffffff", sub: "Author 57218899003" },
  researchgate: { label: "ResearchGate", short: "RG", bg: "#00CCBB", fg: "#00332f", sub: "Papers & network" },
  linkedin: { label: "LinkedIn", short: "in", bg: "#0A66C2", fg: "#ffffff", sub: "Professional profile" },
} as const;

export type BrandKey = keyof typeof MARKS;
export const BRAND_KEYS = Object.keys(MARKS) as BrandKey[];

export function BrandMark({ k, size = 22 }: { k: BrandKey; size?: number }) {
  const m = MARKS[k];
  return (
    <span
      aria-hidden
      style={{
        width: size,
        height: size,
        borderRadius: k === "orcid" ? "50%" : 6,
        background: m.bg,
        color: m.fg,
        display: "inline-grid",
        placeItems: "center",
        fontWeight: 700,
        fontSize: size * 0.46,
        fontFamily: "var(--font-sans)",
        letterSpacing: "-0.02em",
        flexShrink: 0,
      }}
    >
      {m.short}
    </span>
  );
}

export const brandInfo = (k: BrandKey) => ({ ...MARKS[k], href: profile.links[k] });

export function ProfileChips() {
  return (
    <>
      {BRAND_KEYS.map((k) => {
        const b = brandInfo(k);
        return (
          <a key={k} className="chip" href={b.href} target="_blank" rel="noopener noreferrer me" title={b.label}>
            <BrandMark k={k} size={18} />
            {b.label}
          </a>
        );
      })}
    </>
  );
}
