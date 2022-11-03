import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesDetailsContainer = styled.div`
  display: flex;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 15px;
  font-weight: 700;
  /* padding-top: 10px;
  padding-left: 15px; */
  &.active {
    color: green;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;

export const Img = styled.img`
  max-width: 350px;
  height: 350px;
  border-radius: 25px;
  padding: 15px;
`;

export const ContentWrapper = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  display: flex;
  height: 600px;
  flex-direction: column;
`;

export const FilmTitle = styled.div`
  color: green;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const TextTitle = styled.div`
  color: green;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const TextContent = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const Message = styled.div`
  text-align: center;
  color: green;
  font-size: 50px;
  font-weight: 700;
  margin: 30px 30px;
  display: flex;
  align-items: baseline;
`;
export const AdditionalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  padding: 0px;
`;

export const AdditionalItem = styled.li`
  width: 100px;
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
`;
