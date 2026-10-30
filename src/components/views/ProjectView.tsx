import { Figure } from "@/components/diagrams/figures";
import { CtaBand } from "@/components/ui/CtaBand";
import { Pending } from "@/components/ui/Pending";
import { TitleBlock } from "@/components/ui/TitleBlock";
import { getCapability } from "@/content/capabilities";
import { type Project, projects } from "@/content/projects";
import { jsonLd, projectSchema } from "@/lib/structured-data";
import { isDefined } from "@/lib/utils";
import { Aside, AsideLinks } from "./Aside";

// Case study template: title block and nameplate, the situation, scope of
// work, approach, one technical figure, then related capabilities. Outcome is
// added once the firm confirms what it may state (list.md).
export function ProjectView({ project: p }: { project: Project }) {
  const caps = p.capabilities.map(getCapability).filter(isDefined);
  const similar = projects
    .filter(
      (o) => o.slug !== p.slug && o.capabilities.some((c) => p.capabilities.indexOf(c) !== -1),
    )
    .slice(0, 3);

  const meta = [
    { label: "Client", value: p.client ?? <Pending /> },
    { label: "Sector", value: p.sector },
    { label: "Region", value: p.region },
    ...(p.capacity ? [{ label: "Capacity", value: p.capacity }] : []),
    { label: "Voltage class", value: p.voltageClass ?? <Pending /> },
    { label: "Year", value: p.year ?? <Pending /> },
    { label: "Engineer of record", value: p.engineerOfRecord ?? <Pending /> },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          projectSchema({ slug: p.slug, title: p.title, summary: p.summary, year: p.year }),
        )}
      />
      <TitleBlock
        trail={[{ href: "/projects", label: "Projects" }]}
        title={p.title}
        sub={p.summary}
        meta={meta}
      />

      <div className="wrap py-14 sm:py-16">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-16">
          <article>
            {p.narrative && (
              <div className="prose mb-12">
                <h2>The situation</h2>
                {p.narrative.situation.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            <div className="prose">
              <h2>Scope of work</h2>
            </div>
            <ul className="checks">
              {p.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            {p.narrative ? (
              <>
                <div className="prose mt-12">
                  <h2>Approach</h2>
                  {p.narrative.approach.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {p.figure && <Figure figKey={p.figure.key} caption={p.figure.caption} />}
              </>
            ) : (
              <p className="mt-8 max-w-[60ch] text-[0.9375rem] leading-relaxed text-ink-3">
                A full write-up of this project — the controlling constraint and
                how it was resolved — is being prepared with the engineer of
                record. Ask us for a reference in the meantime.
              </p>
            )}
          </article>

          <Aside>
            <AsideLinks
              title="Capabilities used"
              links={caps.map((c) => ({ href: `/capabilities/${c.slug}`, label: c.title }))}
            />
            <AsideLinks
              title="Similar work"
              links={similar.map((o) => ({
                href: `/projects/${o.slug}`,
                label: `${o.title}, ${o.region}`,
              }))}
            />
          </Aside>
        </div>
      </div>

      <CtaBand heading={p.cta.heading} text={p.cta.text} />
    </>
  );
}
