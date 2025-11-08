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
    <section id="inicio" className="pt-24 pb-8 px-4 md:px-6 lg:px-8 bg-white">
        {/* Main Gradient Rectangle */}
        <div className="relative bg-gradient-to-br from-[#FC2003] via-[#8B0156] to-[#5100D3] rounded-3xl md:rounded-[32px] lg:rounded-[40px] overflow-hidden shadow-2xl">
          {/* Subtle Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          {/* Content Container */}
          <div className="relative z-10 px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              {/* Small Icon */}
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="white"
                      fillOpacity="0.9"
                    />
                  </svg>
                </div>
              </div>

              {/* Main Title - SVG */}
              <div>
                <svg
                  viewBox="0 0 900 180"
                  className="w-full max-w-4xl mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="50%"
                    y="40%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '56px',
                      fontWeight: '700',
                      letterSpacing: '1px',
                    }}
                  >
                    Semana de Innovación
                  </text>
                  <text
                    x="50%"
                    y="75%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '72px',
                      fontWeight: '800',
                      letterSpacing: '3px',
                    }}
                  >
                    UNSA 2025
                  </text>
                </svg>
              </div>

              {/* Subtitle */}
              <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Innovación aplicada: estrategias internacionales para escalar
                proyectos científicos al mercado
              </p>

              {/* Event Info Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Calendar className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">19-21 Noviembre 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">Virtual • YouTube</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Users className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">9 Ponentes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Globe className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">8 Países</span>
                </div>
              </div>

              {/* Countdown Section */}
              <div className="pt-6">
                <p className="text-white/90 text-sm font-semibold mb-6 uppercase tracking-widest">
                  El evento comienza en
                </p>
                <Countdown targetDate="2025-11-19T10:00:00" />
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button
                  onClick={() => scrollToSection('#registro')}
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white shadow-xl px-10 h-12 rounded-full"
                >
                  Inscríbete Gratis
                </Button>
              </div>

              {/* Organization Info */}
              <div className="pt-8 space-y-3 border-t border-white/20">
                <p className="text-white/70 text-xs uppercase tracking-widest">
                  Organizado por
                </p>
                <p className="text-white font-semibold">
                  Universidad Nacional de San Agustín de Arequipa
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-sm text-white/80">
                  <span>Vicerrectorado de Investigación</span>
                  <span className="text-white/40">•</span>
                  <span>Dirección de Innovación y Transferencia Tecnológica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
