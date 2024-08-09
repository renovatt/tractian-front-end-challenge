'use server'
import { AssetsResponse } from '@/entities/assets'
import { API_BASE_URL } from '@/shared/static/env'

export const getAssets = async (companyId: string): Promise<AssetsResponse> => {
  const response = await fetch(`${API_BASE_URL}/companies/${companyId}/assets`)
  return response.json()
}
