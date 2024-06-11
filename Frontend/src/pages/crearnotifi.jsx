import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavLinks from "../components/navLinks";

const CreateNotificationPage = () => {
  const [action, setAction] = useState("");
  const [solicitud, setSolicitud] = useState("");
  const [quien, setQuien] = useState("");
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!action || !solicitud || !quien) {
      setFormError("Todos los campos son obligatorios.");
      return;
    }

    try {
      await axios.post(
        "https://back-gestor-empleados.onrender.com/api/notifi",
        { action, solicitud, quien }
      );
      // Redireccionar a la página de notificaciones después de crear la notificación
      window.location.href = "/dashboard/list-empleados";
    } catch (error) {
      setError("Se produjo un error al crear la notificación.");
    }
  };

  return (
    <div className="container-dashboard">
      <div className="aside-dashboard">
        <NavLinks />
      </div>
      <div className="main-dashboard">
        <div className="flex justify-center mt-11 h-96">
          <div className="bg-white rounded-lg p-6 w-96 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Crear Notificación</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="action"
                  className="block text-sm font-medium text-gray-700"
                >
                  Acción:
                </label>
                <input
                  type="text"
                  id="action"
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="solicitud"
                  className="block text-sm font-medium text-gray-700"
                >
                  Solicitud:
                </label>
                <input
                  type="text"
                  id="solicitud"
                  value={solicitud}
                  onChange={(e) => setSolicitud(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="quien"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quién:
                </label>
                <input
                  type="text"
                  id="quien"
                  value={quien}
                  onChange={(e) => setQuien(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              {formError && <p className="text-red-500">{formError}</p>}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Crear Notificación
              </button>
            </form>
            <div className="mt-4">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNotificationPage;
