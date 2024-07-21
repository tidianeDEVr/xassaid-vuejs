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
