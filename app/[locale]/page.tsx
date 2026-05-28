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

  const bg = scrolled
    ? overDark ? "rgba(20, 24, 32, 0.88)" : "rgba(247, 244, 239, 0.88)"
    : "transparent"

  const borderBottom = scrolled
    ? overDark ? "1px solid #2A3340" : "1px solid #D6D0C7"
    : "none"

  const textMain = overDark ? "#F0EDE8" : "#1A1C20"
  const textSub  = overDark ? "#8A9AAA" : "#6B6860"

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-30 transition-all duration-500"
      style={{
        background: bg,
        borderBottom,
        backdropFilter: scrolled ? "blur(32px)" : undefined,
        WebkitBackdropFilter: scrolled ? "blur(32px)" : undefined,
      }}
    >
      <div className="px-8 md:px-16 lg:px-24 py-5 flex items-center justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="w-5 h-5" onDark={overDark} />
          <span className="font-display italic text-lg leading-none transition-colors duration-300" style={{ color: textMain }}>
            Providentia
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {[
            { labelKey: "services" as const, href: "#servicios" },
            { labelKey: "method"   as const, href: "#metodo"    },
            { labelKey: "insights" as const, href: "/blog"      },
            { labelKey: "philosophy" as const, href: "#filosofia" },
          ].map(({ labelKey, href }) => (
            href.startsWith("#") ? (
              <a
                key={labelKey}
                href={href}
                className="nav-label transition-colors duration-300"
                style={{ color: textSub }}
              >
                {t(labelKey)}
              </a>
            ) : (
              <Link
                key={labelKey}
                href={href as "/blog"}
                className="nav-label transition-colors duration-300"
                style={{ color: textSub }}
              >
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
            style={{
              color: "#2B5CE6",
              border: "1px solid rgba(43,92,230,0.30)",
            }}
          >
            {t("contact")}
          </a>
        </div>
      </div>
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
    <div className={`border-t border-[#2A3340] pt-8 animate-fade-up ${delay}`}>
      <div className="metric-display text-[#4A5568] text-sm mb-6">{numeral}</div>
      <h3 className="h3-display text-[clamp(20px,2.5vw,28px)] text-[#F0EDE8] mb-3">{title}</h3>
      <span className="signal-badge mb-5 inline-block">{tag}</span>
      <p className="font-serif text-[18px] text-[#8A9AAA] leading-[1.8] mt-4">{description}</p>
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
        <span className="data-label text-[#6B6860]">{label}</span>
        <span className="metric-display text-[#2B5CE6] text-sm">
          {displayPercent}<span className="text-[10px] opacity-60 ml-0.5">%</span>
        </span>
      </div>
      <div className="h-[1px] bg-[#D6D0C7] relative">
        <div
          ref={barRef}
          className="absolute top-0 left-0 h-full bg-[#2B5CE6] transition-all duration-[2000ms] ease-out"
          style={{ width: "0%" }}
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

      {/* ── I · HERO (linen) ── */}
      <section
        data-theme="light"
        className="bg-[#F7F4EF] min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20"
      >
        <div className="max-w-[1200px] mx-auto w-full py-[96px]">
          <div className="max-w-4xl">
            <p className="data-label text-[#9E9A94] mb-10 animate-fade-up">
              {th("tagline")}
            </p>
            <h1 className="h1-display text-[clamp(48px,7vw,88px)] text-[#1A1C20] animate-fade-up animation-delay-100 whitespace-pre-line">
              {th("headline")}
            </h1>
            <p className="font-serif text-[18px] text-[#6B6860] leading-[1.8] mt-10 max-w-lg animate-fade-up animation-delay-200 whitespace-pre-line">
              {th("body")}
            </p>
            <div className="flex items-center gap-8 mt-12 animate-fade-up animation-delay-300">
              <a
                href="#servicios"
                className="cta-label text-[#2B5CE6] border border-[rgba(43,92,230,0.30)] px-8 py-3 hover:bg-[rgba(43,92,230,0.08)] transition-colors"
              >
                {th("cta_services")}
              </a>
              <a
                href="#contacto"
                className="cta-label text-[#6B6860] hover:text-[#1A1C20] transition-colors"
              >
                {th("cta_contact")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── II · SERVICIOS (midnight) ── */}
      <section
        id="servicios"
        data-theme="dark"
        className="bg-[#141820] px-8 md:px-16 lg:px-24 py-[96px]"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20">
            <p className="data-label text-[#4A5568] mb-6 animate-fade-up">{ts("label")}</p>
            <h2 className="h2-display text-[clamp(32px,4.5vw,56px)] text-[#F0EDE8] animate-fade-up animation-delay-100 whitespace-pre-line">
              {ts("heading")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
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

      {/* ── III · MÉTODO (linen) ── */}
      <section
        id="metodo"
        data-theme="light"
        className="bg-[#F7F4EF] px-8 md:px-16 lg:px-24 py-[96px]"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="data-label text-[#9E9A94] mb-6 animate-fade-up">{tm("label")}</p>
              <h2 className="h2-display text-[clamp(32px,4.5vw,56px)] text-[#1A1C20] animate-fade-up animation-delay-100 whitespace-pre-line">
                {tm("heading")}
              </h2>
              <p className="font-serif text-[18px] text-[#6B6860] leading-[1.8] mt-8 animate-fade-up animation-delay-200">
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

      {/* ── IV · FILOSOFÍA + CONTACTO (midnight) ── */}
      <section
        id="filosofia"
        data-theme="dark"
        className="bg-[#141820] px-8 md:px-16 lg:px-24 py-[96px]"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl">
            <p className="data-label text-[#4A5568] mb-8 animate-fade-up">{tp("label")}</p>
            <blockquote className="h2-display text-[clamp(28px,3.5vw,48px)] text-[#F0EDE8] leading-[1.2] animate-fade-up animation-delay-100 whitespace-pre-line">
              {tp("quote")}
            </blockquote>

            <div
              id="contacto"
              className="mt-16 pt-16 border-t border-[#2A3340] animate-fade-up animation-delay-200"
            >
              <h3 className="h3-display text-[clamp(20px,2.5vw,28px)] text-[#F0EDE8] mb-4">
                {tc("heading")}
              </h3>
              <p className="font-serif text-[18px] text-[#8A9AAA] leading-[1.8] mb-8 max-w-md">
                {tc("body")}
              </p>
              <a
                href="mailto:hola@providentia.es"
                className="cta-label text-[#2B5CE6] border border-[rgba(43,92,230,0.30)] px-8 py-3 hover:bg-[rgba(43,92,230,0.08)] transition-colors inline-block"
              >
                {tc("cta")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── V · INSIGHTS (linen) ── */}
      <section
        data-theme="light"
        className="bg-[#F7F4EF] px-8 md:px-16 lg:px-24 py-[96px] border-t border-[#D6D0C7]"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="data-label text-[#9E9A94] mb-5">{ti("label")}</p>
              <h2 className="h2-display text-[clamp(32px,4.5vw,56px)] text-[#1A1C20]">
                {ti("heading")}
              </h2>
            </div>
            <Link
              href="/blog"
              className="cta-label text-[#6B6860] hover:text-[#1A1C20] transition-colors hidden md:block"
            >
              {ti("cta_all")}
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12">
            {articles.map((post) => (
              <div key={post.slug} className="border-t border-[#D6D0C7] pt-7">
                <span
                  className="font-mono text-[11px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#2B5CE6" }}
                >
                  {post.category}
                </span>
                <Link
                  href={`/blog/${post.slug}` as any}
                  className="block mt-3 mb-3 font-display italic font-light leading-[1.2] text-[#1A1C20] hover:text-[#2B5CE6] transition-colors"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(20px,2vw,24px)" }}
                >
                  {post.title}
                </Link>
                <p
                  className="text-[#6B6860] leading-[1.7] mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "17px",
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
                  style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#9E9A94" }}
                >
                  {post.date} · {post.readTime} min
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Link href="/blog" className="cta-label text-[#6B6860] hover:text-[#1A1C20] transition-colors">
              {ti("cta_all")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER (linen) ── */}
      <footer
        data-theme="light"
        className="bg-[#F7F4EF] border-t border-[#D6D0C7] px-8 md:px-16 lg:px-24 py-12"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="w-5 h-5" onDark={false} />
            <span className="font-display italic text-[#1A1C20] text-lg">Providentia</span>
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
                <a
                  key={labelKey}
                  href={href}
                  className="nav-label text-[#6B6860] hover:text-[#1A1C20] transition-colors"
                >
                  {t(`nav.${labelKey}`)}
                </a>
              ) : (
                <Link
                  key={labelKey}
                  href={href as "/blog"}
                  className="nav-label text-[#6B6860] hover:text-[#1A1C20] transition-colors"
                >
                  {t(`nav.${labelKey}`)}
                </Link>
              )
            ))}
          </nav>

          <span className="data-label text-[#9E9A94]">{tf("copyright")}</span>
        </div>
      </footer>
    </div>
  )
}
