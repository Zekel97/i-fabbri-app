import '../styles/Header.css';

function Header() {
  return (
    <header>
        <div className="title">
          <h1>I FABBRI</h1>
          <span>srl</span>
        </div>

         <div className="menu">
          <div className="burger"></div>
          <div className="nav">
            <ul>
              <li><a href="#">Homepage</a></li>
              <li><a href="#">Residenziale</a></li>
              <li><a href="#">Industriale</a></li>
              <li><a href="#">Contatti</a></li>
            </ul>
          </div>
         </div>

    </header>
  );
}

export default Header;
