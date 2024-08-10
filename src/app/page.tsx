'use client'
import Loading from './loading'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSaveCompanyStore } from '@/stores/use-save-company-store'

export default function Home() {
  const router = useRouter()
  const companyName = useSaveCompanyStore((state) => state.state.company.name)

  useEffect(() => {
    if (companyName) {
      router.push('tree-view')
    }
  }, [router, companyName])

  return <Loading />
}
