import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MessageCircle, ExternalLink, Instagram, Film } from 'lucide-react';

interface ContactLink {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export function Contact() {
  const { t } = useLanguage();

  const contactLinks: ContactLink[] = [
    {
      icon: Mail,
      label: 'contact.email',
      value: 'memarinamalaia@gmail.com',
      href: 'mailto:memarinamalaia@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'contact.wechat',
      value: 'MMaloy',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Film,
      label: 'IMDb',
      href: 'https://www.imdb.com/name/nm12957117/?ref_=ext_shr_lnk',
    },
    {
      icon: ExternalLink,
      label: 'Baidu',
      href: 'https://mbd.baidu.com/ma/s/n6ZIQ1lb',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/marina_malaia__',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-32"
      style={{ backgroundColor: 'var(--theme-bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: 'var(--theme-text)' }}
          >
            {t('contact.title') as string}
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--theme-accent)' }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: 'var(--theme-text)' }}
            >
              {t('contact.connect') as string}
            </h3>
            <p
              className="mb-8 leading-relaxed"
              style={{ color: 'var(--theme-text-muted)' }}
            >
              {t('contact.connect.text') as string}
            </p>

            {/* Direct Contact */}
            <div className="space-y-4 mb-8">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: 'var(--theme-card)',
                      border: `1px solid var(--theme-border)`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--theme-bg-secondary)' }}
                    >
                      <Icon size={20} style={{ color: 'var(--theme-accent)' }} />
                    </div>
                    <div>
                      <p
                        className="text-sm mb-1"
                        style={{ color: 'var(--theme-text-muted)' }}
                      >
                        {t(link.label) as string}
                      </p>
                      <p
                        className="font-medium"
                        style={{ color: 'var(--theme-text)' }}
                      >
                        {link.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: 'var(--theme-text)' }}
            >
              {t('contact.social') as string}
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] group"
                    style={{
                      backgroundColor: 'var(--theme-card)',
                      border: `1px solid var(--theme-border)`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                        style={{ backgroundColor: 'var(--theme-bg-secondary)' }}
                      >
                        <Icon
                          size={20}
                          className="transition-colors duration-300"
                          style={{ color: 'var(--theme-accent)' }}
                        />
                      </div>
                      <span
                        className="font-medium"
                        style={{ color: 'var(--theme-text)' }}
                      >
                        {link.label}
                      </span>
                    </div>
                    <ExternalLink
                      size={18}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: 'var(--theme-accent)' }}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
