import '../styles/Header.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menuOpen);
  }


  const MainNavigation = () => {
    return (
      menuOpen &&
      <div className="nav">
        <ul>
          <li>
            <Link to="/" onClick={openMenu}>Homepage</Link>
          </li>
          <li>
            <Link to="/residenziale" onClick={openMenu}>Residenziale</Link>
          </li>
          <li>
            <Link to="/industriale" onClick={openMenu}>Industriale</Link>
          </li>
          <li>
            <Link to="/contatti" onClick={openMenu}>Contatti</Link>
          </li>
          <li>
            <Link to="/admin" onClick={openMenu}>Admin</Link>
          </li>
        </ul>

      </div>
    )
  }

  return (
    <header>
      <Link to="/">
        <div className="title">
          <h1>I FABBRI</h1>
          <span>srl</span>
        </div>
      </Link>

      <button type="button" onClick={openMenu} className={"menu " + (menuOpen ? 'open' : 'closed')}>
        <div className="burger"></div>
      </button>
      <MainNavigation />
    </header>
  );
}

export default Header;
