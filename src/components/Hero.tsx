import React from 'react';
import { ArrowUpRight, ShieldCheck, Heart, Sparkles, Waves } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hola, quiero información sobre inscripciones en Boga Swim Academy.'
  )}`;

  return (
    <section id="inicio" className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-warm-50 via-white to-warm-100">
      {/* Elementos decorativos sutiles de fondo (ondas y reflejos acuáticos) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-boga-yellow/10 rounded-full blur-3xl pointer-events-none -ml-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna editorial izquierda: Tipografía y llamados a la acción */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Tagline superior en tipo oración */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/60 text-stone-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-stone-400 animate-ping" />
              <span>Boga mar adentro</span>
              <span className="text-stone-400">|</span>
              <span className="text-stone-600 font-normal">Lucas 5:4</span>
            </div>

            {/* Titular principal con jerarquía editorial fuerte */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.12]">
              Natación que forma{' '}
              <span className="text-stone-700">
                habilidades
              </span>
              , carácter y propósito.
            </h1>

            {/* Párrafo descriptivo claro y emocional */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              En Boga Swim Academy acompañamos a cada nadador a descubrir su potencial en el agua. 
              Unimos la enseñanza técnica deportiva de alto nivel con principios bíblicos y valores de vida, en un entorno seguro y familiar en Santo Domingo Oeste.
            </p>

            {/* Botones de acción principales */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-slate-900 bg-boga-yellow hover:bg-boga-yellow-dark shadow-lg shadow-boga-yellow/20 hover:shadow-xl transition-all duration-200 group"
              >
                <span>Quiero inscribir a mi hijo</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#programas"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-stone-50 border border-stone-200 shadow-sm transition-all duration-200"
              >
                <Waves className="w-4 h-4 text-boga-sky" />
                <span>Conocer los programas</span>
              </a>
            </div>

            {/* Puntos de valor y confianza */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Seguridad</p>
                  <p className="text-sm font-semibold text-slate-800">Entorno protegido</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-50 text-boga-yellow-dark mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Temporada anual</p>
                  <p className="text-sm font-semibold text-slate-800">43 semanas</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Formación integral</p>
                  <p className="text-sm font-semibold text-slate-800">Técnica y valores</p>
                </div>
              </div>
            </div>

          </div>

          {/* Columna editorial derecha: Composición fotográfica real asimétrica */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Marco fotográfico principal */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/15 border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[4/5]">
                <img
                  src="/assets/gallery/hero-prayer.jpg"
                  alt="Momento de oración y preparación antes de entrar a la piscina en Boga Swim Academy"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Degradado para texto superpuesto */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                {/* Leyenda editorial integrada en la foto */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                  <span className="inline-block px-2.5 py-1 rounded bg-boga-yellow text-slate-950 text-xs font-bold uppercase tracking-wider mb-2">
                    Momento real
                  </span>
                  <p className="text-base sm:text-lg font-bold leading-snug">
                    Unión, oración y respeto antes de cada inmersión.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1">
                    Clase impartida en la piscina de Santo Domingo Oeste.
                  </p>
                </div>
              </div>

              {/* Fotografía secundaria superpuesta (bebé con entrenador) */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 z-20 w-36 sm:w-44 rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/assets/gallery/coach-baby-learning.jpg"
                  alt="Entrenador guiando a un niño en el agua con paciencia"
                  className="w-full h-32 sm:h-36 object-cover"
                />
                <div className="p-2 bg-white text-center">
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">Atención cercana</p>
                  <p className="text-[10px] text-slate-500">Paso a paso</p>
                </div>
              </div>

              {/* Tarjeta flotante de acreditación de valores */}
              <div className="absolute -top-4 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-sm p-3.5 sm:p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-boga-sky/20 flex items-center justify-center text-boga-navy font-bold">
                  <Waves className="w-5 h-5 text-boga-navy" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">10 principios bíblicos</p>
                  <p className="text-[11px] text-slate-500">Un valor cada mes</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
