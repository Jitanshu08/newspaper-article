'use client'

import { adminArticles, adminAnalytics, AdminArticle } from '@/lib/adminMockData'
import { Edit, Trash2, TrendingUp } from 'lucide-react'
import { formatDate } from '@/lib/dateUtils'

interface AdminDashboardProps {
  onEditArticle?: (article: AdminArticle) => void
}

const getStatusStyles = (status: string) => {
  if (status === 'published') {
    return 'bg-emerald-50 text-emerald-700 border border-emerald-200'
  }
  return 'bg-amber-50 text-amber-700 border border-amber-200'
}

const getStatusLabel = (status: string) => {
  return status === 'published' ? 'Published' : 'Draft'
}

export default function AdminDashboard({ onEditArticle }: AdminDashboardProps) {
  const recentArticles = [...adminArticles].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  )

  return (
    <div className="flex-1 ml-64 overflow-auto bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-100 px-8 py-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Welcome back, {adminAnalytics ? 'Editor' : 'There'}
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
          Write New Article
        </button>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Total Views */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-slate-600 text-sm font-medium">Total Views</p>
                <h3 className="text-3xl font-bold text-slate-900 mt-2">
                  {(adminAnalytics.totalViews / 1000).toFixed(1)}K
                </h3>
              </div>
              <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full">
                <TrendingUp size={16} />
                <span className="text-sm font-medium">+{adminAnalytics.viewsTrend}%</span>
              </div>
            </div>
            <p className="text-slate-500 text-xs">Last 30 days</p>
          </div>

          {/* Card 2: Published Articles */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
            <p className="text-slate-600 text-sm font-medium mb-4">Published Articles</p>
            <h3 className="text-3xl font-bold text-slate-900">
              {adminAnalytics.publishedArticles}
            </h3>
            <p className="text-slate-500 text-xs mt-4">All time</p>
          </div>

          {/* Card 3: Drafts */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
            <p className="text-slate-600 text-sm font-medium mb-4">Drafts</p>
            <h3 className="text-3xl font-bold text-slate-900">
              {adminAnalytics.drafts}
            </h3>
            <p className="text-slate-500 text-xs mt-4">In progress</p>
          </div>
        </div>

        {/* Recent Content Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-900">Recent Articles</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900">
                    Updated
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentArticles.map((article) => (
                  <tr
                    key={article.id}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-slate-900 text-sm">
                          {article.title}
                        </p>
                        <p className="text-slate-500 text-xs mt-1">
                          by {article.author}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {article.category}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusStyles(
                          article.status
                        )}`}
                      >
                        {getStatusLabel(article.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {formatDate(article.updatedAt)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => onEditArticle?.(article)}
                          className="p-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                        >
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
