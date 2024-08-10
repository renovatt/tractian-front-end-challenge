'use client'
import { Search } from 'lucide-react'
import { useSearchStore } from '@/stores/use-search-store'

export default function Input() {
  const setSearch = useSearchStore((state) => state.actions.setSearch)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="relative flex h-12 items-center justify-between">
      <input
        type="search"
        className="h-full w-[93%] pl-4 outline-none"
        placeholder="Buscar por Ativo ou Local"
        onChange={handleChange}
      />
      <Search className="absolute right-4 size-4" />
    </div>
  )
}
