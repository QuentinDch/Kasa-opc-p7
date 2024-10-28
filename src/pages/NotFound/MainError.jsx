import { Link } from "react-router-dom";

const MainError = () => {
  return (
    <main className="main-error">
      <h1>404</h1>
      <h2>
        Oups! La page que <span>vous demandez n&apos;existe pas</span>
      </h2>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </main>
  );
};

export default MainError;
