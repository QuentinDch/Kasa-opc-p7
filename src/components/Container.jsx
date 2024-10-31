import PropTypes from "prop-types";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";

const Container = ({ accommodation }) => {
  const { title, location, host, tags, rating } = accommodation;
  const ratingNumber = Number(rating);

  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>
        <p>{location}</p>
      </div>
      <div className="host">
        <p>
          {host.name.split(" ")[0]} <span>{host.name.split(" ")[1]}</span>
        </p>
        <div>
          <img src={host.picture} alt={host.name} />
        </div>
      </div>
      <div className="tags">
        <ul>
          {tags.map((tag) => (
            <li key={`${accommodation.id}-${tag}`}>{tag}</li>
            // La clé est une chaîne composée de l’id et du tag
          ))}
        </ul>
      </div>
      <div className="rate">
        {Array.from({ length: 5 }).map((_, index) => {
          const star = index + 1;
          if (star <= ratingNumber) {
            return (
              <span key={star}>
                <img src={starActive} alt="Étoile pleine" />
              </span>
            );
          }
          return (
            <span key={star}>
              <img src={starInactive} alt="Étoile vide" />
            </span>
          );
        })}
      </div>
    </div>
  );
};

Container.propTypes = {
  accommodation: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    host: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.string,
  }),
};

export default Container;
