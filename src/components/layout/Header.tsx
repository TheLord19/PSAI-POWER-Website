// src/components/layout/Header.tsx
"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  // Search,  // ⚠️ DO NOT DELETE — SEARCH DISABLED for now. Re-enable when site search is implemented (e.g. Pagefind, Google Custom Search)
  // X,
  // Globe
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "@/images/Logo(1).png";
import MobileNav from "./MobileNav";
import { useClickOutside } from "@/hooks/useClickOutside";

declare global {
  interface Window {
    hoverTimeout?: NodeJS.Timeout | null;
  }
}

/** Pre-compute columns for dropdown groups (max 3 groups per column). */
function groupIntoColumns<T>(groups: T[], maxPerColumn = 3): T[][] {
  const columns: T[][] = [];
  for (let i = 0; i < groups.length; i += maxPerColumn) {
    columns.push(groups.slice(i, i + maxPerColumn));
  }
  return columns;
}

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  // ⚠️ DO NOT DELETE — SEARCH STATE (disabled until search backend is implemented)
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');

  // Close language dropdown when clicking outside
  useClickOutside(langDropdownRef, () => {
    if (isLanguageOpen) setIsLanguageOpen(false);
  });

  const navItems = [
    {
      label: t("services"),
      href: "/services",
      dropdown: groupIntoColumns([
        {
          heading: t("consulting"),
          items: [
            {
              label: t("power-system-design"),
              href: "/services/power-system-design",
            },
            {
              label: t("grid-modernization"),
              href: "/services/grid-modernization",
            },
            {
              label: t("renewable-integration"),
              href: "/services/renewable-integration",
            },
            { label: t("power-analysis"), href: "/services/system-analysis" },
          ],
        },
        {
          heading: t("maintenance"),
          items: [
            {
              label: t("electrical-protection"),
              href: "/services/electrical-protection",
            },
            { label: t("energy-audits"), href: "/services/energy-audits" },
          ],
        },
      ]),
    },
    {
      label: t("who we serve"),
      href: "/who-we-serve",
      dropdown: groupIntoColumns([
        {
          heading: t("who we serve"),
          items: [
            {
              label: t("utilities-grid-operators"),
              href: "/who-we-serve/utilities-grid-operators",
            },
            {
              label: t("renewable-energy"),
              href: "/who-we-serve/renewable-energy",
            },
            {
              label: t("industrial-manufacturing"),
              href: "/who-we-serve/industrial-manufacturing",
            },
            {
              label: t("government-regulatory"),
              href: "/who-we-serve/government-regulatory",
            },
            {
              label: t("mining-industry"),
              href: "/who-we-serve/mining-industry",
            },
          ],
        },
      ]),
    },
    { label: t("about"), href: "/about" },
    { label: t("team"), href: "/team" },
    { label: t("resources"), href: "/resources" },
    { label: t("licenses"), href: "/licenses" },
    { label: t("careers"), href: "/careers" },
    { label: t("contact us"), href: "/contact-us" },
  ];

  // ⚠️ DO NOT DELETE — SEARCH HANDLER (disabled until search backend is implemented)
  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSearchOpen(false);
  //   setSearchQuery('');
  // };

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F5F5F5]/95 backdrop-blur-md text-[#222] shadow-[0_2px_15px_rgba(0,0,0,0.05)] py-2 font-['Segoe_UI',_system-ui,_sans-serif] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          <Link
            href="/"
            className="no-underline flex items-center flex-shrink-0"
          >
            <Image
              src={Logo}
              alt="PSAI Power Inc."
              className="h-14 sm:h-20 w-auto object-contain"
              style={{ minWidth: "120px", maxWidth: "200px" }}
              priority
            />
          </Link>

          <MobileNav navItems={navItems} />

          <nav className="hidden lg:flex gap-1 ml-auto pr-8 whitespace-nowrap items-center">
            {navItems.map(({ label, href, dropdown }, index) => (
              <div
                key={label}
                className={`relative h-10 flex justify-center items-center ${
                  dropdown ? "group" : ""
                }`}
                onMouseEnter={() => {
                  if (window.hoverTimeout) {
                    clearTimeout(window.hoverTimeout);
                    window.hoverTimeout = null;
                  }
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  window.hoverTimeout = setTimeout(() => {
                    setHoveredIndex(null);
                  }, 300); // 300ms delay
                }}
              >
                <Link
                  href={href}
                  className="text-[#333] no-underline font-semibold text-sm px-4 py-2.5 flex items-center justify-center transition-all rounded-full hover:bg-black/5 group-hover:text-[#0078d4] relative"
                >
                  {label}
                  {dropdown && (
                    <ChevronDown className="w-4 h-4 ml-1 text-gray-400 group-hover:text-[#0078d4] transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {dropdown && hoveredIndex === index && (
                  <div className="absolute top-full left-0 mt-2 bg-[#012e69] border border-white/10 shadow-2xl rounded-xl flex gap-8 p-6 z-[1500] animate-in fade-in slide-in-from-top-2 duration-200">
                    {dropdown.map((column, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-2">
                        {column.map(({ heading, items }) => (
                          <div key={heading} className="flex flex-col mb-2">
                            <div className="font-bold text-blue-200 mb-2 text-xs uppercase tracking-wider border-b border-white/10 pb-1">
                              {heading}
                            </div>
                            {items.map(({ label: dLabel, href: dHref }) => (
                              <Link
                                href={dHref}
                                key={dLabel}
                                className="text-white/80 hover:text-white no-underline py-1.5 text-sm font-medium transition-colors hover:translate-x-1 block"
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

            {/* Modern Language Pill Toggle */}
            <div
              ref={langDropdownRef}
              className="bg-gray-100/80 border border-gray-200 rounded-full p-1 flex items-center ml-6 relative backdrop-blur-sm"
            >
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                  i18n.language?.startsWith("en")
                    ? "bg-white text-blue-700 shadow-sm border border-transparent"
                    : "text-gray-500 hover:text-gray-700 border border-transparent"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange("fr")}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                  i18n.language?.startsWith("fr")
                    ? "bg-white text-blue-700 shadow-sm border border-transparent"
                    : "text-gray-500 hover:text-gray-700 border border-transparent"
                }`}
              >
                FR
              </button>
            </div>

            {/* ⚠️ DO NOT DELETE — SEARCH BUTTON. Disabled until site search is implemented. To re-enable: uncomment this block + the overlay below + the state/handler/imports above.
            <button
              className="bg-transparent border-none cursor-pointer p-2 text-[#333] ml-4 text-lg transition-colors hover:text-[#0078d4] hover:bg-gray-100 rounded-full"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>
            */}
          </nav>
        </div>
      </header>

      {/* ⚠️ DO NOT DELETE — SEARCH OVERLAY. Disabled until site search is implemented. To re-enable: uncomment this block + the button above + the state/handler/imports above.
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[2000] animate-in fade-in duration-200">
          <div className="w-full max-w-2xl relative">
            <form onSubmit={handleSearch} className="flex items-center bg-white rounded-2xl overflow-hidden shadow-2xl transform scale-100 animate-in zoom-in-95 duration-200">
              <input
                type="text"
                placeholder="Search resources, services, or case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-6 px-8 border-none text-xl outline-none font-light"
                autoFocus
              />
              <button
                type="submit"
                className="bg-blue-600 border-none text-white py-6 px-8 cursor-pointer transition-colors hover:bg-blue-700"
              >
                <Search className="w-6 h-6" />
              </button>
            </form>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 rounded-full p-2 border-none text-white cursor-pointer transition-all"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
      */}
    </>
  );
}
