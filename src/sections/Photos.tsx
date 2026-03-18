import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Operative theme photos
const operativePhotos = [
  '/images/operative/operative 1.jpg',
  '/images/operative/operative 3.jpg',
  '/images/operative/operative 4.jpg',
  '/images/operative/operative 5.JPG',
  '/images/operative/operative 6.jpg',
  '/images/operative/operative 7.jpeg',
  '/images/operative/operative 8.JPG',
  '/images/operative/operative 9.JPG',
  '/images/operative/operative 10.JPG',
  '/images/operative/operative 11.jpeg',
  '/images/operative/operative 12.jpg',
  '/images/operative/operative 13.jpeg',
  '/images/operative/operative 14.jpeg',
  '/images/operative/operative 15.JPG',
  '/images/operative/operative 16.jpeg',
  '/images/operative/operative 17.jpeg',
];

// Period theme photos
const periodPhotos = [
  '/images/period/Period 1.jpeg',
  '/images/period/Period 2.jpeg',
  '/images/period/Period 4.jpeg',
  '/images/period/Period 5.JPG',
  '/images/period/Period 6.jpeg',
  '/images/period/Period 7.JPG',
  '/images/period/Period 8.jpeg',
  '/images/period/Period 9.JPG',
  '/images/period/Period 10.JPG',
  '/images/period/Period 11.jpg',
  '/images/period/Period 12.jpeg',
  '/images/period/Period 13.jpg',
];

export function Photos() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = theme === 'operative' ? operativePhotos : periodPhotos;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <section
      id="photos"
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
            {t('photos.title') as string}
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--theme-accent)' }}
          />
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={`${theme}-${index}`}
              className="aspect-[3/4] relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 text-white hover:opacity-70 transition-opacity"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 p-2 text-white hover:opacity-70 transition-opacity"
            onClick={goToPrevious}
            aria-label="Previous photo"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            className="absolute right-4 p-2 text-white hover:opacity-70 transition-opacity"
            onClick={goToNext}
            aria-label="Next photo"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[currentIndex]}
              alt={`Photo ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
}
