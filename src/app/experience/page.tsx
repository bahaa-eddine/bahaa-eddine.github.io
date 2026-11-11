import { experience, experienceYears } from "@/data/experience";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { PageHero, StackChip, JsonLd } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata = pageMeta(
  "Experience",
  "8+ years of industry experience: Technical Leader at ZenithSoft (Data.gov.ma, E-Himaya), Intelcia for SFR, Moroccan Ministry of Interior, Axelor, SPVie.",
  "/experience",
);

export default function ExperiencePage() {
  const years = experienceYears;
  return (
    <>
      <JsonLd data={breadcrumbLd("Experience", "/experience")} />
      <PageHero
        eyebrow="Industry"
        title={<>{years}+ years shipping <em>production</em> software</>}
        lead="From intern to tech lead: national platforms for Moroccan ministries, telecom R&D for SFR, insurance and ERP products in France. Java, Kotlin, Spring and React throughout."
      />
      <section className="section-tight" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="timeline">
            {experience.map((job) => (
              <Reveal key={job.org + job.period} className={`t-item${job.current ? " current" : ""}`}>
                <span className="t-dot" aria-hidden />
                <article className="card t-card">
                  <div className="t-head">
                    <h2>{job.role}</h2>
                    <span className="t-period">{job.period}</span>
                  </div>
                  <div className="t-org">
                    {job.org} {job.location && <span>· {job.location}</span>}
                    {job.current && <span className="badge" style={{ marginLeft: 10, background: "color-mix(in srgb, var(--ok) 16%, transparent)", color: "var(--ok)" }}>Current</span>}
                  </div>
                  {job.projects.map((p) => (
                    <div key={p.name} className="t-project">
                      <h3>{p.name}</h3>
                      {p.summary && <p className="summary">{p.summary}</p>}
                      <ul>
                        {p.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                      {p.team && <p className="team">Team: {p.team}</p>}
                      <div className="stack">
                        {p.stack.map((s) => (
                          <StackChip key={s} name={s} />
                        ))}
                      </div>
                    </div>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
