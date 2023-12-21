import './views/style/Main.css';
import {BrowserRouter} from 'react-router-dom';
import MainPage from './views/pages/MainPage';
//import Login from './views/pages/Login';

function App(props) {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  )
}

export default App;
