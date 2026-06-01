"use client"

import { useTranslations } from "next-intl"
import { CONSENT_KEY } from "@/components/consent-manager"

export function CookieResetButton() {
  const t = useTranslations("legal")

  function reset() {
    try {
      localStorage.removeItem(CONSENT_KEY)
    } catch {}
    window.location.reload()
  }

  return (
    <button
      onClick={reset}
      className="cta-label px-6 py-2 transition-colors"
      style={{
        color: "var(--moss)",
        border: "1px solid var(--border-light)",
      }}
    >
      {t("cookies_reset_btn")}
    </button>
  )
}
