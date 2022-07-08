import React from 'react';
import styled from 'styled-components';

import { Main, Menu } from './page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const View = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <View>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </View>
  );
}

export default App;
