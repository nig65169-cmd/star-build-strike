/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { GundamDetailModal } from './components/GundamDetailModal';
import { ReviewDetailModal } from './components/ReviewDetailModal';
import { GuideDetailModal } from './components/GuideDetailModal';
import { SearchModal } from './components/SearchModal';
import { HomeView } from './views/HomeView';
import { DatabaseView } from './views/DatabaseView';
import { GradesView } from './views/GradesView';
import { BuildingView } from './views/BuildingView';
import { CustomView } from './views/CustomView';
import { ReviewsView } from './views/ReviewsView';
import { LoreView } from './views/LoreView';
import { FavoritesView } from './components/FavoritesView';
import { MobileSuit } from './data/gundams';
import { GunplaReview } from './data/reviews';
import { GuideArticle } from './data/guides';
import { getSoundEnabled, setSoundEnabled } from './utils/sound';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>("home");

  // Favorites state with localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("gundam_favorites");
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return ["rx-78-2", "rx-0-unicorn", "asw-g-08-barbatos-lupus-rex"];
  });

  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem("gundam_theme");
      if (saved !== null) return saved === "dark";
    } catch {
      // Ignore
    }
    return true;
  });

  // Sound state
  const [soundOn, setSoundOn] = useState<boolean>(() => getSoundEnabled());

  // Modals state
  const [activeSuit, setActiveSuit] = useState<MobileSuit | null>(null);
  const [activeReview, setActiveReview] = useState<GunplaReview | null>(null);
  const [activeGuide, setActiveGuide] = useState<GuideArticle | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Sync theme to HTML root
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    try {
      localStorage.setItem("gundam_theme", isDarkMode ? "dark" : "light");
    } catch {
      // Ignore
    }
  }, [isDarkMode]);

  // Sync favorites
  useEffect(() => {
    try {
      localStorage.setItem("gundam_favorites", JSON.stringify(favorites));
    } catch {
      // Ignore
    }
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const exists = prev.includes(id);
      if (exists) {
        showToast("Đã xóa khỏi danh sách yêu thích");
        return prev.filter(item => item !== id);
      } else {
        showToast("Đã lưu Mobile Suit vào mục yêu thích!");
        return [...prev, id];
      }
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(item => item !== id));
    showToast("Đã xóa khỏi danh sách yêu thích");
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    showToast("Đã dọn dẹp toàn bộ kho yêu thích");
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    setSoundEnabled(nextState);
    showToast(nextState ? "Đã bật hiệu ứng âm thanh Mecha" : "Đã tắt âm thanh");
  };

  // Keyboard shortcut listener for '/' to search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !searchOpen && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === 'Escape') {
        setSearchOpen(false);
        setActiveSuit(null);
        setActiveReview(null);
        setActiveGuide(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"
    }`}>
      {/* HUD Background Tech Grids */}
      <div className="fixed inset-0 bg-mecha-grid pointer-events-none opacity-20 z-0" />

      {/* Interactive Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 bg-slate-900/95 border border-cyan-500/60 text-cyan-300 text-xs font-tech tracking-wide shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Sticky Navbar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={(sec) => {
          setCurrentSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        favoritesCount={favorites.length}
        onOpenSearch={() => setSearchOpen(true)}
        soundEnabled={soundOn}
        onToggleSound={toggleSound}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Active Main View Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-8 pb-16 relative z-10">
        {currentSection === "home" && (
          <HomeView
            onNavigate={(sec) => {
              setCurrentSection(sec);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectSuit={(suit) => setActiveSuit(suit)}
            onSelectGuide={(guide) => setActiveGuide(guide)}
            onSelectReview={(rev) => setActiveReview(rev)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {currentSection === "database" && (
          <DatabaseView
            onSelectSuit={(suit) => setActiveSuit(suit)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {currentSection === "grades" && (
          <GradesView />
        )}

        {currentSection === "building" && (
          <BuildingView
            onSelectGuide={(guide) => setActiveGuide(guide)}
          />
        )}

        {currentSection === "custom" && (
          <CustomView
            onSelectGuide={(guide) => setActiveGuide(guide)}
          />
        )}

        {currentSection === "reviews" && (
          <ReviewsView
            onSelectReview={(rev) => setActiveReview(rev)}
          />
        )}

        {currentSection === "lore" && (
          <LoreView />
        )}

        {currentSection === "favorites" && (
          <FavoritesView
            favoriteIds={favorites}
            onSelectSuit={(suit) => setActiveSuit(suit)}
            onRemoveFavorite={removeFavorite}
            onClearAll={clearAllFavorites}
            onNavigateHome={() => setCurrentSection("database")}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(sec) => {
          setCurrentSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Modals */}
      <GundamDetailModal
        suit={activeSuit}
        onClose={() => setActiveSuit(null)}
        isFavorite={activeSuit ? favorites.includes(activeSuit.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      <ReviewDetailModal
        review={activeReview}
        onClose={() => setActiveReview(null)}
      />

      <GuideDetailModal
        guide={activeGuide}
        onClose={() => setActiveGuide(null)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectSuit={(suit) => {
          setSearchOpen(false);
          setActiveSuit(suit);
        }}
        onSelectGuide={(guide) => {
          setSearchOpen(false);
          setActiveGuide(guide);
        }}
        onSelectReview={(review) => {
          setSearchOpen(false);
          setActiveReview(review);
        }}
        onNavigateSection={(sec) => {
          setSearchOpen(false);
          setCurrentSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
