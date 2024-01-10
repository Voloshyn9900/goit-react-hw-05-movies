import axios from 'axios';


const API_KEY = 'dd5d66bbf58394e0dcdadd4fac230a49';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrendMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchSerchMovies = async (query) => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchGetMovieDetailsById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchGetMovieCastById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchGetMovieReviewsById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};