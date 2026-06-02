import type { Metadata } from 'next'
import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { ConsentManager } from '@/components/consent-manager'
import { JsonLd } from '@/components/json-ld'
import { WhatsAppButton } from '@/components/whatsapp-button'
import Script from 'next/script'

const GA_ID = 'G-5YCHNMCCC9'

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://providentialabs.com/#organization",
      "name": "Providentia",
      "url": "https://providentialabs.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://providentialabs.com/providentia.png",
        "width": 400,
        "height": 400
      },
      "description": "Consultora de inteligencia analítica especializada en modelos predictivos, arquitectura de datos, inteligencia de lenguaje natural y marketing digital basado en datos.",
      "email": "hola@providentia.es",
      "areaServed": { "@type": "Country", "name": "España" },
      "knowsAbout": [
        "Analítica de Datos",
        "Analítica Predictiva",
        "Arquitectura de Datos",
        "Inteligencia de Lenguaje Natural",
        "Visualización de Datos",
        "Marketing Digital",
        "SEO",
        "Generative Engine Optimization",
        "Marketing basado en datos",
        "Inteligencia Artificial aplicada a Marketing"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://providentialabs.com/#website",
      "url": "https://providentialabs.com",
      "name": "Providentia",
      "publisher": { "@id": "https://providentialabs.com/#organization" },
      "inLanguage": ["es", "en", "it"]
    }
  ]
}

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    metadataBase: new URL('https://providentialabs.com'),
    verification: {
      google: 'YXfBMe_MOCncFV5MUI-H1DaL6KFW3eIzhRsKkgwjbNk',
    },
    icons: {
      icon: '/providentia.png',
      apple: '/providentia.png',
    },
    openGraph: {
      siteName: 'Providentia',
      locale: locale === 'it' ? 'it_IT' : locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) notFound()

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${cormorantGaramond.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-serif antialiased bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          {children}
          <ConsentManager />
        </NextIntlClientProvider>
        <JsonLd data={ORG_SCHEMA} />
        <WhatsAppButton />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </body>
    </html>
  )
}
