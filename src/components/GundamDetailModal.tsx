import React from 'react';
import { X, Heart, Shield, Zap, Crosshair, Award, Radio, Cpu, Wrench, Share2 } from 'lucide-react';
import { MobileSuit } from '../data/gundams';
import { GundamImage } from './GundamImage';
import { playMechaClick, playLockOn } from '../utils/sound';

interface Props {
  suit: MobileSuit | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const GundamDetailModal: React.FC<Props> = ({
  suit,
  onClose,
  isFavorite,
  onToggleFavorite
}) => {
  if (!suit) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-950 border border-cyan-500/40 text-slate-100 shadow-2xl shadow-cyan-950/50 tech-box"
        onClick={e => e.stopPropagation()}
      >
        {/* Header HUD Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 py-3.5 bg-slate-900/95 border-b border-cyan-500/30 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-red-500 animate-pulse" />
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-400">
              <span>TACTICAL SCHEMATICS // </span>
              <span className="text-white font-bold">{suit.modelNumber}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playLockOn();
                onToggleFavorite(suit.id);
              }}
              className={`p-2 border transition-all ${
                isFavorite
                  ? "border-red-500 bg-red-950/40 text-red-400"
                  : "border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
              }`}
              title={isFavorite ? "Xóa khỏi mục yêu thích" : "Lưu vào mục yêu thích"}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
            </button>

            <button
              onClick={() => {
                playMechaClick();
                onClose();
              }}
              className="p-2 border border-slate-800 hover:border-red-500 hover:bg-red-950/30 text-slate-400 hover:text-red-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-6">
          {/* Top Hero Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 relative">
              <GundamImage
                src={suit.image}
                alt={suit.name}
                modelCode={suit.modelNumber}
                badge={suit.timeline.split("(")[0]}
                className="w-full h-80 sm:h-96 border border-slate-800"
              />
              <div className="mt-3 p-3 bg-slate-900/80 border-l-2 border-amber-500 text-xs italic text-amber-300 font-tech">
                "{suit.quote}"
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-tech text-slate-400 mb-1">
                  <span>{suit.timeline}</span>
                  <span>·</span>
                  <span className="text-cyan-400">{suit.faction}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-mecha text-white tracking-wide">
                  {suit.name}
                </h2>
                <div className="text-xs font-tech text-red-400 mt-1 mb-4">
                  PHI CÔNG: <span className="text-white font-semibold">{suit.pilot}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 border border-slate-800/80 mb-4">
                  {suit.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 border border-slate-800/90 p-3">
                <div className="p-2 bg-slate-900/50">
                  <span className="text-slate-400 block text-[10px] font-tech uppercase">Chiều cao tổng thể</span>
                  <span className="font-tech font-bold text-white">{suit.height}</span>
                </div>
                <div className="p-2 bg-slate-900/50">
                  <span className="text-slate-400 block text-[10px] font-tech uppercase">Trọng lượng rỗng</span>
                  <span className="font-tech font-bold text-white">{suit.weight}</span>
                </div>
                <div className="p-2 bg-slate-900/50">
                  <span className="text-slate-400 block text-[10px] font-tech uppercase">Vật liệu lớp giáp</span>
                  <span className="font-tech text-cyan-400 font-medium">{suit.armorMaterial}</span>
                </div>
                <div className="p-2 bg-slate-900/50">
                  <span className="text-slate-400 block text-[10px] font-tech uppercase">Lò phản ứng năng lượng</span>
                  <span className="font-tech text-amber-400 font-medium truncate block">{suit.powerplant}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Special Features & Armament */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            {/* Armament */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-wider">
                <Crosshair className="w-4 h-4 text-red-400" />
                <span>Trang Bị Vũ Khí (Armaments)</span>
              </div>
              <ul className="space-y-2">
                {suit.armaments.map((weapon, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2 bg-slate-900/40 border-l border-cyan-500/40">
                    <span className="text-[10px] font-tech text-cyan-500 mt-0.5">[{idx + 1}]</span>
                    <span>{weapon}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Hệ Thống Công Nghệ Đặc Trưng</span>
              </div>
              <ul className="space-y-2">
                {suit.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2 bg-slate-900/40 border-l border-amber-500/40">
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lore Background */}
          <div className="p-4 bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-tech text-amber-400 uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Bối Cảnh Lịch Sử Chiến Tranh</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {suit.loreSummary}
            </p>
          </div>

          {/* Popular Gunpla kits */}
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-wider mb-3">
              <Wrench className="w-4 h-4" />
              <span>Các Phiên Bản Gunpla Bandai Chính Hãng Phổ Biến</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {suit.popularKits.map((kit, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-tech font-semibold bg-slate-900 border border-cyan-500/30 text-cyan-300"
                >
                  {kit}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 text-[11px] font-tech text-slate-400 flex flex-wrap justify-between items-center gap-2">
          <span>GUNDAM HANDBOOK TECHNICAL FILE // ARCHIVE NO. {suit.id.toUpperCase()}</span>
          <span className="text-cyan-400">STATUS: VERIFIED SPECIFICATION</span>
        </div>
      </div>
    </div>
  );
};
