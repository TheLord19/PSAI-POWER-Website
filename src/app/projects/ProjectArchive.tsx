"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Pending } from "@/components/ui/Pending";
import type { Project } from "@/content/projects";

type Key = "sector" | "regionGroup" | "voltageTier";
type Selection = Record<Key, string | null>;

const LABELS: Record<Key, string> = {
  sector: "Sector",
  regionGroup: "Region",
  voltageTier: "Voltage class",
};
const KEYS = Object.keys(LABELS) as Key[];

const matches = (p: Project, sel: Selection) =>
  KEYS.every((k) => sel[k] === null || p[k] === sel[k]);

function Cell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex justify-between gap-4 text-[0.9375rem] md:block">
      <span className="text-on-tank-2 md:sr-only">{label}</span>
      <span className="text-right text-on-tank tabular md:text-left">{children}</span>
    </div>
  );
}

// Every project is in the server-rendered HTML; filtering only hides rows.
export function ProjectArchive({
  projects,
  filters,
}: {
  projects: Project[];
  filters: Record<Key, string[]>;
}) {
  const [sel, setSel] = useState<Selection>({
    sector: null,
    regionGroup: null,
    voltageTier: null,
  });
  const shown = projects.filter((p) => matches(p, sel));
  const countIf = (k: Key, v: string | null) =>
    projects.filter((p) => matches(p, { ...sel, [k]: v } as Selection)).length;

  return (
    <>
      <div className="grid gap-6 border-b border-tank-rule py-8 md:grid-cols-3">
        {KEYS.map((k) => (
          <fieldset key={k} className="m-0 min-w-0 border-0 p-0">
            <legend className="mb-2.5 text-[0.8125rem] text-on-tank-2">{LABELS[k]}</legend>
            <div className="flex flex-wrap gap-2">
              {([null] as (string | null)[]).concat(filters[k]).map((v) => {
                const n = countIf(k, v);
                const pressed = sel[k] === v;
                return (
                  <button
                    key={v ?? "all"}
                    type="button"
                    aria-pressed={pressed}
                    disabled={n === 0 && !pressed}
                    onClick={() => setSel({ ...sel, [k]: v } as Selection)}
                    className={`rounded-interactive border px-3 py-1.5 text-[0.875rem] disabled:cursor-not-allowed disabled:opacity-40 ${
                      pressed
                        ? "border-live text-white"
                        : "border-white/25 text-on-tank hover:border-white/50"
                    }`}
                  >
                    {v ?? "All"} <span className="tabular text-on-tank-2">{n}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <p aria-live="polite" className="mt-6 text-[0.875rem] text-on-tank-2">
        Showing {shown.length} of {projects.length}
      </p>

      <div
        aria-hidden="true"
        className="mt-4 hidden grid-cols-[minmax(0,2.4fr)_1fr_1fr_1fr_0.7fr] gap-6 border-b border-tank-rule pb-2 text-[0.8125rem] text-on-tank-2 md:grid"
      >
        <span>Project</span>
        <span>Sector</span>
        <span>Region</span>
        <span>Voltage class</span>
        <span>Year</span>
      </div>
      <ul className="border-t border-tank-rule md:border-t-0">
        {shown.map((p) => (
          <li key={p.slug} className="border-b border-tank-rule">
            <Link
              href={`/projects/${p.slug}`}
              className="-mx-3 grid gap-3 px-3 py-5 text-white hover:bg-white/[0.04] hover:no-underline md:grid-cols-[minmax(0,2.4fr)_1fr_1fr_1fr_0.7fr] md:items-baseline md:gap-6"
            >
              <div>
                <h2
                  className="text-[1.125rem] text-white"
                  style={{ fontStretch: "100%", letterSpacing: "-0.01em" }}
                >
                  {p.title}
                </h2>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-on-tank">
                  {p.summary}
                </p>
              </div>
              <Cell label="Sector">{p.sector}</Cell>
              <Cell label="Region">{p.region}</Cell>
              <Cell label="Voltage class">{p.voltageClass ?? <Pending />}</Cell>
              <Cell label="Year">{p.year ?? <Pending />}</Cell>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
