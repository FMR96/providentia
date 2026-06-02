# Setup de Medición y KPIs — Providentia SEO/GEO
**Documento de trabajo | Fase 6 | Junio 2026**

---

## 1. Google Search Console — Setup inicial

### Pasos de verificación
1. Ir a search.google.com/search-console
2. Añadir propiedad: `https://providentialabs.com` (verificar con archivo HTML o DNS)
3. **Enviar sitemap**: Ir a Sitemaps > Añadir sitemap > `https://providentialabs.com/sitemap.xml`
4. Verificar que indexa las versiones correctas (sin www, con https)

### Qué monitorizar en GSC (revisión quincenal)
- **Cobertura**: páginas indexadas vs. excluidas. Las páginas nuevas pueden tardar 1-4 semanas.
- **Rendimiento > Consultas**: keywords que ya generan impresiones/clics. Filtrar por país ES.
- **Core Web Vitals**: LCP, INP, CLS. Alertas si alguna métrica entra en zona roja.
- **Rich results**: confirmar que los schemas de FAQPage, Service y BlogPosting se validan.

### Herramienta de validación de schema
- URL: search.google.com/test/rich-results
- Probar: `/`, `/geo`, `/servicios/analitica-predictiva`, un artículo de blog

---

## 2. Analítica web — Vercel Analytics (ya instalado)

Vercel Analytics está activo en el proyecto (`@vercel/analytics`). Configuración actual:
- Datos agregados y anónimos (cumplimiento RGPD sin necesidad de consent para analytics)
- Acceso: dashboard de Vercel del proyecto

### Métricas a revisar semanalmente
- Páginas más visitadas: confirmar que home, /geo y blog reciben tráfico
- Fuentes de tráfico: directo, orgánico, referido
- Geografía: confirmar que el tráfico ES es mayoritario

### Si se quiere más granularidad
Alternativas privacy-first compatibles con el CMP actual:
- **Plausible Analytics** (€9/mes): event tracking sin cookies, dashboard simple
- **Fathom** (€14/mes): similar a Plausible
- **PostHog** (free tier generoso): más potente, soporta funnels y heatmaps

---

## 3. Seguimiento de posiciones — Rank tracking

### Herramientas recomendadas (sin coste inicial)
- **Google Search Console** (gratuito): datos reales de clics e impresiones por keyword. Limitado a las últimas 16 semanas.
- **Ubersuggest** (plan gratuito limitado): posiciones para hasta 25 keywords
- **Ahrefs Webmaster Tools** (gratuito): backlinks + keywords con clicks, requiere verificación DNS

### Keywords a trackear desde día 1
Estas son las keywords P0 del keyword research con volumen confirmado:

| Keyword | Objetivo | Dificultad | Vol. ES/mes |
|---|---|---|---|
| generative engine optimization | /geo | Baja | 90-320 |
| posicionamiento en chatgpt | /geo | Baja | 320 |
| cómo aparecer en chatgpt | Blog post | Baja | 480 |
| agencia geo españa | /geo | Baja | 60 |
| consultoría analítica predictiva | /servicios/analitica-predictiva | Baja | 90 |
| análisis de datos de marketing | Blog post | Baja | 310 |
| marketing analytics consultoría | / | Baja | 140 |
| cuadros de mando marketing | /servicios/* | Baja | 390 |

### Cadencia
- Semanas 1-4: verificar que las páginas están indexadas (GSC)
- Meses 2-3: primeras posiciones para long-tail GEO (esperadas en posiciones 5-20)
- Mes 4-6: keywords principales deberían estar en top 20 con trabajo continuo de contenido y backlinks

---

## 4. Monitorización de visibilidad en LLM — Protocolo manual

No existen herramientas automáticas fiables para monitorizar menciones en LLM a junio 2026. El protocolo manual es la única opción.

### Cadencia: 1 vez al mes (primer lunes del mes)

### Motores a consultar
1. ChatGPT (chat.openai.com) — activar "Search" para que use web en tiempo real
2. Perplexity (perplexity.ai)
3. Google AI Overview — buscar en google.es con cuenta ES (puede requerir VPN si estás en zona sin AI Overviews)
4. Claude (claude.ai) — con web search activado si disponible

### Las 20 preguntas del protocolo
Ver `seo/geo-entity-strategy.md` sección 5.

### Registro de resultados

Mantener una hoja de cálculo con estas columnas:
```
Fecha | Motor | Pregunta | PROVIDENTIA aparece (S/N) | Posición relativa | Fuente citada | Competidor mencionado
```

### Señales de progreso esperadas
- **Mes 1-2**: PROVIDENTIA no aparece en ninguna respuesta (normal — el sitio es nuevo)
- **Mes 3-4**: Primeras apariciones en Perplexity para preguntas de nicho sobre GEO en España
- **Mes 5-8**: Apariciones en ChatGPT Search para queries específicas de GEO + analítica
- **Mes 9-12**: Presencia consistente en 3+ motores para queries principales del sector

---

## 5. KPIs por trimestre — Proyecciones realistas

**AVISO:** Estas son estimaciones probabilísticas basadas en el estado actual del sitio y la estrategia implementada. El SEO/GEO es probabilístico — no hay garantías de posiciones específicas. Los rangos reflejan escenarios realistas, no promesas.

### Q3 2026 (julio-septiembre) — Base y tracción inicial

| KPI | Objetivo | Cómo medirlo |
|---|---|---|
| Páginas indexadas | 15-20 páginas en GSC | GSC > Cobertura |
| Impresiones orgánicas/mes | 500-2.000 (crecimiento) | GSC > Rendimiento |
| Clics orgánicos/mes | 20-100 | GSC > Rendimiento |
| Sitemap enviado y sin errores | ✓ | GSC > Sitemaps |
| Rich results validados | FAQPage, Service | Google Rich Results Test |
| Artículos blog ES publicados | 6 | Filesystem + blog listing |
| PROVIDENTIA aparece en ≥1 LLM | Para ≥1 pregunta de nicho | Protocolo manual |

### Q4 2026 (octubre-diciembre) — Primer crecimiento orgánico

| KPI | Objetivo | Cómo medirlo |
|---|---|---|
| Impresiones orgánicas/mes | 5.000-15.000 | GSC |
| Clics orgánicos/mes | 150-500 | GSC |
| Posición media keywords GEO | Top 15 para keywords de nicho | GSC + rank tracker |
| Backlinks de dominio | 5-15 dominios nuevos | Ahrefs Webmaster Tools |
| PROVIDENTIA en LLM | 3-5 preguntas en Perplexity | Protocolo manual |
| Leads generados vía orgánico | 2-5 leads identificados | Seguimiento manual de emails |

### Q1 2027 (enero-marzo) — Autoridad de categoría inicial

| KPI | Objetivo | Cómo medirlo |
|---|---|---|
| Clics orgánicos/mes | 500-1.500 | GSC |
| "generative engine optimization" | Top 5 en Google ES | GSC + rank tracker |
| "qué es GEO" | Top 10 en Google ES | GSC |
| PROVIDENTIA en LLM | 8-12 preguntas en 2+ motores | Protocolo manual |
| Blog posts publicados total | 12-15 en ES | Filesystem |
| Menciones externas (directorios + medios) | 3-5 fuentes nuevas | Google Alerts |

### Q2 2027 (abril-junio) — Consolidación

| KPI | Objetivo | Cómo medirlo |
|---|---|---|
| Clics orgánicos/mes | 1.500-4.000 | GSC |
| Leads orgánicos/mes | 5-15 | Seguimiento CRM/email |
| Posición media keywords P0 | Top 10 | GSC |
| PROVIDENTIA en LLM | 15+ preguntas en 3+ motores | Protocolo manual |

---

## 6. Google Alerts — Monitorización de menciones externas

Configurar alertas para:
- `"Providentia"` — menciones directas de la marca
- `"providentialabs.com"` — menciones de la URL
- `"generative engine optimization" España` — oportunidades de posicionamiento temático
- `"consultora analítica predictiva"` — categoría de negocio

URL de configuración: google.com/alerts

---

## 7. Revisión y ciclo de mejora

### Cadencia de revisión
| Ciclo | Qué revisar | Quién |
|---|---|---|
| Semanal (15 min) | Vercel Analytics + GSC impresiones | Equipo |
| Mensual (1-2h) | GSC keywords + rank tracker + protocolo LLM | Equipo + este documento |
| Trimestral (medio día) | KPIs vs. objetivos + ajuste de estrategia de contenido | Equipo + revisión de brief-geo.md |

### Señal de que algo no funciona
- Después de 6 semanas, ninguna página nueva indexada en GSC → revisar errores de crawl
- Después de 3 meses, 0 impresiones para keywords target → revisar calidad técnica (canonicals, noindex accidentales)
- Después de 6 meses, 0 apariciones en ningún LLM → revisar schema.org, citabilidad del contenido, y estrategia de backlinks

---

## 8. Herramientas gratuitas de referencia

| Herramienta | Uso | URL |
|---|---|---|
| Google Search Console | Indexación + keywords + core web vitals | search.google.com/search-console |
| Ahrefs Webmaster Tools | Backlinks + keywords | ahrefs.com/webmaster-tools |
| Google Rich Results Test | Validar schemas | search.google.com/test/rich-results |
| PageSpeed Insights | Core Web Vitals | pagespeed.web.dev |
| Bing Webmaster Tools | Índice Bing + Copilot | bing.com/webmasters |
| Google Alerts | Menciones externas | google.com/alerts |
| Screaming Frog (free, hasta 500 URLs) | Auditoría técnica | screamingfrog.co.uk |
