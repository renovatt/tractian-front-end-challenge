import Navbar from './navbar'
import LogoIcon from '../../static/logo-icon'

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-950 p-4">
      <LogoIcon className="w-40" />
      <Navbar />
    </header>
  )
}
