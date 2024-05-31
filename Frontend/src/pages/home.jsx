import React from 'react';
import { Button, Navbar, Footer, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-700 min-h-screen flex flex-col text-green-500">
      
      {/* Navbar */}
      <Navbar className="bg-gray-800 shadow-md w-full">
        <div className="flex md:order-2">
          <Button outline gradientDuoTone="cyanToBlue" className="mx-2">
            <Link to="/">Iniciar Sesión</Link>
          </Button>
          <Button gradientDuoTone="purpleToBlue" className="mx-2">
            <Link to="/register">Registrarse</Link>
          </Button>
        </div>
        <Navbar.Collapse>
          <Link to="/" className="text-green-500 hover:text-green-300 mx-2">Inicio</Link>
          <Link to="/about" className="text-green-500 hover:text-green-300 mx-2">Acerca de</Link>
          <Link to="/contact" className="text-green-500 hover:text-green-300 mx-2">Contacto</Link>
        </Navbar.Collapse>
      </Navbar>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center p-8 bg-gray-600">
        <h1 className="text-5xl font-extrabold text-green-500 mb-4">Bienvenido </h1>
        <p className="text-lg text-green-500 mb-8">solicita empleo</p>
        <div className="space-x-4">
   
          <Button outline gradientDuoTone="purpleToBlue" className="px-4 py-2">
            <Link to="/empleo" className="px-4 py-2 text-green-500">Empleo</Link>
          </Button>
        </div>
      </section>



      {/* Footer */}
      <Footer container={true} className="bg-gray-800 shadow-md w-full py-6">
        <div className="container mx-auto text-center">
          <Footer.Brand href="/" name="Mi Aplicación" className="text-3xl font-semibold text-green-500" />
          <Footer.LinkGroup>
            <Link to="/" className="text-green-500 hover:text-green-300 mx-2">Inicio</Link>
            <Link to="/about" className="text-green-500 hover:text-green-300 mx-2">Acerca de</Link>
            <Link to="/contact" className="text-green-500 hover:text-green-300 mx-2">Contacto</Link>
          </Footer.LinkGroup>
          <p className="text-green-500">&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
        </div>
      </Footer>
    </div>
  );
}
