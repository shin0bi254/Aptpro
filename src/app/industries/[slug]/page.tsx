import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultationCta, PageHero } from "@/components/PageSections";
import { Breadcrumbs, ContentGrid, FaqSection, RelatedLinks, ServiceSchema } from "@/components/SeoSections";
import { SiteShell } from "@/components/SiteChrome";
import { createRouteMetadata } from "@/lib/site-config";
import { industries } from "@/lib/seo-content";

type Props = { params: Promise<{slug: string}> };
export const dynamicParams = false;
export function generateStaticParams() { return industries.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  return createRouteMetadata(`/industries/${industry.slug}`);
}
export default async function IndustryPage({params}: Props) {
  const {slug} = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  const path = `/industries/${industry.slug}`;
  return <SiteShell><main>
    <Breadcrumbs items={[{href:"/industries",label:"Industries"},{href:path,label:industry.label}]} />
    <ServiceSchema path={path} name={industry.title} description={industry.intro} serviceType="Industry-specific technology consultancy" />
    <PageHero eyebrow="Industry technology · Kenya" title={industry.title} text={industry.intro} />
    <section className="section-shell seo-section seo-answer"><p className="eyebrow">Operating requirements</p><h2>The business problem comes before the platform</h2><p>{industry.challenge}</p></section>
    <ContentGrid title={`Technology scope for ${industry.label.toLowerCase()}`} blocks={industry.blocks} />
    <ContentGrid title="What to clarify before implementation" blocks={industry.planning} />
    <section className="section-shell seo-section seo-answer"><p className="eyebrow">Evidence and scope</p><h2>What the public experience establishes</h2><p>{industry.evidence}</p></section>
    <FaqSection title={`${industry.label}: questions before an engagement`} faqs={industry.faqs} />
    <RelatedLinks links={industry.links} />
    <ConsultationCta title={`Discuss technology requirements for your ${industry.slug === "smes" ? "growing business" : "organisation"}`} text="Describe the immediate problem, existing tools and intended users. Share general requirements first; confidential records and credentials do not belong in a public enquiry." />
  </main></SiteShell>;
}
