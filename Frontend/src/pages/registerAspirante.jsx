import React, { useEffect, useState } from "react";
import useAspirantesStore from "../store/useAspirantesStore";
import { Modal, Button, Card, TextInput, Label } from "flowbite-react";
import { Link } from "react-router-dom";

function DashboardListAspirantRegister() {
  const {
    aspirantes,
    fetchAspirantes,
    loading,
    error,
    createAspirante,
    updateAspirante,
    deleteAspirante,
  } = useAspirantesStore();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    identificacion: "",
    edad: "",
    sexo: "",
    rol: "",
    file: "",
    email: "",
    telefono: "",
    estado: "",
    date_create: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetchAspirantes();
  }, [fetchAspirantes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      updateAspirante(currentId, formData);
    } else {
      createAspirante(formData);
    }
    setShowModal(false);
    setFormData({
      nombre: "",
      identificacion: "",
      edad: "",
      sexo: "",
      rol: "",
      file: "",
      email: "",
      telefono: "",
      estado: "",
      date_create: "",
    });
    setEditMode(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container- w-96 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {" "}
      <div className="header-dashboard col-span-3 md:col-span-1 bg-blue-500  py-4 px-6 rounded-lg">
        <h1 className="text-2xl font-bold flex justify-center">
          formulario aspirante
        </h1>
      </div>
      <div className="main-dashboard col-span-3 md:col-span-2 p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="nombre" className="mb-1 font-medium">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="identificacion" className="mb-1 font-medium">
              Identificación:
            </label>
            <input
              type="text"
              id="identificacion"
              name="identificacion"
              value={formData.identificacion}
              onChange={handleInputChange}
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="edad" className="mb-1 font-medium">
              Edad:
            </label>
            <input
              type="text"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleInputChange}
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="sexo" className="mb-1 font-medium">
              Sexo:
            </label>
            <select
              id="sexo"
              name="sexo"
              value={formData.sexo}
              onChange={handleInputChange}
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="" className=" hidden"></option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="file" className="mb-1 font-medium">
              File:
            </label>
            <input
              type="text"
              id="file"
              name="file"
              value={formData.file}
              onChange={handleInputChange}
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-1 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="telefono" className="mb-1 font-medium">
              Teléfono:
            </label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {editMode ? "Actualizar" : "Crear"}
          </button>
        </form>
      </div>
      <div className="footer-dashboard col-span-3 bg-gray-200 p-4 rounded-lg">
        <Link to="/" className="text-2xl  flex justify-center  ">
          Inicio
        </Link>
      </div>
    </div>
  );
}

export default DashboardListAspirantRegister;
