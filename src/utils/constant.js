const MY_API_KEY = import.meta.env.VITE_API_KEY_1;
const MY_API_KEY_2 = import.meta.env.VITE_API_KEY_2;

const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  MY_API_KEY;

const SEARCH_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?ds=yt&q=";

const SEARCH_BY_KEYWORD_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  MY_API_KEY +
  "&q=";

export { YOUTUBE_API, SEARCH_SUGGESTIONS_API, SEARCH_BY_KEYWORD_API };
