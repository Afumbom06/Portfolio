import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeProvider';

interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-blue-100 dark:border-blue-900/50'
          : 'bg-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <button
              onClick={() => scrollToSection('home')}
              className="relative flex items-center gap-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
                <div className="relative w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-lg tracking-tight">Bulawa Joy</div>
                <div className="text-xs text-blue-600 dark:text-blue-400">Frontend Developer</div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="relative flex items-center space-x-1 bg-slate-50 dark:bg-slate-800/50 rounded-full px-2 py-2 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2.5 rounded-full transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {activeSection === item.id && (
                    <span className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50 animate-in fade-in zoom-in duration-300" />
                  )}
                  <span className="relative z-10 font-medium">{item.label}</span>
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-300 ${
                    activeSection === item.id ? 'w-0' : 'w-0 group-hover:w-3/4'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full relative group overflow-hidden bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-slate-200 dark:border-slate-700"
            >
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors" />
              ) : (
                <Sun className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
              )}
            </Button>

            {/* CTA Button - Desktop */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 border border-blue-500"
            >
              <span className="font-medium">Hire Me</span>
            </Button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-slate-200 dark:border-slate-700"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`block w-full text-left px-5 py-3 rounded-xl transition-all duration-300 animate-in slide-in-from-top ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-600/30"
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}