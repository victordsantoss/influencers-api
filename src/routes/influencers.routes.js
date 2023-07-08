import express from 'express';
import controllers from '../controllers/_index.js';

const InfluencerRoutes = express.Router();

InfluencerRoutes.get(`/`, controllers.influencerController.index);

export default InfluencerRoutes;
