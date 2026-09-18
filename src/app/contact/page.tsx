import type { Metadata } from "next";
import { QuoteRequest } from "@/components/QuoteRequest";
import { ContactOptions, PageHero } from "@/components/PageSections";
import { Breadcrumbs, ContentGrid, RelatedLinks } from "@/components/SeoSections";
import { SiteShell } from "@/components/SiteChrome";
import { createRouteMetadata } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/contact");

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <Breadcrumbs items={[{href:"/contact",label:"Contact"}]} />
        <PageHero
          eyebrow="Contact"
          title="Discuss a website or technology project in Kenya."
          text="Use WhatsApp, telephone, email or the structured enquiry builder. Your message opens in your own app so you can review it before sending."
        />

        <section className="contact-section page-contact">
          <div className="section-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Verified contact details</p>
              <h2>Talk to Aptpro about the systems, support or workflow problem in front of you.</h2>
              <p>
                Start with the business goal and the project type. WhatsApp is the quickest route to
                a conversation; the short brief prepares a message for you to review and send.
                This website does not store the enquiry in its own backend.
              </p>
              <ContactOptions />
            </div>
            <QuoteRequest />
          </div>
        </section>
        <ContentGrid title="What can we help you scope?" blocks={[
          {title:"Websites and business systems",text:"A new website, redesign, ERP, workflow automation or existing-system support can start with a general description. Include the current site or tool names where useful."},
          {title:"Security and infrastructure",text:"Describe the IT problem or authorised security-review requirement. Do not include credentials, confidential records or private network details in the first enquiry."},
          {title:"Kenya and regional delivery",text:"Tell us the organisation’s location and whether on-site work is needed. Kenya is the primary market; remote work across East Africa is assessed against the engagement scope."},
        ]} />
        <RelatedLinks links={[{href:"/website-design",label:"Website scope and buying questions"},{href:"/erp-systems",label:"Business-system requirements"},{href:"/automation",label:"Workflow automation feasibility"}]} />
      </main>
    </SiteShell>
  );
}
