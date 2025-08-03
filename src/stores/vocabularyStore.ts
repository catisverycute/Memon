import { create } from 'zustand';

interface VocabularyFormStore {
  name: string;
  color: string;
  setName: (name: string) => void;
  setColor: (color: string) => void;
}

export const useVocabularyFormStore = create<VocabularyFormStore>((set) => ({
  name: '',
  color: 'bg-pastelRose',
  setName: (name) => set({ name: name }),
  setColor: (color) => set({ color: color }),
}));
