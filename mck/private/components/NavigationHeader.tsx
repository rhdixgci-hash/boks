import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export function NavigationHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Groundings', labelFa: 'تاسیسات', href: '#groundings' },
    { label: 'Archive', labelFa: 'آرشیو', href: '#archive' },
    { label: 'SaaS', labelFa: 'سااس', href: '#saas' },
    { label: 'Dashboard', labelFa: 'داشبورد', href: '#dashboard' },
    { label: 'Brandscape', labelFa: 'برندسکیپ', href: '#brandscape' },
    { label: 'Design System', labelFa: 'سیستم طراحی', href: '#design-system' },
    { label: 'Research', labelFa: 'پژوهش', href: '#research' },
    { label: 'About', labelFa: 'درباره', href: '#about' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="group">
            <div className="flex items-center gap-3">
              {/* Geometric icon */}
              <div className="w-10 h-10 border-2 border-primary flex items-center justify-center transition-transform group-hover:rotate-45">
                <span className="text-sm">SE</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-foreground">Salman Englisi</div>
                <div className="text-xs text-muted-foreground" style={{ fontFamily: 'serif' }}>
                  سلمان انگلیسی
                </div>
              </div>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="block">{item.label}</span>
                    <span className="block text-xs text-muted-foreground group-hover:text-foreground transition-colors" style={{ fontFamily: 'serif' }}>
                      {item.labelFa}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="px-4 py-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="block">{item.label}</span>
                      <span className="block text-sm text-muted-foreground" style={{ fontFamily: 'serif' }}>
                        {item.labelFa}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}