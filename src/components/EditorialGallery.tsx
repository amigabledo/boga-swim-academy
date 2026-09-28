import React, { useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';
import { EDITORIAL_GALLERY } from '../data/academyData';

export const EditorialGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#F4F8FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-boga-navy text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-boga-navy" />
            <span>Registro fotográfico real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            La experiencia viva de Boga en imágenes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Momentos auténticos capturados en nuestras clases: superación, compañerismo y dedicación en el agua.
          </p>
        </div>

        {/* Galería editorial asimétrica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDITORIAL_GALLERY.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item.image)}
              className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-200 ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Degradado y textos en hover/mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-bold text-boga-sky uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <p className="text-base font-bold leading-snug">
                  {item.title}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ver en detalle</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal visor de imagen completa */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-black">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              aria-label="Cerrar imagen"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage}
              alt="Fotografía ampliada de Boga Swim Academy"
              className="w-auto h-auto max-h-[85vh] max-w-full object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};
