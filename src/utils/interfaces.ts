export interface AudioCategory {
  id: number;
  slug: string;
  title: string;
  type: string;
  coverImagePath: string;
  isFeatured: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface File {
  id: number;
  slug: string;
  title: string;
  pathToFile: string;
}

export interface Audio {
  id: number;
  slug: string;
  title: string;
  pathToFile: string;
  category?: AudioCategory;
}

export interface HomePageData {
  makkGni: AudioCategory[];
  rajassKatYii: AudioCategory[];
  kourelsYii: AudioCategory[];
  sammFallYii: AudioCategory[];
}
