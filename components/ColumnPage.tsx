
import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Search } from 'lucide-react';

interface ColumnPageProps {
  onNavigate: (page: 'home') => void;
}

const ColumnPage: React.FC<ColumnPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const articles = [
    {
      id: 1,
      tag: "Strategy",
      date: "2024.03.15",
      title: "브랜드의 ‘아우라’를 결정짓는 결정적 픽셀",
      desc: "단순한 웹사이트가 아닌, 사용자의 감각에 깊이 각인될 수 있는 시각적 태도에 대하여 이야기합니다."
    },
    {
      id: 2,
      tag: "Design",
      date: "2024.03.10",
      title: "의도적인 절제가 주는 압도적인 몰입감",
      desc: "비즈디오가 지향하는 ‘미니멀리즘’은 비우는 것이 아닌, 본질에 가장 가까운 구조를 설계하는 과정입니다."
    },
    {
      id: 3,
      tag: "Insight",
      date: "2024.03.02",
      title: "디지털 페르소나: 웹은 브랜드의 몸짓이다",
      desc: "스크롤 속도부터 버튼의 반발력까지, 모든 인터렉션은 브랜드의 성격을 규정합니다."
    },
    {
      id: 4,
      tag: "Process",
      date: "2024.02.25",
      title: "효율성 너머의 예술성, 노션 아카이빙의 진화",
      desc: "단순한 협업 툴을 브랜드 가이드라인으로 변모시키는 비즈디오만의 노션 브랜딩 전략을 공개합니다."
    },
    {
      id: 5,
      tag: "Experience",
      date: "2024.02.10",
      title: "감각을 설계하는 방법: 보이지 않는 디자인의 힘",
      desc: "우리는 시각적인 요소를 넘어 사용자가 사이트에서 느끼는 '온도'를 디자인합니다."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-60 font-sans selection:bg-[#9066fc]/10">
      <div className="container mx-auto px-8 relative z-10">
        
        {/* Header - Consistent with Portfolio style */}
        <header className="mb-24 reveal">
          <div className="flex flex-col mb-12">
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter mb-8">Column</h1>
            <div className="space-y-2">
               <p className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                 Sharing insights and stories about brand aura.
               </p>
               <p className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                 Exploring the depth of design beyond functions.
               </p>
            </div>
          </div>

          <div className="flex justify-end border-b border-slate-100 pb-8">
            <div className="w-full md:w-80 relative group">
              <input 
                type="text" 
                placeholder="Search archive..." 
                className="w-full bg-transparent py-2 px-2 focus:outline-none focus:border-[#9066fc] transition-colors font-bold text-sm"
              />
              <Search className="absolute right-2 top-2 w-4 h-4 text-slate-300 group-hover:text-[#9066fc] transition-colors" />
            </div>
          </div>
        </header>

        {/* Text-based Column List */}
        <div className="max-w-6xl mx-auto space-y-0 reveal delay-200">
          {articles.map((article, i) => (
            <article 
              key={article.id} 
              className="group cursor-pointer border-b border-slate-100 py-16 flex flex-col md:flex-row gap-10 items-start md:items-center hover:bg-slate-50/50 transition-all duration-500 px-6 -mx-6 rounded-2xl"
            >
              {/* Metadata: Date & Tag */}
              <div className="md:w-48 shrink-0">
                <span className="block text-[14px] font-black text-[#9066fc] tracking-widest mb-2 uppercase">
                  {article.date}
                </span>
                <span className="text-[13px] font-black text-slate-300 uppercase tracking-[0.2em]">
                  {article.tag}
                </span>
              </div>
              
              {/* Content: Title & Description */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter leading-tight group-hover:text-[#9066fc] transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-3xl">
                  {article.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-500 transform group-hover:scale-110">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-40 flex justify-center items-center gap-8 reveal">
          <span className="text-slate-900 font-black text-xl border-b-4 border-[#9066fc] pb-1 cursor-pointer">01</span>
          <span className="text-slate-300 font-black text-xl hover:text-slate-900 cursor-pointer transition-colors pb-1">02</span>
          <span className="text-slate-300 font-black text-xl hover:text-slate-900 cursor-pointer transition-colors pb-1">03</span>
        </div>

        {/* Return Button */}
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

export default ColumnPage;
