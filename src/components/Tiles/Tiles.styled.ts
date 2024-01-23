import styled from "styled-components";

export const Tiles = styled.section`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

export const TilesItem = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  max-width: 180px;

  border: 1px solid #000000;
  border-radius: 12px;

  span:first-child {
    margin-bottom: 30px;
  }
`;