import Link from "next/link";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import type { ContentBlock, ContextLink, Faq } from "@/lib/seo-content";

export const providerId = `${siteConfig.canonicalOrigin}/#organization`;
export const serviceArea = [{ "@type": "Country", name: "Kenya" }, { "@type": "Place", name: "East Africa" }];

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function ServiceSchema({ path, name, description, serviceType }: { path: string; name: string; description: string; serviceType: string | string[] }) {
  return <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", "@id": `${absoluteUrl(path)}#service`, name, description, url: absoluteUrl(path), serviceType, provider: { "@id": providerId }, areaServed: serviceArea }} />;
}

export function EntitySchema() {
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": [
    { "@type": ["Organization", "ProfessionalService"], "@id": providerId, name: siteConfig.businessName, alternateName: siteConfig.shortName, url: siteConfig.canonicalOrigin, logo: absoluteUrl("/aptpro-logo.png"), description: siteConfig.description, email: siteConfig.contact.email, telephone: `+${siteConfig.contact.whatsappNumber}`, areaServed: serviceArea, address: { "@type": "PostalAddress", addressCountry: "KE" }, knowsAbout: ["Website design and development", "ERP and business systems", "Defensive cybersecurity", "IT infrastructure", "Workflow automation and integration"] },
    { "@type": "WebSite", "@id": `${siteConfig.canonicalOrigin}/#website`, url: siteConfig.canonicalOrigin, name: siteConfig.businessName, publisher: { "@id": providerId }, inLanguage: "en-KE" },
  ] }} />;
}

export function Breadcrumbs({ items }: { items: ContextLink[] }) {
  const trail = [{ href: "/", label: "Home" }, ...items];
  return <>
    <nav className="section-shell breadcrumbs" aria-label="Breadcrumb"><ol>{trail.map((item, index) => <li key={item.href}>{index === trail.length - 1 ? <span aria-current="page">{item.label}</span> : <Link href={item.href}>{item.label}</Link>}</li>)}</ol></nav>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: trail.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: absoluteUrl(item.href) })) }} />
  </>;
}

export function ContentGrid({ title, eyebrow, blocks }: { title: string; eyebrow?: string; blocks: ContentBlock[] }) {
  return <section className="section-shell seo-section"><div className="section-heading compact">{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h2>{title}</h2></div><div className="seo-content-grid">{blocks.map((block) => <article className="detail-card seo-card" key={block.title}><h3>{block.title}</h3><p>{block.text}</p></article>)}</div></section>;
}

export function FaqSection({ faqs, title = "Questions before you scope the work" }: { faqs: Faq[]; title?: string }) {
  return <section className="section-shell faq-section"><div className="section-heading compact"><p className="eyebrow">Practical answers</p><h2>{title}</h2></div>{faqs.map((faq) => <details className="faq-item" key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>;
}

export function RelatedLinks({ links, title = "Related services and evidence" }: { links: ContextLink[]; title?: string }) {
  return <section className="section-shell seo-section"><h2 className="seo-links-title">{title}</h2><nav className="related-links" aria-label={title}>{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav></section>;
}
