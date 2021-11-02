import '../styles/Header.css';

function Header() {
  return (
    <header>
        <div class="title">
          <h1>I FABBRI</h1>
          <span>srl</span>
        </div>

         <div class="menu">
          <div class="burger"></div>
          <div class="nav">
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
