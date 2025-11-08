import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Youtube, label: 'YouTube', url: 'https://youtube.com' },
  ];

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#sobre' },
      { label: 'Our Speakers', href: '#ponentes' },
      { label: 'Program', href: '#programa' },
      { label: 'Contact', href: '#contacto' },
    ],
    support: [
      { label: 'Registration', href: '#registro' },
      { label: 'FAQ', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
    ],
    event: [
      { label: 'Event Schedule', href: '#programa' },
      { label: 'Get Tickets', href: '#registro' },
      { label: 'Live Stream', href: '#transmision' },
      { label: 'Sponsors', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FC2003] to-[#5100D3] rounded-lg flex items-center justify-center">
                  <span className="text-white">UNSA</span>
                </div>
                <div>
                  <div className="text-white">Semana de</div>
                  <div className="text-white/80 text-sm">Innovación 2025</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Universidad Nacional de San Agustín de Arequipa - Fortaleciendo
                el ecosistema de innovación regional
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 hover:bg-gradient-to-r hover:from-[#FC2003] hover:to-[#5100D3] rounded-lg flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Links */}
            <div>
              <h4 className="text-white mb-4">Event</h4>
              <ul className="space-y-2">
                {footerLinks.event.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>
                © 2025 Universidad Nacional de San Agustín - Dirección de
                Innovación y Transferencia Tecnológica
              </p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
