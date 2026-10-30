import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT } from "@/lib/constants";

// Right-hand rail on capability and case study pages.
export function Aside({ children }: { children: ReactNode }) {
  return (
    <aside
      aria-label="Related"
      className="self-start border-t-[3px] border-tank pt-4 text-[0.9375rem] lg:sticky lg:top-8"
    >
      {children}
      <div className="mt-8">
        <AsideHeading>Talk to an engineer</AsideHeading>
        <p className="mt-2 leading-relaxed text-ink-2">
          <a href={`mailto:${CONTACT.EMAIL}`}>{CONTACT.EMAIL}</a>
          <br />
          <a href={CONTACT.PHONE_HREF} className="tabular">
            {CONTACT.PHONE}
          </a>
        </p>
      </div>
    </aside>
  );
}

function AsideHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[1rem] font-semibold tracking-normal" style={{ fontStretch: "100%" }}>
      {children}
    </h2>
  );
}

export function AsideLinks({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <div className="mb-8">
      <AsideHeading>{title}</AsideHeading>
      <ul className="mt-2">
        {links.map((l) => (
          <li key={l.href} className="border-b border-rule py-2">
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
