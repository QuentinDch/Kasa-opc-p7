import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

Card.propTypes = {
  id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
