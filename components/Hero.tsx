
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const DiamondGem = () => (
  <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] select-none pointer-events-none">
    {/* Ambient Glow behind the Diamond */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#9066fc]/20 via-transparent to-blue-400/10 blur-[100px] rounded-full"></div>
    
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_60px_rgba(255,255,255,0.25)]">
      <defs>
        <linearGradient id="facetHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="facetDeep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <filter id="brilliance-filter">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Brilliant Cut Diamond Structure */}
      <g filter="url(#brilliance-filter)">
        {/* Pavilion (Bottom) */}
        <path d="M50 92 L15 45 L50 45 Z" fill="url(#facetDeep)" className="opacity-70" />
        <path d="M50 92 L85 45 L50 45 Z" fill="url(#facetDeep)" className="opacity-50" />
        <path d="M50 92 L35 45 L50 45 Z" fill="white" className="opacity-20" />
        <path d="M50 92 L65 45 L50 45 Z" fill="white" className="opacity-20" />

        {/* Crown (Top) */}
        <path d="M15 45 L32 15 L50 45 Z" fill="url(#facetHighlight)" className="opacity-90" />
        <path d="M85 45 L68 15 L50 45 Z" fill="url(#facetHighlight)" className="opacity-90" />
        <path d="M32 15 L68 15 L50 45 Z" fill="url(#facetHighlight)" className="opacity-100" />
        
        {/* Table (Flat Top) */}
        <path d="M38 22 L62 22 L58 38 L42 38 Z" fill="white" className="opacity-60" />

        {/* Crisp Edges */}
        <g stroke="white" strokeWidth="0.3" fill="none" className="opacity-40">
          <path d="M15 45 L85 45 M32 15 L68 15 M50 92 L15 45 M50 92 L85 45 M32 15 L15 45 M68 15 L85 45" />
          <path d="M32 15 L50 45 L68 15 M50 45 L50 92" />
        </g>
      </g>

      {/* Internal Shimmer Rays */}
      <g className="animate-pulse">
        <path d="M50 35 L55 45 L50 55 L45 45 Z" fill="white" className="opacity-40 blur-[2px]" />
        <path d="M35 45 L50 47 L65 45 L50 43 Z" fill="white" className="opacity-30 blur-[1.5px]" />
      </g>

      {/* Dynamic Sparkles */}
      <g>
        <circle cx="32" cy="15" r="1.2" fill="white" className="animate-ping opacity-60" />
        <circle cx="68" cy="15" r="1" fill="white" className="animate-pulse opacity-80" />
        <circle cx="50" cy="92" r="0.8" fill="white" className="animate-pulse" />
      </g>
    </svg>

    {/* Subtle Rotating Light Beam */}
    <div className="absolute inset-0 opacity-30 mix-blend-screen">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(144,102,252,0.1)_90deg,transparent_180deg,rgba(59,130,246,0.1)_270deg,transparent_360deg)] animate-[spin_25s_linear_infinite]"></div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5),
      });
    };

    const animate = () => {
      setSmoothPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.04,
        y: prev.y + (mousePos.y - prev.y) * 0.04,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePos]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-0 bg-black overflow-hidden">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ 
          backgroundImage: `url('https://i.ifh.cc/0jB97V.jpg')`,
          transform: `translate(${smoothPos.x * -20}px, ${smoothPos.y * -20}px) scale(1.05)`
        }}
      ></div>

      {/* Dark Overlay for Readability (40%) */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>
      
      {/* Dynamic Studio Atmosphere (Overlay Glow) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-[2]"
        style={{
          background: `radial-gradient(circle at ${50 + smoothPos.x * 25}% ${50 + smoothPos.y * 25}%, #161b33 0%, transparent 70%)`
        }}
      ></div>
      
      {/* Background Micro-particles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-[3]">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-8 relative z-[10]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 reveal active">
          
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-12 reveal delay-100">
              <span className="text-[14px] font-black uppercase tracking-[0.8em] text-[#9066fc]/90">The Untold Aura.</span>
              <div className="w-12 h-px bg-white/20"></div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.02] tracking-tighter mb-14 reveal delay-200 uppercase">
              DESIGN YOUR <br />
              ESSENCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9066fc] to-[#7e41ec] drop-shadow-[0_0_20px_rgba(144,102,252,0.5)]">RADIANT</span>
            </h1>
            
            <div className="reveal delay-300 mb-16">
              <p className="text-xl md:text-3xl text-slate-100 font-black mb-8 leading-snug">
                당신의 본질이 가장 우아하게 빛나도록,<br className="hidden md:block" /> 비즈디오가 설계합니다.
              </p>
              <div className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 space-y-4">
                <p>
                  비즈디오는 당신의 브랜드가 가진 고유한 분위기를 포착하고 시각화합니다.
                </p>
                <p className="opacity-80">
                  정보를 넘어, 스스로를 증명하는 매체로서의 홈페이지. 홈페이지는 정보를 전달하는 곳이 아니라, 스스로를 광고하는 "자체 매체"여야 합니다.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 reveal delay-400">
              <button 
                onClick={() => scrollTo('philosophy')}
                className="px-14 py-6 bg-white text-slate-950 rounded-2xl font-black text-[16px] uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.15)] active:scale-95 flex items-center gap-4 group"
              >
                About us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('portfolio')}
                className="px-14 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-[16px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3 active:scale-95 backdrop-blur-xl"
              >
                Portfolio
              </button>
            </div>
          </div>
          
          {/* Visual: Premium Brilliant Diamond */}
          <div className="flex-1 flex justify-center items-center relative py-12 z-[11]">
             <div 
               className="relative z-10 transition-transform duration-1000 ease-out will-change-transform"
               style={{ 
                 transform: `perspective(1500px) rotateX(${smoothPos.y * -15}deg) rotateY(${smoothPos.x * 15}deg) translateY(${Math.sin(Date.now() / 2000) * 8}px)` 
               }}
             >
                <DiamondGem />
             </div>
             
             {/* Deep Shadow for Float Effect */}
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-10 bg-black/50 blur-3xl rounded-full scale-150"></div>
          </div>

        </div>
      </div>
      
      {/* Elegant Fade to the next white section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none z-[12]"></div>
    </section>
  );
};

export default Hero;
