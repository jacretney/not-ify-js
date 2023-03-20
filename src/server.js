import app from './app.js';

const port = 3000;

app.set('port', port);

app.listen(app.get('port'), () => {
  console.log(`API started on port: ${port}`)
})