'use client'
import { useEffect, useState } from 'react'
import { TreeNode } from '@/entities/tree-node'
import TreeNodeComponent from './tree-node-component'
import { useTreeNodeData } from '@/hooks/use-tree-node-data'
import { useSearchStore } from '@/stores/use-search-store'

export default function TreeNodeAssets() {
  const [isFilteredTree, setIsFilteredTree] = useState<TreeNode[]>([])
  const { loading, treeData, searchTree } = useTreeNodeData()
  const search = useSearchStore((state) => state.state.search)

  useEffect(() => {
    if (search) {
      const newFilteredTree = searchTree(treeData, search)
      setIsFilteredTree(newFilteredTree)
    } else {
      setIsFilteredTree(treeData)
    }
  }, [search, treeData, searchTree])

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        isFilteredTree.map((node) => (
          <TreeNodeComponent key={node.id} node={node} />
        ))
      )}
    </>
  )
}
