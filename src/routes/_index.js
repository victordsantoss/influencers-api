import express from 'express';
import userRoutes from './user.routes.js';

const applicationRoutes = express.Router();

applicationRoutes.use('/users', userRoutes);

export default applicationRoutes;
