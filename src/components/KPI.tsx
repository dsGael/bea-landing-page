import React from 'react';
import { FiAward, FiUsers, FiBox, FiClock } from 'react-icons/fi';
import type { IconType } from 'react-icons';

// 1. SUB-COMPONENTE: La Card individual
interface KPICardProps {
  label: string;
  dato: string;
  descripcion: string;
  Icono: IconType;
  color: string;
}

const KPICard: React.FC<KPICardProps> = ({ label, dato, descripcion, Icono, color }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Icono con círculo de fondo suave */}
      <div className={`w-16 h-16 rounded-full ${color} bg-opacity-10 flex items-center justify-center mb-6`}>
        <Icono className={`w-8 h-8 ${color}`} />
      </div>
      
      {/* Dato principal (Número/KPI) */}
      <span className="text-4xl font-extrabold text-slate-800 mb-2 tracking-tight">
        {dato}
      </span>
      
      {/* Etiqueta */}
      <h3 className="text-lg font-bold text-slate-700 mb-3">
        {label}
      </h3>
      
      {/* Descripción corta */}
      <p className="text-sm text-gray-500 leading-relaxed">
        {descripcion}
      </p>
    </div>
  );
};

// 2. COMPONENTE PRINCIPAL
const SeccionKPIs = () => {
  
  // 3. DATOS EN FORMATO JSON
  const kpis = [
    {
      id: 1,
      label: "Experiencia",
      dato: "20+",
      descripcion: "Años innovando en soluciones tecnológicas para la industria.",
      icon: FiAward,
      color: "text-orange-500"
    },
    {
      id: 2,
      label: "Clientes",
      dato: "150+",
      descripcion: "Empresas han transformado su operación con nosotros.",
      icon: FiUsers,
      color: "text-blue-500"
    },
    {
      id: 3,
      label: "Proyectos",
      dato: "500+",
      descripcion: "Implementaciones exitosas de hardware y software.",
      icon: FiBox,
      color: "text-green-500"
    },
    {
      id: 4,
      label: "Disponibilidad",
      dato: "24/7",
      descripcion: "Soporte técnico humano siempre listo para atenderte.",
      icon: FiClock,
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20  font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-base font-bold text-orange-500 uppercase tracking-widest mb-3">
            Resultados Reales
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-800 leading-tight">
            Nuestra trayectoria en números habla por nuestro compromiso.
          </p>
        </div>

        {/* GRID DE KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi) => (
            <KPICard 
              key={kpi.id}
              label={kpi.label}
              dato={kpi.dato}
              descripcion={kpi.descripcion}
              Icono={kpi.icon}
              color={kpi.color}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeccionKPIs;