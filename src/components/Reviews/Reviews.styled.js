import styled from 'styled-components';

export const ListReviews = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const ReviewMessage = styled.div`
  color: red;
  font-weight: 700;
  font-size: 15px;
`;

export const ReviewItem = styled.li`
  width: 100%;
  border: 1px solid green;
  padding: 10px;
  border-radius: 10px;
  list-style: none;
  margin-bottom: 10px;
`;

export const ReviewHeader = styled.p`
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const ReviewText = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 10px;
`;
