const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_networks=213`,
  fetchTopRate: `/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=10749`,
  fetchDocumentarMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=99`,
  fetchGenres: `/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
};

export default requests;

export const dataMovies = [
  {
    title: 'Netflix Originals',
    fetchURL: requests.fetchNetflixOriginals,
  },
  {
    title: 'Trending Now',
    fetchURL: requests.fetchTrending,
  },
  {
    title: 'Top Rated',
    fetchURL: requests.fetchTopRate,
  },
  {
    title: 'Action Movies',
    fetchURL: requests.fetchActionMovies,
  },
  {
    title: 'Comedy Movies',
    fetchURL: requests.fetchComedyMovies,
  },
  {
    title: 'Horror Movies',
    fetchURL: requests.fetchHorrorMovies,
  },
  {
    title: 'Romance Movies',
    fetchURL: requests.fetchRomanceMovies,
  },
  {
    title: 'Documentary Movies',
    fetchURL: requests.fetchDocumentarMovies,
  },
];
