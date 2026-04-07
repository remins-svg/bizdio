
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-40 bg-slate-50/50 reveal">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#9066fc] text-[13px] font-black tracking-[0.5em] uppercase mb-4 block">Q&A</span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-tight mb-8">
            FREQUENTLY <br className="md:hidden" /> ASKED QUESTIONS
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl font-medium tracking-tight">
            커뮤니케이션의 시작은 명확함에서 비롯됩니다. <br />
            가장 자주 묻는 질문들을 모았습니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                openIndex === idx 
                  ? 'border-[#9066fc] shadow-xl shadow-[#9066fc]/5' 
                  : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full px-8 md:px-12 py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl md:text-2xl font-black tracking-tight transition-colors ${
                  openIndex === idx ? 'text-[#9066fc]' : 'text-slate-800'
                }`}>
                  {item.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === idx ? 'bg-[#9066fc] text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                }`}>
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 md:px-12 pb-10">
                  <div className="w-full h-px bg-slate-50 mb-8"></div>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
