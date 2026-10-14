import React, { useState, useMemo } from 'react';
import { Search, Filter, ShieldCheck, Heart, ArrowRight, RotateCcw, Crosshair } from 'lucide-react';
import { GUNDAM_DATABASE, MobileSuit } from '../data/gundams';
import { GundamImage } from '../components/GundamImage';
import { playMechaClick, playLockOn } from '../utils/sound';

interface Props {
  onSelectSuit: (suit: MobileSuit) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const DatabaseView: React.FC<Props> = ({
  onSelectSuit,
  favorites,
  onToggleFavorite
}) => {
  const [search, setSearch] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("ALL");
  const [selectedFaction, setSelectedFaction] = useState("ALL");

  const timelines = [
    { id: "ALL", label: "Tất Cả Timeline" },
    { id: "Universal Century", label: "Universal Century (U.C.)" },
    { id: "Cosmic Era", label: "Cosmic Era (C.E.)" },
    { id: "Anno Domini", label: "Anno Domini (A.D.)" },
    { id: "Post Disaster", label: "Post Disaster (P.D.)" },
    { id: "Ad Stella", label: "Ad Stella (A.S.)" },
    { id: "After Colony", label: "After Colony (A.C.)" }
  ];

  const factions = [
    { id: "ALL", label: "Tất Cả Phe Phái" },
    { id: "Earth Federation", label: "Liên bang Trái Đất (EFF)" },
    { id: "Zeon", label: "Công quốc Zeon" },
    { id: "Celestial Being", label: "Celestial Being" },
    { id: "Tekkadan", label: "Thiết Hoa Đoàn (Tekkadan)" },
    { id: "Terminal", label: "Terminal / Orb" },
    { id: "Shin Sei", label: "Shin Sei / Benerit" }
  ];

  const filteredSuits = useMemo(() => {
    return GUNDAM_DATABASE.filter(suit => {
      const matchSearch =
        search.trim() === "" ||
        suit.name.toLowerCase().includes(search.toLowerCase()) ||
        suit.modelNumber.toLowerCase().includes(search.toLowerCase()) ||
        suit.pilot.toLowerCase().includes(search.toLowerCase()) ||
        suit.series.toLowerCase().includes(search.toLowerCase());

      const matchTimeline =
        selectedTimeline === "ALL" || suit.timeline.includes(selectedTimeline);

      const matchFaction =
        selectedFaction === "ALL" || suit.faction.includes(selectedFaction);

      return matchSearch && matchTimeline && matchFaction;
    });
  }, [search, selectedTimeline, selectedFaction]);

  const resetFilters = () => {
    playMechaClick();
    setSearch("");
    setSelectedTimeline("ALL");
    setSelectedFaction("ALL");
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* Header section */}
      <div className="pb-6 border-b border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>DATABASE ARCHIVE // THƯ VIỆN CÁC MẪU MOBILE SUIT</span>
        </div>
        <h1 className="text-3xl font-bold font-mecha text-white">
          Thư Viện Hồ Sơ Kỹ Thuật Mobile Suit
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Tra cứu toàn diện các mẫu Mobile Suit kinh điển trong lịch sử Gundam: thông số kích thước, vũ khí trang bị, công nghệ cốt lõi và các cấp độ Gunpla tương ứng.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="p-4 sm:p-5 bg-slate-900 border border-slate-800 tech-box space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Tìm theo tên Mobile Suit, mã số (RX-78, Zaku...), phi công (Amuro, Char, Kira...)..."
            className="w-full bg-slate-950 border border-slate-800 pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 font-tech focus:outline-none focus:border-cyan-500"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Timeline Filter Controls */}
        <div className="space-y-2">
          <span className="text-[11px] font-tech text-slate-400 block font-semibold uppercase">
            LỌC THEO KỶ NGUYÊN (TIMELINE / SERIES):
          </span>
          <div className="flex flex-wrap gap-1.5">
            {timelines.map(t => (
              <button
                key={t.id}
                onClick={() => { playMechaClick(); setSelectedTimeline(t.id); }}
                className={`px-3 py-1.5 text-xs font-tech transition-colors ${
                  selectedTimeline === t.id
                    ? "bg-cyan-500 text-slate-950 font-bold"
                    : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Faction Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-tech text-slate-400 mr-2 uppercase">PHE PHÁI:</span>
            {factions.map(f => (
              <button
                key={f.id}
                onClick={() => { playMechaClick(); setSelectedFaction(f.id); }}
                className={`px-2.5 py-1 text-[11px] font-tech transition-colors ${
                  selectedFaction === f.id
                    ? "bg-red-600 text-white font-bold"
                    : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs font-tech text-slate-400">
            <span>Hiển thị: <strong className="text-cyan-400">{filteredSuits.length}</strong> mẫu</span>
            {(search || selectedTimeline !== "ALL" || selectedFaction !== "ALL") && (
              <button
                onClick={resetFilters}
                className="text-red-400 hover:text-red-300 flex items-center gap-1 underline"
              >
                <RotateCcw className="w-3 h-3" />
                Đặt lại bộ lọc
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid Display or Empty State */}
      {filteredSuits.length === 0 ? (
        <div className="py-16 text-center bg-slate-900/60 border border-slate-800 p-8 tech-box space-y-4">
          <Crosshair className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold font-mecha text-slate-300">
            Không Tìm Thấy Mobile Suit Nào Phù Hợp
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Không có kết quả khớp với tiêu chí tìm kiếm của bạn. Hãy thử thay đổi từ khóa hoặc thiết lập lại bộ lọc để xem toàn bộ danh mục.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold font-tech text-xs transition-colors"
          >
            Khôi Phục Toàn Bộ Danh Sách
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuits.map(suit => {
            const isFav = favorites.includes(suit.id);
            return (
              <div
                key={suit.id}
                className="bg-slate-900 border border-slate-800 hover:border-cyan-500/60 transition-all duration-300 tech-box flex flex-col justify-between group"
              >
                <div>
                  <div className="relative">
                    <GundamImage
                      src={suit.image}
                      alt={suit.name}
                      modelCode={suit.modelNumber}
                      badge={suit.timeline.split("(")[0]}
                      className="w-full h-52"
                    />

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playLockOn();
                        onToggleFavorite(suit.id);
                      }}
                      className={`absolute top-2 right-2 p-1.5 bg-slate-950/80 border transition-all z-20 ${
                        isFav
                          ? "border-red-500 text-red-500"
                          : "border-slate-800 text-slate-400 hover:text-white"
                      }`}
                      title={isFav ? "Xóa khỏi mục yêu thích" : "Lưu vào mục yêu thích"}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? "fill-red-500" : ""}`} />
                    </button>
                  </div>

                  <div className="p-4 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-tech text-slate-400">
                      <span className="text-cyan-400 font-bold">{suit.modelNumber}</span>
                      <span className="truncate max-w-[140px] text-right">{suit.faction}</span>
                    </div>

                    <h3 className="text-lg font-bold font-mecha text-white group-hover:text-cyan-300 transition-colors">
                      {suit.name}
                    </h3>

                    <div className="text-xs font-tech text-amber-400 flex items-center gap-1.5">
                      <span className="text-slate-500">Phi công:</span>
                      <span className="font-semibold text-slate-200">{suit.pilot}</span>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {suit.description}
                    </p>

                    {/* Quick Specs Pills */}
                    <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] font-tech text-slate-300 border-t border-slate-800/80">
                      <div>Cao: <strong className="text-white">{suit.height}</strong></div>
                      <div>Nặng: <strong className="text-white">{suit.weight.split(" ")[0]}t</strong></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => { playMechaClick(); onSelectSuit(suit); }}
                    className="w-full py-2.5 bg-slate-950 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/50 text-xs font-tech text-cyan-400 flex items-center justify-center gap-1.5 transition-colors font-semibold"
                  >
                    <span>Xem Bản Vẽ Kỹ Thuật</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
