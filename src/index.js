import express from 'express';
import Track from './domain/tracks/Track.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const song = Track.build({
        artist: 'Normandie',
        title: 'White Flag',
        album: 'White Flag',
        file: 'file.mp3',
    });
    
    song.save();

    res.send('Track created');
})

app.listen(port, () => {
  console.log(`API started on port: ${port}`)
})

