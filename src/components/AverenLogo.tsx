import React from 'react';

interface AverenLogoProps {
  className?: string;
  light?: boolean;
}

export const AverenLogo: React.FC<AverenLogoProps> = ({
  className = '',
  light = false,
}) => {
  return (
    <div
      className={`navbar-logo flex items-center gap-3 w-[210px] sm:w-[220px] select-none ${className}`}
    >
      {/* Geometric A Symbol */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
        <img
          src="/averen-symbol.png"
          alt="Averen Symbol"
          className="w-full h-full object-contain"
        />
      </div>

      {/* AVEREN TECHNOLOGIES Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-heading font-black text-[21px] sm:text-[23px] tracking-[0.06em] leading-none ${
            light ? 'text-white' : 'text-brand-navy'
          }`}
        >
          AVEREN
        </span>
        <span
          className={`font-sans font-medium text-[9.5px] sm:text-[10px] tracking-[0.36em] uppercase mt-1 leading-none ${
            light ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );
};

export default AverenLogo;
