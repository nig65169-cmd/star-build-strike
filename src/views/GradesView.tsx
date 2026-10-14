import React, { useState } from 'react';
import { Layers, CheckCircle2, AlertCircle, ArrowRight, Award, Compass, Sparkles } from 'lucide-react';
import { GUNPLA_GRADES, GunplaGrade } from '../data/grades';
import { ScaleComparator } from '../components/ScaleComparator';
import { playMechaClick } from '../utils/sound';

export const GradesView: React.FC = () => {
  const [selectedGradeId, setSelectedGradeId] = useState<string>("entry-grade");

  const selectedGrade = GUNPLA_GRADES.find(g => g.id === selectedGradeId) || GUNPLA_GRADES[0];

  return (
    <div className="space-y-12 animate-in fade-in">
      {/* Header */}
      <div className="pb-6 border-b border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-wider">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>GUNPLA CLASSIFICATION SYSTEM // PHÂN CẤP CÁC DÒNG MÔ HÌNH</span>
        </div>
        <h1 className="text-3xl font-bold font-mecha text-white">
          Cẩm Nang Phân Cấp Cấp Độ Gunpla (Grades Guide)
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Tìm hiểu toàn diện về các dòng mô hình Gunpla của Bandai: tỷ lệ thu nhỏ, cấu trúc khung xương, số lượng chi tiết, độ khó lắp ráp và đối tượng người chơi phù hợp.
        </p>
      </div>

      {/* 1. INTERACTIVE SCALE COMPARATOR EMBED */}
      <section>
        <ScaleComparator />
      </section>

      {/* 2. DETAILED GRADES DEEP-DIVE WITH SELECTOR */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-tech text-cyan-400 uppercase tracking-wider block">CHI TIẾT TỪNG PHÂN HỆ</span>
            <h2 className="text-2xl font-bold font-mecha text-white">Khám Phá Sâu Từng Dòng Sản Phẩm</h2>
          </div>
          <span className="text-xs font-tech text-slate-500">CHỌN CẤP ĐỘ ĐỂ XEM ĐẦY ĐỦ THÔNG SỐ</span>
        </div>

        {/* Grade tabs */}
        <div className="flex flex-wrap gap-2">
          {GUNPLA_GRADES.map(grade => (
            <button
              key={grade.id}
              onClick={() => { playMechaClick(); setSelectedGradeId(grade.id); }}
              className={`px-3 py-2 text-xs font-tech font-bold transition-all border ${
                selectedGradeId === grade.id
                  ? "border-cyan-400 bg-cyan-950/60 text-white shadow-md shadow-cyan-500/10"
                  : "border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              <span className="text-cyan-400 mr-1.5">{grade.code}</span>
              <span>{grade.name.split("(")[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Grade Profile Card */}
        <div className="bg-slate-900 border border-slate-800 p-6 tech-box space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-tech text-slate-400 mb-1">
                <span className="text-cyan-400 font-bold">{selectedGrade.scale}</span>
                <span>·</span>
                <span>{selectedGrade.avgHeight}</span>
                <span>·</span>
                <span className="text-amber-400 font-bold">{selectedGrade.iconTag}</span>
              </div>
              <h3 className="text-2xl font-bold font-mecha text-white">
                {selectedGrade.name} ({selectedGrade.code})
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-tech">
              <span className="text-slate-400">ĐỘ KHÓ THỰC HIỆN:</span>
              <div className="flex text-amber-400 font-bold">
                {"★".repeat(Math.floor(selectedGrade.difficulty))}
                {"☆".repeat(5 - Math.floor(selectedGrade.difficulty))}
                <span className="ml-1 text-slate-300">({selectedGrade.difficulty}/5)</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 border border-slate-800/80">
            {selectedGrade.description}
          </p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-950 border border-slate-800/80 p-4">
            <div>
              <span className="text-[10px] font-tech text-slate-500 block uppercase">Khung xương bên trong</span>
              <span className="font-tech text-cyan-400 font-bold">{selectedGrade.innerFrame}</span>
            </div>
            <div>
              <span className="text-[10px] font-tech text-slate-500 block uppercase">Số lượng chi tiết part</span>
              <span className="font-tech text-white font-bold">{selectedGrade.partCount}</span>
            </div>
            <div>
              <span className="text-[10px] font-tech text-slate-500 block uppercase">Thời gian lắp ước tính</span>
              <span className="font-tech text-amber-400 font-bold">{selectedGrade.buildTime}</span>
            </div>
            <div>
              <span className="text-[10px] font-tech text-slate-500 block uppercase">Khoảng giá tham khảo</span>
              <span className="font-tech text-emerald-400 font-bold">{selectedGrade.priceRefVND}</span>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-950 border border-emerald-500/30 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-tech text-emerald-400 uppercase font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ưu điểm vượt trội</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedGrade.pros.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400">+</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-slate-950 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-tech text-amber-400 uppercase font-bold">
                <AlertCircle className="w-4 h-4" />
                <span>Nhược điểm & Điểm cần lưu ý</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedGrade.cons.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400">-</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Kits in this grade */}
          <div className="p-4 bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-tech text-cyan-400 uppercase font-bold block">
              MẪU TIÊU BIỂU KHUYÊN DÙNG TRONG PHÂN CẤP NÀY:
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedGrade.recommendedKits.map((kit, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-900 border border-cyan-500/30 text-slate-200 text-xs font-tech font-semibold"
                >
                  {kit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIDE-BY-SIDE MASTER COMPARISON TABLE */}
      <section className="space-y-4">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-tech text-cyan-400 uppercase tracking-wider block">BẢNG TỔNG KẾT SO SÁNH TRỰC QUAN</span>
          <h2 className="text-2xl font-bold font-mecha text-white">So Sánh Nhanh Toàn Diện Các Grade</h2>
        </div>

        <div className="overflow-x-auto border border-slate-800 tech-box">
          <table className="w-full text-left text-xs font-tech">
            <thead className="bg-slate-950 border-b border-slate-800 text-cyan-400 uppercase">
              <tr>
                <th className="p-3.5">Cấp độ (Grade)</th>
                <th className="p-3.5">Tỷ lệ</th>
                <th className="p-3.5">Chiều cao</th>
                <th className="p-3.5">Khung xương</th>
                <th className="p-3.5">Số lượng Part</th>
                <th className="p-3.5">Thời gian ráp</th>
                <th className="p-3.5">Độ khó</th>
                <th className="p-3.5">Mức giá tham khảo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
              {GUNPLA_GRADES.map(g => (
                <tr
                  key={g.id}
                  onClick={() => { playMechaClick(); setSelectedGradeId(g.id); }}
                  className={`hover:bg-slate-800/50 cursor-pointer transition-colors ${
                    selectedGradeId === g.id ? "bg-cyan-950/40 text-cyan-300" : "text-slate-300"
                  }`}
                >
                  <td className="p-3.5 font-bold font-mecha text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: g.badgeColor }} />
                    {g.code} - {g.name.split(" ")[0]}
                  </td>
                  <td className="p-3.5 font-semibold text-cyan-400">{g.scale}</td>
                  <td className="p-3.5">{g.avgHeight}</td>
                  <td className="p-3.5">{g.innerFrame}</td>
                  <td className="p-3.5">{g.partCount}</td>
                  <td className="p-3.5 text-amber-400">{g.buildTime}</td>
                  <td className="p-3.5">{"★".repeat(Math.floor(g.difficulty))}</td>
                  <td className="p-3.5 text-emerald-400">{g.priceRefVND}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. BEGINNER'S ADVICE SUMMARY */}
      <section className="bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 p-6 tech-box space-y-3">
        <div className="flex items-center gap-2 text-xs font-tech text-amber-400 uppercase font-bold">
          <Sparkles className="w-4 h-4" />
          <span>LỜI KHUYÊN VÀNG CHO NGƯỜI MỚI BẮT ĐẦU (NEWBIE)</span>
        </div>
        <h3 className="text-xl font-bold font-mecha text-white">
          Nên Chọn Mẫu Nào Làm Kit Đầu Tiên Trong Đời?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Đừng vội mua ngay một mẫu Real Grade hay Master Grade phức tạp chỉ vì nhìn trên ảnh quá ngầu. Lời khuyên chân thành từ các Master Builder là hãy bắt đầu bằng một mẫu <strong>Entry Grade (EG 1/144 RX-78-2 hoặc Strike)</strong> để làm quen với thao tác, hoặc một mẫu <strong>High Grade đời mới (như HG Gundam Aerial, HGUC Revive)</strong>. Bạn sẽ cảm nhận được niềm vui hoàn thiện một tác phẩm trọn vẹn trong vài giờ mà không bị stress vì chi tiết quá bé hay gãy part.
        </p>
      </section>
    </div>
  );
};
