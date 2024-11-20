export interface Companies {
  imageUrl: string;
  alt: string;
}

export interface Features extends Pick<Companies, "imageUrl"> {
  title: string;
  content: string;
}
// extends >> وفرت عليك اعاده نفس الككلام تاني
export interface FeaturesblockInterFace extends Features {
  isReversed?: boolean;
}

export interface PricingInterFace {
  title: string;
  description: string;
  monthlyPrice: number;
  annuallyPrice: number;
  features: string[];
  isMostPopular?: boolean;
  glowPosition?: "right" | "left";
}

export enum PricingMode {
  month = "monthly",
  year = "annually",
}
export interface Testimonial {
  imageUrl: string;
  name: string;
  role: string;
  review: string;
}
export interface FooterLinks {
  title: string;
  links: string[];
}
