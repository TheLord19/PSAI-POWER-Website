"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import React, { useEffect } from "react";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const savedLng = localStorage.getItem("psai-lang");
    if (savedLng && savedLng !== i18n.language) {
      i18n.changeLanguage(savedLng);
    }

    // keep html lang in sync with i18n
    const syncLang = (lng: string) => {
      document.documentElement.lang = lng;
    };
    syncLang(i18n.language);
    i18n.on("languageChanged", syncLang);
    return () => {
      i18n.off("languageChanged", syncLang);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
