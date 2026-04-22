import { VideoReport } from '@/lib/mockData'

interface VideoSectionProps {
  videos: VideoReport[]
}

function ResponsiveYouTubeEmbed({ youtubeUrl }: { youtubeUrl: string }) {
  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg bg-muted">
      <iframe
        src={youtubeUrl}
        className="absolute top-0 left-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video report"
      />
    </div>
  )
}

export function VideoSection({ videos }: VideoSectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Video Reports
        </h2>
        <p className="text-muted-foreground">
          Watch our latest video reports and in-depth coverage
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <article
            key={video.id}
            className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Video Embed */}
            <div className="p-4 bg-muted">
              <ResponsiveYouTubeEmbed youtubeUrl={video.youtubeUrl} />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow space-y-3">
              {/* Category Badge */}
              <div>
                <span className="inline-block bg-muted text-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                  {video.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                {video.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm line-clamp-2 flex-grow">
                {video.description}
              </p>

              {/* Meta Information */}
              <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium">{video.author}</span>
                <time dateTime={video.date}>
                  {new Date(video.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
