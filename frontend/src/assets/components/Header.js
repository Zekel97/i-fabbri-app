import '../styles/Header.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenu] = useState(false);

  function buttonClick(e)
  {
    setMenu(!menuOpen);
  }

  function Benvenuto() 
  {
    if (menuOpen) {    
      return  <div className="nav">
                <ul>
                  <li>
                    <Link to="/">Homepage</Link>
                    </li>
                  <li>
                    <Link to="/residenziale">Residenziale</Link>
                  </li>
                  <li>
                    <Link to="/industriale">Industriale</Link>
                  </li>
                  <li>
                    <Link to="/contatti">Contatti</Link>
                  </li>
                </ul>
              </div>;  
    }  
    return null;
  }

  return (
    <header>
        <div className="title">
          <h1>I FABBRI</h1>
          <span>srl</span>
        </div>

         <button type="button" onClick={buttonClick} className={"menu " + (menuOpen ? 'open' : 'closed')}>
          <div className="burger"></div>
         </button>
         <Benvenuto />
    </header>
  );
}

export default Header;
