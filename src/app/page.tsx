import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { OperationsVisual, SignalDivider, IconGlyph } from "@/components/BrandMotif";
import { ConsultationCta, CredibilityCard, ProjectCard, SolutionCard } from "@/components/PageSections";
import { SiteShell } from "@/components/SiteChrome";
import {
  businessProblems,
  homeAnchors,
  nascahErp,
  positioning,
  projects,
  services,
  siteConfig,
  solutionPaths,
  workingApproach,
} from "@/lib/site-content";
import { absoluteUrl, createRouteMetadata } from "@/lib/site-config";

export const metadata: Metadata = createRouteMetadata("/");

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.businessName,
    url: siteConfig.canonicalOrigin,
    logo: absoluteUrl("/icon.svg"),
    description: siteConfig.description,
    areaServed: siteConfig.areaServed,
    telephone: siteConfig.contact.phoneNumber,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
    },
    serviceType: services.map((service) => service.title),
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Based in Kenya - supporting growing organizations</p>
            <h1>Technology that keeps your business moving.</h1>
            <p className="hero-lede">
              Aptpro designs, secures and improves the technology that businesses depend on:
              practical IT support, cybersecurity, business systems, automation, networks and
              websites for teams that need dependable operations.
            </p>
            <p className="hero-note">
              We connect the daily tools people depend on, then make them easier to support,
              safer to use, and clearer to manage.
            </p>
            <div className="hero-actions">
              <Link className="primary-button" href="/contact">
                Book a Consultation
              </Link>
              <Link className="secondary-button" href="/services">
                Explore Our Services
              </Link>
            </div>
            <div className="hero-proof" aria-label="Aptpro service focus">
              <span>Managed IT</span>
              <span>Cybersecurity</span>
              <span>ERP & automation</span>
            </div>
          </div>
          <OperationsVisual />
        </section>

        <SignalDivider tone="dark" />

        <section className="trust-strip" aria-label="Aptpro positioning">
          {positioning.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <nav className="home-jump-nav section-shell" aria-label="Homepage sections">
          {homeAnchors.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <section className="section-shell split-section" id="problems">
          <div className="section-intro sticky-intro">
            <p className="eyebrow">What gets fixed</p>
            <h2>Operational problems should not become normal.</h2>
            <p>
              Aptpro looks at the workflow behind the issue, then brings the right mix of
              support, infrastructure, security, software and automation.
            </p>
            <Link className="inline-link" href="/solutions">
              See business solutions
            </Link>
          </div>
          <div className="problem-list">
            {businessProblems.map((item, index) => (
              <article key={item.problem} className="problem-item reveal" style={{ "--i": index } as CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.problem}</h3>
                  <p>{item.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">Core services</p>
              <h2>Technology work organized around business operations.</h2>
              <p>
                The homepage highlights the core categories. The services page goes deeper into
                troubleshooting, security, software, websites, infrastructure and consulting.
              </p>
            </div>
            <div className="service-stack">
              {services.map((service, index) => (
                <article className={`service-panel service-${index + 1}`} key={service.title}>
                  <div className="service-title">
                    <IconGlyph name={`glyph-${index + 1}`} />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <div className="service-body">
                    <p>
                      <strong>Problem:</strong> {service.problem}
                    </p>
                    <p>
                      <strong>Aptpro delivers:</strong> {service.delivery}
                    </p>
                    <p>
                      <strong>Operational value:</strong> {service.value}
                    </p>
                  </div>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link className="service-action" href="/services">
                    View service
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SignalDivider />

        <section className="solutions section-shell" id="solutions">
          <div className="section-heading compact">
            <p className="eyebrow">Solutions by need</p>
            <h2>Start with what you need the business to do better.</h2>
          </div>
          <div className="solution-grid">
            {solutionPaths.map((path, index) => (
              <SolutionCard key={path.title} title={path.title} detail={path.detail} index={index} />
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="work-copy">
            <p className="eyebrow">{nascahErp.label}</p>
            <h2>{nascahErp.title}: a flagship system for case-centred operations.</h2>
            <p>{nascahErp.problem}</p>
            <p>{nascahErp.solution}</p>
            <p>{nascahErp.value}</p>
            <Link className="inline-link light" href="/projects">
              View projects and experience
            </Link>
          </div>
          <div className="work-panel" aria-label="NASCAH ERP capability map">
            <div className="work-map">
              <div className="work-core">
                <strong>NASCAH ERP</strong>
                <span>Secure operational system</span>
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

        <SignalDivider tone="dark" />

        <section className="approach-section" id="approach">
          <div className="section-shell">
            <div className="section-heading compact">
              <p className="eyebrow">How we work</p>
              <h2>A clear process for non-technical business owners.</h2>
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

        <section className="section-shell about-section" id="about">
          <div>
            <p className="eyebrow">Credibility</p>
            <h2>Practical, security-aware delivery for real business operations.</h2>
          </div>
          <div className="credibility-grid compact">
            {positioning.map((item) => (
              <CredibilityCard key={item.title} title={item.title} detail={item.detail} />
            ))}
          </div>
        </section>

        <section className="section-shell projects-preview">
          <div className="section-heading compact">
            <p className="eyebrow">Selected experience</p>
            <h2>Work shaped around operations, not just screens.</h2>
          </div>
          <div className="project-grid preview">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        <ConsultationCta id="contact" />
      </main>
    </SiteShell>
  );
}
