// view module
// create a new model module for spotify track that exports a class

export default class SpotifyTrack {
  constructor(data) {
    const container = document.createElement('div');
    container.classList.add('track');
    container.classList.add('panel-block');
    container.innerHTML = `
      <p class="track__artist"></p>
      <p class="track__name"></p>
      <a class="track__url"></a>
      <img class="track__image"></img>`;

    this.render(data);
  }
  render()  {
    this.data.querySelector('.track__artist').innerText = this.data.artist;
    this.data.querySelector('.track__name').innerText = this.data.name;
    this.data.querySelector('.track__url').innerText = this.data.url;
    this.data.querySelector('.track__image').innerText = this.data.url;
  }
  }
