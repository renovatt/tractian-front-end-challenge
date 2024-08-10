'use client'
import Button from '../../ui/button'
import MenuIcon from '../../static/menu-icon'
import { getCompanies } from '@/@actions/get-companies'
import { useEffect, useState } from 'react'
import { Company } from '@/entities/company'
import { useSaveCompanyStore } from '@/stores/use-save-company-store'

export default function Navbar() {
  const [menuOptions, setMenuOptions] = useState<Company[]>([])
  const setId = useSaveCompanyStore((state) => state.actions.setCompany)

  useEffect(() => {
    const handleLoadCompanies = async () => {
      const menu = await getCompanies()
      if (menu.length > 0) {
        setMenuOptions(menu)
        setId(menu[0])
      }
    }
    handleLoadCompanies()
  }, [setId])

  return (
    <nav className="flex items-center justify-center gap-4">
      {menuOptions.map((item) => (
        <Button
          key={item.id}
          onClick={() => setId(item)}
          variant="primary"
          className="flex h-6 items-center text-xs"
        >
          <MenuIcon className="mr-2 size-4" />
          {item.name}
        </Button>
      ))}
    </nav>
  )
}
