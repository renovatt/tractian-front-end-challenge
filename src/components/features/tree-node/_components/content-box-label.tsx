import { SVGProps, ComponentType } from 'react'

type TreeNodeContentLabelProps = {
  title: string
  value: string
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}
export default function ContentBoxLabel({
  title,
  icon: Icon,
  value,
}: TreeNodeContentLabelProps) {
  return (
    <div className="space-y-3">
      <label className="font-semibold">{title}</label>
      <div className="flex items-center justify-center gap-2">
        {Icon && <Icon />}
        <p className="text-gray-400">{value}</p>
      </div>
    </div>
  )
}
