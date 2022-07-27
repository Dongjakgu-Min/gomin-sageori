import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

import { Main, Menu } from './page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const View = styled.div`
  width: 100vw;
  height: 100vh;
`;

const TopBar = styled.header`
  width: (100% - 40px);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
`;

function App() {
  return (
    <View>
      <TopBar><div></div><AiOutlineMenu /></TopBar>
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
