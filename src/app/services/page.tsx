import type { Metadata } from "next";
import { PageHero, ServiceCard, ConsultationCta } from "@/components/PageSections";
import { SiteShell } from "@/components/SiteChrome";
import { createRouteMetadata, serviceCategories } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/services");

export default function ServicesPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Services"
          title="Practical technology services for the systems your business depends on."
          text="Aptpro helps organizations stabilize daily IT, reduce security exposure, build useful business systems and improve the platforms customers and staff rely on."
        />
        <section className="section-shell detail-grid">
          {serviceCategories.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </section>
        <ConsultationCta title="Need help choosing the right service?" text="Describe the issue and Aptpro can help identify the practical next step before you spend on the wrong fix." />
      </main>
    </SiteShell>
  );
}
