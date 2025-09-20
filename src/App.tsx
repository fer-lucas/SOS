import { useState, useEffect } from 'react';
import { SosNavbar } from './components/SosNavbar';
import { SosFooter } from './components/SosFooter';
import { PageTransition } from './components/PageTransition';
import { SearchDialog } from './components/SearchDialog';
import { HomePage } from './components/pages/HomePage';
import { SosOpenPage } from './components/pages/SosOpenPage';
import { MapaUnificadoPage } from './components/pages/MapaUnificadoPage';
import { GuiaVisualPage } from './components/pages/GuiaVisualPage';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('sos-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('sos-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handlePageChange = (page: string, section?: string) => {
    setCurrentPage(page);
    // Scroll to top when changing pages, then to section if specified
    setTimeout(() => {
      if (section) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'sos-open':
        return <SosOpenPage />;
      case 'mapa-unificado':
        return <MapaUnificadoPage />;
      case 'guia-visual':
        return <GuiaVisualPage />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SosNavbar 
        isDark={isDark}
        onToggleTheme={toggleTheme}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      
      <main className="flex-1">
        <PageTransition pageKey={currentPage}>
          {renderCurrentPage()}
        </PageTransition>
      </main>
      
      <SosFooter />
      
      <SearchDialog 
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handlePageChange}
      />
    </div>
  );
}