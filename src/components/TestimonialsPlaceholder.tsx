import React from 'react';
import { MessageSquareQuote, Heart, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const TestimonialsPlaceholder: React.FC = () => {
  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hola, me gustaría compartir mi experiencia con Boga Swim Academy.'
  )}`;

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-boga-navy text-xs font-semibold uppercase tracking-wider mb-6">
          <MessageSquareQuote className="w-3.5 h-3.5 text-boga-sky" />
          <span>Comunidad y familias</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Creciendo juntos en el agua y en valores
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          La mayor satisfacción de Boga Swim Academy es ver a cada estudiante perder el temor, sonreír al flotar y forjar amistades sanas basadas en el respeto y el amor mutuo.
        </p>

        {/* Bloque preparado para recibir testimonios de padres de familia */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-boga-mist border border-slate-200/80 text-left max-w-3xl mx-auto shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white text-boga-navy flex items-center justify-center shadow-sm">
              <Heart className="w-5 h-5 text-boga-coral" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Espacio de familias Boga</p>
              <p className="text-xs text-slate-500">Acompañamiento formativo continuo</p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
            «Nuestra prioridad es que cada padre y madre sienta la certeza de que su hijo está en las mejores manos, aprendiendo a nadar con paciencia pedagógica y principios que edifican su vida.»
          </p>

          <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="text-xs font-medium text-slate-500">
              ¿Eres parte de nuestra comunidad de padres?
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-boga-navy hover:text-boga-sky flex items-center gap-1 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-boga-yellow-dark" />
              <span>Comparte tu experiencia con nosotros</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
