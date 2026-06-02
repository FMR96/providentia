import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { BlogNavbar } from "@/app/[locale]/blog/_navbar"
import { JsonLd } from "@/components/json-ld"
import { canonicalUrl } from "@/lib/seo"

export interface HowStep {
  numeral: string
  label: string
  description: string
}

export interface GridItem {
  label: string
  description: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface RelatedLink {
  label: string
  href: string
}

export interface ServiceContent {
  meta: { title: string; description: string }
  hero: { label: string; tag: string; h1: string; intro: string }
  what: { heading: string; body: string; examples: GridItem[] }
  how: { heading: string; steps: HowStep[] }
  forwho: { heading: string; items: GridItem[] }
  faq: { heading: string; items: FaqItem[] }
  cta: { heading: string; body: string; btn: string }
  footer: { copyright: string }
}

interface ServicePageProps {
  locale: string
  slug: string
  serviceName: string
  serviceNameEn: string
  serviceType: string
  content: ServiceContent
  related: RelatedLink[]
}

export function ServicePage({
  locale,
  slug,
  serviceName,
  serviceNameEn,
  serviceType,
  content: c,
  related,
}: ServicePageProps) {
  const path = `/servicios/${slug}`

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    alternateName: serviceNameEn,
    description: c.meta.description,
    provider: { "@id": "https://providentialabs.com/#organization" },
    areaServed: { "@type": "Country", name: "España" },
    url: canonicalUrl(locale, path),
    serviceType,
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }

  const homeLabel = locale === "it" ? "Inizio" : locale === "en" ? "Home" : "Inicio"
  const servicesLabel = locale === "it" ? "Servizi" : locale === "en" ? "Services" : "Servicios"

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeLabel, item: canonicalUrl(locale) },
      { "@type": "ListItem", position: 2, name: servicesLabel, item: canonicalUrl(locale, "/servicios") },
      { "@type": "ListItem", position: 3, name: serviceName, item: canonicalUrl(locale, path) },
    ],
  }

  return (
    <div className="min-h-screen">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <BlogNavbar />

      {/* HERO (oscuro) */}
      <section
        data-theme="dark"
        className="min-h-[70vh] flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-10 animate-fade-up">
              <p className="data-label" style={{ color: "var(--text-muted)" }}>{c.hero.label}</p>
              <span className="signal-badge">{c.hero.tag}</span>
            </div>
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

      {/* QUÉ ES (claro) */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <h2
              className="h2-display animate-fade-up"
              style={{ fontSize: "clamp(28px,3.5vw,44px)", color: "var(--text-dark)" }}
            >
              {c.what.heading}
            </h2>
            <p
              className="font-serif text-[18px] leading-[1.8] animate-fade-up"
              style={{ color: "var(--text-mid)" }}
            >
              {c.what.body}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {c.what.examples.map((ex, i) => (
              <div
                key={i}
                className="py-8 animate-fade-up"
                style={{ borderTop: "1px solid var(--border-light)", animationDelay: `${i * 80}ms` }}
              >
                <p className="data-label mb-3" style={{ color: "var(--text-dark)" }}>{ex.label}</p>
                <p className="font-serif text-[17px] leading-[1.75]" style={{ color: "var(--text-mid)" }}>
                  {ex.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO LO HACEMOS (oscuro) */}
      <section
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="h2-display mb-16 animate-fade-up"
            style={{ fontSize: "clamp(28px,3.5vw,44px)", color: "var(--text-light)" }}
          >
            {c.how.heading}
          </h2>
          <div className="space-y-0">
            {c.how.steps.map((step) => (
              <div
                key={step.numeral}
                className="flex gap-6 animate-fade-up"
                style={{ borderTop: "1px solid var(--border-dark)", paddingTop: "24px", paddingBottom: "24px" }}
              >
                <span className="metric-display text-sm shrink-0 w-8" style={{ color: "var(--text-muted)" }}>
                  {step.numeral}
                </span>
                <div>
                  <p className="data-label mb-2" style={{ color: "var(--text-light)" }}>{step.label}</p>
                  <p className="font-serif text-[17px] leading-[1.75]" style={{ color: "var(--text-muted)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES (claro) */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="h2-display mb-16 animate-fade-up"
            style={{ fontSize: "clamp(28px,3.5vw,44px)", color: "var(--text-dark)" }}
          >
            {c.forwho.heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {c.forwho.items.map((item, i) => (
              <div
                key={i}
                className="py-8 animate-fade-up"
                style={{ borderTop: "1px solid var(--border-light)", animationDelay: `${i * 80}ms` }}
              >
                <p className="data-label mb-3" style={{ color: "var(--text-dark)" }}>{item.label}</p>
                <p className="font-serif text-[17px] leading-[1.75]" style={{ color: "var(--text-mid)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (oscuro) */}
      <section
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="h2-display mb-16 animate-fade-up"
            style={{ fontSize: "clamp(28px,3.5vw,44px)", color: "var(--text-light)" }}
          >
            {c.faq.heading}
          </h2>
          <div className="space-y-0 max-w-3xl">
            {c.faq.items.map((item, i) => (
              <div
                key={i}
                className="py-8 animate-fade-up"
                style={{ borderTop: "1px solid var(--border-dark)", animationDelay: `${i * 80}ms` }}
              >
                <h3
                  className="h3-display mb-4"
                  style={{ fontSize: "clamp(17px,1.8vw,20px)", color: "var(--text-light)" }}
                >
                  {item.q}
                </h3>
                <p className="font-serif text-[17px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
                  {item.a}
                </p>
              </div>
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
          {related.length > 0 && (
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {related.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href as any}
                  className="nav-label transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          )}
          <span className="data-label" style={{ color: "var(--text-muted)" }}>{c.footer.copyright}</span>
        </div>
      </footer>
    </div>
  )
}
