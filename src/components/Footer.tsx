import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone, Heart } from 'lucide-react';
import { ACADEMY_INFO, PROGRAMS_DATA } from '../data/academyData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hola, deseo información sobre Boga Swim Academy.'
  )}`;

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Columna marca */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/branding/logo-transparent.png"
                alt="Boga Swim Academy"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Academia de natación cristiana en Santo Domingo Oeste. Formamos habilidades acuáticas y valores de carácter en cada brazada para glorificar a Dios.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ACADEMY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors border border-white/5 hover:border-white/20"
                aria-label="Instagram de Boga Swim Academy"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 flex items-center justify-center transition-colors border border-emerald-500/20"
                aria-label="WhatsApp de Boga Swim Academy"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna programas */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Programas por edad
            </p>
            <ul className="space-y-2 text-sm">
              {PROGRAMS_DATA.map((prog) => (
                <li key={prog.id}>
                  <a
                    href="#programas"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{prog.name} ({prog.ages})</span>
                    <span className="text-[11px] opacity-60 group-hover:opacity-100">{prog.mascot}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna navegación rápida */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Navegación
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">Metodología</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Galería</a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">Ubicación</a>
              </li>
            </ul>
          </div>

          {/* Columna contacto directo */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Contacto y sede
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-boga-sky shrink-0 mt-0.5" />
                <span>{ACADEMY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{ACADEMY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{ACADEMY_INFO.instagram}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} Boga Swim Academy. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Inspirados en Lucas 5:4</span>
            <span>•</span>
            <span>Santo Domingo Oeste, República Dominicana</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
