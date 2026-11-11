import { ArrowUpRight, Briefcase, Building2, GraduationCap, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { PageHero, SectionHead, JsonLd } from "@/components/ui";
import { Reveal, RevealItem, Stagger } from "@/components/Reveal";
import { BRAND_KEYS, BrandMark, brandInfo } from "@/components/Brand";

export const metadata = pageMeta(
  "Contact",
  "Contact Prof. Bahaa Eddine Elbaghazaoui: academic email for research and supervision, professional email for training, consulting and partnerships.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Contact", "/contact")} />
      <PageHero
        eyebrow="Contact"
        title={<>Let’s <em>talk</em></>}
        lead="Pick the address that fits your request. I usually reply within a few days."
      >
        <p style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", color: "var(--muted)", fontSize: 14.5, marginTop: 18 }}>
          <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><Building2 size={16} aria-hidden /> {profile.affiliation}</span>
          <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><MapPin size={16} aria-hidden /> {profile.location}</span>
        </p>
      </PageHero>

      <section className="section-tight" style={{ paddingTop: 8 }}>
        <div className="container">
          <Stagger className="two-col">
            {profile.emails.map((e, i) => {
              const Icon = i === 0 ? GraduationCap : Briefcase;
              return (
                <RevealItem key={e.address} className="card card-hover contact-mail">
                  <span className="ic"><Icon aria-hidden /></span>
                  <span className="email-label">{e.label}</span>
                  <h2>{e.purpose}</h2>
                  <a className="addr" href={`mailto:${e.address}`}>{e.address}</a>
                  <a className="btn btn-primary btn-sm" href={`mailto:${e.address}`} style={{ alignSelf: "flex-start", marginTop: 18 }}>
                    <Mail aria-hidden /> Send email
                  </a>
                </RevealItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHead eyebrow="Online" title="Find me online" />
          <Reveal>
            <div className="profile-links">
              {BRAND_KEYS.map((k) => {
                const b = brandInfo(k);
                return (
                  <a key={k} href={b.href} target="_blank" rel="noopener noreferrer me" className="card card-hover profile-link">
                    <span className="ic"><BrandMark k={k} size={22} /></span>
                    <span>{b.label}<small>{b.sub}</small></span>
                    <ArrowUpRight className="go" aria-hidden />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
