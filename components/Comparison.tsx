
import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';

const Comparison: React.FC = () => {
  const others = [
    {
      title: "증명의 피로감",
      desc: "자신의 실력과 경력을 매번 직접 설명하고 설득해야 하는 번거로움"
    },
    {
      title: "휘발되는 전문성",
      desc: "좋은 포트폴리오와 인사이트가 여기저기 흩어져 자산화되지 못함"
    },
    {
      title: "가격 경쟁의 늪",
      desc: "비교 대상이 많아 단가 경쟁에 내몰리고 고객에게 끌려다니는 구조"
    },
    {
      title: "정적인 명함",
      desc: "단순히 연락처만 전달하는 도구에 그쳐 확장이 불가능한 상태"
    }
  ];

  const bizdio = [
    {
      title: "무언의 설득력",
      desc: "접속하는 순간 느껴지는 아우라로 실력에 대한 의구심을 확신으로 바꿈"
    },
    {
      title: "축적되는 자산",
      desc: "모든 작업물과 철학이 하나의 매체에 아카이빙되어 브랜드 자산으로 축적"
    },
    {
      title: "가치 중심의 계약",
      desc: "차별화된 위상을 통해 고객이 먼저 '함께하고 싶어 하는' 파트너로 포지셔닝"
    },
    {
      title: "자체 광고 매체",
      desc: "정보 전달을 넘어 24시간 나를 대신해 가치를 증명하고 영업하는 시스템"
    }
  ];

  return (
    <section className="py-40 bg-white reveal">
      <div className="container mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-[#9066fc] text-[13px] font-black tracking-[0.5em] uppercase mb-4 block">Difference</span>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-tight">THE GAP.</h2>
          <p className="mt-8 text-slate-400 font-bold uppercase tracking-[0.2em] mb-4">(홈페이지가 있느냐 없느냐의 차이)</p>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            비즈디오는 당신의 실력이 시장에서 <span className="text-slate-900 font-black">'제값'</span>을 받게 하는 <br className="hidden md:block" /> 가장 우아한 도구를 설계합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Others - 홈페이지가 없는 비즈니스 */}
          <div className="bg-slate-50 p-12 md:p-16 rounded-[60px] relative overflow-hidden group border border-slate-100">
             <div className="flex items-center gap-6 mb-14">
               <div className="p-4 bg-slate-200 rounded-3xl">
                 <ShieldAlert className="w-8 h-8 text-slate-400" />
               </div>
               <div>
                 <h4 className="text-2xl font-black text-slate-400 uppercase tracking-tight">Without Website</h4>
                 <p className="text-[13px] font-bold text-slate-300 uppercase tracking-[0.3em]">홈페이지가 없는 비즈니스</p>
               </div>
             </div>
             <ul className="space-y-10">
               {others.map((item, i) => (
                 <li key={i} className="flex items-start gap-5 text-slate-400">
                   <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                     <X className="w-3 h-3 text-slate-400" />
                   </div>
                   <div>
                     <span className="text-xl font-black block mb-2">{item.title}</span>
                     <span className="text-base font-medium opacity-70 leading-relaxed">{item.desc}</span>
                   </div>
                 </li>
               ))}
             </ul>
          </div>

          {/* BizDio - 비즈디오가 설계한 브랜드 */}
          <div className="bg-white p-1 bg-gradient-to-br from-[#9066fc] via-[#7e41ec] to-blue-400 rounded-[64px] shadow-2xl shadow-[#9066fc]/20">
            <div className="bg-white p-12 md:p-16 rounded-[60px] h-full relative overflow-hidden group">
               <div className="flex items-center gap-6 mb-14">
                 <div className="p-4 bg-gradient-to-br from-[#9066fc] to-[#7e41ec] rounded-3xl shadow-lg shadow-[#9066fc]/30">
                   <ShieldCheck className="w-8 h-8 text-white" />
                 </div>
                 <div>
                   <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">With BizDio</h4>
                   <p className="text-[13px] font-bold text-[#9066fc] uppercase tracking-[0.3em]">비즈디오가 설계한 브랜드</p>
                 </div>
               </div>
               <ul className="space-y-10">
                 {bizdio.map((item, i) => (
                   <li key={i} className="flex items-start gap-5">
                     <div className="w-6 h-6 bg-purple-50 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-[#9066fc]/20">
                       <Check className="w-3 h-3 text-[#9066fc]" />
                     </div>
                     <div>
                       <span className="text-xl font-black text-slate-900 block mb-2">{item.title}</span>
                       <span className="text-base font-bold text-slate-600 leading-relaxed">{item.desc}</span>
                     </div>
                   </li>
                 ))}
               </ul>
               
               <div className="mt-16 pt-12 border-t border-slate-50">
                  <button className="w-full bg-slate-900 text-white py-6 rounded-3xl text-[15px] font-black uppercase tracking-[0.4em] hover:bg-[#9066fc] transition-all shadow-xl active:scale-95">
                    상담 신청하기
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
