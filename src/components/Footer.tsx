'use client';

import React from 'react';
import Link from 'next/link';
import { AverenLogo } from './AverenLogo';
import { ArrowUp, Mail, MapPin } from 'lucide-react';

const footerNav = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05152A] text-white pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three Clear Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-800/80">
          {/* Column 1: Complete Logo & Company Description */}
          <div className="md:col-span-6 space-y-4">
            <Link href="#home" className="inline-block focus:outline-none" aria-label="Averen Technologies Home">
              <AverenLogo light={true} />
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Building Digital Products. Empowering Ideas. A digital product and technology studio driven by innovation, creativity and problem-solving.
            </p>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs font-mono font-semibold tracking-wider text-brand-teal uppercase">
              Quick Links
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Contact Information & Back to Top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold tracking-wider text-brand-teal uppercase mb-2.5">
                Contact
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                  <a
                    href="mailto:contact@averentechnologies.com"
                    className="hover:text-white transition-colors font-mono text-xs truncate"
                  >
                    contact@averentechnologies.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                  <span className="text-xs text-slate-400">Remote-First Studio</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 transition-colors"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-brand-teal" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} AVEREN TECHNOLOGIES. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#home" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#home" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
