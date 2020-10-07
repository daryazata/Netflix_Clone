import { MOVIE_API_KEY } from "./key";
//const MOVIE_API_KEY = key.MOVIE_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${MOVIE_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${MOVIE_API_KEY}&with_networks=213`,
  fetchTopRate: `/movie/top_rated?api_key=${MOVIE_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=10749`,
  fetchDocumentarMovies: `/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=99`,
  fetchGenres: `/genre/movie/list?api_key=${MOVIE_API_KEY}&language=en-US`,
};

export default requests;
