'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'

const categories = [
  { name: 'Home', href: '#' },
  { name: 'Technology', href: '#technology' },
  { name: 'Business', href: '#business' },
  { name: 'Environment', href: '#environment' },
  { name: 'Health', href: '#health' },
  { name: 'Science', href: '#science' },
  { name: 'Sports', href: '#sports' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main header */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 font-serif font-bold text-2xl text-primary hover:text-accent transition-colors"
          >
            Daily News
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Search and Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-muted rounded-md px-3 py-2 gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm outline-none placeholder-muted-foreground w-32 lg:w-48"
              />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-1 pt-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
            {/* Mobile Search */}
            <div className="mt-4 flex items-center bg-muted rounded-md px-3 py-2 gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm outline-none placeholder-muted-foreground w-full"
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
