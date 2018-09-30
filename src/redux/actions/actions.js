import axios from 'axios';
const YOUTUBE_BASE=(videoID)=>`https://www.youtube.com/watch?v=${videoID}`
const API_KEY = 'AIzaSyBxq6LItl_cAZWw-PKUhl_x3AbF7THPJLE';
const generateURL = () => {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}`;
  };
export const Fetcher = q => {
    return dispatch => {
      dispatch(fetching());
      axios(generateURL())
        .then(({ data: news }) => dispatch(loadNews(news)))
        .catch(error => dispatch(errorFetching(error)));
    };
  };