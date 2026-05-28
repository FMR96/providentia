import Script from "next/script"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { BlogNavbar } from "./_navbar"
import "@/styles/blog.css"

async function BlogFooter() {
  const t = await getTranslations("nav")
  const tf = await getTranslations("footer")

  return (
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
            { labelKey: "services"   as const, href: "/#servicios"  },
            { labelKey: "method"     as const, href: "/#metodo"     },
            { labelKey: "insights"   as const, href: "/blog"        },
            { labelKey: "philosophy" as const, href: "/#filosofia"  },
            { labelKey: "contact"    as const, href: "/#contacto"   },
          ].map(({ labelKey, href }) => (
            <Link
              key={labelKey}
              href={href as any}
              className="nav-label transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              {t(labelKey)}
            </Link>
          ))}
        </nav>

        <span className="data-label" style={{ color: "var(--text-muted)" }}>{tf("copyright")}</span>
      </div>
    </footer>
  )
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BlogNavbar />
      <main>{children}</main>
      <BlogFooter />
      <Script src="/blog.js" strategy="afterInteractive" />
    </>
  )
}
