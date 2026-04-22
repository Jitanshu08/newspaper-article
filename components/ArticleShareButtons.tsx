'use client'

import { Share2 } from 'lucide-react'

interface ArticleShareButtonsProps {
  articleTitle: string
  articleExcerpt: string
}

export default function ArticleShareButtons({ articleTitle, articleExcerpt }: ArticleShareButtonsProps) {
  const handleTwitterShare = () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const text = `${articleTitle} - Read on Daily News`
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
    window.open(twitterUrl, '_blank')
  }

  const handleFacebookShare = () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(facebookUrl, '_blank')
  }

  const handleNativeShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({
        title: articleTitle,
        text: articleExcerpt,
        url: window.location.href,
      })
    }
  }

  return (
    <div className="flex gap-4 flex-wrap">
      <button
        onClick={handleTwitterShare}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Share2 size={18} />
        Twitter
      </button>
      <button
        onClick={handleFacebookShare}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Share2 size={18} />
        Facebook
      </button>
      <button
        onClick={handleNativeShare}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Share2 size={18} />
        Share
      </button>
    </div>
  )
}
