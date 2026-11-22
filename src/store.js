import { create } from 'zustand'

// Zustand: global state (a list of names)
export const useStore = create((set) => ({
  names: [],
  addName: (name) => set((state) => ({ names: [...state.names, name] })),
}))
