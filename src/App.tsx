import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Storytelling } from './components/Storytelling';
import { ProgramsExperience } from './components/ProgramsExperience';
import { Methodology } from './components/Methodology';
import { PrinciplesSection } from './components/PrinciplesSection';
import { Recognitions } from './components/Recognitions';
import { TrustSafety } from './components/TrustSafety';
import { EditorialGallery } from './components/EditorialGallery';
import { LocationSection } from './components/LocationSection';
import { TestimonialsPlaceholder } from './components/TestimonialsPlaceholder';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-800 antialiased">
      {/* Barra de navegación superior fija */}
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-grow">
        {/* Portada cinematográfica y editorial */}
        <Hero />

        {/* Storytelling y filosofía «En Boga» */}
        <Storytelling />

        {/* Experiencia interactiva de programas y niveles */}
        <ProgramsExperience />

        {/* Metodología y estructura académica de 43 semanas */}
        <Methodology />

        {/* Los 10 principios bíblicos mensuales */}
        <PrinciplesSection />

        {/* Reconocimientos oficiales de honor */}
        <Recognitions />

        {/* Seguridad, cuidado y confianza para los padres */}
        <TrustSafety />

        {/* Galería editorial con fotografías reales de la academia */}
        <EditorialGallery />

        {/* Ubicación en Santo Domingo Oeste y mapa */}
        <LocationSection />

        {/* Espacio para comunidad y familias */}
        <TestimonialsPlaceholder />

        {/* Llamada a la acción final emocional */}
        <FinalCTA />
      </main>

      {/* Pie de página institucional */}
      <Footer />

      {/* Botón flotante permanente de WhatsApp */}
      <WhatsAppFloating />
    </div>
  );
};

export default App;
