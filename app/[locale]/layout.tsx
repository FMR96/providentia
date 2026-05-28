import type { Metadata } from 'next'
import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Analytics } from '@vercel/analytics/next'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

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

export const metadata: Metadata = {
  icons: {
    icon: '/providentia.png',
    apple: '/providentia.png',
  },
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
        </NextIntlClientProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
