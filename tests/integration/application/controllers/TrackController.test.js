import request from 'supertest';
import app from '../../../../src/app';

import db from '../../../../src/infrastructure/database/db';
import Track from '../../../../src/domain/tracks/Track';

describe('A TrackController', () => {
    beforeAll(async () => {
        await db.sync({ force: true })
    })

    it('can get a track by ID', async () => {
        const track = await Track.create({
            artist: 'Normandie',
            title: 'White Flag',
            album: 'White Flag',
            file: 'file.mp3',
        });

        const response = await request(app).get(`/tracks/${track.id}`);

        expect(response.statusCode).toEqual(200);
        expect(response.body.id).toEqual(track.id);
        expect(response.body.artist).toEqual('Normandie');
        expect(response.body.title).toEqual('White Flag');
        expect(response.body.album).toEqual('White Flag');
    });

    it('can create a track', async () => {
        const response = await request(app)
            .put('/track')
            .set('Accept', 'application/json')
            .send({
                artist: 'Normandie',
                title: 'White Flag',
                album: 'White Flag',
                file: 'file.mp3',
            });

        expect(response.statusCode).toEqual(200);
        expect(response.body.id).not.toBeNull();
        expect(response.body.artist).toEqual('Normandie');
        expect(response.body.title).toEqual('White Flag');
        expect(response.body.album).toEqual('White Flag');
    });
});