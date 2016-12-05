// view module
// create a new model module for spotify track that exports a class

export default class SpotifyTrack {
  constructor(data) {
    this.data = data;

    this.track = document.createElement('div');
    this.track.classList.add('track');
    this.track.classList.add('panel-block');
    this.track.innerHTML = `
    <div class="media">
      <div class="media-left">
        <div class="track__frame">
          <img class="track__img" src="" alt="">
          </div>
        </div>
      <div class="media-content">
        <h2 class="track__artist"></h2>
        <h4 class="track__name"></h4>
      </div>
      <div class="media-right">
        <div class="track__url">
          <a class="track__link">
            <span class="fa fa-spotify fa-3x"></span>
          </a>
        </div>
      </div>
    </div>`;

    // this.render();
  }
  render() {
    debugger;
    this.track.querySelector('.track__artist').innerText = this.data.artist;
    this.track.querySelector('.track__name').innerText = this.data.name;
    this.track.querySelector('.track__img').src = this.data.image;
    this.track.querySelector('.track__link').href = this.data.url;
  }
}
