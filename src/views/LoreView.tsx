import React, { useState } from 'react';
import { BookOpen, ShieldAlert, Eye, EyeOff, Flag, Cpu, Award, Zap, Sparkles } from 'lucide-react';
import { GUNDAM_LORE_SERIES, GundamSeriesLore } from '../data/lore';
import { playMechaClick, playLockOn } from '../utils/sound';

export const LoreView: React.FC = () => {
  const [selectedSeriesId, setSelectedSeriesId] = useState<string>("universal-century");
  const [revealedSpoilers, setRevealedSpoilers] = useState<Record<string, boolean>>({});

  const currentSeries = GUNDAM_LORE_SERIES.find(s => s.id === selectedSeriesId) || GUNDAM_LORE_SERIES[0];

  const toggleSpoiler = (id: string) => {
    playLockOn();
    setRevealedSpoilers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-10 animate-in fade-in">
      {/* Header */}
      <div className="pb-6 border-b border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-xs font-tech text-purple-400 uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-purple-400" />
          <span>LORE &amp; TIMELINE ENCYCLOPEDIA // BỐI CẢNH VŨ TRỤ GUNDAM</span>
        </div>
        <h1 className="text-3xl font-bold font-mecha text-white">
          Biên Niên Sử &amp; Bối Cảnh Các Series Gundam
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Tìm hiểu lịch sử các cuộc đại chiến, hệ tư tưởng các phe phái, sự tiến hóa của công nghệ Mobile Suit và triết lý phản chiến sâu sắc đằng sau các tác phẩm của đạo diễn Yoshiyuki Tomino.
        </p>
      </div>

      {/* Series Timeline Navigation Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-800">
        {GUNDAM_LORE_SERIES.map(series => (
          <button
            key={series.id}
            onClick={() => { playMechaClick(); setSelectedSeriesId(series.id); }}
            className={`px-4 py-2 text-xs font-tech font-bold transition-all border ${
              selectedSeriesId === series.id
                ? "border-purple-400 bg-purple-950/60 text-white shadow-md shadow-purple-950/50"
                : "border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            <span className="text-purple-400 mr-2">{series.timelineCode.split(" ")[0]}</span>
            <span>{series.title.split("–")[0]}</span>
          </button>
        ))}
      </div>

      {/* Active Series Lore Content */}
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 tech-box space-y-8">
        {/* Title & Metadata */}
        <div className="pb-6 border-b border-slate-800 space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs font-tech text-slate-400">
            <span className="px-2.5 py-0.5 bg-purple-950 border border-purple-500/40 text-purple-300 font-bold">
              {currentSeries.timelineCode}
            </span>
            <span>Năm sản xuất: {currentSeries.originalYear}</span>
            <span>·</span>
            <span>Nhân vật chính: <strong className="text-white">{currentSeries.protagonist}</strong></span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-mecha text-white">
            {currentSeries.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 border border-slate-800">
            {currentSeries.eraBackground}
          </p>
        </div>

        {/* Key Factions */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-wider font-bold">
            <Flag className="w-4 h-4 text-cyan-400" />
            <span>Các Phe Phái &amp; Tổ Chức Chính Trong Cuộc Chiến</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentSeries.keyFactions.map((faction, i) => (
              <div key={i} className="p-4 bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-tech text-amber-400 block uppercase">
                  Biểu tượng: {faction.flag}
                </span>
                <h4 className="text-sm font-bold font-mecha text-white">{faction.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{faction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Tech & Signature Units */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
          {/* Tech */}
          <div className="p-5 bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-tech text-amber-400 uppercase tracking-wider font-bold">
              <Cpu className="w-4 h-4 text-amber-400" />
              <span>Công Nghệ Khoa Học Nền Tảng: {currentSeries.coreTech.name}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentSeries.coreTech.description}
            </p>
          </div>

          {/* Signature Suits */}
          <div className="p-5 bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-wider font-bold">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Mobile Suit Biểu Tượng Của Kỷ Nguyên Này</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {currentSeries.signatureMobileSuits.map((ms, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-tech bg-slate-900 border border-cyan-500/30 text-cyan-300"
                >
                  {ms}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophical themes */}
        <div className="p-5 bg-slate-950 border-l-4 border-purple-500 space-y-2">
          <div className="flex items-center gap-2 text-xs font-tech text-purple-400 uppercase tracking-wider font-bold">
            <Award className="w-4 h-4" />
            <span>Thông Điệp Triết Lý &amp; Ý Nghĩa Nhân Văn</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentSeries.philosophicalThemes}
          </p>
        </div>

        {/* Interactive Spoiler Shield */}
        <div className="p-5 bg-slate-950 border border-red-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-tech text-red-400 font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span>CẢNH BÁO TIẾT LỘ CỐT TRUYỆN (SPOILER GUARD)</span>
            </div>

            <button
              onClick={() => toggleSpoiler(currentSeries.id)}
              className="px-3 py-1.5 bg-red-950/80 hover:bg-red-900/60 border border-red-500/50 text-red-300 text-xs font-tech flex items-center gap-1.5 transition-colors"
            >
              {revealedSpoilers[currentSeries.id] ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Ẩn Nội Dung Spoiler</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Mở Khóa Xem Đoạn Kết &amp; Bí Mật</span>
                </>
              )}
            </button>
          </div>

          {revealedSpoilers[currentSeries.id] ? (
            <div className="p-4 bg-red-950/20 border-l-2 border-red-500 text-xs sm:text-sm text-slate-200 leading-relaxed animate-in fade-in">
              {currentSeries.spoilers}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">
              Nội dung nút thắt cao trào và bí mật lớn nhất của {currentSeries.timelineCode} đang được khóa để tránh ảnh hưởng đến trải nghiệm thưởng thức anime của bạn. Bấm nút phía trên nếu bạn đã xem phim hoặc muốn tìm hiểu ngay.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
