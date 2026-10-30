import { Fragment } from "react";
import { Figure } from "@/components/diagrams/figures";
import { CtaBand } from "@/components/ui/CtaBand";
import { TitleBlock } from "@/components/ui/TitleBlock";
import { type Capability, getCapability, headingsFor } from "@/content/capabilities";
import { getProject } from "@/content/projects";
import { jsonLd, serviceSchema } from "@/lib/structured-data";
import { isDefined } from "@/lib/utils";
import { Aside, AsideLinks } from "./Aside";

function Terms({ items }: { items: { term: string; text: string }[] }) {
  return (
    <dl className="terms">
      {items.map((t) => (
        <Fragment key={t.term}>
          <dt>{t.term}</dt>
          <dd>{t.text}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

// Fixed section order for all six capability pages: what the study answers,
// when you need one, what it involves, a figure, what you receive, and what
// usually goes wrong — the section that proves field experience.
export function CapabilityView({ capability: c }: { capability: Capability }) {
  const h = headingsFor(c);
  const related = c.relatedProjects.map(getProject).filter(isDefined);
  const siblings = c.relatedCapabilities.map(getCapability).filter(isDefined);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({ slug: c.slug, title: c.heading, summary: c.metaDescription }),
        )}
      />
      <TitleBlock
        trail={[{ href: "/capabilities", label: "Capabilities" }]}
        title={c.heading}
        sub={c.lede}
        meta={c.meta}
      />

      <div className="wrap py-14 sm:py-16">
        {/* minmax(0,1fr) at every width: an auto track would stretch to the
            figure's min-width instead of letting the figure scroll inside. */}
        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-16">
          <article>
            <div className="prose">
              <h2>{h.answers}</h2>
              {c.answers.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <h2>{h.when}</h2>
              {c.when.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <h2>{h.involves}</h2>
              <Terms items={c.involves} />
            </div>

            <Figure figKey={c.figure.key} caption={c.figure.caption} />

            <div className="prose">
              <h2>{h.receive}</h2>
            </div>
            <ul className="checks">
              {c.receive.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            {c.receiveNote && (
              <div className="prose">
                <p>{c.receiveNote}</p>
              </div>
            )}

            <div className="prose mt-12">
              <h2>{h.goesWrong}</h2>
              <Terms items={c.goesWrong} />
            </div>
          </article>

          <Aside>
            <AsideLinks
              title="Related projects"
              links={related.map((p) => ({
                href: `/projects/${p.slug}`,
                label: `${p.title}, ${p.region}`,
              }))}
            />
            <AsideLinks
              title="Related capabilities"
              links={siblings.map((s) => ({ href: `/capabilities/${s.slug}`, label: s.title }))}
            />
          </Aside>
        </div>
      </div>

      <CtaBand heading={c.cta.heading} text={c.cta.text} />
    </>
  );
}
