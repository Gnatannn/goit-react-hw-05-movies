import axios from 'axios';

const API_KEY = 'fd6bb4af85e210e712557c20fca0d5b7';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingToday = async () => {
  try {
    const response = await axios.get(`trending/movie/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async movieId => {
  try {
    const response = await axios.get(`/movie/${Number(movieId)}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCast = async id => {
  try {
    const response = await axios.get(`movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async id => {
  try {
    const response = await axios.get(`movie/${id}/review`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieBySearch = async query => {
  try {
    const response = await axios.get(`search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
