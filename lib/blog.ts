import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsBaseDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  title: string
  subtitle: string
  excerpt: string
  category: string
  author: string
  date: string
  dateISO: string
  readTime: number
}

export interface Post extends PostMeta {
  content: string
  headings: { id: string; text: string }[]
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function extractHeadings(markdownContent: string): { id: string; text: string }[] {
  const headingRegex = /^##\s+(.+)$/gm
  const headings: { id: string; text: string }[] = []
  let match
  while ((match = headingRegex.exec(markdownContent)) !== null) {
    const text = match[1].trim()
    headings.push({ id: slugifyHeading(text), text })
  }
  return headings
}

function addIdsToH2(htmlContent: string): string {
  return htmlContent.replace(/<h2>(.*?)<\/h2>/g, (_, inner: string) => {
    const plainText = inner.replace(/<[^>]+>/g, '')
    return `<h2 id="${slugifyHeading(plainText)}">${inner}</h2>`
  })
}

export async function getPost(slug: string, locale = 'es'): Promise<Post | null> {
  try {
    const postsDirectory = path.join(postsBaseDirectory, locale)
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const processed = await remark()
      .use(html, { sanitize: false })
      .process(content)
    const htmlWithIds = addIdsToH2(processed.toString())
    return {
      slug,
      title:    data.title    ?? '',
      subtitle: data.subtitle ?? '',
      excerpt:  data.excerpt  ?? '',
      category: data.category ?? '',
      author:   data.author   ?? 'Providentia',
      date:     data.date     ?? '',
      dateISO:  data.dateISO  ?? '',
      readTime: Math.max(1, Math.round(countWords(content) / 200)),
      content:  htmlWithIds,
      headings: extractHeadings(content),
    }
  } catch {
    return null
  }
}

export function getAllPostsMeta(locale = 'es'): PostMeta[] {
  const postsDirectory = path.join(postsBaseDirectory, locale)
  if (!fs.existsSync(postsDirectory)) return []
  const files = fs
    .readdirSync(postsDirectory)
    .filter(f => f.endsWith('.md'))
  return files
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      return {
        slug,
        title:    data.title    ?? '',
        subtitle: data.subtitle ?? '',
        excerpt:  data.excerpt  ?? '',
        category: data.category ?? '',
        author:   data.author   ?? 'Providentia',
        date:     data.date     ?? '',
        dateISO:  data.dateISO  ?? '',
        readTime: Math.max(1, Math.round(countWords(content) / 200)),
      } satisfies PostMeta
    })
    .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime())
}

export function getRelatedPosts(currentSlug: string, category: string, count = 2, locale = 'es'): PostMeta[] {
  const all = getAllPostsMeta(locale)
  const sameCategory = all.filter(p => p.slug !== currentSlug && p.category === category)
  if (sameCategory.length >= count) return sameCategory.slice(0, count)
  const others = all.filter(p => p.slug !== currentSlug && p.category !== category)
  return [...sameCategory, ...others].slice(0, count)
}
