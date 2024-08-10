'use client'
import Button from '@/components/ui/button'
import TreeNode from './tree-node'
import { useSaveCompanyStore } from '@/stores/use-save-company-store'
import TreeNodeContent from './tree-node/_components/tree-node-content'
import { CircleAlert, Zap } from 'lucide-react'
import { useFiltersStore } from '@/stores/use-filters-store'

export default function Sidebar() {
  const companyName = useSaveCompanyStore((state) => state.state.company.name)
  const setFilter = useFiltersStore((state) => state.actions.setFilter)

  const energy = useFiltersStore(
    (state) => state.state.filters?.energy.isActivated,
  )
  const alert = useFiltersStore(
    (state) => state.state.filters?.alert.isActivated,
  )

  return (
    <div className="size-full">
      <section className="flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center">
        <div className="flex items-center gap-2">
          <h2 className="font-bold">Ativos</h2>/
          {companyName && (
            <span className="text-sm capitalize text-gray-400">
              {companyName} Unit
            </span>
          )}
        </div>

        <section className="flex items-center gap-2">
          <Button
            onClick={() => setFilter('energy')}
            variant={energy ? 'primary' : 'outline'}
            className="group flex items-center gap-2 border-gray-300 font-semibold text-gray-500 hover:bg-900 hover:text-white"
          >
            <Zap
              className={`${energy ? 'text-white' : 'text-900'} size-4 group-hover:text-white`}
            />
            Sensor de Energia
          </Button>
          <Button
            onClick={() => setFilter('alert')}
            variant={alert ? 'primary' : 'outline'}
            className="group flex items-center gap-2 border-gray-300 font-semibold text-gray-500 hover:bg-900 hover:text-white"
          >
            <CircleAlert
              className={`${alert ? 'text-white' : 'text-900'} size-4 group-hover:text-white`}
            />
            Critico
          </Button>
        </section>
      </section>

      <section className="my-2 flex w-full flex-col gap-4 pb-5 lg:h-[93%] lg:flex-row lg:pb-0">
        <div className="h-80 min-h-80 overflow-y-auto border lg:h-auto lg:w-2/5">
          <TreeNode />
        </div>
        <div className="border lg:w-2/3">
          <TreeNodeContent />
        </div>
      </section>
    </div>
  )
}
