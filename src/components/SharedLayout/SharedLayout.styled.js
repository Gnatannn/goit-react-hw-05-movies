import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  &.active {
    color: green;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;

export const Button = styled.button`
  height: 48px;
  width: 300px;
  display: inline-block;
`;

export const Message = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: baseline;
`;
