import { ArrowUpRight, FileText } from "lucide-react";
import { books } from "@/data/books";
import { doiUrl } from "@/data/publications";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { BookCover, JsonLd, PageHero } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata = pageMeta(
  "Books",
  "Five scientific books edited with IGI Global on AI-driven cybersecurity, agentic AI, generative AI applications, data architectures and DevSecOps.",
  "/books",
);

export default function BooksPage() {
  const ld = books.map((b) => ({
    "@context": "https://schema.org",
    "@type": "Book",
    name: b.subtitle ? `${b.title}: ${b.subtitle}` : b.title,
    isbn: b.isbn.replace(/-/g, ""),
    datePublished: String(b.year),
    publisher: { "@type": "Organization", name: b.publisher },
    editor: b.editors.filter((e) => e !== "et al.").map((name) => ({ "@type": "Person", name })),
    url: doiUrl(b.doi),
    sameAs: doiUrl(b.doi),
    image: b.cover ? `${SITE_URL}${b.cover}` : undefined,
    description: b.about,
    inLanguage: "en",
    bookFormat: "https://schema.org/Hardcover",
  }));

  return (
    <>
      <JsonLd data={breadcrumbLd("Books", "/books")} />
      <JsonLd data={ld} />
      <PageHero
        eyebrow="Edited volumes · IGI Global"
        title={<>Five books on <em>AI</em>, data &amp; security</>}
        lead="As lead editor I have brought together international researchers on generative AI, cybersecurity, data architectures and DevSecOps. Each volume collects peer-reviewed chapters from academia and industry."
      />

      <section className="section-tight" style={{ paddingTop: 8 }}>
        <div className="container">
          {books.map((b, i) => (
            <Reveal key={b.slug}>
              <article id={b.slug} className="card book-feature" style={{ scrollMarginTop: "calc(var(--header-h) + 24px)" }}>
                <BookCover book={b} priority={i < 2} sizes="(max-width: 760px) 220px, 260px" />
                <div>
                  <div className="chips">
                    <span className="badge">{b.status === "forthcoming" ? "Forthcoming" : b.year}</span>
                    <span className="badge badge-warm">Lead editor</span>
                  </div>
                  <h2>{b.title}</h2>
                  {b.subtitle && <p className="subtitle">{b.subtitle}</p>}
                  <p className="editors">
                    <span style={{ color: "var(--muted)" }}>Edited by </span>
                    {b.editors.map((e, j) => (
                      <span key={e}>
                        {j === 0 ? <strong>{e}</strong> : e}
                        {j < b.editors.length - 1 ? (b.editors[j + 1] === "et al." ? " " : ", ") : ""}
                      </span>
                    ))}
                  </p>
                  <p className="about">{b.about}</p>
                  <div className="chips">
                    {b.themes.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                  <dl className="book-facts">
                    <dt>Publisher</dt>
                    <dt>Year</dt>
                    <dt>ISBN</dt>
                    <dd>IGI Global</dd>
                    <dd>{b.year}</dd>
                    <dd style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}>{b.isbn}</dd>
                  </dl>
                  {b.myChapters && (
                    <div className="my-chapters">
                      <h3>My chapter{b.myChapters.length > 1 ? "s" : ""} in this volume</h3>
                      {b.myChapters.map((c) => (
                        <a key={c.doi} href={doiUrl(c.doi)} target="_blank" rel="noopener noreferrer">
                          <FileText aria-hidden /> {c.title}
                        </a>
                      ))}
                    </div>
                  )}
                  <div className="book-actions">
                    <a className="btn btn-primary btn-sm" href={doiUrl(b.doi)} target="_blank" rel="noopener noreferrer">
                      View on IGI Global <ArrowUpRight aria-hidden />
                    </a>
                    <span className="chip" style={{ fontFamily: "var(--font-mono)" }}>DOI {b.doi}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
