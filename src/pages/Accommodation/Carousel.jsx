import prevBtn from "../../assets/prev-btn.svg";
import nextBtn from "../../assets/next-btn.svg";
import PropTypes from "prop-types";

const Carousel = ({ accommodation }) => {
  const { pictures, title } = accommodation;

  return (
    <div className="carousel-wrapper">
      {pictures.map((picture) => (
        <img key={picture} src={picture} alt={title} />
      ))}
      <button type="button" className="prev-btn">
        <img src={prevBtn} alt="Bouton suivant" />
      </button>
      <button type="button" className="next-btn">
        <img src={nextBtn} alt="Bouton précédent" />
      </button>
    </div>
  );
};

Carousel.propTypes = {
  accommodation: PropTypes.shape({
    title: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Carousel;
