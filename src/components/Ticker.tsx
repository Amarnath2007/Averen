'use client';

import React from 'react';

const TICKER_MESSAGES = [
  'WE BUILD WEBSITES',
  'WE DESIGN BRANDS',
  'WE DEVELOP MOBILE APPS',
  'WE TURN STARTUP IDEAS INTO REALITY',
  'WE CREATE CUSTOM SOFTWARE',
  'WE BUILD MVPs & PROTOTYPES',
  'WE DESIGN DIGITAL EXPERIENCES',
  'WE CREATE PERSONAL PORTFOLIOS',
  'WE DEVELOP E-COMMERCE PLATFORMS',
  'WE BRING IDEAS TO LIFE',
];

export const Ticker: React.FC = () => {
  return (
    <div
      className="ticker-wrapper relative w-full overflow-hidden bg-gradient-to-r from-[#DDF7F2] via-[#E8FAF7] to-[#DDF7F2] border-y border-[#A6E8DC]/80 select-none z-40 transition-colors"
      aria-label="Averen Technologies Capabilities"
    >
      <div className="ticker-track flex items-center py-2 sm:py-2.5">
        {/* Set 1 */}
        <div className="ticker-content flex items-center shrink-0">
          {TICKER_MESSAGES.map((message, index) => (
            <div key={`set-1-${index}`} className="flex items-center shrink-0">
              <span className="font-heading text-[11px] sm:text-xs md:text-[13px] font-bold text-brand-navy tracking-widest uppercase whitespace-nowrap">
                {message}
              </span>
              <span
                className="text-brand-teal mx-4 sm:mx-6 md:mx-7 text-xs sm:text-sm font-black select-none shrink-0"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>
          ))}
        </div>

        {/* Set 2 (Duplicated for seamless infinite loop) */}
        <div className="ticker-content flex items-center shrink-0" aria-hidden="true">
          {TICKER_MESSAGES.map((message, index) => (
            <div key={`set-2-${index}`} className="flex items-center shrink-0">
              <span className="font-heading text-[11px] sm:text-xs md:text-[13px] font-bold text-brand-navy tracking-widest uppercase whitespace-nowrap">
                {message}
              </span>
              <span
                className="text-brand-teal mx-4 sm:mx-6 md:mx-7 text-xs sm:text-sm font-black select-none shrink-0"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;

