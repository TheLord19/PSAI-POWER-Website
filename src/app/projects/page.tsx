import { TitleBlock } from "@/components/ui/TitleBlock";
import { PROJECT_FILTERS, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { ProjectArchive } from "./ProjectArchive";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Power system engineering projects — DER interconnection, substation protection, remote mine supply and grid modernization — filterable by sector, region and voltage class.",
  path: "/projects",
});

// The project archive is the one dark environment on the site, so it reads
// as a distinct place: the record, not the brochure.
export default function ProjectsPage() {
  return (
    <div className="on-dark bg-tank text-porcelain">
      <TitleBlock
        title="Projects"
        sub="The record, project by project. Filter by sector, region or voltage class — power engineers think in voltage tiers, so the archive does too."
        meta={[
          { label: "Written up", value: `${projects.length} of 75+ delivered` },
          { label: "Regions", value: "4" },
          { label: "Largest DER integration", value: "150 MW" },
          { label: "Highest voltage", value: "132 kV" },
        ]}
      />
      <section aria-label="Project archive" className="pb-20">
        <div className="wrap">
          <ProjectArchive projects={projects} filters={PROJECT_FILTERS} />
        </div>
      </section>
    </div>
  );
}
