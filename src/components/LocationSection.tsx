import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock, Calendar } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Calle 10 de Arroyo Bonito de Manoguayabo 16, Santo Domingo Oeste, República Dominicana'
  )}`;

  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hola, deseo saber cómo llegar y consultar horarios en Boga Swim Academy.'
  )}`;

  return (
    <section id="ubicacion" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-boga-navy text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-boga-navy" />
            <span>Sede e instalaciones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Nuestra ubicación en Santo Domingo Oeste
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Un espacio acondicionado para la enseñanza acuática en un entorno accesible y protegido para toda la familia.
          </p>
        </div>

        {/* Bloque principal de ubicación */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tarjeta de información directa */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-boga-yellow text-xs font-bold uppercase tracking-wider">Dirección oficial</span>
                <p className="text-lg sm:text-xl font-bold text-white mt-1 leading-snug">
                  Calle 10 de Arroyo Bonito de Manoguayabo #16
                </p>
                <p className="text-sm text-slate-300 mt-1">
                  Santo Domingo Oeste, República Dominicana
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-boga-sky mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Ciclo académico</p>
                    <p className="text-sm font-semibold text-white">Febrero a noviembre (43 semanas)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-boga-yellow mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Frecuencia por grupo</p>
                    <p className="text-sm font-semibold text-white">1 hora semanal por sesión</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-emerald-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Atención telefónica y WhatsApp</p>
                    <p className="text-sm font-semibold text-white">849-879-1012</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-boga-navy" />
                <span>Cómo llegar con Google Maps</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-boga-navy hover:bg-boga-navy-light transition-colors border border-white/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar disponibilidad y horarios</span>
              </a>
            </div>
          </div>

          {/* Mapa / Vista geográfica */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-md min-h-[350px] relative bg-slate-100">
            <iframe
              title="Ubicación de Boga Swim Academy en Santo Domingo Oeste"
              src="https://maps.google.com/maps?q=Calle+10+de+Arroyo+Bonito+de+Manoguayabo+16+Santo+Domingo+Oeste&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] lg:min-h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};
