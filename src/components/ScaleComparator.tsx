import React, { useState } from 'react';
import { Ruler, Maximize2, Layers, Info } from 'lucide-react';
import { playMechaClick } from '../utils/sound';

export const ScaleComparator: React.FC = () => {
  const [selectedScale, setSelectedScale] = useState<string>("1/144");

  const scales = [
    {
      scale: "1/144",
      grade: "EG / HG / RG",
      heightCm: 12.5,
      pixelHeight: 110,
      color: "from-cyan-500 to-blue-600",
      realLifeHeightM: 18,
      parts: "60 - 400 pcs",
      bestFor: "Sưu tầm số lượng lớn, để bàn làm việc gọn nhẹ",
      description: "Tỉ lệ phổ biến nhất. Chiều cao khoảng 12 - 14 cm, tương đương một bàn tay người lớn."
    },
    {
      scale: "1/100",
      grade: "MG / Full Mechanics",
      heightCm: 18.0,
      pixelHeight: 160,
      color: "from-amber-500 to-orange-600",
      realLifeHeightM: 18,
      parts: "300 - 650 pcs",
      bestFor: "Tỉ lệ vàng cầm đầm tay, khung xương cơ học hoàn chỉnh",
      description: "Tỉ lệ tiêu chuẩn yêu thích của mọi builder. Cao khoảng 18 - 22 cm, chi tiết cơ khí sắc nét."
    },
    {
      scale: "1/60",
      grade: "Perfect Grade (PG)",
      heightCm: 30.0,
      pixelHeight: 250,
      color: "from-red-500 to-rose-700",
      realLifeHeightM: 18,
      parts: "800 - 1500+ pcs",
      bestFor: "Trưng bày sảnh lớn, đèn LED tỏa sáng, đỉnh cao kỹ nghệ",
      description: "Kích thước đồ sộ hơn 30 cm, nặng tay, khung xương đa tầng và hệ thống đèn LED."
    },
    {
      scale: "1/48",
      grade: "Mega Size Model",
      heightCm: 37.5,
      pixelHeight: 310,
      color: "from-purple-500 to-indigo-600",
      realLifeHeightM: 18,
      parts: "200 - 250 pcs",
      bestFor: "Tượng khổng lồ, ráp nhanh, điểm nhấn phòng khách",
      description: "Tỉ lệ lớn nhất dòng phổ thông với chiều cao gần 40 cm, uy nghi như tượng đài."
    }
  ];

  const current = scales.find(s => s.scale === selectedScale) || scales[0];

  return (
    <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-none relative overflow-hidden tech-box">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-tech tracking-wider uppercase">
            <Ruler className="w-4 h-4" />
            <span>INTERACTIVE TOOL // TỈ LỆ THỰC TẾ</span>
          </div>
          <h3 className="text-xl font-bold font-mecha text-white mt-1">
            Bảng So Sánh Kích Thước Các Tỷ Lệ Gunpla
          </h3>
        </div>

        {/* Scale Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950/80 border border-slate-800">
          {scales.map(s => (
            <button
              key={s.scale}
              onClick={() => {
                playMechaClick();
                setSelectedScale(s.scale);
              }}
              className={`px-3 py-1.5 text-xs font-tech font-bold transition-all ${
                selectedScale === s.scale
                  ? "bg-cyan-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              {s.scale} ({s.grade.split(" ")[0]})
            </button>
          ))}
        </div>
      </div>

      {/* Visual comparison canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-center">
        {/* Scale graphic viewer */}
        <div className="lg:col-span-7 bg-slate-950/70 border border-slate-800/80 p-6 min-h-[360px] flex items-end justify-center gap-4 sm:gap-8 relative bg-mecha-grid">
          {/* Height grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none p-4 opacity-20">
            <div className="border-b border-dashed border-cyan-400 flex justify-between text-[10px] font-tech text-cyan-400">
              <span>40 CM (MEGA SIZE)</span>
              <span>1/48</span>
            </div>
            <div className="border-b border-dashed border-red-400 flex justify-between text-[10px] font-tech text-red-400">
              <span>30 CM (PG)</span>
              <span>1/60</span>
            </div>
            <div className="border-b border-dashed border-amber-400 flex justify-between text-[10px] font-tech text-amber-400">
              <span>18 CM (MG)</span>
              <span>1/100</span>
            </div>
            <div className="border-b border-dashed border-cyan-400 flex justify-between text-[10px] font-tech text-cyan-400">
              <span>13 CM (HG/RG/EG)</span>
              <span>1/144</span>
            </div>
            <div className="border-b border-slate-700 flex justify-between text-[10px] font-tech text-slate-500">
              <span>MẶT SÀN (0 CM)</span>
              <span>BASE LINE</span>
            </div>
          </div>

          {/* Human reference silhouette */}
          <div className="flex flex-col items-center z-10 opacity-75">
            <div className="w-5 h-16 bg-slate-600/70 rounded-t-sm flex items-center justify-center text-[9px] font-tech text-slate-300">
              Người
            </div>
            <span className="text-[10px] font-tech text-slate-400 mt-2">175 cm (Đời thực)</span>
          </div>

          {/* Scale models */}
          {scales.map(s => {
            const isSelected = s.scale === selectedScale;
            return (
              <div
                key={s.scale}
                onClick={() => {
                  playMechaClick();
                  setSelectedScale(s.scale);
                }}
                className="flex flex-col items-center cursor-pointer group z-10 transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Mecha silhouette representation */}
                <div
                  style={{ height: `${s.pixelHeight}px` }}
                  className={`w-10 sm:w-14 rounded-t-sm border transition-all duration-300 flex flex-col justify-between items-center p-1 relative ${
                    isSelected
                      ? `bg-gradient-to-t ${s.color} border-white shadow-lg shadow-cyan-500/20`
                      : "bg-slate-800/80 border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <span className={`text-[9px] font-tech font-bold ${isSelected ? "text-slate-950 bg-white/90 px-1" : "text-slate-400"}`}>
                    {s.scale}
                  </span>

                  {/* V-fin icon */}
                  <div className={`w-3 h-1.5 border-b-2 border-x-2 rotate-180 ${isSelected ? "border-slate-950" : "border-slate-500"}`} />

                  <span className={`text-[10px] font-tech font-bold ${isSelected ? "text-white" : "text-slate-400"}`}>
                    {s.heightCm} cm
                  </span>
                </div>

                <span className={`text-[11px] font-bold font-tech mt-2 ${isSelected ? "text-cyan-400" : "text-slate-400"}`}>
                  {s.grade.split(" ")[0]}
                </span>
              </div>
            );
          })}
        </div>

        {/* Selected Scale Details Info */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-tech text-slate-400">DÒNG SẢN PHẨM</span>
              <span className="text-sm font-bold font-mecha text-cyan-400">{current.grade}</span>
            </div>
            
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-400">Chiều cao mô hình:</span>
                <span className="font-tech font-bold text-white">~{current.heightCm} cm</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-400">Chiều cao nguyên mẫu mecha:</span>
                <span className="font-tech text-white">18.0 mét (Mobile Suit chuẩn)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-400">Số lượng linh kiện ước tính:</span>
                <span className="font-tech text-cyan-400">{current.parts}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-400">Đề xuất thích hợp:</span>
                <span className="font-medium text-amber-400 text-right max-w-[200px]">{current.bestFor}</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 border-l-2 border-cyan-500">
              {current.description}
            </p>
          </div>

          <div className="text-[11px] text-slate-400 flex items-start gap-2">
            <Info className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
            <span>
              Mẹo: Các mẫu Mobile Suit cỡ lớn như Sazabi, Nu Gundam, hay Penelope ở cùng tỉ lệ 1/144 sẽ có chiều cao thực tế lớn hơn RX-78-2 từ 20% đến 40%.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
