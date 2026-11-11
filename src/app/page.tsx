import Image from "next/image";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Code2, FlaskConical, GraduationCap, Mail, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { books } from "@/data/books";
import { publications, doiUrl, ME, reviewing } from "@/data/publications";
import { places, totalHours } from "@/data/teaching";
import { experienceYears } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { Counter, Float, Typewriter } from "@/components/Motion";
import { Reveal, RevealItem, Stagger } from "@/components/Reveal";
import { BookCover, JsonLd, SectionHead, SkillIcon, SkillTile } from "@/components/ui";
import { ProfileChips } from "@/components/Brand";
import { MapSection } from "@/components/MapSection";
import { SITE_URL } from "@/lib/site";

const years = experienceYears;

export default function HomePage() {
  const latest = publications.filter((p) => p.doi).slice(0, 4);
  const marquee = [...new Set(skillGroups.flatMap((g) => g.items))].slice(0, 30);

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: profile.name,
    givenName: "Bahaa Eddine",
    familyName: "Elbaghazaoui",
    alternateName: ["B. E. Elbaghazaoui", "Elbaghazaoui Bahaa Eddine"],
    url: SITE_URL,
    image: [`${SITE_URL}/photo.jpg`, `${SITE_URL}/hero-lectern.jpg`],
    email: profile.emails.map((e) => `mailto:${e.address}`),
    description: profile.tagline,
    jobTitle: ["Professor of Computer Science", "Technical Leader"],
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "École Nationale des Sciences Appliquées de Béni Mellal (ENSA BM), Sultan Moulay Slimane University",
      address: { "@type": "PostalAddress", addressLocality: "Béni Mellal", addressCountry: "MA" },
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Ibn Tofail University" },
      { "@type": "CollegeOrUniversity", name: "ENSA Khouribga" },
    ],
    hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "PhD in Computer Science and Artificial Intelligence" },
    knowsAbout: profile.interests,
    knowsLanguage: ["ar", "fr", "en"],
    sameAs: Object.values(profile.links),
  };

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: profile.name,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: `${profile.name} · Professor of Computer Science & AI`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${SITE_URL}/#person` },
        dateModified: new Date().toISOString(),
      },
      person,
    ],
  };

  return (
    <>
      <JsonLd data={ld} />

      {/* ——— Hero ——— */}
      <section className="hero">
        <div className="bg-grid" />
        <div className="bg-glow" style={{ width: 520, height: 520, left: -200, top: -220, background: "var(--accent-soft)" }} />
        <div className="bg-glow" style={{ width: 380, height: 380, right: -120, bottom: -60, background: "var(--warm-soft)" }} />
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="enter" style={{ "--d": "0s" } as CSSProperties}>
                <span className="chip">
                  <span className="live-dot" aria-hidden /> Teaching at {profile.affiliationShort} · Morocco
                </span>
              </div>
              <div className="enter-t" style={{ "--d": "0.04s" } as CSSProperties}>
                <h1>
                  Bahaa Eddine <span className="accent">Elbaghazaoui</span>
                </h1>
              </div>
              <div className="enter" style={{ "--d": "0.12s" } as CSSProperties}>
                <p className="roles">
                  <Typewriter words={profile.roles} />
                </p>
              </div>
              <div className="enter" style={{ "--d": "0.18s" } as CSSProperties}>
                <p className="lead">{profile.tagline}</p>
              </div>
              <div className="enter" style={{ "--d": "0.24s" } as CSSProperties}>
                <div className="hero-cta">
                  <Link href="/books" className="btn btn-primary">
                    <BookOpen aria-hidden /> Explore my books <ArrowRight className="arrow" aria-hidden />
                  </Link>
                  <Link href="/publications" className="btn btn-ghost">
                    Publications
                  </Link>
                  <Link href="/contact" className="btn btn-ghost">
                    <Mail aria-hidden /> Contact
                  </Link>
                </div>
              </div>
              <div className="enter" style={{ "--d": "0.3s" } as CSSProperties}>
                <div className="hero-profiles">
                  <ProfileChips />
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="enter-t" style={{ "--d": "0.08s" } as CSSProperties}>
                <div className="portrait">
                  <Image
                    src="/hero-lectern.jpg"
                    alt="Professor Bahaa Eddine Elbaghazaoui speaking at a lectern, holding a scientific publication"
                    fill
                    priority
                    sizes="(max-width: 900px) 78vw, 420px"
                  />
                </div>
                <div className="portrait-ring" aria-hidden />
              </div>
              <Float className="float-chip chip-phd">
                <span className="ic"><GraduationCap size={17} aria-hidden /></span>
                <span>PhD · CS &amp; AI<small>Ibn Tofail University</small></span>
              </Float>
              <Float className="float-chip chip-java" delay={0.4}>
                <SkillIcon name="Java" size={26} />
                <span>Java · Spring<small>OCP certified</small></span>
              </Float>
              <Float className="float-chip chip-books" delay={0.8}>
                <span className="ic" style={{ background: "var(--warm-soft)", color: "var(--warm)" }}><BookOpen size={17} aria-hidden /></span>
                <span>5 books edited<small>IGI Global</small></span>
              </Float>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="stats" role="list">
              <div className="stat" role="listitem">
                <div className="stat-num"><Counter value={books.length} /></div>
                <div className="stat-label">Scientific books edited</div>
              </div>
              <div className="stat" role="listitem">
                <div className="stat-num"><Counter value={publications.length} suffix="+" /></div>
                <div className="stat-label">Papers & chapters</div>
              </div>
              <div className="stat" role="listitem">
                <div className="stat-num"><Counter value={Math.floor(totalHours / 100) * 100} suffix="+" /></div>
                <div className="stat-label">Hours taught & trained</div>
              </div>
              <div className="stat" role="listitem">
                <div className="stat-num"><Counter value={reviewing.total} suffix="+" /></div>
                <div className="stat-label">Peer reviews for journals</div>
              </div>
              <div className="stat" role="listitem">
                <div className="stat-num"><Counter value={years} suffix="+" /></div>
                <div className="stat-label">Years building software</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— Three pillars ——— */}
      <section className="section-tight">
        <div className="container">
          <SectionHead eyebrow="What I do" title={<>Teaching, research <em>and</em> engineering</>} />
          <Stagger className="pillars">
            <RevealItem className="card card-hover pillar">
              <Link href="/teaching" style={{ display: "contents" }}>
                <span className="ic"><GraduationCap aria-hidden /></span>
                <h3>Teaching</h3>
                <p>
                  Software architecture, databases & PL/SQL, software quality, AI and cloud for engineering and master&apos;s
                  students, plus training for ministries and companies.
                </p>
                <span className="more">See where I teach <ArrowRight aria-hidden /></span>
              </Link>
            </RevealItem>
            <RevealItem className="card card-hover pillar">
              <Link href="/publications" style={{ display: "contents" }}>
                <span className="ic"><FlaskConical aria-hidden /></span>
                <h3>Research</h3>
                <p>
                  Data profiling, machine learning and generative AI for prediction, fake-news detection and cybersecurity,
                  published with Springer, IEEE, IAES and IGI Global.
                </p>
                <span className="more">Read the papers <ArrowRight aria-hidden /></span>
              </Link>
            </RevealItem>
            <RevealItem className="card card-hover pillar">
              <Link href="/experience" style={{ display: "contents" }}>
                <span className="ic"><Code2 aria-hidden /></span>
                <h3>Engineering</h3>
                <p>
                  Tech lead on national platforms such as Data.gov.ma and E-Himaya. Full-stack Java, Kotlin, Spring and React,
                  from microservices to mobile.
                </p>
                <span className="more">View experience <ArrowRight aria-hidden /></span>
              </Link>
            </RevealItem>
          </Stagger>
        </div>
      </section>

      {/* ——— Books ——— */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Edited volumes"
            title="Books I’ve edited"
            text="Five research volumes with IGI Global Scientific Publishing, on generative AI, cybersecurity, data architectures and DevSecOps."
            action={<Link href="/books" className="btn btn-ghost btn-sm">All books <ArrowRight className="arrow" aria-hidden /></Link>}
          />
          <Stagger className="books-row" gap={0.09}>
            {books.map((b, i) => (
              <RevealItem key={b.slug}>
                <Link href={`/books#${b.slug}`} className="book-mini">
                  <BookCover book={b} priority={i < 2} />
                  <div>
                    <h3>{b.title}</h3>
                    <div className="meta">{b.status === "forthcoming" ? "Forthcoming" : b.year} · IGI Global</div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ——— Map ——— */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="On the map"
            title="Where I teach"
            text="I am a permanent professor at ENSA Béni Mellal. Before that I lectured at Ibn Tofail University in Kénitra, where I also earned my PhD."
            action={<Link href="/teaching" className="btn btn-ghost btn-sm">Courses & supervision <ArrowRight className="arrow" aria-hidden /></Link>}
          />
          <Reveal>
            <MapSection places={places} />
          </Reveal>
        </div>
      </section>

      {/* ——— Latest publications ——— */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Recent work"
            title="Latest publications"
            action={<Link href="/publications" className="btn btn-ghost btn-sm">All {publications.length} publications <ArrowRight className="arrow" aria-hidden /></Link>}
          />
          <Stagger className="two-col">
            {latest.map((p) => (
              <RevealItem key={p.title}>
                <a href={doiUrl(p.doi!)} target="_blank" rel="noopener noreferrer" className="card card-hover pub" style={{ height: "100%", gridTemplateColumns: "1fr" }}>
                  <div className="pub-meta">
                    <span className="badge">{p.year}</span>
                    {p.badges?.map((b) => <span key={b} className="badge badge-q1">{b}</span>)}
                  </div>
                  <h3>{p.title}</h3>
                  <p className="authors">
                    {p.authors.map((a, i) => (
                      <span key={a}>{a === ME ? <strong>{a}</strong> : a}{i < p.authors.length - 1 ? ", " : ""}</span>
                    ))}
                  </p>
                  <p className="venue">{p.venue}</p>
                  <span className="more" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--accent)", fontWeight: 600, fontSize: 14, marginTop: 8 }}>
                    Read via DOI <ArrowUpRight size={15} aria-hidden />
                  </span>
                </a>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ——— Skills marquee ——— */}
      <section className="section-tight">
        <div className="container">
          <SectionHead
            eyebrow="Toolbox"
            title="Technologies I teach & ship"
            action={<Link href="/skills" className="btn btn-ghost btn-sm">All skills <ArrowRight className="arrow" aria-hidden /></Link>}
          />
        </div>
        <div className="marquee" aria-label="Technologies">
          <div className="marquee-track">
            {[...marquee, ...marquee].map((s, i) => (
              <span key={i} aria-hidden={i >= marquee.length}>
                <SkillTile name={s} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <div className="bg-grid" />
              <Sparkles size={28} aria-hidden style={{ margin: "0 auto 14px", color: "var(--warm)" }} />
              <h2>Let’s work on something meaningful</h2>
              <p>
                Research collaboration, book chapters, thesis supervision, guest lectures or technical training: I’m always open to a good conversation.
              </p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary"><Mail aria-hidden /> Get in touch</Link>
                <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Google Scholar <ArrowUpRight aria-hidden /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
