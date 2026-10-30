import type { ReactNode } from "react";

// Bus-and-drop geometry from single-line diagrams: a heavy horizontal bus
// with an orthogonal drop into the content beneath it. Replaces generic
// dividers and card grids, encodes hierarchy, and echoes the hero diagram
// without repeating it.
export function SectionBus({
  id,
  heading,
  intro,
  action,
  children,
}: {
  id: string;
  heading: string;
  intro?: ReactNode;
  action?: ReactNode;
  children?: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="pb-16 sm:pb-20">
      <div className="wrap">
        <div className="relative border-t-[3px] border-tank">
          {/* Bus node, where the drop taps off. */}
          <span
            aria-hidden="true"
            className="absolute -top-[6px] left-0 h-[9px] w-[9px] bg-tank"
          />
          <div className="ml-[4px] flex flex-col gap-2 border-l border-rule pl-5 pt-4 sm:flex-row sm:items-baseline sm:gap-6">
            <h2 id={headingId} className="flex-none">
              {heading}
            </h2>
            {intro && (
              <p className="m-0 max-w-[54ch] text-[0.9375rem] leading-relaxed text-ink-3">
                {intro}
              </p>
            )}
            {action && <div className="sm:ml-auto">{action}</div>}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
