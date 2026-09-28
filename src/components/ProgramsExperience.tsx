import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Waves } from 'lucide-react';
import { PROGRAMS_DATA, ACADEMY_INFO } from '../data/academyData';

export const ProgramsExperience: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(PROGRAMS_DATA[0].id);

  const activeProgram = PROGRAMS_DATA.find((p) => p.id === selectedProgramId) || PROGRAMS_DATA[0];

  const whatsappProgramUrl = `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${encodeURIComponent(
    activeProgram.whatsappMessage
  )}`;

  return (
    <section id="programas" className="py-20 lg:py-28 bg-stone-50 relative overflow-hidden">
      {/* Fondo acuático decorativo */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-stone-200/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado editorial */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100/80 text-stone-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Waves className="w-3.5 h-3.5 text-stone-600" />
            <span>Trayectoria formativa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Programas diseñados para cada etapa de crecimiento
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Una ruta progresiva que acompaña al estudiante desde sus primeros juegos en el agua hasta el dominio técnico integral de los cuatro estilos olímpicos.
          </p>
        </div>

        {/* Barra interactiva de etapas (Progreso visual 1 → 2 → 3 → 4) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {PROGRAMS_DATA.map((prog, index) => {
            const isSelected = prog.id === selectedProgramId;
            return (
              <button
                key={prog.id}
                onClick={() => setSelectedProgramId(prog.id)}
                className={`relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border ${
                  isSelected
                    ? 'bg-white border-stone-800 shadow-lg shadow-stone-800/10 ring-2 ring-stone-800/10 translate-y-[-2px]'
                    : 'bg-white/70 hover:bg-white border-slate-200/80 hover:border-slate-300 text-slate-600'
                }`}
              >
                {/* Indicador de paso */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                      isSelected
                        ? 'bg-stone-800 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    Etapa {prog.stageNumber}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {prog.ages}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-base sm:text-lg font-extrabold ${isSelected ? 'text-stone-900' : 'text-slate-800'}`}>
                      {prog.name}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      {prog.stageName} • {prog.mascot}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-stone-800 translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </div>

                {/* Línea de acento inferior */}
                {isSelected && (
                  <div
                    className="absolute bottom-0 left-4 right-4 h-1 rounded-full"
                    style={{ backgroundColor: prog.accentColor }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Panel interactivo del programa seleccionado */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Información y habilidades (Columna izquierda) */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                {/* Encabezado con mascota y edad */}
                <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
                      Rango: {activeProgram.ages}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-stone-100 text-stone-700">
                      Fase: {activeProgram.stageName}
                    </span>
                  </div>

                  {/* Silueta de la mascota oficial */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80">
                    <img
                      src={activeProgram.mascotImage}
                      alt={activeProgram.mascot}
                      className="w-7 h-7 object-contain"
                    />
                    <span className="text-xs font-bold text-slate-700">
                      Símbolo: {activeProgram.mascot}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Programa {activeProgram.name}
                </h3>

                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                  {activeProgram.fullDescription}
                </p>

                {/* Habilidades desarrolladas */}
                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Objetivos formativos y destrezas
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeProgram.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="text-sm font-medium text-slate-700 leading-snug">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Estilos incluidos */}
                <div className="mt-5 p-3.5 rounded-xl bg-stone-50/70 border border-stone-200/80 flex items-center gap-3">
                  <Waves className="w-4 h-4 text-stone-800 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-stone-800">Estilos de nado:</strong>{' '}
                    {activeProgram.styles.join(', ')}
                  </p>
                </div>
              </div>

              {/* Botón de acción con mensaje prellenado en WhatsApp */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappProgramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-boga-yellow hover:bg-boga-yellow-dark shadow-md hover:shadow-lg transition-all"
                >
                  <span>Consultar sobre el programa {activeProgram.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-slate-500 text-center sm:text-left">
                  Cupos organizados por edad y nivel
                </span>
              </div>
            </div>

            {/* Fotografía editorial real del programa (Columna derecha) */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-100 overflow-hidden">
              <img
                src={activeProgram.realPhoto}
                alt={`Alumnos del programa ${activeProgram.name} en la piscina de Boga Swim Academy`}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

              {/* Tag flotante */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-block px-3 py-1 rounded bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-2">
                  Fotografía real de la academia
                </div>
                <p className="text-lg font-extrabold leading-snug">
                  Entrenamiento y cuidado en cada brazada
                </p>
                <p className="text-xs text-slate-200 mt-1">
                  Enseñanza estructurada para el grupo {activeProgram.name} ({activeProgram.ages})
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
