import React, { useState, useMemo } from 'react';
import { Star, Filter, ThumbsUp, ThumbsDown, ArrowRight, RotateCcw, AlertTriangle, ShieldCheck } from 'lucide-react';
import { GUNPLA_REVIEWS, GunplaReview } from '../data/reviews';
import { GundamImage } from '../components/GundamImage';
import { playMechaClick } from '../utils/sound';

interface Props {
  onSelectReview: (review: GunplaReview) => void;
}

export const ReviewsView: React.FC<Props> = ({ onSelectReview }) => {
  const [selectedGrade, setSelectedGrade] = useState<string>("ALL");
  const [selectedAudience, setSelectedAudience] = useState<string>("ALL");
  const [minRating, setMinRating] = useState<number>(0);

  const filteredReviews = useMemo(() => {
    return GUNPLA_REVIEWS.filter(rev => {
      const matchGrade = selectedGrade === "ALL" || rev.grade === selectedGrade;
      const matchAudience = selectedAudience === "ALL" || rev.suitableFor === selectedAudience;
      const matchRating = rev.overallRating >= minRating;
      return matchGrade && matchAudience && matchRating;
    });
  }, [selectedGrade, selectedAudience, minRating]);

  const resetFilters = () => {
    playMechaClick();
    setSelectedGrade("ALL");
    setSelectedAudience("ALL");
    setMinRating(0);
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* Header */}
      <div className="pb-6 border-b border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-xs font-tech text-red-400 uppercase tracking-wider">
          <Star className="w-4 h-4 fill-red-400 text-red-400" />
          <span>GUNPLA BENCHMARKS // ĐÁNH GIÁ &amp; GỢI Ý MUA MÔ HÌNH</span>
        </div>
        <h1 className="text-3xl font-bold font-mecha text-white">
          Đánh Giá &amp; Gợi Ý Các Bộ Gunpla Đáng Mua Nhất
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Phân tích khách quan từng mẫu kit nổi bật: khớp nối cử động, độ chi tiết khung xương, giá trị trên giá tiền và lời khuyên chân thực cho từng cấp độ người chơi.
        </p>
      </div>

      {/* Transparent Disclaimer Box */}
      <div className="p-4 bg-slate-900 border border-slate-800 text-xs font-tech text-slate-400 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-white block mb-0.5">LƯU Ý MINH BẠCH VỀ DỮ LIỆU ĐÁNH GIÁ &amp; GIÁ BÁN:</strong>
          Các mức giá (VNĐ) và đánh giá trong chuyên mục này là thông tin tổng hợp tham khảo từ cộng đồng builder và giá bán trung bình của các đại lý phân phối chính ngạch, không phải báo giá thương mại hay cam kết tồn kho thực tế của bất kỳ cửa hàng nào.
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 bg-slate-900 border border-slate-800 tech-box space-y-4">
        {/* Grade Filters */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-tech text-slate-400 uppercase block font-semibold">
            LỌC THEO CẤP ĐỘ (GRADE):
          </span>
          <div className="flex flex-wrap gap-1.5">
            {["ALL", "EG", "HG", "RG", "MG", "PG"].map(grade => (
              <button
                key={grade}
                onClick={() => { playMechaClick(); setSelectedGrade(grade); }}
                className={`px-3 py-1.5 text-xs font-tech transition-colors ${
                  selectedGrade === grade
                    ? "bg-red-600 text-white font-bold"
                    : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {grade === "ALL" ? "Tất Cả Grade" : grade}
              </button>
            ))}
          </div>
        </div>

        {/* Target Audience Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-tech text-slate-400 mr-2 uppercase">ĐỐI TƯỢNG PHÙ HỢP:</span>
            {["ALL", "Người mới bắt đầu", "Người chơi phong trào", "Builder trung cấp", "Builder kỳ cựu"].map(aud => (
              <button
                key={aud}
                onClick={() => { playMechaClick(); setSelectedAudience(aud); }}
                className={`px-2.5 py-1 text-[11px] font-tech transition-colors ${
                  selectedAudience === aud
                    ? "bg-cyan-500 text-slate-950 font-bold"
                    : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {aud === "ALL" ? "Tất Cả" : aud}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs font-tech text-slate-400">
            <span>Hiển thị: <strong className="text-white">{filteredReviews.length}</strong> bài đánh giá</span>
            {(selectedGrade !== "ALL" || selectedAudience !== "ALL") && (
              <button onClick={resetFilters} className="text-red-400 hover:underline flex items-center gap-1">
                <RotateCcw className="w-3 h-3" />
                Đặt lại
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map(rev => (
          <div
            key={rev.id}
            className="bg-slate-900 border border-slate-800 hover:border-red-500/50 transition-all duration-300 tech-box flex flex-col justify-between group"
          >
            <div>
              <div className="flex flex-col sm:flex-row gap-4 p-5 pb-0">
                <GundamImage
                  src={rev.image}
                  alt={rev.name}
                  modelCode={rev.grade}
                  badge={`${rev.overallRating} ★`}
                  className="w-full sm:w-44 h-40 border border-slate-800 shrink-0"
                />

                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-tech">
                    <span className="text-cyan-400 font-bold">{rev.grade} · {rev.scale}</span>
                    <span className="text-slate-400">Ra mắt: {rev.releaseYear}</span>
                  </div>

                  <h3 className="text-lg font-bold font-mecha text-white group-hover:text-red-400 transition-colors">
                    {rev.name}
                  </h3>

                  <div className="text-xs font-tech text-amber-400">
                    Giá tham khảo: <strong className="text-white">{rev.priceRefVND}</strong>
                  </div>

                  <div className="text-[11px] font-tech text-slate-400">
                    Khuyên dùng cho: <span className="text-cyan-300">{rev.suitableFor}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <p className="text-xs text-slate-300 italic p-3 bg-slate-950 border-l-2 border-cyan-500">
                  "{rev.verdict}"
                </p>

                {/* Pros & Cons Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 bg-slate-950 border border-emerald-500/20 text-slate-300 space-y-1">
                    <span className="text-emerald-400 font-tech font-bold block flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" /> Ưu điểm chính
                    </span>
                    <p className="truncate">• {rev.pros[0]}</p>
                  </div>
                  <div className="p-2.5 bg-slate-950 border border-red-500/20 text-slate-300 space-y-1">
                    <span className="text-red-400 font-tech font-bold block flex items-center gap-1">
                      <ThumbsDown className="w-3 h-3" /> Cần lưu ý
                    </span>
                    <p className="truncate">• {rev.cons[0]}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => { playMechaClick(); onSelectReview(rev); }}
                className="w-full py-2.5 bg-slate-950 hover:bg-red-950/40 border border-slate-800 hover:border-red-500/50 text-xs font-tech text-red-400 flex items-center justify-center gap-1.5 transition-colors font-bold"
              >
                <span>Xem Bảng Điểm &amp; Phân Tích Chi Tiết</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
