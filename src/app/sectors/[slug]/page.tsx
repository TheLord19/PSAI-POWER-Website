import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/ui/CtaBand";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { RuledIndex } from "@/components/ui/RuledIndex";
import { SectionBus } from "@/components/ui/SectionBus";
import { getCapability } from "@/content/capabilities";
import { getProject } from "@/content/projects";
import { getSector, sectors } from "@/content/sectors";
import { pageMetadata } from "@/lib/metadata";
import { isDefined } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSector(slug);
  if (!s) return {};
  return pageMetadata({ title: s.title, description: s.summary, path: `/sectors/${s.slug}` });
}

// Sector pages are routing pages: two paragraphs, then the capabilities and
// projects that apply. They do not try to be standalone content.
export default async function SectorPage({ params }: Props) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const caps = sector.capabilities.map(getCapability).filter(isDefined);
  const work = sector.projects.map(getProject).filter(isDefined);

  return (
    <>
      <header className="wrap pb-14 pt-10 sm:pt-14">
        <nav aria-label="Breadcrumb" className="mb-4 text-[0.875rem] text-ink-3">
          <Link href="/sectors">Sectors</Link> <span aria-hidden="true">/</span>
        </nav>
        <h1 className="max-w-[22ch]">{sector.title}</h1>
        <div className="mt-6 max-w-[64ch] space-y-4 text-[1.0625rem] leading-relaxed text-ink-2">
          {sector.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </header>

      <SectionBus id="capabilities" heading="Capabilities that apply">
        <RuledIndex
          rows={caps.map((c) => ({
            href: `/capabilities/${c.slug}`,
            title: c.title,
            summary: c.summary,
            qualifier: c.qualifier,
          }))}
        />
      </SectionBus>

      {work.length > 0 && (
        <SectionBus id="projects" heading="Projects">
          <ProjectGrid projects={work} />
        </SectionBus>
      )}

      <CtaBand
        heading="Tell us what you need studied."
        text="Send the single-line diagram and a description of the problem. A licensed engineer will reply, usually within one business day."
      />
    </>
  );
}
