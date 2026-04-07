
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  tags: string;
  image: string;
}

interface PortfolioPageProps {
  onNavigate: (page: 'home') => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  // Set default active category to WaveCoding (labeled as 바이브코딩)
  const [activeCategory, setActiveCategory] = useState('WaveCoding');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  // Reordered categories as requested: 바이브코딩(WaveCoding), 아임웹(I'mWeb), 노션(Notion), 기타(Etc)
  const categories = [
    { name: 'WaveCoding', label: '바이브코딩' },
    { name: 'I\'mWeb', label: '아임웹' },
    { name: 'Notion', label: '노션' },
    { name: 'Etc', label: '기타' }
  ];

  const allProjects: PortfolioItem[] = [
    {
      id: 1,
      title: "Pinkrose Aesthetic",
      category: "I'mWeb",
      tags: "정보/쇼핑몰/템플릿/아임웹",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      title: "Nubelune",
      category: "I'mWeb",
      tags: "쇼핑몰/커스텀/블록메이커",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 3,
      title: "MUDU Furniture",
      category: "WaveCoding",
      tags: "브랜드/가구/쇼핑몰/바이브코딩",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 4,
      title: "Blossom & Co.",
      category: "WaveCoding",
      tags: "쇼핑몰/템플릿/바이브코딩",
      image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 5,
      title: "Tech Insight Archive",
      category: "Notion",
      tags: "데이터/워크스페이스/노션",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 6,
      title: "Creative Lab v1",
      category: "Etc",
      tags: "실험/브랜딩/SNS/기타",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const filteredProjects = allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pt-32 pb-40 font-sans">
      <div className="container mx-auto px-8">
        <header className="mb-24 reveal">
          <div className="flex flex-col mb-12">
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter mb-8">Works</h1>
            <div className="space-y-2">
               <p className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                 We help companies' brands grow with high-quality web design.
               </p>
               <p className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                 Do not damage the site with out-of-concept designs.
               </p>
            </div>
          </div>

          <div className="flex justify-end border-b border-slate-100 pb-8">
            <div className="flex gap-10 items-center">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`text-sm font-black transition-all pb-1 tracking-tight ${
                    activeCategory === cat.name 
                      ? 'text-slate-900 border-b-2 border-slate-900' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer reveal">
              {/* Simplified Image Container - No mockups, no black frames */}
              <div className="relative aspect-[16/10] bg-slate-50 rounded-[40px] overflow-hidden mb-8 shadow-xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700"></div>
              </div>

              <div className="px-2">
                <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-[#9066fc] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[14px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                  {project.tags}
                </p>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
             <div className="col-span-full py-40 text-center">
                <p className="text-slate-300 text-2xl font-black italic">No projects recorded in this category yet.</p>
             </div>
          )}
        </div>

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

export default PortfolioPage;
