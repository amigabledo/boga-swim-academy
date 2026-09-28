import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, Users, LifeBuoy } from 'lucide-react';

export const TrustSafety: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Acompañamiento dentro del agua',
      desc: 'Nuestros instructores permanecen dentro de la piscina guiando a los estudiantes, garantizando asistencia inmediata y tranquilidad total.',
    },
    {
      icon: Users,
      title: 'Grupos organizados por etapa',
      desc: 'Cada niño aprende con compañeros de su mismo rango de edad y nivel madurativo, fomentando una dinámica respetuosa y estimulante.',
    },
    {
      icon: LifeBuoy,
      title: 'Enfoque en salvamento acuático',
      desc: 'No solo enseñamos a desplazarse; capacitamos al nadador para saber flotar, respirar y reaccionar de manera segura ante cualquier eventualidad.',
    },
    {
      icon: HeartHandshake,
      title: 'Alianza continua con las familias',
      desc: 'Mantenemos un canal abierto de comunicación con los padres, reportando los avances de cada alumno y celebrando juntos cada logro alcanzado.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <Eye className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tranquilidad para los padres</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Un entorno estructurado, afectivo y seguro
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Sabemos que confiar el cuidado de un hijo en el agua es una decisión importante. En Boga Swim Academy combinamos una metodología probada con la calidez humana y la vocación docente que tu familia merece.
          </p>
        </div>

        {/* Pilares de confianza */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-boga-navy/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white text-boga-navy flex items-center justify-center shadow-sm border border-slate-100 mb-4">
                    <Icon className="w-6 h-6 text-boga-navy" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
