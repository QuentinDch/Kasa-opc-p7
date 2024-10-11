import "../sass/components/Navbar.scss";
import logo from "../assets/logoKasaSvg.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="/src/index.html" className="navbar__logo" aria-current="page">
          <img src={logo} alt="Logo Kasa" />
        </a>
        <div className="navbar__links-wrapper">
          <a href="/src/index.html" aria-current="page" className="active">
            Accueil
          </a>
          <a href="#">À Propos</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
