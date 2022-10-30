import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  width: 200px;
  /* height: 350px; */
  /* border: 2px solid grey; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
  :hover:not(.active),
  :focus-visible:not(.active) {
    border: 1px solid green;
  }
`;

export const LinkMovie = styled(NavLink)`
  color: grey;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  &.active {
    color: green;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: green;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 300px;
`;

export const ImgTitle = styled.p`
  padding: 10px;
  height: 38px;
`;
