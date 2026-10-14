import React from 'react';
import { X, Star, ThumbsUp, ThumbsDown, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { GunplaReview } from '../data/reviews';
import { GundamImage } from './GundamImage';
import { playMechaClick } from '../utils/sound';

interface Props {
  review: GunplaReview | null;
  onClose: () => void;
}

export const ReviewDetailModal: React.FC<Props> = ({ review, onClose }) => {
  if (!review) return null;

  const scoreBars = [
    { label: "Biên độ pose dáng & Khớp cử động", value: review.scores.articulation },
    { label: "Cấu trúc khung xương cơ khí", value: review.scores.innerFrame },
    { label: "Độ sắc nét & Chi tiết mặt giáp", value: review.scores.surfaceDetail },
    { label: "Trải nghiệm thỏa mãn khi lắp ráp", value: review.scores.buildEnjoyment },
    { label: "Giá trị nhận lại trên tầm giá tiền", value: review.scores.valueForMoney },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-slate-950 border border-slate-800 text-slate-100 shadow-2xl shadow-cyan-950/40 tech-box"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 py-3.5 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-tech text-cyan-400">
            <span>GUNPLA BENCHMARK REVIEW //</span>
            <span className="text-white font-bold">{review.grade} {review.scale}</span>
          </div>

          <button
            onClick={() => { playMechaClick(); onClose(); }}
            className="p-1.5 border border-slate-800 hover:border-red-500 hover:text-red-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Main Info */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <GundamImage
              src={review.image}
              alt={review.name}
              modelCode={review.grade}
              badge={`${review.overallRating} / 5.0 ★`}
              className="w-full sm:w-56 h-48 border border-slate-800 shrink-0"
            />

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 text-xs font-tech text-slate-400">
                <span>Năm phát hành: {review.releaseYear}</span>
                <span>·</span>
                <span className="text-cyan-400">Phù hợp: {review.suitableFor}</span>
              </div>
              <h2 className="text-2xl font-bold font-mecha text-white">{review.name}</h2>
              <div className="flex items-center gap-2 text-xs font-tech text-amber-400">
                <span>Mức giá tham khảo:</span>
                <span className="text-sm font-bold text-white">{review.priceRefVND}</span>
              </div>
              <p className="text-xs text-slate-300 italic p-3 bg-slate-900/70 border-l-2 border-cyan-500 mt-2">
                "{review.verdict}"
              </p>
            </div>
          </div>

          {/* Performance Radar Bar Chart */}
          <div className="bg-slate-900/80 border border-slate-800 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-tech text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              <span>ĐÁNH GIÁ ĐIỂM SỐ CHI TIẾT (THANG 5 ĐIỂM)</span>
              <span className="text-amber-400 font-bold">{review.overallRating} / 5.0 TỔNG ĐIỂM</span>
            </div>

            <div className="space-y-3 pt-1">
              {scoreBars.map((bar, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-tech">
                    <span className="text-slate-300">{bar.label}</span>
                    <span className="text-cyan-400 font-bold">{bar.value} / 5.0</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 overflow-hidden border border-slate-800">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                      style={{ width: `${(bar.value / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-tech text-emerald-400 uppercase tracking-wider font-bold">
                <ThumbsUp className="w-4 h-4" />
                <span>Điểm Ưu Tuyệt Vời (Pros)</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {review.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-red-950/20 border border-red-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-tech text-red-400 uppercase tracking-wider font-bold">
                <ThumbsDown className="w-4 h-4" />
                <span>Điểm Cần Lưu Ý (Cons)</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {review.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Builder Notes */}
          <div className="p-4 bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-tech text-amber-400 uppercase tracking-wider font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Lời Khuyên Thực Chiến Khi Lắp Ráp</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {review.buildNotes}
            </p>
          </div>

          {/* Price & Stock Disclaimer */}
          <div className="text-[11px] font-tech text-slate-400 bg-slate-950 p-3 border border-slate-800/80">
            * LƯU Ý MINH BẠCH: Mức giá và đánh giá trên là thông tin tham khảo tổng hợp từ cộng đồng Gunpla quốc tế và các đại lý bán lẻ chính hãng Bandai, không phải báo giá thương mại hay cam kết tồn kho tại thời điểm hiện tại.
          </div>
        </div>
      </div>
    </div>
  );
};
