enum PortfolioType {
  thumbnail = 'thumbnail',
  link = 'link',
  gallery = 'gallery',
  video = 'video',
  slide = 'slide',
}
export type Attachment = {
  id: string | number;
  thumbnail: string;
  original: string;
  height?: number;
  width?: number;
};

export interface Skill {
  id: string | number;
  title: string;
  percentage: number;
}
export interface Information {
  name?: string;
  age?: string;
  nationality?: string;
  language?: string;
  email?: string;
  skype?: string;
  phone?: string;
  website?: string;
  freelanceStatus?: string;
  cvfile?: string;
}
export interface About {
  information?: Information;
  skills?: Skill[];
  knowledge?: string[];
  interests?: string[];
}

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
  imageUrl: string;
  name: string;
  designation: string;
  comment: string;
  rating?: number;
}
export interface Portfolio {
  id: string | number;
  title: string;
  slug?: string;
  category: string;
  categoryFilter?: string[];
  description?: string;
  type: PortfolioType;
  image: Attachment;
  tags?: Tag[];
  previewLink?: string;
  publishedData?: string;
  clientName: string;
}
export interface Brand {
  id: string | number;
  name?: string;
  logo: string;
}
export interface Tag {
  id: string | number;
  label: string;
  slug: string;
}

export interface ItemLabel {
  id: string | number;
  label: string;
}

export interface User {
  name: string;
  avatar: string;
  url?: string;
}

export interface Post {
  title: string;
  filePath: string;
  excerpt?: string;
  coverImage?: string;
  author?: User;
  category: string;
  content?: string;
  date?: string;
}
