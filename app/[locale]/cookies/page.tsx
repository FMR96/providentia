import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { LegalShell } from "@/components/legal-shell"
import { CookieResetButton } from "./_reset"
import { canonicalUrl, hreflangAlternates } from "@/lib/seo"

// ─── Tabla de tecnologías ─────────────────────────────────────────────────────

const TECH_TABLE = {
  es: {
    headers: ["Nombre", "Tipo", "Finalidad", "Duración", "Proveedor"],
    rows: [
      ["providentia_consent", "Funcional", "Guarda tu preferencia de consentimiento", "Hasta borrar datos del navegador", "Propio (localStorage)"],
      ["Vercel Analytics", "Analítica (opcional)", "Estadísticas de visitas anónimas, sin identificación individual ni cookies", "Datos agregados, sin almacenamiento individual", "Vercel Inc."],
    ],
  },
  en: {
    headers: ["Name", "Type", "Purpose", "Duration", "Provider"],
    rows: [
      ["providentia_consent", "Functional", "Stores your consent preference", "Until browser data is cleared", "First-party (localStorage)"],
      ["Vercel Analytics", "Analytics (optional)", "Anonymous visit statistics, no individual identification or cookies", "Aggregated data, no individual storage", "Vercel Inc."],
    ],
  },
  it: {
    headers: ["Nome", "Tipo", "Finalità", "Durata", "Fornitore"],
    rows: [
      ["providentia_consent", "Funzionale", "Salva la tua preferenza di consenso", "Fino alla cancellazione dei dati del browser", "Proprio (localStorage)"],
      ["Vercel Analytics", "Analitica (opzionale)", "Statistiche di visita anonime, senza identificazione individuale né cookie", "Dati aggregati, senza archiviazione individuale", "Vercel Inc."],
    ],
  },
} as const

const CONTENT = {
  es: {
    title: "Política de Cookies",
    updated: "Última actualización: junio de 2026",
    intro: "Las cookies son pequeños archivos de texto almacenados en tu dispositivo al visitar un sitio web. Además de cookies HTTP, algunos sitios usan el almacenamiento local del navegador (localStorage) para guardar preferencias. Esta política explica qué tecnologías usa providentialabs.com y cómo puedes gestionarlas.",
    tableHeading: "Tecnologías que usamos",
    essentialHeading: "Tecnologías esenciales",
    essentialBody: "El idioma del sitio se gestiona mediante la URL (sin cookie). Tu preferencia de consentimiento se guarda en localStorage, no en una cookie HTTP. Estas tecnologías son necesarias para el funcionamiento correcto del sitio y no requieren tu consentimiento.",
    analyticsHeading: "Análisis anónimo",
    analyticsBody: "Vercel Analytics recopila información agregada sobre visitas (páginas consultadas, país, tipo de dispositivo) sin identificar a los usuarios individualmente y sin usar cookies. Solo activamos este servicio si aceptas. Puedes consultar la política de privacidad de Vercel en vercel.com/legal/privacy-policy.",
    browserHeading: "Cómo gestionar las tecnologías en tu navegador",
    browserBody: "Puedes borrar los datos almacenados localmente desde la configuración de tu navegador:\n\n· Chrome: Ajustes → Privacidad y seguridad → Borrar datos de navegación\n· Firefox: Ajustes → Privacidad y seguridad → Limpiar datos\n· Safari: Preferencias → Privacidad → Gestionar datos del sitio web\n· Edge: Configuración → Privacidad, búsqueda y servicios → Borrar datos de exploración",
    preferencesHeading: "Gestionar tus preferencias",
    preferencesBody: "Puedes cambiar tu elección en cualquier momento usando el botón siguiente. Si borras los datos del navegador, el banner de cookies volverá a aparecer en tu próxima visita.",
    contactHeading: "Más información",
    contactBody: "Para cualquier consulta sobre esta política, escríbenos a hola@providentia.es.",
  },
  en: {
    title: "Cookie Policy",
    updated: "Last updated: June 2026",
    intro: "Cookies are small text files stored on your device when you visit a website. In addition to HTTP cookies, some sites use browser localStorage to store preferences. This policy explains what technologies providentialabs.com uses and how you can manage them.",
    tableHeading: "Technologies we use",
    essentialHeading: "Essential technologies",
    essentialBody: "The site language is managed via the URL (no cookie). Your consent preference is stored in localStorage, not an HTTP cookie. These technologies are necessary for the correct functioning of the site and do not require your consent.",
    analyticsHeading: "Anonymous analytics",
    analyticsBody: "Vercel Analytics collects aggregated information about visits (pages viewed, country, device type) without identifying users individually and without using cookies. We only activate this service if you accept. You can read Vercel's privacy policy at vercel.com/legal/privacy-policy.",
    browserHeading: "How to manage technologies in your browser",
    browserBody: "You can clear locally stored data from your browser settings:\n\n· Chrome: Settings → Privacy and security → Clear browsing data\n· Firefox: Settings → Privacy & Security → Clear Data\n· Safari: Preferences → Privacy → Manage Website Data\n· Edge: Settings → Privacy, search, and services → Clear browsing data",
    preferencesHeading: "Manage your preferences",
    preferencesBody: "You can change your choice at any time using the button below. If you clear your browser data, the cookie banner will appear again on your next visit.",
    contactHeading: "More information",
    contactBody: "For any questions about this policy, write to us at hola@providentia.es.",
  },
  it: {
    title: "Cookie Policy",
    updated: "Ultimo aggiornamento: giugno 2026",
    intro: "I cookie sono piccoli file di testo memorizzati sul tuo dispositivo quando visiti un sito web. Oltre ai cookie HTTP, alcuni siti utilizzano il localStorage del browser per salvare le preferenze. Questa policy spiega quali tecnologie utilizza providentialabs.com e come puoi gestirle.",
    tableHeading: "Tecnologie che utilizziamo",
    essentialHeading: "Tecnologie essenziali",
    essentialBody: "La lingua del sito è gestita tramite URL (senza cookie). La tua preferenza di consenso viene salvata nel localStorage, non in un cookie HTTP. Queste tecnologie sono necessarie per il corretto funzionamento del sito e non richiedono il tuo consenso.",
    analyticsHeading: "Analisi anonima",
    analyticsBody: "Vercel Analytics raccoglie informazioni aggregate sulle visite (pagine visitate, paese, tipo di dispositivo) senza identificare individualmente gli utenti e senza utilizzare cookie. Attiviamo questo servizio solo se lo accetti. Puoi leggere la privacy policy di Vercel su vercel.com/legal/privacy-policy.",
    browserHeading: "Come gestire le tecnologie nel tuo browser",
    browserBody: "Puoi cancellare i dati salvati localmente dalle impostazioni del tuo browser:\n\n· Chrome: Impostazioni → Privacy e sicurezza → Cancella dati di navigazione\n· Firefox: Impostazioni → Privacy e sicurezza → Pulisci dati\n· Safari: Preferenze → Privacy → Gestisci dati siti web\n· Edge: Impostazioni → Privacy, ricerca e servizi → Cancella dati di navigazione",
    preferencesHeading: "Gestisci le tue preferenze",
    preferencesBody: "Puoi cambiare la tua scelta in qualsiasi momento usando il pulsante qui sotto. Se cancelli i dati del browser, il banner cookie riapparirà alla prossima visita.",
    contactHeading: "Ulteriori informazioni",
    contactBody: "Per qualsiasi domanda su questa policy, scrivici a hola@providentia.es.",
  },
} as const

// ─── Metadata ────────────────────────────────────────────────────────────────

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "legal" })
  return {
    title: t("cookies_meta_title"),
    description: t("cookies_meta_desc"),
    alternates: {
      canonical: canonicalUrl(locale, '/cookies'),
      languages: hreflangAlternates('/cookies'),
    },
    openGraph: {
      title: t("cookies_meta_title"),
      url: canonicalUrl(locale, '/cookies'),
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "legal" })
  const c = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.es
  const table = TECH_TABLE[locale as keyof typeof TECH_TABLE] ?? TECH_TABLE.es

  return (
    <LegalShell locale={locale}>
      {/* Header */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 pt-32 pb-16"
        style={{ background: "var(--bg-light)", borderBottom: "1px solid var(--border-light)" }}
      >
        <div className="max-w-[800px] mx-auto">
          <p className="data-label mb-8" style={{ color: "var(--text-muted)" }}>
            {t("cookies_tagline")}
          </p>
          <h1
            className="h1-display"
            style={{ fontSize: "clamp(40px,6vw,72px)", color: "var(--text-dark)" }}
          >
            {c.title}
          </h1>
          <p className="data-label mt-6" style={{ color: "var(--text-muted)" }}>
            {c.updated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[800px] mx-auto">

          {/* Intro */}
          <p
            className="font-serif text-[17px] leading-[1.85] mb-16"
            style={{ color: "var(--text-mid)" }}
          >
            {c.intro}
          </p>

          {/* Table */}
          <div className="py-10" style={{ borderTop: "1px solid var(--border-light)" }}>
            <h2
              className="h3-display mb-8"
              style={{ fontSize: "clamp(18px,2vw,22px)", color: "var(--text-dark)" }}
            >
              {c.tableHeading}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {table.headers.map((h) => (
                      <th
                        key={h}
                        className="data-label text-left pb-4 pr-6"
                        style={{
                          color: "var(--text-dark)",
                          borderBottom: "1px solid var(--border-light)",
                          verticalAlign: "bottom",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="font-serif text-[15px] leading-[1.7] py-4 pr-6"
                          style={{
                            color: j === 0 ? "var(--text-dark)" : "var(--text-mid)",
                            borderBottom: "1px solid var(--border-light)",
                            verticalAlign: "top",
                            fontWeight: j === 0 ? 400 : "inherit",
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Essential */}
          <div className="py-10" style={{ borderTop: "1px solid var(--border-light)" }}>
            <h2
              className="h3-display mb-5"
              style={{ fontSize: "clamp(18px,2vw,22px)", color: "var(--text-dark)" }}
            >
              {c.essentialHeading}
            </h2>
            <p className="font-serif text-[17px] leading-[1.85]" style={{ color: "var(--text-mid)" }}>
              {c.essentialBody}
            </p>
          </div>

          {/* Analytics */}
          <div className="py-10" style={{ borderTop: "1px solid var(--border-light)" }}>
            <h2
              className="h3-display mb-5"
              style={{ fontSize: "clamp(18px,2vw,22px)", color: "var(--text-dark)" }}
            >
              {c.analyticsHeading}
            </h2>
            <p className="font-serif text-[17px] leading-[1.85]" style={{ color: "var(--text-mid)" }}>
              {c.analyticsBody}
            </p>
          </div>

          {/* Browser settings */}
          <div className="py-10" style={{ borderTop: "1px solid var(--border-light)" }}>
            <h2
              className="h3-display mb-5"
              style={{ fontSize: "clamp(18px,2vw,22px)", color: "var(--text-dark)" }}
            >
              {c.browserHeading}
            </h2>
            <p
              className="font-serif text-[17px] leading-[1.85] whitespace-pre-line"
              style={{ color: "var(--text-mid)" }}
            >
              {c.browserBody}
            </p>
          </div>

          {/* Preferences reset */}
          <div className="py-10" style={{ borderTop: "1px solid var(--border-light)" }}>
            <h2
              className="h3-display mb-5"
              style={{ fontSize: "clamp(18px,2vw,22px)", color: "var(--text-dark)" }}
            >
              {c.preferencesHeading}
            </h2>
            <p
              className="font-serif text-[17px] leading-[1.85] mb-8"
              style={{ color: "var(--text-mid)" }}
            >
              {c.preferencesBody}
            </p>
            <CookieResetButton />
          </div>

          {/* Contact */}
          <div className="py-10" style={{ borderTop: "1px solid var(--border-light)" }}>
            <h2
              className="h3-display mb-5"
              style={{ fontSize: "clamp(18px,2vw,22px)", color: "var(--text-dark)" }}
            >
              {c.contactHeading}
            </h2>
            <p className="font-serif text-[17px] leading-[1.85]" style={{ color: "var(--text-mid)" }}>
              {c.contactBody}
            </p>
          </div>

        </div>
      </section>
    </LegalShell>
  )
}
