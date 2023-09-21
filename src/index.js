import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import InputModel from './InputModel';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
    <Routes>
      <Route path='/main' element={<App />} />
      <Route path='/adminloginsuccess' element={<InputModel />} />
      <Route path='/admin' element={<AdminLogin />} />
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
