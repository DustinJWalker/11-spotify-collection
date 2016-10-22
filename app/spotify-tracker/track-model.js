// model module
export default class TrackModel {
  constructor(track) {
    this.artist = track.artist[0].name;
    this.name = track.items[0].name;
    this.image = track.album.images[0].url;
    this.url = track.external_urls.spotify;
  }
}
