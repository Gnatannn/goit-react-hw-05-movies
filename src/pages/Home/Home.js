import * as API from 'services/api';
import { HomeHeader, Main } from 'pages/Home/Home.styled';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function getMovies() {
      const response = await API.fetchTrendingToday();
      setMovies(response);
    })();
  }, []);

  return (
    <Main>
      <HomeHeader>Trending today</HomeHeader>
      <MovieList movies={movies} />
    </Main>
  );
};

export default Home;
