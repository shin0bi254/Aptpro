import type { Metadata } from "next";
import { ConsultationCta, PageHero } from "@/components/PageSections";
import { SiteShell } from "@/components/SiteChrome";
import { absoluteUrl, createRouteMetadata } from "@/lib/site-config";
import { servicePageContent, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/cybersecurity");

export default function CybersecurityPage() {
  const content = servicePageContent.cybersecurity;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Defensive cybersecurity services in Kenya",
    provider: { "@type": "ProfessionalService", name: siteConfig.businessName, url: siteConfig.canonicalOrigin },
    areaServed: ["Nairobi", "Kenya"],
    serviceType: content.services,
    url: absoluteUrl("/cybersecurity"),
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main>
        <PageHero eyebrow={content.eyebrow} title={content.title} text={content.intro} />

        <section className="feature-band security-band">
          <div className="section-shell feature-grid">
            <div className="systems-composition shield" aria-hidden="true">
              <span>Identity</span>
              <span>Web</span>
              <span>Network</span>
              <span>Recovery</span>
              <strong>Authorised defensive review</strong>
            </div>
            <div className="section-intro">
              <p className="eyebrow">Security posture</p>
              <h2>Security work that ends in prioritised action, not panic.</h2>
              <p>
                Reviews focus on business impact: what is exposed, who has access, how recovery
                works, which systems need hardening and what can realistically be improved first.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell detail-grid">
          {content.services.map((service, index) => (
            <article className="detail-card" key={service}>
              <div className="detail-card-head">
                <span className="micro-badge">Defensive</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2>{service}</h2>
              <p>Delivered only for authorised environments with findings documented for business owners and implementers.</p>
            </article>
          ))}
        </section>

        <section className="section-shell split-section">
          <div className="section-intro sticky-intro">
            <p className="eyebrow">Operating principles</p>
            <h2>Refined hacker influence, professional defensive substance.</h2>
            <p>
              The site aesthetic can signal technical depth. The service itself remains clear:
              authorised assessment, hardening, documentation and practical risk reduction.
            </p>
          </div>
          <div className="problem-list">
            {content.principles.map((principle, index) => (
              <article key={principle} className="problem-item">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{principle}</h3>
                  <p>Security is built into normal operations so staff can follow safer routines consistently.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ConsultationCta title="Need a defensive security review before a problem becomes expensive?" />
      </main>
    </SiteShell>
  );
}
