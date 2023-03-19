import express from 'express';
import TrackRepository from './domain/tracks/TrackRepository.js';
import TrackService from './domain/tracks/TrackService.js';
import CreateTrackData from './domain/tracks/data/CreateTrackData.js';

const app = express();
const port = 3000;

const trackService = new TrackService(new TrackRepository());

app.get('/', async (req, res) => {
    const song = trackService.create(new CreateTrackData({
        artist: 'Normandie',
        title: 'White Flag',
        album: 'White Flag',
        file: 'file.mp3',
    }));

    res.send(trackService.find(song.id));
})

app.listen(port, () => {
  console.log(`API started on port: ${port}`)
})

