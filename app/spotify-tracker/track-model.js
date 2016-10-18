// model module
export default class TrackModel {
  constructor(model) {
    this.artist = model.artist[0].name;
    this.name = model.items[0].name;
    this.image = model.album.images[0].url;
    this.url = model.external_urls.spotify;
  }
}
