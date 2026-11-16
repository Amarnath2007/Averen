import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InsightsHub from '@/components/insights/InsightsHub';
import { getAllArticles } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Averen Insights | Ideas That Move Businesses Forward',
  description:
    'Explore practical insights, technology trends, development guides and ideas to help businesses and creators grow in the digital world. Curated by Averen Technologies.',
  openGraph: {
    title: 'Averen Insights | Ideas That Move Businesses Forward',
    description:
      'Explore practical insights, technology trends, development guides and ideas to help businesses and creators grow in the digital world. Curated by Averen Technologies.',
    type: 'website',
  },
};

export default function InsightsPage() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text flex flex-col">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Hub Client Component */}
      <div className="flex-1">
        <InsightsHub articles={articles} />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
