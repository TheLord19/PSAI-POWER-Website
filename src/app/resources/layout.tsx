import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | PSAI POWER",
  description:
    "Access technical whitepapers, case studies, integration guides, and compliance documents from PSAI Power.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
