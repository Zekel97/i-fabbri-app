import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './assets/styles/index.css';
import PrivateRoute from './assets/components/PrivateRoute'
import Header from './assets/components/Header';
import Homepage from './assets/components/Homepage';
import Login from './assets/components/Login';
import Footer from './assets/components/Footer';
import Residenziale from './assets/components/Residenziale';
import Industriale from './assets/components/Industriale';
import Contatti from './assets/components/Contatti';
import Admin from './assets/components/Admin';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/residenziale" element={<Residenziale />} />
        <Route path="/industriale" element={<Industriale />} />
        <Route path="/contatti" element={<Contatti />} />
        
        <Route path="/login" element={<Login />} />
        
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

