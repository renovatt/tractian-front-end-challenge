'use client'
import TreeNodeComponent from './tree-node-component'
import { useTreeNodeData } from '@/hooks/use-tree-node-data'

export default function TreeNodeAssets() {
  const { loading, treeData } = useTreeNodeData()

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        treeData.map((node) => <TreeNodeComponent key={node.id} node={node} />)
      )}
    </>
  )
}
