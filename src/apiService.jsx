// src/apiService.js
const API_KEY = '10b8a684';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, page = 1, type , year) => {
  try {
    const url = `${BASE_URL}?s=${query}&type=${type}&page=${page}&y=${year}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "False") throw new Error(data.Error);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const url = `${BASE_URL}?i=${id}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "False") throw new Error(data.Error);
    return data;
  } catch (error) {
    throw error;
  }
};
