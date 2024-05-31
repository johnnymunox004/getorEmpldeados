import express from "express"
import { createAspirante, deleteAspirante, getAllAspirantes, getAspirante, updateAspirante } from "../controllers/aspiranteController.js";

const aspiranteRoutes = express.Router();



aspiranteRoutes.post('/aspirantes', createAspirante);
aspiranteRoutes.get('/aspirantes', getAllAspirantes);
aspiranteRoutes.get('/aspirantes/:id', getAspirante);
aspiranteRoutes.put('/aspirantes/:id',  updateAspirante);
aspiranteRoutes.delete('/aspirantes/:id',  deleteAspirante);

export default aspiranteRoutes