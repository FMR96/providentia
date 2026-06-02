import type { Metadata } from "next"
import { ServicePage, type ServiceContent } from "@/components/service-page"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const SLUG = "carteleria"

const CONTENT: Record<string, ServiceContent> = {
  es: {
    meta: {
      title: "Cartelería y Diseño Gráfico para Empresas — Providentia",
      description: "Diseño gráfico profesional para soportes físicos y digitales: carteles, flyers, señalética, banderolas y papelería corporativa. Agencia de diseño gráfico en España.",
    },
    hero: {
      label: "Servicio",
      tag: "Print & Digital",
      h1: "Cartelería\ny Diseño Gráfico.",
      intro: "El diseño que no comunica no decora. Cada pieza gráfica tiene una función: informar, persuadir, orientar o reforzar la marca. Si no la cumple, es ruido visual.",
    },
    what: {
      heading: "En qué consiste el servicio",
      body: "Diseñamos piezas gráficas para soportes físicos y digitales con criterio editorial y coherencia de marca. Desde un cartel de inauguración hasta un sistema completo de señalética, pasando por materiales de campaña, presentaciones corporativas y papelería de empresa.",
      examples: [
        { label: "Carteles, flyers y dípticos", description: "Piezas impresas para eventos, promociones, aperturas y campañas. Diseño listo para imprenta con perfiles de color y sangrados correctos." },
        { label: "Señalética y banderolas", description: "Sistemas de orientación visual para espacios físicos, eventos, ferias y stands. Coherentes con la identidad de marca." },
        { label: "Materiales de presentación", description: "Plantillas de PowerPoint o Keynote corporativas, decks de ventas y presentaciones para inversores o clientes." },
        { label: "Papelería corporativa", description: "Tarjetas de visita, sobres, carpetas, membretes y cualquier soporte de identidad corporativa impresa." },
      ],
    },
    how: {
      heading: "Cómo lo hacemos",
      steps: [
        { numeral: "01", label: "Brief y objetivos", description: "Entendemos el contexto: para qué es la pieza, quién es el receptor, dónde se va a ver y qué acción o mensaje debe provocar." },
        { numeral: "02", label: "Concepto visual", description: "Proponemos la dirección creativa antes de diseñar. Paleta, tipografía, composición y tono. Una vez alineados, avanzamos." },
        { numeral: "03", label: "Diseño y revisiones", description: "Desarrollamos la pieza y presentamos versiones para revisión. Incorporamos cambios hasta que el resultado es el correcto." },
        { numeral: "04", label: "Entrega lista para producción", description: "Entregamos archivos en los formatos adecuados para impresión o uso digital: PDF con marcas de corte, PNG, SVG o formatos específicos de la plataforma." },
      ],
    },
    forwho: {
      heading: "Para quién es este servicio",
      items: [
        { label: "Negocios con eventos o aperturas", description: "Empresas que necesitan comunicación visual para inauguraciones, ferias, presentaciones de producto o cualquier evento físico." },
        { label: "Restaurantes y comercios", description: "Hostelería y retail que necesitan cartelería, menús, señalética interior y materiales promocionales coherentes con su identidad." },
        { label: "Nuevas empresas", description: "Negocios que arrancan y necesitan construir sus primeras piezas de comunicación sin tener todavía un departamento de diseño." },
        { label: "Marcas con comunicación visual inconsistente", description: "Empresas que han acumulado piezas diseñadas por distintas personas y necesitan unificar su identidad visual en todos los soportes." },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Entregáis los archivos listos para enviar a imprenta?",
          a: "Sí. Entregamos archivos PDF con marcas de corte, sangrado y perfiles de color CMYK listos para cualquier imprenta estándar. Si tienes una imprenta con especificaciones concretas, nos las facilitas y las incorporamos.",
        },
        {
          q: "¿Podéis diseñar si no tenemos manual de marca?",
          a: "Sí. Si no tienes un manual de marca definido, trabajamos con lo que tienes — logo, colores, tipografías — y construimos una propuesta visual coherente. Si tampoco tienes eso, podemos orientarte hacia nuestro servicio de branding primero.",
        },
        {
          q: "¿Cuántas revisiones están incluidas?",
          a: "Incluimos dos rondas de revisión en cada proyecto. Si el resultado requiere cambios adicionales, los cotizamos por separado. En la práctica, con un brief bien definido y una primera propuesta sólida, rara vez se necesitan más de dos rondas.",
        },
        {
          q: "¿Podéis hacer también el diseño digital para redes sociales?",
          a: "Sí. El diseño digital para redes sociales — posts, stories, banners, anuncios — forma parte del mismo servicio. Adaptamos las piezas a los formatos de cada plataforma y entregamos en las proporciones correctas.",
        },
      ],
    },
    cta: {
      heading: "¿Necesitas piezas gráficas para tu próxima campaña o evento?",
      body: "Cuéntanos qué necesitas comunicar y en qué soportes. Definimos el alcance y te enviamos propuesta.",
      btn: "Iniciar conversación",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "Signage & Graphic Design for Business — Providentia",
      description: "Professional graphic design for physical and digital formats: posters, flyers, signage, banners and corporate stationery. Graphic design agency in Spain.",
    },
    hero: {
      label: "Service",
      tag: "Print & Digital",
      h1: "Signage\n& Graphic Design.",
      intro: "Design that doesn't communicate doesn't decorate. Every graphic piece has a function: to inform, persuade, guide or reinforce the brand. If it doesn't fulfil it, it's visual noise.",
    },
    what: {
      heading: "What the service involves",
      body: "We design graphic pieces for physical and digital formats with editorial criteria and brand coherence. From an opening poster to a complete signage system, through campaign materials, corporate presentations and company stationery.",
      examples: [
        { label: "Posters, flyers and leaflets", description: "Printed pieces for events, promotions, openings and campaigns. Print-ready design with correct colour profiles and bleed marks." },
        { label: "Signage and banners", description: "Visual orientation systems for physical spaces, events, trade shows and stands. Consistent with brand identity." },
        { label: "Presentation materials", description: "Corporate PowerPoint or Keynote templates, sales decks and presentations for investors or clients." },
        { label: "Corporate stationery", description: "Business cards, envelopes, folders, letterheads and any printed corporate identity support." },
      ],
    },
    how: {
      heading: "How we do it",
      steps: [
        { numeral: "01", label: "Brief and objectives", description: "We understand the context: what the piece is for, who the recipient is, where it will be seen and what action or message it must provoke." },
        { numeral: "02", label: "Visual concept", description: "We propose the creative direction before designing. Palette, typography, composition and tone. Once aligned, we move forward." },
        { numeral: "03", label: "Design and revisions", description: "We develop the piece and present versions for review. We incorporate changes until the result is right." },
        { numeral: "04", label: "Production-ready delivery", description: "We deliver files in the right formats for print or digital use: PDF with crop marks, PNG, SVG or platform-specific formats." },
      ],
    },
    forwho: {
      heading: "Who this service is for",
      items: [
        { label: "Businesses with events or openings", description: "Companies needing visual communication for openings, trade shows, product launches or any physical event." },
        { label: "Restaurants and retail", description: "Hospitality and retail needing signage, menus, interior wayfinding and promotional materials consistent with their identity." },
        { label: "New businesses", description: "Businesses starting up that need to build their first communication pieces without yet having a design department." },
        { label: "Brands with inconsistent visual communication", description: "Companies that have accumulated pieces designed by different people and need to unify their visual identity across all formats." },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Do you deliver files ready to send to print?",
          a: "Yes. We deliver PDF files with crop marks, bleed and CMYK colour profiles ready for any standard printer. If you have a printer with specific requirements, let us know and we'll incorporate them.",
        },
        {
          q: "Can you design if we don't have a brand manual?",
          a: "Yes. If you don't have a defined brand manual, we work with what you have — logo, colours, typefaces — and build a coherent visual proposal. If you don't have those either, we can guide you towards our branding service first.",
        },
        {
          q: "How many revisions are included?",
          a: "We include two rounds of revision on each project. If the result requires additional changes, we quote these separately. In practice, with a well-defined brief and a solid first proposal, more than two rounds are rarely needed.",
        },
        {
          q: "Can you also do digital design for social media?",
          a: "Yes. Digital design for social media — posts, stories, banners, ads — is part of the same service. We adapt pieces to each platform's formats and deliver in the correct proportions.",
        },
      ],
    },
    cta: {
      heading: "Need graphic pieces for your next campaign or event?",
      body: "Tell us what you need to communicate and on which formats. We define the scope and send you a proposal.",
      btn: "Start a conversation",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Cartellonistica e Grafica per Aziende — Providentia",
      description: "Design grafico professionale per supporti fisici e digitali: poster, flyer, segnaletica, striscioni e cancelleria aziendale. Agenzia di design grafico in Spagna.",
    },
    hero: {
      label: "Servizio",
      tag: "Print & Digital",
      h1: "Cartellonistica\ne Grafica.",
      intro: "Il design che non comunica non decora. Ogni pezzo grafico ha una funzione: informare, persuadere, orientare o rafforzare il brand. Se non la svolge, è rumore visivo.",
    },
    what: {
      heading: "In cosa consiste il servizio",
      body: "Progettiamo pezzi grafici per supporti fisici e digitali con criterio editoriale e coerenza di brand. Da un poster di inaugurazione a un sistema completo di segnaletica, passando per materiali di campagna, presentazioni aziendali e cancelleria d'impresa.",
      examples: [
        { label: "Poster, flyer e depliant", description: "Pezzi stampati per eventi, promozioni, aperture e campagne. Design pronto per stampa con profili colore e margini di taglio corretti." },
        { label: "Segnaletica e striscioni", description: "Sistemi di orientamento visivo per spazi fisici, eventi, fiere e stand. Coerenti con l'identità di brand." },
        { label: "Materiali di presentazione", description: "Template PowerPoint o Keynote aziendali, sales deck e presentazioni per investitori o clienti." },
        { label: "Cancelleria aziendale", description: "Biglietti da visita, buste, cartelle, carta intestata e qualsiasi supporto di identità aziendale stampata." },
      ],
    },
    how: {
      heading: "Come lo facciamo",
      steps: [
        { numeral: "01", label: "Brief e obiettivi", description: "Capiamo il contesto: a cosa serve il pezzo, chi è il destinatario, dove verrà visto e quale azione o messaggio deve provocare." },
        { numeral: "02", label: "Concept visivo", description: "Proponiamo la direzione creativa prima di progettare. Palette, tipografia, composizione e tono. Una volta allineati, andiamo avanti." },
        { numeral: "03", label: "Design e revisioni", description: "Sviluppiamo il pezzo e presentiamo versioni per revisione. Incorporiamo le modifiche fino a quando il risultato è quello giusto." },
        { numeral: "04", label: "Consegna pronta per la produzione", description: "Consegniamo file nei formati adeguati per stampa o uso digitale: PDF con segni di taglio, PNG, SVG o formati specifici della piattaforma." },
      ],
    },
    forwho: {
      heading: "Per chi è questo servizio",
      items: [
        { label: "Aziende con eventi o aperture", description: "Imprese che hanno bisogno di comunicazione visiva per inaugurazioni, fiere, lanci di prodotto o qualsiasi evento fisico." },
        { label: "Ristoranti e negozi", description: "Ristorazione e retail che hanno bisogno di segnaletica, menu, orientamento interno e materiali promozionali coerenti con la loro identità." },
        { label: "Nuove aziende", description: "Aziende che iniziano e hanno bisogno di costruire i loro primi pezzi di comunicazione senza avere ancora un reparto design." },
        { label: "Brand con comunicazione visiva inconsistente", description: "Aziende che hanno accumulato pezzi progettati da persone diverse e hanno bisogno di unificare la loro identità visiva su tutti i supporti." },
      ],
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Consegnate i file pronti da inviare in tipografia?",
          a: "Sì. Consegniamo file PDF con segni di taglio, abbondanza e profili colore CMYK pronti per qualsiasi tipografia standard. Se la tua tipografia ha specifiche particolari, comunicacele e le incorporeremo.",
        },
        {
          q: "Potete progettare se non abbiamo un manuale di brand?",
          a: "Sì. Se non hai un manuale di brand definito, lavoriamo con quello che hai — logo, colori, tipografie — e costruiamo una proposta visiva coerente. Se non hai nemmeno quello, possiamo orientarti verso il nostro servizio di branding prima.",
        },
        {
          q: "Quante revisioni sono incluse?",
          a: "Includiamo due round di revisione per ogni progetto. Se il risultato richiede modifiche aggiuntive, le quotizziamo separatamente. In pratica, con un brief ben definito e una prima proposta solida, raramente sono necessari più di due round.",
        },
        {
          q: "Potete fare anche il design digitale per i social media?",
          a: "Sì. Il design digitale per social media — post, stories, banner, annunci — fa parte dello stesso servizio. Adattiamo i pezzi ai formati di ogni piattaforma e consegniamo nelle proporzioni corrette.",
        },
      ],
    },
    cta: {
      heading: "Hai bisogno di pezzi grafici per la tua prossima campagna o evento?",
      body: "Raccontaci cosa hai bisogno di comunicare e su quali supporti. Definiamo l'entità e ti inviamo una proposta.",
      btn: "Iniziare una conversazione",
    },
    footer: { copyright: "© MMXXVI" },
  },
}

const RELATED = [
  { label: "Branding y Logo", href: "/servicios/branding-y-logo" },
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

export default async function Carteleria({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale] ?? CONTENT.es
  return (
    <ServicePage
      locale={locale}
      slug={SLUG}
      serviceName="Cartelería y Diseño Gráfico"
      serviceNameEn="Signage and Graphic Design"
      serviceType="Graphic Design"
      content={c}
      related={RELATED}
    />
  )
}
