# Not-ify

Not to be confused with another note-taking app, this is a (very WIP) Spotify clone using Node.js.

## Setup

- Ensure you have Node.js v18 installed
- Clone the repository
- Open a terminal inside the repository, and run:
```
npm install
```
- Create your `.env` file:
```
cp .env.example .env
```
- Update the database values in your `.env` file as needed. The example uses a MySQL database on `localhost`.
- Run migrations:
```
npx sequelize-cli db:migrate
```
- Run the dev server;
```
npm run dev
```
- Open `http://localhost:3000`
- Voila!

## Tests

Tests are run against an in-memory database for speed. This does have some drawbacks, such as not quite parity with MySQL, but this project won't run into that... hopefully!

```
npm test
```

## To do
- Finish API endpoints:
- [ ] Store actual media files
- [ ] Return all tracks
- [ ] Playlist CRUD functionality

- A lovely frontend
- [ ] Main index page
- [ ] Search
- [ ] Player
- [ ] Playlists