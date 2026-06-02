import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { BlogNavbar } from "@/app/[locale]/blog/_navbar"
import { JsonLd } from "@/components/json-ld"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

// ─── Contenido trilingüe ──────────────────────────────────────────────────────

const CONTENT = {
  es: {
    meta: {
      title: "Sobre Providentia — Consultora de Inteligencia Analítica",
      description: "Consultora de inteligencia analítica con experiencia en analítica predictiva, arquitectura de datos y marketing basado en datos. Trabajamos con un número reducido de clientes.",
    },
    hero: {
      label: "Sobre nosotros",
      h1: "Providentia.\nDatos que informan\ndecisiones.",
      intro: "Somos una consultora de inteligencia analítica fundada con una premisa simple: las empresas que toman decisiones basadas en datos estructurados obtienen mejores resultados que las que no lo hacen. Esa afirmación no es una creencia. Es lo que vemos en cada proyecto.",
    },
    what: {
      heading: "Quiénes somos",
      body: "Providentia nace del cruce entre la consultoría de datos y el marketing estratégico — dos disciplinas que raramente se integran bien en el mercado. La mayoría de las consultoras tecnológicas hablan de datos pero no entienden el marketing. La mayoría de las agencias de marketing no tienen la capacidad analítica para trabajar con datos complejos.",
      body2: "Nosotros hacemos las dos cosas, y las hacemos juntas. Eso es lo que nos diferencia.",
    },
    team: {
      heading: "El equipo",
      body: "El equipo de Providentia reúne formación y experiencia en análisis de datos, ingeniería de software, estrategia de marketing y dirección de negocio. Hemos trabajado con empresas de sectores como retail, servicios financieros, tecnología y consumo masivo en España.",
      body2: "Trabajamos con un número reducido de clientes y los elegimos con cuidado. No por exclusividad, sino porque esa es la única forma de ir a fondo en cada proyecto. Cada cliente tiene un equipo dedicado, no un gestor de cuenta que coordina equipos genéricos.",
    },
    method: {
      heading: "Cómo trabajamos",
      intro: "Cada proyecto sigue la misma disciplina. Sin atajos, sin presentaciones de cincuenta diapositivas antes de entender el problema.",
      steps: [
        { numeral: "01", label: "Descubrimiento", description: "Empezamos por entender. El negocio, los datos que ya existen, las decisiones que se toman y las que deberían tomarse de forma diferente. Este paso no se acelera." },
        { numeral: "02", label: "Diagnóstico de datos", description: "Auditamos lo que hay: calidad de los datos, arquitectura, integraciones, gaps. Medimos lo que importa y descartamos lo que no. La mayoría de los proyectos tienen demasiados datos y demasiado pocos insights." },
        { numeral: "03", label: "Modelado", description: "Convertimos señal en decisión. Modelos predictivos, arquitecturas de datos, dashboards, estrategias de contenido optimizadas para datos. Cada entregable tiene un propósito de negocio concreto." },
        { numeral: "04", label: "Implementación y medición", description: "Ejecutamos. Medimos el impacto real, no las métricas de actividad. Y ajustamos. La analítica sin iteración no es analítica — es reporting." },
      ],
    },
    values: {
      heading: "Lo que nos diferencia",
      items: [
        { label: "Honestidad sobre el estado de los datos", description: "Antes de proponer soluciones, decimos exactamente qué hay y qué falta. Los proyectos que fracasan suelen empezar con promesas que los datos no pueden cumplir." },
        { label: "Trabajo con pocos clientes", description: "Nunca tendremos más proyectos de los que podemos atender bien. Preferimos rechazar trabajo antes que entregarlo con la calidad equivocada." },
        { label: "Resultados medibles, no actividad medible", description: "La diferencia entre una consultora que entrega valor y una que entrega informes está en si alguien tomó una decisión diferente gracias al trabajo realizado." },
      ],
    },
    services: {
      heading: "Qué hacemos",
      items: [
        { title: "Analítica Predictiva", description: "Modelos que anticipan tendencias de mercado, comportamiento de clientes y riesgo de abandono antes de que el instinto los detecte." },
        { title: "Arquitectura de Datos", description: "Infraestructuras limpias, escalables y auditables. La información fluye sin fricción. Las decisiones llegan más rápido." },
        { title: "Inteligencia de Lenguaje", description: "Extraemos señal de texto no estructurado: opiniones de mercado, contratos, informes internos." },
        { title: "Visualización Analítica", description: "Cuadros de mando que informan sin necesidad de explicación. Los datos complejos merecen representaciones precisas." },
        { title: "GEO y Marketing Digital", description: "Posicionamiento en motores de búsqueda de IA y marketing digital basado en datos para empresas que quieren evidencia, no suposiciones." },
      ],
    },
    cta: {
      heading: "Hablemos.",
      body: "Si su empresa toma decisiones importantes y los datos no forman parte de ese proceso, podemos cambiar eso.",
      email: "hola@providentia.es",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "About Providentia — Analytics Intelligence Consultancy",
      description: "Analytics intelligence consultancy with expertise in predictive analytics, data architecture and data-driven marketing. We work with a select number of clients.",
    },
    hero: {
      label: "About us",
      h1: "Providentia.\nData that informs\ndecisions.",
      intro: "We are an analytics intelligence consultancy founded on a simple premise: companies that make decisions based on structured data consistently outperform those that don't. That statement is not a belief. It's what we observe in every project.",
    },
    what: {
      heading: "Who we are",
      body: "Providentia sits at the intersection of data consulting and strategic marketing — two disciplines that rarely integrate well in the market. Most technology consultancies talk about data but don't understand marketing. Most marketing agencies don't have the analytical depth to work with complex data.",
      body2: "We do both, and we do them together. That's what makes us different.",
    },
    team: {
      heading: "The team",
      body: "Providentia's team combines training and experience in data analysis, software engineering, marketing strategy and business management. We have worked with companies in sectors including retail, financial services, technology and consumer goods in Spain.",
      body2: "We work with a select number of clients and choose them carefully. Not for exclusivity, but because that's the only way to go deep on every project. Each client has a dedicated team, not an account manager coordinating generic teams.",
    },
    method: {
      heading: "How we work",
      intro: "Every project follows the same discipline. No shortcuts, no fifty-slide presentations before understanding the problem.",
      steps: [
        { numeral: "01", label: "Discovery", description: "We start by understanding: the business, the data that already exists, the decisions being made and those that should be made differently. This step cannot be rushed." },
        { numeral: "02", label: "Data diagnosis", description: "We audit what's there: data quality, architecture, integrations, gaps. We measure what matters and discard what doesn't. Most projects have too much data and too few insights." },
        { numeral: "03", label: "Modelling", description: "We convert signal into decision. Predictive models, data architectures, dashboards, data-optimised content strategies. Every deliverable has a concrete business purpose." },
        { numeral: "04", label: "Implementation and measurement", description: "We execute. We measure real impact, not activity metrics. And we adjust. Analytics without iteration isn't analytics — it's reporting." },
      ],
    },
    values: {
      heading: "What makes us different",
      items: [
        { label: "Honesty about the state of the data", description: "Before proposing solutions, we say exactly what's there and what's missing. Projects that fail usually start with promises the data can't support." },
        { label: "Working with few clients", description: "We will never take on more projects than we can handle well. We prefer to turn down work before delivering it at the wrong quality." },
        { label: "Measurable results, not measurable activity", description: "The difference between a consultancy that delivers value and one that delivers reports is whether someone made a different decision thanks to the work done." },
      ],
    },
    services: {
      heading: "What we do",
      items: [
        { title: "Predictive Analytics", description: "Models that anticipate market trends, customer behaviour and churn risk before instinct detects them." },
        { title: "Data Architecture", description: "Clean, scalable, auditable infrastructure. Information flows without friction. Decisions arrive faster." },
        { title: "Language Intelligence", description: "We extract signal from unstructured text: market opinions, contracts, internal reports." },
        { title: "Analytics Visualisation", description: "Dashboards that inform without explanation. Complex data deserves precise representations." },
        { title: "GEO and Digital Marketing", description: "Positioning in AI search engines and data-driven digital marketing for companies that want evidence, not assumptions." },
      ],
    },
    cta: {
      heading: "Let's talk.",
      body: "If your company makes important decisions and data isn't part of that process, we can change that.",
      email: "hola@providentia.es",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Chi siamo — Providentia, Consulenza di Intelligenza Analitica",
      description: "Consulenza di intelligenza analitica con esperienza in analisi predittiva, architettura dati e marketing basato sui dati. Lavoriamo con un numero ridotto di clienti.",
    },
    hero: {
      label: "Chi siamo",
      h1: "Providentia.\nDati che informano\nle decisioni.",
      intro: "Siamo una consulenza di intelligenza analitica fondata su una premessa semplice: le aziende che prendono decisioni basate su dati strutturati ottengono costantemente risultati migliori di quelle che non lo fanno. Questa affermazione non è una credenza. È ciò che osserviamo in ogni progetto.",
    },
    what: {
      heading: "Chi siamo",
      body: "Providentia nasce dall'incrocio tra la consulenza dati e il marketing strategico — due discipline che raramente si integrano bene nel mercato. La maggior parte delle consulenze tecnologiche parla di dati ma non capisce il marketing. La maggior parte delle agenzie di marketing non ha la profondità analitica per lavorare con dati complessi.",
      body2: "Noi facciamo entrambe le cose, e le facciamo insieme. Questo è ciò che ci differenzia.",
    },
    team: {
      heading: "Il team",
      body: "Il team di Providentia riunisce formazione ed esperienza in analisi dei dati, ingegneria del software, strategia di marketing e gestione aziendale. Abbiamo lavorato con aziende in settori come retail, servizi finanziari, tecnologia e beni di consumo in Spagna.",
      body2: "Lavoriamo con un numero ridotto di clienti e li scegliamo con cura. Non per esclusività, ma perché è l'unico modo per approfondire ogni progetto. Ogni cliente ha un team dedicato, non un account manager che coordina team generici.",
    },
    method: {
      heading: "Come lavoriamo",
      intro: "Ogni progetto segue la stessa disciplina. Senza scorciatoie, senza presentazioni di cinquanta diapositive prima di capire il problema.",
      steps: [
        { numeral: "01", label: "Scoperta", description: "Iniziamo capendo: il business, i dati già esistenti, le decisioni prese e quelle che dovrebbero essere prese diversamente. Questo passaggio non si accelera." },
        { numeral: "02", label: "Diagnosi dei dati", description: "Facciamo un audit di ciò che c'è: qualità dei dati, architettura, integrazioni, lacune. Misuriamo ciò che conta e scartiamo il resto. La maggior parte dei progetti ha troppi dati e troppo pochi insight." },
        { numeral: "03", label: "Modellazione", description: "Convertiamo il segnale in decisione. Modelli predittivi, architetture dati, dashboard, strategie di contenuto ottimizzate per i dati. Ogni deliverable ha uno scopo aziendale concreto." },
        { numeral: "04", label: "Implementazione e misurazione", description: "Eseguiamo. Misuriamo l'impatto reale, non le metriche di attività. E aggiustiamo. L'analisi senza iterazione non è analisi — è reporting." },
      ],
    },
    values: {
      heading: "Cosa ci differenzia",
      items: [
        { label: "Onestà sullo stato dei dati", description: "Prima di proporre soluzioni, diciamo esattamente cosa c'è e cosa manca. I progetti che falliscono di solito iniziano con promesse che i dati non possono mantenere." },
        { label: "Lavoro con pochi clienti", description: "Non prenderemo mai più progetti di quanti possiamo gestire bene. Preferiamo rifiutare lavoro piuttosto che consegnarlo con la qualità sbagliata." },
        { label: "Risultati misurabili, non attività misurabili", description: "La differenza tra una consulenza che crea valore e una che produce report è se qualcuno ha preso una decisione diversa grazie al lavoro svolto." },
      ],
    },
    services: {
      heading: "Cosa facciamo",
      items: [
        { title: "Analisi Predittiva", description: "Modelli che anticipano tendenze di mercato, comportamento dei clienti e rischio di abbandono prima che l'istinto li rilevi." },
        { title: "Architettura Dati", description: "Infrastrutture pulite, scalabili e verificabili. Le informazioni fluiscono senza attrito. Le decisioni arrivano più velocemente." },
        { title: "Intelligenza del Linguaggio", description: "Estraiamo segnale da testo non strutturato: opinioni di mercato, contratti, report interni." },
        { title: "Visualizzazione Analitica", description: "Dashboard che informano senza spiegazioni. I dati complessi meritano rappresentazioni precise." },
        { title: "GEO e Marketing Digitale", description: "Posizionamento nei motori di ricerca basati sull'IA e marketing digitale basato sui dati per aziende che vogliono prove, non supposizioni." },
      ],
    },
    cta: {
      heading: "Parliamo.",
      body: "Se la tua azienda prende decisioni importanti e i dati non fanno parte di quel processo, possiamo cambiarlo.",
      email: "hola@providentia.es",
    },
    footer: { copyright: "© MMXXVI" },
  },
} as const

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const c = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.es

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: canonicalUrl(locale, "/sobre-nosotros"),
      languages: hreflangAlternates("/sobre-nosotros"),
    },
    openGraph: {
      ...ogBase(locale),
      title: c.meta.title,
      description: c.meta.description,
      url: canonicalUrl(locale, "/sobre-nosotros"),
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.es

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": canonicalUrl(locale, "/sobre-nosotros"),
    "url": canonicalUrl(locale, "/sobre-nosotros"),
    "name": c.meta.title,
    "description": c.meta.description,
    "about": { "@id": "https://providentialabs.com/#organization" },
    "publisher": { "@id": "https://providentialabs.com/#organization" },
  }

  return (
    <div className="min-h-screen">
      <JsonLd data={aboutSchema} />
      <BlogNavbar />

      {/* ── HERO (claro) ── */}
      <section
        data-theme="light"
        className="min-h-[60vh] flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="max-w-4xl">
            <p className="data-label mb-10 animate-fade-up" style={{ color: "var(--text-muted)" }}>
              {c.hero.label}
            </p>
            <h1
              className="h1-display animate-fade-up animation-delay-100 whitespace-pre-line"
              style={{ fontSize: "clamp(48px,7vw,88px)", color: "var(--text-dark)" }}
            >
              {c.hero.h1}
            </h1>
            <p
              className="font-serif text-[18px] leading-[1.8] mt-10 max-w-xl animate-fade-up animation-delay-200"
              style={{ color: "var(--text-mid)" }}
            >
              {c.hero.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS (oscuro) ── */}
      <section
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-start">
          <h2
            className="h2-display animate-fade-up"
            style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-light)" }}
          >
            {c.what.heading}
          </h2>
          <div className="space-y-6">
            <p className="font-serif text-[18px] leading-[1.8] animate-fade-up" style={{ color: "var(--text-muted)" }}>
              {c.what.body}
            </p>
            <p
              className="font-serif text-[18px] leading-[1.8] animate-fade-up animation-delay-100 pl-6 italic"
              style={{ color: "var(--text-light)", borderLeft: "2px solid var(--sage)" }}
            >
              {c.what.body2}
            </p>
          </div>
        </div>
      </section>

      {/* ── EL EQUIPO (claro) ── */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-start">
          <h2
            className="h2-display animate-fade-up"
            style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-dark)" }}
          >
            {c.team.heading}
          </h2>
          <div className="space-y-6">
            <p className="font-serif text-[18px] leading-[1.8] animate-fade-up" style={{ color: "var(--text-mid)" }}>
              {c.team.body}
            </p>
            <p className="font-serif text-[18px] leading-[1.8] animate-fade-up animation-delay-100" style={{ color: "var(--text-mid)" }}>
              {c.team.body2}
            </p>
          </div>
        </div>
      </section>

      {/* ── METODOLOGÍA (oscuro) ── */}
      <section
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="h2-display mb-4 animate-fade-up"
            style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-light)" }}
          >
            {c.method.heading}
          </h2>
          <p className="font-serif text-[18px] leading-[1.8] mb-16 animate-fade-up animation-delay-100" style={{ color: "var(--text-muted)", maxWidth: "540px" }}>
            {c.method.intro}
          </p>
          <div className="space-y-0">
            {c.method.steps.map((step) => (
              <div
                key={step.numeral}
                className="flex gap-6 animate-fade-up"
                style={{ borderTop: "1px solid var(--border-dark)", paddingTop: "24px", paddingBottom: "24px" }}
              >
                <span className="metric-display text-sm shrink-0 w-8" style={{ color: "var(--text-muted)" }}>
                  {step.numeral}
                </span>
                <div>
                  <p className="data-label mb-2" style={{ color: "var(--text-light)" }}>{step.label}</p>
                  <p className="font-serif text-[17px] leading-[1.75]" style={{ color: "var(--text-muted)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LO QUE NOS DIFERENCIA (claro) ── */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="h2-display mb-16 animate-fade-up"
            style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-dark)" }}
          >
            {c.values.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-10">
            {c.values.items.map((item, i) => (
              <div
                key={i}
                className="pt-7 animate-fade-up"
                style={{ borderTop: "1px solid var(--border-light)", animationDelay: `${i * 100}ms` }}
              >
                <p className="data-label mb-4" style={{ color: "var(--text-dark)" }}>{item.label}</p>
                <p className="font-serif text-[17px] leading-[1.8]" style={{ color: "var(--text-mid)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS (oscuro) ── */}
      <section
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="h2-display mb-16 animate-fade-up"
            style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-light)" }}
          >
            {c.services.heading}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
            {c.services.items.map((svc, i) => (
              <div
                key={i}
                className="py-8 animate-fade-up"
                style={{ borderTop: "1px solid var(--border-dark)", animationDelay: `${i * 80}ms` }}
              >
                <p className="data-label mb-3" style={{ color: "var(--sage)" }}>{svc.title}</p>
                <p className="font-serif text-[16px] leading-[1.75]" style={{ color: "var(--text-muted)" }}>
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (claro) ── */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)", borderTop: "1px solid var(--border-light)" }}
      >
        <div className="max-w-[1200px] mx-auto max-w-2xl">
          <h2
            className="h3-display mb-4 animate-fade-up"
            style={{ fontSize: "clamp(24px,3vw,36px)", color: "var(--text-dark)" }}
          >
            {c.cta.heading}
          </h2>
          <p className="font-serif text-[18px] leading-[1.8] mb-8 animate-fade-up animation-delay-100" style={{ color: "var(--text-mid)", maxWidth: "480px" }}>
            {c.cta.body}
          </p>
          <a
            href={`mailto:${c.cta.email}`}
            className="cta-label transition-colors animate-fade-up animation-delay-200"
            style={{ color: "var(--signal)" }}
          >
            {c.cta.email} →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-12"
        style={{ background: "var(--evergreen)", borderTop: "1px solid var(--border-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/providentia.png" alt="Providentia" width={20} height={20} />
            <span className="font-display italic text-lg" style={{ color: "var(--text-light)" }}>Providentia</span>
          </Link>
          <span className="data-label" style={{ color: "var(--text-muted)" }}>{c.footer.copyright}</span>
        </div>
      </footer>
    </div>
  )
}
