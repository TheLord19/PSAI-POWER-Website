// src/app/page.tsx
import Hero from '@/components/sections/Hero';
import ServicesPreview from '@/components/sections/ServicesPreview';
import ClientsSection from '@/components/sections/ClientsSection';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesPreview />
      <ClientsSection />
      <CTA />
    </div>
  );
}