import React, { useState, useEffect } from 'react';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import axios from '../axios';
import './Row.css';

const base_url_poster = 'https://image.tmdb.org/t/p/original/';

function Row({
  title,
  fetchURL,
  isLargeRow,
  rowNumber,
  trailerUrl,
  handleChangeUrl,
  currentRow,
}) {
  const [movies, setMovies] = useState([]);
  const [myRow, setIsMyRow] = useState(false);

  //conditional

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL); // variables that are used in asynch functions from outside of the asynch f should be set as dependecy instead of []
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  useEffect(() => {
    const isMyRow = currentRow === rowNumber;
    setIsMyRow(isMyRow);
  }, [currentRow, rowNumber]);

  const options = {
    height: '420',
    width: '630',
    playerVars: {},
    autoplay: true,
  };

  const handleClick = (movie) => {
    movieTrailer(movie?.name || movie?.original_title || movie?.title)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);

        handleChangeUrl([rowNumber, urlParams.get('v')]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {/* container ->posters */}
        {movies?.map((movie) => {
          if (movie)
            return (
              <img
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                key={movie.id}
                src={`${base_url_poster}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          return <></>;
        })}
      </div>
      {myRow && trailerUrl && (
        <div className='row__clip_container'>
          <YouTube videoId={trailerUrl} opts={options} />
        </div>
      )}
    </div>
  );
}

export default Row;
