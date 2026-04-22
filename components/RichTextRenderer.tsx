'use client'

import { useMemo } from 'react'

interface RichTextRendererProps {
  content: string
  className?: string
}

// Simple HTML sanitizer for common tags
function sanitizeHtml(html: string): string {
  const allowedTags = ['p', 'h2', 'h3', 'h4', 'blockquote', 'strong', 'em', 'u', 'br', 'ul', 'ol', 'li', 'a']
  
  const tempDiv = typeof document !== 'undefined' ? document.createElement('div') : null
  if (!tempDiv) return html

  tempDiv.innerHTML = html

  // Remove script tags and other dangerous content
  const scripts = tempDiv.querySelectorAll('script, style, iframe, embed, object')
  scripts.forEach((script) => script.remove())

  // Clean up disallowed attributes
  const allElements = tempDiv.querySelectorAll('*')
  allElements.forEach((element) => {
    const tagName = element.tagName.toLowerCase()
    if (!allowedTags.includes(tagName)) {
      while (element.firstChild) {
        element.parentNode?.insertBefore(element.firstChild, element)
      }
      element.remove()
    } else {
      // Remove dangerous attributes except for specific allowed ones
      Array.from(element.attributes).forEach((attr) => {
        if (!['href', 'target', 'rel'].includes(attr.name)) {
          element.removeAttribute(attr.name)
        }
      })
    }
  })

  return tempDiv.innerHTML
}

export default function RichTextRenderer({ content, className = '' }: RichTextRendererProps) {
  // Sanitize HTML to prevent XSS attacks
  const sanitizedContent = useMemo(() => {
    return sanitizeHtml(content)
  }, [content])

  return (
    <div
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      style={{
        '--tw-prose-body': 'rgb(26, 26, 26)',
        '--tw-prose-headings': 'rgb(26, 26, 26)',
        '--tw-prose-lead': 'rgb(26, 26, 26)',
        '--tw-prose-links': 'rgb(43, 108, 176)',
        '--tw-prose-bold': 'rgb(26, 26, 26)',
        '--tw-prose-counters': 'rgb(43, 108, 176)',
        '--tw-prose-bullets': 'rgb(107, 114, 128)',
        '--tw-prose-hr': 'rgb(229, 231, 235)',
        '--tw-prose-quotes': 'rgb(26, 26, 26)',
        '--tw-prose-quote-borders': 'rgb(43, 108, 176)',
        '--tw-prose-captions': 'rgb(107, 114, 128)',
        '--tw-prose-code': 'rgb(26, 26, 26)',
        '--tw-prose-pre-code': 'rgb(255, 255, 255)',
        '--tw-prose-pre-bg': 'rgb(26, 26, 26)',
        '--tw-prose-th-borders': 'rgb(229, 231, 235)',
        '--tw-prose-td-borders': 'rgb(229, 231, 235)',
      } as React.CSSProperties}
    />
  )
}
