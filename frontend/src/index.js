import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './assets/styles/index.css';
import App from './assets/pages/App';
import Header from './assets/components/Header';
import Homepage from './assets/components/Homepage';
import Login from './assets/components/Login';
import Footer from './assets/components/Footer';
import Residenziale from './assets/components/Residenziale';
import Industriale from './assets/components/Industriale';
import Contatti from './assets/components/Contatti';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/residenziale" element={<Residenziale />} />
        <Route path="/industriale" element={<Industriale />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

