"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { Link } from "@/i18n/navigation"

export function SiteNav() {
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

  const textMain   = overDark ? "var(--text-light)" : "var(--text-dark)"
  const textSub    = overDark ? "var(--sage)"        : "var(--text-mid)"
  const menuBorder = overDark ? "var(--bg-dark-2)"   : "var(--border-light)"

  const navLinks = [
    { labelKey: "services"   as const, href: "/servicios"  },
    { labelKey: "method"     as const, href: "/#metodo"    },
    { labelKey: "insights"   as const, href: "/blog"        },
    { labelKey: "philosophy" as const, href: "/#filosofia"  },
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

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ labelKey, href }) => (
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
            style={
              overDark
                ? { color: "var(--signal-inv)", border: "1px solid var(--border-dark)" }
                : { color: "var(--text-light)", backgroundColor: "var(--signal)" }
            }
          >
            {t("contact")}
          </Link>
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
          {navLinks.map(({ labelKey, href }) => (
            <Link
              key={labelKey}
              href={href as any}
              className="nav-label text-[18px]"
              style={{ color: textSub }}
              onClick={() => setMenuOpen(false)}
            >
              {t(labelKey)}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="nav-label text-[18px]"
            style={{ color: textSub }}
            onClick={() => setMenuOpen(false)}
          >
            {t("contact")}
          </Link>
          <div className="pt-2 border-t" style={{ borderColor: menuBorder }}>
            <LocaleSwitcher onDark={overDark} />
          </div>
        </div>
      )}
    </nav>
  )
}
