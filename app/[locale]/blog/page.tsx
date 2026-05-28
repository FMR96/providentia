import { getAllPostsMeta, type PostMeta } from "@/lib/blog"
import { getTranslations } from "next-intl/server"
import { getLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "blog_listing" })
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  }
}

function FeaturedCard({ post, readLabel, ctaLabel }: { post: PostMeta; readLabel: string; ctaLabel: string }) {
  return (
    <div
      className="blog-card-featured"
      data-card="true"
      data-category={post.category.toLowerCase()}
    >
      <div className="blog-card-category">{post.category}</div>
      <Link href={`/blog/${post.slug}` as any} className="blog-card-title">
        {post.title}
      </Link>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <div className="blog-card-meta">
        <span>{post.date}</span>
        <span className="blog-card-meta-sep">·</span>
        <span>{post.readTime} {readLabel}</span>
        <span className="blog-card-meta-sep">·</span>
        <span>{post.author}</span>
      </div>
      <Link href={`/blog/${post.slug}` as any} className="blog-card-cta">
        {ctaLabel}
      </Link>
    </div>
  )
}

function ArticleCard({ post, readLabel, ctaLabel }: { post: PostMeta; readLabel: string; ctaLabel: string }) {
  return (
    <div
      className="blog-card"
      data-card="true"
      data-category={post.category.toLowerCase()}
    >
      <div className="blog-card-category">{post.category}</div>
      <Link href={`/blog/${post.slug}` as any} className="blog-card-title">
        {post.title}
      </Link>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <div className="blog-card-meta">
        <span>{post.date}</span>
        <span className="blog-card-meta-sep">·</span>
        <span>{post.readTime} {readLabel}</span>
      </div>
      <Link href={`/blog/${post.slug}` as any} className="blog-card-cta">
        {ctaLabel}
      </Link>
    </div>
  )
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "blog_listing" })
  const posts = getAllPostsMeta(locale)
  const [featured, ...rest] = posts
  const categories = t.raw("categories") as string[]
  const readLabel = t("read_time", { n: "" }).replace("{n}", "").trim()
  const ctaLabel  = t("read_article")

  return (
    <div className="min-h-screen bg-[#F7F4EF] pt-20">

      {/* ── Cabecera ── */}
      <section
        data-theme="light"
        className="bg-[#F7F4EF] px-8 md:px-16 lg:px-24 pt-16 pb-12"
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="data-label text-[#9E9A94] mb-6">{t("tagline")}</p>
          <h1 className="h1-display text-[clamp(40px,6vw,72px)] text-[#1A1C20] mb-10 whitespace-pre-line">
            {t("heading")}
          </h1>

          {/* Filtros */}
          <div className="blog-filters">
            {categories.map((cat, i) => (
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

          {featured && <FeaturedCard post={featured} readLabel={readLabel} ctaLabel={ctaLabel} />}

          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0 mt-2">
              {rest.map((post) => (
                <ArticleCard key={post.slug} post={post} readLabel={readLabel} ctaLabel={ctaLabel} />
              ))}
            </div>
          )}

          <div className="flex justify-center mt-16">
            <button id="load-more-btn" className="blog-load-more" data-hidden="true">
              {t("load_more")}
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
