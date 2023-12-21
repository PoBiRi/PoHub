import './views/style/Main.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from './views/pages/Sidebar';
import Header from './views/pages/Header';
import Section from './views/pages/Section';
import NotFound from './views/pages/NotFound';

function App(props) {
  return (
    <div className='box'>
      <BrowserRouter>
        <Sidebar />
        <main className='main'>
          <Header /> 
          <Routes>
            <Route path='/' element={<Section />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
