import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | PSAI POWER',
  description: 'PSAI Power provides engineering solutions to utilities, manufacturing, renewable energy, mining, and government sectors.',
};

export default function WhoWeServeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
