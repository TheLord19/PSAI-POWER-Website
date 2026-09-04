import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | PSAI POWER',
  description: 'Comprehensive electrical engineering services including Power System Design, Grid Modernization, and Renewable Integration.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
