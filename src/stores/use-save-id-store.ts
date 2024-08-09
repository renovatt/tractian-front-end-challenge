import { create } from 'zustand'

type SaveIdStore = {
  state: {
    id: string
  }
  actions: {
    setId: (id: string) => void
  }
}

export const useSaveIdStore = create<SaveIdStore>((set) => ({
  state: {
    id: '',
  },
  actions: {
    setId: (id: string) =>
      set((state: { state: { id: string } }) => {
        return {
          state: {
            ...state.state,
            id,
          },
        }
      }),
  },
}))
