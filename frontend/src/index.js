import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './assets/pages/App';
import Header from './assets/components/Header';
import Homepage from './assets/components/Homepage';
import Footer from './assets/components/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Homepage />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

