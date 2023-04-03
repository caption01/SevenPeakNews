import { create } from 'zustand';

export interface DropdownState {
  selected: any;
  active: boolean;
  setSelected: (selected: any) => void;
  setActive: (status: boolean) => void;
}

export const useDropdown = create<DropdownState>((set) => ({
  selected: {},
  active: false,
  setSelected: (nextItem) => set(() => ({ selected: nextItem })),
  setActive: (nextStatus) => set(() => ({ active: nextStatus })),
}));
