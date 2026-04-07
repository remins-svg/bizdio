
import React from 'react';
import { 
  MessageSquare, 
  CreditCard, 
  FileText, 
  Monitor, 
  Smartphone, 
  CheckCircle,
  Eye,
  Fingerprint,
  Compass
} from 'lucide-react';
import { PortfolioItem, Testimonial, ProcessStep } from './types';

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 1,
    title: "에이스가드",
    category: "아임웹",
    image: "https://i.ifh.cc/MmVn0H.jpg",
    description: "현대적이고 전문적인 이미지를 구축한 기업 포털"
  },
  {
    id: 2,
    title: "라이프스타일 커머스",
    category: "바이브코딩",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    description: "사용자 경험을 최우선으로 한 쇼핑 플랫폼"
  },
  {
    id: 3,
    title: "엔터테인먼트 매거진",
    category: "노션",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    description: "시각적 요소가 강조된 포트폴리오 사이트"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "박OO 대표",
    company: "WL*** 컴퍼니",
    content: "아무것도 모르는 상태에서 많은 질문과 반복된 작업요청에도 친절하게 마무리해주셨습니다. 무엇보다 작업 완료 후에도 작은 수정작업은 빠르게 해주시니 고마울 따름입니다.",
    rating: 5,
    tags: ["#친절한상담", "#깔끔한작업"]
  },
  {
    id: 2,
    author: "이OO 대표",
    company: "에이스가드",
    content: "복잡한 기획안을 단숨에 이해하고 디자인으로 녹여내주셨습니다. 타 업체 대비 속도와 퀄리티 면에서 압도적입니다.",
    rating: 5,
    tags: ["#전문성", "#빠른피드백"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "교감의 시작 (Discovery)",
    description: "브랜드의 숨겨진 이야기를 듣고, 결을 맞추는 첫 번째 대화입니다.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    id: 2,
    title: "여정의 설계 (Proposal)",
    description: "가장 아름답고 효율적인 항해를 위한 최적의 지도를 그립니다.",
    icon: <CreditCard className="w-6 h-6" />
  },
  {
    id: 3,
    title: "본질의 탐구 (Dive Deep)",
    description: "브랜드의 핵심 재료를 수집하여 디자인의 단단한 기반을 다집니다.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    id: 4,
    title: "감각의 구조화 (Architecture)",
    description: "뼈대 위에 미학을 입히며 PC 화면 속의 아우라를 만들어냅니다.",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    id: 5,
    title: "경험의 확장 (Expansion)",
    description: "손끝에서 느껴지는 모바일 환경에서도 일관된 무드를 유지합니다.",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    id: 6,
    title: "아우라의 완성 (The Unveiling)",
    description: "마침내, 세상에 단 하나뿐인 당신만의 분위기를 공개합니다.",
    icon: <CheckCircle className="w-6 h-6" />
  }
];

export const BENEFIT_CARDS = [
  {
    title: "Deep Insight (깊은 통찰)",
    description: "표면에 드러난 요구사항이 아닌, 브랜드 이면에 숨겨진 진짜 이야기를 발견하고 구조화합니다.",
    icon: <Eye className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Sensory Detail (감각적 디테일)",
    description: "10년의 안목으로 다듬어진 픽셀 하나하나가 모여, 스크롤 너머의 감정까지 디자인합니다.",
    icon: <Fingerprint className="w-10 h-10 text-purple-500" />
  },
  {
    title: "Timeless Value (변치 않는 가치)",
    description: "쉽게 소비되는 트렌드를 쫓지 않습니다. 시간이 흘러도 바래지 않는 브랜드의 본질을 담아냅니다.",
    icon: <Compass className="w-10 h-10 text-cyan-500" />
  }
];

export const FAQ_DATA = [
  {
    question: "제작 기간은 보통 얼마나 소요되나요?",
    answer: "프로젝트의 규모와 요구사항에 따라 다르지만, 일반적인 비즈니스 사이트의 경우 기획부터 오픈까지 평균 3~5주가 소요됩니다. 빠른 런칭이 필요한 경우 별도 협의를 통해 일정을 조율할 수 있습니다."
  },
  {
    question: "유지보수 관리는 어떻게 이루어지나요?",
    answer: "오픈 후 1년간은 단순 텍스트 수정 및 이미지 교체 등 기본적인 유지보수를 무상으로 지원합니다. 이후에는 월 정기 관리 프로그램이나 필요할 때마다 의뢰하는 건별 유지보수 중 선택하실 수 있습니다."
  },
  {
    question: "디자인만 별도로 의뢰할 수 있나요?",
    answer: "네, 가능합니다. 로고 디자인(CI/BI)부터 웹 UI/UX 디자인, 브랜드 가이드라인 제작 등 디자인 중심의 프로젝트도 활발히 진행하고 있습니다. 원하시는 범위를 말씀해주시면 맞춤형 제안을 드립니다."
  },
  {
    question: "제작 비용 결제는 어떤 방식으로 진행되나요?",
    answer: "보통 착수 시 선금 50%, 최종 완료 시 잔금 50% 분할 결제를 원칙으로 합니다. 법인 및 개인 사업자를 위한 세금계산서 발행은 당연히 가능하며, 카드 결제도 지원합니다."
  }
];
