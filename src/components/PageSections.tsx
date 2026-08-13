import Link from "next/link";
import { getMailToUrl, getPhoneUrl, getWhatsAppUrl, siteConfig } from "@/lib/site-content";
import { IconGlyph, SignalDivider } from "./BrandMotif";

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="section-shell page-hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className="page-hero-panel" aria-hidden="true">
          <span />
          <strong>Aptpro operations signal</strong>
          <small>Support. Security. Systems. Improvement.</small>
        </div>
      </div>
      {children}
    </section>
  );
}

export function ConsultationCta({
  id,
  title = "Bring the problem. Aptpro will help turn it into a practical next step.",
  text = "Send a structured enquiry through WhatsApp or email and review it before sending.",
}: {
  id?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section id={id} className="mini-cta">
      <SignalDivider tone="dark" />
      <div className="section-shell mini-cta-grid">
        <div>
          <p className="eyebrow">Consultation</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="mini-cta-actions">
          <Link className="primary-button" href="/contact">
            Book a Consultation
          </Link>
          <a className="secondary-button" href={getWhatsAppUrl()}>
            WhatsApp Aptpro
          </a>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({
  title,
  description,
  items,
  action,
  index,
}: {
  title: string;
  description: string;
  items: string[];
  action: string;
  index: number;
}) {
  return (
    <article className={`detail-card service-${index + 1}`}>
      <div className="detail-card-head">
        <IconGlyph name={`glyph-${(index % 5) + 1}`} />
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="detail-card-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="service-value">
        <span>Operational value</span>
        <p>Clearer support, safer access, better continuity and tools that fit the way staff work.</p>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link className="service-action" href="/contact">
        {action}
      </Link>
    </article>
  );
}

export function SolutionCard({ title, detail, index }: { title: string; detail: string; index: number }) {
  return (
    <Link className="solution-card" href="/contact">
      <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{detail}</p>
      <small>Map problem - design response - support adoption</small>
    </Link>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: {
    name: string;
    category: string;
    problem: string;
    role: string;
    capabilities: string[];
    status: string;
  };
  index: number;
}) {
  const statusClass = project.status.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <article className={`project-card status-${statusClass}`}>
      <div className="project-card-top">
        <span>{project.status}</span>
        <small>{String(index + 1).padStart(2, "0")}</small>
      </div>
      <h2>{project.name}</h2>
      <p className="project-category">{project.category}</p>
      <div className="project-brief">
        <p>
          <strong>Business problem</strong>
          {project.problem}
        </p>
        <p>
          <strong>Aptpro involvement</strong>
          {project.role}
        </p>
      </div>
      <ul>
        {project.capabilities.map((capability) => (
          <li key={capability}>{capability}</li>
        ))}
      </ul>
    </article>
  );
}

export function CredibilityCard({ title, detail }: { title: string; detail: string }) {
  return (
    <article className="credibility-card">
      <span aria-hidden="true" />
      <h2>{title}</h2>
      <p>{detail}</p>
    </article>
  );
}

export function ContactOptions() {
  return (
    <div className="contact-options" aria-label="Contact options">
      <a className="contact-link" href={getWhatsAppUrl()}>
        <span>WhatsApp</span>
        <strong>+{siteConfig.contact.whatsappNumber}</strong>
      </a>
      <a className="contact-link" href={getPhoneUrl()}>
        <span>Telephone</span>
        <strong>{siteConfig.contact.phoneNumber}</strong>
      </a>
      <a className="contact-link" href={getMailToUrl()}>
        <span>Email</span>
        <strong>{siteConfig.contact.email}</strong>
      </a>
      <a
        className="contact-link"
        href={`mailto:${siteConfig.contact.secondaryEmail}?subject=${encodeURIComponent(siteConfig.quoteSubject)}`}
      >
        <span>Secondary email</span>
        <strong>{siteConfig.contact.secondaryEmail}</strong>
      </a>
    </div>
  );
}
