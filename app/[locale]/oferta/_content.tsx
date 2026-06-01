"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { Link } from "@/i18n/navigation"

// ─── WhatsApp ─────────────────────────────────────────────────────────────────
// Cambia <NUMERO> por el número real sin espacios ni símbolo +
// Ejemplo España: 34612345678
const WA_NUMBER = "<NUMERO>"
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hola, me interesa el pack de presencia digital por 70€/mes. ¿Podemos hablar?"
)}`

// ─── Componentes internos ──────────────────────────────────────────────────────

function Logo({ className = "", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <Image
      src="/providentia.png"
      alt="Providentia"
      width={40}
      height={40}
      className={className}
      style={{ filter: onDark ? undefined : "brightness(0)" }}
    />
  )
}

function GlassNavbar() {
  const t = useTranslations("nav")
  const [scrolled, setScrolled] = useState(false)
  const [overDark, setOverDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 80)
      const els = document.querySelectorAll('[data-theme="dark"]')
      let dark = false
      els.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top <= 64 && r.bottom > 64) dark = true
      })
      setOverDark(dark)
    }
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const bg =
    scrolled || menuOpen
      ? overDark
        ? "rgba(30, 46, 36, 0.96)"
        : "rgba(235, 240, 233, 0.96)"
      : "transparent"

  const borderBottom =
    scrolled && !menuOpen
      ? overDark
        ? "1px solid var(--border-dark)"
        : "1px solid var(--border-light)"
      : "none"

  const textMain  = overDark ? "var(--text-light)" : "var(--text-dark)"
  const textSub   = overDark ? "var(--sage)"        : "var(--text-mid)"
  const menuBorder = overDark ? "var(--bg-dark-2)"  : "var(--border-light)"

  const navLinks = [
    { label: t("services"),   href: "/#servicios" },
    { label: t("method"),     href: "/#metodo"    },
    { label: t("insights"),   href: "/blog"        },
    { label: t("philosophy"), href: "/#filosofia"  },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-30 transition-all duration-500"
      style={{
        background: bg,
        borderBottom,
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
      }}
    >
      <div className="px-8 md:px-16 lg:px-24 py-5 flex items-center justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Logo className="w-5 h-5" onDark={overDark} />
          <span
            className="font-display italic text-lg leading-none transition-colors duration-300"
            style={{ color: textMain }}
          >
            Providentia
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-label transition-colors duration-300"
              style={{ color: textSub }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <LocaleSwitcher onDark={overDark} />
          <a
            href="#contacto"
            className="cta-label px-5 py-2 transition-colors duration-300"
            style={
              overDark
                ? { color: "var(--signal-inv)", border: "1px solid var(--border-dark)" }
                : { color: "var(--text-light)", backgroundColor: "var(--signal)" }
            }
          >
            {t("contact")}
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menú"
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: textMain,
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{ background: textMain, opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: textMain,
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-8 pb-10 pt-2 flex flex-col gap-7 border-t"
          style={{ borderColor: menuBorder }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-label text-[18px]"
              style={{ color: textSub }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            className="nav-label text-[18px]"
            style={{ color: textSub }}
            onClick={() => setMenuOpen(false)}
          >
            {t("contact")}
          </a>
          <div className="pt-2 border-t" style={{ borderColor: menuBorder }}>
            <LocaleSwitcher onDark={overDark} />
          </div>
        </div>
      )}
    </nav>
  )
}

// ─── Datos del pack ────────────────────────────────────────────────────────────

const PACK_ITEMS = [
  {
    numeral: "01",
    title: "Sesión de fotografía profesional",
    tag: "Photography",
    description: "Imágenes propias de tu negocio. Incluida, sin coste adicional.",
  },
  {
    numeral: "02",
    title: "1.000 flyers",
    tag: "Print",
    description: "Diseñados e impresos, listos para repartir desde el primer mes.",
  },
  {
    numeral: "03",
    title: "500 tarjetas de visita",
    tag: "Print",
    description: "Diseño e impresión incluidos. Tu imagen en cada apretón de manos.",
  },
  {
    numeral: "04",
    title: "Página web profesional",
    tag: "Web",
    description: "Con dominio y hosting incluidos. Rápida, segura y adaptada a móvil.",
  },
  {
    numeral: "05",
    title: "Ficha de Google",
    tag: "Local",
    description: "Optimizada y activa, con estrategia de reseñas para ganar visibilidad.",
  },
  {
    numeral: "06",
    title: "SEO y posicionamiento local",
    tag: "Search",
    description: "Para que te encuentren primero cuando buscan lo que ofreces, cerca.",
  },
  {
    numeral: "07",
    title: "Logo y branding",
    tag: "Identity",
    description: "Identidad visual que te distingue y transmite profesionalidad.",
  },
  {
    numeral: "08",
    title: "Redes sociales",
    tag: "Social",
    description: "Gestión de Instagram y TikTok. Presencia activa, sin que tú lo gestiones.",
  },
  {
    numeral: "09",
    title: "Informes mensuales",
    tag: "Reporting",
    description: "Resultados medibles cada mes. Sabes exactamente qué funciona.",
  },
]

const DELAYS = [
  "animation-delay-100",
  "animation-delay-200",
  "animation-delay-300",
  "animation-delay-400",
  "animation-delay-500",
  "animation-delay-600",
  "animation-delay-100",
  "animation-delay-200",
  "animation-delay-300",
]

// ─── Componente principal ──────────────────────────────────────────────────────

export function OfertaContent() {
  const tn = useTranslations("nav")
  const tf = useTranslations("footer")

  return (
    <div className="min-h-screen">
      <GlassNavbar />

      {/* ── I · HERO (claro) ── */}
      <section
        data-theme="light"
        className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto w-full py-[96px]">
          <div className="max-w-3xl">
            <p
              className="data-label mb-10 animate-fade-up"
              style={{ color: "var(--text-muted)" }}
            >
              Presencia digital
            </p>
            <h1
              className="h1-display animate-fade-up animation-delay-100"
              style={{ fontSize: "clamp(48px,7vw,88px)", color: "var(--text-dark)" }}
            >
              Tu negocio, listo<br />
              para que lo<br />
              encuentren.
            </h1>
            <p
              className="font-serif text-[18px] leading-[1.8] mt-10 max-w-xl animate-fade-up animation-delay-200"
              style={{ color: "var(--text-mid)" }}
            >
              Una agencia que monta toda tu presencia profesional —fotografía,
              web, branding, redes y posicionamiento— por una cuota mensual única.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-12 animate-fade-up animation-delay-300">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-label px-8 py-3 transition-colors"
                style={{ background: "var(--signal)", color: "var(--text-light)" }}
              >
                Reservar mi sitio →
              </a>
              <a
                href="#incluye"
                className="cta-label px-6 py-3 transition-colors"
                style={{ color: "var(--moss)", border: "1px solid var(--border-light)" }}
              >
                Ver qué incluye
              </a>
            </div>
            <p
              className="data-label mt-10 animate-fade-up animation-delay-400"
              style={{ color: "var(--text-muted)" }}
            >
              70 € / mes · Sin permanencia
            </p>
          </div>
        </div>
      </section>

      {/* ── II · QUÉ INCLUYE (oscuro) ── */}
      <section
        id="incluye"
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20">
            <p
              className="data-label mb-6 animate-fade-up"
              style={{ color: "var(--text-muted)" }}
            >
              Todo incluido
            </p>
            <h2
              className="h2-display animate-fade-up animation-delay-100"
              style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-light)" }}
            >
              Nueve servicios.<br />
              Una sola cuota.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {PACK_ITEMS.map((item, i) => (
              <div
                key={item.numeral}
                className={`glass-dark p-8 animate-fade-up ${DELAYS[i]}`}
              >
                <div
                  className="metric-display text-sm mb-6"
                  style={{ color: "var(--sage)" }}
                >
                  {item.numeral}
                </div>
                <h3
                  className="h3-display mb-3"
                  style={{ fontSize: "clamp(20px,2.5vw,28px)", color: "var(--text-light)" }}
                >
                  {item.title}
                </h3>
                <span className="signal-badge mb-5 inline-block">{item.tag}</span>
                <p
                  className="font-serif text-[18px] leading-[1.8] mt-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── III · PRECIO Y GARANTÍAS (claro) ── */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <p
              className="data-label mb-10 animate-fade-up"
              style={{ color: "var(--text-muted)" }}
            >
              Precio
            </p>

            <div className="flex items-baseline gap-3 animate-fade-up animation-delay-100">
              <span
                className="metric-display"
                style={{
                  fontSize: "clamp(64px,10vw,112px)",
                  color: "var(--text-dark)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                70 €
              </span>
              <span className="data-label" style={{ color: "var(--text-muted)" }}>
                / mes
              </span>
            </div>

            <div className="mt-14 animate-fade-up animation-delay-200">
              {[
                {
                  label: "Sin permanencia",
                  description: "Empieza y para cuando quieras.",
                },
                {
                  label: "Sin letra pequeña",
                  description: "Precio único, sin sorpresas al final del mes.",
                },
                {
                  label: "Cancelas cuando quieras",
                  description: "Un aviso y listo. Sin formularios ni penalizaciones.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-6 py-6"
                  style={{ borderTop: "1px solid var(--border-light)" }}
                >
                  <p
                    className="data-label sm:shrink-0"
                    style={{ color: "var(--text-dark)", minWidth: "13rem" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-serif text-[16px] leading-[1.7]"
                    style={{ color: "var(--text-mid)" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="font-serif text-[18px] leading-[1.8] mt-12 animate-fade-up animation-delay-300"
              style={{ color: "var(--text-mid)" }}
            >
              Si no estás contenta, lo dejas. Así de simple.
            </p>
          </div>
        </div>
      </section>

      {/* ── IV · SOPORTE Y CIERRE (oscuro) ── */}
      <section
        id="contacto"
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <p
              className="data-label mb-8 animate-fade-up"
              style={{ color: "var(--text-muted)" }}
            >
              Soporte directo por WhatsApp
            </p>
            <h2
              className="h2-display animate-fade-up animation-delay-100"
              style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-light)" }}
            >
              Hablemos.
            </h2>
            <p
              className="font-serif text-[18px] leading-[1.8] mt-8 mb-12 animate-fade-up animation-delay-200"
              style={{ color: "var(--text-muted)" }}
            >
              Cuéntanos tu negocio. Respondemos hoy.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-label px-8 py-3 transition-colors inline-block animate-fade-up animation-delay-300"
              style={{ background: "var(--signal-inv)", color: "var(--signal)" }}
            >
              Reservar mi sitio →
            </a>
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
            <Logo className="w-5 h-5" onDark={true} />
            <span className="font-display italic text-lg" style={{ color: "var(--text-light)" }}>
              Providentia
            </span>
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: tn("services"),   href: "/#servicios" },
              { label: tn("method"),     href: "/#metodo"    },
              { label: tn("insights"),   href: "/blog"        },
              { label: tn("philosophy"), href: "/#filosofia"  },
              { label: tn("contact"),    href: "#contacto"   },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="nav-label transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </a>
            ))}
          </nav>

          <span className="data-label" style={{ color: "var(--text-muted)" }}>
            {tf("copyright")}
          </span>
        </div>
      </footer>
    </div>
  )
}
