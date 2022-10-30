import { Formik } from 'formik';
import * as API from 'services/api';
import {
  MoviesHeader,
  MoviesContainer,
  FormEl,
  FieldEl,
  MoviesSearchButton,
  InfoMessage,
  BackLink,
} from 'pages/Movies/Movies.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [findedFilms, setFindedFilms] = useState([]);
  const [isFilmsLoaded, setIsFilmsLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      getFindedFilms(query);
    }
  }, [searchParams]);

  async function getFindedFilms(films) {
    if (films === '') {
      return;
    }
    try {
      const response = await API.getMovieBySearch(films);
      setFindedFilms(response);
      setIsFilmsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);

    if (values.searchInput === '') {
      return;
    }

    setSearchParams({ query: values.searchInput });
    getFindedFilms(values.searchInput);
  };

  return (
    <MoviesContainer>
      <MoviesHeader>Movies</MoviesHeader>
      <Formik
        initialValues={{ searchInput: searchParams.get('query') || '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormEl>
            <FieldEl
              name="searchInput"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Film name"
            />
            <MoviesSearchButton type="submit" disabled={isSubmitting}>
              Search
            </MoviesSearchButton>
          </FormEl>
        )}
      </Formik>
      {findedFilms.length === 0 &&
        searchParams.get('query') &&
        isFilmsLoaded && (
          <InfoMessage>We can't find this film, try again.</InfoMessage>
        )}
      <MovieList movies={findedFilms} />
      <BackLink to="/">Go home</BackLink>
    </MoviesContainer>
  );
};

export default Movies;
