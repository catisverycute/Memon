export interface Word {
  id: number;
  word: string;
  meaning: string;
  example: string;
  category: string;
  memorized: boolean;
  favorite?: boolean;
}

export interface Vocabulary {
  id: number;
  title: string;
  color: string;
  memorizeCount?: number;
  words: Word[];
}
