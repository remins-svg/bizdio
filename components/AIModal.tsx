
import React, { useState } from 'react';
import { getAIQuoteAssistant } from '../services/gemini';
import { X, Send, Sparkles, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    try {
      const res = await getAIQuoteAssistant(input);
      setResponse(res);
    } catch (err) {
      setResponse("상담 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 overflow-y-auto pt-10 md:pt-20">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-3xl bg-zinc-900 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in-95 duration-200 mb-20">
        <div className="p-10 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-black text-2xl md:text-3xl tracking-tight text-white">AI 스마트 견적 실장</h3>
              <p className="text-white/90 text-sm mt-1">24시간 깨어있는 비즈디오 상담 엔진</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-white/20 rounded-2xl transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="p-10">
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            원하시는 홈페이지 스타일이나 사업 아이디어를 입력하시면 BizDio의 AI가 맞춤 전략 제안과 예상 견적 가이드를 즉시 구성해 드립니다.
            <br /><span className="text-zinc-500 text-sm mt-3 block bg-white/5 p-4 rounded-xl border border-white/5">예: "20대 타겟의 미니멀한 패션 커머스 제작하고 싶어요. 결제 시스템과 재고 관리 기능이 필요합니다."</span>
          </p>

          <form onSubmit={handleSubmit} className="relative mb-10">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="여기에 요구사항을 상세히 입력할수록 더 정확한 답변이 가능합니다..."
              className="w-full h-64 bg-black border border-white/10 rounded-3xl p-8 text-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none leading-relaxed placeholder:text-zinc-700"
            />
            <button
              disabled={loading || !input.trim()}
              className="absolute bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 transition-all active:scale-95 shadow-xl flex items-center gap-3 font-bold"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><span className="hidden sm:inline">분석 요청</span><Send className="w-6 h-6" /></>}
            </button>
          </form>

          {response && (
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 animate-in slide-in-from-bottom-4 duration-500 max-h-[600px] overflow-y-auto custom-scrollbar mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
                <div className="text-sm font-black text-blue-400 uppercase tracking-widest">BizDio AI Analysis & Quote Guide</div>
              </div>
              <div className="text-lg md:text-xl leading-relaxed text-zinc-100 markdown-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {response}
                </ReactMarkdown>
              </div>
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 justify-between items-center">
                <span className="text-zinc-500 text-sm font-medium">추가 궁금하신 점은 1:1 상담으로 바로 연결 가능합니다.</span>
                <button className="w-full sm:w-auto text-base font-black text-white bg-blue-600 px-10 py-4 rounded-2xl hover:bg-blue-500 transition-all shadow-xl hover:shadow-blue-500/30">
                  디렉터와 상세 상담하기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIModal;
