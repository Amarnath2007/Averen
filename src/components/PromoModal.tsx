'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

/**
 * ============================================================================
 * PROMOTIONAL CAMPAIGN MODAL CONFIGURATION
 * ============================================================================
 * To easily replace or update the campaign poster in the future:
 * 1. Place the new poster image in /public/ads/ (e.g. ad-1.webp and ad-1.png)
 * 2. Update the image paths below if file names change
 * 3. Adjust buttonCoordinates if the CTA button position changes on the new poster
 * 4. Update buttonLink if destination changes
 * ============================================================================
 */
export const CAMPAIGN_CONFIG = {
  // Original destination embedded in ads/Ad 1.pdf: https://averen.vercel.app/#contact
  // Using #contact allows smooth in-page navigation without full page reload
  buttonLink: '#contact',
  posterWebp: '/ads/ad-1.webp',
  posterPng: '/ads/ad-1.png',
  posterAlt: 'Averen Technologies Promotional Offer - Websites starting at ₹999',

  // Exact coordinates of the "Contact Us" button on the poster (from PDF link annotation)
  buttonCoordinates: {
    left: '46.15%',
    top: '83.20%',
    width: '50.80%',
    height: '8.50%',
  },

  // Delay (ms) after homepage loads before showing the popup
  displayDelayMs: 1200,

  // Session storage key (shows strictly once per browser tab session)
  sessionKey: 'averen_promo_modal_seen',
};

export const PromoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  // Close handler with smooth exit animation
  const handleClose = useCallback(() => {
    try {
      sessionStorage.setItem(CAMPAIGN_CONFIG.sessionKey, 'true');
    } catch {
      // ignore
    }
    setIsAnimated(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 250);
  }, []);

  // Check sessionStorage and trigger opening shortly after page load
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const alreadySeen = sessionStorage.getItem(CAMPAIGN_CONFIG.sessionKey);
      if (alreadySeen) return;

      const timer = setTimeout(() => {
        try {
          sessionStorage.setItem(CAMPAIGN_CONFIG.sessionKey, 'true');
        } catch {
          // ignore
        }
        setIsOpen(true);
        // Trigger subtle entrance transition on next paint
        requestAnimationFrame(() => {
          setIsAnimated(true);
        });
      }, CAMPAIGN_CONFIG.displayDelayMs);

      return () => clearTimeout(timer);
    } catch {
      // In case private browsing blocks sessionStorage, fail gracefully
    }
  }, []);

  // Manage body scroll lock while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Promotional Announcement"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* 1. Dark Translucent Backdrop with Blur */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isAnimated ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* 2. Modal Poster Container (Centered, Responsive, 4:5 Aspect Ratio) */}
      <div
        className={`relative z-10 w-full max-w-[440px] sm:max-w-[480px] aspect-[4/5] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/20 bg-slate-900 transition-all duration-300 ease-out transform ${
          isAnimated ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clearly Visible X Close Button in Top-Right Corner */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close promotion"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-950/70 hover:bg-slate-950/90 text-white backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-teal"
        >
          <X className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
        </button>

        {/* Campaign Poster Image (High-Resolution WebP with PNG fallback) */}
        <picture className="w-full h-full block">
          <source srcSet={CAMPAIGN_CONFIG.posterWebp} type="image/webp" />
          <img
            src={CAMPAIGN_CONFIG.posterPng}
            alt={CAMPAIGN_CONFIG.posterAlt}
            className="w-full h-full object-cover block select-none pointer-events-none"
            draggable={false}
          />
        </picture>

        {/* 3. Clickable Overlay: Positioned precisely over the poster's "Contact Us" button */}
        <a
          href={CAMPAIGN_CONFIG.buttonLink}
          onClick={(e) => {
            handleClose();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          style={{
            position: 'absolute',
            left: CAMPAIGN_CONFIG.buttonCoordinates.left,
            top: CAMPAIGN_CONFIG.buttonCoordinates.top,
            width: CAMPAIGN_CONFIG.buttonCoordinates.width,
            height: CAMPAIGN_CONFIG.buttonCoordinates.height,
          }}
          className="rounded-full cursor-pointer z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal hover:bg-white/10 active:scale-[0.98] transition-all"
          aria-label="Contact Us - Special Website Offer"
          title="Contact Us - Averen Technologies"
        />
      </div>
    </div>
  );
};

export default PromoModal;

