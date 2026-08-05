import { QuoteRequest } from "@/components/QuoteRequest";
import {
  businessProblems,
  getMailToUrl,
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
    </span>
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
  return (
    <div className="ops-visual" aria-label="Aptpro operations dashboard visual" role="img">
      <div className="ops-topbar">
        <span />
        <span />
        <span />
      </div>
      <div className="ops-metric primary">
        <small>Priority focus</small>
        <strong>Reliable operations</strong>
        <p>Support, security, systems, and infrastructure managed together.</p>
      </div>
      <div className="ops-flow">
        {["Discover", "Diagnose", "Implement", "Support"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="ops-columns">
        <div>
          <small>Systems</small>
          <span />
          <span />
          <span />
        </div>
        <div>
          <small>Security</small>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const whatsappUrl = getWhatsAppUrl();
  const mailUrl = getMailToUrl();
  const phoneUrl = siteConfig.contact.phoneNumber ? `tel:${siteConfig.contact.phoneNumber}` : "";
  const hasPublicContact = Boolean(whatsappUrl || mailUrl || phoneUrl);
  const year = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.businessName,
    description: siteConfig.description,
    areaServed: siteConfig.areaServed,
    serviceType: services.map((service) => service.title),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              Get a quote
            </a>
          </nav>
        </details>

        <a className="nav-cta" href="#contact">
          Request IT support
        </a>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Secure IT support and business systems for Kenyan SMEs</p>
            <h1>Technology that keeps your business moving.</h1>
            <p className="hero-lede">
              Aptpro provides practical IT support, cybersecurity, software, infrastructure,
              websites, and automation for growing Kenyan organizations that need reliable
              operations, not technology drama.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Request a consultation
              </a>
              <a className="secondary-button" href="#services">
                Explore services
              </a>
            </div>
          </div>
          <OperationsVisual />
        </section>

        <section className="trust-strip" aria-label="Aptpro positioning">
          {positioning.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className="section-shell split-section" id="problems">
          <div className="section-intro">
            <p className="eyebrow">Business problems</p>
            <h2>Fix the operational issues that quietly slow growth.</h2>
            <p>
              Aptpro starts with the business workflow, then brings the right mix of support,
              infrastructure, security, software, and automation.
            </p>
            <a className="inline-link" href="#contact">
              Discuss a current problem
            </a>
          </div>
          <div className="problem-list">
            {businessProblems.map((item) => (
              <article key={item.problem} className="problem-item">
                <h3>{item.problem}</h3>
                <p>{item.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Technology services organized around business results.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell solutions" id="solutions">
          <div className="section-heading compact">
            <p className="eyebrow">Solutions by need</p>
            <h2>Start with the business outcome you need.</h2>
          </div>
          <div className="solution-grid">
            {solutionPaths.map((path) => (
              <a className="solution-card" href="#contact" key={path.title}>
                <span aria-hidden="true">-&gt;</span>
                <h3>{path.title}</h3>
                <p>{path.detail}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="section-shell work-section" id="work">
          <div className="work-copy">
            <p className="eyebrow">{nascahErp.label}</p>
            <h2>{nascahErp.title}: veterinary operations in one managed system.</h2>
            <p>{nascahErp.problem}</p>
            <p>{nascahErp.solution}</p>
            <p>{nascahErp.value}</p>
            <a className="inline-link" href="#contact">
              Ask about custom ERP work
            </a>
          </div>
          <div className="work-panel" aria-label="NASCAH ERP capability map">
            <div>
              <span>Security model</span>
              <strong>Role-based access control</strong>
            </div>
            <ul>
              {nascahErp.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-shell approach-section">
          <div className="section-heading compact">
            <p className="eyebrow">Working approach</p>
            <h2>A practical process for non-technical teams.</h2>
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
        </section>

        <section className="section-shell about-section" id="about">
          <div>
            <p className="eyebrow">About Aptpro</p>
            <h2>Practical engineering for real business operations.</h2>
          </div>
          <p>
            Aptpro Business & IT Solutions helps Kenyan businesses improve daily work
            through dependable support, cybersecurity-aware engineering, custom systems,
            and clear technology advice. The work is centred on understanding how teams
            actually operate, then building and supporting tools that make those operations
            more reliable, visible, and secure.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Need IT support, a secure system, or a better way to run operations?</h2>
              <p>
                Send a short enquiry and Aptpro can scope the issue, recommend the next
                practical step, and prepare a quotation where appropriate.
              </p>
              <div className="contact-options" aria-label="Contact options">
                {hasPublicContact ? (
                  <>
                    <ContactLink
                      channel="whatsapp"
                      href={whatsappUrl}
                      label="WhatsApp"
                      value={siteConfig.contact.whatsappNumber}
                    />
                    <ContactLink
                      channel="phone"
                      href={phoneUrl}
                      label="Phone"
                      value={siteConfig.contact.phoneNumber}
                    />
                    <ContactLink
                      channel="email"
                      href={mailUrl}
                      label="Email"
                      value={siteConfig.contact.email}
                    />
                  </>
                ) : (
                  <p className="contact-missing">
                    Verified WhatsApp, phone, or email details are required before this build is
                    launched publicly.
                  </p>
                )}
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
              <small>{siteConfig.areaServed}</small>
            </span>
          </a>
          <p>
            Privacy notice: enquiries are prepared on your device through email or WhatsApp.
            No website backend is currently used to store form submissions.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <p className="copyright">&copy; {year} {siteConfig.businessName}.</p>
      </footer>

      {whatsappUrl ? (
        <a className="floating-whatsapp" href={whatsappUrl} aria-label="Contact Aptpro on WhatsApp">
          WhatsApp
        </a>
      ) : (
        <a className="floating-whatsapp pending" href="#contact" aria-label="View Aptpro contact options">
          Contact
        </a>
      )}
    </>
  );
}
