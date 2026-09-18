import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationCta, PageHero } from "@/components/PageSections";
import { Breadcrumbs, ContentGrid } from "@/components/SeoSections";
import { SiteShell } from "@/components/SiteChrome";
import { createRouteMetadata } from "@/lib/site-config";
import { industries } from "@/lib/seo-content";

export const metadata: Metadata = createRouteMetadata("/industries");
export default function IndustriesPage() {
  return <SiteShell><main>
    <Breadcrumbs items={[{href:"/industries",label:"Industries"}]} />
    <PageHero eyebrow="Industry context · Kenya" title="Technology services shaped around how your industry operates." text="Aptpro connects websites, business systems, workflow integration, infrastructure and security to the problems an organisation needs to solve. Choose a sector to explore requirements, service fit and public-safe evidence." />
    <section className="section-shell seo-section"><div className="section-heading compact"><h2>Find the operating context closest to your business</h2><p>These pages explain service scope rather than promise identical delivery in every sector. Existing experience is labelled separately from proposed capabilities.</p></div><div className="seo-content-grid">{industries.map((industry) => <article className="detail-card industry-card" key={industry.slug}><h3>{industry.label}</h3><p>{industry.intro}</p><Link className="inline-link" href={`/industries/${industry.slug}`}>Explore {industry.label.toLowerCase()} technology services</Link></article>)}</div></section>
    <ContentGrid title="One business problem can cross several technical boundaries" blocks={[{title:"Start with the immediate requirement",text:"A website, reporting gap or recurring IT fault may be the first scope. Requirements analysis identifies the dependencies and prevents unrelated work being added without a reason."},{title:"Keep delivery evidence clear",text:"Aptpro’s public projects distinguish active implementation, implemented support, deployment planning and concepts. A relevant example informs discovery; it does not replace the requirements review for a new organisation."}]} />
    <ConsultationCta title="Describe your business and the operating problem" text="Kenya is Aptpro’s primary market. Remote discovery and delivery can be scoped for organisations across East Africa, with on-site requirements reviewed separately." />
  </main></SiteShell>;
}
