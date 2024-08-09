import RadioIcon from '@/components/static/radio-icon'
import SensorIcon from '@/components/static/sensor-icon'
import { FilePlus } from 'lucide-react'
import ContentBoxLabel from './content-box-label'
import MIcon from '@/components/static/m-icon'

export default function TreeNodeContent() {
  return (
    <section>
      <header className="flex h-12 items-center justify-start border-b">
        <div className="flex items-center gap-2">
          <h2 className="ml-3 font-bold uppercase">Motor rt coal</h2>
          <span className="size-2 rounded-full bg-red-500"></span>
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
        </section>

        <hr className="w-full" />

        <section className="flex items-center justify-start gap-64">
          <ContentBoxLabel title="Sensor" icon={SensorIcon} value={'FGRTH'} />
          <ContentBoxLabel title="Receptor" icon={RadioIcon} value={'FGRTH'} />
        </section>
      </article>
    </section>
  )
}
