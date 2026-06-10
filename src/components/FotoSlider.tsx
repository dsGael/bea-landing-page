import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    id: 1,
    imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    url: "/catalogo",
    alt: "Captura del Sistema de Inventario"
  },
  {
    id: 2,
    imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    url: "/casosExito",
    alt: "Dashboard de Operaciones"
  },
  {
    id: 3,
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    url: "/contacto",
    alt: "Monitoreo en la nube"
  }
];

const FotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentIndex]); 

  return (
    <section className="py-12 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor principal: Eliminamos la clase 'group' que ya no necesitamos */}
        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden bg-slate-100">
          
          {/* LA PISTA DE IMÁGENES */}
          <div 
            className="flex transition-transform ease-in-out duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <Link 
                to={slide.url} 
                key={slide.id} 
                className="min-w-full block relative cursor-pointer"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img 
                  src={slide.imagen} 
                  alt={slide.alt} 
                  className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover hover:opacity-90 transition-opacity" 
                />
              </Link>
            ))}
          </div>

          {/* FLECHA IZQUIERDA - CORREGIDA: Eliminadas las clases de opacidad */}
          <button
            onClick={prevSlide}
            // Eliminado 'opacity-0' y 'group-hover:opacity-100'
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/70 text-slate-800 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:text-orange-500 hover:scale-110 active:scale-95"
            aria-label="Imagen anterior"
          >
            <FiChevronLeft className="h-6 w-6 sm:h-7  -ml-0.5" />
          </button>

          {/* FLECHA DERECHA - CORREGIDA: Eliminadas las clases de opacidad */}
          <button
            onClick={nextSlide}
            // Eliminado 'opacity-0' y 'group-hover:opacity-100'
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/70 text-slate-800 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:text-orange-500 hover:scale-110 active:scale-95"
            aria-label="Siguiente imagen"
          >
            <FiChevronRight className="h-6 w-6 sm:h-7  ml-0.5" />
          </button>

          {/* LOS BOTONCITOS INDICADORES */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-orange-500 w-7' 
                    : 'bg-white w-2.5 hover:bg-gray-200' 
                }`}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FotoSlider;