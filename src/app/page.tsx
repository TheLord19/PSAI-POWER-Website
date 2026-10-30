import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaultDemo } from "@/components/diagrams/FaultDemo";
import { Credentials } from "@/components/ui/Credentials";
import { CtaBand } from "@/components/ui/CtaBand";
import { Pending } from "@/components/ui/Pending";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { RuledIndex } from "@/components/ui/RuledIndex";
import { SectionBus } from "@/components/ui/SectionBus";
import { capabilities } from "@/content/capabilities";
import { CREDENTIALS, FOUNDER, RECORD } from "@/content/firm";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: { absolute: "PSAI Power — Power system engineering, Sudbury, Ontario" },
  description:
    "Power system studies, protection coordination, arc flash, DER interconnection, substation design and commissioning for utilities, mines and renewable developers.",
  alternates: { canonical: "/" },
};

// Server component. The only client JavaScript on this page is the fault
// demo's toggle and the header's menu button.
export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-heading" className="on-dark bg-tank text-porcelain">
        <div className="wrap pb-14 pt-14 sm:pb-16 sm:pt-20">
          <h1
            id="hero-heading"
            className="max-w-[17ch] text-white"
            style={{
              fontSize: "var(--t-display)",
              fontStretch: "116%",
              letterSpacing: "-0.025em",
              lineHeight: 1.04,
            }}
          >
            When protection is designed right, nothing happens.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[1.125rem] leading-relaxed text-on-tank">
            Power system studies, protection and control design, and
            commissioning for utilities, mines, and renewable developers.
            Licensed in Ontario, British Columbia, and Manitoba.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="btn btn-live">
              Talk to an engineer
            </Link>
            <Link href="/projects" className="btn btn-ghost-dark">
              See our projects
            </Link>
          </div>
          <FaultDemo />
        </div>
      </section>

      {/* The record: four figures hanging off one bus. */}
      <section aria-labelledby="record-heading" className="pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="wrap">
          <h2 id="record-heading" className="sr-only">
            The record
          </h2>
          <div className="border-t-[3px] border-tank">
            <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
              {RECORD.map((r) => (
                <div key={r.label} className="flex flex-col border-l border-rule px-4 pt-5 sm:px-6">
                  <dt className="order-2 mt-2 text-[0.875rem] leading-snug text-ink-3">
                    {r.label}
                  </dt>
                  <dd
                    className="order-1 m-0 font-bold leading-none tabular"
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                      fontStretch: "125%",
                      letterSpacing: "-0.035em",
                    }}
                  >
                    {r.value}
                    <span
                      className="ml-1 text-[0.4em] font-semibold tracking-normal text-ink-3"
                      style={{ fontStretch: "100%" }}
                    >
                      {r.unit}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <SectionBus
        id="capabilities"
        heading="Capabilities"
        intro="Six practice areas. Each page states the standards applied, the deliverables you receive, and a typical schedule."
      >
        <RuledIndex
          rows={capabilities.map((c) => ({
            href: `/capabilities/${c.slug}`,
            title: c.title,
            summary: c.summary,
            qualifier: c.qualifier,
          }))}
        />
      </SectionBus>

      <SectionBus
        id="projects"
        heading="Projects"
        intro="Utility, mining and renewable work in Canada, the Caribbean, Latin America and Southeast Asia."
        action={
          <Link href="/projects" className="text-[0.9375rem]">
            All projects
          </Link>
        }
      >
        <ProjectGrid projects={projects} />
      </SectionBus>

      <SectionBus
        id="licensure"
        heading="Licensure"
        intro="Every project is stamped by a licensed professional engineer. Registration numbers are listed so you can verify them with each association."
      >
        <Credentials items={CREDENTIALS} />

        <figure className="mt-12 grid items-start gap-8 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10">
          <Image
            src={FOUNDER.photo}
            alt={`${FOUNDER.name}, ${FOUNDER.role.toLowerCase()}`}
            width={320}
            height={427}
            sizes="10rem"
            className="aspect-[3/4] w-40 border border-rule object-cover"
          />
          <div>
            <blockquote className="m-0 max-w-[36ch] font-serif text-[1.375rem] leading-[1.5]">
              <p className="m-0">{FOUNDER.quote}</p>
            </blockquote>
            <figcaption className="mt-5 text-[0.9375rem] leading-relaxed text-ink-2">
              <span className="font-semibold text-tank">
                {FOUNDER.name}, {FOUNDER.credential}
              </span>{" "}
              — {FOUNDER.role}. Licence no. {FOUNDER.registration ?? <Pending />}.
              <br />
              <Link href="/firm">About the firm</Link>
            </figcaption>
          </div>
        </figure>
      </SectionBus>

      <CtaBand
        heading="Tell us what you need studied."
        text="You will be answered by a licensed engineer, usually within one business day. Not a sales team."
      />
    </>
  );
}
