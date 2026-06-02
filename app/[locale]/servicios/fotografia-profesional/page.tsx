import type { Metadata } from "next"
import { ServicePage, type ServiceContent } from "@/components/service-page"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const SLUG = "fotografia-profesional"

const CONTENT: Record<string, ServiceContent> = {
  es: {
    meta: {
      title: "Fotografía Profesional para Empresas — Providentia",
      description: "Sesiones de fotografía profesional para marca, producto, equipo e instalaciones. Equipo propio. Fotografía corporativa y comercial en España.",
    },
    hero: {
      label: "Servicio",
      tag: "Visual Brand",
      h1: "Fotografía\nProfesional.",
      intro: "Las imágenes de marca son el primer argumento de venta. Antes de que alguien lea una palabra, ya ha formado una opinión. Esa opinión la construye la fotografía.",
    },
    what: {
      heading: "En qué consiste el servicio",
      body: "Realizamos sesiones fotográficas profesionales para empresas con equipo propio: desde la dirección de arte hasta la entrega final de archivos retocados y optimizados. El resultado es un banco de imágenes de marca coherente, listo para web, redes sociales, catálogos y comunicación corporativa.",
      examples: [
        { label: "Fotografía de producto", description: "Imágenes de producto para e-commerce, catálogos y comunicación comercial. Fondo blanco, lifestyle o ambientadas según la identidad de marca." },
        { label: "Fotografía corporativa y de equipo", description: "Retratos profesionales del equipo, fotos de ambiente en oficina o espacio de trabajo. Imagen consistente para web y LinkedIn." },
        { label: "Fotografía de espacios e instalaciones", description: "Documentación fotográfica de locales, oficinas, tiendas, restaurantes, hoteles o industria. Arquitectura de interior y detalle." },
        { label: "Fotografía para redes sociales y web", description: "Contenido fotográfico pensado para formatos digitales: stories, feeds, banners, encabezados de web y materiales de campaña." },
      ],
    },
    how: {
      heading: "Cómo lo hacemos",
      steps: [
        { numeral: "01", label: "Brief y planificación", description: "Entendemos tu marca, tu audiencia y el uso que darás a las imágenes. Definimos el estilo visual, el listado de tomas y la logística de la sesión." },
        { numeral: "02", label: "Dirección de arte y localizaciones", description: "Seleccionamos localizaciones, preparamos la iluminación y coordinamos los elementos necesarios para cada toma: props, styling, modelos si aplica." },
        { numeral: "03", label: "Sesión fotográfica", description: "Ejecutamos la sesión con equipo propio y criterio editorial. No disparamos por volumen — cada toma tiene un propósito definido." },
        { numeral: "04", label: "Postproducción y entrega", description: "Retocamos y optimizamos las imágenes seleccionadas. Entregamos en los formatos y resoluciones adecuados para cada uso: web, impresión, redes sociales." },
      ],
    },
    forwho: {
      heading: "Para quién es este servicio",
      items: [
        { label: "Marcas que renuevan su identidad visual", description: "Empresas que han actualizado su branding o su web y necesitan imágenes coherentes con la nueva identidad." },
        { label: "E-commerce y tiendas online", description: "Negocios que venden productos online y necesitan imágenes de calidad que justifiquen el precio y reduzcan devoluciones." },
        { label: "Restauración y hostelería", description: "Restaurantes, hoteles, bares y cafeterías que necesitan fotografía de platos, espacios y ambiente para web y redes sociales." },
        { label: "Profesionales y despachos", description: "Abogados, médicos, consultores y otros profesionales que necesitan imagen corporativa para su web y perfil profesional." },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cuántas fotos entregáis por sesión?",
          a: "Depende del tipo y alcance de la sesión. No fijamos un número mínimo de tomas — lo que definimos es una lista de imágenes necesarias para cubrir todos los usos previstos. El número de fotos entregadas es el que resulta de esa lista, tras la selección y edición.",
        },
        {
          q: "¿Trabajáis con modelos o solo con el equipo del cliente?",
          a: "Ambas opciones. Podemos trabajar únicamente con el equipo o producto del cliente, o coordinar la selección y contratación de modelos si el proyecto lo requiere. Lo concretamos en la fase de brief.",
        },
        {
          q: "¿En qué formato y resolución entregáis las imágenes?",
          a: "Entregamos en los formatos que necesita cada uso: JPEG de alta resolución para impresión, versiones optimizadas para web y redes sociales. Si hay formatos específicos requeridos por una plataforma o imprenta, los contemplamos en la entrega.",
        },
        {
          q: "¿Podéis hacer la sesión en nuestras instalaciones?",
          a: "Sí. Trabajamos en las instalaciones del cliente, en estudio o en localizaciones exteriores según el tipo de sesión. Si es en vuestro espacio, hacemos una visita previa para planificar la iluminación y la logística.",
        },
      ],
    },
    cta: {
      heading: "¿Cuándo fue la última vez que renovaste las imágenes de tu marca?",
      body: "Cuéntanos qué necesitas mostrar. Planificamos la sesión que mejor encaje con tu identidad y tus usos previstos.",
      btn: "Iniciar conversación",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "Professional Photography for Business — Providentia",
      description: "Professional photography sessions for brand, product, team and premises. Own equipment. Corporate and commercial photography in Spain.",
    },
    hero: {
      label: "Service",
      tag: "Visual Brand",
      h1: "Professional\nPhotography.",
      intro: "Brand images are the first sales argument. Before anyone reads a word, they've already formed an opinion. That opinion is built by photography.",
    },
    what: {
      heading: "What the service involves",
      body: "We carry out professional photography sessions for businesses with our own equipment: from art direction to the final delivery of retouched, optimised files. The result is a coherent brand image library, ready for web, social media, catalogues and corporate communication.",
      examples: [
        { label: "Product photography", description: "Product images for e-commerce, catalogues and commercial communication. White background, lifestyle or styled according to brand identity." },
        { label: "Corporate and team photography", description: "Professional team portraits, ambient shots in office or workspace. Consistent image for web and LinkedIn." },
        { label: "Spaces and premises photography", description: "Photographic documentation of venues, offices, shops, restaurants, hotels or industry. Interior architecture and detail shots." },
        { label: "Photography for social media and web", description: "Photographic content designed for digital formats: stories, feeds, banners, web headers and campaign materials." },
      ],
    },
    how: {
      heading: "How we do it",
      steps: [
        { numeral: "01", label: "Brief and planning", description: "We understand your brand, your audience and how you'll use the images. We define the visual style, the shot list and the logistics of the session." },
        { numeral: "02", label: "Art direction and locations", description: "We select locations, prepare lighting and coordinate the necessary elements for each shot: props, styling, models where applicable." },
        { numeral: "03", label: "Photography session", description: "We execute the session with our own equipment and editorial criteria. We don't shoot for volume — each shot has a defined purpose." },
        { numeral: "04", label: "Post-production and delivery", description: "We retouch and optimise the selected images. We deliver in the right formats and resolutions for each use: web, print, social media." },
      ],
    },
    forwho: {
      heading: "Who this service is for",
      items: [
        { label: "Brands renewing their visual identity", description: "Companies that have updated their branding or website and need images consistent with the new identity." },
        { label: "E-commerce and online shops", description: "Businesses selling products online that need quality images to justify price and reduce returns." },
        { label: "Restaurants and hospitality", description: "Restaurants, hotels, bars and cafés that need photography of dishes, spaces and atmosphere for web and social media." },
        { label: "Professionals and firms", description: "Lawyers, doctors, consultants and other professionals needing corporate imagery for their website and professional profile." },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "How many photos do you deliver per session?",
          a: "It depends on the type and scope of the session. We don't set a minimum number of shots — what we define is a list of images needed to cover all intended uses. The number of photos delivered is whatever results from that list, after selection and editing.",
        },
        {
          q: "Do you work with models or only with the client's team?",
          a: "Both options. We can work solely with the client's team or product, or coordinate the selection and hiring of models if the project requires it. We confirm this in the brief phase.",
        },
        {
          q: "In what format and resolution do you deliver the images?",
          a: "We deliver in the formats each use requires: high-resolution JPEG for print, optimised versions for web and social media. If specific formats are required by a platform or printer, we include them in the delivery.",
        },
        {
          q: "Can you do the session at our premises?",
          a: "Yes. We work at the client's premises, in studio or at exterior locations depending on the session type. If it's at your space, we do a prior visit to plan the lighting and logistics.",
        },
      ],
    },
    cta: {
      heading: "When did you last refresh your brand images?",
      body: "Tell us what you need to show. We plan the session that best fits your identity and intended uses.",
      btn: "Start a conversation",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Fotografia Professionale per Aziende — Providentia",
      description: "Sessioni fotografiche professionali per brand, prodotto, team e spazi. Attrezzatura propria. Fotografia corporate e commerciale in Spagna.",
    },
    hero: {
      label: "Servizio",
      tag: "Visual Brand",
      h1: "Fotografia\nProfessionale.",
      intro: "Le immagini del brand sono il primo argomento di vendita. Prima che qualcuno legga una parola, si è già formato un'opinione. Quell'opinione la costruisce la fotografia.",
    },
    what: {
      heading: "In cosa consiste il servizio",
      body: "Realizziamo sessioni fotografiche professionali per aziende con attrezzatura propria: dalla direzione artistica alla consegna finale dei file ritoccati e ottimizzati. Il risultato è una libreria di immagini di brand coerente, pronta per web, social media, cataloghi e comunicazione aziendale.",
      examples: [
        { label: "Fotografia di prodotto", description: "Immagini di prodotto per e-commerce, cataloghi e comunicazione commerciale. Sfondo bianco, lifestyle o ambientate secondo l'identità del brand." },
        { label: "Fotografia corporate e del team", description: "Ritratti professionali del team, foto d'ambiente in ufficio o spazio di lavoro. Immagine coerente per web e LinkedIn." },
        { label: "Fotografia di spazi e locali", description: "Documentazione fotografica di locali, uffici, negozi, ristoranti, hotel o industria. Architettura d'interni e dettagli." },
        { label: "Fotografia per social media e web", description: "Contenuto fotografico pensato per formati digitali: stories, feed, banner, intestazioni web e materiali di campagna." },
      ],
    },
    how: {
      heading: "Come lo facciamo",
      steps: [
        { numeral: "01", label: "Brief e pianificazione", description: "Capiamo il tuo brand, il tuo pubblico e come utilizzerai le immagini. Definiamo lo stile visivo, la lista delle riprese e la logistica della sessione." },
        { numeral: "02", label: "Direzione artistica e location", description: "Selezioniamo le location, prepariamo l'illuminazione e coordiniamo gli elementi necessari per ogni ripresa: props, styling, modelli se applicabile." },
        { numeral: "03", label: "Sessione fotografica", description: "Eseguiamo la sessione con attrezzatura propria e criterio editoriale. Non scattiamo per volume — ogni ripresa ha uno scopo definito." },
        { numeral: "04", label: "Post-produzione e consegna", description: "Ritocchiamo e ottimizziamo le immagini selezionate. Consegniamo nei formati e nelle risoluzioni adeguati per ogni uso: web, stampa, social media." },
      ],
    },
    forwho: {
      heading: "Per chi è questo servizio",
      items: [
        { label: "Brand che rinnovano la loro identità visiva", description: "Aziende che hanno aggiornato il loro branding o sito web e hanno bisogno di immagini coerenti con la nuova identità." },
        { label: "E-commerce e negozi online", description: "Aziende che vendono prodotti online e hanno bisogno di immagini di qualità per giustificare il prezzo e ridurre i resi." },
        { label: "Ristorazione e ospitalità", description: "Ristoranti, hotel, bar e caffè che hanno bisogno di fotografia di piatti, spazi e atmosfera per web e social media." },
        { label: "Professionisti e studi", description: "Avvocati, medici, consulenti e altri professionisti che hanno bisogno di immagini corporate per il loro sito web e profilo professionale." },
      ],
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Quante foto consegnate per sessione?",
          a: "Dipende dal tipo e dall'entità della sessione. Non fissiamo un numero minimo di scatti — quello che definiamo è una lista di immagini necessarie per coprire tutti gli usi previsti. Il numero di foto consegnate è quello che risulta da quella lista, dopo selezione ed editing.",
        },
        {
          q: "Lavorate con modelli o solo con il team del cliente?",
          a: "Entrambe le opzioni. Possiamo lavorare esclusivamente con il team o il prodotto del cliente, oppure coordinare la selezione e l'ingaggio di modelli se il progetto lo richiede. Lo concretizziamo nella fase di brief.",
        },
        {
          q: "In quale formato e risoluzione consegnate le immagini?",
          a: "Consegniamo nei formati necessari per ogni uso: JPEG alta risoluzione per la stampa, versioni ottimizzate per web e social media. Se sono richiesti formati specifici da una piattaforma o tipografia, li includiamo nella consegna.",
        },
        {
          q: "Potete fare la sessione nei nostri locali?",
          a: "Sì. Lavoriamo nei locali del cliente, in studio o in location esterne a seconda del tipo di sessione. Se è nel vostro spazio, facciamo una visita preventiva per pianificare l'illuminazione e la logistica.",
        },
      ],
    },
    cta: {
      heading: "Quando hai rinnovato per l'ultima volta le immagini del tuo brand?",
      body: "Raccontaci cosa hai bisogno di mostrare. Pianifichiamo la sessione che meglio si adatta alla tua identità e agli usi previsti.",
      btn: "Iniziare una conversazione",
    },
    footer: { copyright: "© MMXXVI" },
  },
}

const RELATED = [
  { label: "Branding y Logo", href: "/servicios/branding-y-logo" },
  { label: "Cartelería y Diseño Gráfico", href: "/servicios/carteleria" },
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

export default async function FotografiaProfesional({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale] ?? CONTENT.es
  return (
    <ServicePage
      locale={locale}
      slug={SLUG}
      serviceName="Fotografía Profesional"
      serviceNameEn="Professional Photography"
      serviceType="Professional Photography"
      content={c}
      related={RELATED}
    />
  )
}
