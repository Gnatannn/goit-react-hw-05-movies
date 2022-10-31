import { useParams, useLocation, Outlet } from 'react-router-dom';
import * as API from 'services/api';
import { DEFAULT_IMG, IMG_PATH } from 'constants/constants';
import { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  MoviesDetailsContainer,
  ImgWrapper,
  StyledLink,
  Img,
  ContentWrapper,
  FilmTitle,
  TextTitle,
  TextContent,
  Message,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function loadMovieById(movieId) {
      try {
        const response = await API.getMovieById(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadMovieById(movieId);
  }, [movieId]);

  // const { poster_path, title, release_date, vote_average, overview, genres } =
  //   movie;

  return (
    <MoviesDetailsContainer>
      {movie && (
        <>
          <ImgWrapper>
            <StyledLink to={backLink}>Go Back</StyledLink>
            {movie.poster_path && (
              <Img
                src={
                  movie.poster_path ? IMG_PATH + movie.poster_path : DEFAULT_IMG
                }
                alt={movie.title}
              />
            )}
          </ImgWrapper>
          <ContentWrapper>
            <FilmTitle>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </FilmTitle>
            <TextTitle>
              User votes: {Math.round(movie.vote_average * 10) / 10}
            </TextTitle>
            <TextTitle>Overview:</TextTitle>
            <TextContent>{movie.overview}</TextContent>
            <TextTitle>Genres:</TextTitle>
            <TextContent>
              {movie.genres.map(genre => genre.name).join(', ') || 'no genres'}
            </TextContent>
            <TextTitle>Additional information:</TextTitle>

            <Suspense fallback={<Message>Loading...</Message>}>
              <Outlet />
            </Suspense>
          </ContentWrapper>
        </>
      )}
    </MoviesDetailsContainer>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    })
  ),
};

export default MovieDetails;
