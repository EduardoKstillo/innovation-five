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
      videoId: 'DIA_2_VIDEO_ID', // TODO: Reemplazar con el ID real del Día 2
      startTime: '12:45',
    },
    {
      day: 3,
      date: '21 de Noviembre',
      fullDate: '2025-11-21',
      videoId: 'DIA_3_VIDEO_ID', // TODO: Reemplazar con el ID real del Día 3
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
    <section id="streaming" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FC2003]/10 to-[#5100D3]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FC2003] to-[#5100D3]">
                Transmisión en Vivo
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sigue el evento
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FC2003] to-[#5100D3]">
                en tiempo real
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Transmisión en vivo vía YouTube con chat interactivo
            </p>
          </div>

          {/* Day Selector */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {streams.map((stream) => (
              <button
                key={stream.day}
                onClick={() => setSelectedDay(stream.day)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedDay === stream.day
                    ? 'bg-gradient-to-r from-[#FC2003] to-[#5100D3] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#5100D3]/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-sm font-bold">Día {stream.day}</div>
                    <div className="text-xs opacity-90">{stream.date}</div>
                  </div>
                  {currentDay === stream.day && (
                    <span className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Stream Info */}
          <div className="bg-white rounded-xl p-4 mb-6 border-2 border-gray-100 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-5 h-5 text-[#5100D3]" />
                <span className="font-semibold">{selectedStream.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-5 h-5 text-[#FC2003]" />
                <span className="font-semibold">{selectedStream.startTime} Hora Perú</span>
              </div>
            </div>
          </div>

          {/* Mobile View - YouTube Button */}
          {isMobile ? (
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <Youtube className="w-20 h-20 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ver en YouTube
                </h3>
                <p className="text-gray-300">
                  Para una mejor experiencia en dispositivos móviles, mira el streaming directamente en YouTube
                </p>
              </div>
              <Button
                onClick={handleWatchOnYouTube}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Abrir en YouTube
              </Button>
            </div>
          ) : (
            /* Desktop View - Video + Chat */
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100">
              <div className="flex flex-col lg:flex-row">
                {/* Video Container - 65% */}
                <div className="lg:w-[65%] bg-black">
                  <div className="relative" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedStream.videoId}?autoplay=0&controls=1&modestbranding=1&rel=0`}
                      title={`Streaming Día ${selectedStream.day}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>

                {/* Chat Container - 35% */}
                <div className="lg:w-[35%] bg-gray-50 border-l-2 border-gray-200">
                  <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
                    <iframe
                      src={`https://www.youtube.com/live_chat?v=${selectedStream.videoId}&embed_domain=ditt.unsa.edu.pe`}
                      title="Chat en vivo"
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Footer with YouTube Link */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-red-600 p-2 rounded-lg">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Semana de Innovación UNSA 2025
                    </p>
                    <p className="text-xs text-gray-600">
                      Streaming en vivo vía YouTube
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleWatchOnYouTube}
                  variant="outline"
                  size="sm"
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  Ver en YouTube
                </Button>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              ¿Problemas con la transmisión?{' '}
              <button
                onClick={handleWatchOnYouTube}
                className="text-[#5100D3] font-semibold hover:underline"
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