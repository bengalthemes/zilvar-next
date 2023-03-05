export interface Service {
  id: string | number;
  title: string;
  shadowTitle?: string;
  progressTitle?: string;
  successRate: number;
  description?: string | any;
}
export interface BlogPost {
  id: string;
  title: string;
  description?: string;
}
export interface SkillItem {
  id: number | string;
  className?: string;
  title: string;
  percentage: number;
}
export interface Testimonial {
  id: number | string;
  className?: string;
  clientThumbnail?: string;
  clientName: string;
  clientDesignation: string;
  comment: string;
  rating?: number;
}

export interface ItemLabel {
  id: string | number;
  label: string;
}
