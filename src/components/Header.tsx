import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import DittLogo from './logos/DittLogo';

interface HeaderProps {
  scrolled: boolean;
  isInHero?: boolean;
}

export function Header({ scrolled, isInHero = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre el evento', href: '#sobre' },
    { label: 'Ponentes', href: '#ponentes' },
    { label: 'Programa', href: '#programa' },
    { label: 'Transmisión', href: '#streaming' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`${isInHero ? 'absolute top-0 left-0 right-0' : 'fixed top-0 left-0 right-0'} z-50 transition-all duration-300 ${
        isInHero 
          ? 'bg-transparent' 
          : scrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo DITT */}
          <div className="flex items-center">
            <div style={isInHero ? { filter: 'brightness(0) invert(1)' } : {}}>
              <DittLogo className="h-10 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm transition-colors font-semibold ${
                  isInHero 
                    ? 'text-white hover:text-[#C1246B] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' 
                    : 'text-gray-700 hover:text-[#FC2003]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfiB24OOwpxF9Rp6t_35WZ1cqJRka7KFHVjB31_HhAT7lDfVQ/viewform" target="_blank" rel="noopener noreferrer">
              <Button
                className={
                  isInHero
                    ? 'bg-[#C1246B] hover:bg-[#A01E5A] text-white font-bold transition-all'
                    : 'bg-gradient-to-r from-[#FC2003] to-[#5100D3] hover:opacity-90 text-white font-bold'
                }
              >
                Regístrate ahora
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${isInHero ? 'text-white' : 'text-gray-700'}`}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${
            isInHero 
              ? 'bg-[#8B0156]/95 backdrop-blur-md border-white/20' 
              : 'bg-white border-gray-200'
          }`}>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left py-2 transition-colors font-semibold ${
                    isInHero 
                      ? 'text-white hover:text-[#C1246B]' 
                      : 'text-gray-700 hover:text-[#FC2003]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#registro')}
                className="bg-[#C1246B] hover:bg-[#A01E5A] text-white w-full mt-2 font-bold transition-all"
              >
                Regístrate ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}