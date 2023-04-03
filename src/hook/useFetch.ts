import { useState, useEffect } from 'react';
import { create } from 'zustand';

interface UseFetch {
  data: any;
  loading: boolean;
  error: any;
}

export interface State {
  state: any;
  setState: (s: any) => void;
}

export const useFetch = create<State>((set) => ({
  state: {},
  setState: (nextState) => set(() => nextState),
}));
