"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { useEffect, useRef, useState } from "react"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { Link } from "@/i18n/navigation"

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
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const bg = scrolled || menuOpen
    ? overDark
      ? "rgba(30, 46, 36, 0.96)"
      : "rgba(235, 240, 233, 0.96)"
    : "transparent"

  const borderBottom = scrolled && !menuOpen
    ? overDark
      ? "1px solid var(--border-dark)"
      : "1px solid var(--border-light)"
    : "none"

  const textMain = overDark ? "var(--text-light)"  : "var(--text-dark)"
  const textSub  = overDark ? "var(--sage)"         : "var(--text-mid)"
  const menuBorder = overDark ? "var(--bg-dark-2)"  : "var(--border-light)"

  const navLinks = [
    { labelKey: "services"   as const, href: "#servicios" },
    { labelKey: "method"     as const, href: "#metodo"    },
    { labelKey: "insights"   as const, href: "/blog"      },
    { labelKey: "philosophy" as const, href: "#filosofia" },
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
          <span className="font-display italic text-lg leading-none transition-colors duration-300" style={{ color: textMain }}>
            Providentia
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ labelKey, href }) => (
            href.startsWith("#") ? (
              <a key={labelKey} href={href} className="nav-label transition-colors duration-300" style={{ color: textSub }}>
                {t(labelKey)}
              </a>
            ) : (
              <Link key={labelKey} href={href as "/blog"} className="nav-label transition-colors duration-300" style={{ color: textSub }}>
                {t(labelKey)}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <LocaleSwitcher onDark={overDark} />
          <a
            href="#contacto"
            className="cta-label px-5 py-2 transition-colors duration-300"
            style={overDark
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
          <span className="block w-5 h-px transition-all duration-300" style={{ background: textMain, transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <span className="block w-5 h-px transition-all duration-300" style={{ background: textMain, opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-300" style={{ background: textMain, transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-8 pb-10 pt-2 flex flex-col gap-7 border-t" style={{ borderColor: menuBorder }}>
          {navLinks.map(({ labelKey, href }) => (
            href.startsWith("#") ? (
              <a key={labelKey} href={href} className="nav-label text-[18px]" style={{ color: textSub }} onClick={() => setMenuOpen(false)}>
                {t(labelKey)}
              </a>
            ) : (
              <Link key={labelKey} href={href as "/blog"} className="nav-label text-[18px]" style={{ color: textSub }} onClick={() => setMenuOpen(false)}>
                {t(labelKey)}
              </Link>
            )
          ))}
          <a href="#contacto" className="nav-label text-[18px]" style={{ color: textSub }} onClick={() => setMenuOpen(false)}>
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
  return (
    <div className={`glass-dark p-8 animate-fade-up ${delay}`}>
      <div className="metric-display text-sm mb-6" style={{ color: "var(--sage)" }}>{numeral}</div>
      <h3 className="h3-display mb-3" style={{ fontSize: "clamp(20px,2.5vw,28px)", color: "var(--text-light)" }}>{title}</h3>
      <span className="signal-badge mb-5 inline-block">{tag}</span>
      <p className="font-serif text-[18px] leading-[1.8] mt-4" style={{ color: "var(--text-muted)" }}>{description}</p>
    </div>
  )
}

function MethodBar({
  label,
  percentage,
  delay,
}: {
  label: string
  percentage: number
  delay: string
}) {
  const barRef       = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [displayPercent, setDisplayPercent] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            setTimeout(() => {
              if (barRef.current) barRef.current.style.width = `${percentage}%`
            }, 300)
            const duration = 2000
            const start = performance.now()
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - t, 3)
              setDisplayPercent(Math.round(eased * percentage))
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.5 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [percentage])

  return (
    <div ref={containerRef} className={`animate-fade-up ${delay}`}>
      <div className="flex justify-between mb-3">
        <span className="data-label" style={{ color: "var(--text-dark)" }}>{label}</span>
        <span className="metric-display text-sm" style={{ color: "var(--text-muted)" }}>
          {displayPercent}<span className="text-[10px] opacity-60 ml-0.5">%</span>
        </span>
      </div>
      <div className="h-[1px] relative" style={{ background: "rgba(142, 165, 140, 0.20)" }}>
        <div
          ref={barRef}
          className="absolute top-0 left-0 h-full transition-all duration-[2000ms] ease-out"
          style={{ width: "0%", background: "var(--moss)" }}
        />
      </div>
    </div>
  )
}

export default function Home() {
  const t  = useTranslations()
  const th = useTranslations("hero")
  const ts = useTranslations("services")
  const tm = useTranslations("method")
  const tp = useTranslations("philosophy")
  const tc = useTranslations("contact")
  const ti = useTranslations("insights")
  const tf = useTranslations("footer")

  const serviceItems = ts.raw("items") as Array<{ numeral: string; title: string; tag: string; description: string }>
  const methodBars   = tm.raw("bars") as Array<{ label: string; percentage: number }>
  const articles     = ti.raw("articles") as Array<{ slug: string; category: string; title: string; excerpt: string; date: string; readTime: number }>

  const methodDelays = ["animation-delay-200", "animation-delay-300", "animation-delay-400", "animation-delay-500"]

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

            <div className="space-y-10 pt-2">
              {methodBars.map((bar, i) => (
                <MethodBar
                  key={bar.label}
                  label={bar.label}
                  percentage={bar.percentage}
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
                className="cta-label px-8 py-3 transition-colors inline-block"
                style={{ color: "var(--signal-inv)", border: "1px solid var(--border-dark)" }}
              >
                {tc("cta")}
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

      {/* ── FOOTER (evergreen oscuro) ── */}
      <footer
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-12"
        style={{ background: "var(--evergreen)", borderTop: "1px solid var(--border-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="w-5 h-5" onDark={true} />
            <span className="font-display italic text-lg" style={{ color: "var(--text-light)" }}>Providentia</span>
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { labelKey: "services"   as const, href: "#servicios" },
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
                <Link key={labelKey} href={href as "/blog"} className="nav-label transition-colors" style={{ color: "var(--text-muted)" }}>
                  {t(`nav.${labelKey}`)}
                </Link>
              )
            ))}
          </nav>

          <span className="data-label" style={{ color: "var(--text-muted)" }}>{tf("copyright")}</span>
        </div>
      </footer>
    </div>
  )
}
