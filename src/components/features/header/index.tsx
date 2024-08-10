import Navbar from './navbar'
import LogoIcon from '../../static/logo-icon'

export default function Header() {
  return (
    <header className="flex flex-col items-start justify-between gap-3 bg-950 p-4 lg:flex-row lg:items-center">
      <LogoIcon className="w-40" />
      <Navbar />
    </header>
  )
}
