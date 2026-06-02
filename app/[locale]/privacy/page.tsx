import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { LegalShell } from "@/components/legal-shell"
import { canonicalUrl, hreflangAlternates } from "@/lib/seo"

// ─── Contenido por idioma ─────────────────────────────────────────────────────
// Completar con nombre legal, NIF y domicilio fiscal cuando estén disponibles.

const CONTENT = {
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: junio de 2026",
    sections: [
      {
        heading: "Responsable del tratamiento",
        body: "Providentia (marca comercial). Correo electrónico de contacto: hola@providentia.es",
      },
      {
        heading: "Datos que tratamos",
        body: "Cuando nos contactas por correo electrónico o a través de WhatsApp, tratamos los datos que facilitas voluntariamente: nombre, correo electrónico, número de teléfono y el contenido de tu mensaje.\n\nSi aceptas las cookies analíticas, Vercel Analytics recopila datos técnicos anónimos sobre tu visita: páginas consultadas, tipo de dispositivo y país de acceso. Estos datos no permiten identificarte individualmente.",
      },
      {
        heading: "Finalidad y base jurídica",
        body: "Tus datos de contacto se utilizan exclusivamente para responder a tu consulta o gestionar la relación comercial contigo. La base jurídica es la ejecución de una relación precontractual (art. 6.1.b RGPD) o el interés legítimo (art. 6.1.f RGPD).\n\nLos datos analíticos se tratan con tu consentimiento (art. 6.1.a RGPD), que puedes retirar en cualquier momento desde la página de cookies.",
      },
      {
        heading: "Conservación",
        body: "Conservamos tus datos de contacto durante el tiempo necesario para atender la solicitud y mantener la relación comercial, y hasta un máximo de tres años adicionales tras el último contacto. Los datos analíticos son agregados y no se conservan de forma individualizada.",
      },
      {
        heading: "Destinatarios",
        body: "Utilizamos Vercel Inc. (Estados Unidos) como proveedor de infraestructura y analítica, con garantías adecuadas de transferencia internacional (Cláusulas Contractuales Tipo). No cedemos tus datos a terceros con fines comerciales ni publicitarios.",
      },
      {
        heading: "Tus derechos",
        body: "Tienes derecho a acceder, rectificar, suprimir, oponerte, limitar el tratamiento y solicitar la portabilidad de tus datos. Puedes ejercerlos escribiendo a hola@providentia.es.\n\nSi consideras que tus derechos no han sido atendidos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos: www.aepd.es.",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Data controller",
        body: "Providentia (trading name). Contact email: hola@providentia.es",
      },
      {
        heading: "Data we collect",
        body: "When you contact us by email or WhatsApp, we process the data you voluntarily provide: name, email address, phone number and message content.\n\nIf you accept analytical cookies, Vercel Analytics collects anonymous technical data about your visit: pages viewed, device type and country of access. This data does not allow individual identification.",
      },
      {
        heading: "Purpose and legal basis",
        body: "Your contact data is used solely to respond to your enquiry or manage the commercial relationship. The legal basis is the performance of a pre-contractual relationship (Art. 6(1)(b) GDPR) or legitimate interest (Art. 6(1)(f) GDPR).\n\nAnalytical data is processed on the basis of your consent (Art. 6(1)(a) GDPR), which you may withdraw at any time from the cookies page.",
      },
      {
        heading: "Retention",
        body: "We retain your contact data for as long as necessary to handle the request and maintain the business relationship, and for a maximum of three additional years after the last contact. Analytical data is aggregated and not retained in individually identifiable form.",
      },
      {
        heading: "Recipients",
        body: "We use Vercel Inc. (United States) as our infrastructure and analytics provider, with adequate international transfer safeguards (Standard Contractual Clauses). We do not share your data with third parties for commercial or advertising purposes.",
      },
      {
        heading: "Your rights",
        body: "You have the right to access, rectify, erase, object to, restrict and port your data. You can exercise these rights by writing to hola@providentia.es.\n\nIf you feel your rights have not been respected, you may file a complaint with the Spanish Data Protection Agency: www.aepd.es.",
      },
    ],
  },
  it: {
    title: "Informativa sulla Privacy",
    updated: "Ultimo aggiornamento: giugno 2026",
    sections: [
      {
        heading: "Titolare del trattamento",
        body: "Providentia (nome commerciale). Email di contatto: hola@providentia.es",
      },
      {
        heading: "Dati che trattiamo",
        body: "Quando ci contatti per email o WhatsApp, trattiamo i dati che fornisci volontariamente: nome, indirizzo email, numero di telefono e contenuto del messaggio.\n\nSe accetti i cookie analitici, Vercel Analytics raccoglie dati tecnici anonimi sulla tua visita: pagine visitate, tipo di dispositivo e paese di accesso. Questi dati non permettono di identificarti individualmente.",
      },
      {
        heading: "Finalità e base giuridica",
        body: "I tuoi dati di contatto vengono utilizzati esclusivamente per rispondere alla tua richiesta o gestire il rapporto commerciale. La base giuridica è l'esecuzione di un rapporto precontrattuale (art. 6, par. 1, lett. b GDPR) o l'interesse legittimo (art. 6, par. 1, lett. f GDPR).\n\nI dati analitici vengono trattati sulla base del tuo consenso (art. 6, par. 1, lett. a GDPR), che puoi revocare in qualsiasi momento dalla pagina cookie.",
      },
      {
        heading: "Conservazione",
        body: "Conserviamo i tuoi dati di contatto per il tempo necessario a gestire la richiesta e mantenere il rapporto commerciale, e per un massimo di tre anni aggiuntivi dall'ultimo contatto. I dati analitici sono aggregati e non vengono conservati in forma individuale.",
      },
      {
        heading: "Destinatari",
        body: "Utilizziamo Vercel Inc. (Stati Uniti) come fornitore di infrastruttura e analisi, con adeguate garanzie per i trasferimenti internazionali (Clausole Contrattuali Standard). Non cediamo i tuoi dati a terzi per scopi commerciali o pubblicitari.",
      },
      {
        heading: "I tuoi diritti",
        body: "Hai il diritto di accedere, rettificare, cancellare, opporti, limitare il trattamento e richiedere la portabilità dei tuoi dati. Puoi esercitarli scrivendo a hola@providentia.es.\n\nSe ritieni che i tuoi diritti non siano stati rispettati, puoi presentare reclamo all'Agencia Española de Protección de Datos: www.aepd.es.",
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
    title: t("privacy_meta_title"),
    description: t("privacy_meta_desc"),
    alternates: {
      canonical: canonicalUrl(locale, '/privacy'),
      languages: hreflangAlternates('/privacy'),
    },
    openGraph: {
      title: t("privacy_meta_title"),
      url: canonicalUrl(locale, '/privacy'),
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PrivacyPage({ params }: Props) {
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
            {t("privacy_tagline")}
          </p>
          <h1
            className="h1-display"
            style={{ fontSize: "clamp(40px,6vw,72px)", color: "var(--text-dark)" }}
          >
            {content.title}
          </h1>
          <p className="data-label mt-6" style={{ color: "var(--text-muted)" }}>
            {content.updated}
          </p>
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
