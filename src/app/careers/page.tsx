import Link from "next/link";
import { TitleBlock } from "@/components/ui/TitleBlock";
import { CONTACT } from "@/lib/constants";
import { copy } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { jobPostingSchema, jsonLd } from "@/lib/structured-data";

// These two postings are the most technically credible writing on the site
// and the house voice for everything else. Text stays in the translation file
// so a French version can reuse the keys.
const JOBS = [
  { key: "eng", respCount: 6, qualCount: 5, assetCount: 3 },
  { key: "tech", respCount: 6, qualCount: 5, assetCount: 4 },
] as const;

// Required by Google Jobs. Confirm the real posting date — list.md.
const DATE_POSTED = "2026-09-11";

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const htmlList = (items: string[]) =>
  `<ul>${items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`;

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Open roles at PSAI Power: intermediate electrical engineer (power systems) and electrical field technician. Sudbury, Ontario and project sites.",
  path: "/careers",
});

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[1rem]">{title}</h3>
      <ul className="checks mt-3">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function CareersPage() {
  const jobs = JOBS.map((j) => ({
    key: j.key,
    title: copy(`careers-${j.key}-title`),
    exp: copy(`careers-${j.key}-exp`),
    summary: copy(`careers-${j.key}-summary`),
    resp: range(j.respCount).map((i) => copy(`careers-${j.key}-r${i}`)),
    qual: range(j.qualCount).map((i) => copy(`careers-${j.key}-q${i}`)),
    assets: range(j.assetCount).map((i) => copy(`careers-${j.key}-a${i}`)),
  }));

  return (
    <>
      {jobs.map((j) => (
        <script
          key={j.key}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(
            jobPostingSchema({
              title: j.title,
              description: [
                `<p>${escapeHtml(j.summary)}</p>`,
                `<p>${escapeHtml(copy("careers-resp-title"))}</p>`,
                htmlList(j.resp),
                `<p>${escapeHtml(copy("careers-qual-title"))}</p>`,
                htmlList(j.qual),
                `<p>${escapeHtml(copy("careers-eligibility"))}</p>`,
              ].join(""),
              datePosted: DATE_POSTED,
              employmentType: "FULL_TIME",
            }),
          )}
        />
      ))}

      <TitleBlock
        title="Careers"
        sub={copy("careers-hero-subtitle")}
        meta={[
          { label: "Openings", value: String(jobs.length) },
          { label: "Location", value: "Sudbury, ON and project sites" },
          { label: "Employment", value: "Full-time" },
          { label: "Eligibility", value: "Entitled to work in Canada" },
        ]}
      />

      <div className="wrap pb-20 pt-12">
        <p className="max-w-[64ch] text-[1.0625rem] leading-relaxed text-ink-2">
          {copy("careers-intro")} <Link href="/projects">See the projects</Link>{" "}
          for the kind of work involved.
        </p>

        {jobs.map((j) => {
          const mailto = `mailto:${CONTACT.EMAIL}?subject=${encodeURIComponent(
            `Application — ${j.title}`,
          )}`;
          return (
            <article
              key={j.key}
              aria-labelledby={`job-${j.key}`}
              className="mt-14 border-t-[3px] border-tank pt-6"
            >
              <h2 id={`job-${j.key}`} className="max-w-[32ch]">
                {j.title}
              </h2>
              <p className="mt-3 text-[0.9375rem] text-ink-3">
                {copy("careers-location")} · {j.exp}
              </p>
              <p className="mt-5 max-w-[68ch] leading-relaxed">{j.summary}</p>

              <div className="mt-8 grid gap-10 md:grid-cols-2">
                <List title={copy("careers-resp-title")} items={j.resp} />
                <div className="space-y-8">
                  <List title={copy("careers-qual-title")} items={j.qual} />
                  <List title={copy("careers-assets-title")} items={j.assets} />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <a href={mailto} className="btn btn-tank self-start">
                  {copy("careers-apply-cta")}
                </a>
                <p className="text-[0.9375rem] text-ink-3">
                  {copy("careers-apply-note")} <a href={mailto}>{CONTACT.EMAIL}</a>
                </p>
              </div>
            </article>
          );
        })}

        <p className="mt-14 max-w-[68ch] border-l-[3px] border-rule pl-5 text-[0.9375rem] leading-relaxed text-ink-2">
          {copy("careers-eligibility")}
        </p>
      </div>
    </>
  );
}
