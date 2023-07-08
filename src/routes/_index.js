import express from 'express';
import InfluencerRoutes from './influencers.routes.js';

const applicationRoutes = express.Router();

applicationRoutes.use('/influencers', InfluencerRoutes);

export default applicationRoutes;
