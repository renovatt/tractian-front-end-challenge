'use client'
import Button from '../../ui/button'
import MenuIcon from '../../static/menu-icon'
import { getCompanies } from '@/@actions/get-companies'
import { useEffect, useState } from 'react'
import { Company } from '@/entities/company'
import { useSaveIdStore } from '@/stores/use-save-id-store'

export default function Navbar() {
  const [menuOptions, setMenuOptions] = useState<Company[]>([])
  const setId = useSaveIdStore((state) => state.actions.setId)

  const handleLoadCompanies = async () => {
    const menu = await getCompanies()
    setMenuOptions(menu)
  }

  useEffect(() => {
    handleLoadCompanies()
  }, [])

  return (
    <nav className="flex items-center justify-center gap-4">
      {menuOptions.map((item) => (
        <Button
          key={item.id}
          onClick={() => setId(item.id)}
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
