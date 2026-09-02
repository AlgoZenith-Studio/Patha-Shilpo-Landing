export type Language = 'en' | 'hi';

export interface Artisan {
  id: string;
  name: string;
  nameHi: string;
  craft: string;
  craftHi: string;
  cluster: string;
  clusterHi: string;
  story: string;
  storyHi: string;
  experienceYears: number;
  image: string;
  productsCount: number;
  sampleProduct: {
    title: string;
    titleHi: string;
    price: number;
    image: string;
  };
}

export interface PressArticle {
  slug: string;
  title: string;
  publication: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  category: string;
}

export interface FaqItem {
  qEn: string;
  qHi: string;
  aEn: string;
  aHi: string;
}

export interface Testimonial {
  id: number;
  role: 'artisan' | 'buyer';
  quoteEn: string;
  quoteHi: string;
  name: string;
  nameHi: string;
  titleEn: string;
  titleHi: string;
}
