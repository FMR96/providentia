import type { Metadata } from "next"
import { ServicePage, type ServiceContent } from "@/components/service-page"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const SLUG = "branding-y-logo"

const CONTENT: Record<string, ServiceContent> = {
  es: {
    meta: {
      title: "Branding y Diseño de Logo para Empresas — Providentia",
      description: "Diseño de identidad corporativa: logotipo, sistema de color, tipografía y manual de marca. Branding estratégico para empresas y profesionales en España.",
    },
    hero: {
      label: "Servicio",
      tag: "Brand Identity",
      h1: "Branding\ny Logo.",
      intro: "Una marca sin identidad visual clara no existe en la mente del cliente. El logo es la firma. El branding es el carácter. Uno sin el otro no funciona.",
    },
    what: {
      heading: "En qué consiste el servicio",
      body: "Diseñamos identidades de marca completas: desde el logotipo hasta el sistema visual que lo sustenta. El resultado no es solo un logo bonito — es una identidad que funciona en todos los soportes, que comunica quién eres antes de que digas una palabra y que tu equipo puede aplicar de forma autónoma.",
      examples: [
        { label: "Diseño de logotipo", description: "Logotipo primario y sus variantes: positivo, negativo, monocromático, versión reducida para favicon. Archivos vectoriales en todos los formatos necesarios." },
        { label: "Sistema de color y tipografía", description: "Paleta de colores corporativa con especificaciones para pantalla e impresión (HEX, RGB, CMYK, Pantone). Selección tipográfica con jerarquía definida." },
        { label: "Manual de identidad de marca", description: "Guía de uso que establece cómo y cómo no aplicar los elementos de marca. Imprescindible para mantener coherencia cuando trabajan varias personas o proveedores." },
        { label: "Adaptaciones en soportes clave", description: "Aplicación de la identidad en los soportes más importantes: tarjeta de visita, membrete, firma de email, perfil de redes sociales, portada de LinkedIn." },
      ],
    },
    how: {
      heading: "Cómo lo hacemos",
      steps: [
        { numeral: "01", label: "Descubrimiento y estrategia de marca", description: "Entendemos tu negocio, tu audiencia, tu competencia y los valores que quieres comunicar. El diseño que no parte de estrategia es decoración." },
        { numeral: "02", label: "Concepto y exploración visual", description: "Presentamos dos o tres direcciones conceptuales distintas — no variaciones del mismo concepto — para elegir la que mejor encaja con la marca." },
        { numeral: "03", label: "Diseño y refinamiento", description: "Desarrollamos la dirección elegida hasta el nivel de detalle necesario: formas, proporciones, pesos, espaciados. El 80% del trabajo ocurre aquí." },
        { numeral: "04", label: "Manual de marca y entrega de archivos", description: "Documentamos todas las especificaciones en el manual de identidad y entregamos el paquete completo de archivos: vectoriales, bitmaps, documentación." },
      ],
    },
    forwho: {
      heading: "Para quién es este servicio",
      items: [
        { label: "Nuevos negocios", description: "Empresas que arrancan y necesitan construir su identidad desde cero con coherencia y criterio desde el primer día." },
        { label: "Empresas que se reinventan", description: "Negocios que han evolucionado pero cuya identidad visual no refleja ya quiénes son — o quiénes quieren ser." },
        { label: "Negocios sin identidad visual profesional", description: "Empresas que llevan años operando con un logo hecho de forma casera o sin sistema visual coherente, y lo notan en cómo se perciben." },
        { label: "Marcas que han crecido sin coherencia visual", description: "Organizaciones que han acumulado versiones distintas del logo, colores distintos y tipografías distintas a lo largo del tiempo." },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cuántas propuestas de logo recibo?",
          a: "Presentamos dos o tres direcciones conceptuales distintas — no variaciones del mismo logo. Cada dirección tiene su propia lógica y argumentación. No hacemos veinte opciones: hacemos las que tienen sentido, bien desarrolladas.",
        },
        {
          q: "¿Entregáis los archivos en todos los formatos?",
          a: "Sí. El paquete incluye archivos vectoriales (AI, EPS, SVG), bitmaps en alta resolución (PNG con fondo transparente, JPEG) y versiones en los colores del sistema (positivo, negativo, monocromático). Todo lo necesario para uso digital e impresión.",
        },
        {
          q: "¿El manual de marca incluye también las redes sociales?",
          a: "Sí. El manual incluye especificaciones para los soportes digitales más habituales: tamaños de perfil e imagen de portada para LinkedIn, Instagram, Facebook y Twitter/X. Si necesitas guías para otros soportes específicos, lo concretamos en el brief.",
        },
        {
          q: "¿Podéis hacer solo el logo sin el branding completo?",
          a: "Podemos hacerlo, pero no lo recomendamos. Un logo sin sistema de color ni tipografía definida deja el 80% del trabajo sin hacer. El resultado es un logo que no sabe cómo aplicarse. Si el presupuesto es el limitante, hablamos y encontramos un alcance mínimo viable que tenga sentido.",
        },
      ],
    },
    cta: {
      heading: "¿Tu marca comunica lo que quieres comunicar?",
      body: "Cuéntanos en qué punto está tu identidad visual y qué necesitas mejorar. Lo evaluamos juntos.",
      btn: "Iniciar conversación",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "Branding & Logo Design for Business — Providentia",
      description: "Corporate identity design: logo, colour system, typography and brand manual. Strategic branding for businesses and professionals in Spain.",
    },
    hero: {
      label: "Service",
      tag: "Brand Identity",
      h1: "Branding\n& Logo.",
      intro: "A brand without a clear visual identity doesn't exist in the customer's mind. The logo is the signature. Branding is the character. One without the other doesn't work.",
    },
    what: {
      heading: "What the service involves",
      body: "We design complete brand identities: from the logo to the visual system that underpins it. The result isn't just a good-looking logo — it's an identity that works across all formats, that communicates who you are before you say a word, and that your team can apply independently.",
      examples: [
        { label: "Logo design", description: "Primary logo and its variants: positive, negative, monochrome, reduced version for favicon. Vector files in all necessary formats." },
        { label: "Colour system and typography", description: "Corporate colour palette with specifications for screen and print (HEX, RGB, CMYK, Pantone). Typographic selection with defined hierarchy." },
        { label: "Brand identity manual", description: "Usage guide establishing how — and how not — to apply brand elements. Essential for maintaining coherence when multiple people or suppliers are involved." },
        { label: "Key format adaptations", description: "Application of the identity across the most important formats: business card, letterhead, email signature, social media profile, LinkedIn cover." },
      ],
    },
    how: {
      heading: "How we do it",
      steps: [
        { numeral: "01", label: "Discovery and brand strategy", description: "We understand your business, your audience, your competition and the values you want to communicate. Design that doesn't start from strategy is decoration." },
        { numeral: "02", label: "Concept and visual exploration", description: "We present two or three distinct conceptual directions — not variations on the same concept — to choose the one that best fits the brand." },
        { numeral: "03", label: "Design and refinement", description: "We develop the chosen direction to the necessary level of detail: shapes, proportions, weights, spacing. 80% of the work happens here." },
        { numeral: "04", label: "Brand manual and file delivery", description: "We document all specifications in the identity manual and deliver the complete file package: vectors, bitmaps, documentation." },
      ],
    },
    forwho: {
      heading: "Who this service is for",
      items: [
        { label: "New businesses", description: "Companies starting up that need to build their identity from scratch with coherence and criteria from day one." },
        { label: "Companies reinventing themselves", description: "Businesses that have evolved but whose visual identity no longer reflects who they are — or who they want to be." },
        { label: "Businesses without professional visual identity", description: "Companies that have operated for years with a homemade logo or without a coherent visual system, and notice it in how they're perceived." },
        { label: "Brands that have grown without visual coherence", description: "Organisations that have accumulated different logo versions, different colours and different typefaces over time." },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "How many logo proposals do I receive?",
          a: "We present two or three distinct conceptual directions — not variations on the same logo. Each direction has its own logic and rationale. We don't make twenty options: we make the ones that make sense, well developed.",
        },
        {
          q: "Do you deliver files in all formats?",
          a: "Yes. The package includes vector files (AI, EPS, SVG), high-resolution bitmaps (transparent PNG, JPEG) and versions in the system's colours (positive, negative, monochrome). Everything needed for digital and print use.",
        },
        {
          q: "Does the brand manual also cover social media?",
          a: "Yes. The manual includes specifications for the most common digital formats: profile and cover image sizes for LinkedIn, Instagram, Facebook and Twitter/X. If you need guides for other specific formats, we agree this in the brief.",
        },
        {
          q: "Can you do just the logo without the full branding?",
          a: "We can, but we don't recommend it. A logo without a defined colour system or typography leaves 80% of the work undone. The result is a logo that doesn't know how to be applied. If budget is the constraint, let's talk and find a minimum viable scope that makes sense.",
        },
      ],
    },
    cta: {
      heading: "Does your brand communicate what you want to communicate?",
      body: "Tell us where your visual identity stands and what you need to improve. We evaluate it together.",
      btn: "Start a conversation",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Branding e Design Logo per Aziende — Providentia",
      description: "Design di identità aziendale: logotipo, sistema colore, tipografia e manuale di brand. Branding strategico per aziende e professionisti in Spagna.",
    },
    hero: {
      label: "Servizio",
      tag: "Brand Identity",
      h1: "Branding\ne Logo.",
      intro: "Un brand senza identità visiva chiara non esiste nella mente del cliente. Il logo è la firma. Il branding è il carattere. L'uno senza l'altro non funziona.",
    },
    what: {
      heading: "In cosa consiste il servizio",
      body: "Progettiamo identità di brand complete: dal logotipo al sistema visivo che lo sostiene. Il risultato non è solo un bel logo — è un'identità che funziona su tutti i supporti, che comunica chi sei prima che tu dica una parola e che il tuo team può applicare autonomamente.",
      examples: [
        { label: "Design del logotipo", description: "Logotipo principale e le sue varianti: positivo, negativo, monocromatico, versione ridotta per favicon. File vettoriali in tutti i formati necessari." },
        { label: "Sistema di colori e tipografia", description: "Palette di colori aziendale con specifiche per schermo e stampa (HEX, RGB, CMYK, Pantone). Selezione tipografica con gerarchia definita." },
        { label: "Manuale di identità di brand", description: "Guida all'uso che stabilisce come — e come non — applicare gli elementi del brand. Indispensabile per mantenere coerenza quando lavorano più persone o fornitori." },
        { label: "Adattamenti su supporti chiave", description: "Applicazione dell'identità sui supporti più importanti: biglietto da visita, carta intestata, firma email, profilo social, copertina LinkedIn." },
      ],
    },
    how: {
      heading: "Come lo facciamo",
      steps: [
        { numeral: "01", label: "Discovery e strategia di brand", description: "Capiamo il tuo business, il tuo pubblico, la concorrenza e i valori che vuoi comunicare. Il design che non parte dalla strategia è decorazione." },
        { numeral: "02", label: "Concept ed esplorazione visiva", description: "Presentiamo due o tre direzioni concettuali distinte — non variazioni dello stesso concept — per scegliere quella che meglio si adatta al brand." },
        { numeral: "03", label: "Design e raffinamento", description: "Sviluppiamo la direzione scelta fino al livello di dettaglio necessario: forme, proporzioni, pesi, spaziature. L'80% del lavoro avviene qui." },
        { numeral: "04", label: "Manuale di brand e consegna file", description: "Documentiamo tutte le specifiche nel manuale di identità e consegniamo il pacchetto completo di file: vettoriali, bitmap, documentazione." },
      ],
    },
    forwho: {
      heading: "Per chi è questo servizio",
      items: [
        { label: "Nuove aziende", description: "Imprese che iniziano e hanno bisogno di costruire la loro identità da zero con coerenza e criterio fin dal primo giorno." },
        { label: "Aziende che si reinventano", description: "Aziende che si sono evolute ma la cui identità visiva non riflette più chi sono — o chi vogliono essere." },
        { label: "Aziende senza identità visiva professionale", description: "Aziende che operano da anni con un logo fatto in casa o senza un sistema visivo coerente, e lo avvertono nel modo in cui vengono percepite." },
        { label: "Brand cresciuti senza coerenza visiva", description: "Organizzazioni che hanno accumulato versioni diverse del logo, colori diversi e tipografie diverse nel corso del tempo." },
      ],
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Quante proposte di logo ricevo?",
          a: "Presentiamo due o tre direzioni concettuali distinte — non variazioni dello stesso logo. Ogni direzione ha la propria logica e argomentazione. Non facciamo venti opzioni: facciamo quelle che hanno senso, ben sviluppate.",
        },
        {
          q: "Consegnate i file in tutti i formati?",
          a: "Sì. Il pacchetto include file vettoriali (AI, EPS, SVG), bitmap ad alta risoluzione (PNG con sfondo trasparente, JPEG) e versioni nei colori del sistema (positivo, negativo, monocromatico). Tutto il necessario per uso digitale e stampa.",
        },
        {
          q: "Il manuale di brand include anche i social media?",
          a: "Sì. Il manuale include le specifiche per i formati digitali più comuni: dimensioni di profilo e immagine di copertina per LinkedIn, Instagram, Facebook e Twitter/X. Se hai bisogno di guide per altri supporti specifici, lo concretizziamo nel brief.",
        },
        {
          q: "Potete fare solo il logo senza il branding completo?",
          a: "Possiamo farlo, ma non lo raccomandiamo. Un logo senza sistema di colori né tipografia definita lascia l'80% del lavoro incompiuto. Il risultato è un logo che non sa come applicarsi. Se il budget è il limite, parliamone e troviamo uno scope minimo sostenibile.",
        },
      ],
    },
    cta: {
      heading: "Il tuo brand comunica quello che vuoi comunicare?",
      body: "Raccontaci a che punto è la tua identità visiva e cosa hai bisogno di migliorare. Lo valutiamo insieme.",
      btn: "Iniziare una conversazione",
    },
    footer: { copyright: "© MMXXVI" },
  },
}

const RELATED = [
  { label: "Fotografía Profesional", href: "/servicios/fotografia-profesional" },
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

export default async function BrandingYLogo({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale] ?? CONTENT.es
  return (
    <ServicePage
      locale={locale}
      slug={SLUG}
      serviceName="Branding y Logo"
      serviceNameEn="Branding and Logo Design"
      serviceType="Brand Identity Design"
      content={c}
      related={RELATED}
    />
  )
}
