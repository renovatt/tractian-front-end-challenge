import { API_BASE_URL } from '@/shared/static/env'

export const getAssets = async (companyId: string) => {
  const response = await fetch(`${API_BASE_URL}/companies/${companyId}/assets`)
  return response.json()
}
