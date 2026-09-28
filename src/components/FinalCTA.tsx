import React from 'react';
import { ArrowUpRight, MessageCircle, Waves } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const FinalCTA: React.FC = () => {
  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hola, quiero inscribir a mi hijo en Boga Swim Academy y conocer la disponibilidad de cupos.'
  )}`;

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-boga-navy to-boga-navy-deep text-white relative overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-boga-sky/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-boga-yellow/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-boga-yellow text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
          <Waves className="w-3.5 h-3.5 text-boga-sky" />
          <span>Boga mar adentro</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
          El próximo paso de tu hijo comienza en el agua
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Más que nadar, cultivamos seguridad, perseverancia y propósito. Permítenos acompañar a tu familia en este camino de crecimiento integral.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-boga-yellow hover:bg-boga-yellow-dark shadow-xl shadow-boga-yellow/20 hover:scale-105 transition-all duration-200 group"
          >
            <MessageCircle className="w-5 h-5 text-slate-950" />
            <span>Quiero información e inscripción</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href="#programas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all duration-200"
          >
            <span>Ver edades y niveles</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-300">
          Atención personalizada inmediata vía WhatsApp • Santo Domingo Oeste
        </p>

      </div>
    </section>
  );
};
