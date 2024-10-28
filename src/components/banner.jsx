import PropTypes from "prop-types";

const Banner = ({ image, title, overlay }) => {
  return (
    <div className="banner">
      <img src={image} alt="wild landscape" loading="lazy" />
      {overlay && <div className="overlay"></div>}
      {title && <h1>{title}</h1>}
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  overlay: PropTypes.bool,
};

export default Banner;
