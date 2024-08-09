'use client'
import { getAssets } from '@/@actions/get-assets'
import { getLocations } from '@/@actions/get-locations'
import { Assets } from '@/entities/assets'
import { Locations } from '@/entities/locations'
import { TreeNode } from '@/entities/tree-node'
import { useState, useEffect } from 'react'
import TreeNodeComponent from './tree-node-component'
import { useSaveIdStore } from '@/stores/use-save-id-store'

export default function TreeNodeAssets() {
  const [treeData, setTreeData] = useState<TreeNode[]>([])
  const id = useSaveIdStore((state) => state.state.id)

  function buildTree(locations: Locations[], assets: Assets[]): TreeNode[] {
    const nodes: Record<string, TreeNode> = {}

    locations.forEach((location) => {
      nodes[location.id] = {
        id: location.id,
        name: location.name,
        type: 'location',
        parentId: location.parentId,
        children: [],
      }
    })

    assets.forEach((asset) => {
      nodes[asset.id] = {
        id: asset.id,
        name: asset.name,
        type: asset.sensorType ? 'component' : 'asset',
        parentId: asset.locationId || asset.parentId,
        children: [],
      }
    })

    Object.values(nodes).forEach((node) => {
      if (node.parentId && nodes[node.parentId]) {
        nodes[node.parentId].children!.push(node)
      }
    })

    return Object.values(nodes).filter((node) => !node.parentId)
  }

  useEffect(() => {
    const fetchData = async () => {
      // const companyId = '662fd0ee639069143a8fc387'
      const locations = await getLocations(id)
      const assets = await getAssets(id)

      const tree = buildTree(locations, assets)
      setTreeData(tree)
    }
    fetchData()
  }, [id])

  console.log('fetchData', id)

  return (
    <div>
      <div>
        {!id && <p>Selecione</p>}
        {treeData?.map((node) => (
          <TreeNodeComponent key={node.id} node={node} />
        ))}
      </div>
    </div>
  )
}
