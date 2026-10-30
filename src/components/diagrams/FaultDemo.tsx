"use client";

// The homepage hero.
//
// A fault appears on feeder 2. The visitor toggles between a coordinated
// system, where the feeder breaker clears it, and an uncoordinated one, where
// the main breaker clears it and the whole bus goes dark. That difference is
// the product PSAI sells, and it is otherwise invisible.
//
// The SVG is server-rendered; the only client state is the toggle. On first
// paint the energized layer traces itself once, source to loads, in about a
// second — the one non-user-triggered motion on the site. Reduced-motion
// users get the final state immediately (see .energise in globals.css).

import { useState, type CSSProperties, type ReactNode } from "react";

const LIVE = "#F2B705";
const DEAD = "#6B7B87";
const FAULT = "#FF6B5B"; // lightened for contrast on the tank ground
const LABEL = "#8FA0AC";

type Seg = { id: string; d: string; w: number; delay: number; dur: number };

const seg = (id: string, d: string, delay: number, dur = 220, w = 1.6): Seg => ({
  id,
  d,
  w,
  delay,
  dur,
});

// The bus energizes from the centre outward, so each feeder picks up when
// the bus front reaches its tap.
const BUS_START = 500;
const BUS_DUR = 300;
const FEEDER_X = [170, 320, 470];

function feederSegs(x: number, n: number): Seg[] {
  const t = BUS_START + (BUS_DUR * Math.abs(x - 320)) / 210;
  return [
    seg(`f${n}a`, `M${x} 120V146`, t, 80),
    seg(`f${n}b`, `M${x - 10} 146h20v20h-20Z`, t + 70, 140, 1.9),
    seg(`f${n}c`, `M${x} 166V244`, t + 190, 160),
    seg(`f${n}d`, `M${x - 26} 244h52v26h-52Z`, t + 330, 240),
  ];
}

const SEGS: Seg[] = [
  seg("src", "M304 34a16 16 0 1 0 32 0a16 16 0 1 0-32 0", 0, 280),
  seg("wave", "M311 34q4.5-7 9 0t9 0", 80, 200),
  seg("riser", "M320 50V74", 240, 110),
  seg("main", "M310 74h20v20h-20Z", 330, 150, 1.9),
  seg("down", "M320 94V120", 460, 70),
  seg("busL", "M320 120H110", BUS_START, BUS_DUR, 4),
  seg("busR", "M320 120H530", BUS_START, BUS_DUR, 4),
].concat(...FEEDER_X.map((x, i) => feederSegs(x, i + 1)));

const BY_ID: Record<string, Seg> = {};
SEGS.forEach((s) => (BY_ID[s.id] = s));

const UPSTREAM = ["src", "wave", "riser"];
const LIVE_COORDINATED = new Set(
  UPSTREAM.concat([
    "main", "down", "busL", "busR",
    "f1a", "f1b", "f1c", "f1d",
    "f2a",
    "f3a", "f3b", "f3c", "f3d",
  ]),
);
const LIVE_UNCOORDINATED = new Set(UPSTREAM);

const STATUS = {
  coordinated:
    "One breaker operates — the one closest to the fault. Feeders 1 and 3 stay energized. The difference between these two outcomes is a protection coordination study.",
  uncoordinated:
    "The main breaker clears the fault. Every feeder on the bus goes dark, including the two that were never in trouble.",
};

const TITLE = {
  coordinated:
    "Single-line diagram. A fault on feeder 2 is cleared by feeder breaker 52-F2; feeders 1 and 3 stay energized.",
  uncoordinated:
    "Single-line diagram. A fault on feeder 2 is cleared by main breaker 52-M; all three feeders are de-energized.",
};

const fade = (on: boolean): CSSProperties => ({
  opacity: on ? 1 : 0,
  transition: "opacity 0.35s",
});

function Option({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-interactive border px-3.5 py-2.5 text-left text-[0.9375rem] ${
        pressed ? "border-live text-white" : "border-white/25 text-on-tank hover:border-white/50"
      }`}
    >
      <span
        aria-hidden="true"
        className="h-2.5 w-2.5 flex-none border"
        style={{ background: pressed ? LIVE : "transparent", borderColor: pressed ? LIVE : LABEL }}
      />
      {children}
    </button>
  );
}

export function FaultDemo() {
  const [coordinated, setCoordinated] = useState(true);
  const mode = coordinated ? "coordinated" : "uncoordinated";
  const live = coordinated ? LIVE_COORDINATED : LIVE_UNCOORDINATED;
  const tripped = coordinated ? "f2b" : "main";

  return (
    <div className="mt-12 grid items-start gap-10 border-t border-tank-rule pt-8 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:gap-12">
      <svg
        viewBox="0 0 640 300"
        className="h-auto w-full"
        role="img"
        aria-labelledby="sld-title"
      >
        <title id="sld-title">{TITLE[mode]}</title>

        {/* De-energized layer: every conductor, dashed. */}
        <g fill="none" stroke={DEAD} strokeDasharray="3 4">
          {SEGS.map((s) => (
            <path key={s.id} d={s.d} strokeWidth={s.w === 4 ? 3 : 1.4} />
          ))}
        </g>

        {/* Energized layer. Traces itself once on load; after that only its
            opacity changes. */}
        <g fill="none" stroke={LIVE}>
          {SEGS.map((s) => (
            <path
              key={s.id}
              d={s.d}
              strokeWidth={s.w}
              pathLength={1}
              className="energise"
              style={
                {
                  "--d": `${s.delay}ms`,
                  animationDuration: `${s.dur}ms`,
                  ...fade(live.has(s.id)),
                } as CSSProperties
              }
            />
          ))}
        </g>

        {/* The breaker that operates, and its label. */}
        {(["main", "f2b"] as const).map((id) => (
          <path
            key={id}
            d={BY_ID[id].d}
            fill="none"
            stroke={FAULT}
            strokeWidth={2.4}
            style={fade(tripped === id)}
          />
        ))}
        <g fill={FAULT} fontSize={12} fontWeight={600}>
          <text x={340} y={105} style={fade(tripped === "main")}>
            Tripped
          </text>
          <text x={336} y={177} style={fade(tripped === "f2b")}>
            Tripped
          </text>
        </g>

        {/* The fault. */}
        <path
          d="M331 190l-12 14h10l-12 15"
          fill="none"
          stroke={FAULT}
          strokeWidth={2}
          strokeLinejoin="miter"
        />
        <text x={336} y={215} fill={FAULT} fontSize={12} fontWeight={600}>
          Fault
        </text>

        <g fill={LABEL} fontSize={12}>
          <text x={344} y={38}>Utility supply</text>
          <text x={340} y={89}>Main breaker 52-M</text>
          <text x={110} y={110}>Distribution bus</text>
          {FEEDER_X.map((x, i) => (
            <text key={`b${x}`} x={x + 16} y={161} fontSize={11.5}>
              52-F{i + 1}
            </text>
          ))}
          {FEEDER_X.map((x, i) => (
            <text key={`f${x}`} x={x} y={292} textAnchor="middle">
              Feeder {i + 1}
            </text>
          ))}
        </g>
      </svg>

      <div>
        <h2
          id="fault-demo-heading"
          className="text-[1.0625rem] text-white"
          style={{ fontStretch: "100%", letterSpacing: "-0.01em" }}
        >
          A fault on feeder 2
        </h2>
        <div role="group" aria-labelledby="fault-demo-heading" className="mt-3 flex flex-col gap-2">
          <Option pressed={!coordinated} onClick={() => setCoordinated(false)}>
            Without a coordination study
          </Option>
          <Option pressed={coordinated} onClick={() => setCoordinated(true)}>
            Coordinated
          </Option>
        </div>
        <p aria-live="polite" className="mt-5 text-[0.9375rem] leading-relaxed text-[#AFBAC2]">
          {STATUS[mode]}
        </p>
        <dl className="mt-4 border-t border-tank-rule text-[0.875rem]">
          <div className="flex justify-between gap-4 border-b border-tank-rule py-2">
            <dt className="text-on-tank-2">Breaker that trips</dt>
            <dd className="font-medium text-white tabular">{coordinated ? "52-F2" : "52-M"}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-tank-rule py-2">
            <dt className="text-on-tank-2">Feeders de-energized</dt>
            <dd className="font-medium text-white tabular">{coordinated ? "1 of 3" : "3 of 3"}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
