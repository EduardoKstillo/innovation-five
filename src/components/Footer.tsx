import { Facebook, Youtube, Music } from 'lucide-react';
import DittLogo from './logos/DittLogo';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/DITTUNSA' },
    { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@DITTUNSA' },
    { icon: Music, label: 'TikTok', url: 'https://tiktok.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          {/* Logo DITT */}
          <div className="flex justify-center">
            <DittLogo className="w-60 h-16 sm:w-68 sm:h-10" />
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
              © 2025 Eduardo Castillo
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
