'use client'

import { useState } from 'react'
import { Bold, Italic, Link, Quote, Image, Upload, Eye } from 'lucide-react'
import { AdminArticle } from '@/lib/adminMockData'

interface ArticleEditorProps {
  article?: AdminArticle
}

export default function ArticleEditor({ article }: ArticleEditorProps) {
  const [title, setTitle] = useState(article?.title || '')
  const [content, setContent] = useState(article?.content || '')
  const [metaTitle, setMetaTitle] = useState(article?.seoTitle || '')
  const [metaDescription, setMetaDescription] = useState(article?.seoDescription || '')
  const [status, setStatus] = useState<'draft' | 'ready'>(article?.status === 'published' ? 'ready' : 'draft')
  const [scheduleDate, setScheduleDate] = useState('')

  const metaTitleLength = metaTitle.length
  const metaDescLength = metaDescription.length

  return (
    <div className="flex-1 ml-64 overflow-auto bg-slate-50">
      {/* Editor Toolbar */}
      <div className="sticky top-0 bg-white border-b border-slate-100 px-8 py-4 flex items-center justify-between">
        <h2 className="font-bold text-slate-900">Edit Article</h2>
        <button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <Eye size={18} />
          <span className="text-sm">Preview</span>
        </button>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Canvas (70%) */}
          <div className="col-span-2">
            {/* Title Input */}
            <div className="mb-8">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter article title..."
                className="w-full text-4xl font-serif font-bold text-slate-900 placeholder-slate-300 bg-transparent border-none outline-none focus:outline-none"
              />
            </div>

            {/* Floating Toolbar */}
            <div className="mb-6 flex items-center gap-1 bg-white rounded-xl shadow-md border border-slate-100 p-2 w-fit">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600 hover:text-slate-900" title="Bold">
                <Bold size={18} />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600 hover:text-slate-900" title="Italic">
                <Italic size={18} />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600 hover:text-slate-900" title="Link">
                <Link size={18} />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600 hover:text-slate-900" title="Blockquote">
                <Quote size={18} />
              </button>
              <div className="w-px h-6 bg-slate-200 mx-1" />
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600 hover:text-slate-900" title="Image">
                <Image size={18} />
              </button>
            </div>

            {/* Writing Canvas */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8 min-h-96">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start writing your article here... The editor supports HTML tags like <p>, <h2>, <blockquote>"
                className="w-full h-96 font-sans text-base text-slate-900 placeholder-slate-400 bg-transparent border-none outline-none resize-none focus:outline-none"
              />
            </div>
          </div>

          {/* Right Column - Metadata (30%) */}
          <div className="col-span-1 space-y-6">
            {/* Publishing Card */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">Publishing</h3>

              {/* Status Toggle */}
              <div className="mb-6">
                <label className="text-xs font-semibold text-slate-600 block mb-2">
                  Status
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setStatus('draft')}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      status === 'draft'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Draft
                  </button>
                  <button
                    onClick={() => setStatus('ready')}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      status === 'ready'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Ready
                  </button>
                </div>
              </div>

              {/* Schedule Date */}
              <div className="mb-6">
                <label htmlFor="schedule" className="text-xs font-semibold text-slate-600 block mb-2">
                  Schedule Date (Optional)
                </label>
                <input
                  id="schedule"
                  type="datetime-local"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Publish Button */}
              <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
                Publish Article
              </button>
            </div>

            {/* SEO Card */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">SEO</h3>

              {/* Meta Title */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="metaTitle" className="text-xs font-semibold text-slate-600">
                    Meta Title
                  </label>
                  <span className={`text-xs font-medium ${
                    metaTitleLength > 60 ? 'text-red-600' : 'text-slate-500'
                  }`}>
                    {metaTitleLength}/60
                  </span>
                </div>
                <input
                  id="metaTitle"
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value.slice(0, 60))}
                  placeholder="Enter SEO title"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength={60}
                />
              </div>

              {/* Meta Description */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="metaDesc" className="text-xs font-semibold text-slate-600">
                    Meta Description
                  </label>
                  <span className={`text-xs font-medium ${
                    metaDescLength > 160 ? 'text-red-600' : 'text-slate-500'
                  }`}>
                    {metaDescLength}/160
                  </span>
                </div>
                <textarea
                  id="metaDesc"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value.slice(0, 160))}
                  placeholder="Enter SEO description"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24"
                  maxLength={160}
                />
              </div>
            </div>

            {/* Featured Media Card */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">Featured Image</h3>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
                <Upload size={32} className="mx-auto text-slate-400 mb-3" />
                <p className="text-sm font-medium text-slate-600 mb-1">
                  Drag and drop image here
                </p>
                <p className="text-xs text-slate-500">
                  or click to browse
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
