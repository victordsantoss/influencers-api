import express from 'express';
import controllers from '../controllers/_index.js';

const userRoutes = express.Router();

userRoutes.get(`/`, controllers.userController.index);
userRoutes.get(`/user/:email`, controllers.userController.showUserByEmail);
userRoutes.post(`/create_user`, controllers.userController.createUser);
userRoutes.put(`/update_user/:user_id`, controllers.userController.updateUser);



export default userRoutes;
