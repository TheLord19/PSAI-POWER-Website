// The six capability pages.
//
// Renamed to match how buyers search: "grid modernization" is a strategy-deck
// phrase, "load flow study" is what an engineer types. Old /services URLs
// redirect here (next.config.js).
//
// Methodology is not confidential, so none of this needs NDA clearance. The
// protection page is the handoff's worked example; the other five follow the
// same structure and voice and are awaiting engineer review (list.md).

export type FigureKey =
  | "coordination"
  | "load-flow"
  | "arc-flash"
  | "interconnection"
  | "grounding"
  | "commissioning"
  | "solar-poi";

type Term = { term: string; text: string };
type SectionKey = "answers" | "when" | "involves" | "receive" | "goesWrong";

export type Capability = {
  slug: string;
  /** Index and navigation label. */
  title: string;
  /** H1 on the detail page — phrased as the search query. */
  heading: string;
  /** One line, always visible in the index. */
  summary: string;
  lede: string;
  /** Right-hand column of the ruled index: voltage range or governing standard. */
  qualifier: string;
  metaDescription: string;
  meta: { label: string; value: string }[];
  headings?: Partial<Record<SectionKey, string>>;
  answers: string[];
  when: string[];
  involves: Term[];
  figure: { key: FigureKey; caption: string };
  receive: string[];
  receiveNote?: string;
  goesWrong: Term[];
  relatedProjects: string[];
  relatedCapabilities: string[];
  cta: { heading: string; text: string };
};

export const DEFAULT_HEADINGS: Record<SectionKey, string> = {
  answers: "What the study answers",
  when: "When you need one",
  involves: "What the study involves",
  receive: "What you receive",
  goesWrong: "What usually goes wrong",
};

export const capabilities: Capability[] = [
  {
    slug: "power-system-studies",
    title: "Power system studies",
    heading: "Load flow and short circuit studies",
    summary:
      "Load flow, short circuit, motor starting, and grounding analysis in ETAP.",
    lede: "Modelling the system as it actually is, so decisions about new load, new equipment or a new supply are made on numbers rather than assumptions.",
    qualifier: "LV to 132 kV",
    metaDescription:
      "Load flow, short circuit, motor starting and grounding studies in ETAP, 600 V to 132 kV. Stamped reports from a licensed firm in Sudbury, Ontario.",
    meta: [
      { label: "Voltage range", value: "600 V to 132 kV" },
      { label: "Standards", value: "IEEE 3002 series, IEC 60909" },
      { label: "Software", value: "ETAP" },
      { label: "Typical schedule", value: "3 to 6 weeks" },
    ],
    answers: [
      "A power system study answers a specific question about how the system behaves: whether the voltage at the far end of a feeder stays within limits at peak load, whether a breaker can interrupt the fault current now available at its bus, whether a large motor can start without dragging down everything else on the bus.",
      "The studies share one model. Load flow establishes the steady-state operating point, short circuit establishes the duty on every protective device, and the specialized studies — motor starting, harmonics, grounding — build on both. We build the model once, validate it against the field, and run every study against the same data.",
    ],
    when: [
      "Before connecting significant new load. A new mill line, a crusher, a compressor station or a charging depot changes voltage profiles and fault levels across the site, and the transformer and cable sizing questions have to be answered before equipment is ordered.",
      "When the supply changes. A utility reinforcement, a new tie or an added generator raises the available fault current, sometimes past the interrupting rating of existing switchgear. The equipment has not changed, but its duty has.",
      "When something is already wrong: low voltage at the end of a feeder, transformers running hot, capacitor banks failing early, drives tripping on voltage dips. Each of those is a symptom a study can trace back to a cause.",
      "And as the foundation for protection coordination and arc flash work, both of which need short circuit results before they can start.",
    ],
    involves: [
      {
        term: "Data collection.",
        text: "We collect transformer nameplates and impedances, cable sizes and lengths, motor data, generator data and existing operating configurations on site. The utility source impedance is requested in writing at maximum and minimum system conditions, not assumed.",
      },
      {
        term: "Model build and validation.",
        text: "The system is modelled in ETAP and checked against metered data where it exists — bus voltages, feeder loading, transformer tap positions. A model that cannot reproduce today's measurements cannot be trusted to predict tomorrow's.",
      },
      {
        term: "Load flow.",
        text: "Steady-state analysis at minimum and maximum load, and for each credible contingency or switching configuration in scope. We report bus voltages, branch loading, losses and reactive power flows, and identify where a tap change or reactive compensation would correct a problem.",
      },
      {
        term: "Short circuit.",
        text: "Three-phase and line-to-ground fault currents at every bus, calculated to IEC 60909 or ANSI/IEEE C37 methods as the equipment requires. Interrupting and momentary duties are compared against the rating of every breaker, fuse and switch in scope.",
      },
      {
        term: "Motor starting.",
        text: "Starting studies for the largest motors, checking the voltage dip at the motor terminals and at sensitive loads elsewhere on the system, and confirming the motor will accelerate against its load.",
      },
      {
        term: "Specialized studies.",
        text: "Harmonic analysis against IEEE 519 where drives or rectifiers make up a large share of the load, and ground grid analysis to IEEE 80 where a substation is in scope.",
      },
    ],
    figure: {
      key: "load-flow",
      caption:
        "Illustrative load flow result. Bus 3, at the end of the longer feeder, falls below the 0.95 pu planning limit at maximum load — the kind of finding that leads to a tap change, a capacitor bank or a larger conductor.",
    },
    receive: [
      "A stamped report setting out the model, the data sources, every assumption, and the results for each case",
      "Bus voltage and branch loading tables for each operating case, with violations flagged",
      "An equipment duty table comparing available fault current against the rating of every device in scope",
      "Specific recommendations — tap changes, cable or transformer upsizing, reactive compensation, equipment replacement — each tied to the result that justifies it",
      "The ETAP model file, where the engagement includes it",
    ],
    receiveNote:
      "The equipment duty table is usually the part to read first. An underrated breaker is a safety problem today, not a planning problem for later.",
    goesWrong: [
      {
        term: "The utility source data is a guess.",
        text: "Fault current at the service entrance depends on the utility's system impedance, which changes as the utility's own system changes. Studies that assume an infinite bus overstate fault duty; studies that use a number from a ten-year-old letter can understate it. We ask the utility for current maximum and minimum values every time.",
      },
      {
        term: "Cable lengths come from the drawings.",
        text: "On low-voltage systems, feeder impedance is dominated by cable length, and drawings routinely show the straight-line path rather than the installed route. On a long 600 V feeder the difference changes both the voltage drop and the fault current the protection has to detect.",
      },
      {
        term: "Only the normal configuration is studied.",
        text: "Most sites have tie breakers, standby generators or alternate feeds that are used a few times a year. Those are exactly the configurations where equipment is over-dutied or voltage collapses, and they are the ones nobody modelled.",
      },
      {
        term: "Motor contribution is left out.",
        text: "Running induction and synchronous motors feed fault current for the first few cycles. On sites with large motor load, leaving them out understates the momentary duty on switchgear.",
      },
      {
        term: "Results are not tied back to action.",
        text: "A report that lists two hundred bus voltages without saying which three matter is not finished. Every study we issue ends with a short list of findings ranked by consequence.",
      },
    ],
    relatedProjects: [
      "latin-america-mine-power-system",
      "southeast-asia-grid-modernization",
      "caribbean-solar-interconnection",
    ],
    relatedCapabilities: [
      "protection-and-control",
      "arc-flash-and-safety",
      "renewable-interconnection",
    ],
    cta: {
      heading: "Need a load flow or short circuit study scoped?",
      text: "Send the single-line diagram and a short description of what is changing. We will tell you which studies you need, and which you do not.",
    },
  },

  {
    slug: "protection-and-control",
    title: "Protection and control",
    heading: "Protection coordination studies",
    summary:
      "Coordination studies, relay selection and settings, scheme design and drawings.",
    lede: "Determining which device operates first, so a fault clears at the smallest possible piece of the system.",
    qualifier: "IEEE 242, C37",
    metaDescription:
      "Protection coordination studies to IEEE 242: time-current curves, relay settings and stamped reports, 600 V to 132 kV. Sudbury, Ontario.",
    meta: [
      { label: "Voltage range", value: "600 V to 132 kV" },
      { label: "Standards", value: "IEEE 242, IEEE C37" },
      { label: "Software", value: "ETAP" },
      { label: "Typical schedule", value: "4 to 8 weeks" },
    ],
    answers: [
      "A coordination study answers one question: when a fault occurs, which protective device should operate, and how long should every other device wait before it operates instead.",
      "Get it right and a fault on one feeder takes out one feeder. Get it wrong and the upstream breaker clears it, taking the whole bus with it — including the loads that were never in trouble. The engineering is in the margins between curves, and the deliverable is a settings table your technicians can enter.",
    ],
    when: [
      "Most coordination work follows a change to the system. A new transformer or a change in service capacity moves the available fault current at every downstream bus, and settings calculated for the old fault level no longer hold. Adding a large motor does the same thing from the other direction, since starting current has to be distinguished from a fault.",
      "Connecting distributed generation is the case that catches people out. Inverter-based resources contribute fault current very differently from synchronous machines — roughly 1.1 to 1.2 times rated rather than five or six times — and an overcurrent element sized for utility fault current may simply not see a fault once the site is exporting.",
      "A relay replacement changes the available curve shapes, so settings cannot be transferred across. Neither can settings copied from a similar site, which is the most common thing we find and the least likely to have been checked.",
      "Finally, an unexplained nuisance trip is almost always a coordination problem, and an arc flash study cannot be completed without one — incident energy is a direct function of clearing time.",
    ],
    involves: [
      {
        term: "Field data collection.",
        text: "We collect nameplate ratings, existing relay settings, CT and PT ratios, conductor sizes and lengths, and transformer impedances on site. We do not work from record drawings alone: the system in the field is not the system on paper often enough that starting from records produces a study of a plant that does not exist.",
      },
      {
        term: "Modelling.",
        text: "The system is built in ETAP and validated against as-found conditions, not as-designed ones. Where the model and the field disagree, the field wins and the drawing gets marked up.",
      },
      {
        term: "Short circuit analysis.",
        text: "Maximum and minimum fault currents are established at every bus in scope. The minimum case matters more than people expect: a setting that operates correctly at maximum fault current can fail to pick up at all under minimum generation with a fault at the far end of a feeder.",
      },
      {
        term: "Curve plotting.",
        text: "Time-current curves are plotted for every protective device in each fault path — relays, fuses, low-voltage breaker trip units and transformer damage curves. Coordination is verified across the full current range, not only at the maximum fault point.",
      },
      {
        term: "Settings determination.",
        text: "Pickup, time dial and instantaneous elements are selected with margin verified against equipment damage curves, transformer inrush and motor starting. Where full coordination is not achievable we say so, and state which pair sacrifices selectivity and why, rather than presenting a compromise as a solution.",
      },
      {
        term: "Review.",
        text: "Every study is checked by a second engineer and stamped by a licensed professional engineer before issue.",
      },
    ],
    figure: {
      key: "coordination",
      caption:
        "Time-current curves for a feeder relay and the main breaker relay upstream of it. The feeder curve sits below and left of the main curve across the full fault range; the vertical gap at maximum fault current is the coordination margin. Illustrative settings.",
    },
    receive: [
      "A stamped report setting out methodology, assumptions and source data",
      "Time-current curve plots for every coordination pair in scope",
      "Settings tables formatted so a technician can enter them directly, with relay make and model identified",
      "An updated single-line diagram reflecting as-found conditions, including any discrepancies against your record drawings",
      "A deficiency list, ranked by risk, covering anything found during data collection that falls outside the study scope",
    ],
    receiveNote:
      "The settings tables and the marked-up single line tend to be the parts clients use for years afterwards. They are produced to be used, not filed.",
    goesWrong: [
      {
        term: "The drawings are wrong.",
        text: "This is the single most common finding. Breakers have been replaced with different frame sizes, CT ratios were changed during a past commissioning and never recorded, and feeders have been rerouted. A study built on record drawings inherits every one of these errors and produces settings that look correct on paper and misbehave in service.",
      },
      {
        term: "Settings were copied, not calculated.",
        text: "A set of settings from a similar station will usually work, right up until fault levels change. There is no way to tell the difference from the outside, which is why we recalculate rather than verify.",
      },
      {
        term: "The instantaneous element is doing too much.",
        text: "Instantaneous tripping is often set to solve a coordination problem that should have been solved with time grading. It works, and it also removes selectivity for a range of faults nobody tested.",
      },
      {
        term: "Nobody owns the minimum fault case.",
        text: "Studies are commonly run at maximum fault current because that is the number people ask about. Reduced generation and end-of-line faults produce the cases where protection fails to operate at all — a worse outcome than operating too broadly.",
      },
      {
        term: "The study is treated as a one-off.",
        text: "Coordination is only valid for the system as modelled. Any change to the supply, the equipment or the load requires a review. We flag which parts of a study are sensitive to change, so the next engineer knows what to recheck rather than starting again.",
      },
    ],
    relatedProjects: [
      "ontario-substation-protection-upgrade",
      "latin-america-mine-power-system",
      "caribbean-solar-interconnection",
    ],
    relatedCapabilities: [
      "arc-flash-and-safety",
      "power-system-studies",
      "commissioning",
    ],
    cta: {
      heading: "Need a coordination study scoped?",
      text: "Send your single-line diagram and we will tell you what the study would involve and what it would cost.",
    },
  },

  {
    slug: "arc-flash-and-safety",
    title: "Arc flash and safety",
    heading: "Arc flash studies",
    summary:
      "Incident energy calculation, boundary determination, and equipment labelling.",
    lede: "Calculating the incident energy at every piece of equipment someone works on, so the label on the door and the PPE on the worker reflect the system as it is.",
    qualifier: "CSA Z462",
    metaDescription:
      "Arc flash studies to CSA Z462 and IEEE 1584-2018: incident energy, approach boundaries and equipment labels for Canadian facilities.",
    meta: [
      { label: "Voltage range", value: "208 V to 44 kV" },
      { label: "Standards", value: "CSA Z462, IEEE 1584-2018" },
      { label: "Software", value: "ETAP" },
      { label: "Typical schedule", value: "3 to 6 weeks" },
    ],
    answers: [
      "An arc flash study answers two questions for every piece of energized equipment a worker might open: how much thermal energy an arc would release at the working distance, and how far away a person has to be before that energy falls below the threshold for a second-degree burn.",
      "Those two numbers — incident energy and the arc flash boundary — go on the equipment label and drive PPE selection in your electrical safety program under CSA Z462. Both depend on two things the study has to get right: the fault current available at the equipment, and how quickly the upstream protection clears it.",
    ],
    when: [
      "CSA Z462 requires an arc flash risk assessment before work on energized equipment, and requires it to be reviewed when the system changes and at intervals of no more than five years.",
      "In practice the triggers are a new facility or a major expansion; a change in the utility supply or a new transformer, which moves fault levels; a change to protection settings; and labels that are more than five years old or were never based on a study in the first place.",
      "The 2018 revision of IEEE 1584 changed the calculation substantially — electrode configuration and enclosure size now enter the result — and labels calculated with the 2002 method can be wrong in either direction. A study done before the revision is due for review.",
    ],
    involves: [
      {
        term: "A validated short circuit model.",
        text: "The study starts from the short circuit model. Where one does not exist we build it, which means the same field data collection as a power system study: transformer, cable, protective device and source data.",
      },
      {
        term: "Equipment details.",
        text: "IEEE 1584-2018 needs the electrode configuration, enclosure dimensions and conductor gap for each piece of equipment. We record these on site for switchgear, MCCs, panelboards and disconnects rather than applying defaults across the board.",
      },
      {
        term: "Protective device clearing times.",
        text: "Incident energy is proportional to arcing time, so every upstream device is modelled with the settings actually in it — not the settings on the drawing. Where a setting cannot be verified, we say so and state the assumption.",
      },
      {
        term: "Incident energy calculation.",
        text: "Calculated to IEEE 1584-2018 at the working distance for each equipment class, for each operating configuration in scope, including minimum fault conditions. The IEEE 1584 model covers 208 V to 15 kV; above that, the method used is stated in the report.",
      },
      {
        term: "Mitigation review.",
        text: "Where incident energy is high, we identify the practical options — maintenance switch settings, zone-selective interlocking, bus differential protection, remote racking, or a change to the protection settings — and quantify each one.",
      },
      {
        term: "Labels.",
        text: "Equipment labels are produced with the content CSA Z462 requires, ready to print and install.",
      },
    ],
    figure: {
      key: "arc-flash",
      caption:
        "Approach boundaries and an equipment label for a 600 V motor control centre. Illustrative values — every number on a real label comes from the study for that specific piece of equipment.",
    },
    receive: [
      "A stamped report with methodology, assumptions, data sources and results for every bus in scope",
      "Incident energy and arc flash boundary for each piece of equipment, at the stated working distance",
      "Print-ready equipment labels meeting CSA Z462 content requirements",
      "A list of equipment where incident energy exceeds the rating of available PPE, with mitigation options for each",
      "The protective device settings used in the calculation, so the labels can be checked if a setting changes",
    ],
    receiveNote:
      "The last item matters more than it looks. An arc flash label is only valid for the settings it was calculated with. Change a relay setting and the label may be wrong.",
    goesWrong: [
      {
        term: "The worst case is assumed to be maximum fault current.",
        text: "Lower fault current can push a device off its instantaneous element and onto its time-delayed curve. Clearing time rises faster than current falls, and incident energy goes up. Studies that only run the maximum case miss the scenario that produces the highest labels.",
      },
      {
        term: "The settings on the drawings are not the settings in the relay.",
        text: "Protection settings get changed during commissioning, troubleshooting and maintenance, and the records do not always follow. We model what is in the device.",
      },
      {
        term: "The main breaker is assumed to protect the main bus.",
        text: "For a fault on the line side of a main breaker, or inside its compartment, the device that clears it is upstream — often a utility fuse or the transformer primary protection, with a much longer clearing time. Labels on main switchboards are frequently understated for this reason.",
      },
      {
        term: "Defaults replace field measurement.",
        text: "Enclosure size and conductor gap change the IEEE 1584-2018 result. Applying typical values to every panel is faster, and produces numbers that can be wrong in both directions.",
      },
      {
        term: "Labels outlive the study.",
        text: "A label installed in 2015 describes the 2015 system. The five-year review is a requirement, not a recommendation.",
      },
    ],
    relatedProjects: [],
    relatedCapabilities: [
      "protection-and-control",
      "power-system-studies",
      "commissioning",
    ],
    cta: {
      heading: "Labels older than five years?",
      text: "Send the single-line diagram and a list of the equipment in scope. We will tell you whether the existing study can be updated or needs to be redone.",
    },
  },

  {
    slug: "renewable-interconnection",
    title: "Renewable interconnection",
    heading: "DER interconnection studies",
    summary:
      "DER impact assessment and connection studies supporting utility approval.",
    lede: "The studies a utility needs before it will connect a solar, wind or storage project — and the design changes that come out of them.",
    qualifier: "Up to 150 MW",
    metaDescription:
      "DER and renewable interconnection studies: connection impact assessment support, protection, power quality and point of interconnection design.",
    meta: [
      { label: "Voltage range", value: "Up to 138 kV" },
      { label: "Standards", value: "CSA C22.3 No. 9, IEEE 1547" },
      { label: "Software", value: "ETAP, PSCAD where required" },
      { label: "Typical schedule", value: "6 to 12 weeks" },
    ],
    answers: [
      "An interconnection study answers the question a utility asks before it will connect a generator: what does this plant do to the system it is joining? Voltage at the point of connection, thermal loading, fault levels, protection and power quality all change when a new source appears on a network designed for power to flow one way.",
      "For a developer the study has a second purpose. It identifies the upgrades the utility will require, and roughly what they will cost, before the project is committed. Finding out late that a feeder needs reconductoring or a station needs new protection is how projects lose a year.",
    ],
    when: [
      "Before the application. A pre-feasibility review of the proposed connection point tells you whether the feeder or station has capacity at all. Many interconnection problems are visible from a simple model, and it is cheaper to move a project at this stage than after the utility's study comes back.",
      "During the utility's assessment. In Ontario, a distribution-connected project goes through a Connection Impact Assessment with the local distribution company; larger and transmission-connected projects also go through a System Impact Assessment with the IESO and a Customer Impact Assessment with the transmitter. Other utilities use different names for the same stages, and each expects models and data in its own format.",
      "When the utility's answer needs checking. A developer-side study lets you test the utility's findings and propose alternatives. Utilities are conservative by design, and their first answer is not always their only answer.",
      "After approval, when the protection and control at the point of interconnection has to implement what the study required.",
    ],
    involves: [
      {
        term: "Model development.",
        text: "The plant is modelled from the inverter or turbine manufacturer's data, together with the collector system, main power transformer and interconnection facilities. The utility system model comes from the utility, and we check it against published system data.",
      },
      {
        term: "Steady-state analysis.",
        text: "Load flow at minimum and maximum load, with the plant at zero and full output, to find voltage rise, thermal overloads and reverse power flow through equipment that was never designed for it.",
      },
      {
        term: "Short circuit and protection.",
        text: "Inverter-based resources contribute roughly 1.1 to 1.2 times rated current to a fault, compared with five or six times for a synchronous machine. The study checks whether existing protection can still detect faults once the plant is running, and whether the plant's anti-islanding and ride-through settings meet CSA C22.3 No. 9 or IEEE 1547 and the utility's own requirements.",
      },
      {
        term: "Power quality.",
        text: "Harmonic injection, flicker and rapid voltage change, assessed against the utility's limits and IEEE 519 at the point of common coupling.",
      },
      {
        term: "Dynamic studies.",
        text: "Where the utility requires them — typically for larger plants or weak grids — ride-through, transient stability and control interaction studies in PSCAD or an equivalent electromagnetic transient tool.",
      },
      {
        term: "Point of interconnection design.",
        text: "Protection at the point of interconnection: typically directional overcurrent, over- and undervoltage, over- and underfrequency, and transfer trip where the utility requires it. Settings and the protection philosophy are documented for the utility's review.",
      },
    ],
    figure: {
      key: "interconnection",
      caption:
        "Simplified point of interconnection. The protection at this breaker — voltage (27/59), frequency (81) and directional overcurrent (67) — is where the study's requirements become hardware.",
    },
    receive: [
      "A study report in the format the utility requires, with the model files it asks for",
      "A list of required system upgrades and the result that triggers each one",
      "Protection and control requirements for the point of interconnection, with proposed settings",
      "A power quality assessment against the utility's published limits",
      "Support through the utility's review — responses to comments, revised runs, and meetings with the utility's engineers",
    ],
    goesWrong: [
      {
        term: "Generic inverter models.",
        text: "Utilities increasingly reject generic models, and a study built on one has to be redone when the actual inverter is selected. We use the manufacturer's model from the start, or state clearly which results will change when the inverter is confirmed.",
      },
      {
        term: "The minimum load case is skipped.",
        text: "Voltage rise and reverse power are worst when the plant is at full output and local load is at its lowest — a sunny spring weekend for a solar plant. Studies that only look at peak load miss the controlling case.",
      },
      {
        term: "Existing protection is assumed to still work.",
        text: "Once the plant is exporting, a fault at the far end of a feeder is fed from both ends. The utility's upstream relay sees less current than it did before and may not operate at all. This is the most common reason a connection needs new protection, and it is usually found late.",
      },
      {
        term: "The collector system is under-studied.",
        text: "Resonance between collector cable capacitance and the grid impedance can amplify harmonics the inverters produce at low levels. It is a design problem if caught in the study and an expensive retrofit if found after energization.",
      },
      {
        term: "Ride-through settings conflict.",
        text: "Ride-through requirements and anti-islanding settings pull in opposite directions. Settings that satisfy one and not the other either trip the plant during the disturbances it is supposed to ride through, or keep it running into an island.",
      },
    ],
    relatedProjects: ["caribbean-solar-interconnection"],
    relatedCapabilities: [
      "protection-and-control",
      "power-system-studies",
      "substation-design",
    ],
    cta: {
      heading: "Planning an interconnection?",
      text: "We can tell you early whether your connection point is likely to be the constraint. Send the proposed location and plant size.",
    },
  },

  {
    slug: "substation-design",
    title: "Substation design",
    heading: "Substation design",
    summary:
      "Greenfield and retrofit design, SCADA integration, factory and site acceptance testing.",
    lede: "Greenfield and retrofit substation design, from the single line through construction drawings, protection and control, and SCADA integration.",
    qualifier: "MV and HV",
    metaDescription:
      "Substation design from single line to construction drawings: grounding to IEEE 80, protection and control, and SCADA integration. MV and HV.",
    meta: [
      { label: "Voltage range", value: "4.16 kV to 132 kV" },
      { label: "Standards", value: "CSA C22.1 Section 36, IEEE 80, IEEE 605" },
      { label: "Software", value: "AutoCAD, ETAP" },
      { label: "Typical schedule", value: "Project dependent" },
    ],
    headings: {
      answers: "What the design covers",
      when: "When you need it",
      involves: "What the work involves",
    },
    answers: [
      "Substation design turns a set of requirements — capacity, voltage, reliability, space, budget — into drawings a contractor can build from and a utility can approve. It covers the primary equipment and its arrangement, the grounding system, protection and control, and the connection to SCADA.",
      "Retrofit work is the harder case. Adding capacity or replacing equipment at a station that has to stay in service means the design has to include the construction sequence: what is de-energized when, what carries the load in the meantime, and how protection is maintained at every stage.",
    ],
    when: [
      "A new plant, mine or process expansion that needs its own supply, or has outgrown the existing station.",
      "End-of-life equipment: electromechanical relays, oil breakers, or transformers whose condition assessment says replacement is due. Replacing like for like is rarely the right answer thirty years on — fault levels, load and protection practice have all moved.",
      "A new utility service or a change in supply voltage.",
      "Adding SCADA visibility and remote control to a station that was designed to be operated by hand.",
    ],
    involves: [
      {
        term: "Single line and arrangement.",
        text: "Design starts with the single-line diagram and the reliability requirement: a single transformer, a main-tie-main arrangement, a ring bus. That choice drives the equipment list, the footprint and most of the cost, so we settle it with the client before detailed design begins.",
      },
      {
        term: "Equipment specification.",
        text: "Power transformers, breakers, switchgear, instrument transformers and surge arresters are specified from the study results — fault duty, insulation coordination and loading — rather than from a catalogue default.",
      },
      {
        term: "Physical design.",
        text: "General arrangement, electrical clearances to CSA C22.1 Section 36, bus design to IEEE 605, cable routing and trench layout, and structure and foundation loads coordinated with the civil and structural engineers.",
      },
      {
        term: "Grounding.",
        text: "Ground grid design to IEEE 80, based on measured soil resistivity. Touch and step voltages are calculated for the maximum ground fault current, including at the fence and at any equipment outside the grid.",
      },
      {
        term: "Protection and control.",
        text: "Protection schemes for transformers, buses, feeders and incoming lines; relay selection; AC and DC schematics, wiring diagrams and panel layouts. The battery and DC system are sized for the actual trip and close duty.",
      },
      {
        term: "SCADA integration.",
        text: "RTU or substation automation design, point lists, communications architecture, and integration with the utility's or site's SCADA system, typically over DNP3 or IEC 61850.",
      },
      {
        term: "Construction support.",
        text: "Issued-for-construction drawings, answers to contractor questions, site visits, factory and site acceptance testing, and the red-line mark-up that becomes the as-built record.",
      },
    ],
    figure: {
      key: "grounding",
      caption:
        "Plan of a substation ground grid. Touch voltage is usually worst at the fence and the grid corners, which is why the perimeter conductor runs outside the fence and the fence is bonded to the grid. Illustrative layout.",
    },
    receive: [
      "Single-line, three-line and general arrangement drawings",
      "AC and DC schematics, wiring diagrams and panel layouts",
      "Equipment specifications and bid evaluation support",
      "A ground grid design report with touch and step voltage results",
      "Protection settings and SCADA point lists",
      "A stamped issued-for-construction drawing package, and as-built drawings after commissioning",
    ],
    goesWrong: [
      {
        term: "Soil resistivity is assumed.",
        text: "Ground grid performance depends directly on soil resistivity, and the resistivity of northern Ontario rock is not the value in a textbook table. A grid designed on an assumed value can fail its touch-voltage check by a wide margin. We design on measured values.",
      },
      {
        term: "The construction sequence is left to the contractor.",
        text: "At a retrofit, the order in which equipment comes out of service decides whether the plant keeps running. If the design does not show the sequence, including temporary protection at each stage, it gets worked out in the field under schedule pressure.",
      },
      {
        term: "The DC system is an afterthought.",
        text: "Protection that cannot trip because the battery is undersized or the charger has failed is not protection. Battery sizing is done against the actual duty cycle, and DC supervision is part of the design.",
      },
      {
        term: "Fault levels are taken from the last study.",
        text: "A new station changes the fault levels it was designed around. Equipment ratings are checked against the fault current the finished system will produce, not the value before the project.",
      },
      {
        term: "Drawings and field drift apart.",
        text: "Changes made during construction and commissioning have to reach the drawings. A station whose as-builts are wrong is the reason the next study starts with a week of field verification.",
      },
    ],
    relatedProjects: [
      "ontario-substation-protection-upgrade",
      "latin-america-mine-power-system",
    ],
    relatedCapabilities: [
      "protection-and-control",
      "commissioning",
      "power-system-studies",
    ],
    cta: {
      heading: "Planning a new station or a retrofit?",
      text: "Send the single line and the problem you are trying to solve. We will tell you what the design would involve and how long it would take.",
    },
  },

  {
    slug: "commissioning",
    title: "Commissioning",
    heading: "Substation commissioning and testing",
    summary:
      "Point-to-point checks, breaker timing, relay testing, and energization support.",
    lede: "Proving that equipment is installed, wired and set the way the design says it is — before it is put into service.",
    qualifier: "Field",
    metaDescription:
      "Substation commissioning and testing to ANSI/NETA ATS: relay secondary injection, CT and breaker testing, functional scheme tests and energization.",
    meta: [
      { label: "Voltage range", value: "600 V to 132 kV" },
      { label: "Standards", value: "ANSI/NETA ATS, manufacturer requirements" },
      { label: "Test equipment", value: "Omicron, Doble, Megger, Vanguard" },
      { label: "Typical schedule", value: "Project dependent" },
    ],
    headings: {
      answers: "What commissioning proves",
      when: "When you need it",
      involves: "What the work involves",
    },
    answers: [
      "Commissioning proves that what was built matches what was designed, and that it will do what it is supposed to do when something goes wrong. A relay that has never been injected, a CT with reversed polarity, or a trip circuit wired to the wrong breaker looks exactly like a correct installation until the day it is needed.",
      "The work runs from individual equipment tests through functional tests of complete protection schemes, and ends with energization. Every result is recorded against an acceptance criterion, so the owner has evidence rather than a statement that the system was checked.",
    ],
    when: [
      "Before first energization of any new substation, switchgear lineup or major electrical installation.",
      "After a protection upgrade or relay replacement. New relays, new settings and modified wiring have to be proven together — a settings file that tested correctly on the bench does not prove the scheme.",
      "After major maintenance or repair, and when equipment has operated for a fault and its condition is in question.",
      "As part of a maintenance program, at the intervals set by CSA Z463 or the manufacturer.",
    ],
    involves: [
      {
        term: "Test plan.",
        text: "Commissioning starts at the desk. We review the drawings, settings and equipment data and write a test plan with an acceptance criterion for each test, so everyone on site knows what a pass looks like before testing begins.",
      },
      {
        term: "Equipment testing.",
        text: "Insulation resistance, contact resistance, transformer turns ratio and winding resistance, CT and PT ratio, polarity and excitation, and breaker timing and travel — performed to ANSI/NETA ATS and the manufacturer's requirements.",
      },
      {
        term: "Point-to-point and wiring checks.",
        text: "Every control and protection circuit checked against the schematics, including the trip and close paths from each relay to each breaker.",
      },
      {
        term: "Relay testing.",
        text: "Secondary injection testing of every protection element against the issued settings, including the operating times the coordination study depends on.",
      },
      {
        term: "Functional scheme tests.",
        text: "Complete protection schemes tested end to end: the relay operates, the trip circuit energizes, the breaker opens, and alarms and SCADA indications arrive where they should. Interlocks and transfer schemes are proven in every state.",
      },
      {
        term: "Energization.",
        text: "Switching procedures, phasing checks, in-service verification of CT circuits and directional elements under load, and a final check that measured values match the study.",
      },
    ],
    figure: {
      key: "commissioning",
      caption:
        "A typical test sequence for a new or upgraded substation. Each step has a written acceptance criterion before site work begins.",
    },
    receive: [
      "A test plan issued before site work begins",
      "Test records for every piece of equipment, with results against acceptance criteria",
      "Relay test reports showing as-left settings",
      "A deficiency list, with each item closed out or carried forward",
      "Red-line drawings reflecting every change made on site",
      "A commissioning report summarizing the above, stamped where required",
    ],
    goesWrong: [
      {
        term: "Testing to expectations instead of the settings file.",
        text: "Relays are tested against the settings that are in them, and those are compared to the issued settings. Testing to what someone expects the settings to be proves nothing.",
      },
      {
        term: "CT polarity is checked only on paper.",
        text: "A reversed CT on a differential scheme will trip the transformer the first time load flows through it. Polarity is proven by test and confirmed again under load.",
      },
      {
        term: "Functional tests stop at the relay.",
        text: "An element that operates correctly on the test set is only half the scheme. If the trip output is wired to the wrong breaker, or the trip coil is open, the secondary injection test still passes.",
      },
      {
        term: "Changes on site never reach the drawings.",
        text: "Every wire moved during commissioning is a future troubleshooting problem if it is not recorded. Red-lines are kept daily, not reconstructed at the end.",
      },
      {
        term: "Energization is rushed.",
        text: "Energization is when schedule pressure is highest and the system is least proven. A written switching procedure, reviewed before the day, is what stops a commissioning team from improvising.",
      },
    ],
    relatedProjects: ["ontario-substation-protection-upgrade"],
    relatedCapabilities: [
      "protection-and-control",
      "substation-design",
      "arc-flash-and-safety",
    ],
    cta: {
      heading: "Energization date set?",
      text: "Tell us what is being commissioned and when. We will send a test scope and the schedule it needs.",
    },
  },
];

export function getCapability(slug: string) {
  return capabilities.find((c) => c.slug === slug);
}

export function headingsFor(c: Capability) {
  return { ...DEFAULT_HEADINGS, ...c.headings };
}
