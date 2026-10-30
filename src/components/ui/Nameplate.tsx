import type { ReactNode } from "react";

export type PlateField = { label: string; value: ReactNode };

// Modelled on equipment rating plates. These are exactly the fields a
// procurement engineer scans for, so the component does real work rather
// than decorating. Used on project cards, case studies and the archive.
export function Nameplate({
  fields,
  tone = "light",
  className = "",
}: {
  fields: PlateField[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  const rule = dark ? "border-tank-rule" : "border-rule";
  return (
    <dl className={`m-0 border-t text-[0.875rem] ${rule} ${className}`}>
      {fields.map((f) => (
        <div key={f.label} className={`flex justify-between gap-4 border-b py-1.5 ${rule}`}>
          <dt className={dark ? "text-on-tank-2" : "text-ink-3"}>{f.label}</dt>
          <dd className={`m-0 text-right font-medium tabular ${dark ? "text-white" : "text-tank"}`}>
            {f.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
