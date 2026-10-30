import { CtaBand } from "@/components/ui/CtaBand";
import { RuledIndex } from "@/components/ui/RuledIndex";
import { TitleBlock } from "@/components/ui/TitleBlock";
import { capabilities } from "@/content/capabilities";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Capabilities",
  description:
    "Power system studies, protection coordination, arc flash, DER interconnection, substation design and commissioning — the standards, deliverables and schedule for each.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <>
      <TitleBlock
        title="Capabilities"
        sub="Six practice areas, from the first study to the day the system is put into service. Each page states the standards we work to, what you receive, and what usually goes wrong."
        meta={[
          { label: "Practice areas", value: "6" },
          { label: "Voltage range", value: "208 V to 132 kV" },
          { label: "Standards", value: "CSA, IEEE, IEC" },
          { label: "Reports", value: "Stamped by a P.Eng." },
        ]}
      />
      <div className="wrap pb-20 pt-6">
        <RuledIndex
          headingLevel={2}
          rows={capabilities.map((c) => ({
            href: `/capabilities/${c.slug}`,
            title: c.title,
            summary: c.summary,
            qualifier: c.qualifier,
          }))}
        />
      </div>
      <CtaBand
        heading="Not sure which study you need?"
        text="Send the single-line diagram and a description of what is changing or failing. An engineer will tell you what the work involves."
      />
    </>
  );
}
