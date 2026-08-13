import type { Metadata } from "next";
import { ConsultationCta, PageHero } from "@/components/PageSections";
import { SiteShell } from "@/components/SiteChrome";
import { absoluteUrl, createRouteMetadata } from "@/lib/site-config";
import { nascahErp, servicePageContent, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/erp-systems");

export default function ErpSystemsPage() {
  const content = servicePageContent.erpSystems;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom ERP systems and business software development in Kenya",
    provider: { "@type": "ProfessionalService", name: siteConfig.businessName, url: siteConfig.canonicalOrigin },
    areaServed: ["Nairobi", "Kenya"],
    serviceType: ["Custom ERP systems", "Business software", "Workflow digitisation", "Business systems"],
    url: absoluteUrl("/erp-systems"),
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main>
        <PageHero eyebrow={content.eyebrow} title={content.title} text={content.intro} />

        <section className="section-shell service-deep-grid">
          <div className="section-intro">
            <p className="eyebrow">Industries and workflows</p>
            <h2>ERP thinking for growing SMEs, not one narrow sector.</h2>
            <p>
              Aptpro does not claim every capability has been delivered in every industry. The
              design method is reusable: understand the operation, map risk, build in phases and
              support adoption.
            </p>
          </div>
          <div className="tag-matrix">
            {content.industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </section>

        <section className="section-shell detail-grid">
          {content.capabilities.map((capability, index) => (
            <article className="detail-card" key={capability}>
              <div className="detail-card-head">
                <span className="micro-badge">ERP</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2>{capability}</h2>
              <p>Included when it fits the mapped workflow, user roles, reporting needs and implementation phase.</p>
            </article>
          ))}
        </section>

        <section className="approach-section">
          <div className="section-shell">
            <div className="section-heading compact">
              <p className="eyebrow">Implementation method</p>
              <h2>Structured delivery from discovery to continuous improvement.</h2>
            </div>
            <div className="timeline extended">
              {content.process.map((step, index) => (
                <article key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step}</h3>
                  <p>Each phase is designed to reduce operational risk and make adoption practical for staff.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section">
          <div className="work-copy">
            <p className="eyebrow">Case study</p>
            <h2>{nascahErp.title}: complex operations without letting one sector define Aptpro.</h2>
            <p>{content.caseStudy}</p>
          </div>
          <div className="work-panel" aria-label="NASCAH ERP capability map">
            <div className="work-map">
              <div className="work-core">
                <strong>NASCAH ERP</strong>
                <span>Active implementation</span>
              </div>
              {nascahErp.capabilities.map((capability, index) => (
                <div className={`work-node work-node-${index + 1}`} key={capability}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{capability}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ConsultationCta title="Need a business system scoped properly before anyone starts coding?" />
      </main>
    </SiteShell>
  );
}
