import { Sidebar } from 'components';
import React from 'react';
import GlobalStyles from './styles/common/GlobalStyles';

const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <Sidebar />
    </div>
  );
};

export default App;
