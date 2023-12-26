import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import MainPage from './views/pages/MainPage';
import Login from './views/pages/Login';
import getData from '../src/controller/getData';

function App(props) {
  useEffect(() =>{
    getData('clientIp');
  },[]);
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />}/>
        <Route path='/*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
