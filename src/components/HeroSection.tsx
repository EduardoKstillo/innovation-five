import { Button } from './ui/button';
import { Calendar, MapPin, Users, Globe, Radio } from 'lucide-react';
import { Countdown } from './Countdown';
import { Header } from './Header';
import { useState, useEffect } from 'react';
import SmInLogo from './logos/SmInLogo';

export function HeroSection() {
  const [isLive, setIsLive] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Detectar si el streaming está en vivo
  useEffect(() => {
    const checkIfLive = () => {
      const now = new Date();
      const peruTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Lima' }));
      
      const currentDate = peruTime.toISOString().split('T')[0];
      const currentHour = peruTime.getHours();
      const currentMinute = peruTime.getMinutes();

      // Fechas del evento
      const eventDates = ['2025-11-09', '2025-11-20', '2025-11-21'];
      
      // Verificar si es uno de los días del evento y está dentro del horario (10:00 - 20:00)
      if (eventDates.includes(currentDate)) {
        const currentTimeInMinutes = currentHour * 60 + currentMinute;
        const startTime = 12 * 60 + 45; // 12:45 PM → 765 minutos
        const endTime = 15 * 60 + 30;   // 3:30 PM → 930 minutos
        
        if (currentTimeInMinutes >= startTime && currentTimeInMinutes <= endTime) {
          setIsLive(true);
        } else {
          setIsLive(false);
        }
      } else {
        setIsLive(false);
      }
    };

    checkIfLive();
    const interval = setInterval(checkIfLive, 60000); // Actualizar cada minuto
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="bg-white min-h-screen">
      {/* Main Gradient Rectangle - Pantalla completa sin bordes redondeados */}
      <div className="relative bg-gradient-to-br from-[#FC2003] via-[#8B0156] to-[#5100D3] min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
            alt="Conferencia"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FC2003]/70 via-[#8B0156]/75 to-[#5100D3]/70"></div>
        </div>

        {/* Capa de oscurecimiento adicional */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Subtle Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        {/* Header dentro del gradiente */}
        <div className="relative z-50">
          <Header scrolled={false} isInHero={true} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8 pt-24">
          <div className="max-w-5xl mx-auto text-center space-y-5">
            {/* Live Badge - Solo muestra cuando está en vivo */}
            {isLive && (
              <div className="animate-pulse mb-6">
                <div className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full shadow-2xl">
                  <Radio className="w-5 h-5 animate-pulse" />
                  <span className="font-bold text-base">¡ESTAMOS EN VIVO AHORA!</span>
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                </div>
              </div>
            )}

            {/* Main Title */}
            {/* <div className="mb-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
                Semana de Innovación
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '3px' }}>
                UNSA 2025
              </h2>
            </div> */}

            {/* Main Title - Logo SVG */}
            <div className="mb-3">
              <SmInLogo className="w-full text-white max-w-4xl mx-auto h-auto" />
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
                <span className="text-xs md:text-sm font-medium text-white">5 Países</span>
              </div>
            </div>

            {/* Countdown Section o Live Button */}
            {!isLive ? (
              <div className="pt-3">
                <p className="text-white text-xs md:text-sm font-semibold mb-3 uppercase tracking-widest drop-shadow-md">
                  El evento comienza en
                </p>
                <Countdown targetDate="2025-11-19T12:45:00" />
              </div>
            ) : (
              <div className="pt-3">
                <Button
                  onClick={() => scrollToSection('#streaming')}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white shadow-2xl px-8 md:px-10 h-12 md:h-14 font-bold text-base md:text-lg transition-all animate-pulse"
                >
                  <Radio className="w-5 h-5 mr-2" />
                  Ver Transmisión en Vivo
                </Button>
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-3">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfiB24OOwpxF9Rp6t_35WZ1cqJRka7KFHVjB31_HhAT7lDfVQ/viewform" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#C1246B] hover:bg-[#A01E5A] text-white shadow-2xl px-8 md:px-10 h-11 md:h-12 font-bold text-sm md:text-base transition-all"
              >
                Inscríbete Gratis
              </Button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}