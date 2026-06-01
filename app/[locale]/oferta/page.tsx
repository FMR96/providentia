import type { Metadata } from "next"
import { OfertaContent } from "./_content"

export const metadata: Metadata = {
  title: "Presencia digital completa — Providentia",
  description:
    "Fotografía profesional, web, branding, redes y SEO local. Todo incluido por 70 €/mes, sin permanencia. Para pequeños negocios y autónomos.",
  openGraph: {
    title: "Presencia digital completa — Providentia",
    description:
      "Fotografía, web, branding, redes y posicionamiento. Todo incluido por 70 €/mes, sin permanencia.",
    type: "website",
    locale: "es_ES",
    siteName: "Providentia",
  },
}

export default function OfertaPage() {
  return <OfertaContent />
}
