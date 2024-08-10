/* eslint-disable react-hooks/exhaustive-deps */
import { getAssets } from '@/@actions/get-assets'
import { getLocations } from '@/@actions/get-locations'
import { TreeNode } from '@/entities/tree-node'
import { useSaveCompanyStore } from '@/stores/use-save-company-store'
import { useState, useCallback, useEffect, useMemo } from 'react'
import { useBuildTreeNode } from './use-build-tree-node'
import { useFiltersStore } from '@/stores/use-filters-store'

export const useTreeNodeData = () => {
  const [treeData, setTreeData] = useState<TreeNode[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { buildTree } = useBuildTreeNode()

  const id = useSaveCompanyStore((state) => state.state.company.id)

  const energy = useFiltersStore(
    (state) => state.state.filters.energy.isActivated,
  )
  const alert = useFiltersStore(
    (state) => state.state.filters.alert.isActivated,
  )

  const filterNode = (
    node: TreeNode,
    filter: 'energy' | 'alert',
  ): TreeNode | null => {
    switch (filter) {
      case 'energy':
        if (node.sensorType === filter) {
          return { ...node }
        }
        break
      case 'alert':
        if (node.status === filter) {
          return { ...node }
        }
        break
    }

    const filteredChildren = node.children
      ?.map((child) => filterNode(child, filter))
      .filter(Boolean) as TreeNode[]

    if (filteredChildren && filteredChildren.length > 0) {
      return { ...node, children: filteredChildren }
    }

    return null
  }

  const filterTree = useCallback(
    (tree: TreeNode[], filter: 'energy' | 'alert'): TreeNode[] => {
      return tree
        .map((node) => filterNode(node, filter))
        .filter(Boolean) as TreeNode[]
    },
    [],
  )

  const searchNode = (node: TreeNode, term: string): TreeNode | null => {
    if (node.name.toLowerCase().includes(term)) {
      return { ...node }
    }

    const filteredChildren = node.children
      ?.map((child) => searchNode(child, term))
      .filter(Boolean) as TreeNode[]

    if (filteredChildren && filteredChildren.length > 0) {
      return { ...node, children: filteredChildren }
    }

    return null
  }

  const searchTree = useCallback(
    (tree: TreeNode[], term: string): TreeNode[] => {
      if (!term) return tree

      return tree
        .map((node) => searchNode(node, term.toLowerCase()))
        .filter(Boolean) as TreeNode[]
    },
    [],
  )

  const handleFetchData = useCallback(async () => {
    if (id) {
      setLoading(true)
      try {
        const [locations, assets] = await Promise.all([
          getLocations(id),
          getAssets(id),
        ])

        let tree = buildTree(locations, assets)

        if (energy) {
          tree = filterTree(tree, 'energy')
        }
        if (alert) {
          tree = filterTree(tree, 'alert')
        }

        setTreeData(tree)
      } catch (error) {
        console.error('Erro ao buscar os dados:', error)
      } finally {
        setLoading(false)
      }
    }
  }, [id, energy, alert, buildTree])

  useEffect(() => {
    if (id) {
      handleFetchData()
    }
  }, [id, energy, alert])

  const memoizedTreeData = useMemo(() => treeData, [treeData])

  return {
    treeData: memoizedTreeData,
    loading,
    searchTree,
  }
}
