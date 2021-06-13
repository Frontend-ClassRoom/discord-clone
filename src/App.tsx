import { Chat, Sidebar } from 'components';
import React, { FC } from 'react';
import GlobalStyles from './styles/common/GlobalStyles';

const App: FC = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <Sidebar />
      <Chat />
    </div>
  );
};

export default App;
