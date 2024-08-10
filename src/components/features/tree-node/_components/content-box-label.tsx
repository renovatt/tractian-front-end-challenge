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
    <div className="w-36 space-y-3">
      <label className="font-semibold">{title}</label>
      <div className="flex items-center justify-start gap-2">
        {Icon && <Icon className="size-5" />}
        <p className="whitespace-nowrap text-gray-400">{value}</p>
      </div>
    </div>
  )
}
