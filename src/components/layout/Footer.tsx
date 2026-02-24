'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">PSAI POWER</h3>
            <p className="text-gray-400 mb-4">
              {t('footer-slogan')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer-services')}</h4>
            <ul className="space-y-2">
              <li><Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors">{t('power-system-design')}</Link></li>
              <li><Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors">{t('grid-modernization')}</Link></li>
              <li><Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors">{t('renewable-integration')}</Link></li>
              <li><Link href="/services#maintenance" className="text-gray-400 hover:text-white transition-colors">{t('preventive-maintenance')}</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer-quick-links')}</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">{t('footer-about-us')}</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('footer-our-services')}</Link></li>
              <li><Link href="/who-we-serve" className="text-gray-400 hover:text-white transition-colors">{t('footer-who-we-serve')}</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">{t('footer-resources')}</Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors">{t('footer-contact-us')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer-contact-info')}</h4>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">{t('footer-address-line1')}</p>
              <p className="mb-2">{t('footer-address-line2')}</p>
              <p className="mb-2">Email: info@psaipowerinc.ca</p>
              <p className="mb-2">Phone: +1 (705) 970-6244</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} PSAI POWER. {t('footer-all-rights-reserved')}</p>
        </div>
      </div>
    </footer>
  );
}