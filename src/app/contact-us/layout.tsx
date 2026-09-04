import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PSAI POWER",
  description:
    "Get in touch with PSAI Power. Reach our Sudbury, Ontario office for power system engineering consultations.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
