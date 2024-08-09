'use client'
import { useState } from 'react'
import { TreeNode } from '@/entities/tree-node'
import { MapPin, Box, Cpu, ChevronRight } from 'lucide-react'

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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="mt-2 pl-4">
      <div
        className="group flex cursor-pointer items-center space-x-2 p-[1px] hover:bg-900 hover:text-white"
        onClick={toggleExpand}
      >
        {node.children && node.children.length > 0 && (
          <ChevronRight
            className={`transform text-gray-400 group-hover:text-white ${isExpanded ? 'rotate-90' : ''}`}
          />
        )}
        <IconComponent className="text-900 group-hover:text-white" />
        <span>{node.name}</span>
      </div>
      {isExpanded && node.children && node.children.length > 0 && (
        <div className="pl-4">
          {node.children.map((childNode) => (
            <TreeNodeComponent key={childNode.id} node={childNode} />
          ))}
        </div>
      )}
    </div>
  )
}
