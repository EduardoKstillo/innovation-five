import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcmVzZW50YXRpb24lMjBzdGFnZXxlbnwxfHx8fDE3NjIzNTM0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Presentation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1654609160632-7324716196fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBhdWRpZW5jZXxlbnwxfHx8fDE3NjIyODQ3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Audience"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbmV0d29ya2luZyUyMGV2ZW50fGVufDF8fHx8MTc2MjI1NzYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Networking"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pbmFyJTIwd29ya3Nob3AlMjBwZW9wbGV8ZW58MXx8fHwxNzYyMzUzNDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Workshop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Central Circle Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-white">
                <div className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FC2003] to-[#5100D3]">
                  UNSA
                </div>
                <div className="text-xs text-gray-600">2025</div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <div className="inline-block bg-gradient-to-r from-[#FC2003]/10 to-[#5100D3]/10 px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FC2003] to-[#5100D3]">
                    ¿Por qué asistir?
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Conecta con el ecosistema
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FC2003] to-[#5100D3]">
                    de innovación global
                  </span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  La UNSA fortalece su posicionamiento como referente regional en transferencia tecnológica, creando un espacio de intercambio donde investigadores y emprendedores aprenden a comercializar sus desarrollos científicos.
                </p>

                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-3 justify-center lg:justify-start">
                    <span className="w-1.5 h-1.5 bg-[#FC2003] rounded-full"></span>
                    Acceso a experiencias de Silicon Valley, Europa y Latinoamérica
                  </p>
                  <p className="flex items-center gap-3 justify-center lg:justify-start">
                    <span className="w-1.5 h-1.5 bg-[#5100D3] rounded-full"></span>
                    Estrategias de financiamiento y propiedad intelectual
                  </p>
                  <p className="flex items-center gap-3 justify-center lg:justify-start">
                    <span className="w-1.5 h-1.5 bg-[#FC2003] rounded-full"></span>
                    Networking con expertos y comunidad científica regional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
