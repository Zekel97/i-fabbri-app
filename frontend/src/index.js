import React from 'react';
import ReactDOM from 'react-dom';
/**import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";**/
import './assets/styles/index.css';
import App from './assets/pages/App';
import Header from './assets/components/Header';
import Homepage from './assets/components/Homepage';
import Footer from './assets/components/Footer';
import Residenziale from './assets/components/Residenziale';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Residenziale />
    <Footer />
   
  </React.StrictMode>,
  document.getElementById('root')
);

