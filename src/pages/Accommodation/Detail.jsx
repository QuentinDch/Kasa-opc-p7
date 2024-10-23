import { useParams } from "react-router-dom";
import data from "../../data/logements.json";
import Collapse from "../../components/Collapse";

const Detail = () => {
  const { id } = useParams();
  const accommodation = data.find((item) => item.id === id);

  return (
    <div className="detail">
      <Collapse title="Description" content={accommodation.description} />
      <Collapse title="Equipements" content={accommodation.equipments} />
    </div>
  );
};

export default Detail;
