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
  slug: string
  seoTitle: string
  seoDescription: string
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
    slug: 'global-climate-summit-historic-agreement',
    excerpt: 'World leaders unite to combat climate change with ambitious new targets.',
    seoTitle: 'Climate Summit 2024: Historic Agreement on Carbon Emissions',
    seoDescription: 'World leaders reach unprecedented agreement on climate change with binding carbon emission reduction targets. Learn what this means for the future.',
    content: `<p>In a landmark decision at the Global Climate Summit, world leaders have agreed to unprecedented measures to combat climate change. The agreement sets binding targets for carbon emission reductions across all participating nations, marking the most ambitious climate action ever undertaken on a global scale.</p>
    <h2>Key Agreements Reached</h2>
    <p>The summit concluded with several major breakthroughs:</p>
    <blockquote>We stand united in our commitment to protect our planet for future generations. This agreement represents a turning point in our collective fight against climate change.</blockquote>
    <p>Nations have committed to reducing their carbon emissions by 50% by 2030 and achieving net-zero emissions by 2050. The agreement also establishes a $100 billion annual climate fund to help developing nations transition to clean energy.</p>
    <h2>What This Means for You</h2>
    <p>These commitments will drive innovation in renewable energy, electric vehicles, and sustainable technology. Consumers can expect new green products and incentives to make environmentally conscious choices more affordable and accessible.</p>`,
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b2?w=800&q=80',
    author: 'Sarah Johnson',
    date: '2024-04-20',
    category: 'Environment',
    featured: true,
  },
  {
    id: '2',
    title: 'Tech Innovation: New AI Model Breaks Records',
    slug: 'tech-innovation-ai-model-breaks-records',
    excerpt: 'Breakthrough artificial intelligence system shows remarkable performance in language understanding.',
    seoTitle: 'Revolutionary AI Model Sets New Records in Language Understanding',
    seoDescription: 'Scientists unveil breakthrough AI model that surpasses previous benchmarks. Discover how this advancement will impact artificial intelligence.',
    content: `<p>Scientists have unveiled a groundbreaking artificial intelligence model that surpasses previous benchmarks in language understanding and generation. The advancement marks a significant leap forward in AI technology, with implications spanning multiple industries from healthcare to education.</p>
    <h2>Breaking Through Previous Limitations</h2>
    <p>The new model demonstrates unprecedented accuracy in understanding context and nuance in human language. It can process complex instructions and generate coherent, contextually appropriate responses with minimal errors.</p>
    <blockquote>This breakthrough represents a fundamental shift in how we approach artificial intelligence. We're not just building faster systems; we're building smarter ones.</blockquote>
    <h2>Real-World Applications</h2>
    <p>The technology is already being tested in various fields including medical diagnosis assistance, legal document review, and customer service automation. Early results suggest efficiency improvements of up to 40% in professional workflows.</p>`,
    image: 'https://images.unsplash.com/photo-1677442d019cecf31b79b7ce75e81e78a4e17d3b?w=800&q=80',
    author: 'Michael Chen',
    date: '2024-04-19',
    category: 'Technology',
    featured: true,
  },
  {
    id: '3',
    title: 'Stock Market Surges on Economic Data',
    slug: 'stock-market-surges-economic-data',
    excerpt: 'Markets rally as positive employment figures emerge across major economies.',
    seoTitle: 'Stock Markets Rally on Strong Employment Data and Economic Growth',
    seoDescription: 'Global markets experience significant gains following positive economic indicators. Explore what this means for investors and the economy.',
    content: `<p>Global stock markets experienced significant gains today following the release of stronger-than-expected employment data. Economists attribute the optimism to growing consumer confidence and business expansion across multiple sectors.</p>
    <h2>Market Performance</h2>
    <p>Major indices rose by an average of 2.5% as investors responded positively to the economic news. Technology stocks led the charge, followed by financial and consumer discretionary sectors.</p>
    <blockquote>Consumer confidence is at a two-year high, and that's translating into real economic activity. We're seeing genuine momentum in the economy.</blockquote>
    <p>Unemployment figures fell to their lowest level in five years, signaling a robust labor market and strong business sentiment for future expansion.</p>
    <h2>What Investors Should Know</h2>
    <p>Financial advisors recommend maintaining a diversified portfolio while taking advantage of market strength. The positive economic outlook suggests sustained growth in the coming quarters, though some caution about potential interest rate adjustments.</p>`,
    image: 'https://images.unsplash.com/photo-1627873649417-af821241a368?w=800&q=80',
    author: 'David Wong',
    date: '2024-04-18',
    category: 'Business',
  },
  {
    id: '4',
    title: 'Space Exploration: New Mission Launches Successfully',
    slug: 'space-exploration-new-mission-launches',
    excerpt: 'International space agencies collaborate on unprecedented deep space mission.',
    seoTitle: 'Historic Space Mission Launches: International Collaboration in Action',
    seoDescription: 'Multiple space agencies unite for unprecedented deep space exploration mission. Learn about the goals and significance of this launch.',
    content: `<p>A historic space mission combining efforts from multiple international space agencies launched successfully today. The mission aims to conduct groundbreaking research in the outer regions of our solar system and beyond.</p>
    <h2>Mission Overview</h2>
    <p>The spacecraft carries advanced instruments designed to study cosmic radiation, detect potential biosignatures, and map previously unexplored regions of space. This represents the most ambitious collaborative effort in space exploration history.</p>
    <blockquote>This mission symbolizes what humanity can achieve when we work together toward a common goal. The scientific discoveries awaiting us are bound to transform our understanding of the universe.</blockquote>
    <h2>Expected Discoveries</h2>
    <p>Scientists predict the mission could provide crucial data about the formation of galaxies and the conditions necessary for life. The journey will take five years, with data transmissions expected to continue for decades.</p>`,
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
    author: 'Emma Rodriguez',
    date: '2024-04-17',
    category: 'Science',
  },
  {
    id: '5',
    title: 'Healthcare Breakthrough in Disease Treatment',
    slug: 'healthcare-breakthrough-disease-treatment',
    excerpt: 'New treatment approach shows promise in fighting previously untreatable diseases.',
    seoTitle: 'Revolutionary Treatment Approach Offers Hope for Untreatable Diseases',
    seoDescription: 'Medical researchers develop groundbreaking treatment that shows promise against previously untreatable diseases. Get the details.',
    content: `<p>Medical researchers have developed a novel treatment approach that shows remarkable effectiveness in combating diseases that have been resistant to traditional therapies. Clinical trials demonstrate a 75% success rate, offering hope to millions of patients worldwide.</p>
    <h2>How the Treatment Works</h2>
    <p>The breakthrough utilizes a combination of immunotherapy and genetic targeting to attack disease at the cellular level. By customizing treatment to each patient's unique genetic profile, doctors can maximize effectiveness while minimizing side effects.</p>
    <blockquote>This treatment represents a paradigm shift in how we approach disease. Rather than treating symptoms, we're now treating the root cause at a genetic level.</blockquote>
    <h2>Timeline to Availability</h2>
    <p>The treatment is expected to receive regulatory approval within 18 months. Initial rollout will prioritize patients with the most severe cases, with broader availability following as production scales up.</p>`,
    image: 'https://images.unsplash.com/photo-1576091160550-112173f31f5e?w=800&q=80',
    author: 'Dr. James Mitchell',
    date: '2024-04-16',
    category: 'Health',
  },
  {
    id: '6',
    title: 'Sports: Championship Final Delivers Drama',
    slug: 'sports-championship-final-delivers-drama',
    excerpt: 'Unexpected comeback thrills millions of viewers in championship match.',
    seoTitle: 'Championship Final: Underdog Team Stages Incredible Comeback Victory',
    seoDescription: 'In a thrilling championship match, the underdog team orchestrates an incredible comeback. Relive the dramatic moments of this historic sports event.',
    content: `<p>In an electrifying championship final, the underdog team orchestrated an incredible comeback, securing victory in the final moments of the match. Fans worldwide celebrated the unexpected triumph, making it one of the most memorable sporting events of the year.</p>
    <h2>How the Comeback Happened</h2>
    <p>Trailing by 15 points with just ten minutes remaining, the underdog team refused to quit. Strategic adjustments to their defensive formation and aggressive offensive plays gradually closed the gap.</p>
    <blockquote>Believe in yourself and never give up. That's what we showed the world today. Every point counts when you have heart and determination.</blockquote>
    <h2>The Winning Moment</h2>
    <p>In the final seconds of the match, a spectacular play resulted in the winning point, sending the crowd into euphoria. The team&apos;s dedication and perseverance throughout the season paid off in the most dramatic way possible.</p>`,
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

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug)
}

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category)
}

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured)
}
