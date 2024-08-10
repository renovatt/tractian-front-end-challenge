import { Loader } from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-950">
      <div className="flex size-full items-center justify-center">
        <Loader className="animate-spin text-white" />
      </div>
    </div>
  )
}
