import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Briefcase, Crown } from 'lucide-react';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div
      className="flex items-center rounded-full p-1 shadow-lg"
      style={{
        backgroundColor: 'var(--theme-card)',
        border: `1px solid var(--theme-border)`,
      }}
    >
      <button
        onClick={() => setTheme('operative')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
          theme === 'operative'
            ? 'text-white'
            : 'opacity-60 hover:opacity-100'
        }`}
        style={{
          backgroundColor: theme === 'operative' ? 'var(--theme-accent)' : 'transparent',
        }}
        aria-label="Switch to Operative theme"
      >
        <Briefcase size={14} />
        <span> {t('theme.operative') as string}</span>
      </button>
      <button
        onClick={() => setTheme('period')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
          theme === 'period'
            ? 'text-white'
            : 'opacity-60 hover:opacity-100'
        }`}
        style={{
          backgroundColor: theme === 'period' ? 'var(--theme-accent)' : 'transparent',
        }}
        aria-label="Switch to Period theme"
      >
        <Crown size={14} />
        <span> {t('theme.period') as string}</span>
      </button>
    </div>
  );
}
