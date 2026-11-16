import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllArticles, getArticleBySlug } from '@/data/insights';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found | Averen Insights',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${article.title} | Averen Insights`,
    description: article.shortDescription,
    keywords: [
      'Averen Technologies',
      'Our Story',
      'Founder Story',
      'Web Development',
      'Digital Product Studio',
      'Technology',
    ],
    openGraph: {
      title: `${article.title} | Averen Insights`,
      description: article.shortDescription,
      type: 'article',
      publishedTime: article.publishedDate,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text flex flex-col">
      {/* Global Navigation */}
      <Navbar />

      <article className="flex-1 pt-32 sm:pt-36 pb-24">
        {/* Article Header Container */}
        <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
          {/* Back to Insights Navigation Link (Text-only) */}
          <div className="mb-8">
            <Link
              href="/insights"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-slate-500 hover:text-brand-navy transition-colors"
            >
              ← Back to Insights
            </Link>
          </div>

          {/* 1. Small Uppercase Category Label */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-brand-teal/10 text-brand-teal-dark border border-brand-teal/25">
              {article.categoryLabel}
            </span>
          </div>

          {/* 2. Prominent, Beautifully Wrapped Article Title */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight leading-[1.2] mb-6">
            {article.title}
          </h1>

          {/* 3. Short Introductory Subtitle */}
          <p className="text-lg sm:text-xl text-slate-700 italic leading-relaxed mb-6 font-normal">
            {article.subtitle}
          </p>

          {/* 4. Publication Date and Reading Time in Subtle Metadata Row */}
          <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-500">
            <span className="font-semibold text-brand-navy">{article.categoryLabel}</span>
            <span>·</span>
            <span>{article.authorLabel}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
          </div>
        </header>

        {/* 5. Clean, Readable Article Body with Comfortable Maximum Width */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200/80 pt-10 sm:pt-12">
            {article.sections.map((section, sIdx) => (
              <section key={section.title} className={sIdx === 0 ? '' : 'mt-12 sm:mt-16'}>
                {/* 6. Clear Visual Distinction Between Section Headings and Paragraphs */}
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-5">
                  {section.title}
                </h2>

                {/* Paragraphs */}
                {section.paragraphs && (
                  <div className="space-y-5 text-slate-700 text-base sm:text-[18px] leading-[1.8]">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                )}

                {/* Text-Only Highlight / Quote */}
                {section.highlight && (
                  <div className="my-7 py-5 px-6 rounded-2xl bg-white border-l-4 border-brand-teal shadow-sm">
                    <p className="font-heading text-lg sm:text-xl font-bold text-brand-navy leading-snug">
                      {section.highlight}
                    </p>
                  </div>
                )}

                {/* Services List (Under 'What We Are Building') */}
                {section.services && (
                  <div className="my-8 space-y-6 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                    {section.services.map((service) => (
                      <div
                        key={service.title}
                        className="pb-6 border-b border-slate-100 last:border-0 last:pb-0"
                      >
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-navy mb-2">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Founders Block (Under 'The People Behind Averen') */}
                {section.founders && (
                  <div className="my-7 py-5 px-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm max-w-sm">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-teal-dark mb-2">
                      Founders
                    </div>
                    <div className="font-heading text-xl sm:text-2xl font-bold text-brand-navy space-y-1">
                      {section.founders.map((founder) => (
                        <div key={founder}>{founder}</div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Post-paragraphs */}
                {section.postParagraphs && (
                  <div className="space-y-5 text-slate-700 text-base sm:text-[18px] leading-[1.8] mt-5">
                    {section.postParagraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* 7. Highlight the Final Statement as a Distinctive Text-Only Closing Element */}
            <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-200/80 text-center">
              <div className="font-heading font-bold text-base sm:text-lg tracking-[0.35em] text-brand-navy uppercase mb-3">
                {article.closing.brand}
              </div>
              <div className="italic text-lg sm:text-xl text-brand-teal-dark font-medium">
                {article.closing.tagline}
              </div>
            </div>

            {/* Navigation & Discussion Prompt */}
            <div className="mt-16 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                href="/insights"
                className="text-sm font-semibold text-slate-600 hover:text-brand-navy transition-colors"
              >
                ← Back to Insights
              </Link>

              <Link
                href="/#contact"
                className="btn-glass-primary-navy inline-flex items-center px-6 py-2.5 rounded-full text-white text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              >
                Discuss Your Project →
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
