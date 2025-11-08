import { Facebook, Youtube, Music } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
    { icon: Youtube, label: 'YouTube', url: 'https://youtube.com' },
    { icon: Music, label: 'TikTok', url: 'https://tiktok.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FC2003] to-[#5100D3] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">UNSA</span>
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg">Semana de Innovación</div>
                <div className="text-white/80 text-sm">UNSA 2025</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-[#FC2003] hover:to-[#5100D3] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Universidad Nacional de San Agustín de Arequipa
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Dirección de Innovación y Transferencia Tecnológica
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
