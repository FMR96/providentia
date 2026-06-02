import type { Metadata } from "next"
import { ServicePage, type ServiceContent } from "@/components/service-page"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const SLUG = "visualizacion-analitica"

const CONTENT: Record<string, ServiceContent> = {
  es: {
    meta: {
      title: "Visualización Analítica y Dashboards para Empresas — Providentia",
      description: "Diseño y construcción de cuadros de mando y dashboards analíticos. Power BI, Metabase, Tableau y visualizaciones custom. Consultoría de data visualization en España.",
    },
    hero: {
      label: "Servicio",
      tag: "Data Viz",
      h1: "Visualización\nAnalítica.",
      intro: "El dato que no se ve no se usa. Los cuadros de mando que construimos no necesitan explicación: la información está donde debe estar, en el formato que permite actuar.",
    },
    what: {
      heading: "Qué es la visualización analítica",
      body: "La visualización analítica es el proceso de diseñar representaciones visuales de datos complejos que faciliten la toma de decisiones. No se trata de hacer gráficos bonitos — se trata de hacer gráficos útiles: que el equipo directivo entienda en treinta segundos si el negocio va en la dirección correcta.",
      examples: [
        { label: "Cuadros de mando ejecutivos", description: "Dashboards estratégicos con los KPIs que realmente importan a la dirección: rentabilidad, crecimiento, eficiencia operativa y riesgo." },
        { label: "Dashboards operativos", description: "Paneles de seguimiento para equipos de ventas, marketing, operaciones o atención al cliente con métricas en tiempo real o casi real." },
        { label: "Informes automatizados", description: "Sustitución de informes manuales en Excel o PowerPoint por reporting automatizado que se actualiza solo y llega cuando debe." },
        { label: "Visualizaciones ad hoc", description: "Análisis exploratorios, presentaciones de resultados y visualizaciones puntuales para proyectos específicos o comités de dirección." },
      ],
    },
    how: {
      heading: "Cómo lo hacemos",
      steps: [
        { numeral: "01", label: "Auditoría del reporting actual", description: "Entendemos qué informes existen, quién los usa, cada cuánto tiempo y qué decisiones toman a partir de ellos. El mejor dashboard es el que reemplaza con precisión lo que ya se necesitaba." },
        { numeral: "02", label: "Definición de KPIs y audiencia", description: "No todos los datos son para todos. Definimos qué métricas importan a cada rol y diseñamos la experiencia de lectura adecuada para cada audiencia." },
        { numeral: "03", label: "Diseño y construcción", description: "Construimos los dashboards en la plataforma adecuada: Power BI, Metabase, Looker, Tableau o visualizaciones custom en código. Siempre sobre datos limpios y fiables." },
        { numeral: "04", label: "Formación y despliegue", description: "Formamos a tu equipo para que pueda interpretar, navegar y eventualmente extender los dashboards sin depender de nosotros para cada cambio." },
      ],
    },
    forwho: {
      heading: "Para quién es este servicio",
      items: [
        { label: "Equipos directivos", description: "Líderes que necesitan visibilidad del negocio en tiempo real sin tener que construir los análisis ellos mismos ni esperar al informe mensual." },
        { label: "Directores de marketing y CMOs", description: "Equipos de marketing que quieren medir el impacto real de sus campañas más allá de las métricas de vanidad de cada plataforma." },
        { label: "Equipos de ventas y operaciones", description: "Comerciales y responsables de operaciones que necesitan seguimiento de KPIs en tiempo real para tomar decisiones en el día a día." },
        { label: "Empresas con reporting manual", description: "Organizaciones que invierten horas semanales en construir informes en Excel que podrían generarse automáticamente y con más precisión." },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Qué herramienta de visualización es mejor para mi empresa?",
          a: "Depende del ecosistema tecnológico que ya tengas, del perfil de los usuarios que van a usar el dashboard y del presupuesto disponible. Power BI es la opción más extendida en entornos Microsoft. Metabase es excelente para equipos técnicos que quieren autoservicio. Looker se integra bien con BigQuery. Si no hay preferencia previa, recomendamos la opción que mejor encaje con tu stack actual.",
        },
        {
          q: "¿Los dashboards se actualizan solos o hay que actualizarlos manualmente?",
          a: "Los dashboards que construimos se conectan directamente a las fuentes de datos y se actualizan automáticamente: en tiempo real, cada hora, diariamente o con la frecuencia que defina el negocio. No hay intervención manual salvo que el dato original no esté disponible.",
        },
        {
          q: "¿Necesito tener los datos ya ordenados para que podáis construir un dashboard?",
          a: "No necesariamente. Si los datos están en un estado deficiente, lo detectamos en la auditoría inicial y podemos asumir la preparación de datos como parte del proyecto. Un dashboard construido sobre datos mal estructurados da información incorrecta — preferimos arreglar la base primero.",
        },
        {
          q: "¿Podéis formarnos para que podamos hacer nuestros propios dashboards en el futuro?",
          a: "Sí. La formación es parte del proceso de entrega. El objetivo no es que dependas de nosotros para cada cambio o nuevo informe — es que tu equipo tenga la capacidad de operar y extender lo que construimos juntos.",
        },
      ],
    },
    cta: {
      heading: "¿Cuánto tiempo invierte tu equipo en construir informes manualmente?",
      body: "Cuéntanos qué datos tienes y qué decisiones deberías tomar con ellos. Identificamos qué dashboards pueden transformar esa rutina.",
      btn: "Iniciar conversación",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "Analytical Visualisation & Dashboards for Business — Providentia",
      description: "Design and construction of analytical dashboards and control panels. Power BI, Metabase, Tableau and custom visualisations. Data visualisation consultancy in Spain.",
    },
    hero: {
      label: "Service",
      tag: "Data Viz",
      h1: "Analytical\nVisualisation.",
      intro: "Data that isn't seen isn't used. The dashboards we build need no explanation: information is where it should be, in the format that enables action.",
    },
    what: {
      heading: "What is analytical visualisation",
      body: "Analytical visualisation is the process of designing visual representations of complex data that facilitate decision-making. It's not about making pretty charts — it's about making useful ones: so that the executive team understands in thirty seconds whether the business is heading in the right direction.",
      examples: [
        { label: "Executive dashboards", description: "Strategic dashboards with the KPIs that truly matter to leadership: profitability, growth, operational efficiency and risk." },
        { label: "Operational dashboards", description: "Tracking panels for sales, marketing, operations or customer service teams with real-time or near-real-time metrics." },
        { label: "Automated reporting", description: "Replacement of manual Excel or PowerPoint reports with automated reporting that updates itself and arrives when it should." },
        { label: "Ad hoc visualisations", description: "Exploratory analyses, results presentations and one-off visualisations for specific projects or board meetings." },
      ],
    },
    how: {
      heading: "How we do it",
      steps: [
        { numeral: "01", label: "Current reporting audit", description: "We understand what reports exist, who uses them, how often and what decisions are made from them. The best dashboard is the one that precisely replaces what was already needed." },
        { numeral: "02", label: "KPI and audience definition", description: "Not all data is for everyone. We define which metrics matter to each role and design the appropriate reading experience for each audience." },
        { numeral: "03", label: "Design and construction", description: "We build dashboards on the right platform: Power BI, Metabase, Looker, Tableau or custom code visualisations. Always on clean, reliable data." },
        { numeral: "04", label: "Training and deployment", description: "We train your team to interpret, navigate and eventually extend the dashboards without depending on us for every change." },
      ],
    },
    forwho: {
      heading: "Who this service is for",
      items: [
        { label: "Executive teams", description: "Leaders who need real-time business visibility without having to build the analyses themselves or wait for the monthly report." },
        { label: "Marketing directors and CMOs", description: "Marketing teams wanting to measure the real impact of their campaigns beyond the vanity metrics of each platform." },
        { label: "Sales and operations teams", description: "Sales and operations managers who need real-time KPI tracking to make day-to-day decisions." },
        { label: "Companies with manual reporting", description: "Organisations investing hours each week building Excel reports that could be generated automatically and with greater accuracy." },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Which visualisation tool is best for my company?",
          a: "It depends on your existing technology ecosystem, the profile of dashboard users and available budget. Power BI is the most widespread option in Microsoft environments. Metabase is excellent for technical teams wanting self-service. Looker integrates well with BigQuery. If there's no prior preference, we recommend the option that best fits your current stack.",
        },
        {
          q: "Do dashboards update themselves or do they need to be updated manually?",
          a: "The dashboards we build connect directly to data sources and update automatically: in real time, hourly, daily or at whatever frequency the business defines. No manual intervention unless the original data isn't available.",
        },
        {
          q: "Do I need to have my data already organised for you to build a dashboard?",
          a: "Not necessarily. If data is in poor condition, we detect it in the initial audit and can take on data preparation as part of the project. A dashboard built on poorly structured data gives incorrect information — we prefer to fix the foundation first.",
        },
        {
          q: "Can you train us to build our own dashboards in the future?",
          a: "Yes. Training is part of the delivery process. The goal isn't for you to depend on us for every change or new report — it's for your team to have the capacity to operate and extend what we build together.",
        },
      ],
    },
    cta: {
      heading: "How much time does your team spend building reports manually?",
      body: "Tell us what data you have and what decisions you should be making with it. We identify which dashboards can transform that routine.",
      btn: "Start a conversation",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Visualizzazione Analitica e Dashboard per Aziende — Providentia",
      description: "Progettazione e costruzione di cruscotti analitici e dashboard. Power BI, Metabase, Tableau e visualizzazioni personalizzate. Consulenza data visualization in Spagna.",
    },
    hero: {
      label: "Servizio",
      tag: "Data Viz",
      h1: "Visualizzazione\nAnalitica.",
      intro: "I dati che non si vedono non si usano. I cruscotti che costruiamo non hanno bisogno di spiegazioni: le informazioni sono dove devono essere, nel formato che permette di agire.",
    },
    what: {
      heading: "Cos'è la visualizzazione analitica",
      body: "La visualizzazione analitica è il processo di progettazione di rappresentazioni visive di dati complessi che facilitino il processo decisionale. Non si tratta di fare grafici belli — si tratta di fare grafici utili: che il team dirigenziale capisca in trenta secondi se il business sta andando nella direzione giusta.",
      examples: [
        { label: "Cruscotti direzionali", description: "Dashboard strategici con i KPI che contano davvero per la direzione: redditività, crescita, efficienza operativa e rischio." },
        { label: "Dashboard operativi", description: "Pannelli di monitoraggio per team vendite, marketing, operazioni o assistenza clienti con metriche in tempo reale o quasi reale." },
        { label: "Reportistica automatizzata", description: "Sostituzione di report manuali in Excel o PowerPoint con reportistica automatizzata che si aggiorna da sola e arriva quando deve." },
        { label: "Visualizzazioni ad hoc", description: "Analisi esplorative, presentazioni di risultati e visualizzazioni puntuali per progetti specifici o riunioni di consiglio." },
      ],
    },
    how: {
      heading: "Come lo facciamo",
      steps: [
        { numeral: "01", label: "Audit della reportistica attuale", description: "Capiamo quali report esistono, chi li usa, con quale frequenza e quali decisioni vengono prese da essi. Il miglior dashboard è quello che sostituisce con precisione ciò che era già necessario." },
        { numeral: "02", label: "Definizione di KPI e audience", description: "Non tutti i dati sono per tutti. Definiamo quali metriche contano per ogni ruolo e progettiamo l'esperienza di lettura adeguata per ogni audience." },
        { numeral: "03", label: "Progettazione e costruzione", description: "Costruiamo i dashboard sulla piattaforma giusta: Power BI, Metabase, Looker, Tableau o visualizzazioni custom in codice. Sempre su dati puliti e affidabili." },
        { numeral: "04", label: "Formazione e deployment", description: "Formiamo il tuo team per interpretare, navigare ed eventualmente estendere i dashboard senza dipendere da noi per ogni modifica." },
      ],
    },
    forwho: {
      heading: "Per chi è questo servizio",
      items: [
        { label: "Team direzionali", description: "Leader che hanno bisogno di visibilità sul business in tempo reale senza dover costruire le analisi da soli né aspettare il report mensile." },
        { label: "Direttori marketing e CMO", description: "Team marketing che vogliono misurare l'impatto reale delle loro campagne al di là delle vanity metric di ogni piattaforma." },
        { label: "Team vendite e operazioni", description: "Responsabili commerciali e operativi che hanno bisogno di monitoraggio KPI in tempo reale per prendere decisioni quotidiane." },
        { label: "Aziende con reportistica manuale", description: "Organizzazioni che investono ore settimanali a costruire report Excel che potrebbero essere generati automaticamente e con maggiore precisione." },
      ],
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Quale strumento di visualizzazione è migliore per la mia azienda?",
          a: "Dipende dall'ecosistema tecnologico che già hai, dal profilo degli utenti che useranno il dashboard e dal budget disponibile. Power BI è l'opzione più diffusa negli ambienti Microsoft. Metabase è eccellente per team tecnici che vogliono self-service. Looker si integra bene con BigQuery. Se non c'è una preferenza previa, raccomandiamo l'opzione che si adatta meglio al tuo stack attuale.",
        },
        {
          q: "I dashboard si aggiornano da soli o vanno aggiornati manualmente?",
          a: "I dashboard che costruiamo si connettono direttamente alle sorgenti dati e si aggiornano automaticamente: in tempo reale, ogni ora, giornalmente o con la frequenza che definisce il business. Nessun intervento manuale salvo che il dato originale non sia disponibile.",
        },
        {
          q: "Ho bisogno di avere i dati già ordinati per costruire un dashboard?",
          a: "Non necessariamente. Se i dati sono in cattive condizioni, lo rileviamo nell'audit iniziale e possiamo farci carico della preparazione dei dati come parte del progetto. Un dashboard costruito su dati mal strutturati dà informazioni errate — preferiamo sistemare prima le fondamenta.",
        },
        {
          q: "Potete formarci per costruire i nostri dashboard in futuro?",
          a: "Sì. La formazione è parte del processo di consegna. L'obiettivo non è che tu dipenda da noi per ogni modifica o nuovo report — è che il tuo team abbia la capacità di operare ed estendere ciò che costruiamo insieme.",
        },
      ],
    },
    cta: {
      heading: "Quanto tempo investe il tuo team a costruire report manualmente?",
      body: "Raccontaci quali dati hai e quali decisioni dovresti prendere con essi. Identifichiamo quali dashboard possono trasformare quella routine.",
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

export default async function VisualizacionAnalitica({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale] ?? CONTENT.es
  return (
    <ServicePage
      locale={locale}
      slug={SLUG}
      serviceName="Visualización Analítica"
      serviceNameEn="Analytical Visualisation"
      serviceType="Data Visualisation Consulting"
      content={c}
      related={RELATED}
    />
  )
}
