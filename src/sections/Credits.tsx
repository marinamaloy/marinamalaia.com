import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Film, Tv, Clapperboard, Star, Calendar, User, Tag, Monitor,ExternalLink } from 'lucide-react';

interface Project {
  year: string;
  title: string;
  titleChinese: string;
  category: string;
  role: string;
  roleType: string;
  genre: string;
  platform: string;
  released: boolean;
  image?: string;
  link?: string;           // Ссылка на проект
  backgroundImage?: string; // Путь к фоновому изображению
}

const projects: Project[] = [
  {
    year: '2025',
    title: 'Limited Time, Infinite Pull',
    titleChinese: '',
    category: 'Short Drama',
    role: 'Luna',
    roleType: 'Lead',
    genre: 'Short Drama',
    platform: 'Short Max',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2024',
    title: 'Big Shot',
    titleChinese: '',
    category: 'Short Drama',
    role: 'Chloe',
    roleType: 'Lead',
    genre: 'Short Drama',
    platform: 'Short Max',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2025',
    title: 'When the Love Shot Backwards',
    titleChinese: '',
    category: 'Short Drama',
    role: 'Alex',
    roleType: 'Lead',
    genre: 'Short Drama',
    platform: 'Net Short',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2024',
    title: 'Mommy by Day, CEO\'s Wife by Night',
    titleChinese: '',
    category: 'Short Drama',
    role: 'Jessica',
    roleType: 'Lead',
    genre: 'Short Drama',
    platform: 'FlickReels',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2023',
    title: 'The Lost Heiress of Bilionaire Family',
    titleChinese: '',
    category: 'Short Drama',
    role: 'Emma',
    roleType: 'Lead',
    genre: 'Short Drama',
    platform: 'FlickReels',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2025',
    title: 'The Queen Reclaims her Throne',
    titleChinese: '',
    category: 'Short Drama',
    role: 'Rachel',
    roleType: 'Lead',
    genre: 'Short Drama',
    platform: 'Happy Short',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2025',
    title: 'Death Sniper',
    titleChinese: '生死狙杀',
    category: 'TV Movie',
    role: 'Galina',
    roleType: 'Lead',
    genre: 'Action / Sniper',
    platform: 'CCTV-6',
    released: false,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2026',
    title: 'Ball Lightning',
    titleChinese: '球状闪电',
    category: 'TV Series',
    role: 'Nadya',
    roleType: 'Recurring',
    genre: 'Science Fiction',
    platform: 'iQIYI',
    released: false,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2021',
    title: 'Yueluo Academy',
    titleChinese: '月落书院',
    category: 'TV Series',
    role: 'Nala',
    roleType: 'Regular',
    genre: 'Traditional Comedy',
    platform: 'Unreleased',
    released: false,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2021',
    title: 'Ebola Frontline',
    titleChinese: '埃博拉前线',
    category: 'TV Series',
    role: 'Isabella',
    roleType: 'Recurring',
    genre: 'Medical Drama',
    platform: 'Tencent Video',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2020',
    title: 'The Centimeter of Love',
    titleChinese: '爱的厘米',
    category: 'TV Series',
    role: 'Jessica',
    roleType: 'Co-Star',
    genre: 'Urban Drama',
    platform: 'Mango TV',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  
  {
    year: '2021',
    title: 'Karl Marx',
    titleChinese: '卡尔·马克思',
    category: 'Cinema Movie',
    role: 'Jenny',
    roleType: 'Lead',
    genre: 'Historical Drama',
    platform: 'Cinema',
    released: false,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2024',
    title: 'This Heart Is My Home',
    titleChinese: '此心安处是故乡',
    category: 'TV Movie',
    role: 'Natalia',
    roleType: 'Lead',
    genre: 'Olympic Drama',
    platform: 'CCTV-6',
    released: true,
    link: 'https://vip.1905.com/play/1657547.shtml?__hz=1aa48fc4880bb0c9&fr=baidu_aladdin_vip_add', // ← Вставьте ссылку здесь
  backgroundImage: '/images/credits/heart.jpeg', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2021',
    title: 'Mars Mutation',
    titleChinese: '火星异变',
    category: 'Internet Movie',
    role: 'Anna',
    roleType: 'Supporting',
    genre: 'Sci-fi Thriller',
    platform: 'iQIYI',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2021',
    title: 'Shark Escape',
    titleChinese: '鲨口逃生',
    category: 'Internet Movie',
    role: 'Marina',
    roleType: 'Supporting',
    genre: 'Disaster Thriller',
    platform: 'iQIYI',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2023',
    title: 'Harbin Memories',
    titleChinese: '哈尔滨往事之不归之路',
    category: 'TV Series',
    role: 'Emma Hohenzollern',
    roleType: 'Regular',
    genre: 'Historical Epic',
    platform: 'CCTV-6',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2022',
    title: 'The Eternal Memory',
    titleChinese: '永远的记忆',
    category: 'Internet Movie',
    role: 'Sula',
    roleType: 'Lead',
    genre: 'Military War',
    platform: 'CCTV-6',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2030',
    title: 'Alaten Taolai',
    titleChinese: '阿拉腾陶来',
    category: 'Cinema Movie',
    role: 'Ina / Huji',
    roleType: 'Lead',
    genre: 'Theatrical Drama',
    platform: 'Unreleased',
    released: false,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  
  {
    year: '2024',
    title: 'Escape from the 21st Century',
    titleChinese: '从21世纪安全撤离',
    category: 'Cinema Movie',
    role: 'Han Guang\'s Girlfriend',
    roleType: 'Small role',
    genre: 'Romantic Sci-fi',
    platform: 'Cinema',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2019',
    title: 'Macau Family',
    titleChinese: '澳门人家',
    category: 'TV Series',
    role: 'Ella',
    roleType: 'Regular',
    genre: 'Family Drama',
    platform: 'CCTV-1',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '/images/credits/aomen.jpg', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2021',
    title: 'Mystery of Antiques III',
    titleChinese: '古董局中局之掠宝清单',
    category: 'TV Series',
    role: 'Grace',
    roleType: 'Recurring',
    genre: 'Suspense Drama',
    platform: 'Tencent Video',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2017',
    title: 'Green love',
    titleChinese: '青恋',
    category: 'TV Series',
    role: 'Jacklin',
    roleType: 'Regular',
    genre: 'Rural Drama',
    platform: 'CCTV-1',
    released: true,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
  {
    year: '2030',
    title: 'New Love and Passion',
    titleChinese: '新万水千山总是情',
    category: 'TV Series',
    role: 'Jenny',
    roleType: 'Regular',
    genre: 'Period Drama',
    platform: 'iQIYI',
    released: false,
    link: '', // ← Вставьте ссылку здесь
  backgroundImage: '', // ← Вставьте путь к изображению здесь
  },
];

type FilterType = 'all' | 'film' | 'television' | 'short';

const filters: { key: FilterType; labelKey: string; icon: typeof Film }[] = [
  { key: 'all', labelKey: 'credits.filter.all', icon: Star },
  { key: 'film', labelKey: 'credits.filter.film', icon: Film },
  { key: 'television', labelKey: 'credits.filter.television', icon: Tv },
  { key: 'short', labelKey: 'credits.filter.short', icon: Clapperboard },
];

export function Credits() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>('film');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'film') return project.category === 'Cinema Movie' || project.category === 'Internet Movie' || project.category === 'TV Movie';
    if (activeFilter === 'television') return project.category === 'TV Series';
    if (activeFilter === 'short') return project.category === 'Short Drama';
    return true;
  });

  const getRoleLabel = (roleType: string) => {
    switch (roleType.toLowerCase()) {
      case 'lead':
      case 'female lead':
        return t('credits.role.lead');
      case 'supporting':
        return t('credits.role.supporting');
      case 'recurring':
      case 'regular':
        return t('credits.role.recurring');
      default:
        return t('credits.role.cameo');
    }
  };

  const handleProjectClick = (project: Project) => {
  if (project.link && project.link.trim() !== '') {
    window.open(project.link, '_blank', 'noopener,noreferrer');
  }
};

  
  const getDisplayTitle = (project: Project) => {
    if (language === 'zh' && project.titleChinese) {
      return project.titleChinese;
    }
    return project.title;
  };

  return (
    <section
      id="credits"
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
            {t('credits.title') as string}
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--theme-accent)' }}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'text-white'
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: activeFilter === filter.key ? 'var(--theme-accent)' : 'var(--theme-card)',
                  border: `1px solid var(--theme-border)`,
                }}
              >
                <Icon size={16} />
                {t(filter.labelKey) as string}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
      
      <div
    key={`${project.title}-${index}`}
        onClick={() => handleProjectClick(project)}
  className={`rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group ${
                project.link && project.link.trim() !== '' ? 'cursor-pointer' : 'cursor-default'
              }`}
              style={{
                backgroundColor: 'var(--theme-card)',
                border: `1px solid var(--theme-border)`,
              }}
            >
  {/* Фоновое изображение */}
  {project.backgroundImage && project.backgroundImage.trim() !== '' && (
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${project.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}
  
  {/* Иконка ссылки, если есть link */}
  {project.link && (
                <ExternalLink
                  size={14}
                  className="absolute top-2 right-2 z-20"
                  style={{ color: 'var(--theme-accent)' }}
                />
              )}

    {/* Затемняющий слой для читаемости текста (можно сделать условным, если нужно) */}
    {/* <div
      className="absolute inset-0"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      }}
    /> */}
     <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 pr-2">
                    <h3
                      className="text-lg font-semibold mb-1 flex items-center gap-2"
                      style={{ color: 'var(--theme-text)' }}
                    >
                      {getDisplayTitle(project)}
                      {project.link && project.link.trim() !== '' && (
                        <ExternalLink size={14} style={{ color: 'var(--theme-accent)' }} />
                      )}
                    </h3>
                  <div
                    className="flex items-center gap-1 text-sm"
                    style={{ color: 'var(--theme-text-muted)' }}
                  >
                    <Calendar size={14} />
                    {project.year}
                    {!project.released && (
                      <span
                        className="ml-2 px-2 py-0.5 text-xs rounded-full"
                        style={{
                          backgroundColor: 'var(--theme-accent)',
                          color: 'white',
                        }}
                      >
                        {language === 'zh' ? '未上映' : language === 'ru' ? 'Не вышел' : 'Unreleased'}
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className="px-2 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: 'var(--theme-bg-secondary)',
                    color: 'var(--theme-accent)',
                  }}
                >
                  {getRoleLabel(project.roleType) as string}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: 'var(--theme-text-muted)' }}
                >
                  <User size={14} />
                  <span>{project.role}</span>
                </div>
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: 'var(--theme-text-muted)' }}
                >
                  <Tag size={14} />
                  <span>{project.genre}</span>
                </div>
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: 'var(--theme-text-muted)' }}
                >
                  <Monitor size={14} />
                  <span>{project.platform}</span>
                </div>
              </div>
            </div>
    </div> 
          ))}
        </div>
      </div>
    </section>
  );
}
