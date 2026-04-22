import { Article } from '@/lib/mockData'
import Link from 'next/link'
import Image from 'next/image'

interface ArticlesGridProps {
  articles: Article[]
}

export function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <article
          key={article.id}
          className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden bg-muted">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url('${article.image}')`,
              }}
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-grow space-y-3">
            {/* Category Badge */}
            <div>
              <span className="inline-block bg-muted text-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <Link
              href={`#article-${article.id}`}
              className="group/title block"
            >
              <h3 className="font-serif text-lg font-bold text-foreground line-clamp-2 group-hover/title:text-accent transition-colors">
                {article.title}
              </h3>
            </Link>

            {/* Excerpt */}
            <p className="text-muted-foreground text-sm line-clamp-2 flex-grow">
              {article.excerpt}
            </p>

            {/* Meta Information */}
            <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium">{article.author}</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
