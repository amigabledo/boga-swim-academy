import React from 'react';
import { Calendar, Clock, Award, Shield, CheckCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const Methodology: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Adaptación y seguridad',
      desc: 'Superación gradual del miedo mediante locomoción, respiración y flotación en un ambiente de afecto.',
    },
    {
      number: '02',
      title: 'Iniciación y fundamentos',
      desc: 'Dominio de saltos, sumersión orientada y primeros desplazamientos fluidos en estilo crol.',
    },
    {
      number: '03',
      title: 'Desarrollo de estilos',
      desc: 'Incorporación metódica de dorso, pecho y mariposa, cuidando la coordinación neuromuscular.',
    },
    {
      number: '04',
      title: 'Optimización y liderazgo',
      desc: 'Perfeccionamiento biomecánico, resistencia y principios de salvamento para nadadores avanzados.',
    },
  ];

  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-boga-navy text-xs font-semibold uppercase tracking-wider mb-4">
            Estructura académica
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ¿Qué hace diferente a Boga Swim Academy?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Un modelo pedagógico que combina el rigor técnico de la natación con la formación de carácter, respetando el tiempo madurativo de cada estudiante.
          </p>
        </div>

        {/* Panel numérico de alto impacto editorial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-2 relative z-10">
              <span className="text-boga-sky text-xs font-bold uppercase tracking-widest">Temporada anual</span>
              <p className="text-5xl font-black tracking-tight text-white">43</p>
              <p className="text-sm font-semibold text-slate-300">Semanas de transformación</p>
            </div>
            <p className="text-xs text-slate-400 mt-6 relative z-10">
              Ciclo continuo de 10 meses (febrero a noviembre) que consolida hábitos y habilidades duraderas.
            </p>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-boga-sky/20 rounded-full blur-xl pointer-events-none"></div>
          </div>

          <div className="p-8 rounded-3xl bg-boga-navy text-white relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-2 relative z-10">
              <span className="text-boga-yellow text-xs font-bold uppercase tracking-widest">Frecuencia semanal</span>
              <p className="text-5xl font-black tracking-tight text-white">1 <span className="text-2xl font-bold text-boga-sky">hora</span></p>
              <p className="text-sm font-semibold text-slate-200">De clase estructurada por semana</p>
            </div>
            <p className="text-xs text-slate-300 mt-6 relative z-10">
              Dividida en tres momentos pedagógicos: bienvenida y oración, desarrollo técnico intensivo, y cierre con dinámicas lúdicas.
            </p>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-boga-yellow/20 rounded-full blur-xl pointer-events-none"></div>
          </div>

          <div className="p-8 rounded-3xl bg-boga-mist border border-slate-200 text-slate-900 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-2 relative z-10">
              <span className="text-boga-navy text-xs font-bold uppercase tracking-widest">Integración formativa</span>
              <p className="text-5xl font-black tracking-tight text-boga-navy">10</p>
              <p className="text-sm font-semibold text-slate-800">Principios bíblicos aplicados</p>
            </div>
            <p className="text-xs text-slate-600 mt-6 relative z-10">
              Un principio por cada mes del año, transmitido de manera vivencial tanto dentro como fuera de la piscina.
            </p>
          </div>

        </div>

        {/* Fases de evolución del nadador */}
        <div className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-slate-50/50">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Evolución metódica paso a paso
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Las 5 cualidades esenciales que domina todo nadador en Boga: locomoción, respiración, flotación, sumersión y saltos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div key={st.number} className="relative p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <span className="text-2xl font-black text-slate-300 mb-3">{st.number}</span>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">{st.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
