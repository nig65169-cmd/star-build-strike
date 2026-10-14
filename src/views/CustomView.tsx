import React, { useState } from 'react';
import { Palette, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, Wind, Eye, Droplet, Flame } from 'lucide-react';
import { GUIDE_ARTICLES, GuideArticle } from '../data/guides';
import { playMechaClick } from '../utils/sound';

interface Props {
  onSelectGuide: (guide: GuideArticle) => void;
}

export const CustomView: React.FC<Props> = ({ onSelectGuide }) => {
  const [selectedStyle, setSelectedStyle] = useState<string>("clean");

  const customGuides = GUIDE_ARTICLES.filter(g => g.category === "custom");

  const customStyles = [
    {
      id: "clean",
      name: "Clean / Studio Anime Style",
      desc: "Phong cách chuẩn như trong phim hoạt hình. Mọi đường nét phẳng lì, màu sắc tươi sáng, bóng mịn hoặc phủ mờ nhạt, decal tem dán ngay ngắn chuẩn mực.",
      difficulty: "Cơ bản - Trung cấp",
      signature: "Sơn mờ mịn, kẻ lằn sắc mảnh, không có vết bẩn",
      color: "border-cyan-500 text-cyan-400"
    },
    {
      id: "weathering",
      name: "Military Weathering / Battle Damaged",
      desc: "Tái hiện cỗ máy chiến tranh sau hàng tháng trời chiến đấu ngoài sa mạc hay bùn lầy: vết tróc giáp (chipping), gỉ sét ở ốc vít, muội khói động cơ booster.",
      difficulty: "Trung cấp - Nâng cao",
      signature: "Dry brush bạc, wash rỉ sét, vệt trầy xước đạn lạc",
      color: "border-amber-500 text-amber-400"
    },
    {
      id: "metallic",
      name: "Candy Coat & Titanium Metallic",
      desc: "Lớp sơn tráng gương bóng loáng nhiều lớp: lót đen bóng -> phủ bạc chrome -> phủ màu trong suốt (Clear Red, Clear Blue) tạo hiệu ứng xe đua siêu sang.",
      difficulty: "Nâng cao",
      signature: "Độ bóng gương 100%, phản chiếu ánh sáng ma thuật",
      color: "border-red-500 text-red-400"
    },
    {
      id: "cel-shading",
      name: "Cel-Shading Anime 2.5D",
      desc: "Vẽ viền đen đậm quanh mọi góc cạnh và tạo các mảng màu phẳng tương phản cao khiến mô hình 3D trông như một bức tranh hoạt hình 2D sống động bước ra màn ảnh.",
      difficulty: "Thượng thừa",
      signature: "Hiệu ứng thị giác 2D đánh lừa thị giác người xem",
      color: "border-purple-500 text-purple-400"
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in">
      {/* Header */}
      <div className="pb-6 border-b border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-xs font-tech text-emerald-400 uppercase tracking-wider">
          <Palette className="w-4 h-4 text-emerald-400" />
          <span>CUSTOMIZATION &amp; PAINTING // NGHỆ THUẬT SƠN &amp; ĐỘ MÔ HÌNH</span>
        </div>
        <h1 className="text-3xl font-bold font-mecha text-white">
          Sơn &amp; Tùy Biến Mô Hình Gunpla (Custom &amp; Painting)
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Khám phá nghệ thuật biến một mô hình nhựa nguyên bản thành một tác phẩm điêu khắc nghệ thuật độc bản mang dấu ấn phong cách riêng của bạn.
        </p>
      </div>

      {/* 1. CRITICAL SAFETY PROTOCOL - MUST BE PROMINENT */}
      <section className="bg-gradient-to-r from-red-950/60 via-slate-900 to-slate-950 border-2 border-red-500/60 p-6 tech-box space-y-4">
        <div className="flex items-center gap-2 text-xs font-tech text-red-400 uppercase tracking-wider font-bold">
          <ShieldAlert className="w-5 h-5 text-red-500 animate-pulse" />
          <span>QUY TẮC AN TOÀN SỐNG CÒN KHI SƠN VÀ DÙNG HÓA CHẤT MÔ HÌNH</span>
        </div>

        <h3 className="text-xl font-bold font-mecha text-white">
          Bảo Vệ Sức Khỏe Builder Trước Hơi Hóa Chất &amp; Bụi Nhựa
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="p-3.5 bg-slate-950/80 border border-red-500/30 space-y-1.5">
            <div className="flex items-center gap-2 text-red-400 font-bold font-tech">
              <Wind className="w-4 h-4" />
              <span>1. Mặt nạ phòng độc lọc hơi hữu cơ</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Khẩu trang y tế hoặc N95 <strong>KHÔNG lọc được</strong> hơi dung môi Lacquer/Enamel. Bắt buộc phải dùng mặt nạ có phin lọc than hoạt tính chuyên dụng (như 3M 6200 kèm phin 6001).
            </p>
          </div>

          <div className="p-3.5 bg-slate-950/80 border border-red-500/30 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-400 font-bold font-tech">
              <Droplet className="w-4 h-4" />
              <span>2. Buồng hút sơn &amp; Thông gió</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Tuyệt đối không phun sơn trong phòng ngủ kín máy lạnh. Phải có buồng hút sơn (Spray booth) có quạt hút đẩy hơi sơn và bụi màu qua đường ống thoát ra ngoài trời.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950/80 border border-red-500/30 space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold font-tech">
              <Flame className="w-4 h-4" />
              <span>3. Phòng chống cháy nổ dung môi</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Thinner và các bình xịt khí nén cực kỳ dễ bắt lửa. Tuyệt đối không hút thuốc lá, thắp nến hoặc để gần nguồn tia lửa điện khi đang pha chế hoặc xịt sơn.
            </p>
          </div>
        </div>
      </section>

      {/* 2. GALLERY OF CUSTOM STYLES */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-tech text-cyan-400 uppercase tracking-wider block">PHONG CÁCH SÁNG TẠO</span>
          <h2 className="text-2xl font-bold font-mecha text-white">4 Trường Phái Custom Phổ Biến Nhất</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {customStyles.map(st => (
            <div
              key={st.id}
              onClick={() => { playMechaClick(); setSelectedStyle(st.id); }}
              className={`p-5 bg-slate-900 border transition-all duration-300 tech-box cursor-pointer flex flex-col justify-between ${
                selectedStyle === st.id ? `${st.color} shadow-lg shadow-cyan-950/40 bg-slate-900/90` : "border-slate-800 hover:border-slate-600"
              }`}
            >
              <div className="space-y-3">
                <span className="text-[10px] font-tech text-slate-400 block uppercase">
                  ĐỘ KHÓ: {st.difficulty}
                </span>
                <h3 className="text-lg font-bold font-mecha text-white">{st.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-tech text-slate-300">
                <strong className="text-cyan-400">Đặc trưng:</strong> {st.signature}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. IN-DEPTH PAINTING & MODDING ARTICLES */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-tech text-emerald-400 uppercase tracking-wider block">CHUYÊN ĐỀ KỸ THUẬT NÂNG CAO</span>
          <h2 className="text-2xl font-bold font-mecha text-white">Các Hướng Dẫn Sơn &amp; Tùy Biến Thực Tế</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customGuides.map(guide => (
            <div
              key={guide.id}
              onClick={() => { playMechaClick(); onSelectGuide(guide); }}
              className="p-6 bg-slate-900 border border-slate-800 hover:border-emerald-500/60 transition-all duration-300 tech-box cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-tech text-slate-400">
                  <span className="px-2.5 py-0.5 bg-slate-950 border border-emerald-500/40 text-emerald-400 font-bold">
                    {guide.level}
                  </span>
                  <span>{guide.readTime}</span>
                </div>

                <h3 className="text-xl font-bold font-mecha text-white group-hover:text-emerald-300 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {guide.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {guide.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-tech text-slate-400 bg-slate-950 px-2 py-0.5 border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-tech text-emerald-400 font-bold">
                <span>XEM CHI TIẾT KỸ THUẬT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
