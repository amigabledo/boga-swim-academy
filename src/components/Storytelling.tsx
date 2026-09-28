import React from 'react';
import { Compass, Target, Award, HeartHandshake } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const Storytelling: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de sección tipo editorial */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-boga-navy text-xs font-semibold uppercase tracking-wider mb-4">
            Filosofía e identidad
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            No solo enseñamos a nadar. Enseñamos a avanzar.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            El nombre de nuestra academia proviene del pasaje de Lucas 5:4:{' '}
            <span className="italic text-boga-navy font-semibold">«Boga mar adentro»</span>.
            Bogar significa remar hacia lo profundo, tener la valentía de creer cuando aún no se ven los resultados y poner toda la confianza en Aquel que nos sostiene.
          </p>
        </div>

        {/* Composición asimétrica: Historia + Fotografías reales */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Bloque visual izquierdo */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-slate-100">
                  <img
                    src="/assets/gallery/smiling-swimmer-girl.jpg"
                    alt="Estudiante sonriendo en la piscina de Boga Swim Academy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 rounded-xl bg-boga-mist border border-slate-200/60">
                  <p className="text-xs font-semibold text-boga-navy uppercase tracking-wider">Superación</p>
                  <p className="text-sm font-bold text-slate-800 mt-1">El agua como escuela de vida</p>
                </div>
              </div>

              <div className="space-y-4 pt-8 sm:pt-12">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-xs font-semibold text-boga-sky-dark uppercase tracking-wider">Valores bíblicos</p>
                  <p className="text-sm font-bold text-slate-800 mt-1">Fe, paz, amor y temor de Dios</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-slate-100">
                  <img
                    src="/assets/gallery/kid-rainbow-pool.jpg"
                    alt="Niña sonriendo durante una actividad de juego acuático"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bloque narrativo derecho: Misión, Visión y Pilares */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-boga-navy via-boga-navy-dark to-boga-navy-deep text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-boga-sky/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-boga-yellow text-xs font-bold uppercase tracking-wider mb-2">
                    <Target className="w-4 h-4" />
                    <span>Nuestra misión</span>
                  </div>
                  <p className="text-lg sm:text-xl font-medium leading-snug">
                    {ACADEMY_INFO.mission}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <div className="inline-flex items-center gap-2 text-boga-sky text-xs font-bold uppercase tracking-wider mb-2">
                    <Compass className="w-4 h-4" />
                    <span>Nuestra visión</span>
                  </div>
                  <p className="text-base sm:text-lg text-slate-200 leading-snug">
                    {ACADEMY_INFO.vision}
                  </p>
                </div>
              </div>
            </div>

            {/* Cuatro valores fundacionales en tarjetas compactas */}
            <div className="grid grid-cols-2 gap-4">
              {ACADEMY_INFO.values.map((val) => (
                <div key={val} className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-boga-sky/60 transition-colors shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-boga-sky"></div>
                    <h3 className="text-base font-bold text-slate-900">{val}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Nota de compromiso */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-slate-700 text-sm">
              <HeartHandshake className="w-5 h-5 text-boga-yellow-dark shrink-0 mt-0.5" />
              <p>
                Cada sesión se desarrolla con respeto al ritmo del alumno, calidez docente y comunicación constante con los padres de familia.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
