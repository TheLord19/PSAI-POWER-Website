import { LegalPage } from "@/components/views/LegalPage";
import { CONTACT } from "@/lib/constants";
import { copy } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Accessibility",
  description:
    "PSAI Power's accessibility commitment under the AODA: what the website does, its known limitations, alternate formats and how to give feedback.",
  path: "/accessibility",
});

// Every claim on this page is public and must stay true. Each is enforced:
// keyboard, focus, reduced motion and 360px in e2e/comprehensive.spec.ts; one
// h1 per page in e2e/smoke.spec.ts; the diagram toggle in e2e/site.spec.ts;
// contrast and heading order by the Lighthouse accessibility gate in
// lighthouserc.json. Do not add a claim without a test behind it.
const DONE = [1, 2, 3, 4, 5, 6, 7];

export default function AccessibilityPage() {
  return (
    <LegalPage
      title={copy("a11y-title")}
      intro={copy("a11y-intro")}
      sections={[
        {
          title: copy("a11y-done-title"),
          body: (
            <ul className="list-disc space-y-2 pl-5">
              {DONE.map((n) => (
                <li key={n}>{copy(`a11y-done-${n}`)}</li>
              ))}
            </ul>
          ),
        },
        { title: copy("a11y-limits-title"), body: <p>{copy("a11y-limits-body")}</p> },
        { title: copy("a11y-formats-title"), body: <p>{copy("a11y-formats-body")}</p> },
        {
          title: copy("a11y-feedback-title"),
          body: (
            <>
              <p>{copy("a11y-feedback-body")}</p>
              <p>
                <a href={`mailto:${CONTACT.EMAIL}`}>{CONTACT.EMAIL}</a>
                <br />
                <a href={CONTACT.PHONE_HREF}>{CONTACT.PHONE}</a>
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
