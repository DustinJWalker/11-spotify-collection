// view module
// create a new model module for spotify track that exports a class

export default class SpotifyTrack {
  constructor(data) {
    this.data = data;

    this.track = document.createElement('div');
    this.track.classList.add('track');
    this.track.classList.add('panel-block');
    this.track.innerHTML = `
    <div class="content">
      <div class="content-left">
        <div class="track__frame">
          <img class="track__img" src="" alt="">
          </div>
        </div>
      <div class="content-center">
        <h2 class="track__artist">
          <h4 class="track__name">
      </div>
      <div class="content-right">
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
    this.track.querySelector('.track__artist').innerText = this.data.artist;
    this.track.querySelector('.track__name').innerText = this.data.name;
    this.track.querySelector('.track__img').src = this.data.image;
    this.track.querySelector('.track__link').href = this.data.url;
  }
}
