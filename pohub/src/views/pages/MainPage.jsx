import '../style/Main.css';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Section from './Section';
import NotFound from './NotFound';

function MainPage(props) {
  return (
    <div className='box'>
        <Sidebar />
        <main className='main'>
          <Header /> 
          <Routes>
            <Route path='/Pages/:boardType' element={<Section />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
    </div>
  )
}

export default MainPage;
