'use client'

import { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'
import ArticleEditor from './ArticleEditor'
import MediaLibrary from './MediaLibrary'
import { AdminArticle } from '@/lib/adminMockData'

export default function AdminLayout() {
  const [activeView, setActiveView] = useState<'dashboard' | 'editor' | 'media' | 'settings'>('dashboard')
  const [selectedArticle, setSelectedArticle] = useState<AdminArticle | undefined>()

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <AdminSidebar activeView={activeView} onViewChange={setActiveView} />

      {/* Main Content */}
      <div className="flex-1">
        {activeView === 'dashboard' && (
          <AdminDashboard onEditArticle={(article) => {
            setSelectedArticle(article)
            setActiveView('editor')
          }} />
        )}
        {activeView === 'editor' && <ArticleEditor article={selectedArticle} />}
        {activeView === 'media' && <MediaLibrary />}
        {activeView === 'settings' && (
          <div className="flex-1 ml-64 overflow-auto bg-slate-50 p-8">
            <div className="bg-white rounded-xl border border-slate-100 p-8 max-w-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Settings</h2>
              <p className="text-slate-600">Settings page coming soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
