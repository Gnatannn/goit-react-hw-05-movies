import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  width: 200px;
  /* height: 120px; */
  border: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 15px;
`;

export const LinkMovie = styled(NavLink)`
  color: #97055a;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  &.active {
    color: #c01062;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #f10337;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const ImgTitle = styled.p`
  padding: 10px;
`;
