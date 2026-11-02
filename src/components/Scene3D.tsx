'use client';

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import AverenCrystal3D from './AverenCrystal3D';
import Image from 'next/image';

function isWebGLAvailable() {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

// Graceful fallback when WebGL is unsupported
const WebGLFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[540px] rounded-3xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-100/90 via-white to-cyan-50/40 border border-slate-200/60 shadow-studio-card">
      <div className="relative w-full h-full max-w-[500px] max-h-[480px] flex items-center justify-center p-4">
        <Image
          src="/averen-3d-reference.png"
          alt="Averen Technologies 3D Crystalline Symbol"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain drop-shadow-xl"
        />
      </div>
      <div className="absolute bottom-4 left-6 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/70 text-[11px] font-mono text-brand-slate-600 shadow-sm flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-brand-cyan-500 animate-pulse"></span>
        Studio 3D Visualizer
      </div>
    </div>
  );
};

export const Scene3D: React.FC = () => {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mousePos.current = { x, y };
  };

  const handleMouseLeave = () => {
    mousePos.current = { x: 0, y: 0 };
  };

  if (webglSupported === false) {
    return <WebGLFallback />;
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[360px] sm:h-[440px] lg:h-[580px] select-none"
    >
      {/* Architectural Studio Backdrop: Soft Diagonal Window Shadows */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/10 via-transparent to-teal-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Recessed Architectural Cyan Wall Light Channel (matching reference image) */}
      <div className="absolute right-4 sm:right-6 top-6 bottom-14 w-1.5 bg-gradient-to-b from-brand-cyan-400 via-brand-cyan-500 to-transparent rounded-full opacity-70 shadow-neon-cyan hidden sm:block pointer-events-none" />

      <Suspense fallback={<WebGLFallback />}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 8.4], fov: 36 }}
          dpr={[1, 1.8]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Key Warm Sunlight (Directional soft light from top-right) */}
          <directionalLight
            position={[6, 7, 5]}
            intensity={3.0}
            color="#fffbf0"
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />

          {/* Cool Ambient Fill Light */}
          <ambientLight intensity={1.2} color="#f0f9ff" />

          {/* Cyan Neon Accent Light from Pedestal Base */}
          <pointLight position={[0, -1.9, 1.6]} intensity={3.8} distance={6} color="#00e5ff" />

          {/* Soft Blue Rim Light */}
          <directionalLight position={[-4, 3, -3]} intensity={1.5} color="#0284c7" />

          {/* Interactive 3D Averen Crystal */}
          <AverenCrystal3D mousePos={mousePos} />
        </Canvas>
      </Suspense>

      {/* Pedestal Inscribed Typography Overlay (matching reference debossed text) */}
      <div className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none select-none">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] sm:tracking-[0.45em] text-slate-500/80 font-bold uppercase drop-shadow-sm">
          AVEREN TECHNOLOGIES
        </span>
      </div>

      {/* Interactive Micro-badge */}
      <div className="absolute bottom-2 left-4 sm:left-6 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/60 shadow-studio-subtle text-[11px] font-mono text-brand-slate-600 flex items-center gap-2 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan-500 animate-pulse"></span>
        Interactive 3D Object • Hover to tilt
      </div>
    </div>
  );
};

export default Scene3D;
