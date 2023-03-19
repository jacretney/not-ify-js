import TrackService from "../../domain/tracks/TrackService.js";

const trackService = new TrackService();

const find = async (req, res) => {
    res.send(await trackService.find(req.params.id))
}

const create = async (req, res) => {
    res.send(await trackService.create({
        artist: req.params.artist,
        title: req.params.title,
        album: req.params.album,
        file: req.params.file,
    }))
}


export default {
    find,
    create,
};