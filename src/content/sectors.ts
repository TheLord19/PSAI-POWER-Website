// Four sectors, down from six. Oil & gas and government/regulatory were
// dropped: there is no project evidence for either, and listing sectors you
// cannot demonstrate dilutes the ones you can. Old URLs redirect to /sectors.
//
// Sector pages are routing pages — two paragraphs, then links to the
// capabilities and projects that apply. They should not try to be
// standalone content.

export type SectorPage = {
  slug: string;
  title: string;
  summary: string;
  qualifier: string;
  body: string[];
  capabilities: string[];
  projects: string[];
};

export const sectors: SectorPage[] = [
  {
    slug: "utilities",
    title: "Utilities and grid operators",
    summary:
      "Distribution and transmission utilities replacing protection, connecting new generation, or adding capacity.",
    qualifier: "Distribution and transmission",
    body: [
      "Utility work is mostly about change on an existing system: new generation connecting to feeders designed for one-way flow, electromechanical relays reaching end of life, load growth outpacing station capacity, and the automation needed to restore service faster after a fault.",
      "The engineering problem is doing that work on a system that has to stay in service, to the utility's own standards, with documentation the utility's engineers will review line by line. We work to the utility's standards and drawing conventions.",
    ],
    capabilities: [
      "protection-and-control",
      "power-system-studies",
      "substation-design",
      "renewable-interconnection",
    ],
    projects: [
      "ontario-substation-protection-upgrade",
      "southeast-asia-grid-modernization",
    ],
  },
  {
    slug: "mining",
    title: "Mining",
    summary:
      "Remote supply, long feeders, large motors and harsh conditions, for operating mines and new developments.",
    qualifier: "Remote supply, large motors",
    body: [
      "Mine power systems are unusual in three ways. They are often remote, fed by a long transmission line or on-site generation with a weak source. They carry a high share of large motor and drive load — hoists, mills, crushers, pumps — that stresses voltage every time something starts. And they keep changing as the mine develops, so the system on the drawings is rarely the system underground.",
      "That combination makes load flow, motor starting and protection coordination unusually consequential, and it makes arc flash work essential for the crews who maintain the equipment every day.",
    ],
    capabilities: [
      "power-system-studies",
      "protection-and-control",
      "arc-flash-and-safety",
      "substation-design",
    ],
    projects: ["latin-america-mine-power-system"],
  },
  {
    slug: "renewables",
    title: "Renewable developers",
    summary:
      "Solar, wind and storage developers who need interconnection studies and point of interconnection design.",
    qualifier: "Solar, wind, storage",
    body: [
      "For a developer, the interconnection study is on the critical path and outside your control: the utility sets the requirements, runs its own review, and decides which upgrades you pay for. The job of your own engineering is to get the application right the first time, and to find the expensive problems — voltage rise, reverse power, protection that no longer sees faults — before the utility does.",
      "After approval, the same models carry through to the design of the collector system, the substation and the protection at the point of interconnection, and on to commissioning.",
    ],
    capabilities: [
      "renewable-interconnection",
      "power-system-studies",
      "protection-and-control",
      "substation-design",
    ],
    projects: ["caribbean-solar-interconnection"],
  },
  {
    slug: "industrial",
    title: "Industrial",
    summary:
      "Plants with large motor loads, process continuity requirements, and electrical staff who work on energized equipment.",
    qualifier: "Process and manufacturing",
    body: [
      "In an industrial plant the cost of an electrical problem is measured in lost production. Nuisance trips that take out a whole bus, voltage dips that drop drives, and equipment that has outgrown its fault rating after years of expansion are the common complaints, and each has a study behind the fix.",
      "Plants also carry an obligation to the people who work on the equipment. Arc flash labels based on a current study, and protection settings that clear faults quickly, are the difference between a safety program on paper and one that protects someone.",
    ],
    capabilities: [
      "arc-flash-and-safety",
      "protection-and-control",
      "power-system-studies",
      "commissioning",
    ],
    projects: [],
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
