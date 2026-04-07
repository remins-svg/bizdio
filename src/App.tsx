
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AIModal from './components/AIModal';
import PhilosophyPage from './components/PhilosophyPage';
import PortfolioPage from './components/PortfolioPage';
import ColumnPage from './components/ColumnPage';
import ContactPage from './components/ContactPage';
import { PORTFOLIO_DATA, TESTIMONIALS } from './constants';
import { Quote, ArrowRight, Paperclip, Globe, Eye, Fingerprint, Compass } from 'lucide-react';

const NEW_BENEFIT_CARDS = [
  {
    title: "Clarity of Identity (정체성의 명료화)",
    description: "흩어진 실력을 하나의 관점으로 꿰어냅니다. 단순한 페이지 나열이 아닙니다. 당신이 가진 본질적인 강점을 포착하여, 고객의 뇌리에 깊게 각인될 수 있는 명확한 브랜드 서사로 재구조화합니다.",
    icon: <Eye className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Visual Proof (시각적 증명)",
    description: "보는 것만으로 실력을 짐작하게 합니다. 백 마디 말보다 강력한 것은 정교하게 설계된 한 장의 페이지입니다. 픽셀 단위로 조율된 디자인과 일관된 무드(Mood)를 통해 당신의 전문성을 시각적으로 즉각 증명합니다.",
    icon: <Fingerprint className="w-10 h-10 text-purple-500" />
  },
  {
    title: "Systematic Growth (시스템에 의한 성장)",
    description: "홈페이지가 스스로 일하게 만듭니다. 비즈디오가 만든 사이트는 당신의 가치를 전파하는 독자적인 매체가 됩니다. 한 번의 구축으로 지속적인 신뢰를 생산하고, 비즈니스가 브랜드로 성장하는 탄탄한 기반(Platform)이 됩니다.",
    icon: <Compass className="w-10 h-10 text-cyan-500" />
  }
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'philosophy' | 'portfolio' | 'column' | 'contact'>('home');
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearInterval(interval);
    };
  }, [currentPage]);

  const handleNavigate = (page: 'home' | 'philosophy' | 'portfolio' | 'column' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen relative bg-white font-sans">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'home' && (
        <>
          <div 
            className="sphere sphere-purple w-96 h-96 top-[1200px] -left-48 opacity-10"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          ></div>
          <div 
            className="sphere sphere-blue w-64 h-64 top-[2500px] -right-32 opacity-10"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          ></div>
          <div 
            className="sphere sphere-cyan w-80 h-80 top-[4000px] left-[10%] opacity-10"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          ></div>

          <main>
            <Hero />
            <section id="philosophy" className="py-40 relative overflow-hidden">
              <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-24 reveal">
                  <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-tight uppercase">
                    ARCHITECTING<br />
                    <span className="text-[#7e41ec]">THE PRESENCE.</span>
                  </h2>
                  <p className="text-slate-400 text-lg max-w-3xl font-medium tracking-tight leading-relaxed">
                    실력이 있어도 그것이 시각적으로 증명되지 않으면 시장에서는 그저 수많은 선택지 중 하나에 머물 뿐입니다. <br className="hidden md:block" />
                    비즈디오는 당신이 매번 스스로를 증명해야 하는 수고를 덜고, 고객이 먼저 당신의 가치를 알아보게 만드는 '신뢰의 기점'을 설계합니다.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {NEW_BENEFIT_CARDS.map((benefit, i) => (
                    <div key={i} className="group bg-slate-50/50 backdrop-blur-sm p-12 rounded-[60px] hover:bg-white hover:shadow-2xl hover:shadow-[#9066fc]/10 transition-all duration-500 reveal border border-transparent hover:border-[#9066fc]/10" style={{transitionDelay: `${i * 100}ms`}}>
                      <div className="mb-10 w-20 h-20 bg-white shadow-lg rounded-3xl flex items-center justify-center text-[#9066fc] group-hover:bg-gradient-to-br group-hover:from-[#9066fc] group-hover:to-[#7e41ec] group-hover:text-white transition-all duration-500 scale-110">
                        {benefit.icon}
                      </div>
                      <h4 className="text-2xl font-black mb-6 tracking-tight text-slate-900">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-500 text-base leading-relaxed font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <Comparison />
            <section id="portfolio" className="py-40 bg-slate-50/30 relative overflow-hidden">
              <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 reveal">
                  <div className="max-w-xl">
                    <span className="text-[#9066fc] text-[13px] font-black tracking-[0.5em] uppercase mb-4 block">Archive</span>
                    <h3 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase">
                      MOODBOARD.
                    </h3>
                  </div>
                  <div className="flex flex-col items-end text-right mt-10 md:mt-0">
                    <p className="text-slate-400 text-lg font-bold mb-6">
                      비즈디오의 시선이 머문 곳. <br />
                      각기 다른 브랜드의 고유한 결을 발견하고 시각화한 기록입니다.
                    </p>
                    <div className="flex items-center gap-10 text-2xl font-black uppercase tracking-widest text-slate-300">
                      <span className="text-[#9066fc] border-b-4 border-[#9066fc] pb-2 cursor-pointer">All</span>
                      <span className="hover:text-slate-900 cursor-pointer transition-colors pb-2">Branding</span>
                      <span className="hover:text-slate-900 cursor-pointer transition-colors pb-2">Web</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {PORTFOLIO_DATA.map((item, i) => (
                    <div key={item.id} className="group cursor-pointer reveal" style={{transitionDelay: `${i * 150}ms`}}>
                      <div className="relative aspect-[1/1] rounded-[60px] overflow-hidden mb-10 bg-white shadow-xl transition-transform duration-700 group-hover:-translate-y-4">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                        />
                      </div>
                      <div className="flex justify-between items-center px-6">
                        <div>
                          <h4 className="text-3xl font-black mb-2 text-slate-900">{item.title}</h4>
                          <p className="text-[13px] text-[#9066fc] font-black uppercase tracking-widest">{item.category} / 2024</p>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:bg-[#9066fc] group-hover:text-white transition-all shadow-lg shadow-[#9066fc]/5 group-hover:shadow-[#9066fc]/30 border border-slate-100">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="py-40 md:py-60 relative overflow-hidden bg-white">
              <div className="container mx-auto px-8 relative z-10 flex flex-col items-center">
                <div className="reveal mb-24 md:mb-32">
                  <div 
                    className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-[#9066fc] to-[#7e41ec] text-white rounded-[32px] md:rounded-[48px] flex items-center justify-center mx-auto shadow-2xl shadow-[#9066fc]/20 rotate-12"
                    style={{ transform: `translateY(${scrollY * 0.02}px) rotate(${12 + scrollY * 0.01}deg)` }}
                  >
                    <Quote className="w-10 h-10 md:w-14 md:h-14" />
                  </div>
                </div>
                <div className="max-w-5xl mx-auto text-center reveal w-full">
                  <div className="relative min-h-[450px] md:min-h-[500px] flex items-center justify-center w-full">
                    {TESTIMONIALS.map((t, idx) => (
                      <div 
                        key={t.id}
                        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 transform-gpu ${
                          idx === activeTestimonial 
                            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                            : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
                        }`}
                      >
                        <p className="text-2xl sm:text-3xl md:text-5xl font-black leading-[1.4] text-slate-800 tracking-tighter mb-16 md:mb-24 px-4 max-w-4xl mx-auto">
                          "{t.content}"
                        </p>
                        <div className="flex items-center gap-6 md:gap-10 shrink-0">
                          <div className="w-8 md:w-16 h-px bg-slate-100"></div>
                          <div className="text-center">
                            <div className="text-xl md:text-2xl font-black text-slate-900">{t.author}</div>
                            <div className="text-[13px] md:text-[15px] font-black uppercase tracking-[0.3em] text-[#9066fc] mt-3">{t.company}</div>
                          </div>
                          <div className="w-8 md:w-16 h-px bg-slate-100"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-20 md:mt-32 flex justify-center gap-4">
                    {TESTIMONIALS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonial(idx)}
                        className={`h-2 transition-all duration-700 rounded-full ${
                          idx === activeTestimonial 
                            ? 'w-20 bg-[#9066fc] shadow-lg shadow-[#9066fc]/40' 
                            : 'w-6 bg-slate-100 hover:bg-slate-200'
                        }`}
                        aria-label={`Go to review ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section id="column">
              <Process />
            </section>
            <FAQ />
            <section id="contact" className="py-40 bg-[#0a0b12] relative flex flex-col items-center justify-center min-h-[90vh] px-8 overflow-hidden">
              {/* Atmospheric Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[180px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[180px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>

              <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="reveal mb-16">
                    <span className="text-[#9066fc] text-sm font-black tracking-[0.8em] uppercase mb-10 block opacity-80">Next Step</span>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.3] mb-16">
                      당신의 브랜드가 가진 가장 매혹적인 순간을 <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/50 to-transparent">포착할 준비가 되셨나요?</span>
                    </h2>
                  </div>

                  <div className="reveal delay-200 max-w-4xl mb-24">
                    <p className="text-[#9066fc] text-xl md:text-3xl font-bold tracking-tight">
                      비즈디오가 그 시작을 함께합니다.
                    </p>
                  </div>

                  <div className="reveal delay-300 flex flex-col md:flex-row items-center gap-10">
                    <button 
                      onClick={() => handleNavigate('contact')}
                      className="group relative px-16 py-8 bg-white rounded-full overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-[0_0_50px_rgba(144,102,252,0.4)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9066fc] to-[#7e41ec] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <span className="relative text-black group-hover:text-white text-2xl font-black tracking-tight flex items-center gap-6">
                        프로젝트 시작하기
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-700" />
                      </span>
                    </button>
                    
                    <button 
                      onClick={() => setIsAIModalOpen(true)}
                      className="group relative px-16 py-8 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all duration-700 hover:scale-105 hover:border-[#9066fc] hover:shadow-[0_0_50px_rgba(144,102,252,0.2)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9066fc]/20 to-[#7e41ec]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <span className="relative text-white text-2xl font-black tracking-tight flex items-center gap-6">
                        AI 견적 상담
                        <Globe className="w-8 h-8 group-hover:rotate-12 transition-transform duration-700" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      )}

      {currentPage === 'philosophy' && <PhilosophyPage onNavigate={handleNavigate} />}
      {currentPage === 'portfolio' && <PortfolioPage onNavigate={handleNavigate} />}
      {currentPage === 'column' && <ColumnPage onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}

      <Footer onNavigate={handleNavigate} />
      <AIModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
    </div>
  );
};

export default App;
