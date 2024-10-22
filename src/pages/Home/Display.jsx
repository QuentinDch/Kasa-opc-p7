import data from "../../data/logements.json";
import Card from "./Card";

const Display = () => {
  return (
    <div className="grid">
      {data.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          cover={card.cover}
          title={card.title}
        />
      ))}
    </div>
  );
};

export default Display;
