import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">PSAI POWER</h3>
            <p className="text-gray-400 mb-4">
              Powering the future with innovative AI solutions for the energy sector.
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
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors">Power System Design</Link></li>
              <li><Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors">Grid Modernization</Link></li>
              <li><Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors">Renewable Integration</Link></li>
              <li><Link href="/services#maintenance" className="text-gray-400 hover:text-white transition-colors">Preventive Maintenance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/who-we-serve" className="text-gray-400 hover:text-white transition-colors">Who We Serve</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contactus" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">1099 Gordon Avenue, Unit 3</p>
              <p className="mb-2">Sudbury , P3A 2V5</p>
              <p className="mb-2">Email: info@psaipowerinc.ca</p>
              <p className="mb-2">Phone:+1 (705) 970-6244</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} PSAI POWER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}