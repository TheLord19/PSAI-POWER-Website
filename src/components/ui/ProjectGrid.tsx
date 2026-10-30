import Link from "next/link";
import type { Project } from "@/content/projects";
import { Nameplate, type PlateField } from "./Nameplate";

// Only fields we actually know go on a card. Unknowns are left off here and
// shown as pending on the case study itself.
export function cardFields(p: Project): PlateField[] {
  const fields: PlateField[] = [];
  if (p.client) fields.push({ label: "Client", value: p.client });
  fields.push({ label: "Region", value: p.region });
  if (p.capacity) fields.push({ label: "Capacity", value: p.capacity });
  if (p.voltageClass) fields.push({ label: "Voltage class", value: p.voltageClass });
  fields.push({ label: "Scope", value: p.scopeShort });
  return fields;
}

export function ProjectGrid({
  projects,
  headingLevel = 3,
}: {
  projects: Project[];
  headingLevel?: 2 | 3;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="mt-8 grid border-l border-t border-rule md:grid-cols-2">
      {projects.map((p) => (
        <li key={p.slug} className="border-b border-r border-rule">
          <Link
            href={`/projects/${p.slug}`}
            className="flex h-full flex-col px-6 py-6 text-tank hover:bg-porcelain-2 hover:no-underline sm:px-7"
          >
            <H className="text-[1.25rem]" style={{ fontStretch: "100%" }}>
              {p.title}
            </H>
            <p className="mb-5 mt-2 text-[0.9375rem] leading-relaxed text-ink-2">
              {p.summary}
            </p>
            <Nameplate fields={cardFields(p)} className="mt-auto" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
