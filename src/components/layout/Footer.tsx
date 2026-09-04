"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { CONTACT } from "@/lib/constants";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-3">PSAI POWER</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              {t("footer-slogan")}
            </p>
            <a
              href={CONTACT.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {t("footer-services")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/services/power-system-design"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("power-system-design")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/grid-modernization"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("grid-modernization")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/renewable-integration"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("renewable-integration")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/electrical-protection"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("electrical-protection")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/energy-audits"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("energy-audits")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {t("footer-quick-links")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("team")}
                </Link>
              </li>
              <li>
                <Link
                  href="/who-we-serve"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("who we serve")}
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("resources")}
                </Link>
              </li>
              <li>
                <Link
                  href="/licenses"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("licenses")}
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("careers")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("contact us")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {t("footer-contact-info")}
            </h4>
            <address className="text-gray-400 text-sm not-italic space-y-2.5">
              <p>{t("footer-address-line1")}</p>
              <p>{t("footer-address-line2")}</p>
              <p>
                <a
                  href={`mailto:${CONTACT.EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.EMAIL}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${CONTACT.PHONE}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.PHONE}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} PSAI POWER.{" "}
            {t("footer-all-rights-reserved")}
            <span className="mx-2 text-gray-600">|</span>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              {t("pp-title")}
            </Link>
            <span className="mx-2 text-gray-600">|</span>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              {t("tos-title")}
            </Link>
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              {t("footer-privacy-policy")}
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              {t("footer-terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
