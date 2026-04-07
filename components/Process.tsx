
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="py-40 bg-white text-slate-900 overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-10 reveal">
          <div className="max-w-4xl">
            <h2 className="text-[#9066fc] text-[13px] font-black tracking-[0.5em] uppercase mb-6">Workflow</h2>
            <h3 className="text-5xl md:text-9xl font-black leading-[0.95] tracking-tighter uppercase">
              <span className="block">THE JOURNEY</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9066fc] to-[#7e41ec] block">
                TO ALLURE.
              </span>
            </h3>
          </div>
          <p className="text-slate-400 text-xl max-w-sm font-medium leading-relaxed">
            당신의 추상적인 아이디어가 구체적인 감각으로 탄생하기까지의 과정입니다.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.id} className="group bg-slate-50 rounded-[50px] p-12 flex flex-col md:flex-row items-center gap-12 hover:bg-white hover:shadow-2xl hover:shadow-[#9066fc]/10 transition-all duration-700 reveal" style={{transitionDelay: `${idx * 100}ms`}}>
              <div className="w-24 h-24 bg-white rounded-[40px] flex items-center justify-center text-slate-200 group-hover:bg-gradient-to-br group-hover:from-[#9066fc] group-hover:to-[#7e41ec] group-hover:text-white transition-all duration-700 shadow-lg scale-110">
                <span className="text-3xl font-black">0{step.id}</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-4xl font-black mb-4 tracking-tighter group-hover:text-[#9066fc] transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="shrink-0 hidden md:flex w-16 h-16 bg-white rounded-full items-center justify-center border-4 border-slate-50 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <ArrowUpRight className="w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
