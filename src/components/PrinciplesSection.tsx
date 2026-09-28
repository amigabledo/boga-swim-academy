import React, { useState } from 'react';
import { Sparkles, Calendar, BookOpen, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';
import { MONTHLY_PRINCIPLES } from '../data/academyData';

export const PrinciplesSection: React.FC = () => {
  // Por defecto seleccionamos el mes 8 (Septiembre) que corresponde al mes actual en curso (septiembre)
  const [activeMonthIndex, setActiveMonthIndex] = useState<number>(7);

  const activePrinciple = MONTHLY_PRINCIPLES[activeMonthIndex];

  const handlePrev = () => {
    setActiveMonthIndex((prev) => (prev > 0 ? prev - 1 : MONTHLY_PRINCIPLES.length - 1));
  };

  const handleNext = () => {
    setActiveMonthIndex((prev) => (prev < MONTHLY_PRINCIPLES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-boga-navy-dark to-slate-950 text-white relative overflow-hidden">
      {/* Luces y halos en el fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-boga-sky/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-boga-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-boga-yellow text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formación de carácter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            10 principios bíblicos, uno para cada mes del año
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            La formación en Boga Swim Academy trasciende la técnica del estilo. En cada clase sembramos principios que acompañan a nuestros nadadores para toda la vida.
          </p>
        </div>

        {/* Carrusel/Selector de meses interactivo */}
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-8">
          {MONTHLY_PRINCIPLES.map((principle, index) => {
            const isCurrent = index === activeMonthIndex;
            return (
              <button
                key={principle.monthNumber}
                onClick={() => setActiveMonthIndex(index)}
                className={`py-3 px-2 rounded-xl text-center transition-all duration-200 border ${
                  isCurrent
                    ? 'bg-boga-sky text-slate-950 font-bold border-white shadow-lg shadow-boga-sky/30 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 border-white/5 hover:border-white/20'
                }`}
              >
                <span className="block text-[10px] uppercase tracking-wider font-semibold opacity-80">
                  Mes {principle.monthNumber}
                </span>
                <span className="block text-xs sm:text-sm font-bold truncate mt-0.5">
                  {principle.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tarjeta destacada del principio activo */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna izquierda: Información del principio */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-boga-yellow/20 text-boga-yellow border border-boga-yellow/30 text-xs font-bold uppercase">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Mes {activePrinciple.monthNumber} • {activePrinciple.monthName}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Principio anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Principio siguiente"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {activePrinciple.title}
                </h3>
                <p className="text-sm sm:text-base text-boga-sky font-semibold mt-1">
                  Concepto: {activePrinciple.concept}
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                {activePrinciple.description}
              </p>

              {/* Aplicación práctica dentro del agua */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-boga-sky/20 text-boga-sky shrink-0 mt-0.5">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Aplicación práctica en el agua
                  </p>
                  <p className="text-sm sm:text-base text-white font-medium mt-1">
                    {activePrinciple.waterApplication}
                  </p>
                </div>
              </div>
            </div>

            {/* Columna derecha: Resumen del decálogo */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-black/30 border border-white/10 space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-boga-yellow" />
                <span>Los 10 valores anuales</span>
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                {MONTHLY_PRINCIPLES.map((p, idx) => (
                  <li
                    key={p.monthNumber}
                    onClick={() => setActiveMonthIndex(idx)}
                    className={`cursor-pointer px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-colors ${
                      idx === activeMonthIndex
                        ? 'bg-boga-navy text-white font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{p.monthNumber}. {p.title}</span>
                    <span className="text-[11px] opacity-70">{p.monthName}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
