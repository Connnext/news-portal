import { create } from "zustand"

interface openStore {
  isOpen: boolean
  toggleOpen: () => void
}

export const useOpenStore = create<openStore>(set => ({
  isOpen: false,
  toggleOpen: () => set(state => ({ isOpen: !state.isOpen })),
}))
