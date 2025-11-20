import { useState, useEffect } from 'react';
import { Youtube, Calendar, Clock } from 'lucide-react';
import { Button } from './ui/button';

export function LiveStreamSection() {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [currentDay, setCurrentDay] = useState<number>(1);

  // Configuración de los streamings
  const streams = [
    {
      day: 1,
      date: '19 de Noviembre',
      fullDate: '2025-11-19',
      videoId: 'xjdV-ukuwmw',
      startTime: '12:45',
    },
    {
      day: 2,
      date: '20 de Noviembre',
      fullDate: '2025-11-20',
      videoId: '356owi2KZr8',
      startTime: '12:45',
    },
    {
      day: 3,
      date: '21 de Noviembre',
      fullDate: '2025-11-21',
      videoId: 'Yn23-3zp7Zc', // TODO: Reemplazar con el ID real del Día 3
      startTime: '12:45',
    },
  ];

  // Detección automática del día actual basado en la fecha/hora de Perú (GMT-5)
  useEffect(() => {
    const detectCurrentDay = () => {
      // Obtener fecha/hora actual en Perú (GMT-5)
      const now = new Date();
      const peruTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Lima' }));
      
      const currentDate = peruTime.toISOString().split('T')[0];
      const currentHour = peruTime.getHours();
      const currentMinute = peruTime.getMinutes();
      const currentTimeInMinutes = currentHour * 60 + currentMinute;
      const streamStartInMinutes = 12 * 60 + 45; // 12:45 PM

      // Determinar qué día mostrar
      for (let i = 0; i < streams.length; i++) {
        const stream = streams[i];
        
        // Si es el día del streaming
        if (currentDate === stream.fullDate) {
          setCurrentDay(stream.day);
          setSelectedDay(stream.day);
          return;
        }
        
        // Si es después del día del streaming pero antes del siguiente
        if (currentDate > stream.fullDate) {
          // Si hay un siguiente día y aún no ha llegado
          if (i < streams.length - 1 && currentDate < streams[i + 1].fullDate) {
            // Si ya pasó la hora de inicio, mostrar grabación
            setCurrentDay(stream.day);
            setSelectedDay(stream.day);
            return;
          }
          // Si es el último día y ya pasó
          if (i === streams.length - 1) {
            setCurrentDay(stream.day);
            setSelectedDay(stream.day);
            return;
          }
        }
      }

      // Si aún no empieza el evento, mostrar día 1
      if (currentDate < streams[0].fullDate) {
        setCurrentDay(1);
        setSelectedDay(1);
      }
    };

    detectCurrentDay();
    // Actualizar cada minuto
    const interval = setInterval(detectCurrentDay, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const selectedStream = streams.find(s => s.day === selectedDay) || streams[0];

  // Verificar si estamos en móvil
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleWatchOnYouTube = () => {
    window.open(`https://www.youtube.com/watch?v=${selectedStream.videoId}`, '_blank');
  };

  return (
    <section id="streaming" className="py-20 bg-gradient-to-br from-[#FC2003] via-[#8B0156] to-[#5100D3] relative overflow-hidden">
      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-white">
                Transmisión en Vivo
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sigue el evento
              <span className="block">en tiempo real</span>
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Transmisión en vivo vía YouTube con chat interactivo
            </p>
          </div>

          {/* Day Selector - Estilo Tabs */}
          <div className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 h-auto bg-white/10 backdrop-blur-sm p-1 rounded-xl gap-1">
            {streams.map((stream) => (
              <button
                key={stream.day}
                onClick={() => setSelectedDay(stream.day)}
                className={`flex flex-col py-4 rounded-lg transition-all ${
                  selectedDay === stream.day
                    ? 'bg-gradient-to-br from-[#C1246B] to-[#8B1353] text-white'
                    : 'bg-transparent text-white/80 hover:bg-white/10'
                }`}
              >
                <span className="font-bold">Día {stream.day}</span>
                <span className="text-xs opacity-80">{stream.date}</span>
                {currentDay === stream.day && selectedDay === stream.day && (
                  <span className="mt-1 mx-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                )}
              </button>
            ))}
          </div>

          {/* Stream Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6 border border-white/20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">{selectedStream.date}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{selectedStream.startTime} Hora Perú</span>
              </div>
            </div>
          </div>

          {/* Mobile View - YouTube Button */}
          {isMobile ? (
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20">
              <div className="mb-6">
                <Youtube className="w-20 h-20 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ver en YouTube
                </h3>
                <p className="text-white/80">
                  Para una mejor experiencia en dispositivos móviles, mira el streaming directamente en YouTube
                </p>
              </div>
              <Button
                onClick={handleWatchOnYouTube}
                size="lg"
                className="bg-[#C1246B] hover:bg-[#A01E5A] text-white font-bold"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Abrir en YouTube
              </Button>
            </div>
          ) : (
            /* Desktop View - Video + Chat */
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Video Container - 2/3 del espacio */}
                <div className="lg:col-span-2 bg-black">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedStream.videoId}`}
                      title={`Streaming Día ${selectedStream.day}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>

                {/* Chat Container - 1/3 del espacio */}
                <div className="lg:col-span-1 bg-white/5 border-l border-white/10">
                  <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
                    <iframe
                      src={`https://www.youtube.com/live_chat?v=${selectedStream.videoId}&embed_domain=ditt.unsa.edu.pe`}
                      title="Chat en vivo"
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Footer with YouTube Link */}
              <div className="bg-black/30 backdrop-blur-sm px-6 py-4 flex items-center justify-between flex-wrap gap-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="bg-[#C1246B] p-2 rounded-lg">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Semana de Innovación UNSA 2025
                    </p>
                    <p className="text-xs text-white/70">
                      Streaming en vivo vía YouTube
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleWatchOnYouTube}
                  variant="outline"
                  size="sm"
                  className="border-2 border-white/30 text-white hover:bg-white/10"
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  Ver en YouTube
                </Button>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-white/90 text-sm">
              ¿Problemas con la transmisión?{' '}
              <button
                onClick={handleWatchOnYouTube}
                className="text-white font-semibold hover:underline"
              >
                Ver directamente en YouTube
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}