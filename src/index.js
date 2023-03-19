import express from 'express';
import routes from './application/routes.js';

const app = express();
const port = 3000;

app.use("", routes);

app.listen(port, () => {
  console.log(`API started on port: ${port}`)
})

