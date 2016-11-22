// view module
// create a new model module for spotify track that exports a class

export default class SpotifyTrack {
  constructor(data) {
    this.data = data;
    this.el = document.createElement('div');
    this.el.classList.add('track');
    this.el.classList.add('panel-block');
    this.el.innerHTML = `
    <div class="content">
      <div class="content-left">
        <div class="track__frame">
          <img class="track__img src=" alt="">
          </div>
        </div>
      <div class="content-center">
        <h2 class="track__artist">
          <h4 class="track__name">
      </div>
      <div class="content-right">
        <div class="track__url">
          <a class="track__link">
            <span class="fa fa-spotify fa-3x"</span>
          </a>
        </div>
      </div>
    </div>`;

    this.render();
  }
  render()  {
    this.data.querySelector('.track__artist').innerText = this.data.artist;
    this.data.querySelector('.track__name').innerText = this.data.name;
    this.data.querySelector('.track__img').innerText = this.data.image;
    this.data.querySelector('.track__link').innerText = this.data.url;
  }
  }
