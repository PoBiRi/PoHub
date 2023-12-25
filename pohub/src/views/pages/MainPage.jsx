import '../style/Main.css';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './blocks/Sidebar';
import Header from './blocks/Header';
import Section from './blocks/Section';
import NotFound from './NotFound';

function MainPage(props) {
  return (
    <div className='box'>
        <Sidebar />
        <main className='main'>
          <Header /> 
          <Routes>
            <Route path='/Pages/:boardType' element={<Section />} />
            {/* 외의 주소 모두 NotFound */}
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
    </div>
  )
}

export default MainPage;
