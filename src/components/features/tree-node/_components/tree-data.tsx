import { Suspense } from 'react'
import TreeNodeAssets from './tree-node-assets'

export default async function TreeData() {
  // const locations = await getLocations('662fd0ee639069143a8fc387')

  return (
    <section className="h-full border-t px-4 py-2">
      <div className="space-y-2">
        <Suspense fallback={<p>Carregando..</p>}>
          <TreeNodeAssets />
        </Suspense>
      </div>
    </section>
  )
}
