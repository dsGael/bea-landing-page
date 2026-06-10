// Importamos iconos limpios y modernos de Feather Icons
import { FiCpu, FiLayout, FiUsers } from 'react-icons/fi';

const AboutUs = () => {
  return (
    // ¡MUY IMPORTANTE! El id="nosotros" es el que conecta con tu Navbar
    <section id="nosotros" className="py-24 font-sans scroll-mt-20 text-justify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO Y ESLOGAN */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Quiénes Somos
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tecnología con propósito: <br className="hidden sm:block" />
            <span className="text-primary">
              Hardware, Software y Humanware.
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            En Integra no solo entregamos herramientas tecnológicas; construimos el ecosistema completo para optimizar tu operación. Creemos que la verdadera transformación digital ocurre cuando el equipo correcto se encuentra con la tecnología adecuada.
          </p>
        </div>

        {/* LOS 3 PILARES (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
          {/* PILAR 1: HARDWARE */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300 shadow-sm border border-gray-100">
              <FiCpu className="w-10 h-10 text-slate-800 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Hardware</h3>
            <p className="text-gray-600 leading-relaxed">
              Infraestructura física robusta y equipos de alto rendimiento. Proveemos las bases tecnológicas tangibles diseñadas para soportar las exigencias operativas más rigurosas de la industria.
            </p>
          </div>

          {/* PILAR 2: SOFTWARE */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300 shadow-sm border border-gray-100">
              <FiLayout className="w-10 h-10 text-slate-800 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Software</h3>
            <p className="text-gray-600 leading-relaxed">
              Desarrollo de sistemas a la medida e integración de plataformas. Creamos el cerebro lógico que automatiza procesos, gestiona datos críticos y conecta todas las áreas de tu negocio.
            </p>
          </div>

          {/* PILAR 3: HUMANWARE */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300 shadow-sm border border-gray-100">
              <FiUsers className="w-10 h-10 text-slate-800 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Humanware</h3>
            <p className="text-gray-600 leading-relaxed">
              El factor más importante: las personas. Brindamos capacitación, consultoría estratégica y soporte continuo para garantizar que tu equipo domine y aproveche al máximo la tecnología.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;