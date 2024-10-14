import { Link, NavLink } from "react-router-dom";
import "../sass/components/Navbar.scss";
import logo from "../assets/logoKasaSvg.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar__logo" aria-current="page">
          <img src={logo} alt="Logo Kasa" />
        </Link>
        <div className="navbar__links-wrapper">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            À Propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
