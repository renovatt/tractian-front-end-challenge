'use client'
import { useState } from 'react'
import { TreeNode } from '@/entities/tree-node'
import { MapPin, Box, Cpu, ChevronRight, Zap, ZapOff } from 'lucide-react'
import { useSaveContentStore } from '@/stores/use-content-store'

interface TreeNodeProps {
  node: TreeNode
}

const treeNodeTypeOptions = {
  location: MapPin,
  asset: Box,
  component: Cpu,
} as const

export default function TreeNodeComponent({ node }: TreeNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const IconComponent = treeNodeTypeOptions[node.type]
  const isOperating = node?.status === 'operating'

  const setContentNode = useSaveContentStore(
    (state) => state.actions.setContentNode,
  )

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleSelectNode = (selectedNode: TreeNode) => {
    setContentNode(selectedNode)
  }

  return (
    <div className="mt-2 pl-4">
      <div
        className="group flex cursor-pointer items-center space-x-2 p-[1px] hover:bg-900 hover:text-white"
        onClick={() => {
          handleSelectNode(node)
          toggleExpand()
        }}
      >
        {node.children && node.children.length > 0 && (
          <ChevronRight
            onClick={(e) => {
              e.stopPropagation()
            }}
            className={`transform text-gray-400 group-hover:text-white ${isExpanded ? 'rotate-90' : ''}`}
          />
        )}
        <IconComponent className="size-5 text-900 group-hover:text-white" />
        <span>{node.name}</span>
        {node?.status &&
          node?.status !== null &&
          (isOperating ? (
            <Zap className="size-3 text-green-500" />
          ) : (
            <ZapOff className="size-3 text-red-500" />
          ))}
      </div>
      {isExpanded && node.children && node.children.length > 0 && (
        <div className="pl-4">
          {node.children.map((childNode) => (
            <div
              key={childNode.id}
              onClick={(e) => {
                e.stopPropagation()
                handleSelectNode(childNode)
              }}
            >
              <TreeNodeComponent node={childNode} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
