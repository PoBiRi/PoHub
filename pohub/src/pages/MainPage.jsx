//메인페이지 모듈

import {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Swal from 'sweetalert2';
import Sidebar from './blocks/Sidebar';
import Header from './blocks/Header';
import Section from './blocks/Section';
import Board from './blocks/Board';
import NotFound from './NotFound';
import { getData } from 'controller/ReqData';

function MainPage(props) {
  const [sidebarToggle, setSidebarToggle] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn === undefined){
      getData('isLoggedIn', setIsLoggedIn);
    }
    if(isLoggedIn === false){
      Swal.fire({
        title: 'Error',
        text: '로그인 후 이용해주세요',
      });
      navigate("/");
    }
  // eslint-disable-next-line
  }, [isLoggedIn]);

  // eslint-disable-next-line
  const checkIsLoggedIn = () => {
    getData('isLoggedIn', setIsLoggedIn);
  }

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
  0% { transform: translateX(-152px); width: 64px; }
  100% { transform: translateX(0); width: 216px; }
`;

const fadeOut = keyframes`
  0% { transform: translateX(0); width: 216px; }
  100% { transform: translateX(-152px); width: 64px; }
`;

const fadeInMobile = keyframes`
  0% { transform: translateX(-152px); }
  100% { transform: translateX(0); }
`;

const fadeOutMobile = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-152px); }
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

  @media screen and (max-width: 600px){
    &.active {
      animation: ${fadeInMobile} 0.3s forwards ease-in-out;
    }
    &.inactive {
      animation: ${fadeOutMobile} 0.3s forwards ease-in-out;
    }
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #FFFAFA;
`;