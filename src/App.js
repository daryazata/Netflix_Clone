import React from "react";

import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";

function App() {
  console.log();
  return (
    <div className="App">
      {/* Navbar */}
      <Banner />

      {/* banner */}
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow // =={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRate} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row
        title="Documentary Movies"
        fetchURL={requests.fetchDocumentarMovies}
      />
    </div>
  );
}

export default App;
