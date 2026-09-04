import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Licenses & Certifications | PSAI POWER',
  description: 'View our professional engineering licenses, certifications, and safety credentials across Canada, including PEO, EGBC, and WSIB.',
};

export default function LicensesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
