import React, { useState, useMemo } from 'react';
import { Search, X, ChevronRight, Shield, BookOpen, Layers, Star, Compass } from 'lucide-react';
import { GUNDAM_DATABASE, MobileSuit } from '../data/gundams';
import { GUNPLA_GRADES, GunplaGrade } from '../data/grades';
import { GUIDE_ARTICLES, GuideArticle } from '../data/guides';
import { GUNPLA_REVIEWS, GunplaReview } from '../data/reviews';
import { GUNDAM_LORE_SERIES, GundamSeriesLore } from '../data/lore';
import { playMechaClick } from '../utils/sound';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectSuit: (suit: MobileSuit) => void;
  onSelectGuide: (guide: GuideArticle) => void;
  onSelectReview: (review: GunplaReview) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const SearchModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSelectSuit,
  onSelectGuide,
  onSelectReview,
  onNavigateSection
}) => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matchedSuits = GUNDAM_DATABASE.filter(
      s => s.name.toLowerCase().includes(q) ||
           s.modelNumber.toLowerCase().includes(q) ||
           s.pilot.toLowerCase().includes(q) ||
           s.series.toLowerCase().includes(q) ||
           s.faction.toLowerCase().includes(q)
    );

    const matchedGuides = GUIDE_ARTICLES.filter(
      g => g.title.toLowerCase().includes(q) ||
           g.summary.toLowerCase().includes(q) ||
           g.tags.some(t => t.toLowerCase().includes(q))
    );

    const matchedGrades = GUNPLA_GRADES.filter(
      gr => gr.name.toLowerCase().includes(q) ||
            gr.code.toLowerCase().includes(q) ||
            gr.scale.includes(q)
    );

    const matchedReviews = GUNPLA_REVIEWS.filter(
      r => r.name.toLowerCase().includes(q) ||
           r.grade.toLowerCase().includes(q)
    );

    const matchedLore = GUNDAM_LORE_SERIES.filter(
      l => l.title.toLowerCase().includes(q) ||
           l.timelineCode.toLowerCase().includes(q) ||
           l.protagonist.toLowerCase().includes(q)
    );

    return {
      suits: matchedSuits,
      guides: matchedGuides,
      grades: matchedGrades,
      reviews: matchedReviews,
      lore: matchedLore,
      totalCount: matchedSuits.length + matchedGuides.length + matchedGrades.length + matchedReviews.length + matchedLore.length
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-3 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-2xl bg-slate-950 border border-cyan-500/40 text-slate-100 shadow-2xl tech-box overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input HUD */}
        <div className="flex items-center gap-3 px-4 py-3.5 bg-slate-900 border-b border-cyan-500/30">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Tìm kiếm Mobile Suit, dòng Grade, kỹ thuật sơn, bài hướng dẫn..."
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-tech"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-slate-400 hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => { playMechaClick(); onClose(); }}
            className="px-2.5 py-1 text-xs border border-slate-700 hover:border-red-500 hover:text-red-400 font-tech"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query ? (
            <div className="py-8 text-center space-y-2">
              <Compass className="w-8 h-8 text-cyan-500/50 mx-auto animate-pulse" />
              <p className="text-xs font-tech text-slate-400">
                Nhập từ khóa để tra cứu toàn bộ cơ sở dữ liệu Gundam Handbook
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {["RX-78-2", "Barbatos", "Kẻ lằn", "Decal nước", "Airbrush", "Master Grade", "Universal Century"].map(tag => (
                  <button
                    key={tag}
                    onClick={() => { playMechaClick(); setQuery(tag); }}
                    className="px-2 py-0.5 text-[11px] font-tech bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-500"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results && results.totalCount === 0 ? (
            <div className="py-10 text-center space-y-2">
              <p className="text-xs font-tech text-red-400">
                RADAR SCAN // KHÔNG TÌM THẤY DỮ LIỆU PHÙ HỢP VỚI TỪ KHÓA "{query}"
              </p>
              <p className="text-xs text-slate-500">
                Hãy thử kiểm tra lại chính tả hoặc tìm bằng mã hiệu Mobile Suit (ví dụ: RX-78, Zaku, Unicorn)
              </p>
            </div>
          ) : results ? (
            <div className="space-y-4">
              {/* Mobile Suits */}
              {results.suits.length > 0 && (
                <div>
                  <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-widest block mb-1.5">
                    MOBILE SUITS DATABASE ({results.suits.length})
                  </span>
                  <div className="space-y-1">
                    {results.suits.map(suit => (
                      <div
                        key={suit.id}
                        onClick={() => {
                          playMechaClick();
                          onClose();
                          onSelectSuit(suit);
                        }}
                        className="p-2.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/60 flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="px-1.5 py-0.5 bg-cyan-950 border border-cyan-500/30 text-[10px] font-tech text-cyan-400">
                            {suit.modelNumber}
                          </span>
                          <span className="text-xs font-bold text-white font-mecha">{suit.name}</span>
                          <span className="text-[11px] text-slate-400 hidden sm:inline">({suit.pilot})</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Guides */}
              {results.guides.length > 0 && (
                <div>
                  <span className="text-[10px] font-tech text-amber-400 uppercase tracking-widest block mb-1.5">
                    HƯỚNG DẪN KỸ THUẬT & SƠN ({results.guides.length})
                  </span>
                  <div className="space-y-1">
                    {results.guides.map(g => (
                      <div
                        key={g.id}
                        onClick={() => {
                          playMechaClick();
                          onClose();
                          onSelectGuide(g);
                        }}
                        className="p-2.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/60 flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-amber-400" />
                          <span className="text-xs font-semibold text-slate-200">{g.title}</span>
                          <span className="text-[10px] font-tech text-amber-400">[{g.level}]</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews */}
              {results.reviews.length > 0 && (
                <div>
                  <span className="text-[10px] font-tech text-red-400 uppercase tracking-widest block mb-1.5">
                    ĐÁNH GIÁ MÔ HÌNH GUNPLA ({results.reviews.length})
                  </span>
                  <div className="space-y-1">
                    {results.reviews.map(r => (
                      <div
                        key={r.id}
                        onClick={() => {
                          playMechaClick();
                          onClose();
                          onSelectReview(r);
                        }}
                        className="p-2.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-red-500/60 flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-xs font-semibold text-slate-200">{r.name}</span>
                          <span className="text-[10px] font-tech text-slate-400">({r.grade})</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Lore Series */}
              {results.lore.length > 0 && (
                <div>
                  <span className="text-[10px] font-tech text-cyan-300 uppercase tracking-widest block mb-1.5">
                    DÒNG THỜI GIAN VÀ BỐI CẢNH LORE ({results.lore.length})
                  </span>
                  <div className="space-y-1">
                    {results.lore.map(l => (
                      <div
                        key={l.id}
                        onClick={() => {
                          playMechaClick();
                          onClose();
                          onNavigateSection("lore");
                        }}
                        className="p-2.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-400/60 flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white font-mecha">{l.title}</span>
                          <span className="text-[10px] font-tech text-cyan-400">[{l.timelineCode}]</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
