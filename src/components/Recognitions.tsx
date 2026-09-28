import React from 'react';
import { Award, Zap, Compass, Star } from 'lucide-react';
import { RECOGNITIONS_DATA } from '../data/academyData';

export const Recognitions: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-stone-50 border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-200">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Distinciones de mérito</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Reconocimientos oficiales de Boga Swim Academy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            En nuestra academia premiamos tanto la excelencia técnica como la actitud del corazón: el coraje para vencer temores y la perseverancia para abrir camino.
          </p>
        </div>

        {/* Las dos distinciones en presentación editorial de alto nivel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {RECOGNITIONS_DATA.map((rec) => (
            <div
              key={rec.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Sutil halo decorativo */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${rec.gradient} rounded-full blur-2xl pointer-events-none`}
              />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-stone-800 text-white flex items-center justify-center shadow-md">
                    {rec.id === 'honor-fares' ? (
                      <Zap className="w-6 h-6 text-amber-400" />
                    ) : (
                      <Star className="w-6 h-6 text-stone-300" />
                    )}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Distinción especial
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {rec.title}
                  </h3>
                  <p className="text-sm font-bold text-stone-800 mt-1">
                    {rec.tagline}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 italic">
                  «{rec.meaning}»
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Criterio de otorgamiento
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {rec.criteria}
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Compass className="w-4 h-4 text-stone-600" />
                <span>Incentivo a la constancia y superación personal</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
