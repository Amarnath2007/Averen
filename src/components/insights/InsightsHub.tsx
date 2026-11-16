'use client';

import React from 'react';
import Link from 'next/link';
import { Article } from '@/data/insights';

interface InsightsHubProps {
  articles: Article[];
}

export const InsightsHub: React.FC<InsightsHubProps> = ({ articles }) => {
  const featured = articles[0];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      {/* Hero Section */}
      <section className="pt-32 pb-14 sm:pt-36 sm:pb-16 border-b border-slate-200/80 bg-gradient-to-b from-white via-brand-bg to-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand Eyebrow Label */}
          <div className="mb-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-brand-teal/10 text-brand-teal-dark border border-brand-teal/25">
              AVEREN INSIGHTS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight leading-[1.15] mb-5">
            Ideas That Move Businesses{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-teal-dark">
              Forward.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Explore practical insights, technology trends, development guides and ideas
            to help businesses and creators grow in the digital world.
          </p>
        </div>
      </section>

      {/* Main Content: Intentional Featured First Publication */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {featured && (
          <section className="mb-16">
            {/* Section Header */}
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-teal-dark">
                Featured Publication
              </span>
            </div>

            {/* Editorial Showcase Card (Completely Text-Only) */}
            <article className="group bg-white rounded-3xl border border-slate-200/90 shadow-card-soft hover:shadow-card-hover hover:border-brand-teal/40 transition-all duration-300 p-8 sm:p-12">
              {/* Category Badge & Metadata */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-xs sm:text-sm text-slate-500">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold uppercase bg-teal-50 text-brand-teal-dark border border-brand-teal/20">
                  {featured.categoryLabel}
                </span>
                <span>·</span>
                <span>{featured.authorLabel}</span>
                <span>·</span>
                <span>{featured.readingTime}</span>
              </div>

              {/* Title */}
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-snug mb-4 group-hover:text-brand-teal transition-colors">
                <Link href={`/insights/${featured.slug}`}>
                  {featured.title}
                </Link>
              </h2>

              {/* Introductory Subtitle */}
              <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed mb-6 font-normal">
                &ldquo;{featured.subtitle}&rdquo;
              </p>

              {/* Hook Excerpt */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Averen wasn&apos;t born in a boardroom. It didn&apos;t begin with a large team, a huge investment or an elaborate business plan. It started with something much simpler: curiosity...
              </p>

              {/* Card Footer: Read Article Button */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500 font-medium">
                  Published by Averen Technologies
                </div>

                <Link
                  href={`/insights/${featured.slug}`}
                  className="btn-glass-primary-navy inline-flex items-center justify-center px-6 py-2.5 rounded-full text-white text-xs sm:text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal self-start sm:self-auto"
                >
                  Read The Story →
                </Link>
              </div>
            </article>
          </section>
        )}

        {/* Closing Consultation CTA Banner (Text-Only) */}
        <section className="mt-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#05152A] via-[#071B35] to-[#0B2A52] text-white p-8 sm:p-12 border border-slate-800 shadow-pricing-dark">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-teal/15 border border-brand-teal/30 text-brand-aqua text-xs font-mono font-semibold tracking-wider uppercase mb-4">
                WORK WITH AVEREN TECHNOLOGIES
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Have an idea you want to bring to life?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                From high-performance custom websites and scalable web applications to MVP rapid prototyping, we partner with businesses and creators to turn great ideas into reality.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/#contact"
                  className="btn-glass-primary-teal inline-flex items-center justify-center px-6 py-3 rounded-full text-brand-navy font-bold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  Discuss Your Project →
                </Link>

                <a
                  href="https://wa.me/919003639824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass-dark inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InsightsHub;
