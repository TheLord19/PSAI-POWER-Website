import type { Metadata } from "next";
import { ORG } from "./constants";

// Per-page metadata with a canonical URL. Paths resolve against metadataBase
// in the root layout. hreflang is deliberately absent: there is no French
// version of the new content yet, and a language alternate that leads nowhere
// is worse than none. Add `alternates.languages` when /fr exists.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: ORG.NAME,
      locale: "en_CA",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
