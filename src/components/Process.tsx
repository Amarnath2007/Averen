'use client';

import React from 'react';
import { Compass, Palette, Terminal, Rocket, Check } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: <Compass className="w-5 h-5 text-brand-cyan-600" />,
    title: 'Scope & Architecture Blueprint',
    desc: 'We unpack your product requirements into clear technical specifications, choosing the optimal stack, data models, and milestone schedule.',
    deliverable: 'Technical Roadmap & System Spec Document',
  },
  {
    step: '02',
    icon: <Palette className="w-5 h-5 text-brand-cyan-600" />,
    title: 'Design & Interactive Prototype',
    desc: 'We construct human-centered UI/UX systems and clickable interactive prototypes in Figma, verifying user journeys before writing backend code.',
    deliverable: 'Figma Design System & Clickable Prototype',
  },
  {
    step: '03',
    icon: <Terminal className="w-5 h-5 text-brand-cyan-600" />,
    title: 'Sprint Build & Live Staging',
    desc: 'Modular TypeScript implementation structured in focused bi-weekly sprints. You test living preview deployments on private staging URLs every week.',
    deliverable: 'Continuous Staging Previews & Clean Git Commits',
  },
  {
    step: '04',
    icon: <Rocket className="w-5 h-5 text-brand-cyan-600" />,
    title: 'Audit, Launch & Handover',
    desc: 'Rigorous performance auditing (Lighthouse 95+), security verification, domain DNS provisioning, and full repository/IP transfer.',
    deliverable: '100% Repository Transfer & Production Deploy',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-white border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-brand-cyan-600 uppercase mb-3">
            <span className="w-5 h-[2px] bg-brand-cyan-500 rounded-full" />
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy-950 tracking-tight leading-tight">
            Our Development <span className="text-brand-cyan-500">Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-slate-600 leading-relaxed">
            A transparent, sprint-based delivery lifecycle designed to ship functional, scalable digital products without friction or ambiguity.
          </p>
        </div>

        {/* 4-Step Horizontal / Responsive Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative p-7 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-cyan-300 hover:shadow-studio-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-300">
                    {item.step}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-brand-navy-950 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Deliverable Tag */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-brand-navy-900">
                <Check className="w-4 h-4 text-brand-cyan-500 flex-shrink-0" />
                <span>{item.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

