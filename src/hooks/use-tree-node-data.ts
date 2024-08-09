/* eslint-disable react-hooks/exhaustive-deps */
import { getAssets } from '@/@actions/get-assets'
import { getLocations } from '@/@actions/get-locations'
import { TreeNode } from '@/entities/tree-node'
import { useSaveCompanyStore } from '@/stores/use-save-company-store'
import { useState, useCallback, useEffect, useMemo } from 'react'
import { useBuildTreeNode } from './use-build-tree-node'

export const useTreeNodeData = () => {
  const [treeData, setTreeData] = useState<TreeNode[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const id = useSaveCompanyStore((state) => state.state.company.id)
  const { buildTree } = useBuildTreeNode()

  const fetchData = useCallback(async () => {
    if (id) {
      setLoading(true)
      try {
        const [locations, assets] = await Promise.all([
          getLocations(id),
          getAssets(id),
        ])
        const tree = buildTree(locations, assets)
        setTreeData(tree)
      } catch (error) {
        console.error('Erro ao buscar os dados:', error)
      } finally {
        setLoading(false)
      }
    }
  }, [id, buildTree])

  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [id])

  const memoizedTreeData = useMemo(() => treeData, [treeData])

  return {
    treeData: memoizedTreeData,
    loading,
  }
}
