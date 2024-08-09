'use client'
import Button from '@/components/ui/button'
import TreeNode from './tree-node'

export default function Sidebar() {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-bold">Ativos</h2>/
          <span className="text-sm text-gray-400">Apex Unit</span>
        </div>

        <section className="flex items-center gap-2">
          <Button
            onClick={() => {}}
            variant="outline"
            className="border-gray-300 font-semibold text-gray-500"
          >
            Sensor de Energia
          </Button>
          <Button
            onClick={() => {}}
            variant="outline"
            className="border-gray-300 font-semibold text-gray-500"
          >
            Critico
          </Button>
        </section>
      </section>

      <section className="flex h-[93%] w-full gap-4">
        <div className="w-2/5 border">
          <TreeNode />
        </div>
        <div className="w-2/3 border">content</div>
      </section>
    </>
  )
}
