import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { SiteNav } from "@/components/site-nav"

interface Props {
  locale: string
  children: React.ReactNode
}

export async function LegalShell({ locale, children }: Props) {
  const tf = await getTranslations({ locale, namespace: "footer" })
  const tl = await getTranslations({ locale, namespace: "legal" })
  const tn = await getTranslations({ locale, namespace: "nav" })

  return (
    <div className="min-h-screen">
      <SiteNav />

      {children}

      {/* ── FOOTER ── */}
      <footer
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-12"
        style={{ background: "var(--evergreen)", borderTop: "1px solid var(--border-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/providentia.png"
                alt="Providentia"
                width={20}
                height={20}
              />
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
                { label: tn("contact"),    href: "/#contacto"  },
              ].map(({ label, href }) => (
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

            <span className="data-label" style={{ color: "var(--text-muted)" }}>
              {tf("copyright")}
            </span>
          </div>

          {/* Legal links row */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-2 pt-6"
            style={{ borderTop: "1px solid var(--border-dark)" }}
          >
            {[
              { label: tl("nav_notice"),  href: "/legal"   },
              { label: tl("nav_privacy"), href: "/privacy" },
              { label: tl("nav_cookies"), href: "/cookies" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href as any}
                className="nav-label transition-colors"
                style={{ color: "var(--text-muted)", opacity: 0.6 }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
