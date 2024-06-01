import React from 'react';
import { Button, Navbar, Footer, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col text-green-500">
      {/* Navbar */}
      <Navbar className="bg-blue-500 shadow-md w-full">
        <div className="container mx-auto flex justify-around items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            polar
          </Link>
          <Button outline gradientDuoTone="cyanToBlue" className="mx-2">
              <Link to="/">Iniciar Sesión</Link>
            </Button>
            <Button gradientDuoTone="purpleToBlue" className="mx-2">
              <Link to="/register">Registrarse</Link>
            </Button>
        </div>
      </Navbar>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center p-8 bg-gray-600">
        <h1 className="text-5xl font-extrabold text-blue-500 mb-4">Bienvenido</h1>
        <p className="text-lg text-green-500 mb-8">Solicita empleo</p>
        <div className="space-x-4">
          <Button outline gradientDuoTone="purpleToBlue" className="px-4 py-2">
            <Link to="/empleo" className="px-4 py-2 text-green-500">Empleo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
