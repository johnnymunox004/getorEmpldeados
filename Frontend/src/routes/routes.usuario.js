import { Router } from "express";
import { ListarUsuario, registrarUsuario, salirUsuario } from "../controllers/controller.usuario";
import { ListarClient, registrarClient } from "../controllers/controller.client";


const RutaUsuario = Router();

RutaUsuario.get("/usuario", ListarUsuario );
RutaUsuario.get("/registrar", registrarUsuario );
RutaUsuario.get("/salir", salirUsuario);
RutaUsuario.get("/client", ListarClient)
RutaUsuario.get("/registro-client", registrarClient)
export default RutaUsuario;


