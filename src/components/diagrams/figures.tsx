// Technical figures, drawn in the site's own linework. These replace the
// stock photographs: there is no stock photo of a protection coordination
// study. All values are illustrative and captioned as such.
//
// Yellow is never a thin line or text on the light figure ground (it fails
// contrast). Highlighted conductors are "cased" — a yellow core on a dark
// outline — and yellow text uses LIVE_INK.

import type { ComponentType } from "react";
import type { FigureKey } from "@/content/capabilities";

const INK = "#172A3A";
const SOFT = "#5A646B";
const LINE = "#8A939A";
const GRID = "#D3D9DC";
const GRID_MAJOR = "#B3BCC1";
const LIVE = "#F2B705";
const LIVE_INK = "#7A5E00";
const PANEL = "#DDE2E4";
const FIG_BG = "#EAEEEF";

function Cased({ d, width = 2.4 }: { d: string; width?: number }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} stroke={INK} strokeWidth={width + 2.2} />
      <path d={d} stroke={LIVE} strokeWidth={width} />
    </g>
  );
}

/* ---------------------------------------------------------------------- */
/*  Protection coordination — log-log time-current curves                 */
/* ---------------------------------------------------------------------- */

// 10 A to 100 kA across x; 0.01 s to 1000 s up y.
const tccX = (amps: number) => 70 + 125 * (Math.log10(amps) - 1);
const tccY = (sec: number) => 170 - 50 * Math.log10(sec);

// IEEE C37.112 very inverse: t = TD × (19.61 / (M² − 1) + 0.491)
const veryInverse = (pickup: number, td: number) => (amps: number) => {
  const m = amps / pickup;
  return td * (19.61 / (m * m - 1) + 0.491);
};

function curve(pickup: number, td: number, iMax: number) {
  const f = veryInverse(pickup, td);
  const i0 = pickup * 1.08;
  const pts: string[] = [];
  for (let k = 0; k <= 48; k++) {
    const i = i0 * Math.pow(iMax / i0, k / 48);
    pts.push(`${tccX(i).toFixed(1)} ${tccY(f(i)).toFixed(1)}`);
  }
  return `M${pts.join("L")}`;
}

const I_FAULT = 9000;
const feederRelay = veryInverse(400, 0.5);
const mainRelay = veryInverse(1200, 0.7);
const FEEDER_CURVE = curve(400, 0.5, I_FAULT);
const MAIN_CURVE = curve(1200, 0.7, I_FAULT);
// Transformer through-fault damage, I²t constant: t = 2 × (25 kA / I)².
const DAMAGE = `M${tccX(2000).toFixed(1)} ${tccY(312.5).toFixed(1)}L${tccX(40000).toFixed(1)} ${tccY(0.78125).toFixed(1)}`;

const X_GRID: { v: number; major: boolean }[] = [];
for (let d = 1; d <= 4; d++) {
  for (let m = 1; m <= 9; m++) X_GRID.push({ v: m * Math.pow(10, d), major: m === 1 });
}
const Y_GRID: { v: number; major: boolean }[] = [];
for (let d = -2; d <= 2; d++) {
  for (let m = 1; m <= 9; m++) Y_GRID.push({ v: m * Math.pow(10, d), major: m === 1 });
}

const X_TICKS: [number, string][] = [
  [10, "10"], [100, "100"], [1000, "1k"], [10000, "10k"], [100000, "100k"],
];
const Y_TICKS: [number, string][] = [
  [0.01, "0.01"], [0.1, "0.1"], [1, "1"], [10, "10"], [100, "100"], [1000, "1000"],
];

function CoordinationCurve() {
  const xf = tccX(I_FAULT);
  const yFeeder = tccY(feederRelay(I_FAULT));
  const yMain = tccY(mainRelay(I_FAULT));
  const margin = (mainRelay(I_FAULT) - feederRelay(I_FAULT)).toFixed(2);

  return (
    <svg
      viewBox="0 0 600 326"
      role="img"
      aria-label={`Log-log time-current curves. The feeder relay curve sits below and left of the main breaker relay curve up to the maximum fault current of 9 kA, where the margin between them is ${margin} seconds.`}
    >
      <defs>
        <clipPath id="tcc-plot">
          <rect x={70} y={20} width={500} height={250} />
        </clipPath>
      </defs>
      <rect x={70} y={20} width={500} height={250} fill="#F4F6F7" />
      <g clipPath="url(#tcc-plot)">
        {X_GRID.map(({ v, major }) => (
          <line key={`x${v}`} x1={tccX(v)} y1={20} x2={tccX(v)} y2={270} stroke={major ? GRID_MAJOR : GRID} strokeWidth={major ? 1 : 0.6} />
        ))}
        {Y_GRID.map(({ v, major }) => (
          <line key={`y${v}`} x1={70} y1={tccY(v)} x2={570} y2={tccY(v)} stroke={major ? GRID_MAJOR : GRID} strokeWidth={major ? 1 : 0.6} />
        ))}
        <path d={DAMAGE} fill="none" stroke={SOFT} strokeWidth={1.4} strokeDasharray="6 4" />
        <line x1={xf} y1={20} x2={xf} y2={270} stroke={SOFT} strokeDasharray="2 3" />
        <path d={FEEDER_CURVE} fill="none" stroke={INK} strokeWidth={2.2} strokeLinejoin="round" />
        <Cased d={MAIN_CURVE} />
      </g>
      <rect x={70} y={20} width={500} height={250} fill="none" stroke={LINE} />

      {/* Coordination margin at maximum fault current. */}
      <path d={`M${xf + 7} ${yMain}h6V${yFeeder}h-6`} fill="none" stroke={INK} strokeWidth={1.2} />
      <text x={xf + 19} y={(yMain + yFeeder) / 2 + 4} fontSize={12} fontWeight={600} fill={INK}>
        {margin} s margin
      </text>

      <g fontSize={12}>
        <text x={326} y={64} textAnchor="end" fill={LIVE_INK} fontWeight={600}>
          Main breaker relay 51-M
        </text>
        <text x={266} y={104} textAnchor="end" fill={INK} fontWeight={600}>
          Feeder relay 51-F2
        </text>
        <text x={372} y={40} fill={SOFT}>
          Transformer damage curve
        </text>
        <text x={xf - 5} y={262} textAnchor="end" fill={SOFT}>
          Max fault, 9 kA
        </text>
      </g>

      <g fontSize={11} fill={SOFT}>
        {X_TICKS.map(([v, label]) => (
          <text key={label} x={tccX(v)} y={287} textAnchor="middle">
            {label}
          </text>
        ))}
        {Y_TICKS.map(([v, label]) => (
          <text key={label} x={62} y={tccY(v) + 4} textAnchor="end">
            {label}
          </text>
        ))}
      </g>
      <g fontSize={12} fill={SOFT}>
        <text x={320} y={314} textAnchor="middle">
          Current (A)
        </text>
        <text x={18} y={145} textAnchor="middle" transform="rotate(-90 18 145)">
          Time (s)
        </text>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/*  Power system studies — a load flow result                             */
/* ---------------------------------------------------------------------- */

function LoadFlow() {
  return (
    <svg
      viewBox="0 0 600 290"
      role="img"
      aria-label="Load flow result on a small radial network. Bus 1 at 1.00 per unit, bus 2 at 0.98, and bus 3 at the end of the longer feeder at 0.93, below the 0.95 per unit limit."
    >
      <g fill="none" stroke={INK} strokeWidth={1.4}>
        <circle cx={90} cy={28} r={14} />
        <path d="M81 28q4.5-7 9 0t9 0" />
        <path d="M90 42V58" />
        <circle cx={90} cy={70} r={12} />
        <circle cx={90} cy={88} r={12} />
        <path d="M90 100V122" />
        {/* Feeder A */}
        <path d="M130 122V134" />
        <rect x={122} y={134} width={16} height={16} strokeWidth={1.7} />
        <path d="M130 150V230" />
        {/* Feeder B */}
        <path d="M270 122V134" />
        <rect x={262} y={134} width={16} height={16} strokeWidth={1.7} />
        <path d="M270 150V170H470V230" />
        {/* Loads and motor */}
        <path d="M150 230V252" />
        <path d="M455 230V252" />
        <path d="M490 230V250" />
        <circle cx={490} cy={264} r={13} />
      </g>
      <g stroke={INK} strokeWidth={4}>
        <path d="M40 122H320" />
        <path d="M80 230H200" />
      </g>
      <Cased d="M400 230H540" width={3.2} />
      <g fill={INK}>
        <path d="M144 252h12l-6 9z" />
        <path d="M449 252h12l-6 9z" />
        <path d="M125 190h10l-5 8z" />
        <path d="M360 165v10l8-5z" />
      </g>

      {/* Voltage flag on bus 3 */}
      <rect x={546} y={219} width={50} height={22} fill={LIVE} stroke={INK} strokeWidth={1.4} />

      <g fontSize={12} fill={SOFT}>
        <text x={112} y={32}>Utility 115 kV</text>
        <text x={110} y={84}>T1, 115/13.8 kV</text>
        <text x={142} y={184}>3.1 MW</text>
        <text x={142} y={199}>0.9 Mvar</text>
        <text x={292} y={160}>5.6 MW, 2.4 Mvar</text>
        <text x={292} y={190}>Conductor at 94% of rating</text>
        <text x={162} y={262}>Load</text>
        <text x={596} y={258} textAnchor="end" fill={LIVE_INK} fontWeight={600} fontSize={11}>
          Below 0.95 pu
        </text>
      </g>
      <g fontSize={12} fill={INK} fontWeight={600}>
        <text x={40} y={112}>Bus 1, 13.8 kV</text>
        <text x={80} y={250}>Bus 2</text>
        <text x={400} y={250}>Bus 3</text>
        <text x={490} y={268} textAnchor="middle">M</text>
        <text x={571} y={234} textAnchor="middle">0.93 pu</text>
      </g>
      <g fontSize={12} fill={INK} className="tabular">
        <text x={326} y={126}>1.00 pu</text>
        <text x={206} y={234}>0.98 pu</text>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/*  Arc flash — approach boundaries and an equipment label                */
/* ---------------------------------------------------------------------- */

const AF_ROWS: [string, string][] = [
  ["Incident energy", "8.2 cal/cm²"],
  ["Working distance", "455 mm"],
  ["Arc flash boundary", "1.6 m"],
  ["Nominal voltage", "600 V"],
  ["Limited approach", "1.0 m"],
  ["Restricted approach", "0.3 m"],
  ["Equipment", "MCC-2"],
];

function ArcFlash() {
  const L = 110;
  const R = 290;
  const TOP = 40;
  const FRONT = 90;
  const px = (m: number) => m * 50; // 1 m = 50 units
  const boundary = (m: number) =>
    `M${L - px(m)} ${TOP}V${FRONT + px(m)}H${R + px(m)}V${TOP}`;
  const worker = FRONT + px(0.455);

  return (
    <svg
      viewBox="0 0 620 290"
      role="img"
      aria-label="Plan view of a 600 volt motor control centre with the restricted approach boundary at 0.3 metres, limited approach at 1.0 metre and arc flash boundary at 1.6 metres, beside an example equipment label showing 8.2 calories per square centimetre at 455 millimetres."
    >
      <path d={`M20 ${TOP}H380`} stroke={LINE} strokeWidth={3} />
      <text x={20} y={30} fontSize={11} fill={SOFT}>
        Wall
      </text>

      <Cased d={boundary(1.6)} width={2.2} />
      <path d={boundary(1.0)} fill="none" stroke={SOFT} strokeWidth={1.3} strokeDasharray="6 4" />
      <path d={boundary(0.3)} fill="none" stroke={INK} strokeWidth={1.2} strokeDasharray="2 3" />

      <rect x={L} y={TOP} width={R - L} height={FRONT - TOP} fill={PANEL} stroke={INK} strokeWidth={1.4} />
      {[1, 2, 3].map((i) => (
        <path key={i} d={`M${L + i * 45} ${TOP}V${FRONT}`} stroke={INK} />
      ))}
      <text x={(L + R) / 2} y={70} textAnchor="middle" fontSize={12} fontWeight={600} fill={INK}>
        MCC-2
      </text>

      <circle cx={222} cy={worker} r={5.5} fill={INK} />
      <path d={`M238 ${FRONT}V${worker}M234 ${FRONT}h8M234 ${worker}h8`} stroke={INK} />
      <text x={246} y={127} fontSize={11} fill={SOFT}>
        Working distance 455 mm
      </text>

      {/* Legend */}
      <g fontSize={12} fill={INK}>
        <Cased d="M30 206H62" width={2.2} />
        <text x={72} y={210}>Arc flash boundary, 1.6 m</text>
        <path d="M30 230H62" stroke={SOFT} strokeWidth={1.3} strokeDasharray="6 4" />
        <text x={72} y={234}>Limited approach boundary, 1.0 m</text>
        <path d="M30 254H62" stroke={INK} strokeWidth={1.2} strokeDasharray="2 3" />
        <text x={72} y={258}>Restricted approach boundary, 0.3 m</text>
      </g>

      {/* Equipment label */}
      <rect x={410} y={24} width={190} height={242} fill="#fff" stroke={INK} strokeWidth={1.4} />
      <rect x={410} y={24} width={190} height={44} fill={LIVE} stroke={INK} strokeWidth={1.4} />
      <text x={422} y={43} fontSize={14} fontWeight={700} fill={INK}>
        Warning
      </text>
      <text x={422} y={59} fontSize={11} fill={INK}>
        Arc flash and shock hazard
      </text>
      {AF_ROWS.map(([k, v], i) => {
        const y = 90 + i * 25;
        return (
          <g key={k}>
            <text x={422} y={y} fontSize={11} fill={SOFT}>
              {k}
            </text>
            <text x={590} y={y} fontSize={12} fontWeight={600} fill={INK} textAnchor="end">
              {v}
            </text>
            <path d={`M422 ${y + 8}H590`} stroke={GRID} />
          </g>
        );
      })}
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/*  Renewable interconnection — point of interconnection                  */
/* ---------------------------------------------------------------------- */

function Interconnection() {
  return (
    <svg
      viewBox="0 0 640 230"
      role="img"
      aria-label="Single-line diagram from a PV array through inverters, a collector system and the main power transformer to the point of interconnection breaker, which carries voltage, frequency and directional overcurrent protection, and on to the utility bus."
    >
      <g fill="none" stroke={INK} strokeWidth={1.4}>
        <rect x={20} y={70} width={64} height={44} />
        <path d="M36 70V114M52 70V114M68 70V114M20 92H84" strokeWidth={0.8} />
        <path d="M84 92H110" />
        <rect x={110} y={76} width={36} height={32} />
        <path d="M110 108L146 76" strokeWidth={0.9} />
        <path d="M146 92H187" />
        <circle cx={200} cy={92} r={13} />
        <circle cx={222} cy={92} r={13} />
        <path d="M235 92H290" />
        <path d="M310 92H420" />
        <path d="M300 102V120" />
        <circle cx={300} cy={132} r={12} fill={FIG_BG} />
        <path d="M420 70H500V60" />
        <path d="M420 130H500V140" />
        <path d="M420 100H548" />
        <circle cx={562} cy={100} r={14} />
        <path d="M553 100q4.5-7 9 0t9 0" />
      </g>
      <path d="M420 48V152" stroke={INK} strokeWidth={4} />
      <rect x={290} y={82} width={20} height={20} fill={LIVE} stroke={INK} strokeWidth={1.6} />
      <g fill={INK}>
        <path d="M494 60h12l-6-10z" />
        <path d="M494 140h12l-6 10z" />
      </g>
      <path d="M350 26V200" stroke={SOFT} strokeDasharray="4 4" />

      <g fontSize={11} fill={SOFT}>
        <text x={342} y={36} textAnchor="end">Developer</text>
        <text x={358} y={36}>Utility</text>
        <text x={166} y={82} textAnchor="middle">Collector</text>
        <text x={300} y={179} textAnchor="middle">POI protection</text>
        <text x={428} y={44}>Utility bus</text>
        <text x={512} y={62}>Load</text>
        <text x={512} y={150}>Load</text>
      </g>
      <g fontSize={12} fill={SOFT} textAnchor="middle">
        <text x={52} y={132}>PV array</text>
        <text x={128} y={132}>Inverters</text>
        <text x={211} y={126}>Main power</text>
        <text x={211} y={140}>transformer</text>
        <text x={562} y={132}>Utility supply</text>
      </g>
      <text x={300} y={136} textAnchor="middle" fontSize={10} fontWeight={600} fill={INK}>
        R
      </text>
      <text x={300} y={164} textAnchor="middle" fontSize={11.5} fontWeight={600} fill={LIVE_INK}>
        27/59 · 81 · 67
      </text>
      <text x={350} y={216} textAnchor="middle" fontSize={12} fontWeight={600} fill={INK}>
        Point of interconnection
      </text>
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/*  Substation design — ground grid plan                                  */
/* ---------------------------------------------------------------------- */

const GRID_X = [60, 132, 204, 276, 348, 420];
const GRID_Y = [40, 100, 160, 220, 280];
const RODS: [number, number][] = [
  [60, 40], [204, 40], [276, 40], [420, 40],
  [60, 160], [420, 160],
  [60, 280], [204, 280], [276, 280], [420, 280],
];

function Callout({ from, to, lines }: { from: [number, number]; to: number; lines: string[] }) {
  return (
    <g>
      <path d={`M${from[0]} ${from[1]}H440`} stroke={SOFT} strokeWidth={0.9} />
      {lines.map((l, i) => (
        <text key={l} x={446} y={to + i * 14} fontSize={12} fill={SOFT}>
          {l}
        </text>
      ))}
    </g>
  );
}

function GroundingGrid() {
  return (
    <svg
      viewBox="0 0 600 310"
      role="img"
      aria-label="Plan of a substation ground grid: a mesh of buried conductors with ground rods at the corners and perimeter, a bonded fence inside the perimeter conductor, and the transformer pad bonded to the grid. Touch voltage is checked at the fence corners."
    >
      <g stroke={INK}>
        {GRID_X.map((x) => (
          <path key={`gx${x}`} d={`M${x} 40V280`} strokeWidth={x === 60 || x === 420 ? 2.2 : 1.3} />
        ))}
        {GRID_Y.map((y) => (
          <path key={`gy${y}`} d={`M60 ${y}H420`} strokeWidth={y === 40 || y === 280 ? 2.2 : 1.3} />
        ))}
      </g>
      <path d="M200 262H78V58H402V262H250" fill="none" stroke={SOFT} strokeWidth={1.4} strokeDasharray="7 4" />
      <text x={225} y={259} textAnchor="middle" fontSize={11} fill={SOFT}>
        Gate
      </text>

      <rect x={150} y={118} width={108} height={76} fill={PANEL} stroke={INK} strokeWidth={1.4} />
      <text x={204} y={160} textAnchor="middle" fontSize={12} fontWeight={600} fill={INK}>
        Transformer
      </text>
      <path d="M150 124H132M258 188H276" stroke={INK} strokeWidth={1.3} />

      {RODS.map(([x, y]) => (
        <g key={`r${x}-${y}`}>
          <circle cx={x} cy={y} r={5} fill={FIG_BG} stroke={INK} strokeWidth={1.4} />
          <circle cx={x} cy={y} r={1.8} fill={INK} />
        </g>
      ))}
      <rect x={396} y={256} width={12} height={12} fill={LIVE} stroke={INK} strokeWidth={1.4} />

      <Callout from={[420, 76]} to={72} lines={["Perimeter conductor,", "1 m outside the fence"]} />
      <Callout from={[402, 124]} to={120} lines={["Fence, bonded", "to the grid"]} />
      <Callout from={[425, 160]} to={164} lines={["Ground rod"]} />
      <Callout from={[348, 220]} to={216} lines={["Grid conductors,", "bare copper"]} />
      <Callout from={[408, 262]} to={258} lines={["Touch voltage checked", "at fence corners"]} />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/*  Commissioning — test sequence (a table, not a drawing)                */
/* ---------------------------------------------------------------------- */

const STEPS: [string, string, string][] = [
  ["Visual and mechanical inspection", "Checklist, torque wrench", "Drawings, manufacturer instructions"],
  ["Insulation resistance", "Insulation resistance tester", "ANSI/NETA ATS minimums, comparison between phases"],
  ["Contact and winding resistance", "Low-resistance ohmmeter", "Manufacturer values, comparison between phases"],
  ["Transformer turns ratio", "TTR test set", "Within 0.5% of nameplate ratio"],
  ["CT and PT ratio, polarity, excitation", "CT analyzer", "Nameplate ratio, polarity marks on drawings"],
  ["Breaker timing and travel", "Breaker analyzer", "Manufacturer timing limits"],
  ["Relay secondary injection", "Relay test set", "Issued settings and coordination study"],
  ["Point-to-point and trip checks", "Continuity, trip tests", "Schematics and wiring diagrams"],
  ["Functional scheme tests", "Relay test set, operators", "Protection philosophy, SCADA point list"],
  ["Energization and in-service checks", "Phase rotation and power quality meters", "Switching procedure, study values"],
];

function CommissioningSequence() {
  return (
    <table className="w-full border-collapse text-left font-sans text-[0.875rem] leading-snug">
      <caption className="sr-only">Typical commissioning test sequence</caption>
      <thead>
        <tr className="border-b-2 border-tank text-[0.8125rem] text-ink-3">
          <th scope="col" className="py-2 pr-3 font-medium">Step</th>
          <th scope="col" className="py-2 pr-4 font-medium">Test</th>
          <th scope="col" className="py-2 pr-4 font-medium">Instrument</th>
          <th scope="col" className="py-2 font-medium">Accepted against</th>
        </tr>
      </thead>
      <tbody>
        {STEPS.map(([test, instrument, basis], i) => (
          <tr key={test} className="border-b border-rule align-top">
            <td className="py-2.5 pr-3 text-ink-3 tabular">{i + 1 < 10 ? `0${i + 1}` : i + 1}</td>
            <th scope="row" className="py-2.5 pr-4 font-medium">{test}</th>
            <td className="py-2.5 pr-4 text-ink-2">{instrument}</td>
            <td className="py-2.5 text-ink-2">{basis}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ---------------------------------------------------------------------- */
/*  Case study — solar plant point of interconnection                     */
/* ---------------------------------------------------------------------- */

function SolarPoi() {
  return (
    <svg
      viewBox="0 0 560 200"
      role="img"
      aria-label="Single-line diagram of a 150 megawatt solar plant connecting through a step-up transformer to a utility transmission bus, with directional overcurrent protection added at the point of interconnection."
    >
      <g fill="none" stroke={INK} strokeWidth={1.4}>
        <rect x={30} y={70} width={70} height={46} />
        <path d="M100 93H150" />
        <circle cx={166} cy={93} r={14} />
        <circle cx={188} cy={93} r={14} />
        <path d="M202 93H250" />
        <path d="M268 93H330" />
        <path d="M330 70H400V58" />
        <path d="M330 120H400V132" />
      </g>
      <path d="M330 46V140" stroke={INK} strokeWidth={4} />
      <rect x={250} y={83} width={18} height={20} fill={LIVE} stroke={INK} strokeWidth={1.6} />
      <g fill={INK}>
        <path d="M393 58h14l-7-12z" />
        <path d="M393 132h14l-7 12z" />
      </g>
      <text x={65} y={97} textAnchor="middle" fontSize={12} fontWeight={600} fill={INK}>
        150 MW PV
      </text>
      <text x={177} y={126} textAnchor="middle" fontSize={11} fill={SOFT}>
        Step-up
      </text>
      <text x={330} y={34} textAnchor="middle" fontSize={12} fill={INK}>
        Utility transmission bus
      </text>
      <g fontSize={12} fontWeight={600} fill={LIVE_INK} textAnchor="middle">
        <text x={259} y={128}>Directional</text>
        <text x={259} y={143}>overcurrent added</text>
      </g>
      <g fontSize={12} fill={SOFT}>
        <text x={416} y={62}>Load</text>
        <text x={416} y={138}>Load</text>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------------- */

const DRAWINGS: Record<FigureKey, [ComponentType, number]> = {
  coordination: [CoordinationCurve, 540],
  "load-flow": [LoadFlow, 540],
  "arc-flash": [ArcFlash, 560],
  interconnection: [Interconnection, 560],
  grounding: [GroundingGrid, 540],
  commissioning: [CommissioningSequence, 600],
  "solar-poi": [SolarPoi, 500],
};

// Narrow screens scroll the drawing sideways rather than shrinking its text
// below legibility.
export function Figure({ figKey, caption }: { figKey: FigureKey; caption: string }) {
  const [Drawing, minWidth] = DRAWINGS[figKey];
  return (
    <figure className="figure">
      <div className="overflow-x-auto">
        <div style={{ minWidth }}>
          <Drawing />
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
