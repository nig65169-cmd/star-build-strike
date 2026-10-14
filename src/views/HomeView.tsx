import React from 'react';
import { 
  Rocket, 
  Layers, 
  Wrench, 
  Palette, 
  Star, 
  BookOpen, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Sparkles,
  Heart,
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';
import { GUNDAM_DATABASE, MobileSuit } from '../data/gundams';
import { GUNPLA_GRADES } from '../data/grades';
import { GUIDE_ARTICLES, GuideArticle } from '../data/guides';
import { GUNPLA_REVIEWS, GunplaReview } from '../data/reviews';
import { GundamImage } from '../components/GundamImage';
import { GunplaMatcher } from '../components/GunplaMatcher';
import { playMechaClick, playLockOn } from '../utils/sound';

interface Props {
  onNavigate: (section: string) => void;
  onSelectSuit: (suit: MobileSuit) => void;
  onSelectGuide: (guide: GuideArticle) => void;
  onSelectReview: (review: GunplaReview) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const HomeView: React.FC<Props> = ({
  onNavigate,
  onSelectSuit,
  onSelectGuide,
  onSelectReview,
  favorites,
  onToggleFavorite
}) => {
  const featuredSuits = GUNDAM_DATABASE.slice(0, 4);
  const featuredGuides = GUIDE_ARTICLES.slice(0, 3);
  const topReviews = GUNPLA_REVIEWS.slice(0, 3);

  return (
    <div className="space-y-16 animate-in fade-in">
      {/* 1. HERO BANNER - MECHA SCI-FI HUD */}
      <section className="relative min-h-[520px] lg:min-h-[580px] bg-slate-950 border border-cyan-500/30 overflow-hidden tech-box flex items-center">
        {/* Background glow and HUD grid */}
        <div className="absolute inset-0 bg-mecha-grid opacity-30 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Diagonal caution accent */}
        <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-cyan-500" />

        <div className="relative z-10 w-full p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/90 border border-cyan-500/40 text-cyan-400 text-xs font-tech">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <span>GUNDAM HANDBOOK // BẢN PHÁC THẢO DỮ LIỆU TOÀN DIỆN</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-mecha text-white tracking-tight leading-none">
                CẨM NANG <span className="text-cyan-400">GUNDAM</span> &amp; <span className="text-red-500">GUNPLA</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed pt-2">
                Hệ thống dữ liệu, hướng dẫn kỹ thuật lắp ráp chuẩn xưởng, kinh nghiệm sơn custom chuyên nghiệp và bối cảnh các cuộc đại chiến Mobile Suit kinh điển.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-tech text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white font-mecha">12+</span>
                <span>Mobile Suits Huyền Thoại</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-cyan-400 font-mecha">8</span>
                <span>Phân Cấp Gunpla Grades</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-amber-400 font-mecha">6+</span>
                <span>Chuyên Đề Kỹ Thuật</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => { playMechaClick(); onNavigate("database"); }}
                className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-mecha font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-red-600/30 flex items-center gap-2 group"
              >
                <span>Khám Phá Thư Viện Mobile Suit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => { playMechaClick(); onNavigate("building"); }}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-400 font-mecha font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>Hướng Dẫn Lắp Ráp</span>
              </button>
            </div>
          </div>

          {/* Hero Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-2 bg-slate-900/90 border border-slate-800 tech-box">
              <GundamImage
                src={GUNDAM_DATABASE.find(g => g.id === "rx-78-2")?.image || ""}
                alt="RX-78-2 Gundam"
                modelCode="RX-78-2"
                badge="FLAGSHIP MECHA"
                className="w-full h-72 sm:h-80"
              />
              <div className="p-3 bg-slate-950 flex items-center justify-between border-t border-slate-800">
                <div>
                  <span className="text-[10px] font-tech text-cyan-400 block">SYMBOL OF AN ERA</span>
                  <span className="text-xs font-bold font-mecha text-white">RX-78-2 Gundam (Amuro Ray)</span>
                </div>
                <button
                  onClick={() => {
                    playLockOn();
                    const rx = GUNDAM_DATABASE.find(g => g.id === "rx-78-2");
                    if (rx) onSelectSuit(rx);
                  }}
                  className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-tech font-bold text-[11px] transition-colors"
                >
                  Xem Hồ Sơ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION TO GUNDAM & GUNPLA CULTURE */}
      <section className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 tech-box space-y-4">
        <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>VĂN HÓA GUNDAM &amp; PHONG TRÀO GUNPLA TOÀN CẦU</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-mecha text-white">
          Gunpla: Nghệ Thuật Chế Tác Thu Nhỏ Từ Anime Đến Đời Thực
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="p-4 bg-slate-950/80 border border-slate-800/80 space-y-2">
            <h3 className="font-bold text-white font-mecha text-base flex items-center gap-2">
              <span className="text-red-500 font-tech">01.</span> Gunpla là gì?
            </h3>
            <p className="text-slate-400">
              Ghép từ <strong>"Gundam Plastic Model"</strong>, Gunpla là các bộ mô hình lắp ghép bằng nhựa mô phỏng các cỗ máy Mobile Suit do hãng Bandai Namco sản xuất từ năm 1980 tại nhà máy Bandai Hobby Center (Shizuoka, Nhật Bản).
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 border border-slate-800/80 space-y-2">
            <h3 className="font-bold text-white font-mecha text-base flex items-center gap-2">
              <span className="text-cyan-400 font-tech">02.</span> Công nghệ Snap-Fit
            </h3>
            <p className="text-slate-400">
              Không cần dùng keo dán phức tạp, các khớp nối được thiết kế chính xác đến micromet để bấm khớp vào nhau (Snap-fit). Hệ thống đúc khuôn nhựa đa sắc (System Injection) cho màu sắc chân thực ngay khi mở hộp.
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 border border-slate-800/80 space-y-2">
            <h3 className="font-bold text-white font-mecha text-base flex items-center gap-2">
              <span className="text-amber-400 font-tech">03.</span> Sáng tạo không giới hạn
            </h3>
            <p className="text-slate-400">
              Từ việc lắp ráp mộc (Straight Build) giải trí cuối tuần, người chơi có thể nâng tầm tác phẩm qua kỹ thuật kẻ lằn, dán decal nước, sơn airbrush nghệ thuật hoặc tạo sa bàn chiến trường sống động.
            </p>
          </div>
        </div>
      </section>

      {/* 3. QUICK NAVIGATION - 6 MAIN MODULES */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-tech text-cyan-400 tracking-wider uppercase block">TRỤC ĐIỀU HƯỚNG NHANH</span>
            <h2 className="text-2xl font-bold font-mecha text-white">Chuyên Mục Trọng Tâm</h2>
          </div>
          <span className="text-xs font-tech text-slate-500">6 PHÂN KHU NỘI DUNG CHÍNH</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              id: "database",
              title: "Thư Viện Mobile Suit",
              desc: "Hồ sơ kỹ thuật chi tiết của 12+ cỗ máy chiến tranh: vũ khí, kích thước, động cơ và phi công.",
              icon: ShieldCheck,
              accent: "border-cyan-500/40 text-cyan-400"
            },
            {
              id: "grades",
              title: "Cẩm Nang Cấp Độ Gunpla",
              desc: "Phân loại chi tiết EG, HG, RG, MG, PG cùng công cụ so sánh kích thước và bảng thông số.",
              icon: Layers,
              accent: "border-blue-500/40 text-blue-400"
            },
            {
              id: "building",
              title: "Hướng Dẫn Lắp Ráp & Dụng Cụ",
              desc: "Kỹ thuật cắt 2 lần, xử lý vết nub phẳng phiu, dán decal và checklist theo dõi tiến độ lắp ráp.",
              icon: Wrench,
              accent: "border-amber-500/40 text-amber-400"
            },
            {
              id: "custom",
              title: "Sơn & Custom Mô Hình",
              desc: "Kỹ thuật sơn cọ, sơn súng Airbrush, kẻ lằn chìm panel line, làm cũ weathering và bảo hộ an toàn.",
              icon: Palette,
              accent: "border-emerald-500/40 text-emerald-400"
            },
            {
              id: "reviews",
              title: "Đánh Giá & Gợi Ý Mua Kit",
              desc: "Bảng benchmark chấm điểm chi tiết các mẫu kit đáng tiền nhất dành cho người mới và cao thủ.",
              icon: Star,
              accent: "border-red-500/40 text-red-400"
            },
            {
              id: "lore",
              title: "Kiến Thức & Vũ Trụ Gundam",
              desc: "Bối cảnh cuộc chiến Universal Century, SEED, 00, IBO và triết lý phản chiến sâu sắc.",
              icon: BookOpen,
              accent: "border-purple-500/40 text-purple-400"
            }
          ].map(module => {
            const Icon = module.icon;
            return (
              <div
                key={module.id}
                onClick={() => { playMechaClick(); onNavigate(module.id); }}
                className="p-5 bg-slate-900 border border-slate-800 hover:border-cyan-500/60 transition-all duration-300 tech-box cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 bg-slate-950 border ${module.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-base font-bold font-mecha text-white group-hover:text-cyan-300 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {module.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-tech text-slate-400">
                  <span className="uppercase">TRUY CẬP PHÂN KHU</span>
                  <span className="text-cyan-400 font-bold group-hover:underline">BẮT ĐẦU &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED MOBILE SUITS - POPULAR UNITS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-tech text-red-500 tracking-wider uppercase block flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 fill-red-500" />
              MOBILE SUITS ĐƯỢC YÊU THÍCH NHẤT
            </span>
            <h2 className="text-2xl font-bold font-mecha text-white">Những Cỗ Máy Biểu Tượng Của Mọi Thời Đại</h2>
          </div>
          <button
            onClick={() => { playMechaClick(); onNavigate("database"); }}
            className="text-xs font-tech text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Xem tất cả 12+ mẫu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredSuits.map(suit => {
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
                      className="w-full h-44"
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
                      title="Lưu yêu thích"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav ? "fill-red-500" : ""}`} />
                    </button>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-[10px] font-tech text-slate-400">
                      <span className="text-cyan-400 font-bold">{suit.modelNumber}</span>
                      <span>·</span>
                      <span className="truncate">{suit.faction.split(" ")[0]}</span>
                    </div>

                    <h3 className="text-base font-bold font-mecha text-white group-hover:text-cyan-300 transition-colors">
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
                    className="w-full py-2 bg-slate-950 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-xs font-tech text-cyan-400 flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Xem Hồ Sơ Chi Tiết</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. INTERACTIVE GUNPLA STARTER MATCHER QUIZ */}
      <section>
        <GunplaMatcher onSelectGundam={(id) => {
          const match = GUNDAM_DATABASE.find(g => g.id === id);
          if (match) onSelectSuit(match);
        }} />
      </section>

      {/* 6. FEATURED BUILDING & PAINTING GUIDES */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-tech text-amber-400 tracking-wider uppercase block">HƯỚNG DẪN KỸ THUẬT NỔI BẬT</span>
            <h2 className="text-2xl font-bold font-mecha text-white">Nâng Cấp Tay Nghề Cùng Chuyên Gia</h2>
          </div>
          <button
            onClick={() => { playMechaClick(); onNavigate("building"); }}
            className="text-xs font-tech text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Tất cả bài hướng dẫn</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredGuides.map(guide => (
            <div
              key={guide.id}
              onClick={() => { playMechaClick(); onSelectGuide(guide); }}
              className="p-5 bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 tech-box cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-tech text-slate-400">
                  <span className="px-2 py-0.5 bg-slate-950 border border-amber-500/30 text-amber-400">
                    {guide.level}
                  </span>
                  <span>{guide.readTime}</span>
                </div>

                <h3 className="text-base font-bold font-mecha text-white group-hover:text-amber-300 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {guide.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-tech text-cyan-400">
                <span>ĐỌC HƯỚNG DẪN</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. COMMUNITY GUNPLA BENCHMARKS PREVIEW */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-tech text-red-400 tracking-wider uppercase block">ĐÁNH GIÁ MÔ HÌNH ĐÁNG MUA NHẤT</span>
            <h2 className="text-2xl font-bold font-mecha text-white">Top Gunpla Đạt Điểm Tuyệt Đối</h2>
          </div>
          <button
            onClick={() => { playMechaClick(); onNavigate("reviews"); }}
            className="text-xs font-tech text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Xem đầy đủ bảng đánh giá</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {topReviews.map(rev => (
            <div
              key={rev.id}
              onClick={() => { playMechaClick(); onSelectReview(rev); }}
              className="p-5 bg-slate-900 border border-slate-800 hover:border-red-500/50 transition-all duration-300 tech-box cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-tech">
                  <span className="text-cyan-400 font-bold">{rev.grade} · {rev.scale}</span>
                  <span className="px-2 py-0.5 bg-yellow-950/80 border border-yellow-500/30 text-yellow-400 font-bold">
                    ★ {rev.overallRating} / 5.0
                  </span>
                </div>

                <h3 className="text-base font-bold font-mecha text-white group-hover:text-red-400 transition-colors">
                  {rev.name}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  "{rev.verdict}"
                </p>

                <div className="text-[11px] font-tech text-slate-400">
                  Mức giá tham khảo: <span className="text-white font-bold">{rev.priceRefVND}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-tech text-red-400">
                <span>XEM PHÂN TÍCH ƯU / NHƯỢC ĐIỂM</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
