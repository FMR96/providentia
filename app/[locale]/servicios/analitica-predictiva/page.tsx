import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { BlogNavbar } from "@/app/[locale]/blog/_navbar"
import { JsonLd } from "@/components/json-ld"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const CONTENT = {
  es: {
    meta: {
      title: "Analítica Predictiva para Empresas — Providentia",
      description: "Modelos predictivos que anticipan tendencias de mercado, comportamiento de clientes y riesgo de abandono. Consultora de analítica predictiva en España.",
    },
    hero: {
      label: "Servicio",
      tag: "Forecasting",
      h1: "Analítica\nPredictiva.",
      intro: "Los datos históricos describen lo que ocurrió. Los modelos predictivos anticipan lo que va a ocurrir. La diferencia entre las dos posiciones no es tecnológica — es la capacidad de actuar antes de que el problema aparezca o la oportunidad desaparezca.",
    },
    what: {
      heading: "Qué es la analítica predictiva",
      body: "La analítica predictiva es el uso de modelos estadísticos y de machine learning para generar previsiones sobre comportamientos futuros a partir de datos pasados y presentes. A diferencia del análisis descriptivo —que responde qué ocurrió— o del diagnóstico —que responde por qué ocurrió— la analítica predictiva responde qué va a ocurrir y con qué probabilidad.",
      examples: [
        { label: "Previsión de demanda", description: "Anticipar qué productos, en qué volumen y en qué mercados tendrán demanda en los próximos trimestres." },
        { label: "Propensión a la conversión", description: "Identificar qué leads tienen mayor probabilidad de convertirse en clientes según su comportamiento previo." },
        { label: "Riesgo de abandono (churn)", description: "Detectar clientes con alta probabilidad de cancelar antes de que lo hagan, permitiendo intervención proactiva." },
        { label: "Segmentación predictiva", description: "Agrupar clientes no solo por lo que son, sino por lo que probablemente harán a continuación." },
      ],
    },
    how: {
      heading: "Cómo lo hacemos",
      steps: [
        { numeral: "01", label: "Definición del objetivo de negocio", description: "Un modelo predictivo sin objetivo de negocio claro es un ejercicio técnico. Empezamos por entender qué decisión concreta debe mejorar el modelo: pricing, segmentación, priorización de ventas, gestión de inventario." },
        { numeral: "02", label: "Auditoría y preparación de datos", description: "Evaluamos la calidad, completitud y estructura de los datos disponibles. La mayoría de los proyectos predictivos fracasan en esta fase — no porque los datos no existan, sino porque no estaban preparados para ser usados." },
        { numeral: "03", label: "Modelado y validación", description: "Construimos el modelo adecuado al problema: regresión, clasificación, series temporales, clustering. Validamos contra datos históricos con métricas de negocio, no solo métricas estadísticas." },
        { numeral: "04", label: "Integración y operacionalización", description: "Un modelo que solo funciona en un notebook de análisis no tiene valor operativo. Integramos las predicciones en los procesos de decisión existentes: CRM, dashboards, automatizaciones de marketing." },
      ],
    },
    results: {
      heading: "Qué resultados esperar",
      items: [
        "Reducción del margen de error en previsiones de demanda en un 20-40% respecto a métodos basados en media histórica.",
        "Priorización del pipeline de ventas con modelos de propensión que aumentan el ratio de conversión en cuentas trabajadas.",
        "Detección temprana de riesgo de abandono con 30-60 días de antelación, permitiendo retención proactiva.",
        "Segmentaciones de cliente con mayor poder predictivo que las demográficas o de valor histórico.",
      ],
      caveat: "Los resultados dependen de la calidad y volumen de datos disponibles. En el diagnóstico inicial evaluamos la viabilidad y el potencial de mejora estimado para tu caso concreto.",
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cuántos datos necesito para implementar analítica predictiva?",
          a: "Depende del tipo de modelo. Para modelos de churn o propensión, generalmente se necesitan al menos 12-24 meses de datos históricos con al menos 1.000-5.000 eventos del comportamiento que se quiere predecir. En el diagnóstico inicial evaluamos si tus datos son suficientes y de qué calidad.",
        },
        {
          q: "¿Es necesario un equipo de data science interno para usar los modelos?",
          a: "No. Los modelos que construimos se integran en las herramientas que tu equipo ya usa: CRM, dashboards, plataformas de marketing. No es necesario que alguien en tu equipo sepa programar o entrenar modelos para beneficiarse de las predicciones.",
        },
        {
          q: "¿Qué diferencia hay entre analítica predictiva y business intelligence?",
          a: "El BI (Business Intelligence) describe y analiza lo que ya ocurrió: ventas del mes pasado, evolución del CAC, distribución de clientes por segmento. La analítica predictiva anticipa lo que va a ocurrir: qué clientes van a cancelar, qué productos van a tener mayor demanda, qué leads van a convertir.",
        },
        {
          q: "¿Cuánto tiempo tarda en estar operativo un modelo predictivo?",
          a: "Un primer modelo de validación puede estar listo en 4-8 semanas, dependiendo del estado de los datos y la complejidad del problema. Los modelos de producción, con integración en sistemas existentes y validación en entorno real, suelen requerir 2-4 meses.",
        },
      ],
    },
    cta: {
      heading: "¿Quieres ver cómo funcionaría en tu caso?",
      body: "Cuéntanos el problema de negocio que quieres resolver con datos. Evaluamos la viabilidad y el potencial de mejora sin compromiso.",
      btn: "Iniciar conversación",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "Predictive Analytics for Business — Providentia",
      description: "Predictive models that anticipate market trends, customer behaviour and churn risk. Predictive analytics consultancy in Spain.",
    },
    hero: {
      label: "Service",
      tag: "Forecasting",
      h1: "Predictive\nAnalytics.",
      intro: "Historical data describes what happened. Predictive models anticipate what is going to happen. The difference between the two positions isn't technological — it's the ability to act before the problem appears or the opportunity disappears.",
    },
    what: {
      heading: "What is predictive analytics",
      body: "Predictive analytics is the use of statistical and machine learning models to generate forecasts about future behaviour from past and present data. Unlike descriptive analysis — which answers what happened — or diagnostic analysis — which answers why it happened — predictive analytics answers what is going to happen and with what probability.",
      examples: [
        { label: "Demand forecasting", description: "Anticipating which products, in what volume and in which markets will see demand in the coming quarters." },
        { label: "Conversion propensity", description: "Identifying which leads are most likely to become customers based on their prior behaviour." },
        { label: "Churn risk", description: "Detecting customers with high cancellation probability before they cancel, enabling proactive intervention." },
        { label: "Predictive segmentation", description: "Grouping customers not just by what they are, but by what they are likely to do next." },
      ],
    },
    how: {
      heading: "How we do it",
      steps: [
        { numeral: "01", label: "Business objective definition", description: "A predictive model without a clear business objective is a technical exercise. We start by understanding which specific decision the model must improve: pricing, segmentation, sales prioritisation, inventory management." },
        { numeral: "02", label: "Data audit and preparation", description: "We assess the quality, completeness and structure of available data. Most predictive projects fail at this stage — not because the data doesn't exist, but because it wasn't ready to be used." },
        { numeral: "03", label: "Modelling and validation", description: "We build the model appropriate to the problem: regression, classification, time series, clustering. We validate against historical data using business metrics, not just statistical ones." },
        { numeral: "04", label: "Integration and operationalisation", description: "A model that only works in an analysis notebook has no operational value. We integrate predictions into existing decision processes: CRM, dashboards, marketing automations." },
      ],
    },
    results: {
      heading: "What results to expect",
      items: [
        "Reduction in demand forecasting error margin by 20-40% compared to historical average methods.",
        "Sales pipeline prioritisation with propensity models that increase conversion rates in worked accounts.",
        "Early churn risk detection 30-60 days in advance, enabling proactive retention.",
        "Customer segmentations with greater predictive power than demographic or historical value segmentations.",
      ],
      caveat: "Results depend on the quality and volume of available data. In the initial diagnosis we assess viability and estimated improvement potential for your specific case.",
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "How much data do I need to implement predictive analytics?",
          a: "It depends on the type of model. For churn or propensity models, you generally need at least 12-24 months of historical data with at least 1,000-5,000 events of the behaviour you want to predict. In the initial diagnosis we assess whether your data is sufficient and its quality.",
        },
        {
          q: "Do I need an internal data science team to use the models?",
          a: "No. The models we build integrate into the tools your team already uses: CRM, dashboards, marketing platforms. No one on your team needs to know how to programme or train models to benefit from the predictions.",
        },
        {
          q: "What is the difference between predictive analytics and business intelligence?",
          a: "BI (Business Intelligence) describes and analyses what has already happened: last month's sales, CAC evolution, customer distribution by segment. Predictive analytics anticipates what is going to happen: which customers will cancel, which products will see higher demand, which leads will convert.",
        },
        {
          q: "How long does it take to get a predictive model operational?",
          a: "A first validation model can be ready in 4-8 weeks, depending on data readiness and problem complexity. Production models, with integration into existing systems and real-environment validation, typically take 2-4 months.",
        },
      ],
    },
    cta: {
      heading: "Want to see how it would work in your case?",
      body: "Tell us the business problem you want to solve with data. We assess viability and improvement potential with no commitment.",
      btn: "Start a conversation",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Analisi Predittiva per Aziende — Providentia",
      description: "Modelli predittivi che anticipano tendenze di mercato, comportamento dei clienti e rischio di abbandono. Consulenza di analisi predittiva in Spagna.",
    },
    hero: {
      label: "Servizio",
      tag: "Forecasting",
      h1: "Analisi\nPredittiva.",
      intro: "I dati storici descrivono ciò che è accaduto. I modelli predittivi anticipano ciò che accadrà. La differenza tra le due posizioni non è tecnologica — è la capacità di agire prima che il problema appaia o l'opportunità svanisca.",
    },
    what: {
      heading: "Cos'è l'analisi predittiva",
      body: "L'analisi predittiva è l'uso di modelli statistici e di machine learning per generare previsioni sui comportamenti futuri a partire da dati passati e presenti. A differenza dell'analisi descrittiva — che risponde a cosa è accaduto — o diagnostica — che risponde perché è accaduto — l'analisi predittiva risponde a cosa accadrà e con quale probabilità.",
      examples: [
        { label: "Previsione della domanda", description: "Anticipare quali prodotti, in quale volume e in quali mercati avranno domanda nei prossimi trimestri." },
        { label: "Propensione alla conversione", description: "Identificare quali lead hanno maggiore probabilità di diventare clienti in base al loro comportamento precedente." },
        { label: "Rischio di abbandono (churn)", description: "Rilevare clienti con alta probabilità di cancellazione prima che lo facciano, consentendo un intervento proattivo." },
        { label: "Segmentazione predittiva", description: "Raggruppare i clienti non solo per ciò che sono, ma per ciò che probabilmente faranno in seguito." },
      ],
    },
    how: {
      heading: "Come lo facciamo",
      steps: [
        { numeral: "01", label: "Definizione dell'obiettivo di business", description: "Un modello predittivo senza un chiaro obiettivo di business è un esercizio tecnico. Iniziamo capendo quale decisione specifica deve migliorare il modello: pricing, segmentazione, prioritizzazione delle vendite, gestione dell'inventario." },
        { numeral: "02", label: "Audit e preparazione dei dati", description: "Valutiamo la qualità, completezza e struttura dei dati disponibili. La maggior parte dei progetti predittivi fallisce in questa fase — non perché i dati non esistano, ma perché non erano pronti per essere utilizzati." },
        { numeral: "03", label: "Modellazione e validazione", description: "Costruiamo il modello adeguato al problema: regressione, classificazione, serie temporali, clustering. Validiamo su dati storici con metriche di business, non solo statistiche." },
        { numeral: "04", label: "Integrazione e operazionalizzazione", description: "Un modello che funziona solo in un notebook di analisi non ha valore operativo. Integriamo le previsioni nei processi decisionali esistenti: CRM, dashboard, automazioni di marketing." },
      ],
    },
    results: {
      heading: "Risultati attesi",
      items: [
        "Riduzione del margine di errore nelle previsioni di domanda del 20-40% rispetto ai metodi basati sulla media storica.",
        "Prioritizzazione del pipeline di vendita con modelli di propensione che aumentano il tasso di conversione.",
        "Rilevamento precoce del rischio di abbandono con 30-60 giorni di anticipo, consentendo una fidelizzazione proattiva.",
        "Segmentazioni clienti con maggiore potere predittivo rispetto a quelle demografiche o di valore storico.",
      ],
      caveat: "I risultati dipendono dalla qualità e dal volume dei dati disponibili. Nella diagnosi iniziale valutiamo la fattibilità e il potenziale di miglioramento stimato per il tuo caso specifico.",
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Quanti dati servono per implementare l'analisi predittiva?",
          a: "Dipende dal tipo di modello. Per modelli di churn o propensione, sono generalmente necessari almeno 12-24 mesi di dati storici con almeno 1.000-5.000 eventi del comportamento da prevedere. Nella diagnosi iniziale valutiamo se i tuoi dati sono sufficienti e la loro qualità.",
        },
        {
          q: "È necessario un team di data science interno per utilizzare i modelli?",
          a: "No. I modelli che costruiamo si integrano negli strumenti già usati dal tuo team: CRM, dashboard, piattaforme di marketing. Non è necessario che qualcuno nel tuo team sappia programmare o addestrare modelli per beneficiare delle previsioni.",
        },
        {
          q: "Qual è la differenza tra analisi predittiva e business intelligence?",
          a: "La BI (Business Intelligence) descrive e analizza ciò che è già accaduto: vendite del mese scorso, evoluzione del CAC, distribuzione dei clienti per segmento. L'analisi predittiva anticipa ciò che accadrà: quali clienti cancelleranno, quali prodotti avranno maggiore domanda, quali lead convertiranno.",
        },
        {
          q: "Quanto tempo ci vuole per rendere operativo un modello predittivo?",
          a: "Un primo modello di validazione può essere pronto in 4-8 settimane, a seconda dello stato dei dati e della complessità del problema. I modelli di produzione, con integrazione nei sistemi esistenti, richiedono tipicamente 2-4 mesi.",
        },
      ],
    },
    cta: {
      heading: "Vuoi vedere come funzionerebbe nel tuo caso?",
      body: "Raccontaci il problema di business che vuoi risolvere con i dati. Valutiamo la fattibilità e il potenziale di miglioramento senza impegno.",
      btn: "Iniziare una conversazione",
    },
    footer: { copyright: "© MMXXVI" },
  },
} as const

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const c = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.es
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: canonicalUrl(locale, "/servicios/analitica-predictiva"),
      languages: hreflangAlternates("/servicios/analitica-predictiva"),
    },
    openGraph: {
      ...ogBase(locale),
      title: c.meta.title,
      description: c.meta.description,
      url: canonicalUrl(locale, "/servicios/analitica-predictiva"),
    },
  }
}

export default async function AnaliticaPredictiva({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.es

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Analítica Predictiva",
    "alternateName": "Predictive Analytics",
    "description": c.meta.description,
    "provider": { "@id": "https://providentialabs.com/#organization" },
    "areaServed": { "@type": "Country", "name": "España" },
    "url": canonicalUrl(locale, "/servicios/analitica-predictiva"),
    "serviceType": "Predictive Analytics Consulting",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faq.items.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": locale === "it" ? "Inizio" : locale === "en" ? "Home" : "Inicio", "item": canonicalUrl(locale) },
      { "@type": "ListItem", "position": 2, "name": c.hero.tag, "item": canonicalUrl(locale, "/servicios/analitica-predictiva") },
    ],
  }

  return (
    <div className="min-h-screen">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <BlogNavbar />

      {/* ── HERO (oscuro) ── */}
      <section
        data-theme="dark"
        className="min-h-[70vh] flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-10 animate-fade-up">
              <p className="data-label" style={{ color: "var(--text-muted)" }}>{c.hero.label}</p>
              <span className="signal-badge">{c.hero.tag}</span>
            </div>
            <h1
              className="h1-display animate-fade-up animation-delay-100 whitespace-pre-line"
              style={{ fontSize: "clamp(48px,7vw,88px)", color: "var(--text-light)" }}
            >
              {c.hero.h1}
            </h1>
            <p
              className="font-serif text-[18px] leading-[1.8] mt-10 max-w-xl animate-fade-up animation-delay-200"
              style={{ color: "var(--text-muted)" }}
            >
              {c.hero.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES (claro) ── */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <h2 className="h2-display animate-fade-up" style={{ fontSize: "clamp(28px,3.5vw,44px)", color: "var(--text-dark)" }}>
              {c.what.heading}
            </h2>
            <p className="font-serif text-[18px] leading-[1.8] animate-fade-up" style={{ color: "var(--text-mid)" }}>
              {c.what.body}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {c.what.examples.map((ex, i) => (
              <div
                key={i}
                className="py-8 animate-fade-up"
                style={{ borderTop: "1px solid var(--border-light)", animationDelay: `${i * 80}ms` }}
              >
                <p className="data-label mb-3" style={{ color: "var(--text-dark)" }}>{ex.label}</p>
                <p className="font-serif text-[17px] leading-[1.75]" style={{ color: "var(--text-mid)" }}>
                  {ex.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO LO HACEMOS (oscuro) ── */}
      <section
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="h2-display mb-16 animate-fade-up"
            style={{ fontSize: "clamp(28px,3.5vw,44px)", color: "var(--text-light)" }}
          >
            {c.how.heading}
          </h2>
          <div className="space-y-0">
            {c.how.steps.map((step) => (
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

      {/* ── RESULTADOS (claro) ── */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="h2-display mb-12 animate-fade-up"
            style={{ fontSize: "clamp(28px,3.5vw,44px)", color: "var(--text-dark)" }}
          >
            {c.results.heading}
          </h2>
          <ul className="space-y-5 mb-10 max-w-2xl">
            {c.results.items.map((item, i) => (
              <li
                key={i}
                className="font-serif text-[17px] leading-[1.75] flex gap-4 animate-fade-up"
                style={{ color: "var(--text-mid)", animationDelay: `${i * 80}ms` }}
              >
                <span className="shrink-0 mt-1" style={{ color: "var(--moss)" }}>—</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="font-serif text-[15px] leading-[1.75] animate-fade-up" style={{ color: "var(--text-muted)", maxWidth: "540px" }}>
            {c.results.caveat}
          </p>
        </div>
      </section>

      {/* ── FAQ (oscuro) ── */}
      <section
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="h2-display mb-16 animate-fade-up"
            style={{ fontSize: "clamp(28px,3.5vw,44px)", color: "var(--text-light)" }}
          >
            {c.faq.heading}
          </h2>
          <div className="space-y-0 max-w-3xl">
            {c.faq.items.map((item, i) => (
              <div
                key={i}
                className="py-8 animate-fade-up"
                style={{ borderTop: "1px solid var(--border-dark)", animationDelay: `${i * 80}ms` }}
              >
                <h3
                  className="h3-display mb-4"
                  style={{ fontSize: "clamp(17px,1.8vw,20px)", color: "var(--text-light)" }}
                >
                  {item.q}
                </h3>
                <p className="font-serif text-[17px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
                  {item.a}
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
            style={{ fontSize: "clamp(20px,2.5vw,30px)", color: "var(--text-dark)" }}
          >
            {c.cta.heading}
          </h2>
          <p className="font-serif text-[18px] leading-[1.8] mb-10 animate-fade-up animation-delay-100" style={{ color: "var(--text-mid)", maxWidth: "480px" }}>
            {c.cta.body}
          </p>
          <a
            href="mailto:hola@providentia.es"
            className="cta-label px-8 py-3 transition-colors inline-block animate-fade-up animation-delay-200"
            style={{ background: "var(--signal)", color: "var(--text-light)" }}
          >
            {c.cta.btn} →
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
