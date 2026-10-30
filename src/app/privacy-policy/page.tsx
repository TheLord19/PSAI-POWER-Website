import { LegalContactLine, LegalPage } from "@/components/views/LegalPage";
import { CONTACT } from "@/lib/constants";
import { copy } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "How PSAI Power collects, uses and protects personal information from this website, email and job applications.",
  path: "/privacy-policy",
});

// Each source of personal information, disclosed in the order a visitor meets
// them. When a form field or a processor changes, this list must change too.
const COLLECTED = ["form", "email", "careers", "analytics"] as const;

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title={copy("pp-title")}
      intro={copy("pp-intro")}
      sections={[
        {
          title: copy("pp-collect-title"),
          body: (
            <ul className="list-disc space-y-2 pl-5">
              {COLLECTED.map((c) => (
                <li key={c}>
                  <strong className="font-semibold text-tank">
                    {copy(`pp-collect-${c}-label`)}
                  </strong>{" "}
                  {copy(`pp-collect-${c}-body`)}
                </li>
              ))}
            </ul>
          ),
        },
        { title: copy("pp-use-title"), body: <p>{copy("pp-use-body")}</p> },
        { title: copy("pp-confidential-title"), body: <p>{copy("pp-confidential-body")}</p> },
        { title: copy("pp-providers-title"), body: <p>{copy("pp-providers-body")}</p> },
        { title: copy("pp-cookies-title"), body: <p>{copy("pp-cookies-body")}</p> },
        { title: copy("pp-retention-title"), body: <p>{copy("pp-retention-body")}</p> },
        { title: copy("pp-safeguards-title"), body: <p>{copy("pp-safeguards-body")}</p> },
        {
          title: copy("pp-rights-title"),
          body: (
            <p>
              {copy("pp-rights-body1")} <a href={`mailto:${CONTACT.EMAIL}`}>{CONTACT.EMAIL}</a>.{" "}
              {copy("pp-rights-body2")}
            </p>
          ),
        },
        {
          title: copy("pp-changes-title"),
          body: (
            <>
              <p>{copy("pp-changes-body")}</p>
              <LegalContactLine />
            </>
          ),
        },
      ]}
    />
  );
}
