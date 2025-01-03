import PropTypes from "prop-types";
import Collapse from "./Collapse";

const Detail = ({ accommodation }) => {
  const { description, equipments } = accommodation;

  return (
    <div className="detail">
      <Collapse title="Description" content={description} />
      <Collapse title="Équipements" content={equipments} />
    </div>
  );
};

Detail.propTypes = {
  accommodation: PropTypes.shape({
    description: PropTypes.string,
    equipments: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Detail;
