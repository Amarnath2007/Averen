import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import OurWork from '@/components/OurWork';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      {/* Navigation */}
      <Navbar />

      {/* 1. Home / Hero */}
      <Hero />

      {/* 2. Services */}
      <Services />

      {/* 3. Our Work */}
      <OurWork />

      {/* 4. Pricing */}
      <Pricing />

      {/* 5. About */}
      <About />

      {/* 6. Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
