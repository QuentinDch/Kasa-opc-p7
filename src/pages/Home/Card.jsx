import { Link } from "react-router-dom";

const Card = ({ id, cover, title }) => {
  return (
    <article className="card">
      <Link
        to={`/accommodation/${id}`}
        aria-label={`Voir les détails de ${title}`}
      >
        <figure className="card-figure">
          <img src={cover} alt={title} loading="lazy" />
          <figcaption>{title}</figcaption>
        </figure>
      </Link>
    </article>
  );
};

export default Card;
