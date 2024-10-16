import logoFooter from "../assets/logoKasaWhiteSvg.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
