import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Hero } from './sections/Hero';
import { Reels } from './sections/Reels';
import { Credits } from './sections/Credits';
import { Photos } from './sections/Photos';
import { Resume } from './sections/Resume';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen theme-transition">
          {/* Fixed Navigation */}
          <Navigation />
          
          {/* Fixed Controls */}
          <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
          
          {/* Main Content */}
          <main>
            <Hero />
            <Reels />
            <Credits />
            <Photos />
            <Resume />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
