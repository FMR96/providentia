import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { OfertaContent } from "./_content"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "oferta" })

  const ogLocale =
    locale === "it" ? "it_IT" : locale === "en" ? "en_GB" : "es_ES"

  return {
    title: t("meta_title"),
    description: t("meta_description"),
    openGraph: {
      title: t("og_title"),
      description: t("og_description"),
      type: "website",
      locale: ogLocale,
      siteName: "Providentia",
    },
  }
}

export default function OfertaPage() {
  return <OfertaContent />
}
