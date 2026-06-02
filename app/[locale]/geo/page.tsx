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
      title: "GEO — Generative Engine Optimization | Providentia",
      description: "Posiciona tu marca en ChatGPT, Perplexity y Google AI. Consultora especializada en GEO en España. Estrategia, contenido y medición.",
    },
    hero: {
      label: "Servicio",
      h1: "GEO.\nEl nuevo campo de batalla\ndel marketing digital.",
      intro: "El usuario ya no solo busca en Google. Busca en ChatGPT, Perplexity, Google AI Overview, Gemini. Las respuestas que obtiene no son listas de links — son síntesis. Si tu marca no aparece en esas síntesis, no existe para ese usuario.",
    },
    what: {
      label: "Qué es GEO",
      heading: "Generative Engine Optimization",
      body: "GEO es la práctica de optimizar contenido, estructura y autoridad de marca para que los modelos de lenguaje te citen como fuente relevante. A diferencia del SEO clásico, el objetivo no es posicionar una URL en una lista de resultados. Es conseguir que ChatGPT, Perplexity o Google AI mencionen tu marca en sus respuestas sintéticas.",
      contrast: "El SEO posiciona páginas. El GEO posiciona conceptos, entidades y respuestas.",
      stat: "ChatGPT, Perplexity, Google AI Overviews, Gemini y Bing Copilot ya generan millones de respuestas diarias en 2026.",
    },
    urgency: {
      heading: "La ventana se cierra.\nEl que posicione ahora, permanece.",
      paragraphs: [
        "Los modelos de lenguaje construyen su mapa de autoridad a partir de fuentes que ya existen en su corpus. Si tu marca no está en ese corpus, el modelo no te citará — no porque te ignore, sino porque no te conoce.",
        "El paralelismo con el SEO de 2004 es preciso: las empresas que apostaron por posicionamiento orgánico cuando nadie lo entendía dominaron sus categorías durante una década. GEO está en ese mismo momento.",
        "En España, apenas un puñado de agencias tiene una práctica estructurada de GEO. La mayoría lo menciona. Nadie lo ejecuta con metodología consistente.",
      ],
    },
    method: {
      label: "Metodología",
      heading: "Nuestra metodología GEO",
      steps: [
        { numeral: "01", label: "Auditoría de presencia generativa", description: "Analizamos cómo aparece tu marca — o no — en los principales motores de IA. Identificamos vacíos, errores de atribución y oportunidades de citación." },
        { numeral: "02", label: "Estrategia de entidades y contenido", description: "Construimos el mapa de conceptos que los LLM deben asociar a tu marca. Redactamos o reestructuramos contenido para que sea citable: claro, estructurado, con datos, con autoridad." },
        { numeral: "03", label: "Distribución y señales de autoridad", description: "Publicamos y amplificamos en las fuentes que los modelos priorizan: publicaciones sectoriales, directorios de referencia, medios especializados." },
        { numeral: "04", label: "Medición y seguimiento", description: "Rastreamos apariciones en respuestas generativas, variaciones por modelo y evolución de la presencia de marca en IA Search a lo largo del tiempo." },
      ],
    },
    audience: {
      heading: "¿Qué empresas necesitan GEO ahora?",
      items: [
        "Marcas que compiten en categorías de alta consulta: servicios financieros, salud, legal, tecnología.",
        "Empresas que ya invierten en SEO y quieren adelantarse al siguiente ciclo.",
        "Pymes que quieren construir autoridad de categoría sin presupuesto de gran marca.",
        "Firmas que lanzan nuevos productos y quieren que los modelos los reconozcan desde el inicio.",
      ],
    },
    why: {
      heading: "Por qué Providentia",
      items: [
        "Somos de las primeras consultoras en España con una práctica estructurada de GEO — no un servicio añadido a última hora.",
        "Combinamos GEO con SEO y analítica de datos porque la presencia de marca en 2026 no se construye desde un solo canal.",
        "Trabajamos con un número reducido de clientes. Eso nos permite ir a fondo en cada proyecto.",
      ],
    },
    cta: {
      heading: "Si quieres saber cómo aparece tu marca hoy en los principales modelos de IA — y qué se puede hacer al respecto — empieza aquí.",
      btn: "Solicitar análisis GEO",
    },
    faq: {
      heading: "Preguntas frecuentes sobre GEO",
      items: [
        {
          q: "¿Qué es GEO o Generative Engine Optimization?",
          a: "GEO es la disciplina de optimizar la presencia de una marca en motores de búsqueda basados en inteligencia artificial, como ChatGPT, Perplexity o Google AI Overviews. A diferencia del SEO clásico, el objetivo no es posicionar una URL sino conseguir que los modelos de lenguaje citen tu marca como fuente autorizada en su categoría.",
        },
        {
          q: "¿En qué se diferencia GEO de SEO?",
          a: "El SEO optimiza para algoritmos que ordenan páginas web. El GEO optimiza para modelos de lenguaje que sintetizan respuestas. Son complementarios: un buen SEO construye la base de autoridad que el GEO necesita, pero las tácticas específicas de citación en LLMs requieren una capa adicional de trabajo.",
        },
        {
          q: "¿Cuánto tiempo tarda en dar resultados el GEO?",
          a: "Los primeros resultados observables pueden verse en 4-8 semanas para búsquedas de nicho. Construir presencia consistente en categorías competitivas es un trabajo de 3-6 meses, similar al SEO orgánico.",
        },
        {
          q: "¿Sirve el GEO para pymes?",
          a: "Sí, y especialmente. Las pymes que construyen autoridad de categoría en IA Search ahora tendrán una ventaja duradera frente a competidores que lleguen más tarde. El coste de entrada es más bajo que en SEO competitivo porque el mercado todavía no está saturado.",
        },
      ],
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "GEO — Generative Engine Optimization | Providentia",
      description: "Position your brand in ChatGPT, Perplexity and Google AI. Specialist GEO consultancy in Spain. Strategy, content and measurement.",
    },
    hero: {
      label: "Service",
      h1: "GEO.\nThe new battleground\nof digital marketing.",
      intro: "Users no longer only search Google. They search ChatGPT, Perplexity, Google AI Overview, Gemini. The answers they receive aren't link lists — they're syntheses. If your brand doesn't appear in those syntheses, it doesn't exist for that user.",
    },
    what: {
      label: "What is GEO",
      heading: "Generative Engine Optimization",
      body: "GEO is the practice of optimising content, structure and brand authority so that language models cite you as a relevant source. Unlike traditional SEO, the goal isn't to rank a URL in a list of results. It's to get ChatGPT, Perplexity or Google AI to mention your brand in their synthetic responses.",
      contrast: "SEO positions pages. GEO positions concepts, entities and answers.",
      stat: "ChatGPT, Perplexity, Google AI Overviews, Gemini and Bing Copilot already generate millions of daily answers in 2026.",
    },
    urgency: {
      heading: "The window is closing.\nWhoever positions now, stays.",
      paragraphs: [
        "Language models build their authority map from sources that already exist in their corpus. If your brand isn't there, the model won't cite you — not because it ignores you, but because it doesn't know you.",
        "The parallel with SEO in 2004 is precise: companies that bet on organic positioning when no one understood it dominated their categories for a decade. GEO is at that same moment.",
        "In Spain, only a handful of agencies have a structured GEO practice. Most mention it. No one executes it with consistent methodology.",
      ],
    },
    method: {
      label: "Methodology",
      heading: "Our GEO methodology",
      steps: [
        { numeral: "01", label: "Generative presence audit", description: "We analyse how your brand appears — or doesn't — in the leading AI engines. We identify gaps, attribution errors and citation opportunities." },
        { numeral: "02", label: "Entity and content strategy", description: "We build the concept map that LLMs must associate with your brand. We write or restructure content to be citable: clear, structured, data-backed, authoritative." },
        { numeral: "03", label: "Distribution and authority signals", description: "We publish and amplify in the sources models prioritise: sector publications, reference directories, specialist media." },
        { numeral: "04", label: "Measurement and tracking", description: "We track appearances in generative responses, model-by-model variation and brand presence evolution in AI Search over time." },
      ],
    },
    audience: {
      heading: "Which companies need GEO now?",
      items: [
        "Brands competing in high-query categories: financial services, health, legal, technology.",
        "Companies already investing in SEO that want to get ahead of the next cycle.",
        "SMEs that want to build category authority without a large-brand budget.",
        "Firms launching new products that want models to recognise them from day one.",
      ],
    },
    why: {
      heading: "Why Providentia",
      items: [
        "We are among the first consultancies in Spain with a structured GEO practice — not a service bolted on at the last minute.",
        "We combine GEO with SEO and data analytics because brand presence in 2026 is not built from a single channel.",
        "We work with a select number of clients. That lets us go deep on every project.",
      ],
    },
    cta: {
      heading: "If you want to know how your brand appears today in the leading AI models — and what can be done about it — start here.",
      btn: "Request a GEO analysis",
    },
    faq: {
      heading: "Frequently asked questions about GEO",
      items: [
        {
          q: "What is GEO or Generative Engine Optimization?",
          a: "GEO is the discipline of optimising a brand's presence in AI-based search engines such as ChatGPT, Perplexity or Google AI Overviews. Unlike traditional SEO, the goal is not to rank a URL but to get language models to cite your brand as an authoritative source in its category.",
        },
        {
          q: "How is GEO different from SEO?",
          a: "SEO optimises for algorithms that rank web pages. GEO optimises for language models that synthesise answers. They are complementary: good SEO builds the authority base that GEO needs, but LLM-specific citation tactics require an additional layer of work.",
        },
        {
          q: "How long does GEO take to show results?",
          a: "First observable results can appear in 4-8 weeks for niche queries. Building consistent presence in competitive categories takes 3-6 months, similar to organic SEO.",
        },
        {
          q: "Does GEO work for SMEs?",
          a: "Yes, especially. SMEs that build category authority in AI Search now will have a lasting advantage over competitors who arrive later. The entry cost is lower than in competitive SEO because the market is not yet saturated.",
        },
      ],
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "GEO — Generative Engine Optimization | Providentia",
      description: "Posiziona il tuo brand in ChatGPT, Perplexity e Google AI. Consulenza specializzata in GEO in Spagna. Strategia, contenuto e misurazione.",
    },
    hero: {
      label: "Servizio",
      h1: "GEO.\nIl nuovo campo di battaglia\ndel marketing digitale.",
      intro: "Gli utenti non cercano più solo su Google. Cercano su ChatGPT, Perplexity, Google AI Overview, Gemini. Le risposte che ottengono non sono elenchi di link — sono sintesi. Se il tuo brand non appare in quelle sintesi, non esiste per quell'utente.",
    },
    what: {
      label: "Cos'è il GEO",
      heading: "Generative Engine Optimization",
      body: "Il GEO è la pratica di ottimizzare contenuti, struttura e autorità del brand affinché i modelli linguistici lo citino come fonte rilevante. A differenza della SEO tradizionale, l'obiettivo non è posizionare un URL in una lista di risultati. È far sì che ChatGPT, Perplexity o Google AI menzionino il tuo brand nelle loro risposte sintetiche.",
      contrast: "La SEO posiziona pagine. Il GEO posiziona concetti, entità e risposte.",
      stat: "ChatGPT, Perplexity, Google AI Overviews, Gemini e Bing Copilot generano già milioni di risposte quotidiane nel 2026.",
    },
    urgency: {
      heading: "La finestra si chiude.\nChi si posiziona ora, rimane.",
      paragraphs: [
        "I modelli linguistici costruiscono la loro mappa di autorità a partire dalle fonti già presenti nel loro corpus. Se il tuo brand non è lì, il modello non ti citerà — non perché ti ignori, ma perché non ti conosce.",
        "Il parallelo con la SEO del 2004 è preciso: le aziende che puntarono sul posizionamento organico quando nessuno lo capiva dominarono le loro categorie per un decennio. Il GEO è in quel momento.",
        "In Spagna, solo una manciata di agenzie ha una pratica strutturata di GEO. La maggior parte lo menziona. Nessuna lo esegue con metodologia coerente.",
      ],
    },
    method: {
      label: "Metodologia",
      heading: "La nostra metodologia GEO",
      steps: [
        { numeral: "01", label: "Audit della presenza generativa", description: "Analizziamo come appare il tuo brand — o non appare — nei principali motori di IA. Identifichiamo lacune, errori di attribuzione e opportunità di citazione." },
        { numeral: "02", label: "Strategia di entità e contenuti", description: "Costruiamo la mappa dei concetti che i modelli linguistici devono associare al tuo brand. Scriviamo o ristrutturiamo contenuti per renderli citabili: chiari, strutturati, con dati, autorevoli." },
        { numeral: "03", label: "Distribuzione e segnali di autorità", description: "Pubblichiamo e amplifichiamo nelle fonti che i modelli privilegiano: pubblicazioni di settore, directory di riferimento, media specializzati." },
        { numeral: "04", label: "Misurazione e monitoraggio", description: "Tracciamo le apparizioni nelle risposte generative, le variazioni per modello e l'evoluzione della presenza del brand nell'AI Search nel tempo." },
      ],
    },
    audience: {
      heading: "Quali aziende hanno bisogno del GEO ora?",
      items: [
        "Brand che competono in categorie ad alta ricerca: servizi finanziari, salute, legale, tecnologia.",
        "Aziende che già investono in SEO e vogliono anticipare il ciclo successivo.",
        "PMI che vogliono costruire autorità di categoria senza un budget da grande brand.",
        "Aziende che lanciano nuovi prodotti e vogliono che i modelli le riconoscano fin dall'inizio.",
      ],
    },
    why: {
      heading: "Perché Providentia",
      items: [
        "Siamo tra le prime consulenze in Spagna con una pratica strutturata di GEO — non un servizio aggiunto all'ultimo momento.",
        "Combiniamo GEO con SEO e analisi dei dati perché la presenza del brand nel 2026 non si costruisce da un singolo canale.",
        "Lavoriamo con un numero ridotto di clienti. Questo ci permette di approfondire ogni progetto.",
      ],
    },
    cta: {
      heading: "Se vuoi sapere come appare il tuo brand oggi nei principali modelli di IA — e cosa si può fare al riguardo — inizia qui.",
      btn: "Richiedere un'analisi GEO",
    },
    faq: {
      heading: "Domande frequenti sul GEO",
      items: [
        {
          q: "Cos'è il GEO o Generative Engine Optimization?",
          a: "Il GEO è la disciplina di ottimizzare la presenza di un brand nei motori di ricerca basati sull'intelligenza artificiale, come ChatGPT, Perplexity o Google AI Overviews. A differenza della SEO tradizionale, l'obiettivo non è posizionare un URL ma far sì che i modelli linguistici citino il tuo brand come fonte autorevole nella sua categoria.",
        },
        {
          q: "In cosa si differenzia il GEO dalla SEO?",
          a: "La SEO ottimizza per algoritmi che classificano pagine web. Il GEO ottimizza per modelli linguistici che sintetizzano risposte. Sono complementari: una buona SEO costruisce la base di autorità di cui il GEO ha bisogno, ma le tattiche specifiche di citazione negli LLM richiedono un ulteriore livello di lavoro.",
        },
        {
          q: "Quanto tempo impiega il GEO per mostrare risultati?",
          a: "I primi risultati osservabili possono apparire in 4-8 settimane per ricerche di nicchia. Costruire una presenza consistente in categorie competitive richiede 3-6 mesi, simile alla SEO organica.",
        },
        {
          q: "Il GEO funziona per le PMI?",
          a: "Sì, e in modo particolare. Le PMI che costruiscono autorità di categoria nell'AI Search ora avranno un vantaggio duraturo rispetto ai concorrenti che arriveranno più tardi. Il costo d'ingresso è inferiore rispetto alla SEO competitiva perché il mercato non è ancora saturo.",
        },
      ],
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
      canonical: canonicalUrl(locale, "/geo"),
      languages: hreflangAlternates("/geo"),
    },
    openGraph: {
      ...ogBase(locale),
      title: c.meta.title,
      description: c.meta.description,
      url: canonicalUrl(locale, "/geo"),
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function GeoPage({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.es

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Generative Engine Optimization (GEO)",
    "description": c.meta.description,
    "provider": { "@id": "https://providentialabs.com/#organization" },
    "areaServed": { "@type": "Country", "name": "España" },
    "url": canonicalUrl(locale, "/geo"),
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

  return (
    <div className="min-h-screen">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <BlogNavbar />

      {/* ── HERO (oscuro) ── */}
      <section
        data-theme="dark"
        className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto w-full py-[96px]">
          <div className="max-w-4xl">
            <p className="data-label mb-10 animate-fade-up" style={{ color: "var(--text-muted)" }}>
              {c.hero.label}
            </p>
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
            <div className="mt-12 animate-fade-up animation-delay-300">
              <a
                href="#faq"
                className="cta-label px-8 py-3 transition-colors inline-block"
                style={{ color: "var(--signal-inv)", border: "1px solid var(--border-dark)" }}
              >
                {c.cta.btn} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES GEO (claro) ── */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="data-label mb-6 animate-fade-up" style={{ color: "var(--text-muted)" }}>
                {c.what.label}
              </p>
              <h2
                className="h2-display animate-fade-up animation-delay-100"
                style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-dark)" }}
              >
                {c.what.heading}
              </h2>
            </div>
            <div className="space-y-6 pt-2">
              <p className="font-serif text-[18px] leading-[1.8] animate-fade-up" style={{ color: "var(--text-mid)" }}>
                {c.what.body}
              </p>
              <p
                className="font-serif text-[18px] leading-[1.8] animate-fade-up animation-delay-100 pl-6"
                style={{
                  color: "var(--text-dark)",
                  borderLeft: "2px solid var(--sage)",
                  fontStyle: "italic",
                }}
              >
                {c.what.contrast}
              </p>
              <p className="data-label animate-fade-up animation-delay-200" style={{ color: "var(--moss)" }}>
                {c.what.stat}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LA VENTANA SE CIERRA (oscuro) ── */}
      <section
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl">
            <h2
              className="h2-display mb-12 animate-fade-up whitespace-pre-line"
              style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-light)" }}
            >
              {c.urgency.heading}
            </h2>
            <div className="space-y-6">
              {c.urgency.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-serif text-[18px] leading-[1.8] animate-fade-up"
                  style={{ color: "var(--text-muted)", animationDelay: `${i * 100}ms` }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── METODOLOGÍA (claro) ── */}
      <section
        data-theme="light"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="data-label mb-6 animate-fade-up" style={{ color: "var(--text-muted)" }}>
            {c.method.label}
          </p>
          <h2
            className="h2-display mb-20 animate-fade-up animation-delay-100"
            style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "var(--text-dark)" }}
          >
            {c.method.heading}
          </h2>
          <div className="space-y-0">
            {c.method.steps.map((step) => (
              <div
                key={step.numeral}
                className="flex gap-6 animate-fade-up"
                style={{ borderTop: "1px solid var(--border-light)", paddingTop: "24px", paddingBottom: "24px" }}
              >
                <span className="metric-display text-sm shrink-0 w-8" style={{ color: "var(--text-muted)" }}>
                  {step.numeral}
                </span>
                <div>
                  <p className="data-label mb-2" style={{ color: "var(--text-dark)" }}>{step.label}</p>
                  <p className="font-serif text-[17px] leading-[1.75]" style={{ color: "var(--text-mid)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN + POR QUÉ PROVIDENTIA (oscuro) ── */}
      <section
        data-theme="dark"
        className="px-8 md:px-16 lg:px-24 py-[96px]"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2
              className="h2-display mb-10 animate-fade-up"
              style={{ fontSize: "clamp(24px,3vw,36px)", color: "var(--text-light)" }}
            >
              {c.audience.heading}
            </h2>
            <ul className="space-y-5">
              {c.audience.items.map((item, i) => (
                <li
                  key={i}
                  className="font-serif text-[17px] leading-[1.75] animate-fade-up flex gap-4"
                  style={{ color: "var(--text-muted)", animationDelay: `${i * 80}ms` }}
                >
                  <span className="shrink-0 mt-1" style={{ color: "var(--sage)" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="h2-display mb-10 animate-fade-up"
              style={{ fontSize: "clamp(24px,3vw,36px)", color: "var(--text-light)" }}
            >
              {c.why.heading}
            </h2>
            <ul className="space-y-5">
              {c.why.items.map((item, i) => (
                <li
                  key={i}
                  className="font-serif text-[17px] leading-[1.75] animate-fade-up flex gap-4"
                  style={{ color: "var(--text-muted)", animationDelay: `${i * 80}ms` }}
                >
                  <span className="shrink-0 mt-1" style={{ color: "var(--sage)" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
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
          <p
            className="font-serif text-[22px] leading-[1.65] mb-10 animate-fade-up"
            style={{ color: "var(--text-dark)", maxWidth: "600px" }}
          >
            {c.cta.heading}
          </p>
          <a
            href="mailto:hola@providentia.es"
            className="cta-label px-8 py-3 transition-colors inline-block animate-fade-up animation-delay-100"
            style={{ background: "var(--signal)", color: "var(--text-light)" }}
          >
            {c.cta.btn} →
          </a>
        </div>
      </section>

      {/* ── FAQ (oscuro) ── */}
      <section
        id="faq"
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
