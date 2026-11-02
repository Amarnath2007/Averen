'use client';

import React from 'react';
import { Rocket, Eye, Gem } from 'lucide-react';

const pillars = [
  {
    icon: <Rocket className="w-5 h-5 text-brand-teal" />,
    title: 'Our Mission',
    desc: 'Turn ideas into practical digital solutions.',
  },
  {
    icon: <Eye className="w-5 h-5 text-brand-teal" />,
    title: 'Our Vision',
    desc: 'To empower businesses and innovators through technology.',
  },
  {
    icon: <Gem className="w-5 h-5 text-brand-teal" />,
    title: 'Our Values',
    desc: 'Innovation • Integrity • Collaboration • Quality',
  },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/60 relative scroll-mt-28"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-teal uppercase">
              <span className="w-4 h-[2px] bg-brand-teal rounded-full" />
              ABOUT US
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
              A Small Team. <br />
              A <span className="text-brand-teal">Big Vision.</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
              Averen Technologies is a technology studio driven by innovation, creativity and problem-solving. We build digital solutions that are practical, scalable and focused on real-world impact.
            </p>
          </div>

          {/* Right Column: Mission, Vision, Values with Vertical Separator */}
          <div className="lg:col-span-6 lg:border-l lg:border-slate-200 lg:pl-12 space-y-6 sm:space-y-7">
            {pillars.map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-cyan-50/90 border border-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7 text-brand-teal' })}
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
