import { practices, skillGroups } from "@/data/skills";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { PageHero, SectionHead, SkillTile, JsonLd } from "@/components/ui";
import { Reveal, RevealItem, Stagger } from "@/components/Reveal";

export const metadata = pageMeta(
  "Skills",
  "Technical skills: Java, Kotlin, Python, Spring Boot, React, Angular, Android, Docker, Kubernetes, Kafka, PostgreSQL, Oracle, MongoDB, TensorFlow and more.",
  "/skills",
);

export default function SkillsPage() {
  const total = new Set(skillGroups.flatMap((g) => g.items)).size;
  return (
    <>
      <JsonLd data={breadcrumbLd("Skills", "/skills")} />
      <PageHero
        eyebrow="Toolbox"
        title={<>Technologies I <em>teach</em> and ship</>}
        lead={`${total} tools and technologies used in production and taught in class, from enterprise Java backends to mobile apps and AI pipelines.`}
      />

      <section className="section-tight" style={{ paddingTop: 8 }}>
        <div className="container">
          <Stagger className="skill-groups" gap={0.06}>
            {skillGroups.map((g) => (
              <RevealItem key={g.title} className="card skill-group">
                <h2>
                  {g.title} <span className="count">{g.items.length}</span>
                </h2>
                <p>{g.blurb}</p>
                <div className="tiles">
                  {g.items.map((s) => (
                    <SkillTile key={s} name={s} />
                  ))}
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Beyond tools" title="Architecture & practices" />
          <div className="pillars">
            {practices.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="card pillar">
                <h3>{p.title}</h3>
                <div className="chips">
                  {p.items.map((it) => <span key={it} className="chip">{it}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
