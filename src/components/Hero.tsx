'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-brand-bg scroll-mt-28"
    >
      {/* Background Soft Ambient Light-Blue Glow (Subtle & Non-distracting) */}
      <div className="absolute top-0 right-0 w-full sm:w-[55%] h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-gradient-to-bl from-teal-100/40 via-sky-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1440px] 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50/90 border border-teal-200/80 text-brand-navy text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" />
              <span>Digital Product &amp; Technology Studio</span>
            </div>

            {/* Main Headline (Exactly TWO lines, 58-64px on desktop, line-height 1.05) */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[58px] xl:text-[62px] 2xl:text-[64px] font-extrabold text-brand-navy tracking-tight leading-[1.05]">
              Building Ideas Into <br className="hidden sm:inline" />
              <span className="text-brand-teal">
                Digital Reality.
              </span>
            </h1>

            {/* Description (19-20px on desktop) */}
            <p className="text-base sm:text-lg lg:text-[19px] 2xl:text-[20px] text-slate-600 max-w-xl xl:max-w-2xl leading-relaxed">
              We design and develop websites, applications and innovative software solutions that help businesses grow and turn ideas into reality.
            </p>

            {/* Action Buttons (60px height on desktop) */}
            <div className="flex flex-wrap items-center gap-4 pt-1 sm:pt-2">
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-3 h-[54px] sm:h-[60px] px-8 sm:px-9 rounded-full bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-base sm:text-lg shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5 text-brand-teal transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center h-[54px] sm:h-[60px] px-8 sm:px-9 rounded-full bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-slate-400 text-brand-navy font-bold text-base sm:text-lg shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Right Column: Complete Original Averen Technologies Logo (Bigger rendered width: ~650-680px) */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            {/* Expanded right-side container */}
            <div className="relative w-full max-w-[680px] flex items-center justify-center py-4 px-1">
              {/* Subtle soft backdrop shape behind the logo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/40 via-teal-50/30 to-sky-100/40 rounded-[48px] transform -rotate-1 pointer-events-none -z-10" />

              {/* Complete, uncropped original Averen Technologies logo: 650-680px */}
              <img
                src="/averen.png"
                alt="AVEREN TECHNOLOGIES - Building Digital Products. Empowering Ideas."
                className="hero-logo w-full max-w-[600px] xl:max-w-[650px] 2xl:max-w-[680px] h-auto object-contain select-none transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
