import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './components/MovieList';
import TVShowList from './components/TVShowList';
import { fetchMovies, fetchTVShows } from './api';
import './styles.css';

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const [tvshows, setTVShows] = React.useState([]);

  const onSearchSubmit = async term => {
    const movieResults = await fetchMovies(term);
    setMovies(movieResults); 
    const tvShowResults = await fetchTVShows(term);
    setTVShows(tvShowResults); 
  };
  

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onFormSubmit={onSearchSubmit} />
      <MovieList movies={movies} />
      <TVShowList tvshows={tvshows} />
    </div>
  );
};



export default App;
