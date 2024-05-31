import express from 'express';



import userRoutes from './userRoutes.js';
import aspiranteRoutes from './aspiranteroute.js';
import loginRoute from './authRoutes.js';
import empleadosRoutes from './empleados.js';


const router = express.Router();
router.use("/", empleadosRoutes)
router.use("/", aspiranteRoutes)
router.use('/', userRoutes);
router.use('/auth', loginRoute);



export default router;
