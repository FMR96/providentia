"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { useEffect, useState } from "react"

export function BlogNavbar() {
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
          <Image
            src="/providentia.png"
            alt="Providentia"
            width={20}
            height={20}
            style={{ filter: overDark ? undefined : "brightness(0)" }}
          />
          <span
            className="font-display italic text-lg leading-none transition-colors duration-300"
            style={{ color: textMain }}
          >
            Providentia
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {[
            { labelKey: "services"   as const, href: "/#servicios"  },
            { labelKey: "method"     as const, href: "/#metodo"     },
            { labelKey: "insights"   as const, href: "/blog"        },
            { labelKey: "philosophy" as const, href: "/#filosofia"  },
          ].map(({ labelKey, href }) => (
            <Link
              key={labelKey}
              href={href as any}
              className="nav-label transition-colors duration-300"
              style={{ color: textSub }}
            >
              {t(labelKey)}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <LocaleSwitcher onDark={overDark} />
          <Link
            href="/#contacto"
            className="cta-label px-5 py-2 transition-colors duration-300"
            style={{
              color: "#2B5CE6",
              border: "1px solid rgba(43,92,230,0.30)",
            }}
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </nav>
  )
}
