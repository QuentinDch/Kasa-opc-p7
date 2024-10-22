import img from "../../assets/Background.png";

const Container = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Cozy loft on the Canal Saint-Martin</h1>
        <p>Paris, Île-de-France</p>
      </div>
      <div className="host">
        <p>
          Alexandre <span>Dumas</span>
        </p>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="tags">
        <ul>
          <li>Cozy</li>
          <li>Canal</li>
          <li>Paris 10</li>
        </ul>
      </div>
      <div className="rate">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  );
};

export default Container;
