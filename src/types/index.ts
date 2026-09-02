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

export interface SdgGoal {
  /** Official UN goal number. */
  number: number;
  /** Official UN goal colour, used as an accent only. */
  color: string;
  titleEn: string;
  titleHi: string;
  /** The specific mechanism in the product that advances this goal. */
  mechanismEn: string;
  mechanismHi: string;
  /** Wider card in the grid. */
  featured?: boolean;
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
