import Header from '@/components/features/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tractian - Tree View',
  description: 'Frontend Challenge for Tractian',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={(inter.className, 'fixed inset-0')}>
        <Header />
        {children}
      </body>
    </html>
  )
}
