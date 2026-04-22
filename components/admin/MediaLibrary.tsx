'use client'

import { useState } from 'react'
import { Search, Upload, Copy, Trash2, Play } from 'lucide-react'
import { adminMediaAssets } from '@/lib/adminMockData'

export default function MediaLibrary() {
  const [filter, setFilter] = useState<'images' | 'videos'>('images')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filteredAssets = adminMediaAssets.filter((asset) => {
    const matchesType = filter === 'images' ? asset.type === 'image' : asset.type === 'video'
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="flex-1 ml-64 overflow-auto bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-100 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Media & Assets</h2>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
            <Upload size={18} />
            Upload New
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search media..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-slate-100 px-8 py-4">
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('images')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              filter === 'images'
                ? 'bg-blue-50 text-blue-600'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Images
          </button>
          <button
            onClick={() => setFilter('videos')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              filter === 'videos'
                ? 'bg-blue-50 text-blue-600'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Videos
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {filteredAssets.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-100 border-dashed p-12 text-center">
            <p className="text-slate-600 font-medium mb-2">No {filter} found</p>
            <p className="text-slate-500 text-sm">
              {searchQuery ? 'Try adjusting your search terms' : `Upload ${filter} to get started`}
            </p>
          </div>
        ) : (
          <div className={`grid gap-6 ${filter === 'images' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'}`}>
            {filteredAssets.map((asset) => (
              <div
                key={asset.id}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={asset.thumbnail || asset.url}
                    alt={asset.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    {asset.type === 'video' && (
                      <div className="absolute text-white text-opacity-100">
                        <Play size={32} fill="currentColor" />
                      </div>
                    )}
                    {asset.type === 'image' && (
                      <>
                        <button
                          onClick={() => handleCopyUrl(asset.url, asset.id)}
                          className="p-2 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                          title="Copy URL"
                        >
                          {copiedId === asset.id ? '✓' : <Copy size={18} />}
                        </button>
                        <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors" title="Delete">
                          <Trash2 size={18} />
                        </button>
                      </>
                    )}
                    {asset.type === 'video' && (
                      <>
                        <button
                          onClick={() => handleCopyUrl(asset.url, asset.id)}
                          className="p-2 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                          title="Copy URL"
                        >
                          {copiedId === asset.id ? '✓' : <Copy size={18} />}
                        </button>
                        <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors" title="Delete">
                          <Trash2 size={18} />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4">
                  <p className="font-medium text-slate-900 text-sm truncate">
                    {asset.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {(asset.size / 1024 / 1024).toFixed(1)} MB
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
