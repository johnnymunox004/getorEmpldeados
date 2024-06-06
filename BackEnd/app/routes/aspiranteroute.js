import express from "express"
import { createAspirante, deleteAspirante, getAllAspirantes, getAspirante, updateAspirante } from "../controllers/aspiranteController.js";
import { authorize } from "../middleware/authMiddleware.js";
const aspiranteRoutes = express.Router();



aspiranteRoutes.post('/aspirantes', createAspirante);
aspiranteRoutes.get('/aspirantes', authorize(["Administrador","Usuario"]),getAllAspirantes);
aspiranteRoutes.get('/aspirantes/:id',authorize(["Administrador","Usuario"]), getAspirante);
aspiranteRoutes.put('/aspirantes/:id',authorize(["Administrador","Usuario"]),  updateAspirante);
aspiranteRoutes.delete('/aspirantes/:id',authorize(["Administrador","Usuario"]),  deleteAspirante);

export default aspiranteRoutes