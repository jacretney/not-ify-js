require('iconv-lite').encodingExists('foo')

import request from 'supertest';
import db from '../../../../src/infrastructure/database/db';
import Track from '../../../../src/domain/tracks/Track';

describe('A TrackController', () => {
    const baseURL = 'http://localhost:3000';

    beforeAll(async () => {
        await db.authenticate();
    })

    afterAll(() => {
        return db.close();
    })

    it('can get a track by ID', async () => {
        const track = await Track.create({
            artist: 'Normandie',
            title: 'White Flag',
            album: 'White Flag',
            file: 'file.mp3',
        });

        const response = await request(baseURL).get(`/tracks/${track.id}`);

        expect(response.statusCode).toEqual(200);
        expect(response.body.id).toEqual(track.id);
        expect(response.body.artist).toEqual('Normandie');
        expect(response.body.title).toEqual('White Flag');
        expect(response.body.album).toEqual('White Flag');
    });

    it('can create a track', async () => {
        const response = await request(baseURL)
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