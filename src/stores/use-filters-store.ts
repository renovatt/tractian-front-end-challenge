import { create } from 'zustand'

type Filters = {
  state: {
    filters: {
      energy: {
        type: 'energy'
        isActivated: boolean
      }
      alert: {
        type: 'alert'
        isActivated: boolean
      }
    }
  }
  actions: {
    setFilter: (filter: 'energy' | 'alert') => void
  }
}

export const useFiltersStore = create<Filters>((set) => ({
  state: {
    filters: {
      energy: {
        type: 'energy',
        isActivated: false,
      },
      alert: {
        type: 'alert',
        isActivated: false,
      },
    },
  },
  actions: {
    setFilter: (filter: 'energy' | 'alert') =>
      set((state) => {
        const currentFilterState = state.state.filters[filter].isActivated
        return {
          state: {
            ...state.state,
            filters: {
              ...state.state.filters,
              [filter]: {
                ...state.state.filters[filter],
                isActivated: !currentFilterState,
              },
            },
          },
        }
      }),
  },
}))
