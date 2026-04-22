export interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  featured?: boolean
}

export interface VideoReport {
  id: string
  title: string
  description: string
  youtubeUrl: string
  thumbnail: string
  author: string
  date: string
  category: string
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Global Climate Summit Reaches Historic Agreement',
    excerpt: 'World leaders unite to combat climate change with ambitious new targets.',
    content: 'In a landmark decision at the Global Climate Summit, world leaders have agreed to unprecedented measures to combat climate change. The agreement sets binding targets for carbon emission reductions across all participating nations.',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b2?w=800&q=80',
    author: 'Sarah Johnson',
    date: '2024-04-20',
    category: 'Environment',
    featured: true,
  },
  {
    id: '2',
    title: 'Tech Innovation: New AI Model Breaks Records',
    excerpt: 'Breakthrough artificial intelligence system shows remarkable performance in language understanding.',
    content: 'Scientists have unveiled a groundbreaking artificial intelligence model that surpasses previous benchmarks in language understanding and generation. The advancement marks a significant leap forward in AI technology.',
    image: 'https://images.unsplash.com/photo-1677442d019cecf31b79b7ce75e81e78a4e17d3b?w=800&q=80',
    author: 'Michael Chen',
    date: '2024-04-19',
    category: 'Technology',
    featured: true,
  },
  {
    id: '3',
    title: 'Stock Market Surges on Economic Data',
    excerpt: 'Markets rally as positive employment figures emerge across major economies.',
    content: 'Global stock markets experienced significant gains today following the release of stronger-than-expected employment data. Economists attribute the optimism to growing consumer confidence and business expansion.',
    image: 'https://images.unsplash.com/photo-1627873649417-af821241a368?w=800&q=80',
    author: 'David Wong',
    date: '2024-04-18',
    category: 'Business',
  },
  {
    id: '4',
    title: 'Space Exploration: New Mission Launches Successfully',
    excerpt: 'International space agencies collaborate on unprecedented deep space mission.',
    content: 'A historic space mission combining efforts from multiple international space agencies launched successfully today. The mission aims to conduct groundbreaking research in the outer regions of our solar system.',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
    author: 'Emma Rodriguez',
    date: '2024-04-17',
    category: 'Science',
  },
  {
    id: '5',
    title: 'Healthcare Breakthrough in Disease Treatment',
    excerpt: 'New treatment approach shows promise in fighting previously untreatable diseases.',
    content: 'Medical researchers have developed a novel treatment approach that shows remarkable effectiveness in combating diseases that have been resistant to traditional therapies.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f31f5e?w=800&q=80',
    author: 'Dr. James Mitchell',
    date: '2024-04-16',
    category: 'Health',
  },
  {
    id: '6',
    title: 'Sports: Championship Final Delivers Drama',
    excerpt: 'Unexpected comeback thrills millions of viewers in championship match.',
    content: 'In an electrifying championship final, the underdog team orchestrated an incredible comeback, securing victory in the final moments of the match. Fans worldwide celebrated the unexpected triumph.',
    image: 'https://images.unsplash.com/photo-1519489b8f63c1e0f7c0f0f0f0f0f0f0?w=800&q=80',
    author: 'Alex Turner',
    date: '2024-04-15',
    category: 'Sports',
  },
]

export const videoReports: VideoReport[] = [
  {
    id: 'v1',
    title: 'Climate Action: How to Make a Difference',
    description: 'A comprehensive guide on individual actions that contribute to climate change mitigation.',
    youtubeUrl: 'https://www.youtube.com/embed/jNgzy5X5YmM',
    thumbnail: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b2?w=400&q=80',
    author: 'Climate Action Team',
    date: '2024-04-20',
    category: 'Environment',
  },
  {
    id: 'v2',
    title: 'AI: The Future is Here',
    description: 'Exploring how artificial intelligence is transforming various industries and our daily lives.',
    youtubeUrl: 'https://www.youtube.com/embed/ARcd2Jjz0Co',
    thumbnail: 'https://images.unsplash.com/photo-1677442d019cecf31b79b7ce75e81e78a4e17d3b?w=400&q=80',
    author: 'Tech Insights',
    date: '2024-04-19',
    category: 'Technology',
  },
  {
    id: 'v3',
    title: 'Financial Markets Explained',
    description: 'Understanding stock markets, investments, and how economic trends affect your finances.',
    youtubeUrl: 'https://www.youtube.com/embed/2lxKmI7pM3c',
    thumbnail: 'https://images.unsplash.com/photo-1627873649417-af821241a368?w=400&q=80',
    author: 'Finance Weekly',
    date: '2024-04-18',
    category: 'Business',
  },
]

export const trendingArticles: Article[] = articles
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3)

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id)
}

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category)
}

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured)
}
