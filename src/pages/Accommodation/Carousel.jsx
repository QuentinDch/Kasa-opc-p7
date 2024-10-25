import prevBtn from "../../assets/prev-btn.svg";
import nextBtn from "../../assets/next-btn.svg";
import PropTypes from "prop-types";
import { useState } from "react";

const Carousel = ({ accommodation }) => {
  const { pictures, title } = accommodation;

  const [currentPicture, setCurrentPicture] = useState(0);

  function handleClickNext() {
    if (currentPicture + 1 >= pictures.length) {
      return setCurrentPicture(0);
    }
    setCurrentPicture(currentPicture + 1);
  }

  function handleClickPrev() {
    if (currentPicture === 0) {
      return setCurrentPicture(pictures.length - 1);
    }
    setCurrentPicture(currentPicture - 1);
  }

  return (
    <div className="carousel-wrapper">
      <img src={pictures[currentPicture]} alt={title} />

      {pictures.length > 1 && (
        <>
          <button
            type="button"
            className="prev-btn"
            aria-label="Image précédente"
            onClick={handleClickPrev}
          >
            <img src={prevBtn} alt="Bouton précédent" />
          </button>
          <button
            type="button"
            className="next-btn"
            aria-label="Image suivante"
            onClick={handleClickNext}
          >
            <img src={nextBtn} alt="Bouton suivant" />
          </button>
          <div className="counter">
            <span>
              {currentPicture + 1} / {pictures.length}
            </span>
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
