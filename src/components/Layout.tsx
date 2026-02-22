import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { REGISTRATION_URL, handleRegister } from '@/lib/index';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateHeight();
    
    const resizeObserver = new ResizeObserver(updateHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Contenido', href: '#valor' },
    { name: 'Ponentes', href: '#ponentes' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-primary-foreground">
      {/* Header */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            className="text-xl font-extrabold tracking-tighter flex items-center gap-2 group"
          >
            <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              CÓDIGO
            </span>
            <span className="text-foreground/90">DEL FUTURO</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button 
              onClick={handleRegister}
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all hover:scale-105 active:scale-95"
            >
              Asegurar Cupo
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-white/5 p-6 md:hidden flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold text-foreground/80 hover:text-primary transition-colors border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                onClick={() => {
                  handleRegister();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-primary py-6 text-lg"
              >
                Asegurar Cupo Ahora
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main 
        className="flex-grow"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-background py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-4">
              <div className="text-2xl font-black tracking-tighter">
                CÓDIGO <span className="text-primary">DEL FUTURO</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Liderando la evolución financiera a través de la Web 3.0, IA y Blockchain.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-8 text-sm text-muted-foreground">
                <a href="#hero" className="hover:text-primary transition-colors">Privacidad</a>
                <a href="#hero" className="hover:text-primary transition-colors">Términos</a>
                <a 
                  href={REGISTRATION_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  Soporte
                </a>
              </div>
              <p className="text-xs text-muted-foreground/50">
                © 2026 Código del Futuro. Todos los derechos reservados.
              </p>
            </div>
          </div>

          {/* Subtle Glow at Footer bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary/20 blur-3xl rounded-full" />
        </div>
      </footer>
    </div>
  );
}
