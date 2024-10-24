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

      {pictures.length > 1 && (
        <>
          <button type="button" className="prev-btn">
            <img src={prevBtn} alt="Bouton précédent" />
          </button>
          <button type="button" className="next-btn">
            <img src={nextBtn} alt="Bouton suivant" />
          </button>
          <div className="counter">
            <span>1 / {pictures.length}</span>
          </div>
        </>
      )}
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
