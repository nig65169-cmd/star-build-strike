import React, { useState } from 'react';
import { Wrench, CheckSquare, ShieldAlert, ArrowRight, BookOpen, Clock, Lightbulb, Scissors, Sparkles } from 'lucide-react';
import { GUIDE_ARTICLES, GuideArticle } from '../data/guides';
import { ChecklistTracker } from '../components/ChecklistTracker';
import { playMechaClick } from '../utils/sound';

interface Props {
  onSelectGuide: (guide: GuideArticle) => void;
}

export const BuildingView: React.FC<Props> = ({ onSelectGuide }) => {
  const [selectedLevel, setSelectedLevel] = useState<string>("ALL");

  const buildingGuides = GUIDE_ARTICLES.filter(g => g.category === "building");

  const filteredGuides = buildingGuides.filter(g => {
    if (selectedLevel === "ALL") return true;
    return g.level === selectedLevel;
  });

  return (
    <div className="space-y-12 animate-in fade-in">
      {/* Header */}
      <div className="pb-6 border-b border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-xs font-tech text-amber-400 uppercase tracking-wider">
          <Wrench className="w-4 h-4 text-amber-400" />
          <span>ASSEMBLY PROTOCOL // HƯỚNG DẪN LẮP RÁP CHUẨN KỸ THUẬT</span>
        </div>
        <h1 className="text-3xl font-bold font-mecha text-white">
          Cẩm Nang Lắp Ráp &amp; Xử Lý Chi Tiết Gunpla
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Quy trình chuẩn từ chuẩn bị dụng cụ, phương pháp cắt 2 lần tránh sứt nhựa, kỹ thuật xử lý vết nub bằng dũa thủy tinh cho đến dán decal nước và bảo quản tác phẩm.
        </p>
      </div>

      {/* 1. INTERACTIVE BUILD CHECKLIST EMBED */}
      <section>
        <ChecklistTracker />
      </section>

      {/* 2. ESSENTIAL TOOLS DEEP-DIVE */}
      <section className="space-y-4">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-tech text-cyan-400 uppercase tracking-wider block">BỘ ĐỒ NGHỀ THIẾT YẾU</span>
          <h2 className="text-2xl font-bold font-mecha text-white">5 Dụng Cụ Không Thể Thiếu Của Builder</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Kìm Cắt Mô Hình Chuyên Dụng (Nipper)",
              role: "Dụng cụ quan trọng nhất",
              desc: "Tách chi tiết khỏi vỉ runner. Kìm 1 lưỡi siêu bén (Single-blade) như GodHand hoặc DSPIAE giúp mặt cắt ngọt lịm không làm biến dạng nhựa.",
              tips: "Không dùng cắt dây điện, kim loại hoặc bẻ part dày."
            },
            {
              title: "Dao Gọt Mô Hình (Art Knife / Hobby Knife)",
              role: "Gọt phẳng cổng nub và cạo gờ",
              desc: "Lưỡi thép góc 30 độ siêu sắc bén gắn cán nhôm chống trượt, cho phép hớt từng lớp nhựa siêu mỏng phẳng phiu.",
              tips: "Luôn đẩy mũi dao ra hướng xa khỏi ngón tay cái."
            },
            {
              title: "Dũa Thủy Tinh Nano (Nano Glass File)",
              role: "Đánh bóng và xóa sạch nub",
              desc: "Phép màu của builder hiện đại: bề mặt khắc laser nano vừa mài phẳng vết lồi vừa tự phục hồi độ bóng nguyên bản của nhựa.",
              tips: "Dũa nhẹ nhàng một chiều, vệ sinh dũa bằng nước sạch."
            },
            {
              title: "Nhíp Gắp Nhọn Đầu Cong (Tweezers)",
              role: "Dán sticker và decal chi tiết nhỏ",
              desc: "Đầu nhíp thép không gỉ nhọn và khít giúp gắp con tem nhỏ 1mm đặt chính xác vào hốc mắt hoặc khe giáp mà không chạm tay dính dầu.",
              tips: "Chọn loại đầu cong giúp tầm nhìn không bị ngón tay che khuất."
            },
            {
              title: "Dụng Cụ Tách Part (Part Separator)",
              role: "Cứu cánh khi bấm nhầm chi tiết",
              desc: "Lưỡi nhựa dẹp hình nêm giúp cạy các mảnh giáp bị lắp nhầm mà không làm mẻ cạnh hay gãy chốt ngàm âm dương.",
              tips: "Luôn luồn từ từ quanh chu vi part, không cạy dồn một điểm."
            },
            {
              title: "Thảm Cắt Cao Su (Cutting Mat)",
              role: "Bảo vệ mặt bàn và chống cùn dao",
              desc: "Chất liệu cao su tự liền (Self-healing) có in sẵn các đường lưới đo kích thước centimet và góc chia độ chính xác.",
              tips: "Nên chọn khổ A3 hoặc A4 để thao tác thoải mái."
            }
          ].map((tool, idx) => (
            <div key={idx} className="p-4 bg-slate-900 border border-slate-800 tech-box space-y-2">
              <div className="flex items-center justify-between text-[11px] font-tech">
                <span className="text-cyan-400 font-bold">TOOL #{idx + 1}</span>
                <span className="text-amber-400">{tool.role}</span>
              </div>
              <h3 className="text-base font-bold font-mecha text-white">{tool.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{tool.desc}</p>
              <div className="pt-2 border-t border-slate-800 text-[11px] font-tech text-slate-400">
                <strong className="text-cyan-300">Lưu ý:</strong> {tool.tips}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STEP-BY-STEP ARTICLES BY LEVEL */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-tech text-amber-400 uppercase tracking-wider block">BÀI HƯỚNG DẪN THỰC CHIẾN</span>
            <h2 className="text-2xl font-bold font-mecha text-white">Các Chuyên Đề Lắp Ráp Chi Tiết</h2>
          </div>

          {/* Level Filter */}
          <div className="flex gap-1.5 p-1 bg-slate-950 border border-slate-800">
            {["ALL", "Cơ bản", "Trung cấp", "Nâng cao"].map(lvl => (
              <button
                key={lvl}
                onClick={() => { playMechaClick(); setSelectedLevel(lvl); }}
                className={`px-3 py-1 text-xs font-tech transition-colors ${
                  selectedLevel === lvl
                    ? "bg-amber-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {lvl === "ALL" ? "Tất Cả Cấp Độ" : lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGuides.map(guide => (
            <div
              key={guide.id}
              onClick={() => { playMechaClick(); onSelectGuide(guide); }}
              className="p-6 bg-slate-900 border border-slate-800 hover:border-amber-500/60 transition-all duration-300 tech-box cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-tech text-slate-400">
                  <span className="px-2.5 py-0.5 bg-slate-950 border border-amber-500/40 text-amber-400 font-bold">
                    {guide.level}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {guide.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-mecha text-white group-hover:text-amber-300 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {guide.summary}
                </p>

                <div className="p-3 bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="text-[10px] font-tech text-slate-400 block uppercase font-semibold">
                    DỤNG CỤ CẦN DÙNG ({guide.toolsRequired.length}):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {guide.toolsRequired.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[11px] font-tech text-cyan-300 bg-slate-900 px-2 py-0.5 border border-slate-800">
                        {t.split("(")[0]}
                      </span>
                    ))}
                    {guide.toolsRequired.length > 3 && (
                      <span className="text-[11px] font-tech text-slate-400 self-center">
                        +{guide.toolsRequired.length - 3} dụng cụ khác
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-tech text-amber-400 font-bold">
                <span>XEM CHI TIẾT TỪNG BƯỚC THỰC HIỆN</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
