'use server'
import { CompanyResponse } from '@/entities/company'
import { API_BASE_URL } from '@/shared/static/env'

export const getCompanies = async (): Promise<CompanyResponse> => {
  const response = await fetch(`${API_BASE_URL}/companies`)
  return response.json()
}
