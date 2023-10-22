const MY_API_KEY = "AIzaSyDZ98ZrHVzvGG0NUUcrEAI-4DT2oxEPngY";
const MY_API_KEY_2 = "AIzaSyAziYvxwSMAzW8mXzSlO1fMvYS_8ctUDLY";

const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  MY_API_KEY;

const SEARCH_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const SEARCH_BY_KEYWORD_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  MY_API_KEY +
  "&q=";

export { YOUTUBE_API, SEARCH_SUGGESTIONS_API, SEARCH_BY_KEYWORD_API };
