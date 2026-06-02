import type { Metadata } from "next"
import { ServicePage, type ServiceContent } from "@/components/service-page"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const SLUG = "diseno-y-desarrollo-web"

const CONTENT: Record<string, ServiceContent> = {
  es: {
    meta: {
      title: "Diseño y Desarrollo Web para Empresas — Providentia",
      description: "Diseño y desarrollo de páginas web profesionales: landings, sitios corporativos y tiendas online. Web rápida, accesible y optimizada para SEO. Agencia web en España.",
    },
    hero: {
      label: "Servicio",
      tag: "Digital Presence",
      h1: "Diseño y\nDesarrollo Web.",
      intro: "Un sitio web es la sede más visitada de cualquier negocio. Si no convierte, no sirve. Si tarda en cargar, tampoco. La web que construimos trabaja por ti.",
    },
    what: {
      heading: "En qué consiste el servicio",
      body: "Diseñamos y desarrollamos sitios web profesionales desde el concepto hasta la puesta en marcha: landings de conversión, sitios corporativos, tiendas online y webs con gestión de contenidos. Cada proyecto es rápido, accesible, optimizado para buscadores y diseñado para convertir.",
      examples: [
        { label: "Landings de conversión", description: "Páginas de destino diseñadas para un objetivo concreto: captación de leads, registro, venta directa o presentación de servicio." },
        { label: "Sitios corporativos", description: "Web de empresa completa: quiénes somos, servicios, blog y contacto. Diseño a medida, coherente con la identidad de marca." },
        { label: "Tiendas online", description: "E-commerce funcional con gestión de productos, carrito, pasarela de pago y panel de administración." },
        { label: "Webs con CMS", description: "Sitios con gestor de contenidos para que tu equipo pueda actualizar texto, imágenes y entradas de blog sin conocimientos técnicos." },
      ],
    },
    how: {
      heading: "Cómo lo hacemos",
      steps: [
        { numeral: "01", label: "Descubrimiento y estrategia", description: "Entendemos tus objetivos de negocio, tu audiencia y la competencia. Definimos la arquitectura de información y el modelo de conversión antes de diseñar." },
        { numeral: "02", label: "Diseño y prototipado", description: "Diseñamos la interfaz — wireframes, composición, tipografía, color — y validamos la experiencia de usuario antes de escribir código." },
        { numeral: "03", label: "Desarrollo y pruebas", description: "Construimos el sitio con código limpio y optimizado. Probamos en distintos dispositivos, navegadores y velocidades de conexión." },
        { numeral: "04", label: "Lanzamiento y mantenimiento", description: "Ponemos el sitio en marcha, configuramos dominio, hosting, analytics y SEO técnico. Ofrecemos soporte y mantenimiento continuado." },
      ],
    },
    forwho: {
      heading: "Para quién es este servicio",
      items: [
        { label: "PYMEs sin presencia digital", description: "Negocios que aún no tienen web o tienen una presencia mínima que no representa bien lo que ofrecen." },
        { label: "Startups y nuevos negocios", description: "Empresas que arrancan y necesitan una web profesional que genere confianza desde el primer día." },
        { label: "Empresas que necesitan renovar su web", description: "Negocios cuya web actual está desactualizada, es lenta o no convierte, y necesitan una solución moderna." },
        { label: "Profesionales y autónomos", description: "Consultores, freelancers, médicos, abogados y otros profesionales que necesitan una presencia digital que refleje su nivel de trabajo." },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cuánto tarda en estar lista una web?",
          a: "Una landing de conversión puede estar lista en dos a tres semanas. Un sitio corporativo completo suele requerir cuatro a ocho semanas. Una tienda online, según la complejidad del catálogo, puede necesitar de seis a doce semanas. Damos un plazo concreto en la propuesta.",
        },
        {
          q: "¿Podré actualizar el contenido yo mismo después del lanzamiento?",
          a: "Sí, si el proyecto lo requiere. Construimos webs con gestor de contenidos cuando el cliente necesita autonomía editorial. Si la web no va a cambiar frecuentemente, puede ser más eficiente sin CMS y con nosotros haciendo los cambios puntuales.",
        },
        {
          q: "¿El diseño es a medida o usan plantillas?",
          a: "Diseñamos a medida partiendo de la identidad de marca del cliente. No usamos plantillas de terceros. El resultado es una web que no se parece a ninguna otra.",
        },
        {
          q: "¿Incluye SEO?",
          a: "El desarrollo incluye SEO técnico: velocidad de carga, estructura de encabezados, metadatos, datos estructurados, sitemap y robots.txt. El SEO de contenidos y la estrategia de posicionamiento es un servicio diferente que podemos complementar.",
        },
      ],
    },
    cta: {
      heading: "¿Tu web actual representa bien lo que hace tu empresa?",
      body: "Cuéntanos dónde estás y dónde quieres llegar. Definimos el proyecto y te enviamos una propuesta sin compromiso.",
      btn: "Iniciar conversación",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "Web Design & Development for Business — Providentia",
      description: "Professional web design and development: landing pages, corporate sites and online shops. Fast, accessible and SEO-optimised. Web agency in Spain.",
    },
    hero: {
      label: "Service",
      tag: "Digital Presence",
      h1: "Web Design\n& Development.",
      intro: "A website is the most visited location of any business. If it doesn't convert, it doesn't work. If it loads slowly, neither does it. The website we build works for you.",
    },
    what: {
      heading: "What the service involves",
      body: "We design and develop professional websites from concept to launch: conversion landing pages, corporate sites, online shops and content-managed websites. Every project is fast, accessible, search-engine optimised and designed to convert.",
      examples: [
        { label: "Conversion landing pages", description: "Destination pages designed for a specific objective: lead capture, registration, direct sale or service presentation." },
        { label: "Corporate sites", description: "Full company website: who we are, services, blog and contact. Custom design, consistent with brand identity." },
        { label: "Online shops", description: "Functional e-commerce with product management, cart, payment gateway and admin panel." },
        { label: "CMS websites", description: "Sites with a content management system so your team can update text, images and blog posts without technical knowledge." },
      ],
    },
    how: {
      heading: "How we do it",
      steps: [
        { numeral: "01", label: "Discovery and strategy", description: "We understand your business objectives, your audience and the competition. We define the information architecture and conversion model before designing." },
        { numeral: "02", label: "Design and prototyping", description: "We design the interface — wireframes, composition, typography, colour — and validate the user experience before writing code." },
        { numeral: "03", label: "Development and testing", description: "We build the site with clean, optimised code. We test across different devices, browsers and connection speeds." },
        { numeral: "04", label: "Launch and maintenance", description: "We launch the site, configure domain, hosting, analytics and technical SEO. We offer ongoing support and maintenance." },
      ],
    },
    forwho: {
      heading: "Who this service is for",
      items: [
        { label: "SMEs without digital presence", description: "Businesses that don't yet have a website or have a minimal presence that doesn't represent what they offer." },
        { label: "Startups and new businesses", description: "Companies starting up that need a professional website that builds trust from day one." },
        { label: "Companies needing to renew their website", description: "Businesses whose current website is outdated, slow or doesn't convert, and need a modern solution." },
        { label: "Professionals and freelancers", description: "Consultants, freelancers, doctors, lawyers and other professionals needing a digital presence that reflects their level of work." },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "How long does it take to have a website ready?",
          a: "A conversion landing page can be ready in two to three weeks. A complete corporate site typically takes four to eight weeks. An online shop, depending on catalogue complexity, may need six to twelve weeks. We give a specific timeline in the proposal.",
        },
        {
          q: "Can I update the content myself after launch?",
          a: "Yes, if the project requires it. We build websites with a content management system when the client needs editorial autonomy. If the site won't change frequently, it may be more efficient without a CMS, with us handling occasional changes.",
        },
        {
          q: "Is the design custom or do you use templates?",
          a: "We design custom, starting from the client's brand identity. We don't use third-party templates. The result is a website that looks like no other.",
        },
        {
          q: "Does it include SEO?",
          a: "Development includes technical SEO: load speed, heading structure, metadata, structured data, sitemap and robots.txt. Content SEO and positioning strategy is a separate service we can complement.",
        },
      ],
    },
    cta: {
      heading: "Does your current website properly represent what your company does?",
      body: "Tell us where you are and where you want to go. We define the project and send you a proposal at no commitment.",
      btn: "Start a conversation",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Design e Sviluppo Web per Aziende — Providentia",
      description: "Design e sviluppo di siti web professionali: landing page, siti corporate e negozi online. Siti veloci, accessibili e ottimizzati per SEO. Agenzia web in Spagna.",
    },
    hero: {
      label: "Servizio",
      tag: "Digital Presence",
      h1: "Design e\nSviluppo Web.",
      intro: "Un sito web è la sede più visitata di qualsiasi azienda. Se non converte, non serve. Se impiega troppo a caricare, nemmeno. Il sito che costruiamo lavora per te.",
    },
    what: {
      heading: "In cosa consiste il servizio",
      body: "Progettiamo e sviluppiamo siti web professionali dal concept al lancio: landing page di conversione, siti corporate, negozi online e siti con gestione dei contenuti. Ogni progetto è veloce, accessibile, ottimizzato per i motori di ricerca e progettato per convertire.",
      examples: [
        { label: "Landing page di conversione", description: "Pagine di destinazione progettate per un obiettivo specifico: acquisizione lead, registrazione, vendita diretta o presentazione del servizio." },
        { label: "Siti corporate", description: "Sito aziendale completo: chi siamo, servizi, blog e contatti. Design personalizzato, coerente con l'identità di brand." },
        { label: "Negozi online", description: "E-commerce funzionale con gestione prodotti, carrello, gateway di pagamento e pannello di amministrazione." },
        { label: "Siti con CMS", description: "Siti con sistema di gestione dei contenuti per permettere al tuo team di aggiornare testi, immagini e articoli del blog senza competenze tecniche." },
      ],
    },
    how: {
      heading: "Come lo facciamo",
      steps: [
        { numeral: "01", label: "Discovery e strategia", description: "Capiamo i tuoi obiettivi di business, il tuo pubblico e la concorrenza. Definiamo l'architettura dell'informazione e il modello di conversione prima di progettare." },
        { numeral: "02", label: "Design e prototipazione", description: "Progettiamo l'interfaccia — wireframe, composizione, tipografia, colore — e validiamo l'esperienza utente prima di scrivere codice." },
        { numeral: "03", label: "Sviluppo e test", description: "Costruiamo il sito con codice pulito e ottimizzato. Testiamo su diversi dispositivi, browser e velocità di connessione." },
        { numeral: "04", label: "Lancio e manutenzione", description: "Mettiamo online il sito, configuriamo dominio, hosting, analytics e SEO tecnico. Offriamo supporto e manutenzione continuativa." },
      ],
    },
    forwho: {
      heading: "Per chi è questo servizio",
      items: [
        { label: "PMI senza presenza digitale", description: "Aziende che non hanno ancora un sito web o hanno una presenza minima che non rappresenta bene ciò che offrono." },
        { label: "Startup e nuove aziende", description: "Imprese che iniziano e hanno bisogno di un sito web professionale che generi fiducia fin dal primo giorno." },
        { label: "Aziende che devono rinnovare il loro sito", description: "Aziende il cui sito attuale è obsoleto, lento o non converte, e hanno bisogno di una soluzione moderna." },
        { label: "Professionisti e freelancer", description: "Consulenti, freelancer, medici, avvocati e altri professionisti che hanno bisogno di una presenza digitale che rifletta il loro livello di lavoro." },
      ],
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Quanto tempo ci vuole per avere un sito pronto?",
          a: "Una landing page di conversione può essere pronta in due-tre settimane. Un sito corporate completo richiede tipicamente quattro-otto settimane. Un negozio online, a seconda della complessità del catalogo, può richiedere da sei a dodici settimane. Diamo una scadenza precisa nella proposta.",
        },
        {
          q: "Potrò aggiornare i contenuti da solo dopo il lancio?",
          a: "Sì, se il progetto lo richiede. Costruiamo siti con sistema di gestione dei contenuti quando il cliente ha bisogno di autonomia editoriale. Se il sito non cambierà frequentemente, potrebbe essere più efficiente senza CMS, con noi che gestiamo le modifiche occasionali.",
        },
        {
          q: "Il design è personalizzato o usate template?",
          a: "Progettiamo su misura partendo dall'identità di brand del cliente. Non usiamo template di terze parti. Il risultato è un sito web che non assomiglia a nessun altro.",
        },
        {
          q: "Include la SEO?",
          a: "Lo sviluppo include SEO tecnico: velocità di caricamento, struttura dei titoli, metadati, dati strutturati, sitemap e robots.txt. La SEO dei contenuti e la strategia di posizionamento è un servizio separato che possiamo affiancare.",
        },
      ],
    },
    cta: {
      heading: "Il tuo sito attuale rappresenta bene quello che fa la tua azienda?",
      body: "Raccontaci dove sei e dove vuoi arrivare. Definiamo il progetto e ti inviamo una proposta senza impegno.",
      btn: "Iniziare una conversazione",
    },
    footer: { copyright: "© MMXXVI" },
  },
}

const RELATED = [
  { label: "SEO, SEM y Paid Media", href: "/servicios/seo-sem-paid-media" },
  { label: "Branding y Logo", href: "/servicios/branding-y-logo" },
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

export default async function DisenoYDesarrolloWeb({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale] ?? CONTENT.es
  return (
    <ServicePage
      locale={locale}
      slug={SLUG}
      serviceName="Diseño y Desarrollo Web"
      serviceNameEn="Web Design and Development"
      serviceType="Web Design and Development"
      content={c}
      related={RELATED}
    />
  )
}
