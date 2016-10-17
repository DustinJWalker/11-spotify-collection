// model module
export default class Track {
  constructor(data) {
    this.artist = data.artist[0].artist;
    this.name = data.name[0].name;
    this.image = data.image[0].url;
    this.url = data.Items[0].external_urls;
  }
}
