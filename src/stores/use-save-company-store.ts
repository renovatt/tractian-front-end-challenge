import { create } from 'zustand'
import { Company } from '@/entities/company'

type SaveCompany = {
  state: {
    company: Company
  }
  actions: {
    setCompany: (company: Company) => void
  }
}

export const useSaveCompanyStore = create<SaveCompany>((set) => ({
  state: {
    company: {
      id: '',
      name: '',
    },
  },
  actions: {
    setCompany: (company: Company) =>
      set((state) => {
        return {
          state: {
            ...state.state,
            company,
          },
        }
      }),
  },
}))
