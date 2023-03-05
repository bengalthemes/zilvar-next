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
  imageUrl?: string;
  name: string;
  designation: string;
  comment: string;
  rating?: number;
}
export interface Brand {
  id: string | number;
  name?: string;
  imageUrl: string;
}

export interface ItemLabel {
  id: string | number;
  label: string;
}
