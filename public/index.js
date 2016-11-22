import 'whatwg-fetch';

import data from './data.json';
import Model from './track-model';
import SpotifyTrack from './track-view';


data.track.items.forEach((item) => {
  const t = new Model(item);

  const view = new SpotifyTrack(t);


  const results = document.querySelector('results');
  results.appendChild(view.data);
});
