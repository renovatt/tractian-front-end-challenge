import Sidebar from '@/components/features/sidebar'

export default function Home() {
  return (
    <section className="h-screen bg-gray-200 p-1">
      <article className="m-2 h-[82%] flex-grow space-y-4 overflow-y-auto rounded bg-white p-4 lg:h-[90%]">
        <Sidebar />
      </article>
    </section>
  )
}
