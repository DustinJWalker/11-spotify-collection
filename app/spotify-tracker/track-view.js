// view module
// create a new model module for spotify track that exports a class

export default class SpotifyTrack {
  constructor(data) {
    this.data = data;
    const container = document.createElement('div');
    container.classList.add('track');
    container.classList.add('panel-block');
    container.innerHTML = `
      <p class="track__artist"></p>
      <p class="track__name"></p>
      <img class="track__img">
      <a class="track__link"></a></img>`;

    this.render(data);
  }
  render()  {
    this.data.querySelector('.track__artist').innerText = this.data.artist;
    this.data.querySelector('.track__name').innerText = this.data.name;
    this.data.querySelector('.track__img').innerText = this.data.url;
    this.data.querySelector('.track__link').innerText = this.data.url;
  }
  }
