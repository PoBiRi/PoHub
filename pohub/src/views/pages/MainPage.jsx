import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './blocks/Sidebar';
import Header from './blocks/Header';
import Section from './blocks/Section';
import NotFound from './NotFound';

function MainPage(props) {
  return (
    <Box>
      <Header />
      <MainBox>
          <Sidebar />
          <Main>
            <Routes>
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
`;

const MainBox = styled.div`
  display: flex;
  height: calc(100vh - 1rem);
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #f3f4f6; /*#D0CFCF*/
`;