import { Article } from '@/lib/mockData'
import Link from 'next/link'

interface TrendingSidebarProps {
  articles: Article[]
}

export function TrendingSidebar({ articles }: TrendingSidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Trending Articles */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Trending Now
          </h3>
          <p className="text-muted-foreground text-sm">
            Most popular stories this week
          </p>
        </div>

        <div className="space-y-4">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={`#article-${article.id}`}
              className="group flex gap-4 pb-4 border-b border-border last:pb-0 last:border-b-0 hover:no-underline"
            >
              {/* Trending Number */}
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-sm">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <h4 className="font-serif font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-accent to-secondary rounded-lg p-6 text-accent-foreground space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-bold">
            Stay Updated
          </h3>
          <p className="text-sm text-accent-foreground/90">
            Get the latest news delivered to your inbox
          </p>
        </div>

        <form className="space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-white text-accent font-semibold hover:bg-white/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-3">
        <h3 className="font-serif text-lg font-bold text-foreground">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Technology', 'Business', 'Environment', 'Health', 'Science', 'Sports'].map(
            (category) => (
              <Link
                key={category}
                href={`#${category.toLowerCase()}`}
                className="px-3 py-1 rounded-full bg-muted text-foreground text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {category}
              </Link>
            )
          )}
        </div>
      </div>
    </aside>
  )
}
