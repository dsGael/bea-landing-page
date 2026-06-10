import  { useState } from 'react';
import { Link } from 'react-router-dom';
// 1. Importamos las flechas desde react-icons/fi (Feather Icons)
import { FiChevronDown, FiChevronUp, FiArrowRight } from 'react-icons/fi';

const datosTarjetas = [
  {
    id: 1,
    titulo: 'Hardware Industrial',
    imagen: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    detalles: 'Equipos robustos y periféricos de alto rendimiento diseñados para soportar entornos operativos exigentes 24/7.',
    ruta: '/catalogo'
  },
  {
    id: 2,
    titulo: 'Software a Medida',
    imagen: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    detalles: 'Desarrollo e integración de sistemas a la medida para automatizar procesos, gestionar inventarios y optimizar la operación diaria.',
    ruta: '/catalogo'
  },
  {
    id: 3,
    titulo: 'Humanware',
    imagen: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
    detalles: 'Capacitación, soporte técnico especializado y consultoría para que tu equipo aproveche al máximo cada herramienta tecnológica.',
    ruta: '/nosotros'
  },
  {
    id: 4,
    titulo: 'Infraestructura Multi-Cloud',
    imagen: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    detalles: 'Arquitecturas de alta disponibilidad y conexiones seguras (VPN Site-to-Site) combinando lo mejor de entornos AWS y Azure.',
    ruta: '/casosExito'
  }
];

const CardsPrincipales = () => {
  const [tarjetaExpandida, setTarjetaExpandida] = useState<number | null>(null);

  const toggleDetalles = (id: number) => {
    if (tarjetaExpandida === id) {
      setTarjetaExpandida(null);
    } else {
      setTarjetaExpandida(id); 
    }
  };

  return (
    <section className="py-16  font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Soluciones Integrales
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Descubre cómo nuestra tecnología conecta cada aspecto de tu operación para llevarla al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {datosTarjetas.map((tarjeta) => (
            <div 
              key={tarjeta.id} 
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={tarjeta.imagen} 
                  alt={tarjeta.titulo} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {tarjeta.titulo}
                </h3>

                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    tarjetaExpandida === tarjeta.id 
                      ? 'grid-rows-[1fr] opacity-100 mt-2 mb-4' 
                      : 'grid-rows-[0fr] opacity-0 m-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {tarjeta.detalles}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-gray-100">
                  
                  <button 
                    onClick={() => toggleDetalles(tarjeta.id)}
                    className="flex items-center justify-between w-full text-sm font-semibold text-slate-500 hover:text-orange-500 transition-colors"
                  >
                    <span>{tarjetaExpandida === tarjeta.id ? 'Ocultar detalles' : 'Ver resumen'}</span>
                    {/* 2. Usamos los iconos de react-icons aquí */}
                    {tarjetaExpandida === tarjeta.id ? (
                      <FiChevronUp className="w-5 h-5" />
                    ) : (
                      <FiChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  <Link 
                    to={tarjeta.ruta}
                    onClick={() => window.scrollTo(0, 0)}
                    className="flex items-center justify-center w-full gap-2 py-2.5 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors group"
                  >
                    <span>Conoce más</span>
                    {/* 3. Y la flecha animada de react-icons acá */}
                    <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CardsPrincipales;