import express from 'express';



import userRoutes from './userRoutes.js';

import loginRoute from './authRoutes.js';


const router = express.Router();

router.use('/', userRoutes);
router.use('/auth', loginRoute);



export default router;
