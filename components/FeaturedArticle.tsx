import { Article } from '@/lib/mockData'
import Link from 'next/link'

interface FeaturedArticleProps {
  article: Article
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: `url('${article.image}')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="space-y-3">
          {/* Category Badge */}
          <div className="inline-flex">
            <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <Link
            href={`#article-${article.id}`}
            className="block group/title"
          >
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white line-clamp-3 group-hover/title:text-accent transition-colors">
              {article.title}
            </h1>
          </Link>

          {/* Excerpt */}
          <p className="text-white/90 text-sm md:text-base line-clamp-2 max-w-2xl">
            {article.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span className="font-medium">{article.author}</span>
            <span>•</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </div>
    </div>
  )
}
