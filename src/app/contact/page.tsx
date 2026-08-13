import type { Metadata } from "next";
import { QuoteRequest } from "@/components/QuoteRequest";
import { ContactOptions, PageHero } from "@/components/PageSections";
import { SiteShell } from "@/components/SiteChrome";
import { createRouteMetadata } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/contact");

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Contact"
          title="Book a consultation or send a clear technology support enquiry."
          text="Use WhatsApp, telephone, email or the structured enquiry builder. Your message opens in your own app so you can review it before sending."
        />

        <section className="contact-section page-contact">
          <div className="section-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Verified contact details</p>
              <h2>Talk to Aptpro about the systems, support or workflow problem in front of you.</h2>
              <p>
                There is no backend form pretending to save your message. The enquiry builder
                prepares WhatsApp or email content using your own app.
              </p>
              <ContactOptions />
            </div>
            <QuoteRequest />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
