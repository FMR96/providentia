import type { Metadata } from "next"
import { ServicePage, type ServiceContent } from "@/components/service-page"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const SLUG = "seo-sem-paid-media"

const CONTENT: Record<string, ServiceContent> = {
  es: {
    meta: {
      title: "SEO, SEM y Paid Media para Empresas — Providentia",
      description: "Posicionamiento SEO, SEO local, GEO para modelos de IA, Google Ads y social ads. Estrategia de búsqueda y publicidad de pago para empresas en España.",
    },
    hero: {
      label: "Servicio",
      tag: "Search & Ads",
      h1: "SEO, SEM\ny Paid Media.",
      intro: "Aparecer cuando alguien busca lo que ofreces no es suerte. Es estrategia, técnica y consistencia. La visibilidad que no se trabaja la tiene la competencia.",
    },
    what: {
      heading: "En qué consiste el servicio",
      body: "Trabajamos el posicionamiento en buscadores desde tres ángulos complementarios: SEO orgánico para aparecer de forma sostenida, publicidad de pago para resultados inmediatos y GEO (Generative Engine Optimisation) para que tu marca aparezca también en respuestas de modelos de IA como ChatGPT, Perplexity o Gemini.",
      examples: [
        { label: "SEO técnico y de contenidos", description: "Auditoría técnica, optimización on-page, estrategia de contenidos y construcción de autoridad. Posicionamiento orgánico sostenido." },
        { label: "SEO local y Google Maps", description: "Posicionamiento en búsquedas con intención local. Fundamental para negocios con presencia física o clientela geográficamente concentrada." },
        { label: "GEO — visibilidad en modelos de IA", description: "Optimización de contenidos y datos estructurados para que tu marca sea citada por ChatGPT, Perplexity, Gemini y otros LLMs. El SEO del futuro, disponible hoy." },
        { label: "Google Ads y Social Ads", description: "Campañas de pago en Google Search, Display, Shopping y redes sociales (Meta, LinkedIn). Gestión orientada a resultados, no a impresiones." },
      ],
    },
    how: {
      heading: "Cómo lo hacemos",
      steps: [
        { numeral: "01", label: "Auditoría y análisis de competencia", description: "Analizamos el estado técnico de tu web, las palabras clave con más potencial y cómo se posiciona la competencia. Sin diagnóstico no hay estrategia." },
        { numeral: "02", label: "Estrategia y planificación", description: "Definimos la hoja de ruta: qué canales, qué keywords, qué presupuesto de paid y en qué orden. Orgánico y de pago como sistema, no como silos separados." },
        { numeral: "03", label: "Implementación técnica y de contenidos", description: "Ejecutamos las mejoras técnicas, creamos o optimizamos contenidos, configuramos campañas de pago y ponemos en marcha los feeds de datos estructurados para GEO." },
        { numeral: "04", label: "Optimización y reporting mensual", description: "Ajustamos bids, actualizamos contenidos, analizamos rankings y entregamos un informe mensual claro sobre qué funciona, qué no y qué hacemos a continuación." },
      ],
    },
    forwho: {
      heading: "Para quién es este servicio",
      items: [
        { label: "Negocios que quieren crecimiento orgánico", description: "Empresas que no quieren depender exclusivamente de publicidad de pago y necesitan construir visibilidad sostenida en buscadores." },
        { label: "Empresas con presupuesto de publicidad", description: "Negocios que ya invierten en Google Ads o redes sociales pero no están seguros de que su inversión esté bien gestionada o dando el rendimiento esperado." },
        { label: "Negocios locales que quieren más visibilidad", description: "Empresas con clientela geográfica que quieren dominar las búsquedas de su zona antes de que lo haga la competencia." },
        { label: "Marcas que quieren aparecer en respuestas de IA", description: "Negocios con visión de futuro que entienden que el siguiente canal de búsqueda no es Google — es ChatGPT, Perplexity y los LLMs que vengan después." },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cuánto tiempo tarda en verse resultados con SEO?",
          a: "El SEO orgánico es una inversión a medio plazo. Los primeros movimientos en rankings suelen verse entre los tres y seis meses de trabajo consistente. Pero hay excepciones: mejoras técnicas urgentes o contenidos sobre keywords poco competidas pueden dar resultados antes. El paid media da resultados desde el primer día.",
        },
        {
          q: "¿Qué es GEO y por qué importa ahora?",
          a: "GEO (Generative Engine Optimisation) es la práctica de optimizar tu contenido y datos estructurados para que los modelos de IA generativa — ChatGPT, Perplexity, Gemini — te citen en sus respuestas cuando alguien pregunta sobre tu sector. Es el equivalente del SEO para el nuevo paradigma de búsqueda. Las marcas que lo trabajan hoy tienen ventaja sobre las que lo descubran en dos años.",
        },
        {
          q: "¿Gestionáis campañas de pago con presupuesto mínimo?",
          a: "Trabajamos con presupuestos de paid media desde 500€/mes de inversión publicitaria. Por debajo de esa cifra, el canal puede no ser eficiente y lo decimos antes de empezar. Nuestra tarifa de gestión es independiente del presupuesto de medios.",
        },
        {
          q: "¿Podéis hacer SEO si nuestra web la gestiona otra empresa?",
          a: "Sí. Trabajamos con el equipo o agencia que gestione tu web. Entregamos las recomendaciones técnicas y de contenido en el formato que necesite tu proveedor para implementarlas. Coordinamos nosotros si es necesario.",
        },
      ],
    },
    cta: {
      heading: "¿Apareces cuando tus clientes te buscan?",
      body: "Auditamos tu visibilidad actual en buscadores y te decimos qué oportunidades estás dejando pasar.",
      btn: "Iniciar conversación",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "SEO, SEM & Paid Media for Business — Providentia",
      description: "SEO positioning, local SEO, GEO for AI models, Google Ads and social ads. Search and paid advertising strategy for businesses in Spain.",
    },
    hero: {
      label: "Service",
      tag: "Search & Ads",
      h1: "SEO, SEM\n& Paid Media.",
      intro: "Appearing when someone searches for what you offer isn't luck. It's strategy, technique and consistency. The visibility you don't work for, your competition has.",
    },
    what: {
      heading: "What the service involves",
      body: "We work on search engine positioning from three complementary angles: organic SEO for sustained visibility, paid advertising for immediate results, and GEO (Generative Engine Optimisation) so your brand also appears in responses from AI models like ChatGPT, Perplexity or Gemini.",
      examples: [
        { label: "Technical and content SEO", description: "Technical audit, on-page optimisation, content strategy and authority building. Sustained organic positioning." },
        { label: "Local SEO and Google Maps", description: "Positioning in local intent searches. Essential for businesses with physical presence or geographically concentrated clientele." },
        { label: "GEO — visibility in AI models", description: "Content and structured data optimisation so your brand is cited by ChatGPT, Perplexity, Gemini and other LLMs. The SEO of the future, available today." },
        { label: "Google Ads and Social Ads", description: "Paid campaigns on Google Search, Display, Shopping and social media (Meta, LinkedIn). Results-oriented management, not impressions." },
      ],
    },
    how: {
      heading: "How we do it",
      steps: [
        { numeral: "01", label: "Audit and competitor analysis", description: "We analyse the technical state of your website, the most promising keywords and how competitors are positioned. Without a diagnosis there's no strategy." },
        { numeral: "02", label: "Strategy and planning", description: "We define the roadmap: which channels, which keywords, what paid budget and in what order. Organic and paid as a system, not separate silos." },
        { numeral: "03", label: "Technical and content implementation", description: "We execute technical improvements, create or optimise content, configure paid campaigns and launch structured data feeds for GEO." },
        { numeral: "04", label: "Monthly optimisation and reporting", description: "We adjust bids, update content, analyse rankings and deliver a clear monthly report on what works, what doesn't and what we do next." },
      ],
    },
    forwho: {
      heading: "Who this service is for",
      items: [
        { label: "Businesses wanting organic growth", description: "Companies that don't want to depend exclusively on paid advertising and need to build sustained search engine visibility." },
        { label: "Companies with advertising budgets", description: "Businesses already investing in Google Ads or social media but unsure their investment is well managed or delivering expected returns." },
        { label: "Local businesses wanting more visibility", description: "Companies with geographic clientele wanting to dominate searches in their area before the competition does." },
        { label: "Brands wanting to appear in AI responses", description: "Forward-thinking businesses that understand the next search channel isn't Google — it's ChatGPT, Perplexity and the LLMs that come after." },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "How long does it take to see results with SEO?",
          a: "Organic SEO is a medium-term investment. First movements in rankings are usually seen between three and six months of consistent work. But there are exceptions: urgent technical improvements or content on low-competition keywords can yield results sooner. Paid media delivers results from day one.",
        },
        {
          q: "What is GEO and why does it matter now?",
          a: "GEO (Generative Engine Optimisation) is the practice of optimising your content and structured data so generative AI models — ChatGPT, Perplexity, Gemini — cite you in their responses when someone asks about your sector. It's the equivalent of SEO for the new search paradigm. Brands working on it today have an advantage over those who discover it in two years.",
        },
        {
          q: "Do you manage paid campaigns with a minimum budget?",
          a: "We work with paid media budgets from €500/month in advertising investment. Below that figure, the channel may not be efficient and we say so before starting. Our management fee is separate from the media budget.",
        },
        {
          q: "Can you do SEO if our website is managed by another company?",
          a: "Yes. We work with whatever team or agency manages your website. We deliver technical and content recommendations in whatever format your provider needs to implement them. We coordinate if necessary.",
        },
      ],
    },
    cta: {
      heading: "Do you appear when your customers search for you?",
      body: "We audit your current search visibility and tell you which opportunities you're missing.",
      btn: "Start a conversation",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "SEO, SEM e Paid Media per Aziende — Providentia",
      description: "Posizionamento SEO, SEO locale, GEO per modelli AI, Google Ads e social ads. Strategia di ricerca e pubblicità a pagamento per aziende in Spagna.",
    },
    hero: {
      label: "Servizio",
      tag: "Search & Ads",
      h1: "SEO, SEM\ne Paid Media.",
      intro: "Comparire quando qualcuno cerca ciò che offri non è fortuna. È strategia, tecnica e costanza. La visibilità che non si lavora ce l'ha la concorrenza.",
    },
    what: {
      heading: "In cosa consiste il servizio",
      body: "Lavoriamo sul posizionamento sui motori di ricerca da tre angolazioni complementari: SEO organico per una visibilità sostenuta, pubblicità a pagamento per risultati immediati e GEO (Generative Engine Optimisation) per far comparire il tuo brand anche nelle risposte di modelli AI come ChatGPT, Perplexity o Gemini.",
      examples: [
        { label: "SEO tecnico e di contenuti", description: "Audit tecnico, ottimizzazione on-page, strategia di contenuti e costruzione di autorità. Posizionamento organico sostenuto." },
        { label: "SEO locale e Google Maps", description: "Posizionamento nelle ricerche con intento locale. Fondamentale per aziende con presenza fisica o clientela geograficamente concentrata." },
        { label: "GEO — visibilità nei modelli AI", description: "Ottimizzazione di contenuti e dati strutturati perché il tuo brand venga citato da ChatGPT, Perplexity, Gemini e altri LLM. Il SEO del futuro, disponibile oggi." },
        { label: "Google Ads e Social Ads", description: "Campagne a pagamento su Google Search, Display, Shopping e social media (Meta, LinkedIn). Gestione orientata ai risultati, non alle impressioni." },
      ],
    },
    how: {
      heading: "Come lo facciamo",
      steps: [
        { numeral: "01", label: "Audit e analisi della concorrenza", description: "Analizziamo lo stato tecnico del tuo sito, le parole chiave con maggior potenziale e come si posiziona la concorrenza. Senza diagnosi non c'è strategia." },
        { numeral: "02", label: "Strategia e pianificazione", description: "Definiamo la roadmap: quali canali, quali keyword, quale budget paid e in quale ordine. Organico e a pagamento come sistema, non come silos separati." },
        { numeral: "03", label: "Implementazione tecnica e di contenuti", description: "Eseguiamo le migliorie tecniche, creiamo o ottimizziamo contenuti, configuriamo campagne a pagamento e avviamo i feed di dati strutturati per GEO." },
        { numeral: "04", label: "Ottimizzazione e reportistica mensile", description: "Aggiustiamo i bid, aggiorniamo i contenuti, analizziamo i ranking e consegniamo un report mensile chiaro su cosa funziona, cosa no e cosa faremo dopo." },
      ],
    },
    forwho: {
      heading: "Per chi è questo servizio",
      items: [
        { label: "Aziende che vogliono crescita organica", description: "Imprese che non vogliono dipendere esclusivamente dalla pubblicità a pagamento e hanno bisogno di costruire una visibilità sostenuta sui motori di ricerca." },
        { label: "Aziende con budget pubblicitario", description: "Aziende che già investono in Google Ads o social media ma non sono sicure che il loro investimento sia ben gestito o stia dando i rendimenti attesi." },
        { label: "Attività locali che vogliono più visibilità", description: "Aziende con clientela geografica che vogliono dominare le ricerche nella loro zona prima che lo faccia la concorrenza." },
        { label: "Brand che vogliono apparire nelle risposte AI", description: "Aziende lungimiranti che capiscono che il prossimo canale di ricerca non è Google — è ChatGPT, Perplexity e gli LLM che verranno dopo." },
      ],
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Quanto tempo ci vuole per vedere risultati con la SEO?",
          a: "La SEO organica è un investimento a medio termine. I primi movimenti nei ranking si vedono solitamente tra i tre e i sei mesi di lavoro costante. Ma ci sono eccezioni: miglioramenti tecnici urgenti o contenuti su keyword poco competitive possono dare risultati prima. Il paid media dà risultati dal primo giorno.",
        },
        {
          q: "Cos'è la GEO e perché è importante ora?",
          a: "GEO (Generative Engine Optimisation) è la pratica di ottimizzare i tuoi contenuti e dati strutturati perché i modelli AI generativi — ChatGPT, Perplexity, Gemini — ti citino nelle loro risposte quando qualcuno chiede del tuo settore. È l'equivalente della SEO per il nuovo paradigma di ricerca. I brand che ci lavorano oggi hanno un vantaggio su quelli che lo scopriranno tra due anni.",
        },
        {
          q: "Gestite campagne a pagamento con un budget minimo?",
          a: "Lavoriamo con budget di paid media a partire da 500€/mese di investimento pubblicitario. Al di sotto di quella cifra, il canale potrebbe non essere efficiente e lo diciamo prima di iniziare. La nostra tariffa di gestione è indipendente dal budget media.",
        },
        {
          q: "Potete fare SEO se il nostro sito è gestito da un'altra azienda?",
          a: "Sì. Lavoriamo con il team o l'agenzia che gestisce il tuo sito. Consegniamo le raccomandazioni tecniche e di contenuto nel formato necessario al tuo fornitore per implementarle. Coordiniamo noi se necessario.",
        },
      ],
    },
    cta: {
      heading: "Comparisci quando i tuoi clienti ti cercano?",
      body: "Facciamo un audit della tua visibilità attuale sui motori di ricerca e ti diciamo quali opportunità stai perdendo.",
      btn: "Iniziare una conversazione",
    },
    footer: { copyright: "© MMXXVI" },
  },
}

const RELATED = [
  { label: "Ficha de Google y Reseñas", href: "/servicios/google-business-resenas" },
  { label: "Diseño y Desarrollo Web", href: "/servicios/diseno-y-desarrollo-web" },
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

export default async function SeoSemPaidMedia({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale] ?? CONTENT.es
  return (
    <ServicePage
      locale={locale}
      slug={SLUG}
      serviceName="SEO, SEM y Paid Media"
      serviceNameEn="SEO, SEM and Paid Media"
      serviceType="SEO and Digital Advertising"
      content={c}
      related={RELATED}
    />
  )
}
