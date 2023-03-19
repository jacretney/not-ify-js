import express from 'express';
const routes = express.Router();

// Tracks
import TrackController from './controllers/TrackController.js';

routes.get("/track/:id", TrackController.find);
routes.put("/track", TrackController.create);

export default routes;