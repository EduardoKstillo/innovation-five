import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Clock, User, Building2 } from 'lucide-react';

export function ProgramSection() {
  const program = [
    {
      day: 'Día 1',
      date: '19 de Noviembre',
      sessions: [
        {
          time: '10:00 - 11:30',
          title: 'Innovación y Transferencia Tecnológica: Experiencias desde Europa',
          speaker: 'MSc. Silvia P. Mora - Castro',
          country: 'México',
          institution: 'Tecnológico de Monterrey',
          description: 'Casos de éxito en transferencia tecnológica desde universidades europeas al mercado global.',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
        },
        {
          time: '15:00 - 16:30',
          title: 'Ecosistemas de Innovación: Modelo de Silicon Valley',
          speaker: 'PhD. Ivan L. Medina Alvarado',
          country: 'Colombia',
          institution: 'Fundación Universitaria del Área Andina',
          description: 'Metodologías y estrategias del ecosistema de innovación más exitoso del mundo.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
        },
        {
          time: '18:00 - 19:30',
          title: 'Propiedad Intelectual y Patentes en Proyectos Científicos',
          speaker: 'Mg. Max C. Ramírez Soto',
          country: 'Perú',
          institution: 'PROCIENCIA',
          description: 'Protección de la propiedad intelectual y estrategias de patentamiento para proyectos de investigación.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
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
          speaker: 'Mg. Juan C. Suarez Delgadillo',
          country: 'Colombia',
          institution: 'Universidad El Bosque',
          description: 'Experiencias exitosas de investigaciones brasileñas que han logrado impacto comercial.',
          image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=300&fit=crop',
        },
        {
          time: '15:00 - 16:30',
          title: 'Financiamiento e Inversión en Proyectos de Innovación',
          speaker: 'Sergio Sandoval Opazo',
          country: 'Chile',
          institution: 'Universidad de La Frontera (UFRO)',
          description: 'Estrategias de financiamiento, capital de riesgo y fondos para proyectos de innovación.',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
        },
        {
          time: '18:00 - 19:30',
          title: 'Spin-offs Universitarias: Estrategias de Desarrollo',
          speaker: 'Joannes Granja Ibarretxe',
          country: 'España',
          institution: 'IDOM CONSULTING',
          description: 'Creación y desarrollo de empresas spin-off a partir de investigación universitaria.',
          image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=300&fit=crop',
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
          speaker: 'Ing. Patricia Anguita Mackay',
          country: 'Chile',
          institution: 'Universidad Santo Tomás de Chile',
          description: 'Proyectos de innovación con impacto social y contribución a los ODS.',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop',
        },
        {
          time: '15:00 - 16:30',
          title: 'Metodologías Ágiles para Proyectos de I+D+i',
          speaker: 'Mg. Jorge O\'Ryan Schütz',
          country: 'Chile',
          institution: 'Centro de Innovación UC, Anacleto Angelini',
          description: 'Aplicación de metodologías ágiles en proyectos de investigación, desarrollo e innovación.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        },
        {
          time: '18:00 - 19:30',
          title: 'Panel de Cierre: El Futuro de la Innovación en Universidades Latinoamericanas',
          speaker: 'Por definir',
          country: 'Perú',
          institution: 'Pontificia Universidad Católica del Perú',
          description: 'Reflexiones finales y perspectivas sobre el rol de las universidades en la innovación regional.',
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
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
      Perú: '🇵🇪',
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
                  className="flex flex-col py-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#C1246B] data-[state=active]:to-[#8B1353] data-[state=active]:text-white rounded-lg transition-all"
                >
                  <span className="font-bold">{day.day}</span>
                  <span className="text-xs opacity-80">{day.date}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {program.map((day, dayIndex) => (
              <TabsContent key={dayIndex} value={`day${dayIndex + 1}`} className="space-y-5">
                {day.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl hover:border-[#C1246B]/30 hover:-translate-y-1 transition-all duration-300 group h-auto md:h-48"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Left side - Image (oculta en móvil) */}
                      <div className="hidden md:block md:w-72 flex-shrink-0 relative overflow-hidden">
                        <img
                          src={session.image}
                          alt={session.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>

                      {/* Right side - Information */}
                      <div className="flex-1 p-5 flex flex-col justify-center">
                        {/* Time */}
                        <div className="flex items-center gap-2 text-[#C1246B] font-semibold mb-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{session.time}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 group-hover:text-[#C1246B] transition-colors duration-300 line-clamp-2">
                          {session.title}
                        </h3>

                        {/* Speaker */}
                        <div className="flex items-center gap-2 text-gray-800 font-semibold mb-1">
                          <User className="w-4 h-4 text-gray-600" />
                          <span className="text-sm">{session.speaker}</span>
                        </div>

                        {/* Institution */}
                        <div className="flex items-center gap-2 text-gray-600">
                          <Building2 className="w-4 h-4 text-gray-500" />
                          <span className="text-sm flex items-center gap-1">
                            {session.institution} • {session.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}