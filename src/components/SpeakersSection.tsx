import { MapPin, Award } from 'lucide-react';

export function SpeakersSection() {
  const speakers = [
    {
      name: 'Dr. Carlos Mendoza',
      country: 'España',
      institution: 'Universidad Politécnica de Madrid',
      topic: 'Innovación y Transferencia Tecnológica',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'Dra. Patricia Chen',
      country: 'Estados Unidos',
      institution: 'Stanford Technology Ventures',
      topic: 'Ecosistemas de Innovación',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Miguel Ángel Torres',
      country: 'Chile',
      institution: 'Pontificia Universidad Católica de Chile',
      topic: 'Propiedad Intelectual y Patentes',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Fernando Araújo',
      country: 'Brasil',
      institution: 'Universidade de São Paulo',
      topic: 'De la Investigación al Mercado',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Dra. María González',
      country: 'México',
      institution: 'Tecnológico de Monterrey',
      topic: 'Financiamiento e Inversión',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Juan Pablo Ramírez',
      country: 'Colombia',
      institution: 'Universidad de los Andes',
      topic: 'Spin-offs Universitarias',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    },
    {
      name: 'Dra. Ana Lucía Mendoza',
      country: 'Argentina',
      institution: 'Universidad de Buenos Aires',
      topic: 'Innovación Social y Desarrollo Sostenible',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Roberto Silva',
      country: 'Portugal',
      institution: 'Universidade de Lisboa',
      topic: 'Metodologías Ágiles para I+D+i',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    },
    {
      name: 'Panel Internacional',
      country: 'Múltiples Países',
      institution: 'Todos los ponentes',
      topic: 'El Futuro de la Innovación Universitaria',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
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
      'Múltiples Países': '🌎',
    };
    return flags[country] || '🌍';
  };

  return (
    <section id="ponentes" className="py-20 bg-gradient-to-br from-[#FC2003] via-[#8B0156] to-[#5100D3] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-white">
                Ponentes Internacionales
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Expertos de Clase
              <span className="block">Mundial</span>
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              9 expertos internacionales de 8 países compartirán sus experiencias en innovación y transferencia tecnológica
            </p>
          </div>

          {/* Speakers Grid - 3 rows of 3 */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="group text-center"
              >
                {/* Image Container */}
                <div className="relative mb-5 inline-block">
                  {/* Outer Ring */}
                  <div className="absolute -inset-2 bg-white/30 rounded-full group-hover:bg-white/50 transition-all duration-300 group-hover:scale-110"></div>
                  {/* Image */}
                  <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Flag Badge */}
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-xl">
                    {getCountryFlag(speaker.country)}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    {speaker.name}
                  </h3>
                  <p className="text-white/90 text-sm font-medium">
                    {speaker.topic}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{speaker.country}</span>
                  </div>
                  <p className="text-white/70 text-xs">
                    {speaker.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-16">
            <p className="text-white/90 text-sm">
              Cada ponente compartirá su experiencia y conocimiento en una sesión de 90 minutos con espacio para preguntas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
