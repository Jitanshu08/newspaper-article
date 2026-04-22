// Admin Mock Data - Articles with draft/published states
export interface AdminArticle {
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  seoTitle: string
  seoDescription: string
  category: string
  image: string
  author: string
  date: string
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
}

export interface AdminMedia {
  id: string
  name: string
  type: 'image' | 'video'
  url: string
  thumbnail?: string
  uploadedAt: string
  size: number // in bytes
}

export interface AdminAnalytics {
  totalViews: number
  viewsTrend: number // percentage
  publishedArticles: number
  drafts: number
}

export const adminArticles: AdminArticle[] = [
  {
    id: '1',
    title: 'Global Climate Summit Reaches Historic Agreement',
    slug: 'global-climate-summit-historic-agreement',
    excerpt: 'World leaders unite to combat climate change with ambitious new targets.',
    seoTitle: 'Climate Summit 2024: Historic Agreement on Carbon Emissions',
    seoDescription: 'World leaders reach unprecedented agreement on climate change with binding carbon emission reduction targets.',
    content: '<p>In a landmark decision at the Global Climate Summit, world leaders have agreed to unprecedented measures...</p>',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b2?w=800&q=80',
    author: 'Sarah Johnson',
    date: '2024-04-20',
    status: 'published',
    createdAt: '2024-04-19T10:00:00Z',
    updatedAt: '2024-04-20T14:30:00Z',
  },
  {
    id: '2',
    title: 'Tech Innovation: New AI Model Breaks Records',
    slug: 'tech-innovation-ai-model-breaks-records',
    excerpt: 'Breakthrough artificial intelligence system shows remarkable performance.',
    seoTitle: 'Revolutionary AI Model Sets New Records in Language Understanding',
    seoDescription: 'Scientists unveil breakthrough AI model that surpasses previous benchmarks.',
    content: '<p>Scientists have unveiled a groundbreaking artificial intelligence model...</p>',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442d019cecf31b79b7ce75e81e78a4e17d3b?w=800&q=80',
    author: 'Michael Chen',
    date: '2024-04-19',
    status: 'published',
    createdAt: '2024-04-18T09:15:00Z',
    updatedAt: '2024-04-19T16:45:00Z',
  },
  {
    id: '3',
    title: 'The Future of Remote Work: New Trends Emerging',
    slug: 'future-remote-work-trends',
    excerpt: 'Companies adapt to hybrid models as workforce preferences shift.',
    seoTitle: 'Remote Work Trends 2024: What Companies Need to Know',
    seoDescription: 'Explore emerging trends in remote work and how companies are adapting to new workplace models.',
    content: '<p>As companies navigate the post-pandemic landscape...</p>',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    author: 'Jessica Torres',
    date: '2024-04-18',
    status: 'draft',
    createdAt: '2024-04-18T11:20:00Z',
    updatedAt: '2024-04-18T15:00:00Z',
  },
  {
    id: '4',
    title: 'Healthcare Innovation Reshapes Patient Care',
    slug: 'healthcare-innovation-patient-care',
    excerpt: 'New technologies improve diagnosis and treatment outcomes.',
    seoTitle: 'Healthcare Innovation: How Technology is Reshaping Patient Care',
    seoDescription: 'Discover how innovative technologies are transforming patient care and improving health outcomes.',
    content: '<p>The healthcare industry is undergoing a digital transformation...</p>',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f31f5e?w=800&q=80',
    author: 'Dr. James Mitchell',
    date: '2024-04-17',
    status: 'draft',
    createdAt: '2024-04-17T13:45:00Z',
    updatedAt: '2024-04-17T13:45:00Z',
  },
]

export const adminMediaAssets: AdminMedia[] = [
  {
    id: 'img-1',
    name: 'Climate Summit Hero',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b2?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b2?w=200&q=80',
    uploadedAt: '2024-04-15T08:00:00Z',
    size: 245000,
  },
  {
    id: 'img-2',
    name: 'AI Technology Visual',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1677442d019cecf31b79b7ce75e81e78a4e17d3b?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1677442d019cecf31b79b7ce75e81e78a4e17d3b?w=200&q=80',
    uploadedAt: '2024-04-14T10:30:00Z',
    size: 310000,
  },
  {
    id: 'img-3',
    name: 'Remote Work Setup',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80',
    uploadedAt: '2024-04-13T14:15:00Z',
    size: 280000,
  },
  {
    id: 'vid-1',
    name: 'Climate Summit Report',
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    uploadedAt: '2024-04-12T09:00:00Z',
    size: 45000000,
  },
  {
    id: 'vid-2',
    name: 'Tech Breakthrough Interview',
    type: 'video',
    url: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
    uploadedAt: '2024-04-11T11:20:00Z',
    size: 52000000,
  },
]

export const adminAnalytics: AdminAnalytics = {
  totalViews: 24500,
  viewsTrend: 12,
  publishedArticles: 142,
  drafts: 4,
}

export const currentAdmin = {
  name: 'Alex Chen',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  email: 'alex.chen@dailyreport.com',
}
