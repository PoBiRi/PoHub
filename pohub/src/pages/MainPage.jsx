//메인페이지 모듈

import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from './blocks/Sidebar';
import Header from './blocks/Header';
import Section from './blocks/Section';
import Board from './blocks/Board';
import NotFound from './NotFound';

function MainPage(props) {
  const [sidebarToggle, setSidebarToggle] = useState();

  return (
    <Box>
      <Header setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle}/>
      <MainBox>
        <SideToggle className={sidebarToggle ? 'active' : sidebarToggle === false ? 'inactive' : ''}>
          <Sidebar sidebarToggle={sidebarToggle}/>
        </SideToggle>
        <Main>
          <Routes>
            <Route path='/:boardType/board/:boardID' element={<Board />} />
            <Route path='/:boardType/:pageNum' element={<Section />} />
            {/* 외의 주소 모두 NotFound */}
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Main>
      </MainBox>
    </Box>
  )
}

export default MainPage;

const Box = styled.div`
  height: 100vh;
  width: 100vw;
`;

//높이는 header의 높이만큼 뺌
const MainBox = styled.div`
  display: flex;
  height: calc(100vh - 1rem); 
`;

const fadeIn = keyframes`
  0% {
    transform: translateX(-152px);
    width: 64px;
  }
  100% {
    transform: translateX(0);
    width: 216px;
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translateX(0);
    width: 216px;
  }
  100% {
    transform: translateX(-152px);
    width: 64px;
  }
`;

const SideToggle = styled.div`
  transform: translateX(-152px);
  width: 64px;
  overflow: visible;

  &.active {
    animation: ${fadeIn} 0.3s forwards ease-in-out;
  }
  &.inactive {
    animation: ${fadeOut} 0.3s forwards ease-in-out;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #FFFAFA;
`;