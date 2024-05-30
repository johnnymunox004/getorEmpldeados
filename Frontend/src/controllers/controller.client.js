import jwt from "jsonwebtoken";
import axios from 'axios';
import { config } from "dotenv";
config();

export const ListarClient = (req, res) => {
    const url = `http://localhost:1500/api/clients`; 

    let token = req.cookies.token;

    axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}` 
        }
    })
    .then(response => {
        const data = response.data;
        res.render("views.client.ejs", {
            titulo: "Lista de client",
            data: data
        });
    })
    .catch(error => {
        console.error(error);
        res.status(error.response ? error.response.status : 500).send(error.message);
    });
};

export const registrarClient = (req, res) => {
    res.render("views.client.registro.ejs", { datos: "madrid" });
};

export const validarToken = (token) => {
    const secret = process.env.JWT_SECRET;
    if (!token) {
        return "";
    }

    try {
        const decodedToken = jwt.verify(token, secret);
        return decodedToken;
    } catch (error) {
        console.log('Error al verificar el token: ', error);
        return "";
    }
};

export const salirUsuario = (req, res) => {
    res.redirect("/login.html");
};
