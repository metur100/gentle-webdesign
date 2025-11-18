import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieModal from '@/components/CookieModal'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gentle Webdesign - Professionelle Webentwicklung & KI-Lösungen aus Düsseldorf',
  description: 'Gentle Webdesign bietet innovative Softwarelösungen, modernes Webdesign, KI-Integration und Cloud-Services. Ihr Partner für digitale Transformation in Düsseldorf und deutschlandweit.',
  keywords: ['Webdesign Düsseldorf', 'Softwareentwicklung', 'KI-Integration', 'Azure Cloud', 'Full-Stack Development', 'Web-Apps', 'Digital Solutions'],
  authors: [{ name: 'Berk-Can Atesoglu', url: 'https://gentle-webdesign.com' }],
  creator: 'Gentle Webdesign',
  publisher: 'Gentle Webdesign',
  metadataBase: new URL('https://gentle-webdesign.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Gentle Webdesign - Professionelle Webentwicklung & KI-Lösungen',
    description: 'Innovative Softwarelösungen, modernes Webdesign und KI-Integration aus Düsseldorf.',
    url: 'https://gentle-webdesign.com',
    siteName: 'Gentle Webdesign',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gentle Webdesign',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gentle Webdesign - Professionelle Webentwicklung & KI-Lösungen',
    description: 'Innovative Softwarelösungen, modernes Webdesign und KI-Integration aus Düsseldorf.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* Favicon - SVG (modern browsers) */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Favicon - ICO fallback (older browsers) */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#010A30" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="application-name" content="Gentle Webdesign" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Gentle Webdesign" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        {children}
        <CookieModal />
      </body>
    </html>
  )
}