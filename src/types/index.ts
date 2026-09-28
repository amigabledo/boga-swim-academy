export interface Program {
  id: string;
  name: string;
  stageName: string;
  stageNumber: string;
  ages: string;
  mascot: string;
  mascotImage: string;
  realPhoto: string;
  shortDescription: string;
  fullDescription: string;
  skills: string[];
  styles: string[];
  badgeColor: string;
  accentColor: string;
  whatsappMessage: string;
}

export interface MonthlyPrinciple {
  monthNumber: number;
  monthName: string;
  title: string;
  concept: string;
  description: string;
  waterApplication: string;
}

export interface Recognition {
  id: string;
  title: string;
  tagline: string;
  meaning: string;
  criteria: string;
  gradient: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
}
