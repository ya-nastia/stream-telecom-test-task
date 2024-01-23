import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(2, 2fr);

  padding: 8px 16px;

  border: 1px solid black;
  border-radius: 8px;

  span:last-child {
    text-align: end;
  }
`;