import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | PSAI POWER',
  description: 'Learn about PSAI Power Inc., our engineering excellence, our history, and our commitment to sustainable energy solutions.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
