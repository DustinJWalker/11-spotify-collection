import 'whatwg-fetch';
// import data from the json file into index.js
import './package';

// create a new model module for spotify trackk that exports a class
export default class SpotifyTrack {
  constructor(data) {
    this.data = data;
    // Element Setup
    // <div class="artist">
    // <p class="artist__name"></p>
    // <p class="artist__image"></p>
    // <img src="http//:open.spotify.com..."></img>
    this.track = document.createElement('div');
    this.track.classList.add('add__track');
    this.track.innerHTML = `
      <p class="artist__name"></p>
      <p class="artist__image"></p>
      <img src="http://open.spotify.com..."></img>`;
  }
  render() {
    this.track.querySelector('.artist__name').innerText = `${this.data.first} ${this.data.last}`;
    this.track.querySelector('.artist__image').innerText = this.data.artist__image;
    this.track.querySelector('.character__age').innerText = this.data.image;
  }


}
