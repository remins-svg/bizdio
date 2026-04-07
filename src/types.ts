
// Added React import to provide the React namespace for ReactNode in this TypeScript file
import React from 'react';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  author: string;
  company: string;
  content: string;
  rating: number;
  tags: string[];
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum SectionType {
  HERO = 'HERO',
  STATS = 'STATS',
  BENEFIT = 'BENEFIT',
  COMPARISON = 'COMPARISON',
  PORTFOLIO = 'PORTFOLIO',
  REVIEW = 'REVIEW',
  PROCESS = 'PROCESS',
}
