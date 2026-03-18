import { useLanguage } from '../contexts/LanguageContext';
import { Play, AlertCircle } from 'lucide-react';

interface VideoItem {
  id: string;
  titleKey: string;
  youtubeId: string;
  bilibiliId: string;
}

const videos: VideoItem[] = [
  {
    id: 'operative',
    titleKey: 'reels.operative',
    youtubeId: 'htof_FZGEn8',
    bilibiliId: 'BV1jQw9zNEC8',
  },
  {
    id: 'contemporary',
    titleKey: 'reels.contemporary',
    youtubeId: 'Ezs3WsgUzco',
    bilibiliId: 'BV1TuwRzXEeF',
  },
  {
    id: 'period',
    titleKey: 'reels.period',
    youtubeId: 'grJuCR8_-Gw',
    bilibiliId: 'BV1UKwRz9EKX',
  },
];

export function Reels() {
  const { t, language } = useLanguage();

  const getVideoUrl = (video: VideoItem) => {
    if (language === 'zh') {
      // Bilibili for Chinese users
      if (video.bilibiliId === 'placeholder1') {
        return null; // Placeholder
      }
      return `https://player.bilibili.com/player.html?bvid=${video.bilibiliId}`;
    }
    // YouTube for other languages
    return `https://www.youtube.com/embed/${video.youtubeId}`;
  };

  return (
    <section
      id="reels"
      className="py-20 sm:py-32"
      style={{ backgroundColor: 'var(--theme-bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            {t('reels.title') as string}
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--theme-accent)' }}
          />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {videos.map((video) => {
            const videoUrl = getVideoUrl(video);
            const isPlaceholder = language === 'zh' && video.bilibiliId.startsWith('placeholder');

            return (
              <div
                key={video.id}
                className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--theme-card)',
                  border: `1px solid var(--theme-border)`,
                }}
              >
                {/* Video Title */}
                <div className="p-4 border-b" style={{ borderColor: 'var(--theme-border)' }}>
                  <h3
                    className="text-lg font-semibold flex items-center gap-2"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    <Play size={18} style={{ color: 'var(--theme-accent)' }} />
                    {t(video.titleKey) as string}
                  </h3>
                </div>

                {/* Video Embed */}
                <div className="aspect-video relative">
                  {isPlaceholder ? (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center p-8"
                      style={{ backgroundColor: 'var(--theme-bg)' }}
                    >
                      <AlertCircle
                        size={48}
                        className="mb-4"
                        style={{ color: 'var(--theme-accent)' }}
                      />
                      <p
                        className="text-center text-sm"
                        style={{ color: 'var(--theme-text-muted)' }}
                      >
                        {t('reels.placeholder') as string}
                      </p>
                    </div>
                  ) : (
                    <iframe
                      src={videoUrl || ''}
                      title={t(video.titleKey) as string}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
