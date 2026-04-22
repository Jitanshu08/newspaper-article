import { Header } from '@/components/Header'
import { FeaturedArticle } from '@/components/FeaturedArticle'
import { ArticlesGrid } from '@/components/ArticlesGrid'
import { VideoSection } from '@/components/VideoSection'
import { TrendingSidebar } from '@/components/TrendingSidebar'
import { Footer } from '@/components/Footer'
import {
  articles,
  videoReports,
  trendingArticles,
  getFeaturedArticles,
} from '@/lib/mockData'

export default function Home() {
  const featuredArticles = getFeaturedArticles()
  const regularArticles = articles.filter(article => !article.featured)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Featured Section */}
        <section className="container mx-auto px-4 py-8">
          {featuredArticles.length > 0 && (
            <FeaturedArticle article={featuredArticles[0]} />
          )}
        </section>

        {/* Main Grid Layout */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Articles */}
            <div className="lg:col-span-2 space-y-12">
              {/* Latest Articles Section */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Latest Articles
                  </h2>
                  <p className="text-muted-foreground">
                    Stay informed with our latest news and in-depth reporting
                  </p>
                </div>

                <ArticlesGrid articles={regularArticles} />
              </div>

              {/* Video Section */}
              <VideoSection videos={videoReports} />
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <TrendingSidebar articles={trendingArticles} />
            </div>
          </div>
        </section>

        {/* Newsletter Teaser */}
        <section className="bg-muted py-12 md:py-16 mt-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Never Miss a Story
              </h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter and get the latest news delivered to your inbox every morning.
              </p>
              <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-secondary transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
