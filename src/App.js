import React, { useState } from 'react';

import './App.css';
import Row from './components/Row';
import { dataMovies } from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  const [trailerUrl, setTrailerUrl] = useState('');
  const [currentRow, setCurrentRow] = useState('');
  const handleChangeUrl = (valueArr) => {
    if (valueArr[0] !== currentRow) setCurrentRow(valueArr[0]);
    if (valueArr[1]) setTrailerUrl(valueArr[1]);
  };

  const displayAllRows = dataMovies?.map((row, index) => {
    return (
      <Row
        key={index}
        trailerUrl={trailerUrl}
        currentRow={currentRow}
        handleChangeUrl={handleChangeUrl}
        title={row.title}
        fetchURL={row.fetchURL}
        isLargeRow
        rowNumber={index + 1}
      />
    );
  });

  return (
    <div className='App'>
      <Nav></Nav>
      <Banner />
      {/* banner */}
      {displayAllRows}
    </div>
  );
}

export default App;
