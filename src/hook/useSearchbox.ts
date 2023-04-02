import { create } from 'zustand';

interface SearchState {
  search: string;
  setSearch: (input: string) => void;
  clearSearch: () => void;
}

export const useSearchbox = create<SearchState>((set) => ({
  search: '',
  setSearch: (input) => set(() => ({ search: input })),
  clearSearch: () => set({ search: '' }),
}));
