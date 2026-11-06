'use client';

import React from 'react';
import Link from 'next/link';
import {
  Laptop,
  Smartphone,
  Layers,
  LayoutGrid,
  Paintbrush,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    desc: 'Business websites, landing pages and web applications.',
    icon: <Laptop className="w-5 h-5 text-brand-teal" />,
  },
  {
    id: 'app-development',
    title: 'Application Development',
    desc: 'Modern mobile applications and cross-platform solutions.',
    icon: <Smartphone className="w-5 h-5 text-brand-teal" />,
  },
  {
    id: 'mvp-development',
    title: 'MVP & Prototype Development',
    desc: 'Turn startup ideas into functional prototypes and MVPs.',
    icon: <Layers className="w-5 h-5 text-brand-teal" />,
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    desc: 'Dashboards, management systems and automation tools.',
    icon: <LayoutGrid className="w-5 h-5 text-brand-teal" />,
  },
  {
    id: 'creative-design',
    title: 'Creative & Digital Design',
    desc: 'UI/UX design, posters, invitation cards and brand creatives.',
    icon: <Paintbrush className="w-5 h-5 text-brand-teal" />,
  },
];

export const Services: React.FC = () => {
  const handleServiceSelect = (serviceTitle: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('averen-select-service', { detail: serviceTitle }));
    }
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-brand-bg relative scroll-mt-28"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-teal uppercase mb-3">
            <span className="w-4 h-[2px] bg-brand-teal rounded-full" />
            SERVICES
            <span className="w-4 h-[2px] bg-brand-teal rounded-full" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-brand-navy tracking-tight leading-tight">
            What We Build for <span className="text-brand-teal">You.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
            A focused set of technology and creative services to bring your ideas to life.
          </p>
        </div>

        {/* 5-Card Grid with Scaled Dimensions and Consistent Equal Heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-card-soft hover:shadow-card-hover hover:border-brand-teal/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full"
            >
              <div>
                {/* Scaled Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-cyan-50/90 border border-teal-100 flex items-center justify-center mb-6 group-hover:bg-cyan-50 group-hover:border-teal-200 transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7 text-brand-teal' })}
                </div>

                {/* Card Title (Prominent, Bold) */}
                <h3 className="font-heading text-xl sm:text-[22px] font-bold text-brand-navy group-hover:text-brand-teal transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Action Button: Navigates to Contact and auto-selects service */}
              <div className="pt-2 flex justify-end">
                <Link
                  href="#contact"
                  onClick={() => handleServiceSelect(item.title)}
                  className="w-10 h-10 rounded-full btn-glass-icon flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                  aria-label={`Enquire about ${item.title}`}
                >
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
