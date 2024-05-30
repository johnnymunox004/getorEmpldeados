//Usuarios methods api controllers
const EliminaRegistro = (event) => {
    let codigo = event.target.parentElement.parentElement.children[0].innerHTML;

    const url = `http://localhost:1500/api/users/${codigo}`;

    axios.delete(url)
    .then(response => {
        alert(response.data.message);
        // Opcional: eliminar la fila de la tabla
        document.getElementById(`user-${codigo}`).remove();
    })
    .catch(error => {
        alert(error.response.data.message);
    });
};

const showEditForm = (id) => {
    const row = document.getElementById(`user-${id}`);
    const nombre = row.children[1].innerHTML;
    const email = row.children[2].innerHTML;

    
    document.getElementById('editUserId').value = id;
    document.getElementById('editUserName').value = nombre;
    document.getElementById('editUserEmail').value = email;

    document.getElementById('editForm').style.display = 'block';
};

const closeEditForm = () => {
    document.getElementById('editForm').style.display = 'none';
};

const GuardarCambios = (event) => {
    event.preventDefault();

    const id = document.getElementById('editUserId').value;
    const nombre = document.getElementById('editUserName').value;
    const email = document.getElementById('editUserEmail').value;

    const url = `http://localhost:1500/api/users/${id}`;

    let token = "";
    const cookieToken = document.cookie;

    if (cookieToken) {
        const cookies = cookieToken.split(';');
        cookies.forEach(cookie => {
            const [nombre, valor] = cookie.split('=');
            if (nombre.trim() === 'token') {
                token = valor;
            }
        });
    } else {
        alert("Debe loguearse nuevamente");
        return;
    }

    if (token == "") {
        alert("Debe loguearse nuevamente");
        return;
    }

    const headers = {
        'x-access-token': token,
        'Content-type': 'application/json'
    };

    axios.put(url, {
        nombre,
        email,
        rol,
        telefono,
        edad,
        dept
    }, {
        headers
    })
    .then(response => {
        alert('Registro actualizado: ' + response.data.message);
        const userElement = document.getElementById(`user-${id}`);
        if (userElement) {
            userElement.children[1].innerHTML = nombre;
            userElement.children[2].innerHTML = email;
            userElement.children[3].innerHTML = rol;
            userElement.children[4].innerHTML = telefono;
            userElement.children[5].innerHTML = edad;
            userElement.children[6].innerHTML = dept;
        }
        closeEditForm();
    })
    .catch(error => {
        alert("Error al actualizar registro: " + (error.response ? error.response.data.message : error.message));
    });
    
};
const GuardarUsuario = () => {
    const nombre = document.getElementById('nombres').value;
    const email = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    const rol = document.getElementById('rol').value;

    const url = "http://localhost:1500/api/users";

    let token = "";
    const cookieToken = document.cookie;

    if (cookieToken) {
        const cookies = cookieToken.split(';');
        cookies.forEach(cookie => {
            const [nombre, valor] = cookie.split('=');
            if (nombre.trim() === 'token') {
                token = valor;
            }
        });
    } else {
        alert("Debe loguearse nuevamente");
        return;
    }

    if (token == "") {
        alert("Debe loguearse nuevamente");
        return;
    }

    const headers = {
        'x-access-token': token,
        'Content-type': 'application/json'
    };

    axios.post(url, {
        nombre,
        email,
        password,
        rol
    }, { headers })
    .then(response => {
        alert('Registro guardado: ' + response.data.message);
        // Opcional: actualizar la lista de usuarios o limpiar el formulario
    })
    .catch(error => {
        alert("Error al guardar registro: " + error.response.data.message);
    });
};
// Clientes crud api controllers
const EliminaClientRegistro = (event) => {
    let codigo = event.target.parentElement.parentElement.children[0].innerHTML;

    const url = `http://localhost:1500/api/clients/${codigo}`;

    axios.delete(url)
    .then(response => {
        alert(response.data.message);
        // Opcional: eliminar la fila de la tabla
        document.getElementById(`client-${codigo}`).remove();
    })
    .catch(error => {
        alert(error.response.data.message);
    });
};

const showEditClientForm = (id) => {
    const row = document.getElementById(`client-${id}`);
    const nombre = row.children[1].innerHTML;
    const email = row.children[2].innerHTML;
    const process = row.children[3].innerHTML;
    const rol = row.children[4].innerHTML;
    const edad = row.children[5].innerHTML;
    const dept = row.children[6].innerHTML;
    const sexo = row.children[7].innerHTML;
    const file = row.children[8].innerHTML;
    const telefono = row.children[9].innerHTML;

    document.getElementById('editClientId').value = id;
    document.getElementById('editClientName').value = nombre;
    document.getElementById('editUserEmail').value = email;
    document.getElementById('editProcess').value = process;
    document.getElementById('editRol').value = rol;
    document.getElementById('editEdad').value = edad;
    document.getElementById('editDept').value = dept;
    document.getElementById('editSexo').value = sexo;
    document.getElementById('editFile').value = file;
    document.getElementById('editTelefono').value = telefono;

    document.getElementById('editClientForm').style.display = 'block';
};

const closeEditClientForm = () => {
    document.getElementById('editClientForm').style.display = 'none';
};

const GuardarCambiosClient = (event) => {
    event.preventDefault();

    const id = document.getElementById('editClientId').value;
    const nombre = document.getElementById('editClientName').value;
    const email = document.getElementById('editUserEmail').value;
    const process = document.getElementById('editProcess').value;
    const rol = document.getElementById('editRol').value;
    const edad = document.getElementById('editEdad').value;
    const dept = document.getElementById('editDept').value;
    const sexo = document.getElementById('editSexo').value;
    const file = document.getElementById('editFile').value;
    const telefono = document.getElementById('editTelefono').value;

    const url = `http://localhost:1500/api/clients/${id}`;

    let token = "";
    const cookieToken = document.cookie;

    if (cookieToken) {
        const cookies = cookieToken.split(';');
        cookies.forEach(cookie => {
            const [nombre, valor] = cookie.split('=');
            if (nombre.trim() === 'token') {
                token = valor;
            }
        });
    } else {
        alert("Debe loguearse nuevamente");
        return;
    }

    if (token == "") {
        alert("Debe loguearse nuevamente");
        return;
    }

    const headers = {
        'x-access-token': token,
        'Content-type': 'application/json'
    };

    axios.put(url, {
        nombre,
        email,
        process,
        rol,
        edad,
        dept,
        sexo,
        file,
        telefono
    }, {
        headers
    })
    .then(response => {
        alert('Registro actualizado: ' + response.data.message);
        const clientElement = document.getElementById(`client-${id}`);
        if (clientElement) {
            clientElement.children[1].innerHTML = nombre;
            clientElement.children[2].innerHTML = email;
            clientElement.children[3].innerHTML = process;
            clientElement.children[4].innerHTML = rol;
            clientElement.children[5].innerHTML = edad;
            clientElement.children[6].innerHTML = dept;
            clientElement.children[7].innerHTML = sexo;
            clientElement.children[8].innerHTML = file;
            clientElement.children[9].innerHTML = telefono;
        }
        closeEditClientForm();
    })
    .catch(error => {
        alert("Error al actualizar registro: " + (error.response ? error.response.data.message : error.message));
    });
};
