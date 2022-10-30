import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

export const MoviesHeader = styled.h1`
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoviesContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormEl = styled(Form)`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

export const FieldEl = styled(Field)`
  width: 300px;
  height: 50px;
  border-radius: 15px;
  border: solid green 1px;
  color: green;
  background-color: white;
  padding-left: 15px;
  font-weight: 500;
  font-size: 20px;
`;

export const MoviesSearchButton = styled.button`
  display: inline-block;
  width: 100px;
  height: 52px;
  color: green;
  background-color: white;
  border: solid green 1px;
  /* opacity: 0.6; */
  cursor: pointer;
  font-size: 20px;
  border-radius: 15px;
  :hover {
    color: white;
    background-color: green;
    opacity: 0.5;
  }
`;

export const InfoMessage = styled.p`
  margin: 30px;
  font-size: 35px;
  font-weight: 700;
  color: red;
`;

export const BackLink = styled(Link)`
  font-weight: 500;
  color: green;
  margin-bottom: 30px;
`;
