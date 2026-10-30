import Link from "next/link";
import { LegalContactLine, LegalPage } from "@/components/views/LegalPage";
import { copy } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of service",
  description: "Terms governing the use of the PSAI Power website and its content.",
  path: "/terms-of-service",
});

const plain = (key: string) => ({
  title: copy(`tos-${key}-title`),
  body: <p>{copy(`tos-${key}-body`)}</p>,
});

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title={copy("tos-title")}
      intro={copy("tos-intro")}
      sections={[
        plain("info"),
        plain("relationship"),
        plain("licensure"),
        plain("ip"),
        {
          title: copy("tos-submissions-title"),
          body: (
            <p>
              {copy("tos-submissions-body")}{" "}
              <Link href="/privacy-policy">Read the privacy policy</Link>.
            </p>
          ),
        },
        plain("warranty"),
        plain("liability"),
        plain("links"),
        plain("changes"),
        plain("law"),
        { title: copy("tos-contact-title"), body: <LegalContactLine /> },
      ]}
    />
  );
}
