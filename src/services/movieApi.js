import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2f44dbe234f7609a16da7327d83f3eb3';

export const fetchTrendMovies = async () => {
  const response = await axios.get(`${BASE_URL}trending/movie/day`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

export const fetchMovieCredits = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data.cast;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data.results;
};

export const fetchSearchMovie = async query => {
  const response = await axios.get(`${BASE_URL}search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query: query,
    },
  });
  return response.data.results;
};
