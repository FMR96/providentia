import type { Metadata } from "next"
import { ServicePage, type ServiceContent } from "@/components/service-page"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const SLUG = "inteligencia-de-lenguaje"

const CONTENT: Record<string, ServiceContent> = {
  es: {
    meta: {
      title: "Inteligencia de Lenguaje para Empresas — Providentia",
      description: "Procesamiento de lenguaje natural y modelos de IA para extraer conocimiento de texto no estructurado. NLP, LLM y automatización de documentos para empresas en España.",
    },
    hero: {
      label: "Servicio",
      tag: "NLP & LLM",
      h1: "Inteligencia\nde Lenguaje.",
      intro: "El texto no estructurado contiene más información que cualquier base de datos relacional. Contratos, reseñas, informes, correos. Solo hace falta saber escucharlos.",
    },
    what: {
      heading: "Qué es la inteligencia de lenguaje",
      body: "La inteligencia de lenguaje aplica técnicas de procesamiento de lenguaje natural (NLP) y modelos de lenguaje de gran escala (LLM) para extraer conocimiento estructurado de texto no estructurado. Transforma documentos, comentarios y comunicaciones en señal accionable para el negocio.",
      examples: [
        { label: "Análisis de opiniones y reseñas", description: "Clasificación automática del sentimiento y extracción de temas recurrentes en feedback de clientes, encuestas y reseñas online." },
        { label: "Extracción de datos en contratos", description: "Lectura automatizada de contratos, facturas y documentos legales para extraer cláusulas, fechas, importes y condiciones clave." },
        { label: "Q&A sobre documentación interna", description: "Sistemas de pregunta-respuesta sobre manuales, bases de conocimiento y documentación técnica, sin necesidad de leer miles de páginas." },
        { label: "Clasificación y enrutamiento automático", description: "Categorización automática de tickets, correos y solicitudes para dirigirlos al departamento o persona correcta sin intervención manual." },
      ],
    },
    how: {
      heading: "Cómo lo hacemos",
      steps: [
        { numeral: "01", label: "Definición del caso de uso", description: "Identificamos el problema concreto: qué texto, qué información queremos extraer y qué decisión debe mejorar. Un proyecto de NLP sin objetivo de negocio es un experimento." },
        { numeral: "02", label: "Preparación del corpus", description: "Recopilamos, limpiamos y estructuramos los textos disponibles. La calidad del corpus determina la calidad del resultado — más que el modelo en sí." },
        { numeral: "03", label: "Modelo y pipeline", description: "Construimos el pipeline adecuado: desde clasificadores clásicos hasta LLMs en producción, según el caso de uso, el volumen y los requisitos de privacidad." },
        { numeral: "04", label: "Integración en sistemas existentes", description: "Conectamos el modelo con las herramientas que ya usa tu equipo: CRM, ERP, plataformas de atención al cliente, intranets. El resultado llega donde se toma la decisión." },
      ],
    },
    forwho: {
      heading: "Para quién es este servicio",
      items: [
        { label: "Empresas con grandes volúmenes de texto", description: "Organizaciones que generan o reciben feedback masivo de clientes, contratos, informes internos o comunicaciones que no se analizan de forma sistemática." },
        { label: "Equipos de atención al cliente", description: "Empresas que quieren entender los motivos reales de contacto, automatizar respuestas frecuentes o priorizar tickets de mayor urgencia." },
        { label: "Despachos y empresas con documentación legal", description: "Organizaciones que trabajan con contratos o documentos complejos y necesitan extraer información clave sin revisión manual exhaustiva." },
        { label: "Empresas de e-commerce y retail", description: "Negocios que quieren extraer señal de reseñas de producto y feedback post-compra para mejorar producto, logística y atención." },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Necesito muchos datos de texto para implementar NLP?",
          a: "Depende del caso de uso. Para clasificación de sentimiento o análisis temático, los modelos preentrenados funcionan bien con pocos ejemplos etiquetados — a veces menos de doscientos. Para extracción de información en documentos muy específicos del sector, cuantos más ejemplos mejor. Evaluamos el volumen disponible en el diagnóstico inicial.",
        },
        {
          q: "¿Podéis trabajar con documentos confidenciales?",
          a: "Sí. Podemos diseñar pipelines que funcionen completamente en infraestructura privada o en cloud con configuraciones de privacidad estrictas, sin que los documentos salgan de tu entorno. No dependemos de APIs externas si el caso requiere privacidad máxima.",
        },
        {
          q: "¿Qué diferencia hay entre NLP clásico y LLMs como ChatGPT?",
          a: "Los modelos clásicos de NLP son más rápidos, más baratos y más predecibles — buenos para tareas bien definidas como clasificación o extracción de entidades. Los LLMs son más flexibles y manejan tareas más abiertas, pero requieren más cuidado en producción. Elegimos el enfoque según el problema, no por tendencia.",
        },
        {
          q: "¿Cuánto tiempo tarda en estar operativo un proyecto de NLP?",
          a: "Un primer prototipo funcional puede estar listo en dos a cuatro semanas. Un sistema en producción con integración completa, validación y monitorización suele requerir dos a tres meses, según la complejidad del pipeline y la disponibilidad de los datos.",
        },
      ],
    },
    cta: {
      heading: "¿Tienes texto que debería estar dándote información?",
      body: "Cuéntanos qué documentos o textos tienes y qué necesitas saber de ellos. Evaluamos la viabilidad sin compromiso.",
      btn: "Iniciar conversación",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "Language Intelligence for Business — Providentia",
      description: "Natural language processing and AI models to extract knowledge from unstructured text. NLP, LLM and document automation for businesses in Spain.",
    },
    hero: {
      label: "Service",
      tag: "NLP & LLM",
      h1: "Language\nIntelligence.",
      intro: "Unstructured text contains more information than any relational database. Contracts, reviews, reports, emails. You just need to know how to listen to them.",
    },
    what: {
      heading: "What is language intelligence",
      body: "Language intelligence applies natural language processing (NLP) techniques and large language models (LLM) to extract structured knowledge from unstructured text. It turns documents, comments and communications into actionable signal for the business.",
      examples: [
        { label: "Opinion & review analysis", description: "Automatic sentiment classification and extraction of recurring themes from customer feedback, surveys and online reviews." },
        { label: "Contract data extraction", description: "Automated reading of contracts, invoices and legal documents to extract key clauses, dates, amounts and conditions." },
        { label: "Q&A on internal documentation", description: "Question-answering systems over manuals, knowledge bases and technical documentation, without reading thousands of pages." },
        { label: "Automatic classification & routing", description: "Automatic categorisation of tickets, emails and requests to direct them to the right department or person without manual intervention." },
      ],
    },
    how: {
      heading: "How we do it",
      steps: [
        { numeral: "01", label: "Use case definition", description: "We identify the specific problem: what text, what information we want to extract and what decision it must improve. An NLP project without a business objective is an experiment." },
        { numeral: "02", label: "Corpus preparation", description: "We collect, clean and structure available texts. The quality of the corpus determines the quality of the result — more than the model itself." },
        { numeral: "03", label: "Model and pipeline", description: "We build the appropriate pipeline: from classical classifiers to production LLMs, depending on the use case, volume and privacy requirements." },
        { numeral: "04", label: "Integration into existing systems", description: "We connect the model to the tools your team already uses: CRM, ERP, customer service platforms, intranets. The result reaches where the decision is made." },
      ],
    },
    forwho: {
      heading: "Who this service is for",
      items: [
        { label: "Companies with large text volumes", description: "Organisations that generate or receive massive customer feedback, contracts, internal reports or communications that aren't analysed systematically." },
        { label: "Customer service teams", description: "Companies that want to understand the real reasons for contact, automate frequent responses or prioritise the most urgent tickets." },
        { label: "Law firms and document-heavy companies", description: "Organisations working with contracts or complex documents that need to extract key information without exhaustive manual review." },
        { label: "E-commerce and retail businesses", description: "Businesses wanting to extract signal from product reviews and post-purchase feedback to improve product, logistics and service." },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Do I need a lot of text data to implement NLP?",
          a: "It depends on the use case. For sentiment classification or thematic analysis, pre-trained models work well with few labelled examples — sometimes fewer than two hundred. For information extraction from highly sector-specific documents, the more examples the better. We assess available volume in the initial diagnosis.",
        },
        {
          q: "Can you work with confidential documents?",
          a: "Yes. We can design pipelines that run entirely on private infrastructure or in cloud with strict privacy configurations, without documents leaving your environment. We don't depend on external APIs if the case requires maximum privacy.",
        },
        {
          q: "What's the difference between classical NLP and LLMs like ChatGPT?",
          a: "Classical NLP models are faster, cheaper and more predictable — good for well-defined tasks like classification or entity extraction. LLMs are more flexible and handle more open-ended tasks, but require more care in production. We choose the approach based on the problem, not on trends.",
        },
        {
          q: "How long does it take to get an NLP project operational?",
          a: "A first functional prototype can be ready in two to four weeks. A production system with full integration, validation and monitoring typically requires two to three months, depending on pipeline complexity and data availability.",
        },
      ],
    },
    cta: {
      heading: "Have text that should be giving you information?",
      body: "Tell us what documents or texts you have and what you need to know from them. We assess feasibility at no commitment.",
      btn: "Start a conversation",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Intelligenza del Linguaggio per Aziende — Providentia",
      description: "Elaborazione del linguaggio naturale e modelli AI per estrarre conoscenza da testo non strutturato. NLP, LLM e automazione documenti per aziende in Spagna.",
    },
    hero: {
      label: "Servizio",
      tag: "NLP & LLM",
      h1: "Intelligenza\ndel Linguaggio.",
      intro: "Il testo non strutturato contiene più informazioni di qualsiasi database relazionale. Contratti, recensioni, report, email. Bisogna solo saper ascoltarli.",
    },
    what: {
      heading: "Cos'è l'intelligenza del linguaggio",
      body: "L'intelligenza del linguaggio applica tecniche di elaborazione del linguaggio naturale (NLP) e modelli linguistici di grandi dimensioni (LLM) per estrarre conoscenza strutturata da testo non strutturato. Trasforma documenti, commenti e comunicazioni in segnale azionabile per il business.",
      examples: [
        { label: "Analisi di opinioni e recensioni", description: "Classificazione automatica del sentiment ed estrazione di temi ricorrenti dal feedback dei clienti, sondaggi e recensioni online." },
        { label: "Estrazione dati da contratti", description: "Lettura automatizzata di contratti, fatture e documenti legali per estrarre clausole, date, importi e condizioni chiave." },
        { label: "Q&A su documentazione interna", description: "Sistemi di domande e risposte su manuali, basi di conoscenza e documentazione tecnica, senza dover leggere migliaia di pagine." },
        { label: "Classificazione e instradamento automatico", description: "Categorizzazione automatica di ticket, email e richieste per indirizzarli al reparto o alla persona giusta senza intervento manuale." },
      ],
    },
    how: {
      heading: "Come lo facciamo",
      steps: [
        { numeral: "01", label: "Definizione del caso d'uso", description: "Identifichiamo il problema specifico: quale testo, quale informazione vogliamo estrarre e quale decisione deve migliorare. Un progetto NLP senza obiettivo di business è un esperimento." },
        { numeral: "02", label: "Preparazione del corpus", description: "Raccogliamo, puliamo e strutturiamo i testi disponibili. La qualità del corpus determina la qualità del risultato — più del modello stesso." },
        { numeral: "03", label: "Modello e pipeline", description: "Costruiamo la pipeline adeguata: dai classificatori classici agli LLM in produzione, in base al caso d'uso, al volume e ai requisiti di privacy." },
        { numeral: "04", label: "Integrazione nei sistemi esistenti", description: "Colleghiamo il modello agli strumenti già usati dal tuo team: CRM, ERP, piattaforme di assistenza clienti, intranet. Il risultato arriva dove si prende la decisione." },
      ],
    },
    forwho: {
      heading: "Per chi è questo servizio",
      items: [
        { label: "Aziende con grandi volumi di testo", description: "Organizzazioni che generano o ricevono massicce quantità di feedback clienti, contratti, report interni o comunicazioni non analizzate sistematicamente." },
        { label: "Team di assistenza clienti", description: "Aziende che vogliono capire i motivi reali di contatto, automatizzare risposte frequenti o prioritizzare i ticket più urgenti." },
        { label: "Studi legali e aziende con documentazione complessa", description: "Organizzazioni che lavorano con contratti o documenti complessi e hanno bisogno di estrarre informazioni chiave senza revisione manuale esaustiva." },
        { label: "Aziende e-commerce e retail", description: "Aziende che vogliono estrarre segnale da recensioni di prodotto e feedback post-acquisto per migliorare prodotto, logistica e assistenza." },
      ],
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Ho bisogno di molti dati testuali per implementare NLP?",
          a: "Dipende dal caso d'uso. Per la classificazione del sentiment o l'analisi tematica, i modelli preaddestrati funzionano bene con pochi esempi etichettati — a volte meno di duecento. Per l'estrazione di informazioni da documenti molto specifici del settore, più esempi meglio è. Valutiamo il volume disponibile nella diagnosi iniziale.",
        },
        {
          q: "Potete lavorare con documenti riservati?",
          a: "Sì. Possiamo progettare pipeline che funzionano completamente su infrastruttura privata o in cloud con configurazioni di privacy rigorose, senza che i documenti escano dal tuo ambiente. Non dipendiamo da API esterne se il caso richiede massima privacy.",
        },
        {
          q: "Qual è la differenza tra NLP classico e LLM come ChatGPT?",
          a: "I modelli NLP classici sono più veloci, economici e prevedibili — ottimi per attività ben definite come classificazione o estrazione di entità. Gli LLM sono più flessibili e gestiscono attività più aperte, ma richiedono più cura in produzione. Scegliamo l'approccio in base al problema, non alla tendenza del momento.",
        },
        {
          q: "Quanto tempo ci vuole per rendere operativo un progetto NLP?",
          a: "Un primo prototipo funzionale può essere pronto in due-quattro settimane. Un sistema in produzione con integrazione completa, validazione e monitoraggio richiede tipicamente due-tre mesi, a seconda della complessità della pipeline e della disponibilità dei dati.",
        },
      ],
    },
    cta: {
      heading: "Hai testo che dovrebbe darti informazioni?",
      body: "Raccontaci quali documenti o testi hai e cosa hai bisogno di sapere da essi. Valutiamo la fattibilità senza impegno.",
      btn: "Iniziare una conversazione",
    },
    footer: { copyright: "© MMXXVI" },
  },
}

const RELATED = [
  { label: "Analítica Predictiva", href: "/servicios/analitica-predictiva" },
  { label: "Arquitectura de Datos", href: "/servicios/arquitectura-de-datos" },
  { label: "Todos los servicios", href: "/servicios" },
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const c = CONTENT[locale] ?? CONTENT.es
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: canonicalUrl(locale, `/servicios/${SLUG}`),
      languages: hreflangAlternates(`/servicios/${SLUG}`),
    },
    openGraph: {
      ...ogBase(locale),
      title: c.meta.title,
      description: c.meta.description,
      url: canonicalUrl(locale, `/servicios/${SLUG}`),
    },
  }
}

export default async function InteligenciaDeLenguaje({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale] ?? CONTENT.es
  return (
    <ServicePage
      locale={locale}
      slug={SLUG}
      serviceName="Inteligencia de Lenguaje"
      serviceNameEn="Language Intelligence"
      serviceType="Natural Language Processing Consulting"
      content={c}
      related={RELATED}
    />
  )
}
