import React, { useCallback, useState } from 'react';
import './App.css';
import { Container } from './components/Container';
import { Switcher } from './components/Switcher';
import { TDisplayStatus } from './types/common';
import { List } from './components/List';
import { users } from './config/users';
import { Tiles } from './components/Tiles';

function App() {
  const [displayStatus, setDisplayStatus] = useState<TDisplayStatus>('list');

  const handleChangeDisplayStatus = useCallback((status: TDisplayStatus) => {
    setDisplayStatus(status);    
  }, []);

  return (
    <Container>
      <Switcher displayStatus={displayStatus} handleChangeDisplayStatus={handleChangeDisplayStatus} />
      {
        displayStatus === 'list' && <List users={users} />
      }
      {
        displayStatus === 'tiles' && <Tiles users={users} />
      }
    </Container>
  );
}

export default App;
