import React, { useEffect, useState } from "react";
import useUserStore from "../store/useUsersStore.jsx";
import { Modal, Button, Card, TextInput, Label } from "flowbite-react";
import NavLinks from "../components/navLinks";
import { CSVLink } from "react-csv";
import { isAdmin, getUserDataFromToken } from "../utils/getUserById.jsx";
import LoadingSpinner from "../components/loadingSpinner.jsx";
import GeneradorUserPDF from "../components/generdorPdfUsers.jsx";


function DashboardUsuarios() {
  const {
    userList,
    fetchUserList,
    loading,
    error,
    createUser,
    updateUser,
    deleteUser,
  } = useUserStore();

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    user: "",
    name: "",
    password: "",
    departamento: "",
    email: "",
    rol: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const userData = getUserDataFromToken();
  const userIsAdmin = isAdmin();

  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      await updateUser(currentId, formData);
    } else {
      await createUser(formData);
    }

    setShowModal(false);
    setFormData({
      user: "",
      name: "",
      password: "",
      departamento: "",
      email: "",
      rol: "",
    });
    setEditMode(false);
  };

  const handleEdit = (user) => {
    setCurrentId(user._id);
    setFormData(user);
    setEditMode(true);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  if (loading) return <div><LoadingSpinner></LoadingSpinner></div>;
  if (error)
    return (
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
    );

  // Filtrar usuarios según el rol del usuario
  const usuarios = userIsAdmin
    ? userList.filter((user) => user.rol != "" )
    : userList.filter(
        (user) =>
          user.rol === "empleado" &&
          user.departamento === userData.departamento
      );

  // Convertir los datos de los usuarios en formato CSV
  const csvData = usuarios.map((user) => ({
    User: user.user,
    Name: user.name,
    Email: user.email,
    Rol: user.rol,
    Departamento: user.departamento,
    Fecha_Creacion: user.date_create,
  }));

  // Agrupar usuarios por departamento


  return (
    <div className="container-dashboard">
      <div className="aside-dashboard">
        <NavLinks />
      </div>
      <div className="main-dashboard">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4 mt-10">Usuarios</h1>
          <Button
            color="success"
            className="mb-4"
            onClick={() => setShowModal(true)}
          >
            Agregar Usuario
          </Button>
          <CSVLink
            data={csvData}
            filename={"usuarios.csv"}
            className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            target="_blank"
          >
            Descargar CSV
          </CSVLink>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {usuarios.map((user) => (
                <Card key={user._id}>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p>User: {user.user}</p>
                <p>Email: {user.email}</p>
                <p>Rol: {user.rol}</p>
                <Button
                  onClick={() => handleEdit(user)}
                  className="mr-2"
                  color="warning"
                >
                  Editar
                </Button>
                <Button
                  color="failure"
                  onClick={() => handleDelete(user._id)}
                >
                  Eliminar
                </Button>
                <GeneradorUserPDF
                id={user._id}
                name={user.name}
                user={user.user}
                email={user.email}
                rol={user.rol}

                ></GeneradorUserPDF>
              </Card>
            ))}
          </div>

          {userIsAdmin && (
            <></>
          )}
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          {editMode ? "Editar Usuario" : "Agregar Usuario"}
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <Label htmlFor="user" value="User" />
              <TextInput
                id="user"
                name="user"
                value={formData.user}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="name" value="Name" />
              <TextInput
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="password" value="Password" />
              <TextInput
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required={!editMode} // Only required when creating a new user
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
            <select
                id="rol"
                name="rol"
                value={formData.rol}
                onChange={handleInputChange}
                required
                className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="Usuario">Usuario</option>
                <option value="Administrador">Administrador</option>
              </select>
            
            <Button color="success" type="submit">
              {editMode ? "Actualizar" : "Crear"}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DashboardUsuarios;