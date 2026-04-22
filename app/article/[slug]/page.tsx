import { Metadata } from 'next'
import Link from 'next/link'
import { getArticleBySlug, articles } from '@/lib/mockData'
import RichTextRenderer from '@/components/RichTextRenderer'
import { ArticlesGrid } from '@/components/ArticlesGrid'
import ArticleShareButtons from '@/components/ArticleShareButtons'

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    }
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      images: [{ url: article.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seoTitle,
      description: article.seoDescription,
      images: [article.image],
    },
  }
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="px-6 py-2 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  // Get related articles (same category, excluding current article)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3)

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Article Meta Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
              <span>{article.author}</span>
              <span className="text-gray-300">•</span>
              <time dateTime={article.date}>{formattedDate}</time>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
        {/* Article Body */}
        <article className="max-w-3xl">
          <RichTextRenderer content={article.content} className="article-content" />
        </article>

        {/* Social Share Section */}
        <div className="my-12 py-8 border-t border-b border-gray-200">
          <h3 className="text-lg font-serif font-bold mb-4">Share this article</h3>
          <ArticleShareButtons articleTitle={article.title} articleExcerpt={article.excerpt} />
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-serif font-bold mb-8">Related Articles</h2>
            <ArticlesGrid articles={relatedArticles} />
          </div>
        )}
      </div>
    </main>
  )
}
