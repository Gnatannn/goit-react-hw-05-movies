import {
  LinkMovie,
  List,
  Item,
  Img,
  ImgTitle,
} from 'components/MovieList/MovieList.styled';
import { DEFAULT_IMG, IMG_PATH } from 'constants/constants';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ title, id, poster_path }) => {
        return (
          <Item key={id}>
            <LinkMovie to={`movies/${id}`} state={{ from: location }}>
              <Img
                src={poster_path ? IMG_PATH + poster_path : DEFAULT_IMG}
                alt={title}
                loading="lazy"
              />
              <ImgTitle>{title.toUpperCase()}</ImgTitle>
            </LinkMovie>
          </Item>
        );
      })}
    </List>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
