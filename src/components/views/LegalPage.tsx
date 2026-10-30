import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT } from "@/lib/constants";
import { copy } from "@/lib/copy";

export type LegalSection = { title: string; body: ReactNode };

// Privacy policy and terms. Legal text is unchanged; it still lives in the
// translation file.
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <header className="wrap pb-8 pt-14 sm:pt-16">
        <h1>{title}</h1>
        <p className="mt-3 text-[0.9375rem] text-ink-3">
          {copy("legal-last-updated")}: {copy("legal-updated-date")}
        </p>
      </header>
      <div className="wrap pb-20">
        <div className="max-w-[68ch] border-t-[3px] border-tank pt-8 leading-relaxed text-ink-2">
          <p>{intro}</p>
          {sections.map((s) => (
            <section key={s.title} className="mt-10">
              <h2 className="text-[1.25rem] text-tank" style={{ fontStretch: "100%" }}>
                {s.title}
              </h2>
              <div className="mt-3 space-y-3">{s.body}</div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export function LegalContactLine() {
  return (
    <p>
      {copy("legal-contact-pre")} <a href={`mailto:${CONTACT.EMAIL}`}>{CONTACT.EMAIL}</a>{" "}
      {copy("legal-contact-mid")} <Link href="/contact-us">{copy("legal-contact-link")}</Link>.
    </p>
  );
}
