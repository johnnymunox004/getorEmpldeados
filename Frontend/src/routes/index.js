import { Router } from "express";

import RutaUsuario from "./routes.usuario";

import RutaDash from "./routes.dash";

const ruta = Router();
ruta.use("/", RutaUsuario);
ruta.use("/", RutaDash);

export default ruta;

