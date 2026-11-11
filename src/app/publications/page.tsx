import { ME, doiUrl, publications, reviewing } from "@/data/publications";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { PageHero, SectionHead, JsonLd } from "@/components/ui";
import { PublicationExplorer } from "@/components/PublicationExplorer";
import { Bar, Counter } from "@/components/Motion";
import { Reveal } from "@/components/Reveal";
import { ProfileChips } from "@/components/Brand";

export const metadata = pageMeta(
  "Publications",
  "Journal articles, book chapters and IEEE / Springer papers on data profiling, machine learning, generative AI and DevSecOps, each with a DOI link.",
  "/publications",
);

export default function PublicationsPage() {
  const max = Math.max(...reviewing.journals.map((j) => j.count));
  const withDoi = publications.filter((p) => p.doi).length;

  const articlesLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Publications of ${ME}`,
    numberOfItems: publications.length,
    itemListElement: publications.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": p.type === "chapter" ? "Chapter" : "ScholarlyArticle",
        headline: p.title,
        name: p.title,
        author: p.authors.filter((a) => a !== "et al.").map((name) => ({ "@type": "Person", name })),
        datePublished: typeof p.year === "number" ? String(p.year) : undefined,
        isPartOf: { "@type": p.type === "journal" ? "Periodical" : "CreativeWork", name: p.venue },
        ...(p.doi ? { url: doiUrl(p.doi), sameAs: doiUrl(p.doi), identifier: { "@type": "PropertyValue", propertyID: "DOI", value: p.doi } } : {}),
      },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbLd("Publications", "/publications")} />
      <JsonLd data={articlesLd} />
      <PageHero
        eyebrow="Research output"
        title={<>Publications</>}
        lead={`${publications.length} journal articles, book chapters and conference papers. ${withDoi} of them link straight to the publisher through their DOI. Filter by type or search by title, venue or co-author.`}
      >
        <div className="hero-profiles" style={{ marginTop: 22 }}>
          <ProfileChips />
        </div>
      </PageHero>

      <section className="section-tight" style={{ paddingTop: 8 }}>
        <div className="container">
          <PublicationExplorer items={publications} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Service to the community" title="Peer reviewing" />
          <Reveal>
            <div className="card reviews">
              <div>
                <div className="big"><Counter value={reviewing.total} suffix="+" /></div>
                <p style={{ color: "var(--muted)", marginTop: 10 }}>
                  reviews for {reviewing.journals.length} Scopus-indexed journals and grant programmes, plus reviewer and
                  technical-committee member for <strong style={{ color: "var(--ink)" }}>{reviewing.conferences} international conferences</strong>.
                </p>
              </div>
              <div className="bars">
                {reviewing.journals.map((j, i) => (
                  <div key={j.name} className="bar-row">
                    <span>{j.name}</span>
                    <span className="v">{j.count}</span>
                    <Bar pct={(j.count / max) * 100} delay={i * 0.06} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
