import React from 'react';

const TVShowList = ({ tvshows }) => {
    return (
        <div>
        <h1>TV Shows</h1>
        <ul>
            {tvshows.map(tvshow => (
            <li key={tvshow.id}>{tvshow.title}</li>
            ))}
        </ul>
        </div>
    );
    }

export default TVShowList;