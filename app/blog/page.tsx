import Link from "next/link"
import { getAllPostsMeta, type PostMeta } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insights — Providentia",
  description: "Artículos de opinión y tendencias sobre marketing, datos y estrategia empresarial.",
}

const CATEGORIES = ["Todos", "Opinión", "Estrategia", "Tendencias", "Datos"]

function FeaturedCard({ post }: { post: PostMeta }) {
  return (
    <div
      className="blog-card-featured"
      data-card="true"
      data-category={post.category.toLowerCase()}
    >
      <div className="blog-card-category">{post.category}</div>
      <Link href={`/blog/${post.slug}`} className="blog-card-title">
        {post.title}
      </Link>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <div className="blog-card-meta">
        <span>{post.date}</span>
        <span className="blog-card-meta-sep">·</span>
        <span>{post.readTime} min de lectura</span>
        <span className="blog-card-meta-sep">·</span>
        <span>{post.author}</span>
      </div>
      <Link href={`/blog/${post.slug}`} className="blog-card-cta">
        Leer artículo →
      </Link>
    </div>
  )
}

function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <div
      className="blog-card"
      data-card="true"
      data-category={post.category.toLowerCase()}
    >
      <div className="blog-card-category">{post.category}</div>
      <Link href={`/blog/${post.slug}`} className="blog-card-title">
        {post.title}
      </Link>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <div className="blog-card-meta">
        <span>{post.date}</span>
        <span className="blog-card-meta-sep">·</span>
        <span>{post.readTime} min de lectura</span>
      </div>
      <Link href={`/blog/${post.slug}`} className="blog-card-cta">
        Leer artículo →
      </Link>
    </div>
  )
}

export default function BlogPage() {
  const posts = getAllPostsMeta()
  const [featured, ...rest] = posts

  return (
    <div className="min-h-screen bg-[#F7F4EF] pt-20">

      {/* ── Cabecera ── */}
      <section
        data-theme="light"
        className="bg-[#F7F4EF] px-8 md:px-16 lg:px-24 pt-16 pb-12"
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="data-label text-[#9E9A94] mb-6">Providentia · Insights</p>
          <h1 className="h1-display text-[clamp(40px,6vw,72px)] text-[#1A1C20] mb-10">
            Reflexiones sobre<br />datos y estrategia.
          </h1>

          {/* Filtros */}
          <div className="blog-filters">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className="blog-filter-btn"
                data-filter={cat.toLowerCase()}
                data-active={i === 0 ? "true" : undefined}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Artículos ── */}
      <section
        data-theme="light"
        className="bg-[#F7F4EF] px-8 md:px-16 lg:px-24 pb-[96px]"
      >
        <div className="max-w-[1200px] mx-auto">

          {/* Artículo destacado */}
          {featured && <FeaturedCard post={featured} />}

          {/* Grid */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0 mt-2">
              {rest.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {/* Cargar más */}
          <div className="flex justify-center mt-16">
            <button id="load-more-btn" className="blog-load-more" data-hidden="true">
              Cargar más artículos
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
