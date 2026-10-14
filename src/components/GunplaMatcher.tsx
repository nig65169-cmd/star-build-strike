import React, { useState } from 'react';
import { Sparkles, Compass, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { GUNDAM_DATABASE } from '../data/gundams';
import { playMechaClick, playLockOn } from '../utils/sound';

interface MatchResult {
  title: string;
  grade: string;
  price: string;
  why: string;
  image: string;
  targetId: string;
}

export const GunplaMatcher: React.FC<{ onSelectGundam?: (id: string) => void }> = ({ onSelectGundam }) => {
  const [budget, setBudget] = useState<string>("medium");
  const [experience, setExperience] = useState<string>("beginner");
  const [style, setStyle] = useState<string>("modern");
  const [matched, setMatched] = useState<MatchResult | null>(null);

  const calculateMatch = () => {
    playLockOn();
    const rx78 = GUNDAM_DATABASE.find(g => g.id === "rx-78-2");
    const nu = GUNDAM_DATABASE.find(g => g.id === "rx-93-nu-gundam");
    const barbatos = GUNDAM_DATABASE.find(g => g.id === "asw-g-08-barbatos-lupus-rex");
    const aerial = GUNDAM_DATABASE.find(g => g.id === "xvx-016-gundam-aerial");

    if (experience === "beginner" && budget === "low") {
      setMatched({
        title: "Entry Grade 1/144 RX-78-2 Gundam",
        grade: "Entry Grade (EG)",
        price: "~180.000 VNĐ",
        why: "Tuyệt đối hoàn hảo cho người mới: không cần kìm cắt, bấm tay nhẹ nhàng, không cần dán decal mắt và biên độ tạo dáng siêu mượt.",
        image: rx78?.image || "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
        targetId: "rx-78-2"
      });
    } else if (budget === "high" || experience === "veteran") {
      setMatched({
        title: "RG 1/144 RX-93 Nu Gundam / RG Hi-Nu Gundam",
        grade: "Real Grade (RG)",
        price: "~950.000 - 1.150.000 VNĐ",
        why: "Đỉnh cao chi tiết cơ khí thu nhỏ. Khung xương chắc chắn, dàn Fin Funnel uy nghi, xứng đáng là báu vật trên bàn làm việc của bạn.",
        image: nu?.image || "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
        targetId: "rx-93-nu-gundam"
      });
    } else if (style === "heavy") {
      setMatched({
        title: "MG 1/100 Gundam Barbatos",
        grade: "Master Grade (MG)",
        price: "~1.050.000 VNĐ",
        why: "Khung xương kim loại lộ cơ bắp, pít-tông mạ bạc hoạt động thật, cầm cây chùy khổng lồ cực kỳ chiến binh dã tính.",
        image: barbatos?.image || "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
        targetId: "asw-g-08-barbatos-lupus-rex"
      });
    } else {
      setMatched({
        title: "HG 1/144 Gundam Aerial",
        grade: "High Grade (HG)",
        price: "~350.000 VNĐ",
        why: "Thiết kế hiện đại, công nghệ ngực phản quang in nhiệt, khiên tách thành 11 mảnh vũ khí bay, trải nghiệm ráp cực sướng không bị nản.",
        image: aerial?.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        targetId: "xvx-016-gundam-aerial"
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-cyan-500/30 p-6 tech-box relative overflow-hidden">
      <div className="flex items-center gap-2 text-cyan-400 text-xs font-tech tracking-wider uppercase mb-1">
        <Compass className="w-4 h-4 text-cyan-400" />
        <span>RADAR HỖ TRỢ // TÌM KIT PHÙ HỢP NHẤT CHO BẠN</span>
      </div>
      <h3 className="text-xl font-bold font-mecha text-white mb-2">
        Trắc Nghiệm Khám Phá: Mẫu Gunpla Định Mệnh Của Bạn
      </h3>
      <p className="text-xs text-slate-400 mb-6 max-w-xl">
        Chỉ cần 30 giây chọn tiêu chí, hệ thống thuật toán Mecha sẽ đề xuất mẫu mô hình tối ưu theo ngân sách và độ khéo tay của bạn.
      </p>

      {!matched ? (
        <div className="space-y-5">
          {/* Question 1: Experience */}
          <div>
            <label className="text-xs font-tech text-slate-300 block mb-2 font-semibold">
              1. Kinh nghiệm của bạn với mô hình lắp ráp:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: "beginner", label: "Mới tinh (Chưa từng ráp)" },
                { id: "intermediate", label: "Đã ráp 1 - 3 kit cơ bản" },
                { id: "veteran", label: "Đã quen tay (Thích thử thách)" }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => { playMechaClick(); setExperience(opt.id); }}
                  className={`px-3 py-2 text-xs text-left border transition-all ${
                    experience === opt.id
                      ? "border-cyan-400 bg-cyan-950/50 text-white font-semibold"
                      : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Budget */}
          <div>
            <label className="text-xs font-tech text-slate-300 block mb-2 font-semibold">
              2. Ngân sách dự kiến của bạn cho kit đầu tiên:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: "low", label: "Dưới 300.000 VNĐ (Nhẹ nhàng)" },
                { id: "medium", label: "300.000 - 800.000 VNĐ (Chuẩn mực)" },
                { id: "high", label: "Trên 900.000 VNĐ (Cao cấp / Đỉnh)" }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => { playMechaClick(); setBudget(opt.id); }}
                  className={`px-3 py-2 text-xs text-left border transition-all ${
                    budget === opt.id
                      ? "border-cyan-400 bg-cyan-950/50 text-white font-semibold"
                      : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Aesthetic Style */}
          <div>
            <label className="text-xs font-tech text-slate-300 block mb-2 font-semibold">
              3. Phong cách thiết kế mecha bạn say mê nhất:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: "modern", label: "Thanh thoát, hiện đại, nhiều hiệu ứng (WFM/SEED)" },
                { id: "heavy", label: "Cơ bắp, chiến tranh dã tính, cận chiến (IBO/UC)" },
                { id: "classic", label: "Cổ điển huyền thoại quân sự (RX-78 / Zaku)" }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => { playMechaClick(); setStyle(opt.id); }}
                  className={`px-3 py-2 text-xs text-left border transition-all ${
                    style === opt.id
                      ? "border-cyan-400 bg-cyan-950/50 text-white font-semibold"
                      : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={calculateMatch}
            className="w-full mt-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mecha font-bold text-sm tracking-wider uppercase transition-all shadow-md shadow-red-600/30 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Khởi Động Quét Radar Tìm Kit Ngay
          </button>
        </div>
      ) : (
        /* Result display */
        <div className="bg-slate-950 border border-cyan-500/40 p-5 animate-in fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <span className="text-xs font-tech text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              MẪU KHỞI ĐẦU ĐƯỢC ĐỀ XUẤT CHO BẠN
            </span>
            <button
              onClick={() => { playMechaClick(); setMatched(null); }}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-tech"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Chọn lại
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <div className="w-full sm:w-44 h-32 overflow-hidden border border-slate-800 shrink-0">
              <img src={matched.image} alt={matched.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 text-xs font-tech text-slate-400 mb-1">
                <span className="text-cyan-400 font-bold">{matched.grade}</span>
                <span>·</span>
                <span className="text-amber-400">{matched.price}</span>
              </div>
              <h4 className="text-lg font-bold font-mecha text-white">{matched.title}</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed bg-slate-900/60 p-2.5 border-l-2 border-red-500">
                {matched.why}
              </p>

              {onSelectGundam && (
                <button
                  onClick={() => {
                    playMechaClick();
                    onSelectGundam(matched.targetId);
                  }}
                  className="mt-3 text-xs font-tech text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group font-semibold"
                >
                  <span>Xem hồ sơ kỹ thuật chi tiết của mẫu này</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
