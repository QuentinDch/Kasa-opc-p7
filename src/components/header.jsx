import "../sass/components/header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/src/index.html" className="navbar__logo" aria-current="page">
          <img src="/src/assets/logoKasaSvg.svg" alt="Logo Kasa" />
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

export default Header;
