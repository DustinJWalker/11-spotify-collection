import 'whatwg-fetch';

import data from './data.json';
import TrackModel from './spotify-tracker/track-model';
import SpotifyTrack from './spotify-tracker/track-view';


data.tracks.items.forEach((item) => {
  const t = new TrackModel(item);

  const view = new SpotifyTrack(t);


  const results = document.querySelector('results');
  results.appendChild(view.data);
});
