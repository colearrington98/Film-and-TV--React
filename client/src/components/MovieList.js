import React from 'react';

const MovieList = ({ movies }) => {
    return (
        <div>
        <h1>Movies</h1>
        <ul>
            {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
        </div>
    );
    }

export default MovieList;