import express from 'express';
import TrackRepository from './domain/tracks/TrackRepository.js';

const app = express();
const port = 3000;

const trackRepository = new TrackRepository();

app.get('/', async (req, res) => {
    // const song = trackRepository.create({
    //     artist: 'Normandie',
    //     title: 'White Flag',
    //     album: 'White Flag',
    //     file: 'file.mp3',
    // });

    res.send(await trackRepository.find(6));
})

app.listen(port, () => {
  console.log(`API started on port: ${port}`)
})

