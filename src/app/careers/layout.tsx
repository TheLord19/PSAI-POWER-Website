import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | PSAI POWER",
  description:
    "Open roles at PSAI Power Inc. — join a growing Canadian power engineering consultancy working on substations, industrial systems, and renewables.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
