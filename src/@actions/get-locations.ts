'use server'
import { LocationsResponse } from '@/entities/locations'
import { API_BASE_URL } from '@/shared/static/env'

export const getLocations = async (
  companyId: string,
): Promise<LocationsResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/companies/${companyId}/locations`,
  )
  return response.json()
}
