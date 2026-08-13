import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationCta, PageHero } from "@/components/PageSections";
import { SiteShell } from "@/components/SiteChrome";
import { absoluteUrl, createRouteMetadata } from "@/lib/site-config";
import { servicePageContent, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/website-design");

export default function WebsiteDesignPage() {
  const content = servicePageContent.websiteDesign;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website design and website development in Nairobi and Kenya",
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.businessName,
      url: siteConfig.canonicalOrigin,
      email: siteConfig.contact.email,
    },
    areaServed: ["Nairobi", "Kenya"],
    serviceType: [
      "Website design",
      "Website development",
      "Business website design",
      "E-commerce website development",
      "Website redesign",
      "WordPress support",
      "Next.js website development",
    ],
    url: absoluteUrl("/website-design"),
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <main>
        <PageHero eyebrow={content.eyebrow} title={content.title} text={content.intro} />

        <section className="section-shell service-deep-grid">
          <div className="section-intro">
            <p className="eyebrow">What Aptpro builds</p>
            <h2>Websites treated as business infrastructure, not decoration.</h2>
            <p>
              A strong website must explain the business, load quickly, earn trust, support search
              visibility, guide enquiries and remain maintainable after launch.
            </p>
          </div>
          <div className="detail-list">
            {content.builds.map((item) => (
              <article key={item} className="problem-item">
                <span>+</span>
                <div>
                  <h3>{item}</h3>
                  <p>Scoped around audience, content, conversion path, security, speed and support needs.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band websites-band">
          <div className="section-shell feature-grid">
            <div className="systems-composition" aria-hidden="true">
              <span>Positioning</span>
              <span>UX</span>
              <span>SEO</span>
              <span>Security</span>
              <strong>Launch-ready website system</strong>
            </div>
            <div className="section-intro">
              <p className="eyebrow">Delivery process</p>
              <h2>From commercial clarity to fast static output.</h2>
              <ol className="ordered-process">
                {content.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section-shell detail-grid">
          {content.outcomes.map((outcome, index) => (
            <article className="detail-card" key={outcome}>
              <div className="detail-card-head">
                <span className="micro-badge">Outcome</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2>{outcome}</h2>
              <p>
                Aptpro connects visual design with practical technology choices so the site can be
                searched, trusted, maintained and improved.
              </p>
            </article>
          ))}
        </section>

        <section className="section-shell faq-section">
          <div className="section-heading compact">
            <p className="eyebrow">Website FAQs</p>
            <h2>Useful answers before scoping a website project.</h2>
          </div>
          {content.faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

        <ConsultationCta
          title="Ready to improve how customers see and contact your business?"
          text="Start with the business goal, current website state, content readiness and any domain, email, SEO or hosting needs."
        />
        <section className="section-shell related-links">
          <Link href="/projects">View website and platform work</Link>
          <Link href="/contact">Start a website project</Link>
        </section>
      </main>
    </SiteShell>
  );
}
