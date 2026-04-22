import { Metadata } from 'next'
import Link from 'next/link'
import { getArticlesByCategory, articles } from '@/lib/mockData'
import { ArticlesGrid } from '@/components/ArticlesGrid'

interface CategoryPageProps {
  params: Promise<{
    categoryName: string
  }>
}

// Format category name for display (capitalize first letter)
function formatCategoryName(name: string): string {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// All available categories from articles
const VALID_CATEGORIES = ['technology', 'business', 'environment', 'health', 'science', 'sports']

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categoryName } = await params
  const formattedName = formatCategoryName(categoryName)

  return {
    title: `${formattedName} News & Articles`,
    description: `Read the latest ${formattedName.toLowerCase()} news, articles, and updates. Stay informed with our comprehensive coverage.`,
    openGraph: {
      title: `${formattedName} News & Articles`,
      description: `Read the latest ${formattedName.toLowerCase()} news, articles, and updates.`,
    },
  }
}

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({
    categoryName: category,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params
  const categoryArticles = getArticlesByCategory(formatCategoryName(categoryName))

  if (categoryArticles.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Category Not Found</h1>
        <p className="text-gray-600 mb-8">No articles found in this category.</p>
        <Link
          href="/"
          className="px-6 py-2 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  const formattedCategoryName = formatCategoryName(categoryName)

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-accent to-secondary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <nav className="mb-6">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/50 mx-2">•</span>
            <span className="text-white">{formattedCategoryName}</span>
          </nav>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              {formattedCategoryName} News
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Stay updated with the latest {formattedCategoryName.toLowerCase()} articles, insights, and breaking news
              from around the world.
            </p>
          </div>

          {/* Filter Info */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-white/80">
              Showing {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        {categoryArticles.length > 0 ? (
          <>
            <ArticlesGrid articles={categoryArticles} />

            {/* Back to Categories */}
            <div className="mt-12 pt-12 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-6">
                Looking for news from a different category?
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {VALID_CATEGORIES.map((cat) => {
                  const formatted = formatCategoryName(cat)
                  const isCurrentCategory = formatted === formattedCategoryName
                  return (
                    <Link
                      key={cat}
                      href={`/category/${cat}`}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        isCurrentCategory
                          ? 'bg-accent text-white'
                          : 'bg-gray-200 text-foreground hover:bg-gray-300'
                      }`}
                    >
                      {formatted}
                    </Link>
                  )
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-6">No articles found in this category yet.</p>
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
