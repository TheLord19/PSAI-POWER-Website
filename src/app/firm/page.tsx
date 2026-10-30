import Image from "next/image";
import Link from "next/link";
import { Credentials } from "@/components/ui/Credentials";
import { CtaBand } from "@/components/ui/CtaBand";
import { Pending } from "@/components/ui/Pending";
import { SectionBus } from "@/components/ui/SectionBus";
import { TitleBlock } from "@/components/ui/TitleBlock";
import { CREDENTIALS, FOUNDER, HOW_WE_WORK, WHERE_WE_WORK } from "@/content/firm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "The firm",
  description:
    "PSAI Power Engineering Labs is a power system engineering practice in Sudbury, Ontario, founded by Prasad Shrawane. Licensure, people, and how we work.",
  path: "/firm",
});

// Absorbs the old About, Licenses and Team pages. Founder first — utility
// procurement buys from people — then the registrations that make the work
// stampable.
export default function FirmPage() {
  return (
    <>
      <TitleBlock
        title="The firm"
        sub="PSAI Power Engineering Labs is a power system engineering practice in Sudbury, Ontario. We have worked for utilities, mines and renewable developers since 2004."
        meta={[
          { label: "Founded", value: "2004" },
          { label: "Office", value: "Sudbury, Ontario" },
          { label: "Licensed in", value: "ON, BC, MB" },
          { label: "Principal", value: `${FOUNDER.name}, ${FOUNDER.credential}` },
        ]}
      />

      <div className="pt-16 sm:pt-20">
        <SectionBus id="founder" heading="Founder">
          <div className="mt-8 grid items-start gap-8 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-12">
            <Image
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              width={480}
              height={640}
              sizes="(min-width: 768px) 15rem, 60vw"
              className="aspect-[3/4] w-full max-w-[15rem] border border-rule object-cover"
            />
            <div>
              <h3 className="text-[1.5rem]" style={{ fontStretch: "112%" }}>
                {FOUNDER.name}, {FOUNDER.credential}
              </h3>
              <p className="mt-1 text-ink-3">
                {FOUNDER.role} · Licence no. {FOUNDER.registration ?? <Pending />}
              </p>
              <blockquote className="mx-0 mb-0 mt-6 max-w-[40ch] font-serif text-[1.375rem] leading-[1.5]">
                <p className="m-0">{FOUNDER.quote}</p>
              </blockquote>
              <p className="mt-6 max-w-[62ch] leading-relaxed text-ink-2">
                {FOUNDER.bio ?? <Pending>Biography to follow.</Pending>}
              </p>
            </div>
          </div>
        </SectionBus>

        <SectionBus
          id="licensure"
          heading="Licensure"
          intro="Engineering in Canada is regulated province by province. These are the registrations that let us stamp work, and the numbers to verify them."
        >
          <Credentials items={CREDENTIALS} />
        </SectionBus>

        <SectionBus id="how-we-work" heading="How we work">
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {HOW_WE_WORK.map((item) => (
              <div key={item.title} className="border-l border-rule pl-5">
                <h3 className="text-[1.0625rem]">{item.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">{item.text}</p>
              </div>
            ))}
          </div>
        </SectionBus>

        <SectionBus id="where-we-work" heading="Where we work">
          <dl className="mt-8 max-w-[44rem] border-t border-rule">
            {WHERE_WE_WORK.map((w) => (
              <div key={w.label} className="grid gap-1 border-b border-rule py-3 sm:grid-cols-[12rem_1fr]">
                <dt className="text-ink-3">{w.label}</dt>
                <dd className="m-0 font-medium">{w.value}</dd>
              </div>
            ))}
          </dl>
        </SectionBus>

        <SectionBus
          id="careers"
          heading="Careers"
          intro="Two openings: an intermediate electrical engineer and an electrical field technician."
          action={
            <Link href="/careers" className="text-[0.9375rem]">
              See the postings
            </Link>
          }
        />
      </div>

      <CtaBand
        heading="Talk to the engineer who will do the work."
        text="Send the single-line diagram and a description of what is changing or failing. You will hear back from a licensed engineer, usually within one business day."
      />
    </>
  );
}
