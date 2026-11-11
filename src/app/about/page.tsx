import Image from "next/image";
import { ArrowUpRight, Award, Building2, Heart, Languages, MapPin } from "lucide-react";
import { EmailList } from "@/components/EmailList";
import { certifications, education, profile } from "@/data/profile";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { PageHero, SectionHead, JsonLd } from "@/components/ui";
import { Reveal, RevealItem, Stagger } from "@/components/Reveal";
import { BRAND_KEYS, BrandMark, brandInfo } from "@/components/Brand";

export const metadata = pageMeta(
  "About",
  "About Prof. Bahaa Eddine Elbaghazaoui: PhD in Computer Science & AI (Ibn Tofail University), software engineer, Oracle-certified Java professional.",
  "/about",
);

export default function AboutPage() {
  const featured = certifications.filter((c) => c.featured);
  const others = certifications.filter((c) => !c.featured);

  return (
    <>
      <JsonLd data={breadcrumbLd("About", "/about")} />
      <PageHero
        eyebrow="About me"
        title={<>Professor, researcher <em>&amp;</em> software engineer</>}
        lead="I connect academic research with industry practice, and I bring real projects from production into the classroom."
      />

      <section className="section-tight">
        <div className="container about-grid">
          <div className="about-photo enter-t">
            <div className="ph">
              <Image
                src="/about-seminar.webp"
                alt="Bahaa Eddine Elbaghazaoui attentively following a session at an academic seminar"
                width={640}
                height={640}
                sizes="(max-width: 860px) 340px, 300px"
                priority
              />
            </div>
            <div className="card facts">
              <div><Building2 aria-hidden /> {profile.affiliation}</div>
              <div><MapPin aria-hidden /> {profile.location}</div>
              <div><Languages aria-hidden /> {profile.languages.map((l) => l.name).join(" · ")}</div>
              <div><Heart aria-hidden /> {profile.hobbies.join(" · ")}</div>
            </div>
            <div className="card facts" style={{ display: "block" }}>
              <EmailList />
            </div>
          </div>

          <div>
            <Reveal className="prose">
              {profile.bio.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{ fontSize: 22, margin: "28px 0 14px", fontFamily: "var(--font-sans)", fontWeight: 600 }}>Research interests</h2>
              <div className="chips">
                {profile.interests.map((i) => (
                  <span key={i} className="chip">{i}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 style={{ fontSize: 22, margin: "32px 0 14px", fontFamily: "var(--font-sans)", fontWeight: 600 }}>Academic profiles</h2>
              <div className="profile-links">
                {BRAND_KEYS.map((k) => {
                  const b = brandInfo(k);
                  return (
                    <a key={k} href={b.href} target="_blank" rel="noopener noreferrer me" className="card card-hover profile-link">
                      <span className="ic"><BrandMark k={k} size={24} /></span>
                      <span>
                        {b.label}
                        <small>{b.sub}</small>
                      </span>
                      <ArrowUpRight className="go" aria-hidden />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Education" title="Degrees" />
          <div className="timeline">
            {education.map((e, i) => (
              <Reveal key={e.year} delay={i * 0.06} className={`t-item${i === 0 ? " current" : ""}`}>
                <span className="t-dot" aria-hidden />
                <article className="card t-card">
                  <div className="t-head">
                    <h3>{e.degree}</h3>
                    <span className="t-period">{e.year}</span>
                  </div>
                  <div className="t-org">{e.school}</div>
                  {e.detail && <p style={{ margin: "10px 0 0", color: "var(--ink-2)", fontSize: 15 }}>{e.detail}</p>}
                  {e.committee && (
                    <details className="more-toggle">
                      <summary>
                        Defense committee
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="m6 9 6 6 6-6" /></svg>
                      </summary>
                      <div className="committee">
                        {e.committee.map(([role, name, inst]) => (
                          <div key={name}>
                            <span className="r">{role}</span>
                            <span><strong>{name}</strong> · <span style={{ color: "var(--muted)" }}>{inst}</span></span>
                          </div>
                        ))}
                      </div>
                    </details>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Credentials" title="Professional certifications" text="Oracle-certified in Java and databases, plus data analytics and agile certifications." />
          <Stagger className="cert-grid">
            {featured.map((c) => (
              <RevealItem key={c.name} className="card card-hover cert">
                <span className="seal"><Award aria-hidden /></span>
                <div>
                  <h3>{c.name}</h3>
                  <p>{c.issuer} · {c.date}</p>
                  {c.id && <code>ID {c.id}</code>}
                </div>
              </RevealItem>
            ))}
          </Stagger>
          <Reveal>
            <div className="cert-more">
              {others.map((c) => (
                <span key={c.name} className="chip" title={c.id ? `ID ${c.id}` : undefined}>
                  {c.name} <span style={{ color: "var(--muted)" }}>· {c.issuer}, {c.date}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
