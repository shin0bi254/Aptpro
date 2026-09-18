import type { Metadata } from "next";
import { ConsultationCta, CredibilityCard, PageHero } from "@/components/PageSections";
import { Breadcrumbs, ContentGrid, RelatedLinks } from "@/components/SeoSections";
import { SiteShell } from "@/components/SiteChrome";
import { createRouteMetadata, positioning, workingApproach } from "@/lib/site-content";

export const metadata: Metadata = createRouteMetadata("/about");

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <Breadcrumbs items={[{href:"/about",label:"About"}]} />
        <PageHero
          eyebrow="About Aptpro"
          title="A practical Kenyan technology partner for real business operations."
          text="Aptpro Business & IT Solutions is a technology consultancy based in Kenya. We combine website development, software engineering, defensive cybersecurity and infrastructure work around the needs of business operations."
        />

        <section className="section-shell about-story">
          <div>
            <p className="eyebrow">How Aptpro thinks</p>
            <h2>Technology should make work clearer, safer and easier to support.</h2>
          </div>
          <div className="about-copy">
            <p>
              Aptpro works with growing organizations that need dependable technology without
              unnecessary complexity. The work starts by understanding how staff serve customers,
              manage records, communicate, hand over work and make decisions.
            </p>
            <p>
              That operating view informs the technical work: support routines, secure access,
              better systems, websites, networks, infrastructure and documentation that people can
              actually use after launch.
            </p>
          </div>
        </section>

        <section className="section-shell credibility-grid">
          {positioning.map((item) => (
            <CredibilityCard key={item.title} title={item.title} detail={item.detail} />
          ))}
        </section>

        <section className="approach-section">
          <div className="section-shell">
            <div className="section-heading compact">
              <p className="eyebrow">Working style</p>
              <h2>Plain-language delivery with technical discipline behind it.</h2>
            </div>
            <div className="timeline">
              {workingApproach.map((item, index) => (
                <article key={item.step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.step}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContentGrid title="Engineering and procurement expectations" blocks={[
          {title:"Requirements before implementation",text:"Identify stakeholders, workflows and acceptance criteria. Define the scope and dependencies before choosing architecture or committing to a release. This applies to a company website as well as a larger business system."},
          {title:"Controlled change and handover",text:"Where relevant, scope access roles, data preparation, testing, migration and release planning. Agree documentation, training, rollback or recovery responsibilities and support ownership."},
          {title:"Kenya first, regional work by scope",text:"Kenya is Aptpro’s primary market. Remote discovery, website delivery and selected technical work can be scoped for organisations across East Africa. On-site requirements depend on location."},
          {title:"Evidence with honest status",text:"Public work distinguishes active development, implemented support, planning and concepts. Veterinary ERP and PACS experience show the connection between software requirements and the operating environment."},
        ]} />
        <RelatedLinks links={[{href:"/website-design",label:"Professional websites for Kenyan businesses"},{href:"/projects",label:"Review public engineering experience"},{href:"/industries",label:"Explore industry operating requirements"},{href:"/contact",label:"Discuss scope and technical requirements"}]} />
        <ConsultationCta />
      </main>
    </SiteShell>
  );
}
