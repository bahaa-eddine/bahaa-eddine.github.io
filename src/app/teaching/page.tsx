import { institutions, places, supervision, totalHours } from "@/data/teaching";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { PageHero, SectionHead, JsonLd } from "@/components/ui";
import { MapSection } from "@/components/MapSection";
import { Reveal, RevealItem, Stagger } from "@/components/Reveal";

export const metadata = pageMeta(
  "Teaching",
  "Courses taught at ENSA Béni Mellal, EMSI and Ibn Tofail University: software architecture, PL/SQL, AI and DevOps, with a teaching map and thesis supervision.",
  "/teaching",
);

export default function TeachingPage() {
  const courseCount = institutions.reduce((n, i) => n + i.courses.length, 0);
  const supervised = supervision.reduce((n, g) => n + g.items.reduce((m, s) => m + s.names.length, 0), 0);

  return (
    <>
      <JsonLd data={breadcrumbLd("Teaching", "/teaching")} />
      <PageHero
        eyebrow="Teaching"
        title={<>Teaching what I <em>build</em></>}
        lead={`${courseCount} courses and training programmes, more than ${(Math.floor(totalHours / 100) * 100).toLocaleString("en-US")} hours in front of engineering students, master's students, ministries and companies, and ${supervised} students supervised.`}
      />

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <MapSection places={places} />
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHead eyebrow="Courses" title="Courses & training" />
          {institutions.map((inst) => {
            const hours = inst.courses.reduce((s, c) => s + c.hours, 0);
            return (
              <div key={inst.id} id={inst.id} className="inst">
                <Reveal className="inst-head">
                  <div>
                    <h3>
                      {inst.current && <span className="live-dot" aria-hidden style={{ marginRight: 12, verticalAlign: "middle" }} />}
                      {inst.name}
                    </h3>
                    <div className="role">{inst.role} · {inst.period}</div>
                  </div>
                  <span className="hours">{inst.courses.length} course{inst.courses.length > 1 ? "s" : ""} · {hours} h</span>
                </Reveal>
                <Stagger className="course-grid" gap={0.05}>
                  {inst.courses.map((c) => (
                    <RevealItem key={c.title + c.year} className="card card-hover course">
                      <div className="course-top">
                        <h4>{c.title}</h4>
                        <span className="h">{c.hours}h</span>
                      </div>
                      <p className="aud">{c.audience} · {c.year}</p>
                      <div className="chips">
                        {c.topics.map((t) => (
                          <span key={t} className="chip">{t}</span>
                        ))}
                      </div>
                    </RevealItem>
                  ))}
                </Stagger>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Mentoring"
            title="Supervised projects"
            text="End-of-studies projects (PFE), annual projects (PFA), master's theses and internships, many of them run with industry partners."
          />
          {supervision.map((g) => (
            <Reveal key={g.group} className="sup-group">
              <h3>{g.group}</h3>
              <div className="card sup-wrap">
                <table className="sup-table">
                  <thead>
                    <tr>
                      <th scope="col">Student(s)</th>
                      <th scope="col">Year</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Context</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.items.map((s) => (
                      <tr key={s.subject}>
                        <td><strong>{s.names.join(", ")}</strong></td>
                        <td className="y">{s.year}</td>
                        <td>{s.subject}</td>
                        <td style={{ color: "var(--muted)", whiteSpace: "nowrap" }}>
                          {[s.level, s.org].filter(Boolean).join(" · ") || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
