import { useState, useEffect } from 'react';
import * as API from 'services/api';
import { useParams } from 'react-router-dom';
import {
  ListReviews,
  ReviewMessage,
  ReviewItem,
  ReviewHeader,
  ReviewText,
} from 'components/Reviews/Reviews.styled';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isReviewsLoaded, setIsReviewsLoaded] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadReviews(movieId) {
      try {
        const response = await API.getReviews(movieId);
        setReviews(response);
        setIsReviewsLoaded(true);
        // console.log(response);
        // console.log(reviews);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadReviews(movieId);
  }, [movieId]);

  if (reviews.length === 0 && isReviewsLoaded) {
    return (
      <ReviewMessage>We don`t have any review of this movie</ReviewMessage>
    );
  }

  return (
    <ListReviews>
      {reviews.map(({ id, author, content }) => {
        return (
          <ReviewItem key={id}>
            <ReviewHeader>Author: {author}</ReviewHeader>
            <ReviewText>{content}</ReviewText>
          </ReviewItem>
        );
      })}
    </ListReviews>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
