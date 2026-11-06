'use client';

import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, Code, ShieldCheck } from 'lucide-react';

interface Project {
  id: string;
  category: 'web' | 'mobile' | 'mvp' | 'custom' | 'design';
  categoryLabel: string;
  title: string;
  tagline: string;
  overview: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

const projects: Project[] = [
  {
    id: 'pulsestream',
    category: 'custom',
    categoryLabel: 'Custom Software',
    title: 'PulseStream Telemetry Portal',
    tagline: 'High-throughput operational dashboard for multi-node logistics tracking.',
    overview:
      'Engineered a real-time command portal processing live streaming sensor data. Built with optimized virtualized lists and WebSocket subscribers to maintain 60fps rendering under heavy event throughput.',
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'Tailwind CSS', 'PostgreSQL'],
    metrics: [
      { label: 'Latency', value: '<45ms event sync' },
      { label: 'Data Points', value: 'Live telemetry stream' },
      { label: 'Architecture', value: 'Event-driven' },
    ],
    accentColor: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'novapay',
    category: 'mvp',
    categoryLabel: 'Startup MVP',
    title: 'NovaPay Digital Ledger',
    tagline: 'Four-week validation prototype for multi-currency micro-settlements.',
    overview:
      'Designed and deployed an interactive FinTech prototype for seed-stage founder validation. Focused on frictionless onboarding, multi-currency conversion calculations, and instant transaction previews.',
    tags: ['React', 'Next.js', 'Framer Motion', 'Stripe API', 'Tailwind'],
    metrics: [
      { label: 'Time-to-Stage', value: '3.5 weeks' },
      { label: 'Form Factor', value: 'Responsive Web' },
      { label: 'Compliance', value: 'PCI-DSS Schema' },
    ],
    accentColor: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'krona',
    category: 'mobile',
    categoryLabel: 'App Development',
    title: 'Krona Clinical Workspace',
    tagline: 'Mobile-first consultation scheduling and encrypted patient timeline portal.',
    overview:
      'Architected a cross-platform progressive interface for healthcare specialists. Features offline consultation notes, secure file previewing, and zero-latency calendar synchronization.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    metrics: [
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'State Sync', value: 'Offline-First' },
      { label: 'Security', value: 'End-to-End Encrypted' },
    ],
    accentColor: 'from-teal-500 to-emerald-500',
  },
  {
    id: 'strata',
    category: 'design',
    categoryLabel: 'UI/UX & Design Systems',
    title: 'Strata Design System',
    tagline: 'Unified multi-platform component library and design tokens.',
    overview:
      'Crafted a cohesive design token architecture spanning Figma components, Tailwind CSS configurations, and React primitives with accessible contrast ratios and motion curves.',
    tags: ['Figma', 'Design Tokens', 'Tailwind CSS', 'Storybook', 'WCAG AAA'],
    metrics: [
      { label: 'Components', value: '85+ Primitives' },
      { label: 'Theming', value: 'Dual Tone / Tokens' },
      { label: 'Standard', value: 'WCAG 2.1 AAA' },
    ],
    accentColor: 'from-indigo-600 to-blue-500',
  },
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'mvp' | 'custom' | 'design'>('all');

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FAFBFD] border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-brand-cyan-600 uppercase mb-3">
              <span className="w-5 h-[2px] bg-brand-cyan-500 rounded-full" />
              PRODUCT BUILDS & CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy-950 tracking-tight leading-tight">
              Selected Work & <span className="text-brand-cyan-500">Architectures.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-slate-600 leading-relaxed">
              Explore concrete examples of our digital craftsmanship, from high-throughput internal dashboards to rapid MVP product prototypes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'mvp', label: 'MVPs' },
              { id: 'custom', label: 'Custom Systems' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'design', label: 'Design Systems' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  filter === tab.id
                    ? 'btn-glass-primary-navy text-white shadow-sm'
                    : 'btn-glass-secondary text-brand-slate-600 hover:text-brand-navy-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-studio-card hover:shadow-studio-hover transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-7 sm:p-8">
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 text-brand-navy-900 border border-slate-200/80">
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-brand-cyan-600">
                    <Code className="w-3.5 h-3.5" />
                    <span>Studio Architecture</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-950 group-hover:text-brand-cyan-600 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-brand-slate-700 mb-4">
                  {project.tagline}
                </p>

                {/* Overview */}
                <p className="text-sm text-brand-slate-600 leading-relaxed mb-6">
                  {project.overview}
                </p>

                {/* Technical Highlights / Specs */}
                <div className="grid grid-cols-3 gap-3 py-4 mb-6 border-y border-slate-100 bg-slate-50/60 rounded-xl px-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-brand-slate-400">
                        {metric.label}
                      </div>
                      <div className="text-xs font-semibold text-brand-navy-900 mt-0.5 truncate">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100/80 text-brand-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-7 sm:px-8 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-brand-slate-500 font-mono">
                  Full Codebase & System Specs Available
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy-950 group-hover:text-brand-cyan-600 transition-colors"
                >
                  <span>Build Similar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-cyan-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

