"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

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
        <div className="flex items-center gap-3">
          <Logo className="w-5 h-5" onDark={overDark} />
          <span className="font-display italic text-lg leading-none transition-colors duration-300" style={{ color: textMain }}>
            Providentia
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Servicios", href: "#servicios" },
            { label: "Método",    href: "#metodo"    },
            { label: "Insights",  href: "/blog"      },
            { label: "Filosofía", href: "#filosofia" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-label transition-colors duration-300"
              style={{ color: textSub }}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-block cta-label px-5 py-2 transition-colors duration-300"
          style={{
            color: "#2B5CE6",
            border: "1px solid rgba(43,92,230,0.30)",
          }}
        >
          Contacto
        </a>
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
              Barcelona · Inteligencia analítica
            </p>
            <h1 className="h1-display text-[clamp(48px,7vw,88px)] text-[#1A1C20] animate-fade-up animation-delay-100">
              Los datos dicen<br />lo que el instinto<br />no puede confirmar.
            </h1>
            <p className="font-serif text-[18px] text-[#6B6860] leading-[1.8] mt-10 max-w-lg animate-fade-up animation-delay-200">
              Providentia es una agencia de inteligencia analítica.<br />
              Trabajamos con un número reducido de clientes.<br />
              Los elegimos con cuidado.
            </p>
            <div className="flex items-center gap-8 mt-12 animate-fade-up animation-delay-300">
              <a
                href="#servicios"
                className="cta-label text-[#2B5CE6] border border-[rgba(43,92,230,0.30)] px-8 py-3 hover:bg-[rgba(43,92,230,0.08)] transition-colors"
              >
                Ver servicios
              </a>
              <a
                href="#contacto"
                className="cta-label text-[#6B6860] hover:text-[#1A1C20] transition-colors"
              >
                Contacto →
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
            <p className="data-label text-[#4A5568] mb-6 animate-fade-up">Servicios</p>
            <h2 className="h2-display text-[clamp(32px,4.5vw,56px)] text-[#F0EDE8] animate-fade-up animation-delay-100">
              Análisis. Estrategia.<br />Ejecución sin ruido.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            <ServiceCard
              numeral="01"
              title="Analítica Predictiva"
              tag="Forecasting"
              description="Modelos que anticipan tendencias de mercado antes de que el instinto las detecte. Reducimos la incertidumbre a una variable manejable."
              delay="animation-delay-200"
            />
            <ServiceCard
              numeral="02"
              title="Arquitectura de Datos"
              tag="Infrastructure"
              description="Infraestructuras limpias, escalables y auditables. La información fluye sin fricción. Las decisiones llegan más rápido."
              delay="animation-delay-300"
            />
            <ServiceCard
              numeral="03"
              title="Inteligencia de Lenguaje"
              tag="NLP"
              description="Extraemos señal de texto no estructurado. Opiniones de mercado, contratos, informes internos: todos hablan. Nosotros los interpretamos."
              delay="animation-delay-400"
            />
            <ServiceCard
              numeral="04"
              title="Visualización Analítica"
              tag="Data Viz"
              description="Los datos complejos merecen representaciones precisas. Cuadros de mando que informan sin necesidad de explicación."
              delay="animation-delay-500"
            />
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
              <p className="data-label text-[#9E9A94] mb-6 animate-fade-up">Método</p>
              <h2 className="h2-display text-[clamp(32px,4.5vw,56px)] text-[#1A1C20] animate-fade-up animation-delay-100">
                Un proceso<br />sin ambigüedades.
              </h2>
              <p className="font-serif text-[18px] text-[#6B6860] leading-[1.8] mt-8 animate-fade-up animation-delay-200">
                Cada proyecto sigue la misma disciplina: primero entender,
                luego medir, después actuar. Sin atajos.
              </p>
            </div>

            <div className="space-y-10 pt-2">
              <MethodBar label="Descubrimiento y diagnóstico"       percentage={95} delay="animation-delay-200" />
              <MethodBar label="Ingeniería de datos"                 percentage={88} delay="animation-delay-300" />
              <MethodBar label="Modelado y aprendizaje automático"   percentage={92} delay="animation-delay-400" />
              <MethodBar label="Implementación estratégica"          percentage={85} delay="animation-delay-500" />
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
            <p className="data-label text-[#4A5568] mb-8 animate-fade-up">Filosofía</p>
            <blockquote className="h2-display text-[clamp(28px,3.5vw,48px)] text-[#F0EDE8] leading-[1.2] animate-fade-up animation-delay-100">
              "La inteligencia no es acumular datos.<br />
              Es saber cuáles importan."
            </blockquote>

            <div
              id="contacto"
              className="mt-16 pt-16 border-t border-[#2A3340] animate-fade-up animation-delay-200"
            >
              <h3 className="h3-display text-[clamp(20px,2.5vw,28px)] text-[#F0EDE8] mb-4">
                Hablemos.
              </h3>
              <p className="font-serif text-[18px] text-[#8A9AAA] leading-[1.8] mb-8 max-w-md">
                Si su empresa toma decisiones importantes y los datos no forman
                parte de ese proceso, podemos cambiar eso.
              </p>
              <a
                href="mailto:hola@providentia.es"
                className="cta-label text-[#2B5CE6] border border-[rgba(43,92,230,0.30)] px-8 py-3 hover:bg-[rgba(43,92,230,0.08)] transition-colors inline-block"
              >
                Iniciar conversación
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── V · ÚLTIMAS REFLEXIONES (linen) ── */}
      <section
        data-theme="light"
        className="bg-[#F7F4EF] px-8 md:px-16 lg:px-24 py-[96px] border-t border-[#D6D0C7]"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="data-label text-[#9E9A94] mb-5">Insights</p>
              <h2 className="h2-display text-[clamp(32px,4.5vw,56px)] text-[#1A1C20]">
                Últimas reflexiones.
              </h2>
            </div>
            <a
              href="/blog"
              className="cta-label text-[#6B6860] hover:text-[#1A1C20] transition-colors hidden md:block"
            >
              Ver todos los artículos →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12">
            {[
              {
                slug:     "el-fin-del-marketing-de-suposiciones",
                category: "Opinión",
                title:    "El fin del marketing de suposiciones",
                excerpt:  "Por qué las marcas que siguen tomando decisiones sin datos estructurados están perdiendo terreno cada trimestre.",
                date:     "15 mayo 2026",
                readTime: 4,
              },
              {
                slug:     "tres-metricas-que-tu-cmo-deberia-mirar",
                category: "Estrategia",
                title:    "Tres métricas que tu CMO debería mirar antes que el ROI",
                excerpt:  "El ROI es una conclusión, no un indicador. Estas tres métricas previas determinan si una campaña va a funcionar.",
                date:     "8 mayo 2026",
                readTime: 3,
              },
              {
                slug:     "datos-2024-comportamiento-consumidor-2025",
                category: "Tendencias",
                title:    "Lo que los datos de 2024 nos dicen sobre el consumidor en 2025",
                excerpt:  "Análisis de patrones extraídos de más de 40 campañas para anticipar cómo va a comprar tu cliente el próximo año.",
                date:     "2 mayo 2026",
                readTime: 4,
              },
            ].map((post) => (
              <div key={post.slug} className="border-t border-[#D6D0C7] pt-7">
                <span
                  className="font-mono text-[11px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#2B5CE6" }}
                >
                  {post.category}
                </span>
                <a
                  href={`/blog/${post.slug}`}
                  className="block mt-3 mb-3 font-display italic font-light leading-[1.2] text-[#1A1C20] hover:text-[#2B5CE6] transition-colors"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(20px,2vw,24px)" }}
                >
                  {post.title}
                </a>
                <p
                  className="text-[#6B6860] leading-[1.7] mb-4"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "17px",
                           display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}
                >
                  {post.excerpt}
                </p>
                <span
                  className="text-[11px] tracking-[0.10em]"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#9E9A94" }}
                >
                  {post.date} · {post.readTime} min de lectura
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <a href="/blog" className="cta-label text-[#6B6860] hover:text-[#1A1C20] transition-colors">
              Ver todos los artículos →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER (linen) ── */}
      <footer
        data-theme="light"
        className="bg-[#F7F4EF] border-t border-[#D6D0C7] px-8 md:px-16 lg:px-24 py-12"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex items-center gap-3">
            <Logo className="w-5 h-5" onDark={false} />
            <span className="font-display italic text-[#1A1C20] text-lg">Providentia</span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Servicios", href: "#servicios" },
              { label: "Método",    href: "#metodo"    },
              { label: "Insights",  href: "/blog"      },
              { label: "Filosofía", href: "#filosofia" },
              { label: "Contacto",  href: "#contacto"  },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="nav-label text-[#6B6860] hover:text-[#1A1C20] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <span className="data-label text-[#9E9A94]">© MMXXVI · Barcelona</span>
        </div>
      </footer>
    </div>
  )
}
