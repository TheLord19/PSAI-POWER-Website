import Link from "next/link";

export type IndexRow = {
  href: string;
  title: string;
  summary: string;
  /** Voltage range or governing standard — the scannable right-hand column. */
  qualifier?: string;
};

// Capabilities render as a ruled index, not a card grid. Cards imply equal
// weight and tempt you into hiding the description in a hover state — the
// bug on the old site, where five of six descriptions never reached the DOM.
// An index reads as a table of contents, which is what this is.
export function RuledIndex({
  rows,
  headingLevel = 3,
}: {
  rows: IndexRow[];
  headingLevel?: 2 | 3;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="mt-8 border-t border-rule">
      {rows.map((r) => (
        <li key={r.href} className="border-b border-rule">
          <Link
            href={r.href}
            className="-mx-3 grid gap-1.5 px-3 py-5 text-tank hover:bg-porcelain-2 hover:no-underline md:grid-cols-[16rem_minmax(0,1fr)_11rem] md:items-baseline md:gap-8"
          >
            <H
              className="text-[1.0625rem] font-semibold leading-snug"
              style={{ fontStretch: "100%", letterSpacing: "-0.01em" }}
            >
              {r.title}
            </H>
            {/* Always in the DOM. Never hover-only. */}
            <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-2">
              {r.summary}
            </p>
            {r.qualifier && (
              <span className="text-[0.875rem] text-ink-3 tabular md:text-right">
                {r.qualifier}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
