import type { Metadata } from "next";
import { ConsultationCta, CredibilityCard, PageHero } from "@/components/PageSections";
import { SiteShell } from "@/components/SiteChrome";
import { createRouteMetadata, positioning, workingApproach } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/about");

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="About Aptpro"
          title="A practical Kenyan technology partner for real business operations."
          text="Aptpro combines business understanding, cybersecurity-aware engineering, hands-on technical delivery and long-term operational improvement."
        />

        <section className="section-shell about-story">
          <div>
            <p className="eyebrow">How Aptpro thinks</p>
            <h2>Technology should make work clearer, safer and easier to support.</h2>
          </div>
          <div className="about-copy">
            <p>
              Aptpro works with growing organizations that need dependable technology without
              unnecessary complexity. The work starts by understanding how staff serve customers,
              manage records, communicate, hand over work and make decisions.
            </p>
            <p>
              That operating view informs the technical work: support routines, secure access,
              better systems, websites, networks, infrastructure and documentation that people can
              actually use after launch.
            </p>
          </div>
        </section>

        <section className="section-shell credibility-grid">
          {positioning.map((item) => (
            <CredibilityCard key={item.title} title={item.title} detail={item.detail} />
          ))}
        </section>

        <section className="approach-section">
          <div className="section-shell">
            <div className="section-heading compact">
              <p className="eyebrow">Working style</p>
              <h2>Plain-language delivery with technical discipline behind it.</h2>
            </div>
            <div className="timeline">
              {workingApproach.map((item, index) => (
                <article key={item.step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.step}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ConsultationCta />
      </main>
    </SiteShell>
  );
}
