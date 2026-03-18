import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'zh' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.reels': 'Reels',
    'nav.credits': 'Credits',
    'nav.photos': 'Photos',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.name': 'Marina Malaia',
    'hero.subtitle': 'Actress | Model',
    'hero.cta': 'Available for International Productions',
    'hero.about.title': 'About Me',
    'hero.about.text': 'Marina Malaia is a Russian actress and professional model with international experience across Russia, Europe, and Asia. Since 2016, she has been based in Shanghai, where she immersed herself in Chinese culture and Mandarin studies. Working at the intersection of East and West, she combines technical precision with emotional depth, bringing authenticity to cross-cultural storytelling.',
    
    // Reels
    'reels.title': 'Reels',
    'reels.operative': 'Operative Reel',
    'reels.period': 'Period Reel',
    'reels.contemporary': 'Contemporary Reel',
    'reels.placeholder': 'Video placeholder - Bilibili link pending',
    
    // Credits
    'credits.title': 'Credits',
    'credits.filter.all': 'All',
    'credits.filter.film': 'Film',
    'credits.filter.television': 'Television',
    'credits.filter.short': 'Short Drama',
    'credits.role.lead': 'Lead',
    'credits.role.supporting': 'Supporting',
    'credits.role.recurring': 'Recurring',
    'credits.role.cameo': 'Cameo',
    'credits.year': 'Year',
    'credits.project': 'Project',
    'credits.role': 'Role',
    'credits.genre': 'Genre',
    'credits.platform': 'Platform',
    
    // Photos
    'photos.title': 'Photos',
    
    // Resume
    'resume.title': 'Resume',
    'resume.skills.title': 'Profession',
    'resume.skills.acting': 'Screen Acting',
    'resume.skills.modeling': 'Professional Modeling',
    'resume.skills.languages': 'Languages',
    'resume.skills.special': 'Skills',
    'resume.training.title': 'Training',
    'resume.training.sta': 'Shanghai Theatre Academy',
    'resume.training.rgia': 'Russian State Institute of Performing Arts',
    'resume.languages.title': 'Languages',
    'resume.languages.russian': 'Russian (Native)',
    'resume.languages.english': 'English (Fluent)',
    'resume.languages.mandarin': 'Mandarin Chinese (Fluent)',
    'resume.special.title': 'Skills',
    'resume.special.wingchun': 'Wing Chun',
    'resume.special.yoga': 'Yoga',
    'resume.special.driving': 'Driving',
    'resume.special.swimming': 'Swimming',
    'resume.download.resume': 'Download PDF Resume',
    'resume.download.presentation': 'Download Full Presentation',
    'resume.filesize.resume': '41 KB',
    'resume.filesize.presentation': '29.5 MB',
    
    // Contact
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.wechat': 'WeChat',
    'contact.social': 'Social Media',
    'contact.connect': 'Let\'s Connect',
    'contact.connect.text': 'For casting inquiries, collaborations, or just to say hello, feel free to reach out through any of the channels below.',
    
    // Theme Switcher
    'theme.operative': 'Operative',
    'theme.period': 'Period',
    
    // Footer
    'footer.copyright': '© 2026 Marina Malaia. All rights reserved.',
    'footer.tagline': 'Crafting stories that transcend borders.',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.reels': '作品片段',
    'nav.credits': '作品列表',
    'nav.photos': '照片',
    'nav.resume': '简历',
    'nav.contact': '联系方式',
    
    // Hero
    'hero.name': '金美泠',
    'hero.subtitle': '演员 | 模特',
    'hero.cta': '接受国际制作邀约',
    'hero.about.title': '关于我',
    'hero.about.text': '金美泠是一位俄罗斯演员兼职业模特，拥有在俄罗斯、欧洲和亚洲的表演经验。自2016年起常驻上海，深入了解中国文化并学习中文。她活跃于东西方文化交汇的创作环境中，以细腻克制的表演和情感表达见长，为跨文化角色赋予真实感与层次感。',
    
    // Reels
    'reels.title': '作品片段',
    'reels.operative': '现代动作片段',
    'reels.period': '年代戏剧片段',
    'reels.contemporary': '当代戏剧片段',
    'reels.placeholder': '视频占位符 - 哔哩哔哩链接待定',
    
    // Credits
    'credits.title': '作品列表',
    'credits.filter.all': '全部',
    'credits.filter.film': '电影',
    'credits.filter.television': '电视剧',
    'credits.filter.short': '短剧',
    'credits.role.lead': '主演',
    'credits.role.supporting': '配角',
    'credits.role.recurring': '常驻',
    'credits.role.cameo': '客串',
    'credits.year': '年份',
    'credits.project': '项目',
    'credits.role': '角色',
    'credits.genre': '类型',
    'credits.platform': '平台',
    
    // Photos
    'photos.title': '照片',
    
    // Resume
    'resume.title': '简历',
    'resume.skills.title': '专业',
    'resume.skills.acting': '影视表演',
    'resume.skills.modeling': '专业模特',
    'resume.skills.languages': '语言',
    'resume.skills.special': '技能',
    'resume.training.title': '教育背景',
    'resume.training.sta': '上海戏剧学院',
    'resume.training.rgia': '俄罗斯国立表演艺术学院',
    'resume.languages.title': '语言',
    'resume.languages.russian': '俄语（母语）',
    'resume.languages.english': '英语（流利）',
    'resume.languages.mandarin': '中文普通话（流利）',
    'resume.special.title': '技能',
    'resume.special.wingchun': '咏春拳',
    'resume.special.yoga': '瑜伽',
    'resume.special.driving': '驾驶',
    'resume.special.swimming': '游泳',
    'resume.download.resume': '下载PDF简历',
    'resume.download.presentation': '下载完整资料',
    'resume.filesize.resume': '41 KB',
    'resume.filesize.presentation': '29.5 MB',
    
    // Contact
    'contact.title': '联系方式',
    'contact.email': '邮箱',
    'contact.wechat': '微信',
    'contact.social': '社交媒体',
    'contact.connect': '联系我',
    'contact.connect.text': '如有演出邀约、合作意向或只是想打个招呼，欢迎通过以下任何渠道与我联系。',
    
    // Theme Switcher
    'theme.operative': '现代',
    'theme.period': '年代',
    
    // Footer
    'footer.copyright': '© 2026 金美泠。保留所有权利。',
    'footer.tagline': '创作超越国界的故事。',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.reels': 'Видео',
    'nav.credits': 'Фильмография',
    'nav.photos': 'Фото',
    'nav.resume': 'Резюме',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.name': 'Марина Малая',
    'hero.subtitle': 'Актриса | Модель',
    'hero.cta': 'Доступна для международных проектов',
    'hero.about.title': 'Обо мне',
    'hero.about.text': 'Марина Малая — российская актриса, базирующаяся в Шанхае, с опытом работы в проектах в России, Европе и Азии. Исполняет роли на русском и английском языках, владеет разговорным китайским. В творчестве предпочитает драму и персонажные истории — особенно ценит исторические и костюмные проекты, где важны тонкие эмоциональные переходы и внутренняя правда героя. В работе делает ставку на естественность и точность: показывает глубокие внутренние изменения без внешней демонстрации эмоций.',
    
    // Reels
    'reels.title': 'Видео',
    'reels.operative': 'Триллер шоурил',
    'reels.period': 'Исторический шоурил',
    'reels.contemporary': 'Современный шоурил',
    'reels.placeholder': 'Заглушка видео - ссылка на Bilibili в ожидании',
    
    // Credits
    'credits.title': 'Фильмография',
    'credits.filter.all': 'Все',
    'credits.filter.film': 'Фильмы',
    'credits.filter.television': 'Телесериалы',
    'credits.filter.short': 'Короткие драмы',
    'credits.role.lead': 'Главная роль',
    'credits.role.supporting': 'Второстепенная роль',
    'credits.role.recurring': 'Эпизодическая роль',
    'credits.role.cameo': 'Камео',
    'credits.year': 'Год',
    'credits.project': 'Проект',
    'credits.role': 'Роль',
    'credits.genre': 'Жанр',
    'credits.platform': 'Платформа',
    
    // Photos
    'photos.title': 'Фотографии',
    
    // Resume
    'resume.title': 'Резюме',
    'resume.skills.title': 'Профессия',
    'resume.skills.acting': 'Актерское мастерство',
    'resume.skills.modeling': 'Профессиональный моделинг',
    'resume.skills.languages': 'Языки',
    'resume.skills.special': 'Особые навыки',
    'resume.training.title': 'Обучение',
    'resume.training.sta': 'Шанхайская Театральная Академия',
    'resume.training.rgia': 'Российский Государственный Институт Сценических Искусств',
    'resume.languages.title': 'Языки',
    'resume.languages.russian': 'Русский (родной)',
    'resume.languages.english': 'Английский (свободно)',
    'resume.languages.mandarin': 'Китайский Мандарин (свободно)',
    'resume.special.title': 'Навыки',
    'resume.special.wingchun': 'Вин Чун',
    'resume.special.yoga': 'Йога',
    'resume.special.driving': 'Вождение',
    'resume.special.swimming': 'Плавание',
    'resume.download.resume': 'Скачать PDF резюме',
    'resume.download.presentation': 'Скачать полную презентацию',
    'resume.filesize.resume': '41 КБ',
    'resume.filesize.presentation': '29.5 МБ',
    
    // Contact
    'contact.title': 'Контакты',
    'contact.email': 'Email',
    'contact.wechat': 'WeChat',
    'contact.social': 'Социальные Медиа',
    'contact.connect': 'Давайте общаться',
    'contact.connect.text': 'По вопросам кастинга, сотрудничества или просто чтобы поздороваться — не стесняйтесь обращаться через любой из каналов ниже.',
    
    // Theme Switcher
    'theme.operative': 'Триллер',
    'theme.period': 'Исторический',
    
    // Footer
    'footer.copyright': '© 2026 Марина Малая. Все права защищены.',
    'footer.tagline': 'Рассказываю истории, которые соединяют культуры',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['en', 'zh', 'ru'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
  };

  const t = (key: string): string => {
  // Сначала проверяем точное совпадение ключа (например 'hero.about.title')
  const exactMatch = (translations[language] as Record<string, string>)[key];
  if (exactMatch) {
    return exactMatch;
  }
  
  // Если точного совпадения нет, пробуем искать во вложенной структуре
  const keys = key.split('.');
  let value: any = translations[language];
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  return typeof value === 'string' ? value : key;
};
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
