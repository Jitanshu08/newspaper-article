# Daily News - Newspaper Website

A modern, responsive newspaper website built with Next.js 16, TypeScript, and Tailwind CSS. Features a public-facing interface displaying articles, blogs, and embedded YouTube videos, plus a premium editorial command center admin panel for content management.

## Design System

### Public Site (Editorial Brand)
- **Colors**: #1a1a1a (dark text), #2b6cb0 (accent blue), white background, grays for secondary elements
- **Typography**: 
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)
- **Responsive**: Mobile-first design with full tablet and desktop support

### Admin Panel (Premium SaaS Aesthetic)
- **Colors**: Slate-50 (backgrounds), white (cards), slate-900 (dark text), slate-600 (secondary), blue-600 (primary action), emerald-600 (success), amber-600 (draft)
- **Typography**: Inter (sans-serif) for UI, Playfair Display (serif) for article content previews
- **Components**: Rounded-xl corners, subtle borders (border-slate-100), soft shadows (shadow-sm/md), lucide-react icons
- **Layout**: Fixed 260px sidebar, flex main content, full-height design with scrollable areas
- **Spacing**: Generous padding and gaps following design token scale
- **States**: Active nav items (blue-50 bg, blue-600 text), hover effects on interactive elements, focus rings (ring-blue-500)

## Features

### Admin Panel (Editorial Command Center)

**Access**: `/admin` - Premium SaaS-style interface for managing content, media, and analytics.

#### Admin Components

1. **AdminSidebar** (`components/admin/AdminSidebar.tsx`)
   - Fixed 260px left sidebar with navigation
   - Logo/workspace header
   - 4 main nav items: Dashboard, Write Article, Media Library, Settings
   - Active state highlighting (blue-50 background, blue-600 text)
   - User profile footer with avatar, name, email, and logout button
   - Clean typography and minimal design

2. **AdminDashboard** (`components/admin/AdminDashboard.tsx`)
   - Welcome header with current date
   - Write New Article CTA button
   - Analytics Grid (3 cards):
     - Total Views (24.5K with +12% trend arrow in emerald)
     - Published Articles (142)
     - Drafts (4)
   - Recent Articles Table with columns: Title, Category, Status, Updated Date, Actions
   - Status badges (Published in emerald, Draft in amber)
   - Edit/Delete action buttons
   - Hover effects on table rows and action buttons

3. **ArticleEditor** (`components/admin/ArticleEditor.tsx`)
   - Premium 2-column layout (70% canvas, 30% metadata)
   - Left Column:
     - Large, serif title input (Playfair Display)
     - Floating formatting toolbar (Bold, Italic, Link, Quote, Image)
     - Distraction-free writing canvas with HTML support
   - Right Column (Metadata Stack):
     - Publishing Card: Status toggle (Draft/Ready), Schedule Date input, Publish button
     - SEO Card: Meta Title (60-char counter), Meta Description (160-char counter)
     - Featured Media Card: Drag-drop zone with upload icon
   - Real-time character counters with validation

4. **MediaLibrary** (`components/admin/MediaLibrary.tsx`)
   - Header with "Media & Assets" title and "Upload New" button
   - Search bar with search functionality
   - Filter tabs: Images, Videos
   - Responsive Grid (4 cols on desktop, 2 cols on tablet)
   - Image Cards: Thumbnail with hover overlay
   - Video Cards: YouTube thumbnail with play icon watermark
   - Hover Actions: Copy URL button, Delete trash icon
   - Copied state feedback ("✓" appears briefly)
   - File size display (MB)
   - Empty state messaging

#### Admin Mock Data

- **adminMockData.ts**: Pre-populated articles (4 total: 2 published, 2 drafts), media assets (3 images, 2 videos), analytics data, and admin user profile
- All articles include SEO fields (seoTitle, seoDescription) for editor testing

#### Admin Utilities

- **dateUtils.ts**: Smart date formatting (Today/Yesterday/relative dates) and full date formatting

### SEO & Dynamic Routes

1. **Article Detail Page** (`app/article/[slug]/page.tsx`)
   - Dynamic metadata with generateMetadata for SEO optimization
   - Full-width hero with image, gradient overlay, and article metadata
   - Centered reading layout with RichTextRenderer for rich HTML content
   - Social share buttons (Twitter, Facebook, Web Share API)
   - Related articles section showing 3 articles from same category
   - Proper Open Graph and Twitter card tags

2. **Category Pages** (`app/category/[categoryName]/page.tsx`)
   - Dynamic filtered articles by category
   - Category header with gradient background
   - Breadcrumb navigation
   - Static pre-rendering for all 6 categories
   - Category switcher buttons for easy navigation
   - SEO metadata for each category page

3. **RichTextRenderer** (`components/RichTextRenderer.tsx`)
   - Client-side component for safely rendering HTML content
   - Supports paragraphs, headings (h2-h4), blockquotes, lists, links
   - Built-in XSS protection with HTML sanitization
   - Tailwind prose styling with custom fonts and colors

4. **Article Share Buttons** (`components/ArticleShareButtons.tsx`)
   - Client component for social sharing (Twitter, Facebook, native share)
   - Dynamically generates share URLs with article title and link

### Core Components

1. **Header/Navigation** (`components/Header.tsx`)
   - Sticky header with logo
   - Category navigation (7 categories)
   - Desktop and mobile responsive navigation with hamburger menu
   - Search bar

2. **Featured Article Hero** (`components/FeaturedArticle.tsx`)
   - Full-width hero with image background
   - Gradient overlay for text readability
   - Article title, excerpt, author, and date
   - Hover scale animation on image

3. **Articles Grid** (`components/ArticlesGrid.tsx`)
   - 3-column responsive grid (mobile: 1 col, tablet: 2 col, desktop: 3 col)
   - Article cards with image, category badge, title, excerpt
   - Hover shadow effect
   - Date and author metadata

4. **Video Section** (`components/VideoSection.tsx`)
   - Embedded YouTube videos with responsive aspect ratio (16:9)
   - ResponsiveYouTubeEmbed component handles proper iframe scaling
   - Same card layout as articles for consistency

5. **Trending Sidebar** (`components/TrendingSidebar.tsx`)
   - Top 3 trending articles with numbered badges
   - Newsletter subscription form with gradient background
   - Category quick links

6. **Footer** (`components/Footer.tsx`)
   - Dark footer with company info
   - 4-column layout: About, Quick Links, Categories, Contact Info
   - Social media links
   - Contact details with icons
   - Bottom bar with copyright and policy links

7. **Main Page** (`app/page.tsx`)
   - Orchestrates all components
   - Responsive grid layout (2-column on large screens: articles + sidebar)
   - Newsletter teaser section between content and footer
   - Collapsing sidebar on mobile

### Data

- **Mock Data** (`lib/mockData.ts`)
  - 6 sample articles with full SEO fields: slug, seoTitle, seoDescription
  - Rich HTML content with paragraphs, headings, blockquotes for RichTextRenderer
  - Categories, images (Unsplash), authors, dates
  - 3 sample video reports with YouTube embed URLs
  - Featured article highlighting
  - Categories: Technology, Business, Environment, Health, Science, Sports
  - Helper functions: getArticleById(), getArticleBySlug(), getArticlesByCategory()
  - Ready for database integration - just swap data source

## Project Structure

```
/app
  /layout.tsx                    - Root layout with fonts and metadata
  /page.tsx                      - Homepage with all sections
  /article
    /[slug]/page.tsx             - Dynamic article detail page with SEO
  /category
    /[categoryName]/page.tsx      - Dynamic category page with filtered articles
  /admin
    /page.tsx                    - Admin dashboard entry point
  /globals.css                   - Global styles and design tokens

/components
  # Public Site Components
  /Header.tsx                    - Navigation header
  /FeaturedArticle.tsx           - Hero section
  /ArticlesGrid.tsx              - Article cards grid
  /VideoSection.tsx              - Embedded video section
  /TrendingSidebar.tsx           - Trending articles + newsletter
  /Footer.tsx                    - Footer with links
  /RichTextRenderer.tsx          - Client component for rendering HTML content
  /ArticleShareButtons.tsx       - Client component for social sharing
  
  # Admin Components
  /admin
    /AdminLayout.tsx             - Main admin layout with view switching
    /AdminSidebar.tsx            - Left navigation sidebar
    /AdminDashboard.tsx          - Dashboard overview with analytics
    /ArticleEditor.tsx           - Premium 2-column article editor
    /MediaLibrary.tsx            - Media asset management

/lib
  /mockData.ts                   - Sample public articles with SEO fields
  /adminMockData.ts              - Admin articles, media, analytics, user data
  /dateUtils.ts                  - Smart date formatting utilities
  /utils.ts                      - Utility functions (cn helper)

tailwind.config.ts               - Tailwind configuration with custom colors
```

## Key Features

### Public Site
✅ **Responsive Design** - Mobile, tablet, desktop fully optimized
✅ **Dynamic SEO** - generateMetadata for article and category pages with Open Graph tags
✅ **YouTube Embeds** - Properly scaled responsive iframe component
✅ **Rich Text Content** - HTML-based article content with paragraph, heading, and blockquote styling
✅ **Social Sharing** - Twitter, Facebook, and native Web Share API integration
✅ **Dynamic Routes** - Slug-based article pages and category filtering
✅ **Semantic HTML** - Proper heading hierarchy, article elements, time tags
✅ **Accessibility** - ARIA labels, alt text ready (images from Unsplash)
✅ **Performance** - Next.js optimization, static generation, font display:swap
✅ **Security** - HTML sanitization in RichTextRenderer to prevent XSS
✅ **Dark Mode Ready** - CSS variables support for dark theme
✅ **Search Bar** - Functional search input in header
✅ **Newsletter Signup** - Email collection forms (frontend only)

### Admin Panel
✅ **Premium SaaS Interface** - Minimal borders, soft shadows, clean typography (Notion/Stripe aesthetic)
✅ **Dashboard Analytics** - Real-time view counts, article metrics, draft counter
✅ **Article Editor** - 2-column premium layout with distraction-free writing, formatting toolbar
✅ **SEO Tools** - Meta title/description inputs with character counters, real-time validation
✅ **Media Library** - Image/video asset management with search, filter tabs, copy URL functionality
✅ **View Switching** - Seamless navigation between Dashboard, Editor, Media, Settings
✅ **Status Management** - Draft/Ready toggle, schedule date picker, publish workflow
✅ **Mock Data** - Pre-populated articles, media assets, and analytics for testing
✅ **Responsive Tables** - Sortable content display with hover actions, status badges
✅ **User Profile** - Sidebar footer with avatar, name, email, logout option

## Next Steps for Production

### Authentication & Database
1. Add authentication (Supabase Auth, custom JWT, etc.)
2. Replace `adminMockData.ts` and `mockData.ts` with database queries
3. Implement role-based access control (Editor, Admin, Viewer roles)
4. Secure admin routes with middleware authentication

### Content Management Enhancement
1. Implement full CRUD operations for articles
2. Add rich text editor (e.g., TipTap, ProseMirror) for better content authoring
3. Create article draft versioning and auto-save
4. Implement real-time collaboration features
5. Add article preview mode (live preview of public-facing page)

### Media Management
1. Integrate Vercel Blob for drag-drop image uploads
2. Implement image optimization and CDN caching
3. Add YouTube URL validation and video metadata fetching
4. Create media folders/organization system

### Publishing Workflow
1. Implement scheduled publishing with cron jobs
2. Add article status workflow (Draft → Scheduled → Published → Archived)
3. Create publish notifications/webhooks
4. Implement automatic sitemap generation

### Analytics & Reporting
1. Connect to analytics provider (Google Analytics, Vercel Analytics)
2. Add real-time view counters
3. Create article performance reports
4. Add traffic heatmaps and reader engagement metrics

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Deployment**: Vercel-ready

## Development

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The site is fully functional and ready for customization. All components are modular and can be easily modified or extended as needed.
