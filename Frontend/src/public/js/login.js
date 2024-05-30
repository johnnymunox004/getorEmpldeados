const logueese = () => {
    const correo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");
  
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: correo.value, // Cambiado a 'email'
        password: contrasena.value // Cambiado a 'password'
      })
    };
  
    let url = "http://localhost:1500/api/auth/login";
  
    fetch(url, option)
      .then(res => res.json())
      .then(data => {
        if (data.token !== undefined) {
          document.cookie = `token=${data.token}`;
          window.location.href = "/dash";
        } else {
          alertify.error("Invalid credentials");
        }
      })
      .catch(error => console.error(error.message));
  };
  