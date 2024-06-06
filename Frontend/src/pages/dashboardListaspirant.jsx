import React, { useEffect, useState } from "react";
import useAspirantesStore from "../store/useAspirantesStore";
import { Modal, Button, Card, TextInput, Label } from "flowbite-react";
import NavLinks from "../components/navLinks";

function DashboardListAspirant() {
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

  const handleEdit = (aspirante) => {
    setCurrentId(aspirante._id);
    setFormData(aspirante);
    setEditMode(true);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    deleteAspirante(id);
  };

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            margin: "10px 0",
          }}
        >
          {error}
        </div>
      </div>
    );

  return (
    <div className="container-dashboard ">
      <div className="aside-dashboard">
        <NavLinks />
      </div>
      <div className="main-dashboard">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Aspirantes</h1>
          <Button
            color="success"
            className=" hidden"
            onClick={() => setShowModal(true)}
          >
            Agregar Aspirante
          </Button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {aspirantes
              .filter((aspirante) => aspirante.rol === "aspirante")
              .map((aspirante) => (
                <Card key={aspirante._id}>
                  <h2 className="text-xl font-bold">{aspirante.nombre}</h2>
                  <p>Identificación: {aspirante.identificacion}</p>
                  <p>Edad: {aspirante.edad}</p>
                  <p>Sexo: {aspirante.sexo}</p>
                  <p>Rol: {aspirante.rol}</p>
                  <p>Email: {aspirante.email}</p>
                  <p>
                    Links:{" "}
                    <a
                      href={aspirante.file}
                      target="_blank"
                      className=" text-blue-400"
                      rel="noopener noreferrer"
                    >
                      {aspirante.file}
                    </a>
                  </p>

                  <p>Teléfono: {aspirante.telefono}</p>
                  <p>Estado: {aspirante.estado}</p>
                  <Button
                    onClick={() => handleEdit(aspirante)}
                    className="mr-2"
                    color="warning"
                  >
                    Editar
                  </Button>
                  <Button
                    color="failure"
                    onClick={() => handleDelete(aspirante._id)}
                  >
                    Eliminar
                  </Button>
                </Card>
              ))}
          </div>
        </div>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          {editMode ? "Editar Aspirante" : "Agregar Aspirante"}
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <Label htmlFor="nombre" value="Nombre" />
              <TextInput
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="identificacion" value="Identificación" />
              <TextInput
                id="identificacion"
                name="identificacion"
                value={formData.identificacion}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="edad" value="Edad" />
              <TextInput
                id="edad"
                name="edad"
                value={formData.edad}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="rol" className="mb-1 font-medium">
                Rol:
              </label>
              <select
                id="rol"
                name="rol"
                value={formData.rol}
                onChange={handleInputChange}
                required
                className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="aspirante">Aspirante</option>
                <option value="empleado">Empleado</option>

              </select>
            </div>
            <div className="mb-2">
              <Label htmlFor="file" value="File" />
              <TextInput
                id="file"
                name="file"
                value={formData.file}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="telefono" value="Teléfono" />
              <TextInput
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="estado" value="Estado" />
              <TextInput
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button color="success" type="submit">
              {editMode ? "Actualizar" : "Crear"}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default DashboardListAspirant;
