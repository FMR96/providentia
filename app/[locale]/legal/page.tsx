import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { LegalShell } from "@/components/legal-shell"

// ─── Contenido legal por idioma ──────────────────────────────────────────────
// Sustituye los marcadores [RAZÓN SOCIAL], [NIF] y [DOMICILIO] antes de publicar.

const CONTENT = {
  es: {
    title: "Aviso Legal",
    updated: "Junio 2026",
    sections: [
      {
        heading: "Identificación del titular",
        body: `En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular del sitio web providentialabs.com es:

Razón social: [RAZÓN SOCIAL]
NIF/CIF: [NIF]
Domicilio: [DOMICILIO]
Correo electrónico: hola@providentia.es`,
      },
      {
        heading: "Objeto y condiciones de uso",
        body: "El acceso al sitio web es libre y gratuito. El uso del sitio implica la aceptación de este aviso legal en su versión vigente. Providentia se reserva el derecho a modificar los contenidos del sitio sin previo aviso.",
      },
      {
        heading: "Propiedad intelectual e industrial",
        body: "Todos los contenidos del sitio web —textos, imágenes, logotipos, código fuente y diseño— son propiedad de Providentia o de sus legítimos titulares, y están protegidos por la normativa de propiedad intelectual e industrial vigente. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa.",
      },
      {
        heading: "Exclusión de responsabilidad",
        body: "Providentia no se responsabiliza de los daños derivados del uso del sitio o de la imposibilidad de acceder a él. Los enlaces a sitios externos se ofrecen a título informativo; Providentia no controla su contenido ni asume responsabilidad sobre ellos.",
      },
      {
        heading: "Ley aplicable y jurisdicción",
        body: "Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del uso del sitio, las partes se someten a los Juzgados y Tribunales de España, con renuncia a cualquier otro fuero que pudiera corresponderles.",
      },
    ],
  },
  en: {
    title: "Legal Notice",
    updated: "June 2026",
    sections: [
      {
        heading: "Website owner",
        body: `In accordance with Spanish Law 34/2002 on Information Society Services (LSSI-CE), the owner of the website providentialabs.com is:

Legal name: [LEGAL NAME]
Tax ID: [NIF]
Address: [ADDRESS]
Email: hola@providentia.es`,
      },
      {
        heading: "Use of the website",
        body: "Access to the website is free of charge. Use of the website implies acceptance of this legal notice in its current version. Providentia reserves the right to modify the website's contents without prior notice.",
      },
      {
        heading: "Intellectual and industrial property",
        body: "All content on the website — texts, images, logos, source code and design — is owned by Providentia or its legitimate rights holders, and is protected by applicable intellectual and industrial property regulations. Reproduction, distribution or public communication without express authorisation is prohibited.",
      },
      {
        heading: "Disclaimer",
        body: "Providentia is not liable for damages arising from the use of the website or inability to access it. Links to external sites are provided for information only; Providentia does not control their content and assumes no responsibility for them.",
      },
      {
        heading: "Applicable law and jurisdiction",
        body: "This legal notice is governed by Spanish law. Any disputes relating to the use of the website shall be subject to the courts of Spain, waiving any other jurisdiction.",
      },
    ],
  },
  it: {
    title: "Avviso Legale",
    updated: "Giugno 2026",
    sections: [
      {
        heading: "Dati del titolare",
        body: `Ai sensi della Legge spagnola 34/2002 sui Servizi della Società dell'Informazione (LSSI-CE), il titolare del sito web providentialabs.com è:

Ragione sociale: [RAGIONE SOCIALE]
Codice fiscale/P.IVA: [NIF]
Sede legale: [INDIRIZZO]
Email: hola@providentia.es`,
      },
      {
        heading: "Utilizzo del sito",
        body: "L'accesso al sito web è libero e gratuito. L'utilizzo del sito implica l'accettazione del presente avviso legale nella versione vigente. Providentia si riserva il diritto di modificare i contenuti del sito senza preavviso.",
      },
      {
        heading: "Proprietà intellettuale e industriale",
        body: "Tutti i contenuti del sito — testi, immagini, loghi, codice sorgente e design — sono di proprietà di Providentia o dei loro legittimi titolari, e sono protetti dalla normativa vigente in materia di proprietà intellettuale e industriale. È vietata la loro riproduzione, distribuzione o comunicazione pubblica senza espressa autorizzazione.",
      },
      {
        heading: "Esclusione di responsabilità",
        body: "Providentia non è responsabile dei danni derivanti dall'utilizzo del sito o dall'impossibilità di accedervi. I link a siti esterni sono forniti a titolo informativo; Providentia non ne controlla il contenuto e non assume alcuna responsabilità al riguardo.",
      },
      {
        heading: "Legge applicabile e giurisdizione",
        body: "Il presente avviso legale è disciplinato dalla legge spagnola. Per qualsiasi controversia relativa all'utilizzo del sito, le parti si sottomettono ai tribunali spagnoli, rinunciando a qualsiasi altro foro competente.",
      },
    ],
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
    title: t("notice_meta_title"),
    description: t("notice_meta_desc"),
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function LegalPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "legal" })
  const content = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.es

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
            {t("notice_tagline")}
          </p>
          <h1
            className="h1-display"
            style={{ fontSize: "clamp(40px,6vw,72px)", color: "var(--text-dark)" }}
          >
            {content.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[800px] mx-auto space-y-0">
          {content.sections.map((section) => (
            <div
              key={section.heading}
              className="py-10"
              style={{ borderTop: "1px solid var(--border-light)" }}
            >
              <h2
                className="h3-display mb-5"
                style={{ fontSize: "clamp(18px,2vw,22px)", color: "var(--text-dark)" }}
              >
                {section.heading}
              </h2>
              <p
                className="font-serif text-[17px] leading-[1.85] whitespace-pre-line"
                style={{ color: "var(--text-mid)" }}
              >
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </LegalShell>
  )
}
