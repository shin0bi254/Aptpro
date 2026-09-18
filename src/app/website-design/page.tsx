import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationCta, PageHero } from "@/components/PageSections";
import { NumberedStep } from "@/components/ModernUI";
import { Breadcrumbs, ContentGrid, FaqSection, RelatedLinks, ServiceSchema } from "@/components/SeoSections";
import { SiteShell } from "@/components/SiteChrome";
import { createRouteMetadata, getWhatsAppUrl } from "@/lib/site-config";
import { websiteFaqs, websiteFoundations, websiteOfferings, websiteProcess } from "@/lib/seo-content";

export const metadata: Metadata = createRouteMetadata("/website-design");

export default function WebsiteDesignPage() {
  return <SiteShell><main>
    <Breadcrumbs items={[{ href: "/services", label: "Services" }, { href: "/website-design", label: "Website design" }]} />
    <ServiceSchema path="/website-design" name="Website design and development in Kenya" description="Professional company websites, redesigns, WordPress and custom development with agreed SEO, security, performance and support foundations." serviceType={["Website design", "Web development", "Website redesign", "WordPress development and support", "Next.js development"]} />
    <PageHero eyebrow="Website design & development · Kenya" title="Professional website design and development for businesses in Kenya." text="Aptpro designs and develops company websites, SME websites and custom digital platforms. We connect clear service content and enquiry paths with software engineering, SEO foundations, performance and cybersecurity." />
    <section className="section-shell seo-section seo-answer">
      <h2>Your website is part of the business’s digital infrastructure.</h2>
      <p>Aptpro is a Kenyan technology consultancy that builds websites as well as business systems. We consider how a customer finds your service, makes an enquiry and reaches the team responsible for follow-up. Where needed, the website can connect to an agreed automation or ERP scope.</p>
      <p>Kenya is our primary market. We work with businesses in Nairobi and elsewhere in the country; remote discovery and delivery can also be scoped across East Africa. On-site work depends on the location and requirements.</p>
      <div className="hero-actions"><Link className="primary-button" href="/contact">Discuss a website or redesign</Link><a className="secondary-button" href={getWhatsAppUrl("Hello Aptpro, I would like to discuss website design or a website redesign for my business.")}>Send a website enquiry on WhatsApp</a></div>
    </section>
    <ContentGrid eyebrow="Website scope" title="Choose the website your business needs" blocks={websiteOfferings} />
    <ContentGrid eyebrow="Engineering foundations" title="What sits behind a useful business website" blocks={websiteFoundations} />
    <section className="feature-band websites-band"><div className="section-shell seo-section">
      <div className="section-heading compact"><p className="eyebrow">Delivery process</p><h2>Eight stages, with decisions and responsibilities made clear</h2><p>The scope determines the depth of each stage. Larger projects need stakeholder reviews and explicit acceptance criteria; smaller sites still need clear content, testing and handover.</p></div>
      <div className="seo-content-grid">{websiteProcess.map((step, index) => <NumberedStep key={step.title} code={String(index + 1).padStart(2, "0")} title={step.title} description={step.text} />)}</div>
    </div></section>
    <section className="section-shell seo-section seo-answer"><p className="eyebrow">Public experience</p><h2>Website support with a wider technical context</h2><p>Aptpro’s public Tesni Energies experience covers WordPress troubleshooting, service structure and clearer presentation of solar-energy services. The recorded scope is implemented website support.</p><p>The same consultancy works on active ERP development, local infrastructure and specialist integrations. That understanding of business operations helps identify when a website requirement also needs data, access or workflow engineering.</p><Link className="inline-link" href="/projects#tesni-energies">Review the Tesni Energies website-support scope</Link></section>
    <ContentGrid title="What to bring to a website scoping conversation" blocks={[
      {title:"Your business and audience",text:"Describe the services or products, who buys them and the enquiry you want to receive. Share the existing site if this is a redesign."},
      {title:"Content and approvals",text:"Identify available copy, brand materials and public-safe evidence. Agree who approves pages and who will maintain information after launch."},
      {title:"Functionality and ownership",text:"Explain editing needs, domain and hosting ownership, integrations and support expectations. These requirements affect platform, cost and delivery stages."},
    ]} />
    <FaqSection title="Website design questions from Kenyan businesses" faqs={websiteFaqs} />
    <RelatedLinks title="Website services in your business context" links={[{href:"/industries/smes",label:"Websites and technology for Kenyan SMEs"},{href:"/industries/property-management",label:"Property websites and viewing enquiries"},{href:"/industries/professional-services",label:"Company websites for professional services"},{href:"/automation",label:"Business-system and workflow integration"},{href:"/projects",label:"Public website and engineering experience"}]} />
    <ConsultationCta title="Plan the website around what your business needs next" text="Tell us about the audience, current site, content, desired enquiry and any integration requirements. Aptpro will help define a practical scope." />
  </main></SiteShell>;
}
