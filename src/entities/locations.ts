export interface Locations {
  id: string
  name: string
  parentId?: string
}

export type LocationsResponse = Locations[]
