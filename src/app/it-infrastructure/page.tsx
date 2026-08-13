import type { Metadata } from "next";
import { ConsultationCta, PageHero } from "@/components/PageSections";
import { SiteShell } from "@/components/SiteChrome";
import { absoluteUrl, createRouteMetadata } from "@/lib/site-config";
import { servicePageContent, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/it-infrastructure");

export default function ItInfrastructurePage() {
  const content = servicePageContent.infrastructure;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Managed IT services and infrastructure support in Nairobi",
    provider: { "@type": "ProfessionalService", name: siteConfig.businessName, url: siteConfig.canonicalOrigin },
    areaServed: ["Nairobi", "Kenya"],
    serviceType: content.services,
    url: absoluteUrl("/it-infrastructure"),
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main>
        <PageHero eyebrow={content.eyebrow} title={content.title} text={content.intro} />

        <section className="section-shell detail-grid">
          {content.services.map((service, index) => (
            <article className="detail-card" key={service}>
              <div className="detail-card-head">
                <span className="micro-badge">Support</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2>{service}</h2>
              <p>Handled as part of a documented support environment, not as disconnected computer repair.</p>
            </article>
          ))}
        </section>

        <section className="feature-band websites-band">
          <div className="section-shell feature-grid reversed">
            <div className="section-intro">
              <p className="eyebrow">Support model</p>
              <h2>Reliable technology depends on diagnosis, documentation and continuity planning.</h2>
              <p>
                Aptpro separates urgent fixes from structural improvements so networks, users,
                devices, email, access, backups and local systems become easier to support over
                time.
              </p>
            </div>
            <div className="detail-list compact-list">
              {content.supportModel.map((item) => (
                <article key={item} className="problem-item">
                  <span>+</span>
                  <div>
                    <h3>{item}</h3>
                    <p>Useful for offices, field teams, clinics, retail environments and specialist systems.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ConsultationCta title="Need IT support that leaves your environment clearer than it found it?" />
      </main>
    </SiteShell>
  );
}
