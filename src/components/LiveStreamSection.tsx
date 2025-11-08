import { Play, MessageSquare, Send, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { useState } from 'react';

export function LiveStreamSection() {
  const [chatMessage, setChatMessage] = useState('');

  // Mensajes de chat de ejemplo
  const chatMessages = [
    { user: 'María López', message: '¡Muy interesante la presentación!', time: '10:45' },
    { user: 'Carlos Ruiz', message: '¿Habrá sesión de preguntas?', time: '10:46' },
    { user: 'Ana García', message: 'Excelente ponencia del Dr. Mendoza', time: '10:47' },
    { user: 'José Pérez', message: 'Conectado desde Lima 👋', time: '10:48' },
    { user: 'Laura Torres', message: '¿Dónde puedo descargar las slides?', time: '10:49' },
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Aquí iría la lógica para enviar el mensaje
      setChatMessage('');
    }
  };

  return (
    <section id="transmision" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FC2003]/10 to-[#5100D3]/10 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#FC2003] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FC2003] to-[#5100D3]">
                Transmisión en Vivo
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Únete a la
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FC2003] to-[#5100D3]">
                Transmisión en Vivo
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Sigue todas las conferencias en tiempo real a través de nuestro canal oficial de YouTube
            </p>
          </div>

          {/* Live Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 bg-red-50 border-2 border-red-200 px-6 py-3 rounded-full shadow-md">
              <div className="relative">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
              </div>
              <span className="font-bold text-red-600">
                EN VIVO - 19 de Noviembre a las 10:00 AM
              </span>
            </div>
          </div>

          {/* Video and Chat Container */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black relative">
                  {/* Video Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6 px-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#FC2003] to-[#5100D3] rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Transmisión próximamente
                        </h3>
                        <p className="text-gray-300 text-lg">
                          La transmisión comenzará el 19 de noviembre
                        </p>
                        <p className="text-gray-400 mt-2">
                          10:00 AM (GMT-5)
                        </p>
                      </div>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#FC2003] to-[#5100D3] hover:opacity-90"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Recordatorio en Google Calendar
                      </Button>
                    </div>
                  </div>
                  
                  {/* YouTube Embed (comentado para activar cuando esté disponible) */}
                  {/* 
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="Semana de Innovación UNSA 2025"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  */}
                </div>
                
                {/* Video Controls Info */}
                <div className="bg-gray-800 p-4">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h4 className="font-bold">Semana de Innovación UNSA 2025</h4>
                      <p className="text-sm text-gray-400">Universidad Nacional de San Agustín</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-sm">0 espectadores</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 h-full flex flex-col" style={{ height: '600px' }}>
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-[#FC2003] to-[#5100D3] p-4 rounded-t-2xl">
                  <div className="flex items-center gap-2 text-white">
                    <MessageSquare className="w-5 h-5" />
                    <h4 className="font-bold">Chat en Vivo</h4>
                  </div>
                </div>

                {/* Chat Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#FC2003] to-[#5100D3] rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {msg.user.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm text-gray-800">
                                {msg.user}
                              </span>
                              <span className="text-xs text-gray-400">
                                {msg.time}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{msg.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Chat Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSendMessage}
                      size="icon"
                      className="bg-gradient-to-r from-[#FC2003] to-[#5100D3]"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    El chat estará disponible durante la transmisión
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FC2003] to-[#5100D3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Fechas del Evento</h4>
              <p className="text-gray-600">19, 20 y 21 de Noviembre 2025</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FC2003] to-[#5100D3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Horario</h4>
              <p className="text-gray-600">10:00 AM - 8:00 PM (GMT-5)</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FC2003] to-[#5100D3] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Interacción</h4>
              <p className="text-gray-600">Chat en vivo y sesión de preguntas</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-[#FC2003]/10 to-[#5100D3]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              ¿Aún no te has registrado?
            </h3>
            <p className="text-gray-600 mb-6">
              Regístrate ahora para recibir el enlace directo de la transmisión en tu correo
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FC2003] to-[#5100D3] hover:opacity-90"
              onClick={() => {
                const element = document.querySelector('#registro');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Registrarme Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
