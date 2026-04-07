
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PhilosophyPageProps {
  onNavigate: (page: 'home') => void;
}

const PhilosophyPage: React.FC<PhilosophyPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-40 font-sans selection:bg-[#9066fc]/10">
      <div className="container mx-auto px-8 relative z-10">
        
        {/* Updated Header to match Portfolio Design */}
        <header className="mb-24 reveal">
          <div className="flex flex-col mb-12">
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter mb-8">About us</h1>
            <div className="space-y-2">
               <p className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                 Capturing the brand's aura beyond functions.
               </p>
               <p className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                 Archiving the essence of your vision with depth.
               </p>
            </div>
          </div>
          <div className="border-b border-slate-100 pb-8"></div>
        </header>

        {/* Visual Hero Section */}
        <section className="mb-60 relative">
          {/* Centered Split Sphere Visual - Signature Graphic */}
          <div className="relative w-full max-w-6xl mx-auto flex justify-center items-center reveal delay-200">
            {/* Top half of sphere */}
            <div className="absolute top-0 w-80 h-40 bg-gradient-to-t from-[#9066fc] to-[#7e41ec] rounded-t-full -translate-y-20 z-20 shadow-[0_-20px_40px_rgba(144,102,252,0.2)]"></div>
            
            {/* Main Image Container - Oriental Purple Watercolor Mountains */}
            <div className="w-full aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl relative z-10 bg-[#fdf2f2]">
              <img 
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000" 
                alt="Oriental Purple Watercolor Mountains" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/10 to-transparent"></div>
            </div>

            {/* Bottom half of sphere */}
            <div className="absolute bottom-0 w-80 h-40 bg-gradient-to-b from-[#9066fc] to-[#7e41ec] rounded-b-full translate-y-20 z-20 shadow-[0_20px_40px_rgba(144,102,252,0.2)]"></div>
          </div>
        </section>

        {/* Core Message Section */}
        <section className="mb-60 reveal">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none whitespace-nowrap overflow-hidden text-ellipsis">
              브랜드의 아우라를 아카이빙하다.
            </h2>
            <div className="mt-12 w-24 h-1 bg-[#9066fc] mx-auto opacity-20"></div>
          </div>
        </section>

        {/* Stylized Principles Section */}
        <section className="pb-20">
          <div className="grid md:grid-cols-3 gap-20 max-w-6xl mx-auto">
            {/* Value 1: Visual Decorum */}
            <div className="flex flex-col items-center text-center reveal delay-100">
              <div className="relative w-36 h-36 mb-12 group">
                <div className="absolute inset-0 bg-[#dcfce7] rounded-full scale-110 group-hover:scale-125 transition-all duration-700 opacity-50"></div>
                <div className="absolute top-0 w-full h-1/2 bg-[#bef264] rounded-t-full transition-all duration-500 group-hover:-translate-y-2"></div>
                <div className="absolute bottom-0 w-full h-1/2 bg-[#bef264] rounded-b-full opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="12" y1="2" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">Visual Decorum</h4>
              <p className="text-slate-500 font-medium leading-relaxed text-lg">
                우리는 브랜드의 본질이 스며든 <br /> ‘디지털 페르소나’를 구축하는 과정에서 <br /> 시각적 품격을 완성합니다.
              </p>
            </div>

            {/* Value 2: Intentional Restraint */}
            <div className="flex flex-col items-center text-center reveal delay-200">
              <div className="relative w-36 h-36 mb-12 group">
                <div className="absolute inset-0 bg-[#f3e8ff] rounded-full scale-110 group-hover:scale-125 transition-all duration-700 opacity-50"></div>
                <div className="absolute top-0 w-full h-1/2 bg-[#d8b4fe] rounded-t-full transition-all duration-500 group-hover:-translate-y-2"></div>
                <div className="absolute bottom-0 w-full h-1/2 bg-[#d8b4fe] rounded-b-full opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">Intentional Restraint</h4>
              <p className="text-slate-500 font-medium leading-relaxed text-lg">
                20년의 안목으로 정제된 ‘의도적인 절제’. <br /> 화려함보다 구조적인 안정감으로 <br /> 강력한 몰입감을 선사합니다.
              </p>
            </div>

            {/* Value 3: The Archive */}
            <div className="flex flex-col items-center text-center reveal delay-300">
              <div className="relative w-36 h-36 mb-12 group">
                <div className="absolute inset-0 bg-[#fef3c7] rounded-full scale-110 group-hover:scale-125 transition-all duration-700 opacity-50"></div>
                <div className="absolute top-0 w-full h-1/2 bg-[#fbbf24] rounded-t-full transition-all duration-500 group-hover:-translate-y-2"></div>
                <div className="absolute bottom-0 w-full h-1/2 bg-[#fbbf24] rounded-b-full opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">The Archive</h4>
              <p className="text-slate-500 font-medium leading-relaxed text-lg">
                단순한 소비의 대상이 아닌, <br /> 누군가의 영감이 되는 기록. <br /> 당신의 브랜드는 이제 '아카이브'가 됩니다.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-40 flex justify-center reveal">
           <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-4 text-slate-300 hover:text-slate-900 font-black text-[15px] uppercase tracking-[0.4em] transition-all group"
           >
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
             Return to Studio
           </button>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyPage;
