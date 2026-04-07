
import { GoogleGenAI, Type } from "@google/genai";

export async function getAIQuoteAssistant(userInput: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `사용자의 문의 내용: "${userInput}"
      
      당신은 전문 웹 에이전시 'BizDio'의 AI 상담 실장입니다.
      사용자의 문의 내용을 바탕으로 대략적인 제작 제안과 웹사이트 제작의 중요성을 친절하고 전문적으로 설명해주세요.
      
      답변 가이드:
      1. 사용자의 아이디어나 요구사항을 요약하고 격려해주세요.
      2. BizDio 에이전시의 강점(맞춤 디자인, 100% 환불보장, 반응형 최적화)을 언급하세요.
      3. **중요: 예상 견적 가이드(Estimated Quote Guide)를 반드시 포함하세요.** 
         - 기능별/페이지별 대략적인 비용 범위를 제시하세요.
         - 예: 랜딩페이지(80~150만원), 커머스(300~500만원+), 기능 추가(채팅, 결제 등)에 따른 추가 비용 등.
      4. **형식: 반드시 표준 마크다운(Standard Markdown) 형식을 사용하세요.**
         - 강조할 부분은 **굵게** 표시하세요.
         - 견적 가이드는 마크다운 표(Table) 형식을 사용하여 깔끔하게 정리하세요.
      5. 전문적이고 신뢰감 있는 톤앤매너를 유지하며 한국어로 상세히 답변해주세요.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
      }
    });

    return response.text || "죄송합니다. 현재 상담이 원활하지 않습니다. 고객센터로 문의 부탁드립니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "실시간 상담 엔진 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
  }
}
