import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav"; 
import Footer from "./Footer"; 
import Header from "./Header"; 
import Contacto from "./Contacto";  
import Servicios from "./Servicios"; 
import Tarjeta from "./Tarjeta"; 

export default function Rutas() {
  return (
    <Router>
      <Header /> 
      <Nav /> 
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/contacto" element={<Contacto />} />  
          <Route path="/servicios" element={<Servicios />} />  
          <Route path="/nombre" element={<MySkills />} />
          <Route path="/producto/:numero" element={<Producto />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

function Home() {
  return <div><h2>Bienvenido a la página de inicio</h2><p>Contenido de la página de inicio...</p></div>;
}

function About() {
  return <div><h2>Sobre nosotros</h2><p></p></div>;
}



