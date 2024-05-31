import express from "express"
import {createEmpleado, deleteEmpleado, getAllEmpleados, getEmpleado, updateEmpleado} from '../controllers/empleadopsControllers.js'

const empleadosRoutes = express.Router();



empleadosRoutes.post('/empleados', createEmpleado);
empleadosRoutes.get('/empleados', getAllEmpleados);
empleadosRoutes.get('/empleados/:id', getEmpleado);
empleadosRoutes.put('/empleados/:id',  updateEmpleado);
empleadosRoutes.delete('/empleados/:id',  deleteEmpleado);

export default empleadosRoutes