import React from 'react';
import { ShieldCheck, Heart, ArrowUp, ExternalLink } from 'lucide-react';
import { playMechaClick, playLockOn } from '../utils/sound';

interface Props {
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  const scrollToTop = () => {
    playLockOn();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-cyan-500/30 text-slate-400 mt-20">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-tech">
        {/* Col 1: About */}
        <div className="md:col-span-1 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-600 flex items-center justify-center font-bold text-white font-mecha text-xs">
              G
            </div>
            <span className="text-sm font-bold font-mecha text-white">GUNDAM HANDBOOK</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Dự án cẩm nang kỹ thuật &amp; tri thức Gundam trực quan dành cho cộng đồng đam mê mô hình Gunpla tại Việt Nam. Xây dựng bởi những builder yêu thích cơ khí và nghệ thuật tạo hình.
          </p>
          <div className="text-[11px] text-cyan-400 font-bold">
            "Gunpla is Freedom — Mô hình là sự tự do sáng tạo!"
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold font-mecha text-white uppercase tracking-wider block">
            CHUYÊN MỤC CHÍNH
          </span>
          <ul className="space-y-1.5">
            {[
              { id: "database", label: "Thư viện Mobile Suit" },
              { id: "grades", label: "Phân loại Grade & Tỉ lệ" },
              { id: "building", label: "Hướng dẫn lắp ráp cơ bản" },
              { id: "custom", label: "Kỹ thuật sơn & Weathering" },
              { id: "reviews", label: "Đánh giá mô hình Gunpla" },
              { id: "lore", label: "Biên niên sử vũ trụ Gundam" }
            ].map(link => (
              <li key={link.id}>
                <button
                  onClick={() => { playMechaClick(); onNavigate(link.id); scrollToTop(); }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  &rarr; {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Useful Resources */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold font-mecha text-white uppercase tracking-wider block">
            TÀI NGUYÊN BỔ TRỢ
          </span>
          <ul className="space-y-1.5 text-slate-400">
            <li>• Bảng so sánh kích thước mô hình (Scale Comparator)</li>
            <li>• Bộ trắc nghiệm tìm Gunpla định mệnh (Matcher)</li>
            <li>• Checklist tiến độ lắp ráp tương tác lưu trữ</li>
            <li>• Cảnh báo an toàn hóa chất &amp; phin lọc 3M</li>
            <li>• Quy tắc cắt 2 lần không để lại tì vết (Two-cut)</li>
          </ul>
        </div>

        {/* Col 4: Disclaimer & Bandai Namco Notice */}
        <div className="space-y-2.5 bg-slate-900/60 p-4 border border-slate-800">
          <span className="text-xs font-bold font-mecha text-amber-400 uppercase tracking-wider block flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            LƯU Ý BẢN QUYỀN
          </span>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Đây là trang web cẩm nang cộng đồng phi thương mại (Fan-made project). Gundam, Gunpla, tên nhân vật, thiết kế Mobile Suit và các tài sản liên quan là thương hiệu và bản quyền thuộc về <strong>Bandai Namco Filmworks Inc., Sotsu Co., Ltd.</strong> và tác giả Yoshiyuki Tomino.
          </p>
          <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-800">
            Mọi bài viết và mẹo kỹ thuật được biên soạn vì mục đích giáo dục và chia sẻ sở thích.
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-tech text-slate-500">
          <div>
            © {new Date().getFullYear()} GUNDAM HANDBOOK VIETNAM. Tất cả nội dung tiếng Việt được biên soạn tỉ mỉ.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition-colors group"
          >
            <span>LÊN ĐẦU TRANG</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
