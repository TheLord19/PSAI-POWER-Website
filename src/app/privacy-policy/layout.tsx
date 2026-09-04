import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PSAI POWER",
  description:
    "How PSAI Power Inc. collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
