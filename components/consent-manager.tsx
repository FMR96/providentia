"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/next"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export const CONSENT_KEY = "providentia_consent"

export function ConsentManager() {
  // null = not yet read from storage (show nothing until effect runs)
  const [consent, setConsent] = useState<boolean | null>(null)
  const t = useTranslations("legal")

  useEffect(() => {
    try {
      const v = localStorage.getItem(CONSENT_KEY)
      if (v === "1") setConsent(true)
      else if (v === "0") setConsent(false)
      // else: stays null → banner shows
    } catch {
      // localStorage unavailable (private mode, etc.) → stay null → show banner
    }
  }, [])

  function accept() {
    try { localStorage.setItem(CONSENT_KEY, "1") } catch {}
    setConsent(true)
  }

  function reject() {
    try { localStorage.setItem(CONSENT_KEY, "0") } catch {}
    setConsent(false)
  }

  return (
    <>
      {/* Analytics only when user has explicitly accepted */}
      {consent === true && process.env.NODE_ENV === "production" && <Analytics />}

      {/* Banner: only while consent is unknown (null) */}
      {consent === null && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Gestión de cookies"
          style={{
            background: "rgba(26, 43, 32, 0.97)",
            borderTop: "1px solid var(--border-dark)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-24 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <p
              className="font-serif text-[15px] leading-[1.8]"
              style={{ color: "var(--text-muted)", maxWidth: "50rem" }}
            >
              {t("banner_body")}{" "}
              <Link
                href="/cookies"
                className="transition-colors"
                style={{
                  color: "var(--sage)",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                {t("banner_learn_more")}
              </Link>
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={reject}
                className="cta-label px-5 py-2 transition-colors"
                style={{ color: "var(--text-muted)", border: "1px solid var(--border-dark)" }}
              >
                {t("banner_reject")}
              </button>
              <button
                onClick={accept}
                className="cta-label px-5 py-2 transition-colors"
                style={{ background: "var(--signal-inv)", color: "var(--signal)" }}
              >
                {t("banner_accept")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
