import { create } from 'zustand'

type Search = {
  state: {
    search: string | null
  }
  actions: {
    setSearch: (search: string) => void
  }
}

export const useSearchStore = create<Search>((set) => ({
  state: {
    search: null,
  },
  actions: {
    setSearch: (search: string) =>
      set((state) => {
        return {
          state: {
            ...state.state,
            search,
          },
        }
      }),
  },
}))
