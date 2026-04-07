
import React, { useEffect } from 'react';
import { ArrowLeft, Send, Upload } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: 'home') => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
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
    <div className="bg-white min-h-screen pt-32 pb-60 font-sans selection:bg-[#9066fc]/10">
      <div className="container mx-auto px-8 relative z-10">
        
        {/* Header - Styled like Portfolio, text replaced with Korean instructions */}
        <header className="mb-24 reveal">
          <div className="flex flex-col mb-12">
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter mb-8">Contact</h1>
            <div className="space-y-2">
               <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                 진행하실 프로젝트에 대한 문의가 있으실 경우
               </p>
               <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                 메일을 주시거나 입력폼을 입력해 주세요.
               </p>
               <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                 확인하는대로 최대한 빠른 답변을 해드리겠습니다.
               </p>
            </div>
          </div>
          <div className="border-b border-slate-100 pb-8"></div>
        </header>

        <div className="max-w-4xl mx-auto reveal delay-200">
          <form className="space-y-10">
            {/* Darker borders: border-slate-400 */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900">담당자 성함 <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all" />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900">회사명</label>
              <input type="text" className="w-full border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900">이메일 <span className="text-red-500">*</span></label>
                <input type="email" className="w-full border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900">연락처 <span className="text-red-500">*</span></label>
                <input type="tel" className="w-full border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900">진행할 프로젝트의 유형 (회사, 브랜드, 병원, 쇼핑몰 등) <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all" />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900">진행할 프로젝트의 예상 시작일 <span className="text-red-500">*</span></label>
              <input type="date" className="w-full md:w-64 border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all" />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900">진행할 프로젝트의 예산(부가세별도) <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all" />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900">기존 사이트의 주소(사이트가 있을 경우)</label>
              <input type="url" placeholder="https://" className="w-full border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all" />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900">원하시는 디자인스타일의 래퍼런스 사이트 <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all" />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900">솔루션 선택 <span className="text-red-500">*</span></label>
              <select className="w-full border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all bg-white">
                <option value="">(선택)</option>
                <option value="imweb">아임웹</option>
                <option value="sixshop">식스샵</option>
                <option value="wavecoding">웨이브코딩</option>
                <option value="notion">노션</option>
                <option value="etc">기타</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900">아임웹 또는 식스샵 제공 기능외의 기능은 불가합니다.(확인) <span className="text-red-500">*</span></label>
              <select className="w-full border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all bg-white">
                <option value="">(선택)</option>
                <option value="agree">네, 확인했습니다.</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900">기타 전달주실 말씀</label>
              <textarea className="w-full h-40 border border-slate-400 rounded-lg px-5 py-4 focus:outline-none focus:border-[#9066fc] transition-all resize-none"></textarea>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-900">필요시 자료를 첨부해 주세요.</label>
              <div className="relative">
                <input type="file" className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="flex items-center gap-3 px-6 py-4 border border-slate-400 rounded-lg cursor-pointer hover:bg-slate-50 transition-all text-slate-500 font-bold w-fit">
                  <Upload className="w-5 h-5" />
                  파일 올리기
                </label>
              </div>
            </div>

            <div className="flex items-center gap-4 py-4">
              <input type="checkbox" id="privacy-agree" className="w-5 h-5 rounded border-slate-400 text-slate-900 focus:ring-slate-900" />
              <label htmlFor="privacy-agree" className="text-sm font-bold text-slate-600">
                개인정보처리방침 약관동의[전문보기] <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="flex justify-end pt-10">
              <button 
                type="submit"
                className="bg-black text-white px-10 py-5 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#9066fc] transition-all flex items-center gap-4 active:scale-95"
              >
                문의보내기
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
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

export default ContactPage;
