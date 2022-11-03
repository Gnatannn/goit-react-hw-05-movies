import styled from 'styled-components';

export const ItemImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;

export const ListItem = styled.li`
  width: 130px;
  border: 1px solid green;
  padding: 10px;
  border-radius: 10px;
  list-style: none;
  /* display: list-item;
  justify-content: center;
  align-items: center; */
`;

export const CastMessage = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: red;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemInfo = styled.div`
  font-size: 15px;
  font-weight: 500;
  padding: 5px;
`;
