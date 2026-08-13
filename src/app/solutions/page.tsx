import type { Metadata } from "next";
import { ConsultationCta, PageHero, SolutionCard } from "@/components/PageSections";
import { SiteShell } from "@/components/SiteChrome";
import { businessSolutions, createRouteMetadata, solutionApproach } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/solutions");

export default function SolutionsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Business solutions"
          title="Start with the operational problem, then choose the technology."
          text="Aptpro helps growing organizations move from manual records, disconnected departments and recurring IT issues toward clearer workflows, safer access and better visibility."
        />

        <section className="section-shell solution-grid page-grid">
          {businessSolutions.map((solution, index) => (
            <SolutionCard key={solution.title} title={solution.title} detail={solution.detail} index={index} />
          ))}
        </section>

        <section className="approach-section">
          <div className="section-shell">
            <div className="section-heading compact">
              <p className="eyebrow">Aptpro approach</p>
              <h2>Structured enough to reduce risk. Practical enough to adopt.</h2>
            </div>
            <div className="timeline extended">
              {solutionApproach.map((step, index) => (
                <article key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step}</h3>
                  <p>
                    The goal is to understand the work clearly before changing tools, access,
                    infrastructure or reporting.
                  </p>
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
