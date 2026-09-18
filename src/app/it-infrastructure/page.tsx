import type { Metadata } from "next";
import { ConsultationCta, PageHero } from "@/components/PageSections";
import { Breadcrumbs, ContentGrid, FaqSection, RelatedLinks, serviceArea, providerId } from "@/components/SeoSections";
import { infrastructureBuyerContent, infrastructureFaqs } from "@/lib/seo-content";
import { SiteShell } from "@/components/SiteChrome";
import { absoluteUrl, createRouteMetadata } from "@/lib/site-config";
import { servicePageContent } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/it-infrastructure");

export default function ItInfrastructurePage() {
  const content = servicePageContent.infrastructure;
  const serviceDescriptions = ["Diagnose user, device and application issues with clear support ownership.", "Review connectivity and configuration before changing network equipment.", "Plan multi-computer application access, private permissions and local maintenance.", "Scope hosting, release checks and operating responsibilities for the application.", "Resolve account and device setup issues and document changes for future support.", "Configure branded email and Outlook with account ownership and access documented.", "Support authorised QuickBooks users and access issues within the existing environment.", "Identify what needs protection, who owns backups and how recovery will be checked.", "Review permissions and connectivity so private systems are not casually exposed.", "Plan site coverage, power, connectivity and authorised camera access.", "Assess equipment interfaces and local access; public experience includes PACS/DICOM support.", "Identify service dependencies, recovery responsibilities and practical continuity steps."];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service", "@id": `${absoluteUrl("/it-infrastructure")}#service`, description: content.intro,
    name: "IT infrastructure and business IT support in Kenya",
    provider: { "@id": providerId },
    areaServed: serviceArea,
    serviceType: content.services,
    url: absoluteUrl("/it-infrastructure"),
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main>
        <Breadcrumbs items={[{href:"/services",label:"Services"},{href:"/it-infrastructure",label:"IT infrastructure"}]} />
        <PageHero eyebrow={content.eyebrow} title={content.title} text={content.intro} />

        <section className="section-shell detail-grid">
          {content.services.map((service, index) => (
            <article className="detail-card" key={service}>
              <div className="detail-card-head">
                <span className="micro-badge">Support</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2>{service}</h2>
              <p>{serviceDescriptions[index]}</p>
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


        <ContentGrid title="Support that accounts for the operating environment" blocks={infrastructureBuyerContent} />
        <FaqSection faqs={infrastructureFaqs} />
        <RelatedLinks links={[{"href": "/cybersecurity", "label": "Defensive security and access reviews"}, {"href": "/industries/property-management", "label": "Property network and CCTV requirements"}, {"href": "/industries/veterinary", "label": "Veterinary imaging and local infrastructure"}, {"href": "/projects", "label": "IT support and infrastructure experience"}, {"href": "/contact", "label": "Discuss IT support requirements"}]} />
        <ConsultationCta title="Need IT support that leaves your environment clearer than it found it?" />
      </main>
    </SiteShell>
  );
}
