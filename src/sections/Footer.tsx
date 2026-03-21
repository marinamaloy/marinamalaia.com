import { useLanguage } from '../contexts/LanguageContext';
import { Heart } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="py-8"
      style={{
        backgroundColor: 'var(--theme-bg)',
        borderTop: `1px solid var(--theme-border)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p
            className="text-sm text-center md:text-left"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            {t('footer.copyright') as string}
          </p>

          {/* Tagline */}
          <p
            className="text-sm flex items-center gap-1"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            {t('footer.tagline') as string}
            <Heart
              size={14}
              className="inline"
              style={{ color: 'var(--theme-accent)' }}
              fill="currentColor"
            />
          </p>
        </div>
      </div>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8e8a2185d7382f4d697535759118a17d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

      {/* Baidu Tongji Placeholder */}
      {/* 
        Baidu Tongji Analytics Code Placeholder
        Insert your Baidu Tongji tracking code here:
        <script>
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?YOUR_TRACKING_ID";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        </script>
      */}
    </footer>
  );
}
