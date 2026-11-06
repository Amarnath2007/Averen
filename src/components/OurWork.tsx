'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 'anis-cakes',
    title: "Ani's Cakes",
    category: 'BUSINESS WEBSITE',
    desc: "A beautifully designed website for Ani's Cakes, showcasing its bakery offerings through an inviting digital experience and making it easier for customers to discover the brand.",
    image: '/aniscake.png',
    link: 'https://aniscakes.vercel.app/',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'PERSONAL PORTFOLIO',
    desc: 'A professional portfolio website highlighting skills, projects and achievements, featuring a dedicated contact form for professional enquiries and collaboration.',
    image: '/Portfolio-Amar.png',
    link: 'https://amarbuilds.me',
  },
  {
    id: 'zipbi',
    title: 'ZipBi',
    category: 'PRODUCT LANDING PAGE',
    desc: "A product landing page introducing ZipBi's vision for smarter café operations, communicating its concept, value proposition and intended capabilities.",
    image: '/Zipbi.png',
    link: 'https://zipbi.vercel.app/',
  },
];

export const OurWork: React.FC = () => {
  return (
    <section
      id="work"
      className="py-16 sm:py-20 lg:py-24 bg-brand-bg relative scroll-mt-28 overflow-hidden"
    >
      {/* Subtle soft ambient light-blue glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-100/30 via-sky-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-teal uppercase mb-3">
            <span className="w-4 h-[2px] bg-brand-teal rounded-full" />
            OUR WORK
            <span className="w-4 h-[2px] bg-brand-teal rounded-full" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-brand-navy tracking-tight leading-tight">
            A Glimpse of What We&apos;ve <span className="text-brand-teal">Built.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
            From business websites to personal portfolios and digital product experiences, explore some of our recent work.
          </p>
        </div>

        {/* Three Horizontal Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-9 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full"
            >
              <div>
                {/* Website Screenshot with 16:10 Aspect Ratio */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-xs mb-6">
                  <img
                    src={project.image}
                    alt={`${project.title} Website Screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Project Category Label */}
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-cyan-50/90 border border-teal-100 text-brand-teal-dark text-xs font-mono font-bold uppercase tracking-wider mb-3.5">
                  <span>{project.category}</span>
                </div>

                {/* Project Name */}
                <h3 className="font-heading text-2xl sm:text-[26px] font-bold text-brand-navy group-hover:text-brand-teal transition-colors mb-2.5 leading-snug">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              {/* Action Button: Opens respective website in new tab */}
              <div className="pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn btn-glass-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm hover:text-brand-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  <span>Visit Website</span>
                  <ArrowRight className="w-4 h-4 text-brand-teal transition-transform duration-200 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;

