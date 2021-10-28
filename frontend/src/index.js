import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './assets/pages/App';
import Header from './assets/components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

