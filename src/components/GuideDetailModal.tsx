import React from 'react';
import { X, Wrench, ShieldAlert, AlertTriangle, Lightbulb, CheckSquare, Clock } from 'lucide-react';
import { GuideArticle } from '../data/guides';
import { playMechaClick } from '../utils/sound';

interface Props {
  guide: GuideArticle | null;
  onClose: () => void;
}

export const GuideDetailModal: React.FC<Props> = ({ guide, onClose }) => {
  if (!guide) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-950 border border-slate-800 text-slate-100 shadow-2xl shadow-cyan-950/40 tech-box"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 py-3.5 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-tech text-cyan-400">
            <span>TECHNICAL MANUAL // </span>
            <span className="text-white font-bold uppercase">{guide.category === 'building' ? 'HƯỚNG DẪN LẮP RÁP' : 'SƠN & CUSTOM MÔ HÌNH'}</span>
            <span>·</span>
            <span className="text-amber-400">{guide.level}</span>
          </div>

          <button
            onClick={() => { playMechaClick(); onClose(); }}
            className="p-1.5 border border-slate-800 hover:border-red-500 hover:text-red-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Article Header */}
          <div>
            <div className="flex items-center gap-3 text-xs font-tech text-slate-400 mb-2">
              <span className="flex items-center gap-1 text-cyan-400">
                <Clock className="w-3.5 h-3.5" />
                {guide.readTime}
              </span>
              <span>·</span>
              <span>CẤP ĐỘ: {guide.level}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-mecha text-white leading-tight">
              {guide.title}
            </h1>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed bg-slate-900/60 p-4 border-l-2 border-cyan-500">
              {guide.summary}
            </p>
          </div>

          {/* Safety Warnings if applicable */}
          {guide.safetyTips && guide.safetyTips.length > 0 && (
            <div className="p-4 bg-red-950/30 border border-red-500/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-tech text-red-400 font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-red-500" />
                <span>CẢNH BÁO AN TOÀN SỨC KHỎE (SAFETY PROTOCOL)</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {guide.safetyTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">!</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools Required */}
          <div className="p-4 bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-wider font-bold">
              <Wrench className="w-4 h-4" />
              <span>Dụng Cụ Cần Thiết Cho Bài Thực Hành Này</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {guide.toolsRequired.map((tool, idx) => (
                <div key={idx} className="p-2.5 bg-slate-950 border border-slate-800 flex items-start gap-2">
                  <span className="text-cyan-500 font-tech font-bold">[{idx + 1}]</span>
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-mecha text-white flex items-center gap-2 border-b border-slate-800 pb-2">
              <CheckSquare className="w-5 h-5 text-cyan-400" />
              Quy Trình Thực Hiện Từng Bước Chuẩn Kỹ Thuật
            </h3>

            <div className="space-y-4">
              {guide.steps.map((st, idx) => (
                <div key={idx} className="p-4 bg-slate-900/60 border border-slate-800 space-y-2.5">
                  <h4 className="text-sm font-bold font-mecha text-white flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-cyan-950 border border-cyan-500/40 text-cyan-400 text-xs font-tech">
                      0{idx + 1}
                    </span>
                    {st.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-8">
                    {st.description}
                  </p>

                  {st.proTip && (
                    <div className="ml-8 p-3 bg-amber-950/20 border-l-2 border-amber-500 text-xs text-amber-200 flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Mẹo nhà nghề (Pro Tip):</strong> {st.proTip}</span>
                    </div>
                  )}

                  {st.warning && (
                    <div className="ml-8 p-3 bg-red-950/30 border-l-2 border-red-500 text-xs text-red-200 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span><strong>Lưu ý chí mạng:</strong> {st.warning}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="p-4 bg-slate-900 border border-slate-800 space-y-2">
            <h4 className="text-xs font-tech text-amber-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              Các Sai Lầm Thường Gặp Cần Tuyệt Đối Tránh
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {guide.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
