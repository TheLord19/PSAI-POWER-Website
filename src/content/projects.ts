// Project case studies. This section did not exist on the old site — the
// strongest material PSAI has was three bullet points on the homepage.
//
// Facts that were not on the old site are null and render as "pending".
// Every null here has a matching question in list.md. Do not fill them with
// guesses: client descriptors, voltages and years must come from the
// engineer of record.

import type { FigureKey } from "./capabilities";

export type Sector = "Utility" | "Mining" | "Renewables" | "Industrial";
export type VoltageTier = "LV" | "MV" | "69–138 kV" | "230 kV+";
export type RegionGroup = "Canada" | "Caribbean" | "Latin America" | "Asia";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  client: string | null;
  sector: Sector;
  region: string;
  regionGroup: RegionGroup;
  voltageClass: string | null;
  voltageTier: VoltageTier | null;
  capacity?: string;
  year: string | null;
  engineerOfRecord: string | null;
  /** Short scope line for cards. */
  scopeShort: string;
  scope: string[];
  capabilities: string[];
  /** Draft narrative — every claim is listed for verification in list.md. */
  narrative?: { situation: string[]; approach: string[] };
  figure?: { key: FigureKey; caption: string };
  cta: { heading: string; text: string };
};

export const projects: Project[] = [
  {
    slug: "caribbean-solar-interconnection",
    title: "150 MW solar farm integration",
    summary:
      "DER interconnection study, protection coordination and grid impact assessment for a large solar plant on a Caribbean utility's grid.",
    client: "Caribbean utility",
    sector: "Renewables",
    region: "Caribbean",
    regionGroup: "Caribbean",
    voltageClass: null,
    voltageTier: null,
    capacity: "150 MW",
    year: null,
    engineerOfRecord: null,
    scopeShort: "DER interconnection study",
    scope: [
      "DER interconnection study to the utility's connection assessment requirements",
      "Steady-state and dynamic modelling at minimum and maximum load",
      "Short circuit analysis with the inverter-based contribution modelled explicitly",
      "Protection coordination review across the affected transmission corridor",
      "Grid impact assessment covering voltage regulation, flicker and harmonics",
    ],
    capabilities: [
      "renewable-interconnection",
      "protection-and-control",
      "power-system-studies",
    ],
    narrative: {
      situation: [
        "The utility had approved a 150 MW solar development on an island grid, where a plant of that size is a large fraction of peak demand and spinning reserve is limited. At that penetration the connection is not a routine approval. Cloud transients on the array translate directly into frequency excursions on a system with very little inertia, and the existing protection was designed on the assumption that fault current flows one way.",
      ],
      approach: [
        "The controlling constraint turned out to be reverse power flow through substations that had never seen it. Inverter-based generation contributes fault current very differently from a synchronous machine — roughly 1.1 to 1.2 times rated rather than five or six times — so the existing overcurrent settings could not detect a fault at the far end of the line once the plant was exporting.",
        "Directional overcurrent elements were specified at the affected stations, with settings developed against the minimum fault case rather than the maximum. Ride-through requirements were checked against the interconnection standard so the plant would not disconnect during the voltage dips it was partly responsible for creating.",
      ],
    },
    figure: {
      key: "solar-poi",
      caption:
        "Simplified connection arrangement. The protection change is at the point of interconnection, where fault current can now flow in either direction.",
    },
    cta: {
      heading: "Planning an interconnection?",
      text: "We can tell you early whether your connection point is likely to be the constraint.",
    },
  },
  {
    slug: "ontario-substation-protection-upgrade",
    title: "Substation protection upgrade",
    summary:
      "Relay replacement design, SCADA integration and commissioning support at a substation in Ontario.",
    client: null,
    sector: "Utility",
    region: "Ontario, Canada",
    regionGroup: "Canada",
    voltageClass: null,
    voltageTier: null,
    year: null,
    engineerOfRecord: null,
    scopeShort: "Relay replacement, SCADA",
    scope: [
      "Protection relay replacement design",
      "SCADA integration of the new protection and control",
      "Commissioning support through energization",
    ],
    capabilities: [
      "protection-and-control",
      "substation-design",
      "commissioning",
    ],
    cta: {
      heading: "Replacing protection at a station in service?",
      text: "Send the single line and the relay list. We will tell you what the design, settings and commissioning would involve.",
    },
  },
  {
    slug: "latin-america-mine-power-system",
    title: "Remote mine power system",
    summary:
      "Power supply design for a remote mine site, including a 132 kV transmission line, load flow and fault analysis.",
    client: "Latin American mining operation",
    sector: "Mining",
    region: "Latin America",
    regionGroup: "Latin America",
    voltageClass: "132 kV",
    voltageTier: "69–138 kV",
    year: null,
    engineerOfRecord: null,
    scopeShort: "Transmission, load flow",
    scope: [
      "Remote power supply design",
      "132 kV transmission line",
      "Load flow and fault analysis",
    ],
    capabilities: [
      "substation-design",
      "power-system-studies",
      "protection-and-control",
    ],
    cta: {
      heading: "Supplying a remote site?",
      text: "Tell us the load, the distance to the nearest supply and the schedule. We will tell you what the studies and design would involve.",
    },
  },
  {
    slug: "southeast-asia-grid-modernization",
    title: "Grid modernization study",
    summary:
      "Smart grid transition plan, distribution automation and reliability improvement for a utility in Southeast Asia.",
    client: null,
    sector: "Utility",
    region: "Southeast Asia",
    regionGroup: "Asia",
    voltageClass: "Distribution",
    voltageTier: "MV",
    year: null,
    engineerOfRecord: null,
    scopeShort: "Distribution automation",
    scope: [
      "Smart grid transition plan",
      "Distribution automation",
      "Reliability improvement",
    ],
    capabilities: ["power-system-studies", "protection-and-control"],
    cta: {
      heading: "Planning automation on an existing network?",
      text: "Send the network single line and your reliability targets. We will tell you where automation pays back first.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const PROJECT_FILTERS = {
  sector: ["Utility", "Mining", "Renewables", "Industrial"] as Sector[],
  voltageTier: ["LV", "MV", "69–138 kV", "230 kV+"] as VoltageTier[],
  regionGroup: ["Canada", "Caribbean", "Latin America", "Asia"] as RegionGroup[],
};
