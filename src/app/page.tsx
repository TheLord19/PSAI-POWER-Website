// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-32 px-4">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Powering Progress Through <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Engineering Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Advanced power system solutions for utilities, industry, and renewable energy integration across North America and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/services" className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-blue-500/30">
              Explore Our Services
            </Link>
            <Link href="/contact-us" className="px-10 py-5 border-2 border-blue-500 rounded-xl font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm">
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-40 animate-ping"></div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive power system solutions engineered for reliability and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Power System Design",
                description: "End-to-end design services from feasibility studies to final implementation and testing",
                icon: "⚡",
                link: "/services/power-system-design",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Grid Modernization", 
                description: "Advanced solutions to modernize and optimize existing power infrastructure",
                icon: "🔧",
                link: "/services/grid-modernization",
                gradient: "from-green-500 to-green-600"
              },
              {
                title: "Renewable Integration",
                description: "Seamless integration of solar, wind, hydro, and storage systems into the grid",
                icon: "🌿",
                link: "/services/renewable-integration",
                gradient: "from-emerald-500 to-emerald-600"
              }
            ].map((service, index) => (
              <Link key={index} href={service.link} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200/50 hover:border-blue-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-gray-200 group-hover:shadow-blue-100">
                  <div className={`text-5xl mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700 flex items-center gap-2">
                      Learn more 
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/services" className="inline-block px-12 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading organizations across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Utilities & Grid Operators", count: "150+", link: "/who-we-serve/utilities-grid-operators", color: "blue" },
              { name: "Renewable Energy", count: "75+", link: "/who-we-serve/renewable-energy", color: "green" },
              { name: "Industrial Manufacturing", count: "200+", link: "/who-we-serve/industrial-manufacturing", color: "orange" },
              { name: "Oil & Gas", count: "45+", link: "/who-we-serve/oil-gas", color: "gray" },
              { name: "Government", count: "30+", link: "/who-we-serve/government-regulatory", color: "purple" },
              { name: "Mining Industry", count: "60+", link: "/who-we-serve/mining-industry", color: "amber" }
            ].map((industry, index) => (
              <Link key={index} href={industry.link} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-102 group-hover:border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                  <div className={`text-3xl font-bold text-${industry.color}-600 mb-2`}>{industry.count}</div>
                  <p className="text-gray-500 text-sm">Successful Projects</p>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700 flex items-center gap-2">
                      View projects 
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "150MW+", label: "Renewable Integration", icon: "⚡" },
              { number: "500+", label: "Projects Completed", icon: "🏆" },
              { number: "15+", label: "Years Experience", icon: "📅" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="text-blue-200 text-lg font-medium">{stat.label}</p>
                <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to Transform Your Power Systems?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who trust PSAI POWER for innovative, reliable, and cost-effective power solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact-us" className="px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-cyan-500/30">
              Start Your Project
            </Link>
            <Link href="/services" className="px-12 py-5 border-2 border-blue-500 rounded-xl font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}