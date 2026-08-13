import type { Metadata } from "next";
import { ConsultationCta, PageHero, ProjectCard } from "@/components/PageSections";
import { SiteShell } from "@/components/SiteChrome";
import { projects } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Projects and Experience",
  description:
    "Selected Aptpro experience across ERP systems, veterinary imaging, laboratory workflows, websites, CCTV planning, business IT support and operational concepts.",
};

export default function ProjectsPage() {
  const selected = projects.filter((project) =>
    ["Active development", "Technical implementation", "Implemented support", "Deployment planning"].includes(project.status),
  );
  const concepts = projects.filter((project) => !selected.includes(project));

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Projects and experience"
          title="Technology work shaped by real operating environments."
          text="Aptpro experience includes active system development, technical implementation, deployment planning, business support and carefully scoped concepts. Status labels are kept honest."
        />

        <section className="section-shell projects-page">
          <div className="section-heading compact">
            <p className="eyebrow">Selected work</p>
            <h2>Active, implemented and deployment-focused work.</h2>
          </div>
          <div className="project-grid">
            {selected.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

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

        <ConsultationCta title="Have a workflow that feels hard to explain?" text="Aptpro can help map it, identify the pressure points and shape a practical technology path." />
      </main>
    </SiteShell>
  );
}
