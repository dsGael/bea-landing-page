import Boton from '../components/Boton';
import logo from '../assets/PNG INTEGRA_LOGO MULTI.png';

const inputClassName = "bg-gray-100/50 p-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300";

const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
  e.preventDefault();
  
  const formData= new FormData(e.currentTarget);
  const data= Object.fromEntries(formData);

  console.log(data)
}

const Contacto = () => {
  return (
    <section className=" mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pt-22 pb-10 sm:px-6 sm:pt-52 sm:pb-16 lg:grid-cols-2 lg:gap-12 lg:px-8 font-sans">      
      <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
        
        <img 
          src={logo} 
          alt="Logo de integra" 
          className="object-contain h-auto w-full max-w-sm mx-auto lg:mx-0 -my-20" 
        />
        
        <p className="text-gray-600 font-bold uppercase tracking-widest text-xs sm:text-sm">Contacto</p>
        <h2 className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
          Estamos listos para <br className="hidden sm:block" /> atenderle.
        </h2>
        <p className="mx-auto max-w-sm text-base text-gray-800 sm:text-lg lg:mx-0">
          Si está interesado en nuestros productos y servicios no dude en ponerse en contacto con nosotros.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white space-y-4 rounded-2xl p-4 shadow-xl sm:p-6 lg:p-8 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input type="text" name="nombre" placeholder="Nombre completo" className={inputClassName} />
          <input type="text" name="empresa" placeholder="Empresa" className={inputClassName} />
        </div>

        <input type="email" name="email" placeholder="Dirección de correo electrónico" className={inputClassName} />

        <input type="tel" name="telefono" placeholder="Teléfono (con LADA)" className={inputClassName} />

        <textarea
          name="mensaje"
          placeholder="Mensaje"
          rows={6}
          className={`${inputClassName} resize-none`}
        ></textarea>

        <div className="flex justify-stretch pt-2 sm:justify-end sm:pt-4">
          <Boton texto="ENVIAR" type="submit" className="w-full sm:w-auto" />
        </div>
      </form>
    </section>
  );
};

export default Contacto;