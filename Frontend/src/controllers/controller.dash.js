import { validarToken } from "./controller.usuario";
import { config } from "dotenv";
config();

export const MostrarDash = (req, res) => {
    let token = req.cookies.token; // Obtener el token desde las cookies
    let datos = validarToken(token);
    
    if (datos !== "") {
        res.render("views.dash.ejs", { datos: datos });
        return;
    }
    
    res.redirect("/login.html");
};
