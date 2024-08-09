export interface TreeNode {
  id: string
  name: string
  type: 'location' | 'asset' | 'component'
  parentId?: string | null
  children?: TreeNode[]
}
