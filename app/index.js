import 'whatwg-fetch';
// import data from the json file into index.js
import  data from './data.json';
import Model from './track-model';
import SpotifyTrack from  './track-view';

// loop
const results = document.querySelector('results');

data.track.items.forEach((item) => {
  const t = new Model(item);

  const view = new SpotifyTrack(t);

  view.render();

  results.appendChild(view.data);
});
