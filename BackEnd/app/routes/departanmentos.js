import express from 'express';
import {
  createDepartamento,
  getDepartamento,
  updateDepartamento,
  deleteDepartamento,
  getAllDepartamentos,
  assignTo,
} from '../controllers/departamentoController.js';

const routesDepartamentos = express.Router();

routesDepartamentos.post('/departamentos', createDepartamento);
routesDepartamentos.get('/departamentos', getAllDepartamentos);
routesDepartamentos.get('/departamentos/:id', getDepartamento);
routesDepartamentos.put('/departamentos/:id', updateDepartamento);
routesDepartamentos.delete('/departamentos/:id', deleteDepartamento);
routesDepartamentos.post('/departamentos/assign', assignTo);


export default routesDepartamentos;
