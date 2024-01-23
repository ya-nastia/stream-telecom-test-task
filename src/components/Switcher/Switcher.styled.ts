import styled from "styled-components";

export const Switcher = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  margin-bottom: 20px;
  padding: 8px 10px;

  border-bottom: 1px solid #000000;
`;

export const SwitcherButton = styled.button<{ isActive: boolean }>`
  padding: 4px 8px;

  background: transparent;
  border: ${({isActive}) => isActive ? '1px solid #000000' : 'none'};
  border-radius: 8px;

  cursor: pointer;
`;