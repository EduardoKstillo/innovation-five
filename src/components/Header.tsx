import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre el evento', href: '#sobre' },
    { label: 'Programa', href: '#programa' },
    { label: 'Ponentes', href: '#ponentes' },
    { label: 'Transmisión', href: '#transmision' },
    { label: 'Registro', href: '#registro' },
    { label: 'Contacto', href: '#contacto' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1621008945448-513cef3a463d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nbyUyMGhvcml6b250YWx8ZW58MXx8fHwxNzYyNDQ0ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="UNSA Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden lg:block border-l pl-3 ml-3 border-gray-300">
              <div className="text-sm font-semibold text-[#FC2003]">Semana de Innovación</div>
              <div className="text-xs text-gray-600">UNSA 2025</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-gray-700 hover:text-[#FC2003] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#registro')}
              className="bg-gradient-to-r from-[#FC2003] to-[#5100D3] hover:opacity-90"
            >
              Regístrate ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 text-gray-700 hover:text-[#FC2003] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#registro')}
                className="bg-gradient-to-r from-[#FC2003] to-[#5100D3] w-full mt-2"
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
