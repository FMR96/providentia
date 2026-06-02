import Image from "next/image"
import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { BlogNavbar } from "@/app/[locale]/blog/_navbar"
import { JsonLd } from "@/components/json-ld"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const CONTENT = {
  es: {
    meta: {
      title: "Servicios — Providentia | Inteligencia de Datos y Marketing",
      description: "Servicios de inteligencia analítica, marketing y creatividad para empresas. Analítica predictiva, arquitectura de datos, SEO, branding, fotografía y más.",
    },
    hero: {
      label: "Servicios",
      h1: "Dos pilares.\nUn solo objetivo.",
      intro: "Providentia opera en dos áreas complementarias: la inteligencia que extrae señal de los datos, y la creatividad que comunica esa señal al mercado. No ofrecemos uno sin el otro.",
    },
    pillar1: {
      tag: "Pilar I",
      heading: "Inteligencia de Datos",
      description: "Modelos, infraestructuras y visualizaciones que convierten datos en decisiones.",
      services: [
        { numeral: "01", title: "Analítica Predictiva", tag: "Forecasting", href: "/servicios/analitica-predictiva" },
        { numeral: "02", title: "Arquitectura de Datos", tag: "Infrastructure", href: "/servicios/arquitectura-de-datos" },
        { numeral: "03", title: "Inteligencia de Lenguaje", tag: "NLP & LLM", href: "/servicios/inteligencia-de-lenguaje" },
        { numeral: "04", title: "Visualización Analítica", tag: "Data Viz", href: "/servicios/visualizacion-analitica" },
      ],
    },
    pillar2: {
      tag: "Pilar II",
      heading: "Marketing y Creatividad",
      description: "Identidad, presencia y captación para empresas que quieren crecer con coherencia.",
      services: [
        { numeral: "01", title: "Fotografía Profesional", tag: "Visual Brand", href: "/servicios/fotografia-profesional" },
        { numeral: "02", title: "Cartelería y Diseño Gráfico", tag: "Print & Digital", href: "/servicios/carteleria" },
        { numeral: "03", title: "Diseño y Desarrollo Web", tag: "Digital Presence", href: "/servicios/diseno-y-desarrollo-web" },
        { numeral: "04", title: "Ficha de Google y Reseñas", tag: "Local Presence", href: "/servicios/google-business-resenas" },
        { numeral: "05", title: "SEO, SEM y Paid Media", tag: "Search & Ads", href: "/servicios/seo-sem-paid-media" },
        { numeral: "06", title: "Branding y Logo", tag: "Brand Identity", href: "/servicios/branding-y-logo" },
        { numeral: "07", title: "Gestión de Redes Sociales", tag: "Social Media", href: "/servicios/gestion-redes-sociales" },
      ],
    },
    cta: {
      heading: "¿No sabes por dónde empezar?",
      body: "Cuéntanos tu situación. Identificamos qué combinación de servicios tiene más sentido para tu negocio.",
      btn: "Hablar con nosotros",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "Services — Providentia | Data Intelligence and Marketing",
      description: "Data intelligence, marketing and creativity services for businesses. Predictive analytics, data architecture, SEO, branding, photography and more.",
    },
    hero: {
      label: "Services",
      h1: "Two pillars.\nOne objective.",
      intro: "Providentia operates in two complementary areas: the intelligence that extracts signal from data, and the creativity that communicates that signal to the market. We don't offer one without the other.",
    },
    pillar1: {
      tag: "Pillar I",
      heading: "Data Intelligence",
      description: "Models, infrastructures and visualisations that turn data into decisions.",
      services: [
        { numeral: "01", title: "Predictive Analytics", tag: "Forecasting", href: "/servicios/analitica-predictiva" },
        { numeral: "02", title: "Data Architecture", tag: "Infrastructure", href: "/servicios/arquitectura-de-datos" },
        { numeral: "03", title: "Language Intelligence", tag: "NLP & LLM", href: "/servicios/inteligencia-de-lenguaje" },
        { numeral: "04", title: "Analytical Visualisation", tag: "Data Viz", href: "/servicios/visualizacion-analitica" },
      ],
    },
    pillar2: {
      tag: "Pillar II",
      heading: "Marketing & Creativity",
      description: "Identity, presence and acquisition for companies that want to grow with coherence.",
      services: [
        { numeral: "01", title: "Professional Photography", tag: "Visual Brand", href: "/servicios/fotografia-profesional" },
        { numeral: "02", title: "Signage & Graphic Design", tag: "Print & Digital", href: "/servicios/carteleria" },
        { numeral: "03", title: "Web Design & Development", tag: "Digital Presence", href: "/servicios/diseno-y-desarrollo-web" },
        { numeral: "04", title: "Google Profile & Reviews", tag: "Local Presence", href: "/servicios/google-business-resenas" },
        { numeral: "05", title: "SEO, SEM & Paid Media", tag: "Search & Ads", href: "/servicios/seo-sem-paid-media" },
        { numeral: "06", title: "Branding & Logo", tag: "Brand Identity", href: "/servicios/branding-y-logo" },
        { numeral: "07", title: "Social Media Management", tag: "Social Media", href: "/servicios/gestion-redes-sociales" },
      ],
    },
    cta: {
      heading: "Not sure where to start?",
      body: "Tell us your situation. We identify which combination of services makes most sense for your business.",
      btn: "Talk to us",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Servizi — Providentia | Intelligenza dei Dati e Marketing",
      description: "Servizi di intelligenza analitica, marketing e creatività per aziende. Analisi predittiva, architettura dati, SEO, branding, fotografia e altro.",
    },
    hero: {
      label: "Servizi",
      h1: "Due pilastri.\nUn solo obiettivo.",
      intro: "Providentia opera in due aree complementari: l'intelligenza che estrae segnale dai dati, e la creatività che comunica quel segnale al mercato. Non offriamo l'uno senza l'altro.",
    },
    pillar1: {
      tag: "Pilastro I",
      heading: "Intelligenza dei Dati",
      description: "Modelli, infrastrutture e visualizzazioni che trasformano i dati in decisioni.",
      services: [
        { numeral: "01", title: "Analisi Predittiva", tag: "Forecasting", href: "/servicios/analitica-predictiva" },
        { numeral: "02", title: "Architettura dei Dati", tag: "Infrastructure", href: "/servicios/arquitectura-de-datos" },
        { numeral: "03", title: "Intelligenza del Linguaggio", tag: "NLP & LLM", href: "/servicios/inteligencia-de-lenguaje" },
        { numeral: "04", title: "Visualizzazione Analitica", tag: "Data Viz", href: "/servicios/visualizacion-analitica" },
      ],
    },
    pillar2: {
      tag: "Pilastro II",
      heading: "Marketing e Creatività",
      description: "Identità, presenza e acquisizione per aziende che vogliono crescere con coerenza.",
      services: [
        { numeral: "01", title: "Fotografia Professionale", tag: "Visual Brand", href: "/servicios/fotografia-profesional" },
        { numeral: "02", title: "Cartellonistica e Grafica", tag: "Print & Digital", href: "/servicios/carteleria" },
        { numeral: "03", title: "Design e Sviluppo Web", tag: "Digital Presence", href: "/servicios/diseno-y-desarrollo-web" },
        { numeral: "04", title: "Scheda Google e Recensioni", tag: "Local Presence", href: "/servicios/google-business-resenas" },
        { numeral: "05", title: "SEO, SEM e Paid Media", tag: "Search & Ads", href: "/servicios/seo-sem-paid-media" },
        { numeral: "06", title: "Branding e Logo", tag: "Brand Identity", href: "/servicios/branding-y-logo" },
        { numeral: "07", title: "Gestione Social Media", tag: "Social Media", href: "/servicios/gestion-redes-sociales" },
      ],
    },
    cta: {
      heading: "Non sai da dove cominciare?",
      body: "Raccontaci la tua situazione. Identifichiamo quale combinazione di servizi ha più senso per la tua azienda.",
      btn: "Parlaci",
    },
    footer: { copyright: "© MMXXVI" },
  },
} as const

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const c = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.es
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: canonicalUrl(locale, "/servicios"),
      languages: hreflangAlternates("/servicios"),
    },
    openGraph: {
      ...ogBase(locale),
      title: c.meta.title,
      description: c.meta.description,
      url: canonicalUrl(locale, "/servicios"),
    },
  }
}

export default async function ServiciosIndex({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.es

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "it" ? "Inizio" : locale === "en" ? "Home" : "Inicio",
        item: canonicalUrl(locale),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: c.hero.label,
        item: canonicalUrl(locale, "/servicios"),
      },
    ],
  }

  return (
    <div className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <BlogNavbar />

      {/* HERO (oscuro) */}
      <section
        data-theme="dark"
        className="min-h-[60vh] flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="max-w-3xl">
            <p className="data-label mb-10 animate-fade-up" style={{ color: "var(--text-muted)" }}>
              {c.hero.label}
            </p>
            <h1
              className="h1-display animate-fade-up animation-delay-100 whitespace-pre-line"
              style={{ fontSize: "clamp(48px,7vw,88px)", color: "var(--text-light)" }}
            >
              {c.hero.h1}
            </h1>
            <p
              className="font-serif text-[18px] leading-[1.8] mt-10 max-w-xl animate-fade-up animation-delay-200"
              style={{ color: "var(--text-muted)" }}
            >
              {c.hero.intro}
            </p>
          </div>
        </div>
      </section>

      {/* PILAR I (claro) */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <span className="signal-badge mb-6 inline-block">{c.pillar1.tag}</span>
            <h2
              className="h2-display animate-fade-up"
              style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-dark)" }}
            >
              {c.pillar1.heading}
            </h2>
            <p
              className="font-serif text-[18px] leading-[1.8] mt-6 max-w-lg animate-fade-up animation-delay-100"
              style={{ color: "var(--text-mid)" }}
            >
              {c.pillar1.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {c.pillar1.services.map((svc, i) => (
              <Link
                key={svc.href}
                href={svc.href as any}
                className="group py-8 animate-fade-up block"
                style={{ borderTop: "1px solid var(--border-light)", animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="metric-display text-sm" style={{ color: "var(--text-muted)" }}>{svc.numeral}</span>
                      <span className="signal-badge">{svc.tag}</span>
                    </div>
                    <p className="h3-display" style={{ fontSize: "clamp(18px,2vw,24px)", color: "var(--text-dark)" }}>
                      {svc.title}
                    </p>
                  </div>
                  <span
                    className="shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "var(--moss)" }}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PILAR II (oscuro) */}
      <section
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <span className="signal-badge mb-6 inline-block">{c.pillar2.tag}</span>
            <h2
              className="h2-display animate-fade-up"
              style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-light)" }}
            >
              {c.pillar2.heading}
            </h2>
            <p
              className="font-serif text-[18px] leading-[1.8] mt-6 max-w-lg animate-fade-up animation-delay-100"
              style={{ color: "var(--text-muted)" }}
            >
              {c.pillar2.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {c.pillar2.services.map((svc, i) => (
              <Link
                key={svc.href}
                href={svc.href as any}
                className="group py-8 animate-fade-up block"
                style={{ borderTop: "1px solid var(--border-dark)", animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="metric-display text-sm" style={{ color: "var(--text-muted)" }}>{svc.numeral}</span>
                      <span className="signal-badge">{svc.tag}</span>
                    </div>
                    <p className="h3-display" style={{ fontSize: "clamp(18px,2vw,24px)", color: "var(--text-light)" }}>
                      {svc.title}
                    </p>
                  </div>
                  <span
                    className="shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "var(--sage)" }}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (claro) */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)", borderTop: "1px solid var(--border-light)" }}
      >
        <div className="max-w-[1200px] mx-auto max-w-2xl">
          <h2
            className="h3-display mb-4 animate-fade-up"
            style={{ fontSize: "clamp(20px,2.5vw,30px)", color: "var(--text-dark)" }}
          >
            {c.cta.heading}
          </h2>
          <p
            className="font-serif text-[18px] leading-[1.8] mb-10 animate-fade-up animation-delay-100"
            style={{ color: "var(--text-mid)", maxWidth: "480px" }}
          >
            {c.cta.body}
          </p>
          <a
            href="mailto:hola@providentia.es"
            className="cta-label px-8 py-3 transition-colors inline-block animate-fade-up animation-delay-200"
            style={{ background: "var(--signal)", color: "var(--text-light)" }}
          >
            {c.cta.btn} →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-12"
        style={{ background: "var(--evergreen)", borderTop: "1px solid var(--border-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/providentia.png" alt="Providentia" width={20} height={20} />
            <span className="font-display italic text-lg" style={{ color: "var(--text-light)" }}>Providentia</span>
          </Link>
          <span className="data-label" style={{ color: "var(--text-muted)" }}>{c.footer.copyright}</span>
        </div>
      </footer>
    </div>
  )
}
