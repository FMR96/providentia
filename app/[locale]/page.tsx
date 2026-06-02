import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { GlassNavbar } from "@/components/glass-navbar"
import { JsonLd } from "@/components/json-ld"
import type { Metadata } from "next"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const META = {
  es: {
    title: "Providentia — Inteligencia Analítica para Empresas",
    description: "Consultora de inteligencia analítica. Modelos predictivos, arquitectura de datos y marketing basado en datos. Trabajamos con un número reducido de clientes.",
  },
  en: {
    title: "Providentia — Analytics Intelligence for Business",
    description: "Analytics intelligence consultancy. Predictive models, data architecture and data-driven marketing. We work with a select number of clients.",
  },
  it: {
    title: "Providentia — Intelligenza Analitica per Imprese",
    description: "Consulenza di intelligenza analitica. Modelli predittivi, architettura dati e marketing basato sui dati. Lavoriamo con un numero ridotto di clienti.",
  },
} as const

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale as keyof typeof META] ?? META.es

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: canonicalUrl(locale),
      languages: hreflangAlternates(),
    },
    openGraph: {
      ...ogBase(locale),
      title: m.title,
      description: m.description,
      url: canonicalUrl(locale),
      images: [{ url: '/providentia.png', width: 400, height: 400, alt: 'Providentia' }],
    },
  }
}

const DATA_SERVICE_HREFS: Record<string, string> = {
  "01": "/servicios/analitica-predictiva",
  "02": "/servicios/arquitectura-de-datos",
  "03": "/servicios/inteligencia-de-lenguaje",
  "04": "/servicios/visualizacion-analitica",
}

function ServiceCard({
  numeral,
  title,
  tag,
  description,
  delay,
}: {
  numeral: string
  title: string
  tag: string
  description: string
  delay: string
}) {
  const href = DATA_SERVICE_HREFS[numeral]
  const inner = (
    <div className={`glass-dark p-8 animate-fade-up ${delay} h-full`}>
      <div className="metric-display text-sm mb-6" style={{ color: "var(--sage)" }}>{numeral}</div>
      <h3 className="h3-display mb-3" style={{ fontSize: "clamp(20px,2.5vw,28px)", color: "var(--text-light)" }}>{title}</h3>
      <span className="signal-badge mb-5 inline-block">{tag}</span>
      <p className="font-serif text-[18px] leading-[1.8] mt-4" style={{ color: "var(--text-muted)" }}>{description}</p>
    </div>
  )
  if (href) {
    return (
      <Link href={href as any} className="block group">
        {inner}
      </Link>
    )
  }
  return inner
}

function MethodStep({
  numeral,
  label,
  description,
  delay,
}: {
  numeral: string
  label: string
  description: string
  delay: string
}) {
  return (
    <div
      className={`flex gap-6 animate-fade-up ${delay}`}
      style={{ borderTop: "1px solid var(--border-light)", paddingTop: "24px" }}
    >
      <span className="metric-display text-sm shrink-0 w-6" style={{ color: "var(--text-muted)" }}>{numeral}</span>
      <div>
        <p className="data-label mb-1" style={{ color: "var(--text-dark)" }}>{label}</p>
        <p className="font-serif text-[16px] leading-[1.7]" style={{ color: "var(--text-mid)" }}>{description}</p>
      </div>
    </div>
  )
}

export default async function Home({ params }: Props) {
  const { locale } = await params

  const [t, th, ts, tm, tp, tc, ti, tf, tl, tfaq] = await Promise.all([
    getTranslations({ locale }),
    getTranslations({ locale, namespace: "hero" }),
    getTranslations({ locale, namespace: "services" }),
    getTranslations({ locale, namespace: "method" }),
    getTranslations({ locale, namespace: "philosophy" }),
    getTranslations({ locale, namespace: "contact" }),
    getTranslations({ locale, namespace: "insights" }),
    getTranslations({ locale, namespace: "footer" }),
    getTranslations({ locale, namespace: "legal" }),
    getTranslations({ locale, namespace: "faq" }),
  ])

  const serviceItems = ts.raw("items") as Array<{ numeral: string; title: string; tag: string; description: string }>
  const methodSteps  = tm.raw("steps") as Array<{ numeral: string; label: string; description: string }>
  const articles     = ti.raw("articles") as Array<{ slug: string; category: string; title: string; excerpt: string; date: string; readTime: number }>

  const methodDelays = ["animation-delay-200", "animation-delay-300", "animation-delay-400", "animation-delay-500"]

  const faqItems = tfaq.raw("items") as Array<{ question: string; answer: string }>

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": { "@type": "Answer", "text": answer },
    })),
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Servicios de Providentia",
    "itemListElement": serviceItems.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Service",
        "name": item.title,
        "description": item.description,
        "provider": { "@id": "https://providentialabs.com/#organization" }
      }
    }))
  }

  return (
    <div className="min-h-screen">
      <JsonLd data={servicesSchema} />
      <JsonLd data={faqSchema} />
      <GlassNavbar />

      {/* ── I · HERO (claro) ── */}
      <section
        data-theme="light"
        className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto w-full py-[96px]">
          <div className="max-w-4xl">
            <p className="data-label mb-10 animate-fade-up" style={{ color: "var(--text-muted)" }}>
              {th("tagline")}
            </p>
            <h1 className="h1-display animate-fade-up animation-delay-100 whitespace-pre-line" style={{ fontSize: "clamp(48px,7vw,88px)", color: "var(--text-dark)" }}>
              {th("headline")}
            </h1>
            <p className="font-serif text-[18px] leading-[1.8] mt-10 max-w-lg animate-fade-up animation-delay-200 whitespace-pre-line" style={{ color: "var(--text-mid)" }}>
              {th("body")}
            </p>
            <div className="flex items-center gap-8 mt-12 animate-fade-up animation-delay-300">
              <a
                href="#servicios"
                className="cta-label px-8 py-3 transition-colors"
                style={{ background: "var(--signal)", color: "var(--text-light)" }}
              >
                {th("cta_services")}
              </a>
              <a
                href="#contacto"
                className="cta-label px-6 py-3 transition-colors"
                style={{ color: "var(--moss)", border: "1px solid var(--border-light)" }}
              >
                {th("cta_contact")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── II · SERVICIOS (oscuro) ── */}
      <section
        id="servicios"
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20">
            <p className="data-label mb-6 animate-fade-up" style={{ color: "var(--text-muted)" }}>{ts("label")}</p>
            <h2 className="h2-display animate-fade-up animation-delay-100 whitespace-pre-line" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-light)" }}>
              {ts("heading")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
            {serviceItems.map((item, i) => (
              <ServiceCard
                key={item.numeral}
                numeral={item.numeral}
                title={item.title}
                tag={item.tag}
                description={item.description}
                delay={`animation-delay-${(i + 2) * 100}`}
              />
            ))}
          </div>

          <div className="mt-12 animate-fade-up animation-delay-600">
            <Link
              href="/servicios"
              className="nav-label transition-colors"
              style={{ color: "var(--sage)" }}
            >
              {locale === "it" ? "Tutti i servizi →" : locale === "en" ? "View all services →" : "Ver todos los servicios →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── III · MÉTODO (claro) ── */}
      <section
        id="metodo"
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="data-label mb-6 animate-fade-up" style={{ color: "var(--text-muted)" }}>{tm("label")}</p>
              <h2 className="h2-display animate-fade-up animation-delay-100 whitespace-pre-line" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-dark)" }}>
                {tm("heading")}
              </h2>
              <p className="font-serif text-[18px] leading-[1.8] mt-8 animate-fade-up animation-delay-200" style={{ color: "var(--text-mid)" }}>
                {tm("body")}
              </p>
            </div>

            <div className="space-y-0 pt-2">
              {methodSteps.map((step, i) => (
                <MethodStep
                  key={step.numeral}
                  numeral={step.numeral}
                  label={step.label}
                  description={step.description}
                  delay={methodDelays[i] ?? "animation-delay-200"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IV · FILOSOFÍA + CONTACTO (oscuro) ── */}
      <section
        id="filosofia"
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl">
            <p className="data-label mb-8 animate-fade-up" style={{ color: "var(--text-muted)" }}>{tp("label")}</p>
            <blockquote
              className="h2-display leading-[1.2] animate-fade-up animation-delay-100 whitespace-pre-line pl-6"
              style={{
                fontSize: "clamp(28px,3.5vw,48px)",
                color: "var(--text-light)",
                borderLeft: "2px solid var(--sage)",
              }}
            >
              {tp("quote")}
            </blockquote>

            <div
              id="contacto"
              className="mt-16 pt-16 animate-fade-up animation-delay-200"
              style={{ borderTop: "1px solid var(--border-dark)" }}
            >
              <h3 className="h3-display mb-4" style={{ fontSize: "clamp(20px,2.5vw,28px)", color: "var(--text-light)" }}>
                {tc("heading")}
              </h3>
              <p className="font-serif text-[18px] leading-[1.8] mb-8 max-w-md" style={{ color: "var(--text-muted)" }}>
                {tc("body")}
              </p>
              <a
                href="mailto:hola@providentia.es"
                className="cta-label transition-colors"
                style={{ color: "var(--sage)" }}
              >
                hola@providentia.es →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── V · INSIGHTS (claro) ── */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)", borderTop: "1px solid var(--border-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="data-label mb-5" style={{ color: "var(--text-muted)" }}>{ti("label")}</p>
              <h2 className="h2-display" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-dark)" }}>
                {ti("heading")}
              </h2>
            </div>
            <Link
              href="/blog"
              className="cta-label hidden md:block transition-colors"
              style={{ color: "var(--moss)" }}
            >
              {ti("cta_all")}
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12">
            {articles.map((post) => (
              <div key={post.slug} className="pt-7" style={{ borderTop: "1px solid var(--border-light)" }}>
                <span
                  className="font-mono text-[11px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--moss)" }}
                >
                  {post.category}
                </span>
                <Link
                  href={`/blog/${post.slug}` as any}
                  className="block mt-3 mb-3 font-display italic font-light leading-[1.2] transition-colors"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(20px,2vw,24px)",
                    color: "var(--text-dark)",
                  }}
                >
                  {post.title}
                </Link>
                <p
                  className="leading-[1.7] mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "17px",
                    color: "var(--text-mid)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  } as React.CSSProperties}
                >
                  {post.excerpt}
                </p>
                <span
                  className="text-[11px] tracking-[0.10em]"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-muted)" }}
                >
                  {post.date} · {post.readTime} min
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Link href="/blog" className="cta-label transition-colors" style={{ color: "var(--moss)" }}>
              {ti("cta_all")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── VI · FAQ (oscuro) ── */}
      <section
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="data-label mb-6 animate-fade-up" style={{ color: "var(--text-muted)" }}>{tfaq("label")}</p>
          <h2
            className="h2-display mb-16 animate-fade-up animation-delay-100 whitespace-pre-line"
            style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-light)" }}
          >
            {tfaq("heading")}
          </h2>
          <div className="space-y-0 max-w-3xl">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="py-8 animate-fade-up"
                style={{ borderTop: "1px solid var(--border-dark)", animationDelay: `${i * 80}ms` }}
              >
                <h3
                  className="h3-display mb-4"
                  style={{ fontSize: "clamp(17px,1.8vw,20px)", color: "var(--text-light)" }}
                >
                  {item.question}
                </h3>
                <p className="font-serif text-[17px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER (evergreen oscuro) ── */}
      <footer
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-12"
        style={{ background: "var(--evergreen)", borderTop: "1px solid var(--border-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/providentia.png"
              alt="Providentia"
              width={20}
              height={20}
            />
            <span className="font-display italic text-lg" style={{ color: "var(--text-light)" }}>Providentia</span>
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { labelKey: "services"   as const, href: "/servicios" },
              { labelKey: "method"     as const, href: "#metodo"    },
              { labelKey: "insights"   as const, href: "/blog"      },
              { labelKey: "philosophy" as const, href: "#filosofia" },
              { labelKey: "contact"    as const, href: "#contacto"  },
            ].map(({ labelKey, href }) => (
              href.startsWith("#") ? (
                <a key={labelKey} href={href} className="nav-label transition-colors" style={{ color: "var(--text-muted)" }}>
                  {t(`nav.${labelKey}`)}
                </a>
              ) : (
                <Link key={labelKey} href={href as any} className="nav-label transition-colors" style={{ color: "var(--text-muted)" }}>
                  {t(`nav.${labelKey}`)}
                </Link>
              )
            ))}
          </nav>

          <span className="data-label" style={{ color: "var(--text-muted)" }}>{tf("copyright")}</span>
        </div>

        <div
          className="flex flex-wrap gap-x-6 gap-y-2 mt-8 pt-6"
          style={{ borderTop: "1px solid var(--border-dark)" }}
        >
          {[
            { label: tl("nav_notice"),  href: "/legal"   },
            { label: tl("nav_privacy"), href: "/privacy" },
            { label: tl("nav_cookies"), href: "/cookies" },
          ].map(({ label, href }) => (
            <Link key={href} href={href as any} className="nav-label transition-colors" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
              {label}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  )
}
