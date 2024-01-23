import React from 'react';
import * as S from './Switcher.styled';
import { TDisplayStatus } from '../../types/common';

interface ISwitcherProps {
  displayStatus: TDisplayStatus;
  handleChangeDisplayStatus: (status: TDisplayStatus) => void;
}

const Switcher: React.FC<ISwitcherProps> = ({ displayStatus, handleChangeDisplayStatus }) => {
  return (
    <S.Switcher>
      <S.SwitcherButton 
        isActive={displayStatus === 'list'}
        onClick={() => handleChangeDisplayStatus('list')}
      >
        List
      </S.SwitcherButton>
      <S.SwitcherButton 
        isActive={displayStatus === 'tiles'}
        onClick={() => handleChangeDisplayStatus('tiles')}
      >
        Tiles
      </S.SwitcherButton>
    </S.Switcher>
  )
}

export default Switcher;
