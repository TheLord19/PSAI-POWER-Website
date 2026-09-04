import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PSAI POWER",
  description:
    "Terms governing the use of the PSAI Power Inc. website and its content.",
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
