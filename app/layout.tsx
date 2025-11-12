import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gentle Webdesign - Software & Digital Solutions',
  description: 'We create innovative software solutions, stunning websites, AI integrations, and comprehensive digital services.',
  keywords: ['web design', 'software development', 'AI integration', 'cloud solutions', 'Azure'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
