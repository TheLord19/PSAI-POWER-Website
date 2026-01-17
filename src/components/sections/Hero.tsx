// src/components/sections/Hero.tsx
export default function Hero() {
  return (
    
<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Powering Progress Through <span className="text-blue-400">Engineering Excellence</span>
    </h1>
    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
      Advanced power system solutions for utilities, industry, and renewable energy integration.
    </p>
    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-lg">
      Explore Solutions
    </button>
  </div>
</section>
  );
}