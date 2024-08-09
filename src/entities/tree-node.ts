export interface TreeNode {
  id: string
  name: string
  type: 'location' | 'asset' | 'component'
  parentId?: string | null
  locationId?: string | null
  sensorType?: string | null
  status?: string | null
  sensorId?: string | null
  gatewayId?: string | null
  children?: TreeNode[]
}
