// src/components/layout/Header.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAnglesDown, 
  faMagnifyingGlass, 
  faXmark,
  faChevronDown,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Logo from '@/images/Logo(1).png'

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageOpen) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageOpen]);

  const navItems = [
    {
      label: t('services'),
      href: '/services',
      dropdown: [
        {
          heading: t('consulting'),
          items: [
            { label: t('power-system-design'), href: '/services/power-system-design' },
            { label: t('grid-modernization'), href: '/services/grid-modernization' },
            { label: t('renewable-integration'), href: '/services/renewable-integration' },
            { label: t('power-analysis'), href: '/services/system-analysis' },
          ],
        },
        {
          heading: t('maintenance'),
          items: [
            { label: t('preventive-maintenance'), href: '/services/electrical-protection' },
            { label: t('corrective-maintenance'), href: '/services/energy-audits' },
            { label: t('system-optimization'), href: '/services' },
          ],
        },
      ],
    },
    {
      label: t('who-we-serve'),
      href: '/who-we-serve',
      dropdown: [
        {
          heading: t('utilities-grid-operators'),
          items: [
            { label: t('grid-reliability'), href: '/who-we-serve/utilities-grid-operators' },
            { label: t('smart-grid-transition'), href: '/who-we-serve/utilities-grid-operators' },
          ],
        },
        {
          heading: t('renewable-energy'),
          items: [
            { label: t('solar'), href: '/who-we-serve/renewable-energy' },
            { label: t('wind'), href: '/who-we-serve/renewable-energy' },
            { label: t('hydro'), href: '/who-we-serve/renewable-energy' },
            { label: t('energy-storage'), href: '/who-we-serve/renewable-energy' },
          ],
        },
        {
          heading: t('industrial-manufacturing'),
          items: [
            { label: t('factories'), href: '/who-we-serve/industrial-manufacturing' },
            { label: t('production-plants'), href: '/who-we-serve/industrial-manufacturing' },
          ],
        },
        {
          heading: t('oil-gas'),
          items: [
            { label: t('offshore-platforms'), href: '/who-we-serve/oil-gas' },
            { label: t('refineries'), href: '/who-we-serve/oil-gas' },
            { label: t('pipelines'), href: '/who-we-serve/oil-gas' },
          ],
        },
        {
          heading: t('government-regulatory'),
          items: [
            { label: t('consulting'), href: '/who-we-serve/government-regulatory' },
            { label: t('compliance'), href: '/who-we-serve/government-regulatory' },
          ],
        },
        {
          heading: t('mining-industry'),
          items: [
            { label: t('remote-power-supply'), href: '/who-we-serve/mining-industry' },
            { label: t('heavy-equipment-power'), href: '/who-we-serve/mining-industry' },
            { label: t('grid-connected-solutions'), href: '/who-we-serve/mining-industry' },
            { label: t('energy-optimization'), href: '/who-we-serve/mining-industry' },
          ],
        },
      ],
    },
    { label: t('about'), href: '/about' },
    { label: t('resources'), href: '/resources' },
    { label: t('licenses'), href: '/licenses' },
    { label: t('contact-us'), href: '/contact-us' },
  ];

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

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    setIsLanguageOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F5F5F5] text-[#222] shadow-[0_2px_15px_rgba(0,0,0,0.1)] py-2 font-['Segoe_UI',_system-ui,_sans-serif]">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between relative">
          <Link href="/" className="no-underline mx-12 mr-16 flex items-center">
            <img 
              src={Logo.src} 
              alt="PSAI Power Inc."
              className="h-16 w-auto object-contain" // Fixed height, consistent sizing
              style={{ minWidth: '120px',
                        maxWidth: '160px'
               }} // Prevents extreme shrinking
              onLoad={(e) => {
                // Force reflow to prevent layout shift
                e.currentTarget.style.opacity = '1';
              }}
              // style={{ opacity: 0, transition: 'opacity 0.3s' }} // Smooth appearance
            />
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
              <div className="relative ml-4">
                  <button
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors border border-gray-300 rounded-md hover:border-blue-300 bg-white min-w-[80px] justify-between"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      setIsLanguageOpen(!isLanguageOpen);
                    }}
                  >
                    <FontAwesomeIcon icon={faGlobe} className="w-4 h-4" />
                    <span>{i18n.language === 'en' ? 'EN' : 'FR'}</span>
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`w-3 h-3 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {isLanguageOpen && (
                    <div 
                      className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside dropdown
                    >
                      <div className="flex flex-col">
                        <button
                          onClick={() => {
                            console.log('Changing to English');
                            handleLanguageChange('en');
                          }}
                          className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-100 transition-colors rounded-t-md ${
                            i18n.language === 'en' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'
                          }`}
                        >
                          English
                        </button>
                        <button
                          onClick={() => {
                            console.log('Changing to French');
                            handleLanguageChange('fr');
                          }}
                          className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-100 transition-colors rounded-b-md ${
                            i18n.language === 'fr' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'
                          }`}
                        >
                          Français
                        </button>
                      </div>
                    </div>
                  )}
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