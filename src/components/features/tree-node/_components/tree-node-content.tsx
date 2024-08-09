'use client'
import RadioIcon from '@/components/static/radio-icon'
import SensorIcon from '@/components/static/sensor-icon'
import { FilePlus, Zap, ZapOff } from 'lucide-react'
import ContentBoxLabel from './content-box-label'
import MIcon from '@/components/static/m-icon'
import { useSaveContentStore } from '@/stores/use-content-store'

const typesOptions = {
  location: 'location',
  asset: 'asset',
  component: 'component',
} as const

export default function TreeNodeContent() {
  const node = useSaveContentStore((state) => state.state.node)
  const isOperating = node?.status === 'operating'

  return (
    <section>
      <header className="flex h-12 items-center justify-start border-b">
        <div className="flex items-center gap-2">
          <h2 className="ml-3 font-bold uppercase">{node?.name}</h2>
          {node?.status &&
            node?.status !== null &&
            (isOperating ? (
              <Zap className="size-4 text-green-500" />
            ) : (
              <ZapOff className="size-4 text-red-500" />
            ))}
        </div>
      </header>

      <article className="m-4 flex flex-col space-y-8">
        <section className="flex gap-6">
          <div className="flex h-56 w-80 items-center justify-center rounded border border-dotted border-900 bg-700">
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2">
              <FilePlus className="text-900" />
              <span className="text-900">Adicione imagem do Ativo</span>
            </div>
          </div>

          {node?.type === typesOptions.component && (
            <section className="flex w-1/2 flex-col items-start justify-center space-y-4">
              <ContentBoxLabel
                title="Tipo de Equipamento"
                value={'Motor Elétrico (Trifásico)'}
              />

              <hr className="w-full" />

              <ContentBoxLabel
                title="Responsáveis"
                value={'Mecânica'}
                icon={MIcon}
              />
            </section>
          )}
        </section>

        <hr className="w-full" />

        <section className="flex items-center justify-start gap-64">
          {node?.sensorId && (
            <ContentBoxLabel
              title="Sensor"
              icon={SensorIcon}
              value={node.sensorId}
            />
          )}

          {node?.gatewayId && (
            <ContentBoxLabel
              title="Receptor"
              icon={RadioIcon}
              value={node.gatewayId}
            />
          )}
        </section>
      </article>
    </section>
  )
}
