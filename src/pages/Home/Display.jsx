import data from "../../data/logements.json";
import "../../sass/pages/Home/Display.scss";
import Card from "./Card";

const Display = () => {
  return (
    <div className="grid">
      {data.map((card) => (
        <Card key={card.id} cover={card.cover} title={card.title} />
      ))}
    </div>
  );
};

export default Display;
