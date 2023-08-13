const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async term => {
    const response = await fetch(
        `${API_URL}/search/movie?api_key=${API_KEY}&query=${term}`
    );
    const data = await response.json();
    return data.results;
};

export const fetchTVShows = async term => {
    const response = await fetch(
        `${API_URL}/search/tv?api_key=${API_KEY}&query=${term}`
    );
    const data = await response.json();
    return data.results;
};

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;
