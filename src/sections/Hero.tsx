import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, Film } from 'lucide-react';

export function Hero() {
  const { theme } = useTheme();
  const { t, language } = useLanguage();

  const heroImage = theme === 'operative'
    ? '/images/operative/main.jpg'
    : '/images/period/main.jpeg';

  const displayName = language === 'zh' ? '金美泠' : t('hero.name');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: theme === 'operative' ? 'center 20%' : 'center top',
          }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background:
              theme === 'operative'
                ? 'linear-gradient(to right, rgba(13, 17, 23, 0.95) 0%, rgba(13, 17, 23, 0.7) 40%, rgba(13, 17, 23, 0.3) 100%)'
                : 'linear-gradient(to right, rgba(250, 248, 245, 0.95) 0%, rgba(250, 248, 245, 0.7) 40%, rgba(250, 248, 245, 0.3) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Name */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
            style={{ color: 'var(--theme-text)' }}
          >
            {displayName}
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl sm:text-2xl mb-8 tracking-wide"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            {t('hero.subtitle') as string}
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--theme-accent-transparent)',
              color: 'white',
            }}
          >
            <Film size={18} />
            {t('hero.cta') as string}
          </a>
        </div>

        {/* About Section */}
        <div className="mt-16 max-w-xl">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            {t('hero.about.title') as string}
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            {t('hero.about.text') as string}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a
          href="#reels"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#reels')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ color: 'var(--theme-accent)' }}
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
