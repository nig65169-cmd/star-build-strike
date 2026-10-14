import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  Heart, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Layers, 
  Wrench, 
  Palette, 
  Star, 
  BookOpen, 
  Home,
  Crosshair
} from 'lucide-react';
import { playMechaClick } from '../utils/sound';

interface Props {
  currentSection: string;
  onNavigate: (section: string) => void;
  favoritesCount: number;
  onOpenSearch: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<Props> = ({
  currentSection,
  onNavigate,
  favoritesCount,
  onOpenSearch,
  soundEnabled,
  onToggleSound,
  isDarkMode,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Trang Chủ", icon: Home },
    { id: "database", label: "Thư Viện Gundam", icon: Crosshair },
    { id: "grades", label: "Cấp Độ Gunpla", icon: Layers },
    { id: "building", label: "Hướng Dẫn Lắp Ráp", icon: Wrench },
    { id: "custom", label: "Sơn & Custom", icon: Palette },
    { id: "reviews", label: "Đánh Giá Mô Hình", icon: Star },
    { id: "lore", label: "Kiến Thức Lore", icon: BookOpen }
  ];

  const handleNav = (id: string) => {
    playMechaClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 border-b border-cyan-500/30 backdrop-blur-md">
      {/* Top micro HUD ticker line */}
      <div className="hidden sm:flex justify-between items-center px-6 py-1 bg-slate-900/80 border-b border-slate-800/80 text-[10px] font-tech text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            SYS.ONLINE // GUNDAM HANDBOOK CORE 2.4
          </span>
          <span>·</span>
          <span>LOCATION: VIETNAM GUNPLA BUILDER COMMUNITY</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>ALL UNITS STATUS: GREEN</span>
          <span className="text-red-400 font-bold">BANDAI HOBBY SPEC</span>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          {/* Futuristic Mecha V-Fin Emblem */}
          <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-red-700 border border-red-400 flex items-center justify-center font-mecha font-bold text-white text-base shadow-sm group-hover:shadow-red-600/40 transition-shadow relative">
            <span>G</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400" />
          </div>

          <div>
            <div className="text-base sm:text-lg font-bold font-mecha text-white tracking-wider flex items-center gap-1">
              <span>GUNDAM</span>
              <span className="text-cyan-400">HANDBOOK</span>
            </div>
            <span className="text-[10px] font-tech text-slate-400 block -mt-1 tracking-widest">
              CẨM NANG GUNPLA TOÀN DIỆN
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = currentSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-3 py-1.5 text-xs font-mecha font-semibold tracking-wide transition-all relative ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-white hover:bg-slate-900"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan-400 shadow-sm shadow-cyan-400" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <button
            onClick={() => { playMechaClick(); onOpenSearch(); }}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-xs font-tech text-slate-300 hover:text-white transition-colors"
            title="Tìm kiếm (Search)"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Tìm kiếm</span>
            <kbd className="hidden md:inline px-1 bg-slate-950 text-[10px] text-slate-500 border border-slate-800 font-tech">
              /
            </kbd>
          </button>

          {/* Favorites Button with Badge */}
          <button
            onClick={() => handleNav("favorites")}
            className={`relative p-2 border transition-all ${
              currentSection === "favorites"
                ? "border-red-500 bg-red-950/40 text-red-400"
                : "border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
            title="Mục yêu thích"
          >
            <Heart className={`w-4 h-4 ${favoritesCount > 0 ? "fill-red-500 text-red-500" : ""}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-600 text-white text-[9px] font-tech font-bold flex items-center justify-center rounded-full">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => { playMechaClick(); onToggleSound(); }}
            className={`p-2 border transition-colors ${
              soundEnabled
                ? "border-cyan-500/40 bg-slate-900 text-cyan-400"
                : "border-slate-800 bg-slate-900 text-slate-500"
            }`}
            title={soundEnabled ? "Tắt âm thanh giao diện" : "Bật âm thanh giao diện"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Toggle (Dark / Light) */}
          <button
            onClick={() => { playMechaClick(); onToggleTheme(); }}
            className="p-2 border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            title={isDarkMode ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối"}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => { playMechaClick(); setMobileMenuOpen(!mobileMenuOpen); }}
            className="xl:hidden p-2 border border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-cyan-500/40 p-4 space-y-1 animate-in slide-in-from-top">
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = currentSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`w-full flex items-center gap-3 p-2.5 text-xs font-mecha font-semibold transition-all border ${
                  isActive
                    ? "bg-cyan-950/60 border-cyan-500/50 text-cyan-400"
                    : "border-transparent text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
