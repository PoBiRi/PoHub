import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';
import NotFound from 'pages/NotFound';
import {getData} from 'controller/ReqData';

function App(props) {
  useEffect(() =>{
    getData('clientIp');
  },[]);
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/Pages/*' element={<MainPage />} />
        <Route path='/*' element={<NotFound />} />
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
