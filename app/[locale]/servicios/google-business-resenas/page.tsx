import type { Metadata } from "next"
import { ServicePage, type ServiceContent } from "@/components/service-page"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const SLUG = "google-business-resenas"

const CONTENT: Record<string, ServiceContent> = {
  es: {
    meta: {
      title: "Ficha de Google Business y Estrategia de Reseñas — Providentia",
      description: "Optimización de Google Business Profile y estrategia ética de generación y gestión de reseñas. Presencia local en Google Maps para negocios en España.",
    },
    hero: {
      label: "Servicio",
      tag: "Local Presence",
      h1: "Ficha de Google\ny Reseñas.",
      intro: "El 80% de los consumidores consulta Google antes de visitar un negocio local. Tu ficha de Google es tu primera impresión. Y las reseñas son tu argumento de venta más creíble.",
    },
    what: {
      heading: "En qué consiste el servicio",
      body: "Optimizamos tu ficha de Google Business Profile para que aparezcas en los primeros resultados cuando alguien busca lo que ofreces en tu zona, y diseñamos una estrategia de generación y gestión de reseñas que sea consistente, ética y escalable. No compramos reseñas. Las generamos con proceso.",
      examples: [
        { label: "Optimización completa de la ficha", description: "Categorías correctas, descripción optimizada, horarios, fotos, atributos, preguntas frecuentes y enlace al sitio web. Todo lo que Google considera para posicionarte." },
        { label: "Protocolo de solicitud de reseñas", description: "Sistema estructurado para solicitar reseñas a clientes satisfechos: cuándo, cómo y a través de qué canal. Tasa de conversión de solicitud a reseña publicada." },
        { label: "Gestión de respuestas", description: "Redacción de respuestas a reseñas positivas y negativas. Las respuestas también aparecen en Google y comunican la cultura del negocio." },
        { label: "Monitorización y reporting", description: "Seguimiento de la posición en Google Maps, evolución de la puntuación, volumen de reseñas y menciones. Informe mensual de presencia local." },
      ],
    },
    how: {
      heading: "Cómo lo hacemos",
      steps: [
        { numeral: "01", label: "Auditoría de la ficha actual", description: "Revisamos el estado actual de tu ficha: completitud, categorías, fotos, reseñas existentes y posición en búsquedas locales relevantes para tu negocio." },
        { numeral: "02", label: "Optimización completa", description: "Completamos y optimizamos todos los campos de la ficha con criterio SEO local. Subimos fotografías profesionales si el proyecto lo incluye." },
        { numeral: "03", label: "Protocolo de reseñas", description: "Diseñamos el proceso de solicitud de reseñas adaptado a tu tipo de negocio: presencial, e-commerce, consulta profesional. Formamos a tu equipo para que lo ejecute." },
        { numeral: "04", label: "Monitorización y ajuste", description: "Realizamos seguimiento mensual de la presencia local, respondemos reseñas y ajustamos la estrategia según los resultados." },
      ],
    },
    forwho: {
      heading: "Para quién es este servicio",
      items: [
        { label: "Restaurantes y hostelería", description: "Negocios donde las reseñas son el principal factor de decisión. Una puntuación de 4.5 frente a 4.0 puede cambiar completamente el volumen de reservas." },
        { label: "Clínicas y centros de salud", description: "Consultas médicas, dentales, fisioterapia y centros de bienestar donde la confianza se construye antes de la primera visita." },
        { label: "Comercios y tiendas", description: "Retail que compite con otras opciones en la misma calle o zona y necesita destacar en las búsquedas locales." },
        { label: "Cualquier negocio con clientela local", description: "Empresas de servicios, talleres, peluquerías, academias y cualquier negocio cuya captación de clientes ocurre en un radio geográfico definido." },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Podéis conseguir más reseñas sin comprarlas?",
          a: "Sí. La mayoría de los negocios tienen muchos más clientes satisfechos de los que dejan reseñas espontáneamente. El problema no es la satisfacción — es que no existe un proceso para convertir esa satisfacción en reseña. Eso es exactamente lo que diseñamos: un proceso estructurado y ético que aumenta la tasa de conversión de cliente satisfecho a reseña publicada.",
        },
        {
          q: "¿Qué hago si tengo reseñas negativas?",
          a: "Las reseñas negativas son inevitables y, gestionadas bien, pueden ser una oportunidad. Redactamos respuestas profesionales que demuestran que el negocio escucha y actúa. Una respuesta bien redactada a una reseña negativa puede ser más persuasiva que diez reseñas positivas sin respuesta.",
        },
        {
          q: "¿Cuánto tiempo tarda en verse un impacto en la posición de Google Maps?",
          a: "Depende de la competencia en tu sector y zona. En sectores poco competidos, las mejoras en posicionamiento local pueden verse en cuatro a ocho semanas. En sectores con mucha competencia local, el proceso puede llevar tres a seis meses. Lo que sí es inmediato es la mejora visual de la ficha.",
        },
        {
          q: "¿Necesito tener una web para optimizar la ficha de Google?",
          a: "No es imprescindible, pero ayuda significativamente. Una ficha sin web asociada tiene menos señales de autoridad. Si no tienes web, podemos crear una página sencilla o trabajar solo con la ficha — dependiendo del presupuesto y los objetivos.",
        },
      ],
    },
    cta: {
      heading: "¿Sabe tu potencial cliente que existes cuando te busca en Google?",
      body: "Auditamos tu ficha actual y te decimos exactamente qué está frenando tu visibilidad local.",
      btn: "Iniciar conversación",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "Google Business Profile & Review Strategy — Providentia",
      description: "Google Business Profile optimisation and ethical review generation and management strategy. Local presence on Google Maps for businesses in Spain.",
    },
    hero: {
      label: "Service",
      tag: "Local Presence",
      h1: "Google Profile\n& Reviews.",
      intro: "80% of consumers check Google before visiting a local business. Your Google profile is your first impression. And reviews are your most credible sales argument.",
    },
    what: {
      heading: "What the service involves",
      body: "We optimise your Google Business Profile to appear in top results when someone searches for what you offer in your area, and we design a review generation and management strategy that is consistent, ethical and scalable. We don't buy reviews. We generate them through process.",
      examples: [
        { label: "Complete profile optimisation", description: "Correct categories, optimised description, hours, photos, attributes, FAQs and website link. Everything Google considers to rank you." },
        { label: "Review request protocol", description: "Structured system for requesting reviews from satisfied customers: when, how and through which channel. Conversion rate from request to published review." },
        { label: "Response management", description: "Writing responses to positive and negative reviews. Responses also appear on Google and communicate the business culture." },
        { label: "Monitoring and reporting", description: "Tracking of Google Maps position, score evolution, review volume and mentions. Monthly local presence report." },
      ],
    },
    how: {
      heading: "How we do it",
      steps: [
        { numeral: "01", label: "Current profile audit", description: "We review the current state of your profile: completeness, categories, photos, existing reviews and position in local searches relevant to your business." },
        { numeral: "02", label: "Complete optimisation", description: "We complete and optimise all profile fields with local SEO criteria. We upload professional photographs if the project includes it." },
        { numeral: "03", label: "Review protocol", description: "We design the review request process adapted to your type of business: in-person, e-commerce, professional consultation. We train your team to execute it." },
        { numeral: "04", label: "Monitoring and adjustment", description: "We perform monthly local presence tracking, respond to reviews and adjust the strategy according to results." },
      ],
    },
    forwho: {
      heading: "Who this service is for",
      items: [
        { label: "Restaurants and hospitality", description: "Businesses where reviews are the primary decision factor. A rating of 4.5 versus 4.0 can completely change booking volume." },
        { label: "Clinics and health centres", description: "Medical, dental, physiotherapy and wellness practices where trust is built before the first visit." },
        { label: "Shops and retail", description: "Retail competing with other options on the same street or area that needs to stand out in local searches." },
        { label: "Any business with local clientele", description: "Service companies, workshops, hairdressers, academies and any business whose customer acquisition happens within a defined geographic radius." },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Can you get more reviews without buying them?",
          a: "Yes. Most businesses have far more satisfied customers than those who leave reviews spontaneously. The problem isn't satisfaction — it's that there's no process to convert that satisfaction into a review. That's exactly what we design: a structured, ethical process that increases the conversion rate from satisfied customer to published review.",
        },
        {
          q: "What do I do if I have negative reviews?",
          a: "Negative reviews are inevitable and, well managed, can be an opportunity. We write professional responses that demonstrate the business listens and acts. A well-written response to a negative review can be more persuasive than ten positive reviews without responses.",
        },
        {
          q: "How long does it take to see an impact on Google Maps position?",
          a: "It depends on competition in your sector and area. In less competitive sectors, improvements in local positioning can be seen in four to eight weeks. In sectors with heavy local competition, the process can take three to six months. What is immediate is the visual improvement of the profile.",
        },
        {
          q: "Do I need a website to optimise my Google profile?",
          a: "It isn't essential, but it helps significantly. A profile without an associated website has fewer authority signals. If you don't have a website, we can create a simple page or work only with the profile — depending on budget and objectives.",
        },
      ],
    },
    cta: {
      heading: "Does your potential customer know you exist when they search for you on Google?",
      body: "We audit your current profile and tell you exactly what is holding back your local visibility.",
      btn: "Start a conversation",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Scheda Google Business e Strategia Recensioni — Providentia",
      description: "Ottimizzazione di Google Business Profile e strategia etica di generazione e gestione delle recensioni. Presenza locale su Google Maps per aziende in Spagna.",
    },
    hero: {
      label: "Servizio",
      tag: "Local Presence",
      h1: "Scheda Google\ne Recensioni.",
      intro: "L'80% dei consumatori consulta Google prima di visitare un'attività locale. La tua scheda Google è la tua prima impressione. E le recensioni sono il tuo argomento di vendita più credibile.",
    },
    what: {
      heading: "In cosa consiste il servizio",
      body: "Ottimizziamo la tua scheda Google Business Profile per farti comparire nei primi risultati quando qualcuno cerca ciò che offri nella tua zona, e progettiamo una strategia di generazione e gestione delle recensioni che sia coerente, etica e scalabile. Non compriamo recensioni. Le generiamo con processo.",
      examples: [
        { label: "Ottimizzazione completa della scheda", description: "Categorie corrette, descrizione ottimizzata, orari, foto, attributi, domande frequenti e link al sito web. Tutto ciò che Google considera per posizionarti." },
        { label: "Protocollo di richiesta recensioni", description: "Sistema strutturato per richiedere recensioni ai clienti soddisfatti: quando, come e attraverso quale canale. Tasso di conversione da richiesta a recensione pubblicata." },
        { label: "Gestione delle risposte", description: "Redazione di risposte a recensioni positive e negative. Le risposte compaiono anch'esse su Google e comunicano la cultura dell'attività." },
        { label: "Monitoraggio e reportistica", description: "Monitoraggio della posizione su Google Maps, evoluzione del punteggio, volume di recensioni e menzioni. Report mensile di presenza locale." },
      ],
    },
    how: {
      heading: "Come lo facciamo",
      steps: [
        { numeral: "01", label: "Audit della scheda attuale", description: "Esaminiamo lo stato attuale della tua scheda: completezza, categorie, foto, recensioni esistenti e posizione nelle ricerche locali rilevanti per la tua attività." },
        { numeral: "02", label: "Ottimizzazione completa", description: "Completiamo e ottimizziamo tutti i campi della scheda con criterio SEO locale. Carichiamo fotografie professionali se il progetto lo include." },
        { numeral: "03", label: "Protocollo recensioni", description: "Progettiamo il processo di richiesta recensioni adattato al tuo tipo di attività: presenza fisica, e-commerce, consulenza professionale. Formiamo il tuo team per eseguirlo." },
        { numeral: "04", label: "Monitoraggio e aggiustamento", description: "Effettuiamo monitoraggio mensile della presenza locale, rispondiamo alle recensioni e aggiustiamo la strategia in base ai risultati." },
      ],
    },
    forwho: {
      heading: "Per chi è questo servizio",
      items: [
        { label: "Ristoranti e ospitalità", description: "Attività dove le recensioni sono il principale fattore di decisione. Un punteggio di 4,5 contro 4,0 può cambiare completamente il volume di prenotazioni." },
        { label: "Cliniche e centri sanitari", description: "Studi medici, dentistici, fisioterapia e centri benessere dove la fiducia si costruisce prima della prima visita." },
        { label: "Negozi e retail", description: "Retail che compete con altre opzioni nella stessa via o zona e ha bisogno di distinguersi nelle ricerche locali." },
        { label: "Qualsiasi attività con clientela locale", description: "Aziende di servizi, officine, parrucchieri, accademie e qualsiasi attività la cui acquisizione clienti avviene in un raggio geografico definito." },
      ],
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Potete ottenere più recensioni senza comprarle?",
          a: "Sì. La maggior parte delle attività ha molti più clienti soddisfatti di quanti lascino recensioni spontaneamente. Il problema non è la soddisfazione — è che non esiste un processo per convertire quella soddisfazione in recensione. È esattamente quello che progettiamo: un processo strutturato ed etico che aumenta il tasso di conversione da cliente soddisfatto a recensione pubblicata.",
        },
        {
          q: "Cosa faccio se ho recensioni negative?",
          a: "Le recensioni negative sono inevitabili e, gestite bene, possono essere un'opportunità. Scriviamo risposte professionali che dimostrano che l'attività ascolta e agisce. Una risposta ben scritta a una recensione negativa può essere più persuasiva di dieci recensioni positive senza risposta.",
        },
        {
          q: "Quanto tempo ci vuole per vedere un impatto sulla posizione di Google Maps?",
          a: "Dipende dalla concorrenza nel tuo settore e zona. In settori poco competitivi, i miglioramenti nel posizionamento locale possono vedersi in quattro-otto settimane. In settori con molta concorrenza locale, il processo può richiedere da tre a sei mesi. Ciò che è immediato è il miglioramento visivo della scheda.",
        },
        {
          q: "Ho bisogno di un sito web per ottimizzare la scheda Google?",
          a: "Non è indispensabile, ma aiuta significativamente. Una scheda senza sito web associato ha meno segnali di autorità. Se non hai un sito, possiamo creare una pagina semplice o lavorare solo con la scheda — a seconda del budget e degli obiettivi.",
        },
      ],
    },
    cta: {
      heading: "Il tuo potenziale cliente sa che esisti quando ti cerca su Google?",
      body: "Facciamo un audit della tua scheda attuale e ti diciamo esattamente cosa sta frenando la tua visibilità locale.",
      btn: "Iniziare una conversazione",
    },
    footer: { copyright: "© MMXXVI" },
  },
}

const RELATED = [
  { label: "SEO, SEM y Paid Media", href: "/servicios/seo-sem-paid-media" },
  { label: "Gestión de Redes Sociales", href: "/servicios/gestion-redes-sociales" },
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

export default async function GoogleBusinessResenas({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale] ?? CONTENT.es
  return (
    <ServicePage
      locale={locale}
      slug={SLUG}
      serviceName="Ficha de Google y Estrategia de Reseñas"
      serviceNameEn="Google Business Profile and Review Strategy"
      serviceType="Local SEO and Reputation Management"
      content={c}
      related={RELATED}
    />
  )
}
