import React from 'react';
import * as S from './Tiles.styled';
import { IUser } from '../../config/users';

interface ITilesProps {
  users: IUser[];
}

const Tiles: React.FC<ITilesProps> = ({ users }) => {
  return (
    <S.Tiles>
      {
        users.map(user => {
          return (
            <S.TilesItem>
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.phone}</span>
            </S.TilesItem>
          )
        })
      }
    </S.Tiles>
  )
}

export default Tiles;
