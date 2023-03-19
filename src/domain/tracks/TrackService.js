import TrackRepository from "./TrackRepository.js";
import Track from "./Track.js";

class TrackService {
    /**
     * @param {TrackRepository} trackRepository 
     */
    constructor(trackRepository) {
        this.trackRepository = trackRepository;
    }

    /**
     * @param {Number} trackId 
     * @returns {Track|null}
     */
    find(trackId) {
        return this.trackRepository.find(trackId);
    }

    /**
     * @param {CreateTrackData} data
     * @returns {Track}
     */
    create(data) {
        const track = this.trackRepository.create(data.toJson());

        console.log('Track created', JSON.stringify(data.toJson()));

        return track;
    }
}

export default TrackService;