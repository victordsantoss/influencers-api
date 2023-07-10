import express from 'express';
import controllers from '../controllers/_index.js';

const userRoutes = express.Router();

userRoutes.get(`/`, controllers.userController.index);
userRoutes.post(`/create_user`, controllers.userController.createUser);

export default userRoutes;
