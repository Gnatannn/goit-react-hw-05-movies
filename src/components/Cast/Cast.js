import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_PATH } from 'constants/constants';
import * as API from 'services/api';
import {
  CastMessage,
  List,
  ListItem,
  ItemImg,
  ItemWrapper,
  ItemInfo,
} from './Cast.styled';
import PropTypes from 'prop-types';

const NO_IMAGE = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isCastLoaded, setIsCastLoaded] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadCast(movieId) {
      try {
        const response = await API.getCast(movieId);
        setCast(response);
        setIsCastLoaded(true);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadCast(movieId);
  }, [movieId]);

  if (cast.length === 0 && isCastLoaded) {
    return <CastMessage> There is no information about cast</CastMessage>;
  }

  return (
    <List>
      {cast.map(({ id, name, profile_path, character }) => {
        return (
          <ListItem key={id}>
            <ItemImg
              src={profile_path ? IMG_PATH + profile_path : NO_IMAGE}
              alt={name}
              loading="lazy"
            />
            <ItemWrapper>
              <ItemInfo>{name}</ItemInfo>
              <ItemInfo>Character: {character}</ItemInfo>
            </ItemWrapper>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Cast;

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
