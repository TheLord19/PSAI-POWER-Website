import { CtaBand } from "@/components/ui/CtaBand";
import { RuledIndex } from "@/components/ui/RuledIndex";
import { sectors } from "@/content/sectors";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sectors",
  description:
    "Utilities, mining, renewable developers and industrial plants — the four kinds of client PSAI Power works for, and the capabilities and projects that apply to each.",
  path: "/sectors",
});

export default function SectorsPage() {
  return (
    <>
      <header className="wrap pb-2 pt-14 sm:pt-16">
        <h1>Sectors</h1>
        <p className="mt-4 max-w-[60ch] text-[1.125rem] leading-relaxed text-ink-2">
          Four kinds of client, four sets of constraints. Each page links to
          the capabilities and projects that apply.
        </p>
      </header>
      <div className="wrap pb-20">
        <RuledIndex
          headingLevel={2}
          rows={sectors.map((s) => ({
            href: `/sectors/${s.slug}`,
            title: s.title,
            summary: s.summary,
            qualifier: s.qualifier,
          }))}
        />
      </div>
      <CtaBand
        heading="Tell us what you need studied."
        text="Send the single-line diagram and a description of the problem. A licensed engineer will reply, usually within one business day."
      />
    </>
  );
}
