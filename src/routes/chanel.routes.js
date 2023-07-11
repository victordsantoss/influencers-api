import express from 'express';
import controllers from '../controllers/_index.js';

const chanelRoutes = express.Router();

chanelRoutes.get(`/`, controllers.chanelController.index);
chanelRoutes.post(`/create`, controllers.chanelController.createChanel);

export default chanelRoutes;
