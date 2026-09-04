"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CONTACT } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  const sections: { title: string; body: React.ReactNode }[] = [
    {
      title: t("pp-collect-title"),
      body: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>{t("pp-collect-form-label")}</strong>{" "}
            {t("pp-collect-form-body")}
          </li>
          <li>
            <strong>{t("pp-collect-analytics-label")}</strong>{" "}
            {t("pp-collect-analytics-body")}
          </li>
        </ul>
      ),
    },
    { title: t("pp-use-title"), body: <p>{t("pp-use-body")}</p> },
    { title: t("pp-providers-title"), body: <p>{t("pp-providers-body")}</p> },
    { title: t("pp-cookies-title"), body: <p>{t("pp-cookies-body")}</p> },
    { title: t("pp-retention-title"), body: <p>{t("pp-retention-body")}</p> },
    {
      title: t("pp-rights-title"),
      body: (
        <p>
          {t("pp-rights-body1")}{" "}
          <a
            href={`mailto:${CONTACT.EMAIL}`}
            className="text-blue-600 hover:underline"
          >
            {CONTACT.EMAIL}
          </a>
          . {t("pp-rights-body2")}
        </p>
      ),
    },
    {
      title: t("pp-changes-title"),
      body: (
        <p>
          {t("pp-changes-body")} {t("legal-contact-pre")}{" "}
          <a
            href={`mailto:${CONTACT.EMAIL}`}
            className="text-blue-600 hover:underline"
          >
            {CONTACT.EMAIL}
          </a>{" "}
          {t("legal-contact-mid")}{" "}
          <Link href="/contact-us" className="text-blue-600 hover:underline">
            {t("legal-contact-link")}
          </Link>
          .
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0B1120] text-white py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {t("pp-title")}
          </h1>
          <p className="text-slate-400 text-sm">
            {t("legal-last-updated")}: {t("legal-updated-date")}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-slate-700 leading-relaxed">
          <p>{t("pp-intro")}</p>
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                {s.title}
              </h2>
              {s.body}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
