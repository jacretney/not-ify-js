import { Op } from "sequelize";
import Track from "./Track.js";

class TrackRepository {
    /**
     * @param {Object} data 
     * @returns {Track}
     */
    async create(data) {
        return await Track.create(data);
    }

    /**
     * @param {String} id
     * @returns {Track|null}
     */
    async find(trackId) {
        const tracks = await Track.findAll({
            where: {
                id: {
                    [Op.eq]: trackId,
                }
            },
        });


        return tracks[0];
    }
}

export default TrackRepository;