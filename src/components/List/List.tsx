import React from 'react';
import * as S from './List.styled';
import { IUser } from '../../config/users';

interface IListProps {
  users: IUser[];
}

const List: React.FC<IListProps> = ({ users }) => {
  return (
    <S.List>
      {
        users.map(user => {
          return (
            <S.ListItem key={user.email}>
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.phone}</span>
            </S.ListItem>
          )
        })
      }
    </S.List>
  )
}

export default List;
