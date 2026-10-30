import type { Credential } from "@/content/firm";
import { Pending } from "./Pending";

// Registrations with their numbers. Publishing the numbers is the cheapest
// trust signal available, and almost nobody does it. Association names are
// set in text — no logos until the right to display each mark is confirmed.
export function Credentials({ items }: { items: Credential[] }) {
  return (
    <ul className="mt-8 grid border-l border-t border-rule sm:grid-cols-2 lg:grid-cols-5">
      {items.map((c) => (
        <li key={c.body} className="border-b border-r border-rule px-5 py-4">
          <div className="text-[0.9375rem] font-medium leading-snug">{c.body}</div>
          <div className="mt-1.5 text-[0.8125rem] text-ink-3 tabular">
            {c.label} {c.number ?? <Pending />}
          </div>
        </li>
      ))}
    </ul>
  );
}
