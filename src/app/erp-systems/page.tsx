import type { Metadata } from "next";
import { ConsultationCta, PageHero } from "@/components/PageSections";
import { Breadcrumbs, ContentGrid, FaqSection, RelatedLinks, serviceArea, providerId } from "@/components/SeoSections";
import { erpBuyerContent, erpFaqs } from "@/lib/seo-content";
import { SiteShell } from "@/components/SiteChrome";
import { absoluteUrl, createRouteMetadata } from "@/lib/site-config";
import { nascahErp, servicePageContent } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/erp-systems");

export default function ErpSystemsPage() {
  const content = servicePageContent.erpSystems;
  const capabilityDescriptions = ["Define how customer records are created, shared and kept consistent across staff workflows.", "Scope stock records, responsibilities and procurement handovers before implementing modules.", "Map service charges, invoice preparation and payment-record responsibilities.", "Connect appointments and service delivery to the records the team needs at each stage.", "Define RBAC permissions by responsibility, including viewing, changes and approvals.", "Agree report definitions, source records and the decisions each dashboard supports.", "Identify approval roles and the change history needed for accountable operations.", "Review connectivity, private access, maintenance and recovery before selecting deployment.", "Assess supported interfaces, licensing, data ownership and testing for each connection."];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service", "@id": `${absoluteUrl("/erp-systems")}#service`, description: content.intro,
    name: "Custom ERP systems and business software development in Kenya",
    provider: { "@id": providerId },
    areaServed: serviceArea,
    serviceType: ["Custom ERP systems", "Business software", "Workflow digitisation", "Business systems"],
    url: absoluteUrl("/erp-systems"),
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main>
        <Breadcrumbs items={[{href:"/services",label:"Services"},{href:"/erp-systems",label:"ERP systems"}]} />
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
              <p>{capabilityDescriptions[index]}</p>
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
            <h2>{nascahErp.title}: an active veterinary systems engagement.</h2>
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


        <ContentGrid title="ERP systems: scope, evidence and delivery" blocks={erpBuyerContent} />
        <FaqSection faqs={erpFaqs} />
        <RelatedLinks links={[{"href": "/projects/veterinary-systems", "label": "NASCAH ERP and veterinary engineering evidence"}, {"href": "/industries/veterinary", "label": "Veterinary workflow and systems requirements"}, {"href": "/industries/smes", "label": "Business systems for Kenyan SMEs"}, {"href": "/automation", "label": "Workflow integration before a full ERP"}, {"href": "/contact", "label": "Discuss ERP requirements"}]} />
        <ConsultationCta title="Need a business system scoped properly before anyone starts coding?" />
      </main>
    </SiteShell>
  );
}
