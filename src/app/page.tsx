import { QuoteRequest } from "@/components/QuoteRequest";
import type { CSSProperties } from "react";
import {
  businessProblems,
  getMailToUrl,
  getPhoneUrl,
  getWhatsAppUrl,
  hasVerifiedContact,
  nascahErp,
  navItems,
  positioning,
  services,
  siteConfig,
  solutionPaths,
  workingApproach,
} from "@/lib/site-content";

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function IconGlyph({ name }: { name: string }) {
  return (
    <span className={`icon-glyph ${name}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function SignalDivider({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className={`signal-divider ${tone}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function ContactLink({
  channel,
  href,
  label,
  value,
}: {
  channel: "whatsapp" | "phone" | "email";
  href: string;
  label: string;
  value: string;
}) {
  const verified = hasVerifiedContact(channel);

  return verified ? (
    <a className="contact-link" href={href}>
      <span>{label}</span>
      <strong>{value}</strong>
    </a>
  ) : null;
}

function OperationsVisual() {
  const nodes = ["Support", "Security", "Systems", "Automation"];
  const checkpoints = ["Messy tools", "Secure hub", "Clear operations"];

  return (
    <div className="ops-visual" aria-label="Connected secure business operations visual" role="img">
      <div className="ops-status">
        <span />
        <strong>Live operations map</strong>
        <small>Support + security + systems</small>
      </div>
      <div className="ops-map">
        <div className="ops-boundary" />
        <div className="ops-core">
          <span>A</span>
          <strong>Aptpro</strong>
          <small>Operations hub</small>
        </div>
        {nodes.map((node, index) => (
          <div className={`ops-node node-${index + 1}`} key={node}>
            <span />
            <strong>{node}</strong>
          </div>
        ))}
        <svg className="ops-lines" viewBox="0 0 520 420" aria-hidden="true">
          <path d="M260 210 L124 104" />
          <path d="M260 210 L394 106" />
          <path d="M260 210 L115 315" />
          <path d="M260 210 L400 316" />
          <circle cx="260" cy="210" r="118" />
          <path className="signal-path main" d="M72 210 C150 150 213 150 260 210 C318 284 378 278 454 210" />
        </svg>
        <span className="signal-packet packet-one" />
        <span className="signal-packet packet-two" />
      </div>
      <div className="ops-checkpoints">
        {checkpoints.map((item, index) => (
          <span key={item}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            {item}
          </span>
        ))}
      </div>
      <div className="ops-console">
        <div>
          <small>Today&apos;s focus</small>
          <strong>Reliable, secure business operations</strong>
        </div>
        <ul>
          <li>Access reviewed before systems go live</li>
          <li>Support paths documented for staff</li>
          <li>Workflows shaped around real handovers</li>
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  const whatsappUrl = getWhatsAppUrl();
  const mailUrl = getMailToUrl();
  const phoneUrl = getPhoneUrl();
  const year = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.businessName,
    description: siteConfig.description,
    areaServed: siteConfig.areaServed,
    telephone: siteConfig.contact.phoneNumber,
    email: siteConfig.contact.email,
    serviceType: services.map((service) => service.title),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${siteConfig.businessName} home`}>
          <LogoMark />
          <span>
            <strong>{siteConfig.shortName}</strong>
            <small>Business & IT Solutions</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="mobile-cta" href="#contact">
              Request a quote
            </a>
          </nav>
        </details>

        <a className="nav-cta" href="#contact">
          Get IT Support
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Based in Kenya - supporting growing organizations</p>
            <h1>Technology that keeps your business moving.</h1>
            <p className="hero-lede">
              Aptpro delivers secure IT support, cybersecurity, business systems, automation,
              networks, websites, and practical technology strategy for Kenyan teams that need
              dependable operations.
            </p>
            <p className="hero-note">
              We connect the daily tools people depend on, then make them easier to support,
              safer to use, and clearer to manage.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Request a consultation
              </a>
              <a className="secondary-button" href="#services">
                Explore our services
              </a>
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

        <section className="section-shell split-section" id="problems">
          <div className="section-intro sticky-intro">
            <p className="eyebrow">What gets fixed</p>
            <h2>Operational problems should not become normal.</h2>
            <p>
              Aptpro looks at the workflow behind the issue, then brings the right mix of
              support, infrastructure, security, software, and automation.
            </p>
            <a className="inline-link" href="#contact">
              Discuss a current problem
            </a>
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
              <p className="eyebrow">Services</p>
              <h2>Serious technology services, explained in business language.</h2>
              <p>
                Each service group connects the problem, the delivery work, and the operational
                value your team should expect from a well-managed engagement.
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
                  <a className="service-action" href="#contact">
                    {service.action}
                  </a>
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
              <a className="solution-card" href="#contact" key={path.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{path.title}</h3>
                <p>{path.detail}</p>
              </a>
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
            <a className="inline-link light" href="#contact">
              Ask about custom ERP work
            </a>
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
            <p className="eyebrow">About Aptpro</p>
            <h2>A practical technology partner for real business operations.</h2>
          </div>
          <div className="about-copy">
            <p>
              Aptpro combines business understanding, cybersecurity-aware engineering, hands-on
              technical delivery, and long-term operational improvement. The work is grounded in
              how teams actually serve customers, manage records, communicate, and make decisions.
            </p>
            <p>
              The goal is not to sell complexity. It is to help organizations run with technology
              that is reliable, secure, understandable, and useful after launch.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Request a quote</p>
              <h2>Bring the problem. Aptpro will help turn it into a practical next step.</h2>
              <p>
                Use WhatsApp, phone, email, or the structured enquiry builder. The website does
                not pretend to submit to a backend; your message opens in your own app for review.
              </p>
              <div className="contact-options" aria-label="Contact options">
                <ContactLink
                  channel="whatsapp"
                  href={whatsappUrl}
                  label="WhatsApp"
                  value={`+${siteConfig.contact.whatsappNumber}`}
                />
                <ContactLink
                  channel="phone"
                  href={phoneUrl}
                  label="Telephone"
                  value={siteConfig.contact.phoneNumber}
                />
                <ContactLink
                  channel="email"
                  href={mailUrl}
                  label="Email"
                  value={siteConfig.contact.email}
                />
                <ContactLink
                  channel="email"
                  href={`mailto:${siteConfig.contact.secondaryEmail}?subject=${encodeURIComponent(siteConfig.quoteSubject)}`}
                  label="Secondary email"
                  value={siteConfig.contact.secondaryEmail}
                />
              </div>
            </div>
            <QuoteRequest />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="brand footer-brand" href="#top">
            <LogoMark />
            <span>
              <strong>{siteConfig.businessName}</strong>
              <small>{siteConfig.tagline}</small>
            </span>
          </a>
          <p>
            Serving growing organizations in Kenya with IT support, cybersecurity, business
            systems, automation, websites, CCTV, Microsoft 365, QuickBooks support, and practical
            technology strategy.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <p className="copyright">
          &copy; {year} {siteConfig.businessName}. Enquiries are prepared on your device; no
          website backend stores form submissions.
        </p>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} aria-label="Contact Aptpro on WhatsApp">
        WhatsApp
      </a>
    </>
  );
}
