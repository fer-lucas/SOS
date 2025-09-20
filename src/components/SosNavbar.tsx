import { Button } from "./ui/button";
import { Moon, Sun, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { SosLogo } from "./SosLogo";

interface SosNavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
  onOpenSearch: () => void;
}

export function SosNavbar({ isDark, onToggleTheme, currentPage, onPageChange, onOpenSearch }: SosNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sos-open', label: 'SOS Open' },
    { id: 'mapa-unificado', label: 'Mapa Unificado' },
    { id: 'guia-visual', label: 'Guia Visual' }
  ];

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-[var(--maxW)] mx-auto px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <SosLogo 
              size="md" 
              onClick={() => onPageChange('home')}
            />
            <button
              onClick={() => onPageChange('home')}
              className="font-extrabold text-foreground hover:opacity-80 transition-opacity"
            >
              SOS
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`font-medium transition-colors hover:text-foreground/80 ${
                  currentPage === item.id ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center space-x-2 ml-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onOpenSearch}
                className="gap-2"
              >
                <Search className="w-4 h-4" />
                <span className="hidden lg:inline text-xs">⌘K</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleTheme}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onOpenSearch}
            >
              <Search className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleTheme}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-2 py-2 font-medium transition-colors hover:text-foreground/80 ${
                    currentPage === item.id ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}