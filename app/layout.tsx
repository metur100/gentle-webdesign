import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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

        {/* Legal Cockpit Cookie Consent */}
        <Script
          id="legal-cockpit-consent"
          src="https://app.cockpit.legal/static/cookieconsent-v2.js?tools=Klaviyo,Cookiebot,Google%20Tag%20Manager,LinkedIn%20Insight%20Tag"
          data-cc-tools="Klaviyo,Cookiebot,Google Tag Manager,LinkedIn Insight Tag"
          data-cc-privacy="https://gentle-webdesign.com/datenschutzerklaerung"
          data-cc-imprint="https://gentle-webdesign.com/impressum"
          data-cc-color="#010A30"
          data-cc-theme="custom"
          data-cc-language="browser"
          data-cc-non-eu-consent="false"
          data-cc-enable-logs="true"
          strategy="afterInteractive"
        />

        {/* Structured Data - Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Gentle Webdesign',
              legalName: 'Berk-Can Atesoglu',
              url: 'https://gentle-webdesign.com',
              logo: 'https://gentle-webdesign.com/logo.svg',
              description: 'Professionelle Webentwicklung, Softwarelösungen und KI-Integration aus Düsseldorf',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Oberbilker Allee 319',
                addressLocality: 'Düsseldorf',
                postalCode: '40227',
                addressCountry: 'DE'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                areaServed: 'DE',
                availableLanguage: ['de', 'en']
              },
              sameAs: [
                'https://www.linkedin.com/company/gentle-webdesign',
                'https://github.com/gentle-webdesign'
              ]
            })
          }}
        />

        {/* Structured Data - WebSite */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Gentle Webdesign',
              url: 'https://gentle-webdesign.com',
              description: 'Professionelle Webentwicklung, Softwarelösungen und KI-Integration',
              inLanguage: 'de-DE'
            })
          }}
        />

        {/* Structured Data - Local Business */}
        <Script
          id="structured-data-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Gentle Webdesign',
              image: 'https://gentle-webdesign.com/logo.svg',
              '@id': 'https://gentle-webdesign.com',
              url: 'https://gentle-webdesign.com',
              telephone: '+49-XXX-XXXXXXX',
              priceRange: '€€',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Oberbilker Allee 319',
                addressLocality: 'Düsseldorf',
                postalCode: '40227',
                addressCountry: 'DE'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.2099,
                longitude: 6.7727
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday'
                ],
                opens: '09:00',
                closes: '18:00'
              }
            })
          }}
        />
      </body>
    </html>
  )
}
