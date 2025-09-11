'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAnglesDown, 
  faMagnifyingGlass, 
  faXmark,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const navItems = [
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        {
          heading: 'Consulting',
          items: [
            { label: 'Power System Design', href: '/services#consulting1' },
            { label: 'Grid Modernization', href: '/services#consulting2' },
            { label: 'Renewable Integration', href: '/services#consulting3' },
            { label: 'Power Analysis', href: '/services#consulting4' },
          ],
        },
        {
          heading: 'Maintenance',
          items: [
            { label: 'Preventive Maintenance', href: '/services#maintenance1' },
            { label: 'Corrective Maintenance', href: '/services#maintenance2' },
            { label: 'System Optimization', href: '/services#maintenance3' },
          ],
        },
      ],
    },
    {
      label: 'Who We Serve',
      href: '/who-we-serve',
      dropdown: [
        {
          heading: 'Utilities & Grid Operators',
          items: [
            { label: 'Grid Reliability', href: '/who-we-serve#utilities' },
            { label: 'Smart Grid Transition', href: '/who-we-serve#utilities2' },
          ],
        },
        {
          heading: 'Renewable Energy',
          items: [
            { label: 'Solar', href: '/who-we-serve#renewable-solar' },
            { label: 'Wind', href: '/who-we-serve#renewable-wind' },
            { label: 'Hydro', href: '/who-we-serve#renewable-hydro' },
            { label: 'Energy Storage', href: '/who-we-serve#renewable-storage' },
          ],
        },
        {
          heading: 'Industrial Manufacturing',
          items: [
            { label: 'Factories', href: '/who-we-serve#industrial-factories' },
            { label: 'Production Plants', href: '/who-we-serve#industrial-plants' },
          ],
        },
        {
          heading: 'Oil & Gas',
          items: [
            { label: 'Offshore Platforms', href: '/who-we-serve#oil-gas1' },
            { label: 'Refineries', href: '/who-we-serve#oil-gas2' },
            { label: 'Pipelines', href: '/who-we-serve#oil-gas3' },
          ],
        },
        {
          heading: 'Government & Regulatory',
          items: [
            { label: 'Consulting', href: '/who-we-serve#gov-consulting' },
            { label: 'Compliance', href: '/who-we-serve#gov-compliance' },
          ],
        },
        {
          heading: 'Mining Industry',
          items: [
            { label: 'Remote Power Supply', href: '/who-we-serve#mining1' },
            { label: 'Heavy Equipment Power', href: '/who-we-serve#mining2' },
            { label: 'Grid-Connected Solutions', href: '/who-we-serve#mining3' },
            { label: 'Energy Optimization', href: '/who-we-serve#mining4' },
          ],
        },
      ],
    },
    { label: 'About', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Licenses', href: '/licenses' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const splitColumns = <T,>(items: T[], maxPerColumn = 3): T[][] => {
    const columns: T[][] = [];
    let currentColumn: T[] = [];
    items.forEach((item, idx) => {
      currentColumn.push(item);
      if ((idx + 1) % maxPerColumn === 0) {
        columns.push(currentColumn);
        currentColumn = [];
      }
    });
    if (currentColumn.length) columns.push(currentColumn);
    return columns;
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F5F5F5] text-[#222] shadow-[0_2px_15px_rgba(0,0,0,0.1)] py-2 font-['Segoe_UI',_system-ui,_sans-serif]">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between relative">
          <Link href="/" className="font-bold text-2xl text-[#333] no-underline mx-12 mr-16">
            PSAI POWER
          </Link>

          <nav className="flex gap-1 ml-auto pr-8 whitespace-nowrap items-center">
            {navItems.map(({ label, href, dropdown }, index) => (
              <div
                key={label}
                className={`relative h-10 flex justify-center items-center ${
                  dropdown ? 'group' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link 
                  href={href} 
                  className="text-[#333] no-underline font-semibold text-sm px-4 py-2.5 inline-flex items-center justify-center gap-1.5 transition-all rounded group-hover:bg-black/8 group-hover:text-[#0078d4]"
                >
                  {label.toUpperCase()}
                  {dropdown && (
                    <FontAwesomeIcon
                      icon={faAnglesDown}
                      className="text-xs opacity-0 -translate-y-0.75 transition-all group-hover:opacity-100 group-hover:translate-y-0 ml-1.5 animate-bounce-alt"
                    />
                  )}
                </Link>

                {dropdown && hoveredIndex === index && (
                  <div className="absolute top-full left-0 mt-1.5 bg-[#012e69] border border-white/10 shadow-lg rounded flex gap-8 p-4 z-[1500]">
                    {splitColumns(dropdown).map((column, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-2">
                        {column.map(({ heading, items }) => (
                          <div key={heading} className="flex flex-col">
                            <div className="font-semibold text-white mb-2 text-sm uppercase">
                              {heading}
                            </div>
                            {items.map(({ label: dLabel, href: dHref }) => (
                              <Link 
                                href={dHref} 
                                key={dLabel} 
                                className="text-white/90 no-underline py-1.5 text-sm font-medium transition-colors hover:bg-white/10 px-2 rounded"
                              >
                                {dLabel}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            

              

{/* Language Toggle Dropdown */}
<div className="relative group ml-4">
  <button className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
    CA/EN
    <FontAwesomeIcon 
      icon={faChevronDown} 
      className="w-3 h-3 ml-1 transition-transform group-hover:rotate-180" 
    />
  </button>

  {/* Dropdown Menu */}
  <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    <button
      onClick={() => setCurrentLanguage('EN')}
      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors first:rounded-t-md"
    >
      CA/FR
    </button>
    <button
      onClick={() => setCurrentLanguage('FR')}
      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors last:rounded-b-md"
    >
      CA/FR
    </button>
  </div>
</div>
            {/* Search Button */}
            <button 
              className="bg-transparent border-none cursor-pointer p-2 text-[#333] ml-4 text-lg transition-colors hover:text-[#0078d4]"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </nav>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[2000] animate-fade-in">
          <div className="w-full max-w-2xl relative">
            <form onSubmit={handleSearch} className="flex items-center bg-white rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-4 px-6 border-none text-lg outline-none"
                autoFocus
              />
              <button 
                type="submit" 
                className="bg-[#003366] border-none text-white py-4 px-6 cursor-pointer transition-colors hover:bg-[#002b66]"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute -top-10 right-0 bg-transparent border-none text-white text-2xl cursor-pointer"
              aria-label="Close search"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bounce-alt {
          from { transform: translateY(0); }
          to { transform: translateY(2px); }
        }
        .animate-bounce-alt {
          animation: bounce-alt 0.5s infinite alternate;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
      `}</style>
    </>
  );
}