'use client'
import LogoIcon from '../../static/logo-icon'
import Navbar from './navbar'

export default function Header() {
  return (
    <header className="bg-950 flex items-center justify-between p-4">
      <LogoIcon className="w-40" />
      <Navbar />
    </header>
  )
}
