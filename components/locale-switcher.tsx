"use client"

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

const LOCALE_LABELS: Record<string, string> = {
  es: 'ES',
  en: 'EN',
  it: 'IT',
}

export function LocaleSwitcher({ onDark = false }: { onDark?: boolean }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next })
  }

  const textColor = onDark ? '#8A9AAA' : '#6B6860'
  const activeColor = onDark ? '#F0EDE8' : '#1A1C20'

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          <button
            onClick={() => switchLocale(loc)}
            className="nav-label transition-colors duration-300 hover:opacity-100"
            style={{
              color: loc === locale ? activeColor : textColor,
              opacity: loc === locale ? 1 : 0.7,
              fontWeight: loc === locale ? 500 : 300,
            }}
          >
            {LOCALE_LABELS[loc]}
          </button>
          {i < routing.locales.length - 1 && (
            <span style={{ color: textColor, opacity: 0.4, fontSize: '10px' }}>·</span>
          )}
        </span>
      ))}
    </div>
  )
}
