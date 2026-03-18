import { useLanguage } from '../contexts/LanguageContext';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'ru', label: 'RU' },
] as const;

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex items-center rounded-full p-1 shadow-lg"
      style={{
        backgroundColor: 'var(--theme-card)',
        border: `1px solid var(--theme-border)`,
      }}
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
            language === lang.code
              ? 'text-white'
              : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            backgroundColor: language === lang.code ? 'var(--theme-accent)' : 'transparent',
          }}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
