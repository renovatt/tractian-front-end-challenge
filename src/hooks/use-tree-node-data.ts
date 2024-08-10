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

  const id = useSaveCompanyStore((state) => state.state.company.id)

  const energy = useFiltersStore(
    (state) => state.state.filters.energy.isActivated,
  )
  const alert = useFiltersStore(
    (state) => state.state.filters.alert.isActivated,
  )

  const { buildTree } = useBuildTreeNode()

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

  const fetchData = useCallback(async () => {
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
      fetchData()
    }
  }, [id, energy, alert])

  const memoizedTreeData = useMemo(() => treeData, [treeData])

  return {
    treeData: memoizedTreeData,
    loading,
  }
}
