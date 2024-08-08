import { API_BASE_URL } from '@/shared/static/env'

export const getLocations = async (companyId: string) => {
  const response = await fetch(
    `${API_BASE_URL}/companies/${companyId}/locations`,
  )
  return response.json()
}
