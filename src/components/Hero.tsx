'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative isolate pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-28 overflow-hidden scroll-mt-28 bg-gradient-to-br from-[#DDF5F7] via-[#F2FAFC] to-[#FFFFFF]"
    >
      {/* ======================================================== */}
      {/* BACKGROUND DECORATIVE LAYERS (Inspired by Reference UI)   */}
      {/* ======================================================== */}

      {/* 1. Top-Left Flowing Soft Cyan Glow */}
      <div className="absolute -top-12 -left-12 w-[500px] h-[400px] bg-gradient-to-br from-[#27DEC5]/30 via-[#00BFC0]/15 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* 2. Top-Right Facet (Triangular polygon inspired by logo facets) */}
      <div className="absolute top-0 right-0 w-[380px] h-[280px] pointer-events-none z-0 overflow-hidden">
        <div
          className="w-full h-full bg-gradient-to-bl from-[#00BFC0]/20 via-[#27DEC5]/10 to-transparent"
          style={{ clipPath: 'polygon(100% 0, 0 0, 100% 85%)' }}
        />
      </div>

      {/* 3. Bottom-Right Angular Triangular Facets */}
      <div className="absolute bottom-0 right-0 w-[580px] h-[420px] pointer-events-none z-0 overflow-hidden">
        {/* Large Corner Facet */}
        <div
          className="absolute bottom-0 right-0 w-[420px] h-[320px] bg-gradient-to-tl from-[#27DEC5]/35 via-[#00BFC0]/20 to-transparent"
          style={{ clipPath: 'polygon(100% 25%, 100% 100%, 25% 100%)' }}
        />
        {/* Adjacent Triangular Facet */}
        <div
          className="absolute bottom-0 right-[200px] w-[300px] h-[220px] bg-gradient-to-t from-[#00BFC0]/20 via-[#27DEC5]/10 to-transparent"
          style={{ clipPath: 'polygon(100% 100%, 0% 100%, 65% 0%)' }}
        />
      </div>

      {/* 4. Elegant Translucent Flowing Wave Across the Bottom */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-h-[140px] opacity-75"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#27DEC5" stopOpacity="0.25" />
              <stop offset="45%" stopColor="#00BFC0" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#0879B9" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="heroWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#DDF5F7" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          <path
            d="M0,130 C340,210 580,60 1000,115 C1240,150 1380,85 1440,55 L1440,220 L0,220 Z"
            fill="url(#heroWaveGradient1)"
          />
          <path
            d="M0,165 C380,225 720,95 1120,135 C1320,155 1400,115 1440,85 L1440,220 L0,220 Z"
            fill="url(#heroWaveGradient2)"
          />
        </svg>
      </div>

      {/* ======================================================== */}
      {/* MAIN HERO CONTENT CONTAINER                              */}
      {/* ======================================================== */}
      <div className="max-w-[1440px] 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50/95 border border-teal-200/90 text-brand-navy text-xs sm:text-sm font-semibold shadow-xs">
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

          {/* Right Column: Complete Averen Logo with Radial Glow & Orbit Depth Elements */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-[680px] flex items-center justify-center py-6 px-1">
              {/* 1. Subtle Cyan and Light-Blue Radial Glow behind the Logo */}
              <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] rounded-full bg-[radial-gradient(circle,rgba(0,191,192,0.32)_0%,rgba(39,222,197,0.18)_40%,rgba(240,250,253,0)_70%)] blur-2xl pointer-events-none z-0" />

              {/* 2. Delicate Circular Orbit Ring with White/Cyan Stroke */}
              <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] rounded-full border-[1.5px] border-white/90 shadow-[0_0_25px_rgba(0,191,192,0.20)] pointer-events-none z-0">
                {/* Orbit Accent Dot at ~2 o'clock */}
                <div className="absolute top-[14%] right-[14%] w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-brand-teal shadow-[0_0_12px_#00BFC0] ring-2 ring-white" />
              </div>

              {/* 3. Concentric Subtle Inner Orbit Arc */}
              <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full border border-teal-200/35 border-dashed pointer-events-none z-0" />

              {/* 4. Complete, Uncropped Original Averen Technologies Logo */}
              <img
                src="/averen.png"
                alt="AVEREN TECHNOLOGIES - Building Digital Products. Empowering Ideas."
                className="hero-logo w-full max-w-[600px] xl:max-w-[650px] 2xl:max-w-[680px] h-auto object-contain select-none transition-transform duration-300 hover:scale-[1.02] drop-shadow-[0_20px_35px_rgba(7,27,53,0.08)] relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
