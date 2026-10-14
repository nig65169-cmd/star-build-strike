import React from 'react';
import { Heart, Trash2, ArrowRight, ShieldCheck, BookmarkX } from 'lucide-react';
import { GUNDAM_DATABASE, MobileSuit } from '../data/gundams';
import { GundamImage } from './GundamImage';
import { playMechaClick } from '../utils/sound';

interface Props {
  favoriteIds: string[];
  onSelectSuit: (suit: MobileSuit) => void;
  onRemoveFavorite: (id: string) => void;
  onClearAll: () => void;
  onNavigateHome: () => void;
}

export const FavoritesView: React.FC<Props> = ({
  favoriteIds,
  onSelectSuit,
  onRemoveFavorite,
  onClearAll,
  onNavigateHome
}) => {
  const favoriteSuits = GUNDAM_DATABASE.filter(s => favoriteIds.includes(s.id));

  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-tech text-red-400 uppercase tracking-wider mb-1">
            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            <span>KHO LƯU TRỮ CÁ NHÂN // HANGAR YÊU THÍCH</span>
          </div>
          <h2 className="text-2xl font-bold font-mecha text-white">
            Danh Sách Mobile Suit & Nội Dung Đã Lưu ({favoriteSuits.length})
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Các cỗ máy bạn đã bấm tim lưu trữ để dễ dàng tra cứu thông số kỹ thuật và phiên bản Gunpla khi cần.
          </p>
        </div>

        {favoriteSuits.length > 0 && (
          <button
            onClick={() => {
              playMechaClick();
              if (window.confirm("Bạn có chắc chắn muốn xóa toàn bộ danh sách yêu thích?")) {
                onClearAll();
              }
            }}
            className="px-3 py-1.5 border border-red-500/40 text-red-400 hover:bg-red-950/40 text-xs font-tech flex items-center gap-1.5 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Xóa Toàn Bộ</span>
          </button>
        )}
      </div>

      {/* Grid or Empty State */}
      {favoriteSuits.length === 0 ? (
        <div className="py-16 text-center bg-slate-900/60 border border-slate-800 p-8 tech-box space-y-4">
          <BookmarkX className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold font-mecha text-slate-300">
            Kho Lưu Trữ Đang Trống
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
            Bạn chưa lưu mẫu Mobile Suit nào vào danh sách yêu thích. Hãy ghé thăm Thư viện Gundam và bấm biểu tượng trái tim để đánh dấu các mẫu bạn quan tâm!
          </p>
          <button
            onClick={() => { playMechaClick(); onNavigateHome(); }}
            className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold font-mecha text-xs tracking-wider uppercase transition-colors"
          >
            Khám Phá Thư Viện Gundam Ngay
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteSuits.map(suit => (
            <div
              key={suit.id}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 tech-box flex flex-col justify-between group"
            >
              <div>
                <div className="relative">
                  <GundamImage
                    src={suit.image}
                    alt={suit.name}
                    modelCode={suit.modelNumber}
                    className="w-full h-48"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playMechaClick();
                      onRemoveFavorite(suit.id);
                    }}
                    className="absolute top-2 right-2 p-1.5 bg-slate-950/80 border border-red-500/50 text-red-400 hover:bg-red-950 transition-colors z-20"
                    title="Bỏ lưu"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-tech text-slate-400">
                    <span className="text-cyan-400 font-bold">{suit.modelNumber}</span>
                    <span>·</span>
                    <span className="truncate">{suit.timeline.split("(")[0]}</span>
                  </div>

                  <h3 className="text-lg font-bold font-mecha text-white group-hover:text-cyan-300 transition-colors">
                    {suit.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {suit.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => { playMechaClick(); onSelectSuit(suit); }}
                  className="w-full py-2 bg-slate-950 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/50 text-xs font-tech text-cyan-400 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Xem Chi Tiết Kỹ Thuật</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
