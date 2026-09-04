"use client";

/* ------------------------------------------------------------------ */
/*  Animated Power Grid — SVG background for the hero                 */
/*  Renders a stylised transmission network: nodes = substations,     */
/*  lines = HV corridors. Subtle pulse animation on active nodes.     */
/* ------------------------------------------------------------------ */
export default function GridTopology() {
  const nodes = [
    { x: 5, y: 10, r: 3, delay: 0 },
    { x: 18, y: 22, r: 4, delay: 1.2 },
    { x: 32, y: 8, r: 3, delay: 0.6 },
    { x: 48, y: 28, r: 5, delay: 1.8 },
    { x: 62, y: 12, r: 3, delay: 0.3 },
    { x: 78, y: 32, r: 4, delay: 1.5 },
    { x: 92, y: 15, r: 3, delay: 0.9 },
    { x: 15, y: 55, r: 4, delay: 2.0 },
    { x: 35, y: 48, r: 3, delay: 0.7 },
    { x: 55, y: 60, r: 5, delay: 1.1 },
    { x: 72, y: 52, r: 3, delay: 1.7 },
    { x: 88, y: 70, r: 4, delay: 0.4 },
    { x: 8, y: 78, r: 3, delay: 1.3 },
    { x: 28, y: 82, r: 4, delay: 0.8 },
    { x: 50, y: 88, r: 3, delay: 1.9 },
    { x: 68, y: 80, r: 5, delay: 0.2 },
    { x: 85, y: 92, r: 3, delay: 1.4 },
    { x: 95, y: 55, r: 4, delay: 0.5 },
  ];

  const lines = [
    { x1: 5, y1: 10, x2: 18, y2: 22 },
    { x1: 18, y1: 22, x2: 32, y2: 8 },
    { x1: 32, y1: 8, x2: 48, y2: 28 },
    { x1: 48, y1: 28, x2: 62, y2: 12 },
    { x1: 62, y1: 12, x2: 78, y2: 32 },
    { x1: 78, y1: 32, x2: 92, y2: 15 },
    { x1: 15, y1: 55, x2: 35, y2: 48 },
    { x1: 35, y1: 48, x2: 55, y2: 60 },
    { x1: 55, y1: 60, x2: 72, y2: 52 },
    { x1: 72, y1: 52, x2: 88, y2: 70 },
    { x1: 8, y1: 78, x2: 28, y2: 82 },
    { x1: 28, y1: 82, x2: 50, y2: 88 },
    { x1: 50, y1: 88, x2: 68, y2: 80 },
    { x1: 68, y1: 80, x2: 85, y2: 92 },
    // Vertical interconnects
    { x1: 18, y1: 22, x2: 15, y2: 55 },
    { x1: 48, y1: 28, x2: 55, y2: 60 },
    { x1: 78, y1: 32, x2: 72, y2: 52 },
    { x1: 92, y1: 15, x2: 95, y2: 55 },
    { x1: 32, y1: 8, x2: 35, y2: 48 },
    { x1: 62, y1: 12, x2: 55, y2: 60 },
    { x1: 88, y1: 70, x2: 85, y2: 92 },
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Grid lines */}
      {lines.map((l, i) => (
        <line
          key={`line-${i}`}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="rgba(59,130,246,0.12)"
          strokeWidth="0.2"
        />
      ))}

      {/* Nodes with pulse */}
      {nodes.map((n, i) => (
        <g key={`node-${i}`}>
          <circle cx={n.x} cy={n.y} r={n.r * 1.6} fill="rgba(59,130,246,0.08)">
            <animate
              attributeName="r"
              values={`${n.r * 1.2};${n.r * 2.2};${n.r * 1.2}`}
              dur="4s"
              repeatCount="indefinite"
              begin={`${n.delay}s`}
            />
            <animate
              attributeName="opacity"
              values="0.08;0;0.08"
              dur="4s"
              repeatCount="indefinite"
              begin={`${n.delay}s`}
            />
          </circle>
          <circle cx={n.x} cy={n.y} r={n.r * 0.55} fill="rgba(96,165,250,0.7)">
            <animate
              attributeName="opacity"
              values="0.7;0.3;0.7"
              dur="3s"
              repeatCount="indefinite"
              begin={`${n.delay}s`}
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}
