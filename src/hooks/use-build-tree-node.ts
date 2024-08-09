import { Assets } from '@/entities/assets'
import { Locations } from '@/entities/locations'
import { TreeNode } from '@/entities/tree-node'

export const useBuildTreeNode = () => {
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

  return {
    buildTree,
  }
}
