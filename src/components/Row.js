import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

const base_url_poster = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]); //  movies = []

  //conditional

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL); // variables that are used in asynch functions from outside of the asynch f should be set as dependecy instead of []
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]); //if [] , run once when the row loads, and dont run again / if[movies] - it will run everytime the movie changes

  //console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* container ->posters */}
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${base_url_poster}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {/*  */}
    </div>
  );
}

export default Row;
