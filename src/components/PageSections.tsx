"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { getMailToUrl, getPhoneUrl, getWhatsAppUrl, siteConfig } from "@/lib/site-content";
import { IconGlyph, SignalDivider } from "./BrandMotif";

function revealStyle(index = 0): CSSProperties {
  return { "--i": index } as CSSProperties;
}

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
        <div data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className="page-hero-panel" aria-hidden="true" data-reveal style={revealStyle(1)}>
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
      <div className="section-shell mini-cta-grid" data-reveal>
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
  const badge = index === 0 ? "Popular" : index === 2 ? "Featured" : index === 3 ? "New" : "";

  return (
    <article className={`detail-card service-${index + 1}`} data-reveal style={revealStyle(index)}>
      <div className="detail-card-head">
        <IconGlyph name={`glyph-${(index % 5) + 1}`} />
        <div className="card-meta">
          {badge ? <small className={`micro-badge badge-${badge.toLowerCase()}`}>{badge}</small> : null}
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
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
      <p className="detail-card-reveal">Useful when support, security, tools and daily workflow need to be handled together.</p>
      <Link className="service-action" href="/contact">
        {action}
      </Link>
    </article>
  );
}

export function SolutionCard({ title, detail, index }: { title: string; detail: string; index: number }) {
  const badge = index === 0 ? "Popular" : index === 3 ? "Featured" : "";

  return (
    <Link className="solution-card" href="/contact" data-reveal style={revealStyle(index)}>
      {badge ? <small className={`micro-badge badge-${badge.toLowerCase()}`}>{badge}</small> : null}
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
  const badge = ["Active development", "Technical implementation", "Deployment planning"].includes(project.status)
    ? "Featured"
    : project.status.includes("concept")
      ? "New"
      : "";

  return (
    <article className={`project-card status-${statusClass}`} data-reveal style={revealStyle(index)}>
      <div className="project-card-top">
        <span>{project.status}</span>
        <small>{String(index + 1).padStart(2, "0")}</small>
      </div>
      {badge ? <small className={`micro-badge badge-${badge.toLowerCase()}`}>{badge}</small> : null}
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
      <p className="project-hover-note">Hover detail: scoped around operational value, adoption and maintainability.</p>
    </article>
  );
}

export function CredibilityCard({ title, detail, index = 0 }: { title: string; detail: string; index?: number }) {
  return (
    <article className="credibility-card" data-reveal style={revealStyle(index)}>
      <span aria-hidden="true" />
      <h2>{title}</h2>
      <p>{detail}</p>
    </article>
  );
}

export function ContactOptions() {
  return (
    <div className="contact-options" aria-label="Contact options">
      <a className="contact-link" href={getWhatsAppUrl()} data-reveal style={revealStyle(0)}>
        <span>WhatsApp</span>
        <strong>+{siteConfig.contact.whatsappNumber}</strong>
      </a>
      <a className="contact-link" href={getPhoneUrl()} data-reveal style={revealStyle(1)}>
        <span>Telephone</span>
        <strong>{siteConfig.contact.phoneNumber}</strong>
      </a>
      <a className="contact-link" href={getMailToUrl()} data-reveal style={revealStyle(2)}>
        <span>Email</span>
        <strong>{siteConfig.contact.email}</strong>
      </a>
      <a
        className="contact-link"
        href={`mailto:${siteConfig.contact.secondaryEmail}?subject=${encodeURIComponent(siteConfig.quoteSubject)}`}
        data-reveal
        style={revealStyle(3)}
      >
        <span>Secondary email</span>
        <strong>{siteConfig.contact.secondaryEmail}</strong>
      </a>
    </div>
  );
}
