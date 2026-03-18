import { useLanguage } from '../contexts/LanguageContext';
import { Download, GraduationCap, Languages, Sparkles, Film, Award } from 'lucide-react';

export function Resume() {
  const { t } = useLanguage();

  const skills = [
    { icon: Film, label: 'resume.skills.acting' },
    { icon: Award, label: 'resume.skills.modeling' },
  ];

  const languages = [
    { label: 'resume.languages.russian' },
    { label: 'resume.languages.english' },
    { label: 'resume.languages.mandarin' },
  ];

  const training = [
    { school: 'resume.training.sta', year: '2018' },
    { school: 'resume.training.rgia', year: '2019' },
  ];

  const specialAbilities = [
    { icon: Sparkles, label: 'resume.special.wingchun' },
    { icon: Sparkles, label: 'resume.special.yoga' },
    { icon: Sparkles, label: 'resume.special.driving' },
    { icon: Sparkles, label: 'resume.special.swimming' },
  ];

  return (
    <section
      id="resume"
      className="py-20 sm:py-32"
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            {t('resume.title') as string}
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--theme-accent)' }}
          />
        </div>

        {/* Resume Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Skills */}
          <div
            className="rounded-xl p-6"
            style={{
              backgroundColor: 'var(--theme-card)',
              border: `1px solid var(--theme-border)`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ color: 'var(--theme-text)' }}
            >
              <Sparkles size={24} style={{ color: 'var(--theme-accent)' }} />
              {t('resume.skills.title') as string}
            </h3>
            <div className="space-y-3">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    style={{ color: 'var(--theme-text-muted)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--theme-accent)' }} />
                    <span>{t(skill.label) as string}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Languages */}
          <div
            className="rounded-xl p-6"
            style={{
              backgroundColor: 'var(--theme-card)',
              border: `1px solid var(--theme-border)`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ color: 'var(--theme-text)' }}
            >
              <Languages size={24} style={{ color: 'var(--theme-accent)' }} />
              {t('resume.languages.title') as string}
            </h3>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  style={{ color: 'var(--theme-text-muted)' }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--theme-accent)' }}
                  />
                  <span>{t(lang.label) as string}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Training */}
          <div
            className="rounded-xl p-6"
            style={{
              backgroundColor: 'var(--theme-card)',
              border: `1px solid var(--theme-border)`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ color: 'var(--theme-text)' }}
            >
              <GraduationCap size={24} style={{ color: 'var(--theme-accent)' }} />
              {t('resume.training.title') as string}
            </h3>
            <div className="space-y-4">
              {training.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: 'var(--theme-accent)' }}
                  />
                  <div>
                    <p style={{ color: 'var(--theme-text)' }}>
                      {t(item.school) as string}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: 'var(--theme-text-muted)' }}
                    >
                      {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Abilities */}
          <div
            className="rounded-xl p-6"
            style={{
              backgroundColor: 'var(--theme-card)',
              border: `1px solid var(--theme-border)`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ color: 'var(--theme-text)' }}
            >
              <Award size={24} style={{ color: 'var(--theme-accent)' }} />
              {t('resume.special.title') as string}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {specialAbilities.map((ability, index) => {
                const Icon = ability.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                    style={{ color: 'var(--theme-text-muted)' }}
                  >
                    <Icon size={16} style={{ color: 'var(--theme-accent)' }} />
                    <span className="text-sm">{t(ability.label) as string}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/downloads/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--theme-accent)',
              color: 'white',
            }}
          >
            <Download size={18} />
            <span>{t('resume.download.resume') as string}</span>
            <span
              className="text-xs opacity-70 ml-1"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              ({t('resume.filesize.resume') as string})
            </span>
          </a>
          <a
            href="/downloads/presentation.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--theme-card)',
              color: 'var(--theme-text)',
              border: `1px solid var(--theme-border)`,
            }}
          >
            <Download size={18} />
            <span>{t('resume.download.presentation') as string}</span>
            <span
              className="text-xs opacity-70 ml-1"
              style={{ color: 'var(--theme-text-muted)' }}
            >
              ({t('resume.filesize.presentation') as string})
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
