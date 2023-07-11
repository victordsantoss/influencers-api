import express from 'express';
import userRoutes from './user.routes.js';
import chanelRoutes from './chanel.routes.js';

const applicationRoutes = express.Router();

applicationRoutes.use('/users', userRoutes);
applicationRoutes.use('/chanels', chanelRoutes);

export default applicationRoutes;
