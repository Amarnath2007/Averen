'use client';

import React from 'react';
import Link from 'next/link';
import {
  Paintbrush,
  Laptop,
  GraduationCap,
  Check,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

export const Pricing: React.FC = () => {
  const handleServiceSelect = (serviceTitle: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('averen-select-service', { detail: serviceTitle }));
    }
  };

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 lg:py-24 bg-brand-bg relative scroll-mt-28"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading on Light Background */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-teal uppercase mb-3">
            <span className="w-4 h-[2px] bg-brand-teal rounded-full" />
            PRICING
            <span className="w-4 h-[2px] bg-brand-teal rounded-full" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-brand-navy tracking-tight leading-tight">
            Simple Pricing. Clear <span className="text-brand-teal">Offerings.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
            Design, development and technology solutions tailored to your needs.
          </p>
        </div>

        {/* Three Category Cards with Consistent Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-9 items-stretch mb-10 sm:mb-12">
          {/* ======================================================== */}
          {/* CATEGORY 1: CREATIVE & DESIGN (White Card)               */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 lg:p-10 border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-teal-100 flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Paintbrush className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-navy">
                    Creative &amp; Design
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Professional designs for your ideas and brands.
                  </p>
                </div>
              </div>

              {/* Price Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-cyan-50/70 border border-teal-100 flex items-baseline justify-between mb-7">
                <span className="text-sm sm:text-base font-semibold text-brand-navy">
                  Starting at
                </span>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-teal">
                  ₹299
                </span>
              </div>

              {/* Offerings List */}
              <ul className="space-y-3.5 mb-8">
                {[
                  'Canva Designs',
                  'Poster Designing',
                  'Invitation Designing',
                  'Business & Digital Cards',
                  'Promotional Creatives',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-teal-50 border border-brand-teal/80 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand-teal" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Button */}
            <div className="pt-5 border-t border-slate-100">
              <Link
                href="#contact"
                onClick={() => handleServiceSelect('Creative & Digital Design')}
                className="group inline-flex items-center justify-center gap-2.5 w-full h-[52px] sm:h-[56px] rounded-full bg-white hover:bg-slate-50 border-2 border-slate-300 text-brand-navy font-bold text-base transition-all hover:border-brand-teal"
              >
                <span>Get a Design</span>
                <ArrowRight className="w-4 h-4 text-brand-teal transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CATEGORY 2: WEBSITES & DIGITAL SOLUTIONS (Dark Navy Hero)*/}
          {/* ======================================================== */}
          <div className="bg-[#071B35] text-white rounded-3xl p-7 sm:p-9 lg:p-10 border-2 border-brand-teal shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-950/80 border border-brand-teal/50 flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Laptop className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    Websites &amp; Digital Solutions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Modern, responsive and scalable web solutions.
                  </p>
                </div>
              </div>

              {/* Horizontal Rows */}
              <div className="space-y-4 mb-8">
                {/* Row 1 */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/60">
                  <div className="pr-3">
                    <div className="text-sm sm:text-base font-semibold text-white">
                      Single-page Static Website
                    </div>
                    <div className="text-xs sm:text-[13px] text-slate-400 mt-0.5">
                      Landing page for businesses and personal brands.
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">From</div>
                    <div className="font-heading text-lg sm:text-xl font-bold text-brand-aqua">₹999</div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/60">
                  <div className="pr-3">
                    <div className="text-sm sm:text-base font-semibold text-white">
                      Multipage Website
                    </div>
                    <div className="text-xs sm:text-[13px] text-slate-400 mt-0.5">
                      With About, Services, Contact Forms and more.
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">From</div>
                    <div className="font-heading text-lg sm:text-xl font-bold text-brand-aqua">₹2,999</div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/60">
                  <div className="pr-3">
                    <div className="text-sm sm:text-base font-semibold text-white">
                      3D Website Development
                    </div>
                    <div className="text-xs sm:text-[13px] text-slate-400 mt-0.5">
                      Immersive and interactive 3D websites.
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">From</div>
                    <div className="font-heading text-lg sm:text-xl font-bold text-brand-aqua">₹7,999</div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex items-center justify-between pb-1">
                  <div className="pr-3">
                    <div className="text-sm sm:text-base font-semibold text-white">
                      E-commerce &amp; Business Platforms
                    </div>
                    <div className="text-xs sm:text-[13px] text-slate-400 mt-0.5">
                      Online stores and custom business solutions.
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">From</div>
                    <div className="font-heading text-lg sm:text-xl font-bold text-brand-aqua">₹8,999</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-5 border-t border-slate-700/70">
              <Link
                href="#contact"
                onClick={() => handleServiceSelect('Web Development')}
                className="group inline-flex items-center justify-center gap-2.5 w-full h-[52px] sm:h-[56px] rounded-full bg-brand-teal hover:bg-brand-aqua text-brand-navy font-bold text-base transition-all shadow-md shadow-brand-teal/20"
              >
                <span>Build a Website</span>
                <ArrowRight className="w-4 h-4 text-brand-navy transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CATEGORY 3: STUDENT & INNOVATION OFFERS (White Card)     */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 lg:p-10 border border-teal-200/80 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Student Badge Cleanly Positioned (No Heading Overlap) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-brand-teal-dark text-xs font-mono font-bold uppercase tracking-wider mb-5">
                <GraduationCap className="w-4 h-4" />
                <span>Special Student Offers</span>
              </div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-teal-100 flex items-center justify-center text-brand-teal flex-shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-navy leading-snug">
                    Built for Students. <br /> Designed for Innovators.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Affordable development support for your academic and innovative ideas.
                  </p>
                </div>
              </div>

              {/* Offerings List with Price Ranges */}
              <div className="space-y-4 mb-8">
                {[
                  { name: 'Portfolio Building', price: 'From ₹999' },
                  { name: 'Startup Idea MVP', price: 'From ₹799' },
                  { name: 'Hackathon Prototypes', price: 'From ₹499' },
                  { name: 'College Project Support', price: 'From ₹1,999' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-none"
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-700">
                      {item.name}
                    </span>
                    <span className="font-heading text-sm sm:text-base font-bold text-brand-teal-dark">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-5 border-t border-slate-100">
              <Link
                href="#contact"
                onClick={() => handleServiceSelect('Student & Innovation Offers')}
                className="group inline-flex items-center justify-center gap-2.5 w-full h-[52px] sm:h-[56px] rounded-full bg-white hover:bg-slate-50 border-2 border-slate-300 text-brand-navy font-bold text-base transition-all hover:border-brand-teal"
              >
                <span>Claim Student Offer</span>
                <ArrowRight className="w-4 h-4 text-brand-teal transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Banner: "Have something different in mind?" */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-teal-100 flex items-center justify-center text-brand-teal flex-shrink-0 mx-auto md:mx-0">
              <MessageSquare className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-brand-navy">
                Have something different in mind?
              </h4>
              <p className="text-sm sm:text-base text-slate-500 mt-1">
                Let&apos;s discuss your requirements. Pricing can be negotiated depending on project scope.
              </p>
            </div>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 h-[52px] sm:h-[56px] px-8 rounded-full bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-base shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 text-brand-teal" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
