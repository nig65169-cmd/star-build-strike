import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { playLockOn } from '../utils/sound';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playLockOn();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/30 border border-red-400 group transition-all duration-300 hover:scale-105 active:scale-95"
      title="Động cơ phản lực: Lên đầu trang"
    >
      <Rocket className="w-5 h-5 -rotate-45 group-hover:-translate-y-1 transition-transform" />
      <span className="sr-only">Lên đầu trang</span>
    </button>
  );
};
