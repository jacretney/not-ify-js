import express from 'express';
import routes from './application/routes.js';

const app = express();

// Middleware
app.use(express.json());

// Routing
app.use("", routes);

export default app;
