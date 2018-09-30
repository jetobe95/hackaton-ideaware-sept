import axios from 'axios';
import {
  FETCHING_VIDEOS,
  ADD_QUEUE,
  FETCHING_VIDEOS_ERROR,
  FETCHING_VIDEOS_SUCCESS,
  HANDLE_FAVORITE,
  LOAD_VIDEOS,PLAY_SONG,HANDLE_PLAY_SONG
} from './actionTypes';
const API_KEY = 'AIzaSyBxq6LItl_cAZWw-PKUhl_x3AbF7THPJLE';
const generateURL = (q) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${q}&maxResults=10`;
};

export const errorFetching = () => ({
  type:FETCHING_VIDEOS_ERROR,
  payload:{fetching:false}
});
export const fetching = () => ({
  type:FETCHING_VIDEOS,
  payload:{fetching:true}
});
export const LoadVideos = (videos) => ({
  type:LOAD_VIDEOS,
  payload:{songs:videos,fetching:false}
});
export const playSong = (currentSong) => ({
  type:PLAY_SONG,
  payload:{currentSong,playing:true}
});
export const handleFavorite = (song) => ({
  type:HANDLE_FAVORITE,
  payload:{playing:true}
});
export const handleplaySong = () => ({
  type:HANDLE_PLAY_SONG,
  
});


export const Fetcher = q => {
  return dispatch => {
    dispatch(fetching());
    axios(generateURL(q))
      .then(({ data: {items}}) => dispatch(LoadVideos(items)))
      .catch(error => dispatch(errorFetching(error)));
  };
};
