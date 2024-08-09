import { create } from 'zustand'
import { TreeNode } from '@/entities/tree-node'

type SaveContent = {
  state: {
    node: TreeNode | null
  }
  actions: {
    setContentNode: (node: TreeNode) => void
  }
}

export const useSaveContentStore = create<SaveContent>((set) => ({
  state: {
    node: null,
  },
  actions: {
    setContentNode: (node: TreeNode) =>
      set((state) => {
        return {
          state: {
            ...state.state,
            node,
          },
        }
      }),
  },
}))
