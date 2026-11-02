'use client';

import React from 'react';
import { ShieldCheck, Cpu, GitBranch, Gauge, RefreshCw, KeyRound } from 'lucide-react';

const pillars = [
  {
    icon: <Cpu className="w-6 h-6 text-brand-cyan-600" />,
    title: 'Direct Engineering Access',
    desc: 'You interface directly with the lead engineers designing and building your product. No middle layers, no miscommunicated technical specifications.',
  },
  {
    icon: <Gauge className="w-6 h-6 text-brand-cyan-600" />,
    title: 'High-Performance Standards',
    desc: 'Every application is benchmarked for sub-second load times, responsive fluid interactions, and minimal bundle overhead using modern frameworks.',
  },
  {
    icon: <KeyRound className="w-6 h-6 text-brand-cyan-600" />,
    title: '100% IP & Code Ownership',
    desc: 'From initial prototype to production deployment, all intellectual property, source repositories, and cloud configurations belong entirely to you.',
  },
  {
    icon: <GitBranch className="w-6 h-6 text-brand-cyan-600" />,
    title: 'Modular & Maintainable Codebases',
    desc: 'We write clean, strictly-typed TypeScript with clean component architectures so your internal team can easily maintain and extend the codebase.',
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-brand-cyan-600" />,
    title: 'Pragmatic MVP Scoping',
    desc: 'We partner with founders to trim non-essential bloat, identify core value features, and ship working digital products to market in weeks rather than months.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-cyan-600" />,
    title: 'Rigorous Testing & Staging',
    desc: 'Automated staging deployments on every pull request, comprehensive integration tests, and rigorous multi-device verification before public launch.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-brand-cyan-600 uppercase mb-3">
            <span className="w-5 h-[2px] bg-brand-cyan-500 rounded-full" />
            ENGINEERING EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy-950 tracking-tight leading-tight">
            Why Teams Partner With <span className="text-brand-cyan-500">Averen.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-slate-600 leading-relaxed">
            We are a focused digital product studio built on architectural discipline, rapid execution, and technical honesty.
          </p>
        </div>

        {/* 6-Grid Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-7 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-cyan-300 hover:shadow-studio-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-brand-cyan-300 transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy-950 mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-sm text-brand-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

