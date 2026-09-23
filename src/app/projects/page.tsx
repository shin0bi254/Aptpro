import type { Metadata } from "next";
import { ConsultationCta, PageHero, ProjectCard } from "@/components/PageSections";
import { Breadcrumbs, ContentGrid, RelatedLinks } from "@/components/SeoSections";
import { SiteShell } from "@/components/SiteChrome";
import { createRouteMetadata, projectGroups, projects } from "@/lib/site-content";
import { defensiveTools, engineeringGroups } from "@/lib/security-engineering";

export const metadata: Metadata = createRouteMetadata("/projects");

export default function ProjectsPage() {
  const selected = projects.filter((project) =>
    ["Active implementation", "Implemented support", "Delivered", "Deployment planning"].includes(project.status),
  );
  const concepts = projects.filter((project) => !selected.includes(project));

  return (
    <SiteShell>
      <main>
        <Breadcrumbs items={[{href:"/projects",label:"Projects"}]} />
        <PageHero
          eyebrow="Projects and experience"
          title="Technology work shaped by real operating environments."
          text="Aptpro experience includes active system development, technical implementation, deployment planning, business support and carefully scoped concepts. Status labels are kept honest."
        />

        <section className="section-shell projects-page">
          <div className="section-heading compact">
            <p className="eyebrow">Experience by engineering scope</p>
            <h2>Websites, systems and infrastructure in their operating context.</h2>
          </div>
          <div className="tag-matrix project-groups">
            {projectGroups.map((group) => (
              <span key={group}>{group}</span>
            ))}
          </div>
        </section>

        <section className="section-shell projects-page">
          <div className="section-heading compact">
            <p className="eyebrow">Selected work</p>
            <h2>Public engineering experience with delivery status made explicit.</h2>
          </div>
          <div className="project-grid">
            {selected.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="section-shell projects-page cybersecurity-projects"><div className="section-heading compact"><p className="eyebrow">Cybersecurity engineering</p><h2>Defensive tooling, platform development and research—status labelled.</h2><p>NETAFANDE is an active engineering platform. Focused utilities are built work; advanced items are research, prototype or architecture work, not claimed deployments.</p></div><div className="project-grid">{[{name:"NETAFANDE",status:"Active development",role:"Kenya-first endpoint security and security operations engineering platform.",capabilities:["Endpoint visibility","Detection","Triage"]}, ...defensiveTools.slice(0,3).map((tool) => ({name:tool.name,status:tool.status,role:tool.summary,capabilities:["Defensive tooling"]})), ...engineeringGroups[0].items.slice(0,2).map((item) => ({name:item.name,status:item.status,role:item.summary,capabilities:["Security R&D"]}))].map((project,index) => <ProjectCard key={project.name} project={{...project,category:"Cybersecurity engineering",problem:"Public defensive-security engineering scope with maturity stated."}} index={index} />)}</div><RelatedLinks title="Explore cybersecurity engineering" links={[{href:"/cybersecurity/netafande",label:"NETAFANDE platform"},{href:"/cybersecurity/engineering",label:"Full security engineering portfolio"},{href:"/cybersecurity",label:"Cybersecurity services"}]} /></section>

        <section className="section-shell projects-page concepts">
          <div className="section-heading compact">
            <p className="eyebrow">Concepts & solutions</p>
            <h2>Ideas and planned systems presented without pretending they are completed case studies.</h2>
          </div>
          <div className="project-grid">
            {concepts.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={selected.length + index} />
            ))}
          </div>
        </section>

        <ContentGrid title="Read the engineering scope behind the portfolio" blocks={[
          {title:"Veterinary ERP and specialist systems",text:"NASCAH ERP covers an active engagement around clinical workflows, inventory, billing and access control. Orthanc PACS/DICOM support and laboratory planning are separate scopes, with distinct statuses. The detailed case study identifies these boundaries."},
          {title:"Tesni Energies website support",text:"The public scope covers WordPress troubleshooting, service structure and presentation of residential, commercial, installation, maintenance, storage and consultation services. This is implemented support, with no claimed full rebuild or quantified sales outcome."},
          {title:"Business IT and infrastructure",text:"Public support includes network troubleshooting, QuickBooks user support, business email and Outlook configuration. Local hosting, intranet work and farm CCTV remain planning scopes where the site does not establish completed deployment."},
          {title:"How to evaluate the evidence",text:"Use challenge, scope, technology and status to assess relevance to your organisation. A concept is not a completed implementation, and a related project is not a promise that your environment has identical requirements."},
        ]} />
        <RelatedLinks title="Case study and related requirements" links={[{href:"/projects/veterinary-systems",label:"Veterinary ERP, PACS and integration case study"},{href:"/industries/veterinary",label:"Veterinary technology service scope"},{href:"/industries/energy-solar",label:"Website and IT requirements for energy businesses"},{href:"/website-design",label:"Company website development and support"},{href:"/contact",label:"Discuss a comparable engineering scope"}]} />
        <ConsultationCta title="Have a workflow that feels hard to explain?" text="Aptpro can help map it, identify the pressure points and shape a practical technology path." />
      </main>
    </SiteShell>
  );
}
