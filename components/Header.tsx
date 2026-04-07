
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'philosophy' | 'portfolio' | 'column' | 'contact') => void;
  currentPage: 'home' | 'philosophy' | 'portfolio' | 'column' | 'contact';
}

const BizDioLogo = ({ isWhite }: { isWhite: boolean }) => (
  <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-500">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(144,102,252,0.5)]">
      <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoGradient)" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
      
      {/* Brilliant Cut Diamond Symbol */}
      <g className="opacity-90">
        {/* Pavilion */}
        <path d="M50 85 L20 45 L80 45 Z" fill="url(#logoGradient)" />
        {/* Crown */}
        <path d="M20 45 L35 20 L65 20 L80 45 Z" fill="url(#logoGradient)" className="opacity-80" />
        {/* Table */}
        <path d="M35 20 L65 20 L58 35 L42 35 Z" fill="white" className="opacity-40" />
        {/* Reflection Lines */}
        <path d="M50 85 L35 45 M50 85 L65 45 M35 20 L50 45 L65 20" stroke="white" strokeWidth="1.5" fill="none" className="opacity-30" />
      </g>
      
      <circle cx="50" cy="45" r="3" fill="white" className="animate-pulse" />
      
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isWhite ? "#ffffff" : "#9066fc"} />
          <stop offset="100%" stopColor={isWhite ? "#cbd5e1" : "#7e41ec"} />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPage === 'home';
  const shouldBeWhite = isHome && !scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl py-3 shadow-lg shadow-[#9066fc]/5' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => onNavigate('home')}>
          <BizDioLogo isWhite={shouldBeWhite} />
          <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${
            shouldBeWhite ? 'text-white' : 'text-slate-900'
          }`}>BIZDIO</span>
        </div>

        <nav className={`hidden lg:flex items-center gap-10 text-sm font-bold tracking-tight transition-colors duration-500 ${
          shouldBeWhite ? 'text-white/70' : 'text-slate-500'
        }`}>
          <button 
            onClick={() => onNavigate('philosophy')} 
            className={`transition-colors uppercase tracking-widest text-[14px] font-black ${
              currentPage === 'philosophy' ? 'text-[#9066fc]' : shouldBeWhite ? 'hover:text-white' : 'hover:text-[#9066fc]'
            }`}
          >
            About us
          </button>
          <button 
            onClick={() => onNavigate('portfolio')} 
            className={`transition-colors uppercase tracking-widest text-[14px] font-black ${
              currentPage === 'portfolio' ? 'text-[#9066fc]' : shouldBeWhite ? 'hover:text-white' : 'hover:text-[#9066fc]'
            }`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => onNavigate('column')} 
            className={`transition-colors uppercase tracking-widest text-[14px] font-black ${
              currentPage === 'column' ? 'text-[#9066fc]' : shouldBeWhite ? 'hover:text-white' : 'hover:text-[#9066fc]'
            }`}
          >
            Column
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className={`px-8 py-3.5 rounded-full font-extrabold text-[13px] uppercase tracking-widest transition-all shadow-xl active:scale-95 ${
              shouldBeWhite 
                ? 'bg-white text-slate-900 hover:bg-[#9066fc] hover:text-white' 
                : 'bg-slate-900 text-white hover:bg-[#9066fc]'
            } ${currentPage === 'contact' ? 'bg-[#9066fc] text-white' : ''}`}
          >
            Contact
          </button>
        </nav>

        <button className={`lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-2xl shadow-md transition-all ${
          shouldBeWhite ? 'bg-white/10 backdrop-blur-md' : 'bg-white'
        }`}>
          <div className={`w-6 h-1 rounded-full transition-colors ${shouldBeWhite ? 'bg-white' : 'bg-[#9066fc]'}`}></div>
          <div className={`w-4 h-1 rounded-full ml-auto mr-3 transition-colors ${shouldBeWhite ? 'bg-white/60' : 'bg-[#7e41ec]'}`}></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
