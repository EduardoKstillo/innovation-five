import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Clock, MapPin, User, Download } from 'lucide-react';
import { Button } from './ui/button';

export function ProgramSection() {
  const program = [
    {
      day: 'Día 1',
      date: '19 de Noviembre',
      sessions: [
        {
          time: '10:00 - 11:30',
          title: 'Innovación y Transferencia Tecnológica: Experiencias desde Europa',
          speaker: 'Dr. Carlos Mendoza',
          country: 'España',
          institution: 'Universidad Politécnica de Madrid',
          description: 'Casos de éxito en transferencia tecnológica desde universidades europeas al mercado global.',
        },
        {
          time: '15:00 - 16:30',
          title: 'Ecosistemas de Innovación: Modelo de Silicon Valley',
          speaker: 'Dra. Patricia Chen',
          country: 'Estados Unidos',
          institution: 'Stanford Technology Ventures',
          description: 'Metodologías y estrategias del ecosistema de innovación más exitoso del mundo.',
        },
        {
          time: '18:00 - 19:30',
          title: 'Propiedad Intelectual y Patentes en Proyectos Científicos',
          speaker: 'Dr. Miguel Ángel Torres',
          country: 'Chile',
          institution: 'Pontificia Universidad Católica de Chile',
          description: 'Protección de la propiedad intelectual y estrategias de patentamiento para proyectos de investigación.',
        },
      ],
    },
    {
      day: 'Día 2',
      date: '20 de Noviembre',
      sessions: [
        {
          time: '10:00 - 11:30',
          title: 'De la Investigación al Mercado: Casos de Éxito en Latinoamérica',
          speaker: 'Dr. Fernando Araújo',
          country: 'Brasil',
          institution: 'Universidade de São Paulo',
          description: 'Experiencias exitosas de investigaciones brasileñas que han logrado impacto comercial.',
        },
        {
          time: '15:00 - 16:30',
          title: 'Financiamiento e Inversión en Proyectos de Innovación',
          speaker: 'Dra. María González',
          country: 'México',
          institution: 'Tecnológico de Monterrey',
          description: 'Estrategias de financiamiento, capital de riesgo y fondos para proyectos de innovación.',
        },
        {
          time: '18:00 - 19:30',
          title: 'Spin-offs Universitarias: Estrategias de Desarrollo',
          speaker: 'Dr. Juan Pablo Ramírez',
          country: 'Colombia',
          institution: 'Universidad de los Andes',
          description: 'Creación y desarrollo de empresas spin-off a partir de investigación universitaria.',
        },
      ],
    },
    {
      day: 'Día 3',
      date: '21 de Noviembre',
      sessions: [
        {
          time: '10:00 - 11:30',
          title: 'Innovación Social y Desarrollo Sostenible',
          speaker: 'Dra. Ana Lucía Mendoza',
          country: 'Argentina',
          institution: 'Universidad de Buenos Aires',
          description: 'Proyectos de innovación con impacto social y contribución a los ODS.',
        },
        {
          time: '15:00 - 16:30',
          title: 'Metodologías Ágiles para Proyectos de I+D+i',
          speaker: 'Dr. Roberto Silva',
          country: 'Portugal',
          institution: 'Universidade de Lisboa',
          description: 'Aplicación de metodologías ágiles en proyectos de investigación, desarrollo e innovación.',
        },
        {
          time: '18:00 - 19:30',
          title: 'Panel de Cierre: El Futuro de la Innovación en Universidades Latinoamericanas',
          speaker: 'Panel Multidisciplinario',
          country: 'Internacional',
          institution: 'Todos los ponentes',
          description: 'Reflexiones finales y perspectivas sobre el rol de las universidades en la innovación regional.',
        },
      ],
    },
  ];

  const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
      España: '🇪🇸',
      'Estados Unidos': '🇺🇸',
      Chile: '🇨🇱',
      Brasil: '🇧🇷',
      México: '🇲🇽',
      Colombia: '🇨🇴',
      Argentina: '🇦🇷',
      Portugal: '🇵🇹',
      Internacional: '🌎',
    };
    return flags[country] || '🌍';
  };

  return (
    <section id="programa" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FC2003]/10 to-[#5100D3]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FC2003] to-[#5100D3]">
                Programa del Evento
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cronograma de
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FC2003] to-[#5100D3]">
                Conferencias
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tres días intensivos con 9 ponencias magistrales de expertos internacionales en innovación y transferencia tecnológica
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 h-auto bg-gray-100 p-1 rounded-xl">
              {program.map((day, index) => (
                <TabsTrigger
                  key={index}
                  value={`day${index + 1}`}
                  className="flex flex-col py-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FC2003] data-[state=active]:to-[#5100D3] data-[state=active]:text-white rounded-lg transition-all"
                >
                  <span className="font-bold">{day.day}</span>
                  <span className="text-xs opacity-80">{day.date}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {program.map((day, dayIndex) => (
              <TabsContent key={dayIndex} value={`day${dayIndex + 1}`} className="space-y-6">
                {day.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-[#FC2003]/30 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Time Badge */}
                      <div className="flex items-center justify-center lg:flex-col lg:items-center gap-2 bg-gradient-to-r from-[#FC2003] to-[#5100D3] text-white px-6 py-3 rounded-xl lg:min-w-[140px] shadow-md">
                        <Clock className="w-5 h-5" />
                        <div className="text-center">
                          <div className="font-bold">{session.time}</div>
                          <div className="text-xs opacity-90">Hora Perú</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#FC2003] transition-colors">
                          {session.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {session.description}
                        </p>
                        
                        {/* Speaker Info */}
                        <div className="flex flex-wrap items-center gap-4 pt-3 border-t">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-[#5100D3]" />
                            <span className="font-semibold text-gray-700">{session.speaker}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{getCountryFlag(session.country)}</span>
                            <span className="text-sm text-gray-600">{session.country}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500">{session.institution}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>

          {/* Download Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#5100D3] text-[#5100D3] hover:bg-[#5100D3] hover:text-white transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar programa completo (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
