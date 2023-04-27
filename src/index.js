import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/index.css";
//import ResetStyle from './style/ResetStyle';
import App from './App';
import GlobalStyle from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);