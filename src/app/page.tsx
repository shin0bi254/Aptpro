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
            <h1>Websites that convert. Systems that scale. Technology you can trust.</h1>
            <p className="hero-lede">
              Aptpro helps Nairobi and Kenyan businesses build professional websites, custom ERP
              systems, defensive cybersecurity programmes and reliable IT infrastructure with the
              discipline expected from serious technology partners.
            </p>
            <p className="hero-note">
              The work starts with the business operation: customers, staff, records, risk,
              handovers, infrastructure and the practical path from first enquiry to dependable
              delivery.
            </p>
            <div className="hero-actions">
              <Link className="primary-button" href="/contact">
                Start a Project
              </Link>
              <Link className="secondary-button" href="/projects">
                Explore Our Work
              </Link>
              <a className="secondary-button" href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}>
                WhatsApp Aptpro
              </a>
            </div>
            <div className="hero-proof" aria-label="Aptpro service focus">
              <span>Website design</span>
              <span>ERP systems</span>
              <span>Cybersecurity</span>
              <span>IT infrastructure</span>
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

        <section className="services-section" id="capabilities">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">Core services</p>
              <h2>Technology work organized around business operations.</h2>
              <p>
                Aptpro is organised around four serious delivery areas: websites that earn trust,
                ERP systems that structure operations, cybersecurity that reduces risk and IT
                infrastructure that keeps work moving.
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
                  <Link className="service-action" href={service.href}>
                    View service
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-band websites-band" id="websites">
          <div className="section-shell feature-grid">
            <div className="section-intro">
              <p className="eyebrow">Website design & development</p>
              <h2>Company websites with conversion, credibility, speed and security built in.</h2>
              <p>
                Aptpro builds professional websites for Kenyan businesses that need customers to
                understand the offer quickly, trust the brand and take the next step through
                WhatsApp, email, calls or structured enquiries.
              </p>
              <Link className="inline-link" href="/website-design">
                Explore website design in Nairobi
              </Link>
            </div>
            <div className="systems-composition" aria-hidden="true">
              <span>Landing</span>
              <span>Services</span>
              <span>SEO</span>
              <span>Contact</span>
              <strong>Fast static website</strong>
            </div>
          </div>
        </section>

        <section className="section-shell split-section" id="erp">
          <div className="section-intro sticky-intro">
            <p className="eyebrow">ERP & business systems</p>
            <h2>Digitise the operation in practical phases.</h2>
            <p>
              Customer records, inventory, billing, approvals, dashboards and role-based access are
              designed around real workflows before software is built.
            </p>
            <Link className="inline-link" href="/erp-systems">
              See ERP systems
            </Link>
          </div>
          <div className="problem-list">
            {["Workflow mapping", "Requirements and risk analysis", "Phased implementation", "Training and support"].map((item, index) => (
              <article key={item} className="problem-item reveal" style={{ "--i": index } as CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item}</h3>
                  <p>
                    Aptpro keeps the work understandable for owners and usable for staff, with
                    documentation and adoption considered throughout delivery.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band security-band" id="security">
          <div className="section-shell feature-grid reversed">
            <div className="systems-composition shield" aria-hidden="true">
              <span>Access</span>
              <span>Backup</span>
              <span>Network</span>
              <span>Devices</span>
              <strong>Secure operating baseline</strong>
            </div>
            <div className="section-intro">
              <p className="eyebrow">Cybersecurity & infrastructure</p>
              <h2>Security-conscious IT support without scare tactics.</h2>
              <p>
                Aptpro handles authorised security assessments, access-control reviews, website
                security, network hardening, managed IT, business email, local servers, remote
                access, backups and specialist integrations.
              </p>
              <div className="hero-actions">
                <Link className="secondary-button dark-text" href="/cybersecurity">
                  Cybersecurity
                </Link>
                <Link className="secondary-button dark-text" href="/it-infrastructure">
                  IT infrastructure
                </Link>
              </div>
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
