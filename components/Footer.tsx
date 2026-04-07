
import React, { useState, useEffect } from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'philosophy' | 'portfolio' | 'column' | 'contact') => void;
}

const BizDioLogo = () => (
  <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-500">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(144,102,252,0.4)]">
      <circle cx="50" cy="50" r="45" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="1" strokeDasharray="6 6" className="animate-[spin_15s_linear_infinite]" />
      
      {/* Brilliant Cut Diamond Symbol */}
      <g className="opacity-90">
        {/* Pavilion */}
        <path d="M50 90 L15 45 L85 45 Z" fill="url(#footerLogoGradient)" />
        {/* Crown */}
        <path d="M15 45 L32 15 L68 15 L85 45 Z" fill="url(#footerLogoGradient)" className="opacity-80" />
        {/* Table */}
        <path d="M32 15 L68 15 L60 35 L40 35 Z" fill="white" className="opacity-30" />
        {/* Facet Lines */}
        <path d="M50 90 L35 45 M50 90 L65 45 M32 15 L50 45 L68 15" stroke="white" strokeWidth="1.2" fill="none" className="opacity-20" />
      </g>
      
      <circle cx="50" cy="45" r="4" fill="white" className="animate-pulse" />
      
      <defs>
        <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9066fc" />
          <stop offset="100%" stopColor="#7e41ec" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [activeMessage, setActiveMessage] = useState(0);
  const messages = [
    "[실시간] 방금 전 '에이스***' 님 상담 완료 (만족도 100%)",
    "[실시간] 2분 전 '라이프***' 님 신규 견적 요청 접수",
    "[실시간] 5분 전 '스타트***' 님 제작 기획안 전달 완료",
    "[실시간] 방금 전 '마켓***' 님 1:1 상담 예약 완료"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <footer className="bg-white pt-32 pb-48 font-sans">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-5 mb-10 group cursor-pointer" onClick={() => onNavigate('home')}>
              <BizDioLogo />
              <span className="text-3xl font-black tracking-tighter text-slate-900">BIZDIO</span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed font-medium">
              우리는 디자인 그 이상의 가치를 만듭니다.<br />
              우주에서 가장 빛나는 당신의 비즈니스를 위한 BizDio 시스템.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-10 uppercase tracking-[0.3em] text-[13px]">Reach Us</h4>
            <ul className="space-y-5 text-sm text-slate-400 font-bold">
              <li className="tracking-tight">서울시 강남구 테헤란로 유니버스 센터</li>
              <li className="tracking-tight hover:text-[#9066fc] transition-colors"><a href="mailto:hello@bizdio.universe">hello@bizdio.universe</a></li>
              <li className="tracking-tight">1588-0000</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-10 uppercase tracking-[0.3em] text-[13px]">Menu</h4>
            <ul className="space-y-5 text-sm text-slate-400 font-bold">
              <li><button onClick={() => onNavigate('philosophy')} className="hover:text-[#9066fc] transition-colors">About us</button></li>
              <li><button onClick={() => onNavigate('portfolio')} className="hover:text-[#9066fc] transition-colors">Portfolio</button></li>
              <li><button onClick={() => onNavigate('column')} className="hover:text-[#9066fc] transition-colors">Column</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#9066fc] transition-colors">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-slate-50 text-[13px] font-black uppercase tracking-[0.4em] text-slate-300">
          <p>© 2024 BizDio Universe. All Rights Reserved.</p>
          <div className="flex gap-12 mt-10 md:mt-0">
            <span className="hover:text-[#9066fc] cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-[#9066fc] cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>

      {/* Floating Real-time Agent Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[120] px-6 pb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/80 backdrop-blur-3xl border border-white rounded-[40px] px-10 py-5 flex items-center justify-between shadow-2xl shadow-[#9066fc]/10">
            <div className="flex items-center gap-8 overflow-hidden">
              <div className="flex items-center gap-4 shrink-0">
                <div className="w-3 h-3 bg-[#9066fc] rounded-full animate-ping"></div>
                <span className="text-slate-900 font-black text-[16px] uppercase tracking-[0.3em]">Agent Live</span>
              </div>
              <div className="w-px h-8 bg-slate-100 hidden sm:block"></div>
              <div className="text-slate-400 text-[15px] font-bold truncate max-w-[200px] md:max-w-[450px]">
                {messages[activeMessage]}
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <button onClick={() => onNavigate('contact')} className="bg-gradient-to-r from-[#9066fc] to-[#7e41ec] text-white px-10 py-4 rounded-3xl font-black text-[15px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#9066fc]/20 active:scale-95">
                Consult —
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
