import { MapPin, Award } from 'lucide-react';
import silviaImg from '../assets/speakers/silvia-mora-castro.jpg';
import juanCImg from '../assets/speakers/juan-suarez.jpg';
import jorgeOImg from '../assets/speakers/jorge-oryan.jpeg';
import joannesGImg from '../assets/speakers/joannes-granja.png';
import ivanMImg from '../assets/speakers/ivan-medina.jpg';
import patiAImg from '../assets/speakers/patricia-anguita.jpg';
import sergioSImg from '../assets/speakers/sergio-sandoval.jpg';
import maxRImg from '../assets/speakers/max-ramirez.jpg';

export function SpeakersSection() {
  const speakers = [
    {
      name: 'MSc. Silvia P. Mora - Castro',
      country: 'México',
      institution: 'Tecnológico de Monterrey',
      topic: 'Innovación y Transferencia Tecnológica',
      image: silviaImg,
    },
    {
      name: 'PhD. Ivan L. Medina Alvarado',
      country: 'Colombia',
      institution: 'Fundación Universitaria del Área Andina',
      topic: 'Ecosistemas de Innovación',
      image: ivanMImg,
    },
    {
      name: 'Mg. Max C. Ramírez Soto',
      country: 'Perú',
      institution: 'PROCIENCIA',
      topic: 'Propiedad Intelectual y Patentes',
      image: maxRImg,
    },
    {
      name: 'Mg. Juan C. Suarez Delgadillo',
      country: 'Colombia',
      institution: 'Universidad El Bosque',
      topic: 'De la Investigación al Mercado',
      image: juanCImg,
    },
    {
      name: 'Sergio Sandoval Opazo',
      country: 'Chile',
      institution: 'Universidad de La Frontera (UFRO)',
      topic: 'Financiamiento e Inversión',
      image: sergioSImg,
    },
    {
      name: 'Joannes Granja Ibarretxe',
      country: 'España',
      institution: 'IDOM CONSULTING',
      topic: 'Spin-offs Universitarias',
      image: joannesGImg,
    },
    {
      name: 'Ing. Patricia Anguita Mackay',
      country: 'Chile',
      institution: 'Universidad Santo Tomás de Chile',
      topic: 'Innovación Social y Desarrollo Sostenible',
      image: patiAImg,
    },
    {
      name: 'Mg. Jorge O’Ryan Schütz',
      country: 'Chile',
      institution: 'Centro de Innovación UC, Anacleto Angelini',
      topic: 'Metodologías Ágiles para I+D+i',
      image: jorgeOImg,
    },
    {
      name: 'Por definir',
      country: 'Perú',
      institution: 'Pontificia Universidad Católica del Perú',
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
      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-black/30"></div>
      
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
