import { Button } from './ui/button';
import { Calendar, MapPin, Users, Globe } from 'lucide-react';
import { Countdown } from './Countdown';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-16 px-3 md:px-4 bg-white min-h-screen flex items-center">
      <div className="container mx-auto max-w-[98%] h-[calc(100vh-5rem)]">
        {/* Main Gradient Rectangle - Casi pantalla completa */}
        <div className="relative bg-gradient-to-br from-[#FC2003] via-[#8B0156] to-[#5100D3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-full">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
              alt="Conferencia"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FC2003]/80 via-[#8B0156]/85 to-[#5100D3]/80"></div>
          </div>

          {/* Subtle Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8">
            <div className="max-w-5xl mx-auto text-center space-y-5">
              {/* Main Title */}
              <div className="mb-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
                  Semana de Innovación
                </h1>
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '3px' }}>
                  UNSA 2025
                </h2>
              </div>

              {/* Subtitle */}
              <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Innovación aplicada: estrategias internacionales para escalar
                proyectos científicos al mercado
              </p>

              {/* Event Info Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 pt-2">
                <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/40 shadow-lg">
                  <Calendar className="w-4 h-4 text-white" />
                  <span className="text-xs md:text-sm font-medium text-white">19-21 Noviembre 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/40 shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-xs md:text-sm font-medium text-white">Virtual • YouTube</span>
                </div>
                <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/40 shadow-lg">
                  <Users className="w-4 h-4 text-white" />
                  <span className="text-xs md:text-sm font-medium text-white">9 Ponentes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/40 shadow-lg">
                  <Globe className="w-4 h-4 text-white" />
                  <span className="text-xs md:text-sm font-medium text-white">8 Países</span>
                </div>
              </div>

              {/* Countdown Section */}
              <div className="pt-3">
                <p className="text-white text-xs md:text-sm font-semibold mb-3 uppercase tracking-widest drop-shadow-md">
                  El evento comienza en
                </p>
                <Countdown targetDate="2025-11-19T10:00:00" />
              </div>

              {/* CTA Button */}
              <div className="pt-3">
                <Button
                  onClick={() => scrollToSection('#registro')}
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-[#FC2003] shadow-2xl px-8 md:px-10 h-11 md:h-12 rounded-full font-bold text-sm md:text-base"
                >
                  Inscríbete Gratis
                </Button>
              </div>

              {/* Organization Logos */}
              <div className="pt-6 space-y-4 border-t border-white/30">
                <p className="text-white/90 text-xs uppercase tracking-widest drop-shadow-md">
                  Organizado por
                </p>
                
                {/* Logos Container */}
                <div className="flex flex-col items-center gap-4">
                  {/* Logo Principal - UNSA */}
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop"
                      alt="UNSA Logo"
                      className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                  
                  {/* Logos Secundarios - Lado a lado */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30 shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=60&fit=crop"
                        alt="Vicerrectorado Logo"
                        className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                      />
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30 shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=60&fit=crop"
                        alt="DITT Logo"
                        className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}