class CreateTrackData {
    constructor({ artist, title, album, file}) {
        [artist, title, album, file].forEach(data => {
            if (data && ! data instanceof String) {
                throw new Error(`Invalid data passed to CreateTrackData: ${data}`);
            }
        })

        this.title = title;
        this.artist = artist;
        this.album = album;
        this.file = file;
    }

    toJson() {
        return {
            title: this.title,
            artist: this.artist,
            album: this.album,
            file: this.file,
        }
    }
}

export default CreateTrackData;