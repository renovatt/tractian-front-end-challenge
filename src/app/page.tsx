import Sidebar from '@/components/features/sidebar'

export default function Home() {
  return (
    <section className="h-screen bg-gray-200 p-3">
      <article className="m-2 h-[92%] flex-grow space-y-4 rounded bg-white p-4">
        <Sidebar />
      </article>
    </section>
  )
}
