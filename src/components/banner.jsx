const Banner = ({ image, title, overlay }) => {
  return (
    <div className="banner">
      <img src={image} alt="wild landscape" loading="lazy" />
      {overlay && <div className="overlay"></div>}
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default Banner;
