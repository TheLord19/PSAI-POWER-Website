"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavDropdownGroup {
  heading: string;
  items: { label: string; href: string }[];
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownGroup[][];
}

interface MobileNavProps {
  navItems: NavItem[];
}

export default function MobileNav({ navItems }: MobileNavProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setExpandedIndex(null);
  };

  const toggleDropdown = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2.5 -mr-2 text-slate-600 hover:text-slate-900 hover:bg-gray-100 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay + Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-[101] lg:hidden flex flex-col shadow-2xl font-['Segoe_UI',_system-ui,_sans-serif]"
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="text-lg font-bold text-slate-900">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Items */}
              <div className="flex-1 overflow-y-auto py-2">
                {navItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="border-b border-gray-50 last:border-b-0"
                  >
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left text-slate-800 font-medium hover:bg-blue-50 hover:text-[#0078d4] transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                              expandedIndex === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden bg-gray-50/80"
                            >
                              {item.dropdown.flat().map((group) => (
                                <div key={group.heading} className="px-6 py-1">
                                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 mt-2 border-b border-gray-100 pb-1">
                                    {group.heading}
                                  </div>
                                  {group.items.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      onClick={handleLinkClick}
                                      className="block py-2 pl-4 text-sm text-slate-600 hover:text-[#0078d4] border-l-2 border-transparent hover:border-[#0078d4] transition-all"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block px-6 py-4 text-slate-800 font-medium hover:bg-blue-50 hover:text-[#0078d4] transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Language Switcher */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
                      i18n.language?.startsWith("en")
                        ? "bg-white text-blue-700 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange("fr")}
                    className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
                      i18n.language?.startsWith("fr")
                        ? "bg-white text-blue-700 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    FR
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
