import 'whatwg-fetch';
// import data from the json file into index.js
import  data from './data.json';
import model from './track-model';
import SpotifyTrack from  './track-view';

// loop
  const results = document.querySelector('.results');

  data.tracks.items.forEach((item) => {
    const t = new model(item);

    const view = new SpotifyTrack(t);
    view.render();
    document.body.appendChild(view.data);
  }

});
