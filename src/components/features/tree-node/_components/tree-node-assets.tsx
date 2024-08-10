'use client'
import { useEffect, useState } from 'react'
import { TreeNode } from '@/entities/tree-node'
import TreeNodeComponent from './tree-node-component'
import { useTreeNodeData } from '@/hooks/use-tree-node-data'
import { useSearchStore } from '@/stores/use-search-store'

export default function TreeNodeAssets() {
  const [isSearchLoading, setIsSearchLoading] = useState(false)
  const [isFilteredTree, setIsFilteredTree] = useState<TreeNode[]>([])
  const { loading, treeData, searchTree } = useTreeNodeData()
  const search = useSearchStore((state) => state.state.search)

  useEffect(() => {
    const performSearch = async () => {
      if (search) {
        setIsSearchLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 500))
        const newFilteredTree = searchTree(treeData, search)
        setIsFilteredTree(newFilteredTree)
        setIsSearchLoading(false)
      } else {
        setIsFilteredTree(treeData)
      }
    }

    performSearch()
  }, [search, treeData, searchTree])

  return (
    <>
      {loading || isSearchLoading ? (
        <p>Buscando...</p>
      ) : !isFilteredTree.length ? (
        <p>Nenhum dado foi encontrado</p>
      ) : (
        isFilteredTree.map((node) => (
          <TreeNodeComponent key={node.id} node={node} />
        ))
      )}
    </>
  )
}
