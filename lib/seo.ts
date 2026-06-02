export const BASE_URL = 'https://providentialabs.com'

export function canonicalUrl(locale: string, path: string = ''): string {
  return locale === 'es'
    ? `${BASE_URL}${path}`
    : `${BASE_URL}/${locale}${path}`
}

export function hreflangAlternates(path: string = ''): Record<string, string> {
  return {
    es: canonicalUrl('es', path),
    en: canonicalUrl('en', path),
    it: canonicalUrl('it', path),
    'x-default': canonicalUrl('es', path),
  }
}

export function ogBase(locale: string) {
  return {
    siteName: 'Providentia',
    type: 'website' as const,
    locale: locale === 'it' ? 'it_IT' : locale === 'en' ? 'en_US' : 'es_ES',
  }
}
