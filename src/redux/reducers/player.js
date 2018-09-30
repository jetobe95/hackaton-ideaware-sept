import {
  LOAD_VIDEOS,
  FETCHING_VIDEOS,
  FETCHING_VIDEOS_SUCCESS,
  FETCHING_VIDEOS_ERROR,
  PLAY_SONG,
  HANDLE_PLAY_SONG
} from '../actions/actionTypes';
const InitialState = {
  fetching: false,
  Queue: {},
  repeat: false,
  larger: false,
  playing: false,
  random: false,
  muted: false,
  songs: [],
  volume:5,
  currentSong: {
    snippet: { id: { videoId:'' }, title: 'name', channelTitle: 'artist' }
  }
};

const PlayerReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOAD_VIDEOS:
      return {
        ...state,
        ...action.payload
      };
    case FETCHING_VIDEOS:
      return {
        ...state,
        ...action.payload
      };
    case FETCHING_VIDEOS_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case FETCHING_VIDEOS_ERROR:
      return {
        ...state,
        ...action.payload
      };
    case PLAY_SONG:
      return {
        ...state,
        ...action.payload
      };
    case HANDLE_PLAY_SONG:
      return {
        ...state,
        playing:!state.playing
      };
    default:
      return state;
  }
};
export default PlayerReducer;
