import type { Metadata } from "next"
import { ServicePage, type ServiceContent } from "@/components/service-page"
import { canonicalUrl, hreflangAlternates, ogBase } from "@/lib/seo"

interface Props {
  params: Promise<{ locale: string }>
}

const SLUG = "arquitectura-de-datos"

const CONTENT: Record<string, ServiceContent> = {
  es: {
    meta: {
      title: "Arquitectura de Datos para Empresas — Providentia",
      description: "Diseño e implementación de infraestructuras de datos escalables: data warehouses, pipelines ETL/ELT y gobierno del dato. Consultoría de arquitectura de datos en España.",
    },
    hero: {
      label: "Servicio",
      tag: "Infrastructure",
      h1: "Arquitectura\nde Datos.",
      intro: "Los datos sin estructura son ruido. Con la arquitectura correcta, se convierten en el activo más valioso de tu empresa. La diferencia entre ambas situaciones no es tecnológica — es de diseño.",
    },
    what: {
      heading: "Qué es la arquitectura de datos",
      body: "La arquitectura de datos es el conjunto de decisiones de diseño que determinan cómo se almacenan, mueven, transforman y consumen los datos en una organización. Un mal diseño hace que los proyectos de analítica fallen no por falta de datos, sino porque esos datos no están disponibles en el formato, la calidad o el momento adecuados.",
      examples: [
        { label: "Data Warehouse y Data Lake", description: "Diseño y construcción del repositorio central de datos adaptado al volumen, velocidad y variedad de tu información." },
        { label: "Pipelines ETL / ELT", description: "Automatización del flujo de datos desde las fuentes hasta el destino, con transformaciones, validaciones y gestión de errores." },
        { label: "Gobierno del dato", description: "Definición de propietarios, políticas de calidad, diccionario de datos y trazabilidad. El dato correcto, para la persona correcta, en el momento correcto." },
        { label: "Migración a la nube", description: "Traslado de infraestructuras on-premise a plataformas cloud (AWS, GCP, Azure) con mínima interrupción operativa." },
      ],
    },
    how: {
      heading: "Cómo lo hacemos",
      steps: [
        { numeral: "01", label: "Auditoría del estado actual", description: "Mapeamos las fuentes de datos existentes, los flujos actuales, los sistemas implicados y los puntos de fricción. No diseñamos sobre el vacío." },
        { numeral: "02", label: "Diseño de arquitectura", description: "Proponemos la arquitectura objetivo: qué tecnologías, qué patrones de integración y qué modelo de datos se adapta mejor a tus necesidades y a tu equipo." },
        { numeral: "03", label: "Implementación y migración", description: "Construimos la infraestructura, migramos los datos históricos y ponemos en marcha los pipelines con pruebas de calidad y monitorización." },
        { numeral: "04", label: "Documentación y transferencia", description: "Entregamos documentación completa y formamos a tu equipo para que pueda operar y extender la arquitectura de forma autónoma." },
      ],
    },
    forwho: {
      heading: "Para quién es este servicio",
      items: [
        { label: "Empresas con datos fragmentados", description: "Organizaciones donde los datos viven en silos — CRM, ERP, hojas de cálculo, bases de datos locales — sin ningún flujo unificado." },
        { label: "Empresas en fase de crecimiento", description: "Negocios que han superado sus infraestructuras actuales y necesitan escalar sin perder trazabilidad ni calidad del dato." },
        { label: "Equipos que quieren hacer analítica avanzada", description: "Empresas que quieren modelos predictivos o dashboards potentes pero cuya infraestructura de datos no lo permite hoy." },
        { label: "Empresas migrando a la nube", description: "Organizaciones que quieren trasladar sus sistemas de datos a AWS, GCP o Azure de forma ordenada y sin riesgo operativo." },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Necesito un equipo de ingeniería de datos interno para trabajar con vosotros?",
          a: "No es imprescindible. Trabajamos tanto con empresas que tienen equipos técnicos internos como con empresas sin perfil de datos. En este segundo caso, diseñamos arquitecturas que sean operables por perfiles no especializados y documentamos todo para que la curva de aprendizaje sea mínima.",
        },
        {
          q: "¿Cuánto tiempo tarda en estar operativa una arquitectura de datos?",
          a: "Depende de la complejidad y del estado de partida. Un proyecto de arquitectura de alcance medio — cinco a diez fuentes de datos, modelo dimensional, pipelines automatizados — suele estar operativo en ocho a doce semanas. Proyectos más complejos con migración cloud incluida pueden requerir tres a seis meses.",
        },
        {
          q: "¿Qué tecnologías utilizáis?",
          a: "No tenemos preferencia de proveedor. Recomendamos la tecnología que mejor encaja con tus necesidades, presupuesto y equipo: BigQuery, Snowflake, Redshift, dbt, Airflow, Fivetran, Stitch, entre otras. El criterio es siempre el problema a resolver, no la herramienta favorita.",
        },
        {
          q: "¿Podéis trabajar sobre una arquitectura existente que ya tenemos?",
          a: "Sí. Empezamos con una auditoría del estado actual para entender qué funciona, qué no y qué debe cambiar. No partimos de cero si no es necesario. El objetivo es mejorar lo que ya existe de forma incremental, no tirarlo todo y empezar de nuevo.",
        },
      ],
    },
    cta: {
      heading: "¿Quieres saber si tu arquitectura de datos es la adecuada?",
      body: "Auditamos tu infraestructura actual sin compromiso y te decimos qué cambiaría y por qué.",
      btn: "Iniciar conversación",
    },
    footer: { copyright: "© MMXXVI" },
  },

  en: {
    meta: {
      title: "Data Architecture for Business — Providentia",
      description: "Design and implementation of scalable data infrastructures: data warehouses, ETL/ELT pipelines and data governance. Data architecture consultancy in Spain.",
    },
    hero: {
      label: "Service",
      tag: "Infrastructure",
      h1: "Data\nArchitecture.",
      intro: "Data without structure is noise. With the right architecture, it becomes your company's most valuable asset. The difference between the two situations isn't technological — it's a matter of design.",
    },
    what: {
      heading: "What is data architecture",
      body: "Data architecture is the set of design decisions that determine how data is stored, moved, transformed and consumed within an organisation. Poor design causes analytics projects to fail not for lack of data, but because that data isn't available in the right format, quality or timing.",
      examples: [
        { label: "Data Warehouse & Data Lake", description: "Design and construction of a central data repository adapted to the volume, velocity and variety of your information." },
        { label: "ETL / ELT Pipelines", description: "Automation of data flow from sources to destination, with transformations, validations and error handling." },
        { label: "Data Governance", description: "Defining owners, quality policies, data dictionary and lineage. The right data, for the right person, at the right time." },
        { label: "Cloud Migration", description: "Moving on-premise infrastructure to cloud platforms (AWS, GCP, Azure) with minimal operational disruption." },
      ],
    },
    how: {
      heading: "How we do it",
      steps: [
        { numeral: "01", label: "Current state audit", description: "We map existing data sources, current flows, systems involved and friction points. We don't design from scratch without understanding what exists." },
        { numeral: "02", label: "Architecture design", description: "We propose the target architecture: which technologies, which integration patterns and which data model best suits your needs and your team." },
        { numeral: "03", label: "Implementation and migration", description: "We build the infrastructure, migrate historical data and launch pipelines with quality testing and monitoring in place." },
        { numeral: "04", label: "Documentation and handover", description: "We deliver complete documentation and train your team so they can operate and extend the architecture independently." },
      ],
    },
    forwho: {
      heading: "Who this service is for",
      items: [
        { label: "Companies with fragmented data", description: "Organisations where data lives in silos — CRM, ERP, spreadsheets, local databases — with no unified flow." },
        { label: "Companies in growth phase", description: "Businesses that have outgrown their current infrastructure and need to scale without losing data lineage or quality." },
        { label: "Teams wanting advanced analytics", description: "Companies that want predictive models or powerful dashboards but whose current data infrastructure doesn't support it." },
        { label: "Companies migrating to the cloud", description: "Organisations wanting to move their data systems to AWS, GCP or Azure in an organised, low-risk way." },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Do I need an internal data engineering team to work with you?",
          a: "It isn't essential. We work with both companies that have internal technical teams and companies without data profiles. In the latter case, we design architectures that can be operated by non-specialist profiles and document everything so the learning curve is minimal.",
        },
        {
          q: "How long does it take to get a data architecture operational?",
          a: "It depends on complexity and the starting point. A mid-scope architecture project — five to ten data sources, dimensional model, automated pipelines — is typically operational in eight to twelve weeks. More complex projects including cloud migration may require three to six months.",
        },
        {
          q: "What technologies do you use?",
          a: "We have no vendor preference. We recommend the technology that best fits your needs, budget and team: BigQuery, Snowflake, Redshift, dbt, Airflow, Fivetran, Stitch, among others. The criterion is always the problem to solve, not a favourite tool.",
        },
        {
          q: "Can you work on an existing architecture we already have?",
          a: "Yes. We start with a current state audit to understand what works, what doesn't and what needs to change. We don't start from scratch unless necessary. The goal is to improve what already exists incrementally, not tear it down and begin again.",
        },
      ],
    },
    cta: {
      heading: "Want to know if your data architecture is fit for purpose?",
      body: "We audit your current infrastructure at no commitment and tell you what we'd change and why.",
      btn: "Start a conversation",
    },
    footer: { copyright: "© MMXXVI" },
  },

  it: {
    meta: {
      title: "Architettura dei Dati per Aziende — Providentia",
      description: "Progettazione e implementazione di infrastrutture dati scalabili: data warehouse, pipeline ETL/ELT e governance dei dati. Consulenza di architettura dati in Spagna.",
    },
    hero: {
      label: "Servizio",
      tag: "Infrastructure",
      h1: "Architettura\ndei Dati.",
      intro: "I dati senza struttura sono rumore. Con l'architettura giusta, diventano l'asset più prezioso della tua azienda. La differenza tra le due situazioni non è tecnologica — è di progettazione.",
    },
    what: {
      heading: "Cos'è l'architettura dei dati",
      body: "L'architettura dei dati è l'insieme delle decisioni progettuali che determinano come i dati vengono archiviati, spostati, trasformati e consumati in un'organizzazione. Un design sbagliato fa fallire i progetti di analisi non per mancanza di dati, ma perché quei dati non sono disponibili nel formato, nella qualità o nel momento giusto.",
      examples: [
        { label: "Data Warehouse e Data Lake", description: "Progettazione e costruzione del repository centrale dei dati adattato al volume, alla velocità e alla varietà delle tue informazioni." },
        { label: "Pipeline ETL / ELT", description: "Automazione del flusso di dati dalle sorgenti alla destinazione, con trasformazioni, validazioni e gestione degli errori." },
        { label: "Governance dei dati", description: "Definizione di proprietari, politiche di qualità, dizionario dei dati e tracciabilità. Il dato giusto, alla persona giusta, al momento giusto." },
        { label: "Migrazione al cloud", description: "Trasferimento di infrastrutture on-premise a piattaforme cloud (AWS, GCP, Azure) con minima interruzione operativa." },
      ],
    },
    how: {
      heading: "Come lo facciamo",
      steps: [
        { numeral: "01", label: "Audit dello stato attuale", description: "Mappiamo le sorgenti dati esistenti, i flussi attuali, i sistemi coinvolti e i punti di attrito. Non progettiamo senza capire cosa esiste." },
        { numeral: "02", label: "Progettazione dell'architettura", description: "Proponiamo l'architettura target: quali tecnologie, quali pattern di integrazione e quale modello di dati si adatta meglio alle tue esigenze e al tuo team." },
        { numeral: "03", label: "Implementazione e migrazione", description: "Costruiamo l'infrastruttura, migriamo i dati storici e avviamo le pipeline con test di qualità e monitoraggio." },
        { numeral: "04", label: "Documentazione e trasferimento", description: "Consegniamo documentazione completa e formiamo il tuo team affinché possa operare ed estendere l'architettura in modo autonomo." },
      ],
    },
    forwho: {
      heading: "Per chi è questo servizio",
      items: [
        { label: "Aziende con dati frammentati", description: "Organizzazioni dove i dati vivono in silos — CRM, ERP, fogli di calcolo, database locali — senza alcun flusso unificato." },
        { label: "Aziende in fase di crescita", description: "Aziende che hanno superato le infrastrutture attuali e hanno bisogno di scalare senza perdere tracciabilità o qualità del dato." },
        { label: "Team che vogliono analisi avanzate", description: "Aziende che vogliono modelli predittivi o dashboard potenti ma la cui infrastruttura attuale non lo consente." },
        { label: "Aziende che migrano al cloud", description: "Organizzazioni che vogliono trasferire i loro sistemi dati su AWS, GCP o Azure in modo ordinato e senza rischi operativi." },
      ],
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Ho bisogno di un team interno di data engineering per lavorare con voi?",
          a: "Non è indispensabile. Lavoriamo sia con aziende che hanno team tecnici interni sia con aziende senza profili dati. In quest'ultimo caso, progettiamo architetture operabili da profili non specializzati e documentiamo tutto affinché la curva di apprendimento sia minima.",
        },
        {
          q: "Quanto tempo ci vuole per rendere operativa un'architettura dati?",
          a: "Dipende dalla complessità e dal punto di partenza. Un progetto di architettura di medio respiro — cinque-dieci sorgenti dati, modello dimensionale, pipeline automatizzate — è tipicamente operativo in otto-dodici settimane. Progetti più complessi con migrazione cloud inclusa possono richiedere da tre a sei mesi.",
        },
        {
          q: "Quali tecnologie utilizzate?",
          a: "Non abbiamo preferenze di vendor. Raccomandiamo la tecnologia che meglio si adatta alle tue esigenze, budget e team: BigQuery, Snowflake, Redshift, dbt, Airflow, Fivetran, Stitch, tra le altre. Il criterio è sempre il problema da risolvere, non lo strumento preferito.",
        },
        {
          q: "Potete lavorare su un'architettura esistente che abbiamo già?",
          a: "Sì. Iniziamo con un audit dello stato attuale per capire cosa funziona, cosa no e cosa deve cambiare. Non partiamo da zero se non è necessario. L'obiettivo è migliorare ciò che già esiste in modo incrementale, non demolirlo e ricominciare.",
        },
      ],
    },
    cta: {
      heading: "Vuoi sapere se la tua architettura dati è adeguata?",
      body: "Facciamo un audit della tua infrastruttura attuale senza impegno e ti diciamo cosa cambieremmo e perché.",
      btn: "Iniziare una conversazione",
    },
    footer: { copyright: "© MMXXVI" },
  },
}

const RELATED = [
  { label: "Analítica Predictiva", href: "/servicios/analitica-predictiva" },
  { label: "Visualización Analítica", href: "/servicios/visualizacion-analitica" },
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

export default async function ArquitecturaDeDatos({ params }: Props) {
  const { locale } = await params
  const c = CONTENT[locale] ?? CONTENT.es
  return (
    <ServicePage
      locale={locale}
      slug={SLUG}
      serviceName="Arquitectura de Datos"
      serviceNameEn="Data Architecture"
      serviceType="Data Architecture Consulting"
      content={c}
      related={RELATED}
    />
  )
}
