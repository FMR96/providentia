import type { Metadata } from "next"
import { ServicePage, type ServiceContent } from "@/components/service-page"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const SLUG = "gestion-redes-sociales"

const CONTENT: Record<string, ServiceContent> = {
  es: {
    meta: {
      title: "Gestión de Redes Sociales para Empresas — Providentia",
      description: "Gestión integral de redes sociales: estrategia de contenidos, creación, publicación y análisis de resultados. Community management para empresas en España.",
    },
    hero: {
      label: "Servicio",
      tag: "Social Media",
      h1: "Gestión de\nRedes Sociales.",
      intro: "Publicar sin estrategia es ruido. La presencia digital coherente construye autoridad lentamente. La incoherente la destruye más rápido todavía.",
    },
    what: {
      heading: "En qué consiste el servicio",
      body: "Gestionamos las redes sociales de tu empresa de forma integral: desde la estrategia y el calendario editorial hasta la creación de contenidos, la publicación, la gestión de la comunidad y el análisis mensual de resultados. Tu marca tiene presencia digital consistente sin que tengas que preocuparte por ella.",
      examples: [
        { label: "Estrategia y calendario editorial", description: "Definición de líneas de contenido, tono de comunicación, frecuencia de publicación y calendario mensual alineado con los objetivos de negocio." },
        { label: "Creación de contenidos", description: "Redacción de textos, diseño de piezas gráficas y adaptación a los formatos de cada plataforma: posts, stories, reels, carruseles." },
        { label: "Gestión de comunidad", description: "Respuesta a comentarios y mensajes directos. Gestión de interacciones de forma coherente con el tono y los valores de la marca." },
        { label: "Reporting y análisis mensual", description: "Informe mensual con evolución de métricas clave: alcance, engagement, crecimiento de seguidores y análisis de qué contenidos funcionan mejor." },
      ],
    },
    how: {
      heading: "Cómo lo hacemos",
      steps: [
        { numeral: "01", label: "Auditoría de la presencia actual", description: "Analizamos el estado de tus redes: qué publicas, con qué frecuencia, qué resultados obtienes y cómo se compara con tu competencia directa." },
        { numeral: "02", label: "Estrategia y calendario", description: "Definimos las líneas de contenido, el tono, las plataformas prioritarias y el calendario editorial para los próximos meses. Aprobación previa a la publicación." },
        { numeral: "03", label: "Creación y publicación", description: "Producimos los contenidos, los sometemos a revisión si es necesario y los publicamos en los días y horas con mejor rendimiento para tu audiencia." },
        { numeral: "04", label: "Análisis y optimización", description: "Revisamos los resultados cada mes, identificamos qué funciona mejor y ajustamos la estrategia y el calendario para el mes siguiente." },
      ],
    },
    forwho: {
      heading: "Para quién es este servicio",
      items: [
        { label: "Empresas sin tiempo para gestionar RRSS", description: "Negocios que saben que deberían tener presencia en redes sociales pero no tienen capacidad interna para hacerlo de forma consistente." },
        { label: "Negocios con presencia inconsistente", description: "Marcas que publican de forma esporádica — cuando alguien se acuerda — y cuyo perfil no comunica nada claro sobre lo que hacen." },
        { label: "Marcas en crecimiento", description: "Empresas en fase de expansión que necesitan construir comunidad y autoridad digital de forma acelerada." },
        { label: "Negocios de hostelería y retail", description: "Restaurantes, hoteles, tiendas y comercios donde las redes sociales son un canal directo de captación y fidelización de clientes." },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿En qué redes sociales trabajáis?",
          a: "Trabajamos en las plataformas que tienen sentido para cada negocio: Instagram, LinkedIn, Facebook, TikTok, X (Twitter) y Google Business (posts). No recomendamos estar en todas — recomendamos estar bien en las que importan para tu audiencia. Lo definimos en la auditoría inicial.",
        },
        {
          q: "¿Quién aprueba los contenidos antes de publicarlos?",
          a: "Tú. Enviamos el calendario de contenidos y las piezas con antelación para que las revises y apruebes. Si hay cambios, los hacemos antes de publicar. Puedes tener control total o dejarnos autonomía — lo adaptamos a tu preferencia.",
        },
        {
          q: "¿Hacéis también publicidad de pago en redes sociales?",
          a: "La gestión orgánica y la publicidad de pago son servicios distintos, aunque complementarios. Si necesitas campañas de paid social (Meta Ads, LinkedIn Ads, TikTok Ads), lo incluimos como servicio adicional o lo coordinamos con el equipo de paid media.",
        },
        {
          q: "¿Cuánto tiempo necesita una estrategia de redes sociales para dar resultados?",
          a: "Las redes sociales son un canal de construcción de marca, no de resultado inmediato. El crecimiento orgánico real requiere constancia durante tres a seis meses. Lo que sí puede verse antes es la mejora en coherencia, frecuencia y calidad del contenido publicado.",
        },
      ],
    },
    cta: {
      heading: "¿Tus redes sociales reflejan el nivel de lo que haces?",
      body: "Auditamos tu presencia actual y te mostramos qué cambiaría con una gestión profesional consistente.",
      btn: "Iniciar conversación",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "Social Media Management for Business — Providentia",
      description: "Comprehensive social media management: content strategy, creation, publishing and results analysis. Community management for businesses in Spain.",
    },
    hero: {
      label: "Service",
      tag: "Social Media",
      h1: "Social Media\nManagement.",
      intro: "Publishing without strategy is noise. Coherent digital presence builds authority slowly. Incoherence destroys it even faster.",
    },
    what: {
      heading: "What the service involves",
      body: "We manage your company's social media comprehensively: from strategy and editorial calendar to content creation, publishing, community management and monthly results analysis. Your brand has consistent digital presence without you having to worry about it.",
      examples: [
        { label: "Strategy and editorial calendar", description: "Definition of content lines, communication tone, publishing frequency and monthly calendar aligned with business objectives." },
        { label: "Content creation", description: "Copywriting, graphic design and adaptation to each platform's formats: posts, stories, reels, carousels." },
        { label: "Community management", description: "Response to comments and direct messages. Managing interactions consistently with the brand's tone and values." },
        { label: "Monthly reporting and analysis", description: "Monthly report tracking key metrics: reach, engagement, follower growth and analysis of which content performs best." },
      ],
    },
    how: {
      heading: "How we do it",
      steps: [
        { numeral: "01", label: "Current presence audit", description: "We analyse the state of your social media: what you publish, how often, what results you get and how it compares to your direct competition." },
        { numeral: "02", label: "Strategy and calendar", description: "We define content lines, tone, priority platforms and the editorial calendar for the coming months. Approval before publishing." },
        { numeral: "03", label: "Creation and publishing", description: "We produce the content, submit it for review if needed and publish at the days and times with best performance for your audience." },
        { numeral: "04", label: "Analysis and optimisation", description: "We review results each month, identify what works best and adjust strategy and calendar for the following month." },
      ],
    },
    forwho: {
      heading: "Who this service is for",
      items: [
        { label: "Businesses without time for social media", description: "Companies that know they should have a social media presence but don't have internal capacity to do so consistently." },
        { label: "Businesses with inconsistent presence", description: "Brands that publish sporadically — when someone remembers — and whose profile communicates nothing clear about what they do." },
        { label: "Growing brands", description: "Companies in expansion phase that need to build community and digital authority in an accelerated way." },
        { label: "Hospitality and retail businesses", description: "Restaurants, hotels, shops and retailers where social media is a direct channel for customer acquisition and loyalty." },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Which social media platforms do you work with?",
          a: "We work on the platforms that make sense for each business: Instagram, LinkedIn, Facebook, TikTok, X (Twitter) and Google Business (posts). We don't recommend being everywhere — we recommend being done well on the ones that matter for your audience. We define this in the initial audit.",
        },
        {
          q: "Who approves content before it's published?",
          a: "You do. We send the content calendar and pieces in advance for your review and approval. If there are changes, we make them before publishing. You can have full control or give us autonomy — we adapt to your preference.",
        },
        {
          q: "Do you also do paid social media advertising?",
          a: "Organic management and paid advertising are separate but complementary services. If you need paid social campaigns (Meta Ads, LinkedIn Ads, TikTok Ads), we include this as an additional service or coordinate with the paid media team.",
        },
        {
          q: "How long does a social media strategy need to show results?",
          a: "Social media is a brand-building channel, not an immediate results channel. Real organic growth requires consistency over three to six months. What can be seen sooner is the improvement in coherence, frequency and quality of published content.",
        },
      ],
    },
    cta: {
      heading: "Do your social media profiles reflect the level of what you do?",
      body: "We audit your current presence and show you what would change with consistent professional management.",
      btn: "Start a conversation",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Gestione Social Media per Aziende — Providentia",
      description: "Gestione integrale dei social media: strategia di contenuti, creazione, pubblicazione e analisi dei risultati. Community management per aziende in Spagna.",
    },
    hero: {
      label: "Servizio",
      tag: "Social Media",
      h1: "Gestione\nSocial Media.",
      intro: "Pubblicare senza strategia è rumore. La presenza digitale coerente costruisce autorità lentamente. L'incoerenza la distrugge ancora più in fretta.",
    },
    what: {
      heading: "In cosa consiste il servizio",
      body: "Gestiamo i social media della tua azienda in modo integrale: dalla strategia e il calendario editoriale alla creazione di contenuti, la pubblicazione, la gestione della community e l'analisi mensile dei risultati. Il tuo brand ha una presenza digitale consistente senza che tu debba preoccuparsene.",
      examples: [
        { label: "Strategia e calendario editoriale", description: "Definizione delle linee di contenuto, tono di comunicazione, frequenza di pubblicazione e calendario mensile allineato agli obiettivi di business." },
        { label: "Creazione di contenuti", description: "Copywriting, design di pezzi grafici e adattamento ai formati di ogni piattaforma: post, stories, reel, caroselli." },
        { label: "Gestione della community", description: "Risposta a commenti e messaggi diretti. Gestione delle interazioni in modo coerente con il tono e i valori del brand." },
        { label: "Reportistica e analisi mensile", description: "Report mensile con evoluzione delle metriche chiave: copertura, engagement, crescita dei follower e analisi di quali contenuti funzionano meglio." },
      ],
    },
    how: {
      heading: "Come lo facciamo",
      steps: [
        { numeral: "01", label: "Audit della presenza attuale", description: "Analizziamo lo stato dei tuoi social: cosa pubblichi, con quale frequenza, quali risultati ottieni e come si confronta con la tua concorrenza diretta." },
        { numeral: "02", label: "Strategia e calendario", description: "Definiamo le linee di contenuto, il tono, le piattaforme prioritarie e il calendario editoriale per i prossimi mesi. Approvazione prima della pubblicazione." },
        { numeral: "03", label: "Creazione e pubblicazione", description: "Produciamo i contenuti, li sottoponiamo a revisione se necessario e li pubblichiamo nei giorni e negli orari con migliori performance per il tuo pubblico." },
        { numeral: "04", label: "Analisi e ottimizzazione", description: "Riesaminiamo i risultati ogni mese, identifichiamo cosa funziona meglio e aggiustiamo la strategia e il calendario per il mese successivo." },
      ],
    },
    forwho: {
      heading: "Per chi è questo servizio",
      items: [
        { label: "Aziende senza tempo per i social media", description: "Aziende che sanno di dover avere una presenza sui social media ma non hanno capacità interna per farlo in modo consistente." },
        { label: "Aziende con presenza inconsistente", description: "Brand che pubblicano in modo sporadico — quando qualcuno se ne ricorda — e il cui profilo non comunica nulla di chiaro su ciò che fanno." },
        { label: "Brand in crescita", description: "Aziende in fase di espansione che hanno bisogno di costruire community e autorità digitale in modo accelerato." },
        { label: "Ristorazione e retail", description: "Ristoranti, hotel, negozi e commercianti dove i social media sono un canale diretto di acquisizione e fidelizzazione dei clienti." },
      ],
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Su quali piattaforme social lavorate?",
          a: "Lavoriamo sulle piattaforme che hanno senso per ogni azienda: Instagram, LinkedIn, Facebook, TikTok, X (Twitter) e Google Business (post). Non raccomandiamo di essere ovunque — raccomandiamo di essere fatti bene dove conta per il tuo pubblico. Lo definiamo nell'audit iniziale.",
        },
        {
          q: "Chi approva i contenuti prima che vengano pubblicati?",
          a: "Tu. Ti inviamo il calendario dei contenuti e i pezzi in anticipo per la revisione e l'approvazione. Se ci sono modifiche, le facciamo prima di pubblicare. Puoi avere pieno controllo o darci autonomia — ci adattiamo alla tua preferenza.",
        },
        {
          q: "Fate anche pubblicità a pagamento sui social media?",
          a: "La gestione organica e la pubblicità a pagamento sono servizi distinti ma complementari. Se hai bisogno di campagne paid social (Meta Ads, LinkedIn Ads, TikTok Ads), lo includiamo come servizio aggiuntivo o lo coordiniamo con il team di paid media.",
        },
        {
          q: "Quanto tempo ci vuole per una strategia social per dare risultati?",
          a: "I social media sono un canale di costruzione del brand, non di risultati immediati. La vera crescita organica richiede costanza per tre-sei mesi. Ciò che può vedersi prima è il miglioramento in coerenza, frequenza e qualità dei contenuti pubblicati.",
        },
      ],
    },
    cta: {
      heading: "I tuoi profili social riflettono il livello di ciò che fai?",
      body: "Facciamo un audit della tua presenza attuale e ti mostriamo cosa cambierebbe con una gestione professionale e costante.",
      btn: "Iniziare una conversazione",
    },
    footer: { copyright: "© MMXXVI" },
  },
}

const RELATED = [
  { label: "SEO, SEM y Paid Media", href: "/servicios/seo-sem-paid-media" },
  { label: "Fotografía Profesional", href: "/servicios/fotografia-profesional" },
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

export default async function GestionRedesSociales({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale] ?? CONTENT.es
  return (
    <ServicePage
      locale={locale}
      slug={SLUG}
      serviceName="Gestión de Redes Sociales"
      serviceNameEn="Social Media Management"
      serviceType="Social Media Management"
      content={c}
      related={RELATED}
    />
  )
}
