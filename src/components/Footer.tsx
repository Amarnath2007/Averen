'use client';

import React from 'react';
import Link from 'next/link';
import { AverenLogo } from './AverenLogo';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const footerNav = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Our Work', href: '#work' },
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
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                  <a
                    href="mailto:averen.tech@gmail.com"
                    className="hover:text-white hover:underline transition-colors text-xs truncate"
                  >
                    averen.tech@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                  <a
                    href="tel:+919003639824"
                    className="hover:text-white hover:underline transition-colors text-xs"
                  >
                    +91 9003639824
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <a
                    href="https://wa.me/919003639824"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors text-xs"
                  >
                    WhatsApp Chat
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
                className="group btn-glass-dark inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-brand-teal transition-transform duration-200 group-hover:-translate-y-0.5" />
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
