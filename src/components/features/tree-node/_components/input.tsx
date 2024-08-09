import { Search } from 'lucide-react'

export default function Input() {
  return (
    <div className="relative flex h-12 items-center justify-between">
      <input
        className="h-full w-[93%] pl-4 outline-none"
        type="search"
        placeholder="Buscar por Ativo ou Local"
      />
      <Search className="absolute right-4 size-4" />
    </div>
  )
}
