import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import { BlogNavbar } from "./_navbar"
import "@/styles/blog.css"

function BlogFooter() {
  return (
    <footer
      data-theme="light"
      className="bg-[#F7F4EF] border-t border-[#D6D0C7] px-8 md:px-16 lg:px-24 py-12"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/providentia.png"
            alt="Providentia"
            width={20}
            height={20}
            style={{ filter: "brightness(0)" }}
          />
          <span className="font-display italic text-[#1A1C20] text-lg">Providentia</span>
        </Link>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { label: "Servicios",  href: "/#servicios"  },
            { label: "Método",     href: "/#metodo"     },
            { label: "Insights",   href: "/blog"        },
            { label: "Filosofía",  href: "/#filosofia"  },
            { label: "Contacto",   href: "/#contacto"   },
          ].map(({ label, href }) => (
            <Link key={label} href={href} className="nav-label text-[#6B6860] hover:text-[#1A1C20] transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <span className="data-label text-[#9E9A94]">© MMXXVI · Barcelona</span>
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
