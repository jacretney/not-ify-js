import db from "./infrastructure/database/db.js";

async function main() {
    try {
        await db.authenticate();
        console.log('success');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`API started on port: ${port}`)
})

