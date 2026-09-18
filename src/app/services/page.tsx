import type { Metadata } from "next";
import { PageHero, ServiceCard, ConsultationCta } from "@/components/PageSections";
import { Breadcrumbs, ContentGrid, RelatedLinks } from "@/components/SeoSections";
import { SiteShell } from "@/components/SiteChrome";
import { createRouteMetadata, serviceCategories } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/services");

export default function ServicesPage() {
  const ordered = [serviceCategories[3], serviceCategories[2], serviceCategories[1], serviceCategories[4], serviceCategories[0], serviceCategories[5]];
  const destinations = ["/website-design", "/erp-systems", "/cybersecurity", "/it-infrastructure", "/it-infrastructure", "/solutions"];
  return (
    <SiteShell>
      <main>
        <Breadcrumbs items={[{href:"/services",label:"Services"}]} />
        <PageHero
          eyebrow="Services"
          title="Website, software and IT services for businesses in Kenya."
          text="Aptpro helps organizations stabilize daily IT, reduce security exposure, build useful business systems and improve the platforms customers and staff rely on."
        />
        <section className="section-shell detail-grid">
          {ordered.map((service, index) => (
            <ServiceCard key={service.title} {...service} href={destinations[index]} index={index} />
          ))}
        </section>
        <ContentGrid title="Automation and industry requirements" blocks={[{title:"Business automation and system integration",text:"Map repeated tasks, reporting and handovers before choosing a connection or custom system. Interface feasibility, permissions, testing and support ownership define the scope."},{title:"Industry-specific operating context",text:"Veterinary operations, property management, professional services, energy businesses and growing SMEs have different records and infrastructure requirements. Sector pages explain service fit and public evidence."}]} />
        <RelatedLinks links={[{href:"/automation",label:"Business automation and integration in Kenya"},{href:"/industries",label:"Industry-specific technology services"},{href:"/projects",label:"Public engineering experience and statuses"}]} />
        <ConsultationCta title="Need help choosing the right service?" text="Describe the issue and Aptpro can help identify the practical next step before you spend on the wrong fix." />
      </main>
    </SiteShell>
  );
}
