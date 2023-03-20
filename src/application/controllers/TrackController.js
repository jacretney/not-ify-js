import TrackService from "../../domain/tracks/TrackService.js";
import CreateTrackData from "../../domain/tracks/data/CreateTrackData.js";

const trackService = new TrackService();

const find = async (req, res) => {
    res.send(await trackService.find(req.params.id))
}

const create = async (req, res) => {
    res.send(await trackService.create(new CreateTrackData({
        artist: req.body.artist,
        title: req.body.title,
        album: req.body.album,
        file: req.body.file,
    })))
}

export default {
    find,
    create,
};