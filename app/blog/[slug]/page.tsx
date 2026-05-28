import Link from "next/link"
import { getPost, getAllPostsMeta, getRelatedPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPostsMeta()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Providentia`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateISO,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, post.category)

  return (
    <div className="min-h-screen">

      {/* Barra de progreso de lectura */}
      <div id="reading-progress-bar" />

      {/* ── Cabecera del artículo (linen) ── */}
      <section
        data-theme="light"
        className="bg-[#F7F4EF] px-8 md:px-16 lg:px-24 pt-28 pb-12"
      >
        <div className="max-w-[1200px] mx-auto">

          {/* Breadcrumbs */}
          <nav className="blog-breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="blog-breadcrumb-sep">›</span>
            <Link href="/blog">Insights</Link>
            <span className="blog-breadcrumb-sep">›</span>
            <span className="blog-breadcrumb-current">{post.title}</span>
          </nav>

          <span className="article-header-category">{post.category}</span>
          <h1 className="article-header-title">{post.title}</h1>
          {post.subtitle && (
            <p className="article-header-subtitle">{post.subtitle}</p>
          )}
          <div className="article-header-meta">
            <span>{post.author}</span>
            <span className="article-header-meta-sep">·</span>
            <span>{post.date}</span>
            <span className="article-header-meta-sep">·</span>
            <span>{post.readTime} min de lectura</span>
          </div>
        </div>
      </section>

      {/* ── Cuerpo + sidebar (linen) ── */}
      <section
        data-theme="light"
        className="bg-[#F7F4EF] px-8 md:px-16 lg:px-24 pb-[96px]"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-16 items-start">

            {/* Cuerpo del artículo */}
            <div className="flex-1 min-w-0">
              <div
                id="article-content"
                className="article-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar — sticky en desktop */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="blog-sidebar">
                <span className="blog-toc-label">En este artículo</span>
                <ul id="toc-nav" className="blog-toc-nav" />

                <span className="blog-share-label">Compartir</span>
                <div className="blog-share-btns">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://providentia.es/blog/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-share-btn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://providentia.es/blog/${slug}`)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-share-btn"
                  >
                    X / Twitter
                  </a>
                  <button id="copy-link-btn" className="blog-share-btn">
                    Copiar enlace
                  </button>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── Artículos relacionados (midnight) ── */}
      {related.length > 0 && (
        <section
          data-theme="dark"
          className="bg-[#141820] px-8 md:px-16 lg:px-24 py-[96px]"
        >
          <div className="max-w-[1200px] mx-auto">
            <p className="data-label text-[#4A5568] mb-10">También puede interesarte</p>
            <div className="grid md:grid-cols-2 gap-12">
              {related.map((r) => (
                <div key={r.slug} className="related-card">
                  <div className="related-card-category">{r.category}</div>
                  <Link href={`/blog/${r.slug}`} className="related-card-title">
                    {r.title}
                  </Link>
                  <div className="related-card-meta">
                    {r.date} · {r.readTime} min de lectura
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA de contacto (linen) ── */}
      <section
        data-theme="light"
        className="bg-[#F7F4EF] px-8 md:px-16 lg:px-24 py-[96px] border-t border-[#D6D0C7]"
      >
        <div className="max-w-[1200px] mx-auto max-w-2xl">
          <h2 className="h2-display text-[clamp(28px,3.5vw,44px)] text-[#1A1C20] mb-6">
            ¿Quieres aplicar esto<br />a tu empresa?
          </h2>
          <p className="font-serif text-[18px] text-[#6B6860] leading-[1.8] mb-10">
            Hablemos. Sin compromiso y sin presentaciones de cincuenta diapositivas.
          </p>
          <Link
            href="/#contacto"
            className="cta-label text-[#2B5CE6] border border-[rgba(43,92,230,0.30)] px-8 py-3 hover:bg-[rgba(43,92,230,0.08)] transition-colors inline-block"
          >
            Iniciar conversación
          </Link>
        </div>
      </section>

    </div>
  )
}
