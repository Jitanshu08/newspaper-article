# Daily News - Newspaper Website

A modern, responsive newspaper website built with Next.js 16, TypeScript, and Tailwind CSS. Features a public-facing interface displaying articles, blogs, and embedded YouTube videos.

## Design System

- **Colors**: #1a1a1a (dark text), #2b6cb0 (accent blue), white background, grays for secondary elements
- **Typography**: 
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)
- **Responsive**: Mobile-first design with full tablet and desktop support

## Features

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
  - 6 sample articles with categories, images (Unsplash), authors, dates
  - 3 sample video reports with YouTube embed URLs
  - Featured article highlighting
  - Categories: Technology, Business, Environment, Health, Science, Sports
  - Ready for database integration - just swap data source

## Project Structure

```
/app
  /layout.tsx        - Root layout with fonts and metadata
  /page.tsx          - Homepage with all sections
  /globals.css       - Global styles and design tokens

/components
  /Header.tsx        - Navigation header
  /FeaturedArticle.tsx - Hero section
  /ArticlesGrid.tsx  - Article cards grid
  /VideoSection.tsx  - Embedded video section
  /TrendingSidebar.tsx - Trending articles + newsletter
  /Footer.tsx        - Footer with links

/lib
  /mockData.ts       - Sample articles and videos
  /utils.ts          - Utility functions (cn helper)

tailwind.config.ts   - Tailwind configuration with custom colors
```

## Key Features

✅ **Responsive Design** - Mobile, tablet, desktop fully optimized
✅ **YouTube Embeds** - Properly scaled responsive iframe component
✅ **Semantic HTML** - Proper heading hierarchy, article elements, time tags
✅ **Accessibility** - ARIA labels, alt text ready (images from Unsplash)
✅ **Performance** - Next.js optimization, font display:swap
✅ **Dark Mode Ready** - CSS variables support for dark theme
✅ **Search Bar** - Functional search input in header
✅ **Newsletter Signup** - Email collection forms (frontend only)

## Next Steps for Admin Panel

When building the admin panel, you can:

1. Add authentication (Supabase, custom, etc.)
2. Replace `mockData.ts` with database queries
3. Create `/app/admin` routes for:
   - Article management (CRUD)
   - Video management (CRUD)
   - Article preview
   - Article publishing/scheduling

4. Store images:
   - Use Vercel Blob for image uploads
   - Reference by URL in article data

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
