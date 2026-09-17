import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { ConsultationCta } from "@/components/PageSections";
import { NumberedStep, SecurityArchitecture, SecurityCard, SecurityTerminal } from "@/components/ModernUI";
import { SiteShell } from "@/components/SiteChrome";
import { absoluteUrl, createRouteMetadata } from "@/lib/site-config";
import { servicePageContent, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/cybersecurity");

const serviceDescriptions = [
  "Establish the current exposure, critical assets and practical priorities for remediation.",
  "Create a repeatable process for identifying, ranking and resolving weaknesses.",
  "Review identities, privileges and joiner-mover-leaver controls around sensitive systems.",
  "Assess configuration, dependencies and public attack surface for business websites.",
  "Reduce unnecessary exposure through segmentation, safer configuration and controlled access.",
  "Compare system settings with a practical secure baseline and document corrective actions.",
  "Validate backup coverage, restore ownership and the steps required to recover operations.",
  "Equip staff to recognise common risks and follow clear reporting and handling routines.",
  "Translate technical findings into an ordered plan based on business impact and effort.",
  "Design identity, data and infrastructure boundaries into systems before deployment.",
  "Clarify roles, escalation paths, evidence handling and recovery actions before an incident.",
  "Embed access control, validation and maintainable security practices into delivered software.",
];
const statuses = ["ASSESSMENT", "CONTROL", "REVIEW", "ASSESSMENT", "CONTROL", "REVIEW", "READINESS", "GUIDANCE", "REVIEW", "DESIGN", "READINESS", "DESIGN"];
const categories = ["POSTURE", "VULNERABILITY", "IDENTITY", "APPLICATION", "NETWORK", "CONFIGURATION", "RECOVERY", "PEOPLE", "RISK", "ARCHITECTURE", "RESPONSE", "ENGINEERING"];
const principleDescriptions = [
  "Scope, permission and ownership are established before any assessment begins.",
  "Findings are ranked against operational consequence, exposure and realistic remediation effort.",
  "Controls focus on the layers most likely to protect day-to-day continuity and sensitive data.",
  "Leaders and implementers receive clear evidence, priorities and accountable next steps.",
  "Controls become documented routines that teams can maintain after the engagement.",
];

export default function CybersecurityPage() {
  const content = servicePageContent.cybersecurity;
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: "Defensive cybersecurity services in Kenya", provider: { "@type": "ProfessionalService", name: siteConfig.businessName, url: siteConfig.canonicalOrigin }, areaServed: ["Nairobi", "Kenya"], serviceType: content.services, url: absoluteUrl("/cybersecurity") };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main className="cyber-page">
        <section className="cyber-hero">
          <div className="section-shell cyber-hero-grid">
            <div className="cyber-hero-copy">
              <p className="command-label">$ security-posture --scope=business</p>
              <p className="eyebrow">{content.eyebrow}</p>
              <h1>{content.title}</h1>
              <p className="cyber-hero-lede">{content.intro}</p>
              <div className="hero-actions"><Link className="primary-button security-cta" href="/contact">Request Security Review <span aria-hidden="true">-&gt;</span></Link><a className="secondary-button" href="#security-services">View defensive modules</a></div>
            </div>
            <SecurityTerminal lines={["validating authorisation...", "scope: authorised environment", "posture assessment: ready", "defensive controls: available"]} />
          </div>
        </section>

        <aside className="section-shell engagement-notice" aria-label="Cybersecurity engagement scope"><ShieldCheck size={28} aria-hidden="true" /><div><span>$ engagement-scope --authorised</span><strong>AUTHORISED ENVIRONMENTS ONLY</strong><p>Aptpro cybersecurity services are performed only within environments where appropriate authorisation and scope have been established, with access and findings documented for accountable review.</p></div></aside>

        <section className="feature-band security-band"><div className="section-shell feature-grid"><SecurityArchitecture /><div className="section-intro"><p className="command-label">$ methodology --defensive</p><h2>Security work that ends in prioritised action, not panic.</h2><p>Reviews focus on business impact: what is exposed, who has access, how recovery works, which systems need hardening and what can realistically be improved first.</p></div></div></section>

        <section className="cyber-services" id="security-services"><div className="section-shell"><div className="technical-divider"><span>$ defensive-services --list</span><small>12 MODULES / AUTHORISED SCOPE</small></div><div className="security-grid">{content.services.map((service, index) => <SecurityCard key={service} code={`SEC-${String(index + 1).padStart(2, "0")}`} title={service} description={serviceDescriptions[index]} status={statuses[index]} category={categories[index]} />)}</div></div></section>

        <section className="section-shell split-section cyber-principles"><div className="section-intro sticky-intro"><p className="command-label">$ operating-principles --show</p><h2>Defensive discipline, translated into practical operations.</h2><p>Every engagement stays grounded in authorised assessment, proportionate hardening, clear documentation and practical risk reduction.</p></div><div className="problem-list">{content.principles.map((principle, index) => <NumberedStep key={principle} variant="security" code={`SEC-${String(index + 1).padStart(2, "0")}`} title={principle} description={principleDescriptions[index]} />)}</div></section>

        <div className="cyber-cta"><ConsultationCta title="Need a defensive security review before a problem becomes expensive?" text="Define the environment, business concern and desired outcome. Aptpro will help establish an authorised, practical review scope." /></div>
      </main>
    </SiteShell>
  );
}
