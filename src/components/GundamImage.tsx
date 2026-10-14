import React, { useState } from 'react';
import { ShieldAlert, Crosshair } from 'lucide-react';

interface GundamImageProps {
  src: string;
  alt: string;
  className?: string;
  badge?: string;
  modelCode?: string;
}

export const GundamImage: React.FC<GundamImageProps> = ({
  src,
  alt,
  className = "",
  badge,
  modelCode
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-slate-900 group ${className}`}>
      {/* HUD scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none opacity-50 z-10" />

      {/* Model code HUD watermark */}
      {modelCode && (
        <div className="absolute top-2 left-2 z-20 px-1.5 py-0.5 bg-slate-950/80 border border-cyan-500/30 text-[10px] font-tech text-cyan-400 tracking-wider">
          MS // {modelCode}
        </div>
      )}

      {badge && (
        <div className="absolute top-2 right-2 z-20 px-2 py-0.5 bg-red-600/90 text-white text-[10px] font-bold tracking-wide uppercase shadow-sm">
          {badge}
        </div>
      )}

      {/* Tactical corner brackets */}
      <div className="absolute bottom-1 right-1 z-20 text-slate-500 text-[9px] font-tech flex items-center gap-1 opacity-70">
        <Crosshair className="w-3 h-3 text-cyan-500" />
        <span>SYS.ONLINE</span>
      </div>

      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        /* Fallback mecha blueprint SVG */
        <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-950 border border-cyan-500/20 text-center">
          <div className="relative mb-3">
            <div className="w-14 h-14 rounded-full border border-cyan-500/40 flex items-center justify-center bg-cyan-950/30 animate-pulse">
              <Crosshair className="w-7 h-7 text-cyan-400" />
            </div>
          </div>
          <span className="text-xs font-tech text-cyan-400 uppercase tracking-widest mb-1">
            {modelCode || "GUNDAM UNIT SPEC"}
          </span>
          <p className="text-xs font-medium text-slate-300 max-w-[200px] truncate">{alt}</p>
          <span className="text-[10px] font-tech text-slate-500 mt-2">
            [SCHEMATIC BLUEPRINT READY]
          </span>
        </div>
      )}

      {/* Loading placeholder skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};
