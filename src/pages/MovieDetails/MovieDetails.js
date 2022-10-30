import { useParams, useLocation, Outlet } from 'react-router-dom';
import * as API from 'services/api';
import { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';

const MovieDetails = id => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async function loadMovieById(movieId) {
      try {
        const response = await API.getMovieById(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error.message);
      }
    })();
    // loadMovieById(movieId);
  }, [movieId]);
};

export default MovieDetails;
