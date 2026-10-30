// Simplified redraw of the PSAI sunburst mark for screen sizes. The full
// lockup's "POWER ENGINEERING LABS INC" line is illegible at navigation scale
// (and the PNG was being requested at w=3840), so the header uses the mark
// plus "PSAI Power" set in Archivo. Swap in the original vector artwork when
// it is available — see list.md.

const YELLOW = "#FFCC00";
const NAVY = "#002166";

const C = 50;
const RAYS = 24;
const R_IN = 17;
const R_OUT = 49;
const W_IN = 2.4;
const W_OUT = 6.6;

// Pointy-top hexagon silhouette, like the original: flats at 0° and 180°.
function hexRadius(deg: number) {
  const apothem = R_OUT * Math.cos(Math.PI / 6);
  const rel = ((deg % 60) + 60) % 60;
  const off = Math.min(rel, 60 - rel);
  return apothem / Math.cos((off * Math.PI) / 180);
}

const f = (n: number) => n.toFixed(2);

const RAY_PATH = Array.from({ length: RAYS }, (_, i) => {
  const deg = 90 + (360 / RAYS) * i;
  const a = (deg * Math.PI) / 180;
  const ux = Math.cos(a);
  const uy = -Math.sin(a);
  const vx = -uy;
  const vy = ux;
  const ro = hexRadius(deg);
  const pts = [
    [C + R_IN * ux + (W_IN / 2) * vx, C + R_IN * uy + (W_IN / 2) * vy],
    [C + R_IN * ux - (W_IN / 2) * vx, C + R_IN * uy - (W_IN / 2) * vy],
    [C + ro * ux - (W_OUT / 2) * vx, C + ro * uy - (W_OUT / 2) * vy],
    [C + ro * ux + (W_OUT / 2) * vx, C + ro * uy + (W_OUT / 2) * vy],
  ];
  return `M${pts.map(([x, y]) => `${f(x)} ${f(y)}`).join("L")}Z`;
}).join("");

// The bolt that splits the two halves.
const BOLT = "M48 -2L36.5 49L61.5 53.5L46 102";
const LEFT = "M-2 -2H48L36.5 49L61.5 53.5L46 102H-2Z";
const RIGHT = "M48 -2H102V102H46L61.5 53.5L36.5 49Z";

export function LogoMark({
  id,
  tone = "light",
  className,
}: {
  /** Unique per instance — namespaces the clip and mask ids. */
  id: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const right = tone === "dark" ? "#F1F3F4" : NAVY;
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <clipPath id={`${id}-l`}>
          <path d={LEFT} />
        </clipPath>
        <clipPath id={`${id}-r`}>
          <path d={RIGHT} />
        </clipPath>
        <mask id={`${id}-m`}>
          <rect x="-2" y="-2" width="104" height="104" fill="#fff" />
          <path
            d={BOLT}
            fill="none"
            stroke="#000"
            strokeWidth={6}
            strokeLinejoin="miter"
          />
        </mask>
      </defs>
      <g mask={`url(#${id}-m)`}>
        <path d={RAY_PATH} fill={YELLOW} clipPath={`url(#${id}-l)`} />
        <path d={RAY_PATH} fill={right} clipPath={`url(#${id}-r)`} />
      </g>
    </svg>
  );
}

export function Logo({
  id,
  tone = "light",
}: {
  id: string;
  tone?: "light" | "dark";
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark id={id} tone={tone} className="h-9 w-9 flex-none" />
      <span
        className="text-[1.2rem] font-semibold leading-none tracking-[-0.02em]"
        style={{ fontStretch: "118%" }}
      >
        PSAI Power
      </span>
    </span>
  );
}
