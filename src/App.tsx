// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Importando tus páginas
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import CasosExito from './pages/CasosExito'
import Contacto from './pages/Contacto'

import './App.css'
import BtnWhatsapp from './components/BtnWhatsapp';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-fondo-claro text-texto">
        <Navbar />

        <main className="flex-1 ">
          <BtnWhatsapp/>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/casosExito" element={<CasosExito />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>



        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App