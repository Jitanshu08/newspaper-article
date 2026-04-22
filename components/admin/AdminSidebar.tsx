'use client'

import Link from 'next/link'
import { LayoutDashboard, PenTool, Image, Settings, LogOut } from 'lucide-react'
import { currentAdmin } from '@/lib/adminMockData'

interface AdminSidebarProps {
  activeView: 'dashboard' | 'editor' | 'media' | 'settings'
  onViewChange: (view: 'dashboard' | 'editor' | 'media' | 'settings') => void
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'editor', label: 'Write Article', icon: PenTool },
  { id: 'media', label: 'Media Library', icon: Image },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export default function AdminSidebar({ activeView, onViewChange }: AdminSidebarProps) {
  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-100 flex flex-col fixed left-0 top-0">
      {/* Header / Logo */}
      <div className="px-6 py-8 border-b border-slate-100">
        <h1 className="font-serif text-xl font-bold text-slate-900">
          The Daily Report
        </h1>
        <p className="text-xs text-slate-500 mt-1">Editorial Workspace</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeView === item.id
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* User Profile Footer */}
      <div className="px-4 py-6 border-t border-slate-100">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={currentAdmin.avatar}
            alt={currentAdmin.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">
              {currentAdmin.name}
            </p>
            <p className="text-xs text-slate-500 truncate">
              {currentAdmin.email}
            </p>
          </div>
        </div>
        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
          <LogOut size={16} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  )
}
