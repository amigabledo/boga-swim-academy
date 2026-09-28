import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Programas', href: '#programas' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hola, quiero información sobre las clases de natación en Boga Swim Academy.'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logotipo oficial */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/assets/branding/logo-transparent.png"
              alt="Boga Swim Academy"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Enlaces escritorio */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-stone-900 transition-colors rounded-lg hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA principal */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 shadow-sm hover:shadow transition-all duration-200 group"
            >
              <span>Quiero inscribir a mi hijo</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Botón menú móvil */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-stone-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-boga-yellow"
              aria-label="Alternar menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-stone-900"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-stone-900 hover:bg-stone-800 shadow-sm transition-colors"
            >
              <span>Inscribirme por WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
